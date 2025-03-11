import React from "react";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";

interface StockData {
  symbol: string;
  prediction: string;
}

const dataList: StockData[] = [
  {
    symbol: "APPL",
    prediction: "Buy",
  },
  {
    symbol: "TTE",
    prediction: "Buy",
  },
  {
    symbol: "BS",
    prediction: "Buy",
  },
  {
    symbol: "NFLX",
    prediction: "Buy",
  },
  {
    symbol: "MS",
    prediction: "Buy",
  },
  {
    symbol: "LM",
    prediction: "Buy",
  },
];

const MarketMovers = () => {
  return (
    <>
      <div className="col-span-4 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex items-center justify-between px-4 pb-6 pt-7.5 sm:px-6 xl:px-7.5">
          <div>
            <h3 className="text-body-2xlg font-bold text-dark dark:text-white">
              Positions
            </h3>
          </div>
          <div>
            <DropdownDefault />
          </div>
        </div>

        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1080px]">
            {/* <!-- table header start --> */}
            <div className="grid grid-cols-12 border-y border-stroke  dark:border-dark-3">
              <div className="col-span-2 border-r border-stroke px-7.5 py-[15px] last:border-r-0 dark:border-dark-3">
                <h5 className="font-medium text-dark dark:text-white">Type</h5>
              </div>

              <div className="col-span-2 border-r border-stroke px-7.5 py-[15px] last:border-r-0 dark:border-dark-3">
                <h5 className="font-medium text-dark dark:text-white">
                  1-Day Open Prediction
                </h5>
              </div>
            </div>
            {/* <!-- table header end --> */}

            {dataList.map((item, index) => (
              <div key={index} className="group grid grid-cols-12">
                <div
                  className={`${index === 0 && "!pt-6.5"} ${index === dataList.length - 1 && "!pb-7.5"} col-span-2 border-r border-stroke px-7.5 py-4.5 last:border-r-0 dark:border-dark-3`}
                >
                  <p className="font-medium text-dark dark:text-white">
                    {item.symbol}
                  </p>
                </div>
                <div
                  className={`${index === 0 && "!pt-6.5"} ${index === dataList.length - 1 && "!pb-7.5"} col-span-2 border-r border-stroke px-7.5 py-4.5 last:border-r-0 dark:border-dark-3`}
                >
                  <p className="font-medium text-dark dark:text-white">
                    {item.prediction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketMovers;
