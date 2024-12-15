import React from "react";
import PopoversBottom from "./PopoversBottom";
import PopoversRight from "./PopoversRight";
import PopoversTop from "./PopoversTop";
import PopoversLeft from "./PopoversLeft";

const PopoversOne: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Popover in Four directions
        </h3>
      </div>

      <div className="p-4 sm:p-5 xl:p-7.5">
        <div className="-mx-4 flex flex-wrap justify-center">
          <PopoversBottom />
          <PopoversRight />
          <PopoversTop />
          <PopoversLeft />
        </div>
      </div>
    </div>
  );
};

export default PopoversOne;
