import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";
import ProgressOne from "../Progress/ProgressOne";

const ChartThree: React.FC = () => {
  const series = [65, 34, 12, 56];

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
    },
    colors: ["#5750F1", "#5475E5", "#8099EC", "#ADBCF2"],
    labels: ["AAPL", "NVDA", "AMZN", "JPMC"],
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          background: "transparent",
          labels: {
            show: true,
            total: {
              show: false,
              showAlways: true,
              label: "",
              fontSize: "16px",
              fontWeight: "400",
            },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: "bold",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 250,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-7 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <div className="justify-between gap-4 sm:flex">
        <div>
          <h4 className="mb-1 text-body-2xlg font-bold text-dark dark:text-white">
            Total Portfolio Value
          </h4>
        </div>
      </div>
      <div className="justify-between gap-4 sm:flex">
        <div>
          <h4 className="mb-1 text-3xl font-bold text-dark dark:text-white">
            HK$20,000
          </h4>
        </div>
        <div>
          <h4 className="text-xs font-medium text-dark dark:text-white">
            Open P&L
          </h4>
          <h4 className="text-xs font-medium text-dark dark:text-white">
            139.67 · +0.52%
          </h4>
        </div>
      </div>

      <div className="relative mb-9 h-2.5 w-full rounded-full bg-stroke dark:bg-dark-3">
        <div className="group absolute left-0 top-0 flex h-full w-9/12 rounded-l-full rounded-r-none bg-primary">
          <div className="absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded-[5px] bg-dark px-4.5 py-[7px] text-body-sm font-medium text-white opacity-0 group-hover:opacity-100">
            <span className="absolute left-1/2 top-[-3px] -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-dark"></span>
            <div className="flex items-center">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-primary"></span>
              Total Market Value: $16,000
            </div>
          </div>
        </div>
        <div className="group absolute right-0 top-0 flex h-full w-3/12 rounded-l-none rounded-r-full bg-orange-light">
          <div className="absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded-[5px] bg-dark px-4.5 py-[7px] text-body-sm font-medium text-white opacity-0 group-hover:opacity-100">
            <span className="absolute left-1/2 top-[-3px] -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-dark"></span>
            <div className="flex items-center">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-orange-light"></span>
              Total Cash: $4,000
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-body-xlg mb-1 font-bold text-dark dark:text-white">
            Day's P&L
          </h4>
        </div>
        <div>
          <h4 className="text-body-xlg mb-1 font-bold text-dark dark:text-white">
            139.67 · +0.52%
          </h4>
        </div>
      </div>

      <div className="mb-8">
        <div className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[350px]">
        <div className="-mx-7.5 flex flex-wrap items-center justify-center gap-y-2.5">
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> AAPL </span>
                <span> 65% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> NVDA </span>
                <span> 34% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light-2"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> AMZN </span>
                <span> 45% </span>
              </p>
            </div>
          </div>
          <div className="w-full px-7.5 sm:w-1/2">
            <div className="flex w-full items-center">
              <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-light-3"></span>
              <p className="flex w-full justify-between text-body-sm font-medium text-dark dark:text-dark-6">
                <span> JPMC </span>
                <span> 12% </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
