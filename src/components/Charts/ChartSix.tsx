import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import DropdownDefault from "../Dropdowns/DropdownDefault";

const ChartSix: React.FC = () => {
  const series = [
    {
      name: "Product One",
      data: [15, 12, 61, 118, 78, 125, 165, 61, 183, 238, 237, 235],
    },

    {
      name: "Product Two",
      data: [75, 77, 151, 72, 7, 58, 60, 185, 239, 135, 119, 124],
    },
  ];

  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#5750F1", "#0ABEF9"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 250,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: "smooth",
    },

    markers: {
      size: 0,
    },
    grid: {
      strokeDashArray: 7,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-6 pb-5 pt-6 shadow-1 dark:bg-gray-dark dark:shadow-card sm:px-7.5 xl:col-span-7">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Campaign Visitors
          </h4>
          <div className="mt-2.5 flex gap-3">
            <h3 className="text-heading-5 font-bold leading-[34px] text-dark dark:text-white">
              $560.93
            </h3>
            <span className="flex items-center gap-1 text-body-sm font-medium text-green">
              <svg
                className="fill-current"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9027 5.54395C10.9027 5.2678 11.1265 5.04395 11.4027 5.04395H15.1241C15.4002 5.04395 15.6241 5.2678 15.6241 5.54395V9.24117C15.6241 9.51731 15.4002 9.74117 15.1241 9.74117C14.848 9.74117 14.6241 9.51731 14.6241 9.24117V6.74585L10.5335 10.8115C10.2209 11.1222 9.95144 11.3901 9.70671 11.5758C9.44439 11.7748 9.15292 11.9253 8.79411 11.9253C8.43531 11.9252 8.14388 11.7746 7.8816 11.5755C7.63692 11.3898 7.36752 11.1219 7.05496 10.8111L6.87212 10.6293C6.52935 10.2884 6.30712 10.069 6.12207 9.92852C5.94859 9.79686 5.86748 9.78217 5.81377 9.78219C5.76005 9.78221 5.67896 9.79696 5.50557 9.92875C5.32062 10.0693 5.09855 10.289 4.75603 10.6301L2.14358 13.2316C1.94791 13.4264 1.63133 13.4258 1.43648 13.2301C1.24163 13.0344 1.24229 12.7178 1.43796 12.523L4.07366 9.89831C4.38628 9.58696 4.65572 9.31862 4.90045 9.13261C5.16279 8.93322 5.45434 8.78232 5.8134 8.78219C6.17246 8.78206 6.46413 8.93274 6.72661 9.13194C6.97147 9.31777 7.24111 9.58592 7.55395 9.89703L7.73679 10.0788C8.07927 10.4194 8.30129 10.6387 8.48617 10.779C8.65949 10.9105 8.74054 10.9253 8.79423 10.9253C8.84792 10.9253 8.92897 10.9106 9.10233 10.7791C9.28724 10.6388 9.50931 10.4196 9.85186 10.0791L13.9118 6.04395H11.4027C11.1265 6.04395 10.9027 5.82009 10.9027 5.54395Z"
                  fill=""
                />
              </svg>
              +2.5%
            </span>
          </div>
          <span className="mt-1 block font-medium">
            Average cost per interaction
          </span>
        </div>
        <DropdownDefault />
      </div>
      <div>
        <div id="chartSix" className="-ml-3.5 -mr-4">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartSix;
