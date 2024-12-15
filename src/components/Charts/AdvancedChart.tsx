"use client";

import React from "react";
import ChartFour from "@/components/Charts/ChartFour";
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import ChartSix from "@/components/Charts/ChartSix";

const AdvancedChart: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartFour />
        <ChartOne />
        <ChartTwo />
        <ChartSix />
      </div>
    </>
  );
};

export default AdvancedChart;
