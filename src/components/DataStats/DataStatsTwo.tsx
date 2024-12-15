import React from "react";
import { dataStats } from "@/types/dataStats";

const dataStatsList = [
  {
    title: "Unique Visitors",
    value: "18.6K",
    growthRate: 18,
  },
  {
    title: "Total Pageviews",
    value: "55.9K",
    growthRate: 25,
  },
  {
    title: "Bounce Rate",
    value: "54%",
    growthRate: -7,
  },
  {
    title: "Visit Duration",
    value: "2m 56s",
    growthRate: 12,
  },
];

const DataStatsTwo: React.FC<dataStats> = () => {
  return (
    <div className="col-span-12 rounded-[10px] bg-white py-5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
        {dataStatsList.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 border-b border-stroke pb-5 last:border-b-0 last:pb-0 dark:border-dark-3 xl:border-b-0 xl:border-r xl:pb-0 last:xl:border-r-0"
          >
            <div>
              <div className="flex items-center gap-4.5">
                <h4 className="text-xl font-bold text-dark dark:text-white md:text-heading-5">
                  {item.value}
                </h4>

                <div
                  className={`flex items-center gap-1 text-body-sm font-medium ${
                    item.growthRate > 0 ? "text-green" : "text-yellow-dark"
                  }`}
                >
                  {item.growthRate > 0 ? (
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25259 5.86963L4.22834 9.89388L3.16751 8.83305L9.00282 2.99774L14.8381 8.83305L13.7773 9.89388L9.75306 5.86963L9.75306 15.0015L8.25259 15.0015L8.25259 5.86963Z"
                        fill=""
                      />
                    </svg>
                  ) : (
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1640_3988)">
                        <path
                          d="M9.75302 12.1304L13.7773 8.10612L14.8381 9.16695L9.00279 15.0023L3.16748 9.16695L4.22831 8.10612L8.25256 12.1304V2.99854H9.75302V12.1304Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1640_3988">
                          <rect
                            width="18.0056"
                            height="18.0056"
                            fill="white"
                            transform="translate(0 -0.00244141)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                  <span>{item.growthRate}%</span>
                </div>
              </div>

              <p className="-mt-1 text-body-sm font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataStatsTwo;
