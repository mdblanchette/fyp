"use client";
import React from "react";
import ChartFour from "../Charts/ChartFour";
import DataStatsTwo from "../DataStats/DataStatsTwo";
import ChartThree from "../Charts/ChartThree";
import TopContent from "../TopContent";
import TopChannels from "../TopChannels";
import TableTwo from "../Tables/TableTwo";
import MapTwo from "@/components/Maps/MapTwo";
import DatepickerBox from "@/components/DatepickerBox";
import DefaultSelectOptionTwo from "@/components/SelectOption/DefaultSelectOptionTwo";
import ECommerce from "@/components/Dashboard/E-commerce";

const Analytics: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 flex flex-wrap items-center justify-between gap-3">
          <DatepickerBox />

          <DefaultSelectOptionTwo options={["Monthly", "Yearly"]} />
        </div>
        <ChartFour />
        <DataStatsTwo />
        <MapTwo />
        <div className="col-span-12 xl:col-span-6">
          {/* <!-- ====== Top Content Star --> */}
          <TopContent />
          {/* <!-- ====== Top Content End --> */}

          {/* <!-- ====== Top Channels Star --> */}
          <TopChannels />
          {/* <!-- ====== Top Channels End --> */}
        </div>
        <ChartThree />

        {/* <!-- ====== Table Two Star --> */}
        <div className="col-span-12 xl:col-span-7">
          <TableTwo />
        </div>
        {/* <!-- ====== Table Two End --> */}
      </div>
    </>
  );
};

export default Analytics;
