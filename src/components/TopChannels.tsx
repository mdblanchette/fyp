import React from "react";
import DropdownDefault from "./Dropdowns/DropdownDefault";
import { TopData } from "@/types/topData";

const channelsList = [
  {
    url: "Google",
    view: "4.2k",
    unique: "3.9k",
    percent: 74,
  },
  {
    url: "Github",
    view: "1.9k",
    unique: "509",
    percent: 66,
  },
  {
    url: "Producthunt",
    view: "1.5k",
    unique: "986",
    percent: 58,
  },
  {
    url: "Facebook",
    view: "974",
    unique: "639",
    percent: 48,
  },
  {
    url: "Twitter",
    view: "179",
    unique: "57",
    percent: 39,
  },
];

const TopChannels: React.FC<TopData> = () => {
  return (
    <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-7.5">
      <div className="mb-6.5 flex items-center justify-between">
        <div>
          <h3 className="text-body-2xlg font-bold text-dark dark:text-white">
            Top Channels
          </h3>
        </div>

        <div>
          <DropdownDefault />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-10 py-2">
          <div className="col-span-6">
            <p className="text-body-sm font-medium">URL</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-body-sm font-medium">Views</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-body-sm font-medium">Uniques</p>
          </div>
        </div>

        {channelsList.map((item, index) => (
          <div key={index} className="relative z-1 grid grid-cols-10 py-2">
            <span
              className="absolute left-0 top-0 -z-1 h-full w-[74%] rounded bg-gray-2 dark:bg-dark-2"
              style={{ width: item.percent + "%" }}
            ></span>
            <div className="col-span-6 pl-3.5">
              <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                {item.url}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-center text-body-sm font-medium text-dark dark:text-dark-6">
                {item.view}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-right text-body-sm font-medium text-dark dark:text-dark-6">
                {item.unique}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopChannels;
