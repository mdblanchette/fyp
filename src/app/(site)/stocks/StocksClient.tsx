"use client";

import { useState, useEffect } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Sparklines, SparklinesLine } from "react-sparklines";

// Stock shape (including sector + 5-day closes)
interface Stock {
  name: string;       // e.g. "AAPL"
  price: number;      // e.g. 150.0
  change: number;     // e.g. +1.2
  marketCap: number;  // in billions
  volume: number;     // in millions
  sector: string | null;
  fiveDayCloses: number[]; // e.g. [150.1, 152.0, ...]
}

export default function StocksClient() {
  // 1) FILTER STATES
  const [sector, setSector] = useState("All Sectors");
  const [marketCap, setMarketCap] = useState("All");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [changeMin, setChangeMin] = useState("");
  const [changeMax, setChangeMax] = useState("");
  const [volumeMin, setVolumeMin] = useState("");
  const [volumeMax, setVolumeMax] = useState("");

  // 2) SORTING STATE
  const [sortConfig, setSortConfig] = useState<{ key: keyof Stock; direction: "asc" | "desc" } | null>(null);

  // 3) WATCHLIST (array of Stock)
  const [watchlist, setWatchlist] = useState<Stock[]>([]);
  const [watchlistSortAsc, setWatchlistSortAsc] = useState(true);

  // 4) MAIN STOCK DATA
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 5) FETCH from /api/stocks
  useEffect(() => {
    fetch("/api/stocks")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch stock data");
        return res.json();
      })
      .then((data) => {
        const valid: Stock[] = (data.stocks || [])
          .filter((s: any) => s && s.symbol)
          .map((s: any) => ({
            name: s.symbol,
            price: s.regularMarketPrice || 0,
            change: s.regularMarketChangePercent || 0,
            marketCap: s.marketCap ? s.marketCap / 1e9 : 0,
            volume: s.regularMarketVolume ? s.regularMarketVolume / 1e6 : 0,
            sector: s.sector,
            fiveDayCloses: s.fiveDayCloses || [],
          }));
        setStocks(valid);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 6) FILTER
  const filteredStocks = stocks.filter((stock) => {
    if (sector !== "All Sectors" && stock.sector !== sector) return false;

    if (marketCap !== "All") {
      if (marketCap === "Large" && stock.marketCap < 10) return false;
      if (marketCap === "Mid" && (stock.marketCap < 2 || stock.marketCap > 10)) return false;
      if (marketCap === "Small" && stock.marketCap >= 2) return false;
    }

    if (priceMin && stock.price < parseFloat(priceMin)) return false;
    if (priceMax && stock.price > parseFloat(priceMax)) return false;
    if (changeMin && stock.change < parseFloat(changeMin)) return false;
    if (changeMax && stock.change > parseFloat(changeMax)) return false;
    if (volumeMin && stock.volume < parseFloat(volumeMin)) return false;
    if (volumeMax && stock.volume > parseFloat(volumeMax)) return false;

    return true;
  });

  // 7) SORT
  const sortedStocks = [...filteredStocks];
  if (sortConfig !== null) {
    sortedStocks.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      } else if (typeof aVal === "string" && typeof bVal === "string") {
        return sortConfig.direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      return 0;
    });
  }

  // 8) WATCHLIST SORT
  const sortedWatchlist = [...watchlist].sort((a, b) => {
    return watchlistSortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  // 9) HANDLERS
  function handleSort(key: keyof Stock) {
    if (sortConfig && sortConfig.key === key) {
      const newDir = sortConfig.direction === "asc" ? "desc" : "asc";
      setSortConfig({ key, direction: newDir });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  }

  function getSortIndicator(key: keyof Stock) {
    if (!sortConfig || sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? "▲" : "▼";
  }

  function handleClear() {
    setSector("All Sectors");
    setMarketCap("All");
    setPriceMin("");
    setPriceMax("");
    setChangeMin("");
    setChangeMax("");
    setVolumeMin("");
    setVolumeMax("");
  }

  function handleAddToWatchlist(stock: Stock) {
    if (!watchlist.some((s) => s.name === stock.name)) {
      setWatchlist([...watchlist, stock]);
    }
  }

  function handleRemoveFromWatchlist(name: string) {
    setWatchlist(watchlist.filter((s) => s.name !== name));
  }

  function toggleWatchlistSort() {
    setWatchlistSortAsc(!watchlistSortAsc);
  }

  // 10) RENDER
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Stocks" />

        <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-100">
          COMP 4981 - WIL2 - ADVANCED TIME SERIES FORECASTING
        </h1>

        {loading ? (
          <p>Loading stock data...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* LEFT COLUMN */}
            <div className="flex-1 space-y-6">
              {/* SCREENER */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-100">
                  Screener
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {/* Sector */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300">
                      Sector
                    </label>
                    <select
                      className="w-full rounded border border-gray-300 bg-white p-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                    >
                      <option>All Sectors</option>
                      <option>Technology</option>
                      <option>Healthcare</option>
                      <option>Finance</option>
                      {/* ... */}
                    </select>
                  </div>

                  {/* Market Cap */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300">
                      Market Cap
                    </label>
                    <select
                      className="w-full rounded border border-gray-300 bg-white p-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                      value={marketCap}
                      onChange={(e) => setMarketCap(e.target.value)}
                    >
                      <option value="All">All</option>
                      <option value="Large">Large (10B+)</option>
                      <option value="Mid">Mid (2B-10B)</option>
                      <option value="Small">Small (&lt;2B)</option>
                    </select>
                  </div>

                  {/* Price Min/Max */}
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300">
                        Price Min
                      </label>
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceMin}
                        onChange={(e) => setPriceMin(e.target.value)}
                        className="w-full rounded border border-gray-300 bg-white p-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300">
                        Price Max
                      </label>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}
                        className="w-full rounded border border-gray-300 bg-white p-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                      />
                    </div>
                  </div>

                  {/* Change Min/Max */}
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300">
                        Change Min
                      </label>
                      <input
                        type="number"
                        placeholder="Min"
                        value={changeMin}
                        onChange={(e) => setChangeMin(e.target.value)}
                        className="w-full rounded border border-gray-300 bg-white p-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300">
                        Change Max
                      </label>
                      <input
                        type="number"
                        placeholder="Max"
                        value={changeMax}
                        onChange={(e) => setChangeMax(e.target.value)}
                        className="w-full rounded border border-gray-300 bg-white p-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                      />
                    </div>
                  </div>

                  {/* Volume Min/Max */}
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300">
                        Volume Min
                      </label>
                      <input
                        type="number"
                        placeholder="Min"
                        value={volumeMin}
                        onChange={(e) => setVolumeMin(e.target.value)}
                        className="w-full rounded border border-gray-300 bg-white p-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300">
                        Volume Max
                      </label>
                      <input
                        type="number"
                        placeholder="Max"
                        value={volumeMax}
                        onChange={(e) => setVolumeMax(e.target.value)}
                        className="w-full rounded border border-gray-300 bg-white p-2 text-sm text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={handleClear}
                    className="rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* STOCKS TABLE */}
              <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <table className="min-w-full table-auto text-left text-sm text-gray-600 dark:text-gray-200">
                  <thead>
                    <tr className="border-b border-gray-200 text-xs uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                      <th className="py-3 cursor-pointer" onClick={() => handleSort("name")}>
                        Name {getSortIndicator("name")}
                      </th>
                      <th className="py-3 cursor-pointer" onClick={() => handleSort("price")}>
                        Price {getSortIndicator("price")}
                      </th>
                      <th className="py-3 cursor-pointer" onClick={() => handleSort("change")}>
                        Change {getSortIndicator("change")}
                      </th>
                      <th className="py-3 cursor-pointer" onClick={() => handleSort("marketCap")}>
                        Market Cap {getSortIndicator("marketCap")}
                      </th>
                      <th className="py-3 cursor-pointer" onClick={() => handleSort("volume")}>
                        Volume {getSortIndicator("volume")}
                      </th>
                      <th className="py-3">Trend (5D)</th>
                      <th className="py-3">Add</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedStocks.map((stock) => (
                      <tr
                        key={stock.name}
                        className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="py-3">{stock.name}</td>
                        <td>${stock.price.toFixed(2)}</td>
                        <td className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
                          {stock.change >= 0
                            ? `+${stock.change.toFixed(2)}%`
                            : `${stock.change.toFixed(2)}%`}
                        </td>
                        <td>{stock.marketCap.toFixed(1)}B</td>
                        <td>{stock.volume.toFixed(1)}M</td>
                        <td>
                          {/* Sparkline for the last 5 closes */}
                          {stock.fiveDayCloses.length > 0 ? (
                            <Sparklines
                            data={stock.fiveDayCloses}
                            width={80}
                            height={24}
                            margin={4}
                            >
                            {/* Use SparklinesCurve for a smoother line */}
                            <SparklinesLine
                              style={{
                                stroke: stock.change >= 0 ? "green" : "red",
                                strokeWidth: 1,
                                fill: "none",
                              }}
                            />
                            </Sparklines>                          
                          ) : (
                            <div className="h-6 w-20 bg-gray-200" />
                          )}
                        </td>
                        <td>
                          <button
                            onClick={() => handleAddToWatchlist(stock)}
                            className="rounded bg-primary px-2 py-1 text-xs text-white"
                          >
                            +
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RIGHT COLUMN: WATCHLIST */}
            <div className="w-full lg:w-80">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                    Watchlist
                  </h2>
                  {/* Sort Button */}
                  <button
                    onClick={toggleWatchlistSort}
                    className="text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    {watchlistSortAsc ? "A→Z" : "Z→A"}
                  </button>
                </div>
                <ul className="space-y-3 text-sm">
                  {sortedWatchlist.map((w) => (
                    <li
                      key={w.name}
                      className="flex items-center justify-between border-b border-gray-100 pb-2 dark:border-gray-700"
                    >
                      {/* Align columns using flex widths */}
                      <div className="flex w-full items-center">
                        {/* Symbol (width ~ 3.5rem) */}
                        <div className="w-16 font-semibold">{w.name}</div>

                        {/* % Change (width ~ 4.5rem) */}
                        <div
                          className={`w-16 text-right ${
                            w.change >= 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {w.change >= 0
                            ? `+${w.change.toFixed(2)}%`
                            : `${w.change.toFixed(2)}%`}
                        </div>

                        {/* Price (width ~ 4.5rem) */}
                        <div className="w-16 text-right text-gray-700 dark:text-gray-200">
                          ${w.price.toFixed(2)}
                        </div>
                      </div>

                      {/* Remove button (far right) */}
                      <button
                        onClick={() => handleRemoveFromWatchlist(w.name)}
                        className="ml-3 text-sm text-red-500 hover:text-red-700"
                      >
                        -
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
