import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOptionThree from "@/components/SelectOption/DefaultSelectOptionThree";

const ChartEight: React.FC = () => {
  const series = [
    {
      name: "Media",
      data: [268, 385, 201, 298, 187, 195, 291],
    },
    {
      name: "Photos",
      data: [345, 160, 291, 187, 195, 298, 201],
    },
    {
      name: "Docs",
      data: [195, 260, 191, 258, 265, 160, 213],
    },
  ];

  const options: ApexOptions = {
    colors: ["#5750F1", "#0ABEF9", "#FF9C55"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 318,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: 3,
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
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontSize: "16px",
      fontWeight: 500,
      offsetY: -5,

      markers: {
        radius: 99,
        width: 16,
        height: 16,
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
      <div className="flex flex-col gap-2 p-4 sm:flex-row sm:justify-between md:p-6 xl:p-7.5">
        <div>
          <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white">
            Activity Chart
          </h2>
        </div>
        <div className="flex items-center gap-2.5">
          <p className="font-medium uppercase text-dark dark:text-white">
            Short by:
          </p>

          <DefaultSelectOptionThree options={["Weekly", "Monthly"]} />
        </div>
      </div>

      <div className="px-7.5">
        <div id="chartTen" className="-ml-4">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={318}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartEight;
