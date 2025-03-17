import { NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";

// PARTIAL top 100 list
const top100Tickers = [
  "AAPL",
  "MSFT",
  "AMZN",
  "GOOGL",
  "TSLA",
  "NVDA",
  "META",
  "BRK-B",
  "V",
  "JNJ",
  // ... fill in more for full top 100 ...
  // currently hard-coded
];

export async function GET() {
  const results: any[] = [];

  // Get today's date and 5 days prior
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 30); // last N calendar days

  for (const ticker of top100Tickers) {
    try {
      // 1) Quote
      const quoteRes = await yahooFinance.quote(ticker);
      // 2) Sector
      const summaryRes = await yahooFinance.quoteSummary(ticker, {
        modules: ["assetProfile"],
      });
      // 3) 5-day historical
      const histRes = await yahooFinance.historical(ticker, {
        period1: startDate,
        period2: endDate,
        interval: "1d",
      });

      // We only need closing prices, in chronological order
      // histRes returns oldest first, so we can map them
      const closes = histRes.map((entry) => entry.close);

      results.push({
        symbol: quoteRes.symbol,
        shortName: quoteRes.shortName,
        regularMarketPrice: quoteRes.regularMarketPrice,
        regularMarketChangePercent: quoteRes.regularMarketChangePercent,
        marketCap: quoteRes.marketCap,
        regularMarketVolume: quoteRes.regularMarketVolume,
        sector: summaryRes.assetProfile?.sector || null,
        fiveDayCloses: closes, // e.g. [151.3, 150.2, 149.8, 153.0, 152.6]
      });
    } catch (err) {
      console.warn(`Skipping ${ticker} due to error:`, err);
    }
  }

  return NextResponse.json({ stocks: results });
}
