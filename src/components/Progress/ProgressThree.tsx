import React from "react";

const ProgressThree: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Progress Style 3
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex max-w-[470px] flex-col gap-7">
          <div className="relative h-4 w-full rounded-full bg-stroke dark:bg-dark-3">
            <div className="absolute left-0 flex h-full w-1/2 items-center justify-center rounded-full bg-primary">
              <p className="my-auto text-center text-[10px] font-bold leading-none text-white">
                50%
              </p>
            </div>
          </div>

          <div className="relative h-4 w-full rounded-full bg-stroke dark:bg-dark-3">
            <div className="absolute left-0 flex h-full w-4/5 items-center justify-center rounded-full bg-primary">
              <p className="my-auto text-center text-[10px] font-bold leading-none text-white">
                80%
              </p>
            </div>
          </div>

          <div className="relative h-4 w-full rounded-full bg-stroke dark:bg-dark-3">
            <div className="absolute left-0 flex h-full w-3/4 items-center justify-center rounded-full bg-primary">
              <p className="my-auto text-center text-[10px] font-bold leading-none text-white">
                75%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressThree;
