import React from "react";

const BadgeTwo: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">Badge Style 2</h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4.5">
          <span className="inline-flex rounded border border-primary px-2 py-[3px] text-body-sm font-medium text-primary hover:opacity-80">
            Primary
          </span>
          <span className="inline-flex rounded border border-[#13C296] px-2 py-[3px] text-body-sm font-medium text-[#13C296] hover:opacity-80">
            Secondary
          </span>
          <span className="inline-flex rounded border border-dark px-2 py-[3px] text-body-sm font-medium text-dark hover:opacity-80 dark:border-white dark:text-white">
            Dark
          </span>
          <span className="inline-flex rounded border border-dark-5 px-2 py-[3px] text-body-sm font-medium text-dark-5 hover:opacity-80">
            Gray
          </span>
          <span className="inline-flex rounded border border-[#EFEFEF] px-2 py-[3px] text-body-sm font-medium text-dark hover:opacity-80 dark:text-white">
            Light
          </span>
          <span className="inline-flex rounded border border-[#F9C107] px-2 py-[3px] text-body-sm font-medium text-[#F9C107] hover:opacity-80">
            Warning
          </span>
          <span className="inline-flex rounded border border-[#DC3545] px-2 py-[3px] text-body-sm font-medium text-[#DC3545] hover:opacity-80">
            Danger
          </span>
          <span className="inline-flex rounded border border-[#3CA745] px-2 py-[3px] text-body-sm font-medium text-[#3CA745] hover:opacity-80">
            Success
          </span>
          <span className="inline-flex rounded border border-[#3BA2B8] px-2 py-[3px] text-body-sm font-medium text-[#3BA2B8] hover:opacity-80">
            Info
          </span>
        </div>
      </div>
    </div>
  );
};

export default BadgeTwo;
