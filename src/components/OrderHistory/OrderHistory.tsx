import React from "react";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";

interface StockData {
  symbol: string;
  price: number;
  changeRate: number;
  returnRate: number;
}

const dataList: StockData[] = [
  {
    symbol: "APPL",
    price: 6426.0,
    changeRate: 28.5,
    returnRate: 6.5,
  },
  {
    symbol: "TTE",
    price: 6426.0,
    changeRate: 320.98,
    returnRate: 12.6,
  },
  {
    symbol: "BS",
    price: 6426.0,
    changeRate: 184.9,
    returnRate: 9.5,
  },
  {
    symbol: "NFLX",
    price: 6426.0,
    changeRate: -32.0,
    returnRate: -3.1,
  },
  {
    symbol: "MS",
    price: 6426.0,
    changeRate: -52.0,
    returnRate: -1.5,
  },
  {
    symbol: "LM",
    price: 6426.0,
    changeRate: 423.5,
    returnRate: 4.2,
  },
];

const MarketMovers = () => {
  return (
    <>
      <div className="col-span-8 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex items-center justify-between px-4 pb-6 pt-7.5 sm:px-6 xl:px-7.5">
          <div>
            <h3 className="text-body-2xlg font-bold text-dark dark:text-white">
              Order History
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
                  Action
                </h5>
              </div>

              <div className="col-span-2 border-r border-stroke px-7.5 py-[15px] last:border-r-0 dark:border-dark-3">
                <h5 className="font-medium text-dark dark:text-white">
                  Amount
                </h5>
              </div>

              <div className="col-span-2 border-r border-stroke px-7.5 py-[15px] last:border-r-0 dark:border-dark-3">
                <h5 className="font-medium text-dark dark:text-white">
                  Balance
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
                    ${item.price}
                  </p>
                </div>

                <div
                  className={`${index === 0 && "!pt-6.5"} ${index === dataList.length - 1 && "!pb-7.5"} col-span-2 border-r border-stroke px-7.5 py-4.5 last:border-r-0 dark:border-dark-3`}
                >
                  <p
                    className={`mb-0.5 flex items-center gap-1.5 font-medium ${
                      item.changeRate >= 0 ? "text-green" : "text-red"
                    }`}
                  >
                    {item.changeRate >= 0 ? (
                      <svg
                        className="fill-current"
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.26422 0L10.268 7.5H0.260419L5.26422 0Z"
                          fill=""
                        />
                      </svg>
                    ) : (
                      <svg
                        className="fill-current"
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.2641 8L0.2603 0.500001L10.2679 0.5L5.2641 8Z"
                          fill=""
                        />
                      </svg>
                    )}
                    ${item.changeRate}
                  </p>
                </div>

                <div
                  className={`${index === 0 && "!pt-6.5"} ${index === dataList.length - 1 && "!pb-7.5"} col-span-2 border-r border-stroke px-7.5 py-4.5 last:border-r-0 dark:border-dark-3`}
                >
                  <p
                    className={`font-medium ${
                      item.returnRate >= 0 ? "text-green" : "text-red"
                    }`}
                  >
                    {item.returnRate}%
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
