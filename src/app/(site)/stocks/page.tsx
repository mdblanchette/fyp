import { Metadata } from "next";
import dynamic from "next/dynamic";

// -- PAGE METADATA (Server Component) --
export const metadata: Metadata = {
  title: "Stocks - Advanced Time Series Forecasting",
  description:
    "Stocks page with screener, watchlist, sorting, filtering, and live data from Yahoo Finance.",
};

// Dynamically import the client component (disable SSR)
const StocksClient = dynamic(() => import("./StocksClient"), { ssr: false });

export default function StocksPage() {
  return <StocksClient />;
}
