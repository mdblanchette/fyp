import React, { useState } from "react";
import ClickOutside from "@/components/ClickOutside";

const PopoversTwo: React.FC = () => {
  const [popoversOpen, setPopoversOpen] = useState(false);

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Popover With Button
        </h3>
      </div>

      <div className="p-4 sm:p-5 xl:p-7.5">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
            <div className="mb-60 mt-10">
              <div className="relative inline-block">
                <button
                  onClick={() => setPopoversOpen(!popoversOpen)}
                  className="inline-flex rounded-[5px] bg-primary px-5 py-2.5 font-medium text-white"
                >
                  Popover Text
                </button>
                <ClickOutside onClick={() => setPopoversOpen(false)}>
                  {popoversOpen && (
                    <div
                      className={`absolute left-full top-0 z-20 ml-3 w-max max-w-[533px] rounded bg-white p-4 font-medium drop-shadow-5 dark:bg-dark-2 sm:p-5 xl:p-7.5`}
                    >
                      <span className="absolute -left-1 top-4 -z-10 h-2 w-2 rotate-45 rounded-r-sm bg-white dark:bg-dark-2"></span>
                      <h4 className="mb-4 text-heading-6 font-bold text-dark dark:text-white">
                        Do you want to add this?
                      </h4>
                      <p className="font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris facilisis congue justo nec facilisis. Quisque
                        quis augue ipsum. Aliquam suscipit dui ac dui commodo.
                      </p>
                      <p className="mt-4 font-medium">
                        Quisque quis augue ipsum. Aliquam suscipit dui ac dui.
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                        <button className="inline-block rounded bg-primary px-7.5 py-2 font-medium text-white hover:bg-opacity-90">
                          Yes
                        </button>
                        <button className="inline-block rounded bg-dark-5 px-7.5 py-2 font-medium text-white hover:bg-opacity-90 dark:bg-dark-6 dark:hover:bg-opacity-90">
                          No
                        </button>
                      </div>
                    </div>
                  )}
                </ClickOutside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopoversTwo;
