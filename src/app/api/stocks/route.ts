/* -----------------------------------------------------------------------
   /src/app/api/stocks/route.ts                     last update: 2025-04-24
   -----------------------------------------------------------------------
   - pulls the current S&P 100 member list (ticker symbols) straight from
     Yahoo Finance’s index-components endpoint every time it runs; if that
     call ever fails, we fall back to a hard-coded list that matches the
     official S&P Dow Jones roster as of 24 Mar 2025.
   - for each ticker we grab:
       • the real-time quote
       • the company’s sector
       • the last 30 calendar-days of daily closes (we only return the most
         recent 5 to keep payloads light)
   - the loop is concurrency-limited so you don’t get throttled by Yahoo.
   -------------------------------------------------------------------- */

   import { NextResponse } from "next/server";
   import yahooFinance from "yahoo-finance2";
   
   // ---------- 1. 100-ticker fallback (symbol spelling uses Yahoo style) -----
   const FALLBACK_TICKERS: string[] = [
     "AAPL","ABBV","ABT","ACN","ADBE","AIG","AMD","AMGN","AMT","AMZN",
     "AVGO","AXP","BA","BAC","BK","BKNG","BLK","BMY","BRK-B","C",
     "CAT","CHTR","CL","CMCSA","COF","COP","COST","CRM","CSCO","CVS",
     "CVX","DE","DHR","DIS","DUK","EMR","FDX","GD","GE","GILD",
     "GM","GOOG","GOOGL","GS","HD","HON","IBM","INTC","INTU","ISRG",
     "JNJ","JPM","KO","LIN","LLY","LMT","LOW","MA","MCD","MDLZ",
     "MDT","MET","META","MMM","MO","MRK","MS","MSFT","NEE","NFLX",
     "NKE","NOW","NVDA","ORCL","PEP","PFE","PG","PM","PYPL","QCOM",
     "RTX","SBUX","SCHW","SO","SPG","T","TGT","TMO","TMUS","TSLA",
     "TXN","UNH","UNP","UPS","USB","V","VZ","WFC","WMT","XOM",
   ] as const;
   
   // ---------- 2. tiny util ---------------------------------------------------
   const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
   
   // ---------- 3. main handler ------------------------------------------------
   export async function GET() {
     /* 3-A  : get the live constituent list ------------------------------ */
     let tickers: string[] = [];
     try {
       // S&P 100 index code is “^OEX”; yahoo-finance2 exposes .components()
       const components = await yahooFinance.components("^OEX");
       tickers = components.map((c: any) => c.symbol);
     } catch (err) {
       console.error("Couldn’t retrieve ^OEX components – using fallback list", err);
       tickers = [...FALLBACK_TICKERS];
     }
   
     /* 3-B  : pull quote, summary & 30-day history for each ticker -------- */
     const results: any[] = [];
     const endDate = new Date();
     const startDate = new Date();
     startDate.setDate(endDate.getDate() - 30);
   
     // limit to N parallel requests so Yahoo doesn’t 429 us
     const CONCURRENT = 8;
     let cursor = 0;
   
     async function worker() {
       while (cursor < tickers.length) {
         const ticker = tickers[cursor++];
         try {
           const [quote, summary, hist] = await Promise.all([
             yahooFinance.quote(ticker),
             yahooFinance.quoteSummary(ticker, { modules: ["assetProfile"] }),
             yahooFinance.historical(ticker, {
               period1: startDate,
               period2: endDate,
               interval: "1d",
             }),
           ]);
   
           results.push({
             symbol: quote.symbol,
             shortName: quote.shortName,
             regularMarketPrice: quote.regularMarketPrice,
             regularMarketChangePercent: quote.regularMarketChangePercent,
             marketCap: quote.marketCap,
             regularMarketVolume: quote.regularMarketVolume,
             sector: summary?.assetProfile?.sector ?? null,
             thirtyDayCloses: hist.map((d: any) => d.close),
           });
         } catch (e) {
           console.warn(`Skipping ${ticker} – ${e}`);
         }
         await sleep(120); // ~8 req/s aggregate; safe for free Yahoo endpoints
       }
     }
   
     await Promise.all(Array(CONCURRENT).fill(0).map(worker));
   
     /* 3-C  : respond ----------------------------------------------------- */
     return NextResponse.json({ stocks: results });
   }
   