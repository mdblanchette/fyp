import React from "react";

const StorageChart: React.FC = () => {
  return (
    <div className="relative rounded-[10px] bg-white py-8 pl-7.5 pr-12 shadow-1 dark:bg-gray-dark dark:shadow-card xl:py-11 2xl:pl-12 2xl:pr-16">
      <div className="flex flex-col gap-3 2xsm:flex-row 2xsm:items-center 2xl:gap-9">
        <div className="relative flex items-center justify-center">
          <svg className="h-33 w-33 -rotate-90 transform">
            <circle
              className="text-gray-3 dark:text-dark-3"
              strokeWidth="16"
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="66"
              cy="66"
            />
            <circle
              className="text-primary"
              strokeWidth="16"
              strokeDasharray={58 * 2 * Math.PI}
              strokeDashoffset={
                58 * 2 * Math.PI - (85 / 100) * 58 * 2 * Math.PI
              }
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="66"
              cy="66"
            />
          </svg>
          <span className="absolute text-xl font-bold text-dark dark:text-white">
            85%
          </span>
        </div>

        <div>
          <h3 className="text-heading-6 font-bold leading-[26px] text-dark dark:text-white">
            Available Storage
          </h3>
          <p className="mt-2.5 font-medium">
            <span className="text-dark dark:text-white">150</span>
            <span className="text-body-sm"> GB</span> /
            <span className="text-dark dark:text-white"> 512</span>
            <span className="text-body-sm"> GB</span>
          </p>
        </div>
      </div>

      <button className="absolute -right-5 top-1/2 -translate-y-1/2 rotate-[270deg] rounded-t-lg bg-red-light px-4.5 py-1 font-medium text-white">
        Clean
      </button>
    </div>
  );
};

export default StorageChart;
