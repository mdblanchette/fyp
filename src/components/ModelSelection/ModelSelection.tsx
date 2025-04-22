import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ButtonDefault from "../Buttons/ButtonDefault";

interface ChartData {
  dates: number[];
  cumulative_pnl: number[];
}

// Helper function to convert a YYYYMMDD number (e.g. 20060103)
// into a Unix timestamp (milliseconds).
const convertDateValue = (date: number): number => {
  const s = date.toString();
  // Format the date to "YYYY-MM-DD"
  const formatted = `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`;
  return new Date(formatted).getTime();
};

const ModelSelection: React.FC = () => {
  const [timeRange, setTimeRange] = useState("1M");
  const [model, setModel] = useState("model1"); // Default model
  const [chartData, setChartData] = useState<ChartData | null>(null);

  // Function to handle model change
  const handleModelChange = (newModel: string) => {
    setModel(newModel);
    
    // Dispatch custom event for other components to listen to
    const event = new CustomEvent('modelChanged', { 
      detail: { model: newModel } 
    });
    window.dispatchEvent(event);
  };

  // Fetch JSON data based on selected model
  useEffect(() => {
    let jsonPath = "";
    if (model === "model1") {
      jsonPath = "/model1.json";
    } else if (model === "model2") {
      jsonPath = "/model2.json";
    } else if (model === "model3") {
      jsonPath = "/model3.json";
    }
    // Fetch the JSON from the public folder
    fetch(jsonPath)
      .then((res) => res.json())
      .then((data: ChartData) => {
        console.log("Loaded JSON data:", data);
        setChartData(data);
      })
      .catch((err) => console.error("Error loading JSON data:", err));
  }, [model]);

  // Convert JSON into ApexCharts series data format:
  // We convert the dates from YYYYMMDD to timestamps in ms.
  const getAllSeriesData = () => {
    if (!chartData) return [];
    return chartData.dates.map((date, index) => [
      convertDateValue(date),
      chartData.cumulative_pnl[index],
    ]);
  };

  // Optional: Further filter data based on selected time range.
  // Note that currentTime is in milliseconds.
  const filterData = () => {
    return [
      {
        name: "Daily Portfolio PnL",
        data: getAllSeriesData(),
      },
    ];
  };

  const options: ApexOptions = {
    colors: ["#3C50E0"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      id: "area-datetime",
      type: "area",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: "straight",
      width: 1,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 10,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => value.toFixed(2), // Format y-axis values to 2 decimal places
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      y: {
        formatter: (value: number) => value.toFixed(2), // Format tooltip y values to 2 decimal places
      },
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    grid: {
      strokeDashArray: 7,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: { chart: { height: 300 } },
      },
      {
        breakpoint: 1366,
        options: { chart: { height: 320 } },
      },
    ],
  };

  // Handle time range button click
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  // Style for active/inactive period buttons
  const getPeriodButtonStyle = (period: string) => {
    return timeRange === period
      ? "bg-blue-600 text-white"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600";
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-5 pb-5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card sm:px-7.5 xl:col-span-8">
      <div>
        <div id="chartThirteen" className="-ml-5">
          <ReactApexChart
            options={options}
            series={filterData()}
            type="area"
            height={310}
          />
        </div>

        {/* Period selector bar */}
        <div className="mt-2 flex flex-wrap justify-center">
          <div className="inline-flex rounded-lg shadow-sm">
            {["5D", "1M", "3M", "6M", "YTD", "1Y", "MAX", "Custom"].map(
              (period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => handleTimeRangeChange(period)}
                  className={`px-3 py-1.5 text-xs font-medium ${getPeriodButtonStyle(
                    period
                  )} ${
                    period === "5D" ? "rounded-l-lg" : ""
                  } ${
                    period === "Custom" ? "rounded-r-lg" : ""
                  } ${
                    period !== "5D" && period !== "Custom"
                      ? "border-l border-gray-200 dark:border-gray-600"
                      : ""
                  }`}
                >
                  {period}
                </button>
              )
            )}
          </div>
        </div>

        {/* Model selection buttons */}
        <div className="mt-4 flex justify-around gap-4 sm:flex">
          <div>
            <ButtonDefault
              label="Model 1"
              link=""
              customClasses={`${model === "model1" ? "bg-blue-700" : "bg-blue-600"} text-white rounded-full px-10 py-3.5 lg:px-8 xl:px-10`}
              onClick={() => handleModelChange("model1")}
            />
          </div>
          <div>
            <ButtonDefault
              label="Model 2"
              link=""
              customClasses={`${model === "model2" ? "bg-green-700" : "bg-green-600"} text-white rounded-full px-10 py-3.5 lg:px-8 xl:px-10`}
              onClick={() => handleModelChange("model2")}
            />
          </div>
          <div>
            <ButtonDefault
              label="Model 3"
              link=""
              customClasses={`${model === "model3" ? "bg-purple-700" : "bg-purple-600"} text-white rounded-full px-10 py-3.5 lg:px-8 xl:px-10`}
              onClick={() => handleModelChange("model3")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSelection;