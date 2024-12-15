"use client";
import React from "react";
import DataStatsFive from "@/components/DataStats/DataStatsFive";
import MyStocks from "@/components/Stocks/MyStocks";
import TrendingStocks from "@/components/Stocks/TrendingStocks";
import LatestTransaction from "@/components/Stocks/LatestTransaction";
import ChartNine from "@/components/Charts/ChartNine";
import MarketMovers from "@/components/Stocks/MarketMovers";

const Stocks: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-9">
        {/* <!-- ====== Data Stats Start --> */}
        <DataStatsFive />
        {/* <!-- ====== Data Stats End --> */}

        {/* <!-- ====== Chart Twelve Start --> */}
        <ChartNine />
        {/* <!-- ====== Chart Twelve End --> */}

        {/* <!-- ====== My Stocks Start --> */}
        <MyStocks />
        {/* <!-- ====== My Stocks End --> */}

        {/* <!-- ====== Trending Stocks Start --> */}
        <TrendingStocks />
        {/* <!-- ====== Trending Stocks End --> */}

        {/* <!-- ====== Latest Transaction Start --> */}
        <LatestTransaction />
        {/* <!-- ====== Latest Transaction End --> */}

        {/* <!-- ====== Market Movers Start --> */}
        <MarketMovers />
        {/* <!-- ====== Market Movers End --> */}
      </div>
    </>
  );
};

export default Stocks;
