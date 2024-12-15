import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOptionThree from "@/components/SelectOption/DefaultSelectOptionThree";

const ChartSeven: React.FC = () => {
  const series = [
    {
      name: "Series One",
      data: [268, 385, 201, 298, 187, 195, 291],
    },
    {
      name: "Series Two",
      data: [345, 160, 291, 187, 195, 298, 201],
    },
  ];

  const options: ApexOptions = {
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",

      markers: {
        radius: 99,
      },
    },
    grid: {
      strokeDashArray: 7,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      x: {
        show: false,
      },
    },
  };

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex flex-col gap-2 border-b border-stroke py-6 pl-7.5 pr-9 dark:border-dark-3 sm:flex-row sm:justify-between">
        <div>
          <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
            Campaigns
          </h2>
        </div>
        <div className="flex items-center">
          <p className="text-darl font-medium uppercase dark:text-white">
            Short by:
          </p>

          <DefaultSelectOptionThree options={["Weekly", "Monthly"]} />
        </div>
      </div>

      <div className="px-6 pt-4">
        <div id="chartNine" className="-ml-3">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartSeven;
