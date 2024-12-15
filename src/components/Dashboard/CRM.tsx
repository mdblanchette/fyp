"use client";
import React from "react";
import DataStatsFour from "../DataStats/DataStatsFour";
import ChartOne from "../Charts/ChartOne";
import LeadsReport from "../LeadsReport";
import ToDoList from "../Todo/ToDoList";
import ChartThree from "@/components/Charts/ChartThree";
import ChartSeven from "@/components/Charts/ChartSeven";

const CRM: React.FC = () => {
  return (
    <>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
            This Week’s Overview
          </h2>
        </div>

        <div className="flex items-center">
          <p className="font-medium uppercase text-dark dark:text-white">
            Short by:
          </p>
          <div className="relative z-20 inline-block">
            <select className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-2.5 pr-6.5 font-medium outline-none">
              <option value="CurrentWeek" className="dark:bg-gray-dark">
                Current Week
              </option>
              <option value="LastWeek" className="dark:bg-gray-dark">
                Last Week
              </option>
            </select>
            <span className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.32293 6.38394C3.5251 6.14807 3.88021 6.12075 4.11608 6.32293L9.00001 10.5092L13.8839 6.32293C14.1198 6.12075 14.4749 6.14807 14.6771 6.38394C14.8793 6.61981 14.8519 6.97492 14.6161 7.17709L9.36608 11.6771C9.15543 11.8576 8.84459 11.8576 8.63394 11.6771L3.38394 7.17709C3.14807 6.97492 3.12075 6.61981 3.32293 6.38394Z"
                  fill=""
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <DataStatsFour />

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-7">
          <ChartOne />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <ChartThree />
        </div>

        <LeadsReport />

        <div className="col-span-12 xl:col-span-5">
          <ChartSeven />
        </div>

        <ToDoList />
      </div>
    </>
  );
};

export default CRM;
