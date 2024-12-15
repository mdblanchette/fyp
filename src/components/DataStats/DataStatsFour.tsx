import React from "react";
import { dataStats } from "@/types/dataStats";

const dataStatsList = [
  {
    title: "Clients Added",
    value: 197,
    growthRate: +2.5,
    percent: 60,
  },
  {
    title: "Contracts Signed",
    value: 745,
    growthRate: -1.5,
    percent: 30,
  },
  {
    title: "Invoice Sent",
    value: 512,
    growthRate: +0.5,
    percent: 70,
  },
];

const DataStatsFour: React.FC<dataStats> = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
      {dataStatsList.map((item, index) => (
        <div
          key={index}
          className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5"
        >
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-heading-5 font-bold text-dark dark:text-white">
                {item.value}
              </h3>
              <p className="font-medium">{item.title}</p>
              <span className="mt-2 flex items-center gap-2">
                <span
                  className={`flex items-center gap-1 rounded-[5px] px-[5px] py-1 text-body-xs font-medium leading-[15px] text-white ${
                    item.growthRate > 0 ? "bg-green" : "bg-red"
                  }`}
                >
                  {item.growthRate > 0 ? (
                    <svg
                      className="fill-current"
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0158 5.24707H9.4939C9.2314 5.24707 9.01265 5.46582 9.01265 5.72832C9.01265 5.99082 9.2314 6.20957 9.4939 6.20957H11.6595L8.85953 8.09082C8.75015 8.17832 8.59703 8.17832 8.46578 8.09082L5.57828 6.1877C5.1189 5.88145 4.55015 5.88145 4.09078 6.1877L0.722027 8.44082C0.503277 8.59395 0.437652 8.9002 0.590777 9.11895C0.678277 9.2502 0.831402 9.3377 1.0064 9.3377C1.0939 9.3377 1.20328 9.31582 1.2689 9.2502L4.65953 6.99707C4.7689 6.90957 4.92203 6.90957 5.05328 6.99707L7.94078 8.92207C8.40015 9.22832 8.9689 9.22832 9.42828 8.92207L12.5127 6.84395V9.27207C12.5127 9.53457 12.7314 9.75332 12.9939 9.75332C13.2564 9.75332 13.4752 9.53457 13.4752 9.27207V5.72832C13.5189 5.46582 13.2783 5.24707 13.0158 5.24707Z"
                        fill=""
                      />
                    </svg>
                  ) : (
                    <svg
                      className="fill-current"
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0157 5.24707C12.7532 5.24707 12.5344 5.46582 12.5344 5.72832V8.15645L9.4063 6.07832C8.94693 5.77207 8.37818 5.77207 7.9188 6.07832L5.0313 8.00332C4.92193 8.09082 4.7688 8.09082 4.63755 8.00332L1.24693 5.7502C1.02818 5.59707 0.721929 5.6627 0.568804 5.88145C0.415679 6.1002 0.481304 6.40645 0.700054 6.55957L4.09068 8.8127C4.55005 9.11895 5.1188 9.11895 5.57818 8.8127L8.46568 6.8877C8.57505 6.8002 8.72818 6.8002 8.85943 6.8877L11.6594 8.76895H9.49381C9.23131 8.76895 9.01255 8.9877 9.01255 9.2502C9.01255 9.5127 9.23131 9.73145 9.49381 9.73145H13.0157C13.2782 9.73145 13.4969 9.5127 13.4969 9.2502V5.72832C13.5188 5.46582 13.2782 5.24707 13.0157 5.24707Z"
                        fill=""
                      />
                    </svg>
                  )}
                  <span>
                    {item.growthRate > 0 && "+"} {item.growthRate}%
                  </span>
                </span>

                <span className="text-body-sm font-medium">
                  Since last week
                </span>
              </span>
            </div>

            <div>
              <svg className="h-17.5 w-17.5 -rotate-90 transform">
                <circle
                  className="text-stroke dark:text-dark-3"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                />
                <circle
                  className="text-primary"
                  strokeWidth="10"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={
                    30 * 2 * Math.PI - (item.percent / 100) * 30 * 2 * Math.PI
                  }
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataStatsFour;
