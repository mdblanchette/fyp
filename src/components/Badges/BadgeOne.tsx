import React from "react";

const BadgeOne: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">Badge Style 1</h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4.5">
          <span className="inline-flex rounded bg-primary px-2 py-1 text-body-sm font-medium text-white hover:bg-opacity-90">
            Primary
          </span>
          <span className="inline-flex rounded bg-[#13C296] px-2 py-1 text-body-sm font-medium text-white hover:bg-opacity-90">
            Secondary
          </span>
          <span className="inline-flex rounded bg-dark px-2 py-1 text-body-sm font-medium text-white hover:bg-opacity-90">
            Dark
          </span>
          <span className="inline-flex rounded bg-dark-5 px-2 py-1 text-body-sm font-medium text-white hover:bg-opacity-90">
            Gray
          </span>
          <span className="inline-flex rounded bg-[#EFEFEF] px-2 py-1 text-body-sm font-medium text-dark hover:bg-opacity-90">
            Light
          </span>
          <span className="inline-flex rounded bg-[#F9C107] px-2 py-1 text-body-sm font-medium text-dark hover:bg-opacity-90">
            Warning
          </span>
          <span className="inline-flex rounded bg-[#DC3545] px-2 py-1 text-body-sm font-medium text-white hover:bg-opacity-90">
            Danger
          </span>
          <span className="inline-flex rounded bg-[#3CA745] px-2 py-1 text-body-sm font-medium text-white hover:bg-opacity-90">
            Success
          </span>
          <span className="inline-flex rounded bg-[#3BA2B8] px-2 py-1 text-body-sm font-medium text-white hover:bg-opacity-90">
            Info
          </span>
        </div>
      </div>
    </div>
  );
};

export default BadgeOne;
