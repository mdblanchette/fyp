"use client";
import React from "react";
import DataStatsThree from "../DataStats/DataStatsThree";
import ChartFive from "../Charts/ChartFive";
import TableFour from "../Tables/TableFour";
import ExternalLink from "../ExternalLink";
import ChartSix from "../Charts/ChartSix";
import FeaturedCampaigns from "../FeaturedCampaigns";
import Feedback from "../Feedback";
import DropdownDefaultTwo from "@/components/Dropdowns/DropdownDefaultTwo";

const Marketing: React.FC = () => {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
            Highlights
          </h2>
          <p className="font-medium">Latest social statistics</p>
        </div>
        <DropdownDefaultTwo />
      </div>

      <DataStatsThree />

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ExternalLink />
        <div className="col-span-12 xl:col-span-5">
          <ChartFive />
        </div>
        <TableFour />
        <div className="col-span-12 xl:col-span-7">
          <ChartSix />
        </div>
        <FeaturedCampaigns />
        <Feedback />
      </div>
    </>
  );
};

export default Marketing;
