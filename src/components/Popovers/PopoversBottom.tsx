import React, { useState } from "react";
import ClickOutside from "@/components/ClickOutside";

const PopoversBottom: React.FC = () => {
  const [popoversOpen, setPopoversOpen] = useState(false);

  return (
    <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
      <div className="mt-10 text-center sm:mb-60">
        <div className="relative inline-block">
          <button
            onClick={() => setPopoversOpen(!popoversOpen)}
            className="inline-flex rounded-md bg-primary px-5 py-2.5 font-medium text-white"
          >
            Popover on Bottom
          </button>
          <ClickOutside onClick={() => setPopoversOpen(false)}>
            {popoversOpen && (
              <div
                className={`absolute left-1/2 top-full z-20 mt-3 w-max max-w-[311px] -translate-x-1/2 rounded bg-white drop-shadow-5 dark:bg-dark-2`}
              >
                <span className="absolute -top-1.5 left-1/2 -z-10 h-4 w-4 -translate-x-1/2 rotate-45 rounded-sm bg-white dark:bg-dark-2"></span>
                <div className="border-b border-stroke p-3 dark:border-dark-3">
                  <h4 className="text-center text-xl font-semibold text-dark dark:text-white">
                    Popover Title
                  </h4>
                </div>
                <div className="px-5 py-4.5 text-center">
                  <p className="font-medium">
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Mauris
                    facilisis congue exclamate justo nec facilisis.
                  </p>
                </div>
              </div>
            )}
          </ClickOutside>
        </div>
      </div>
    </div>
  );
};

export default PopoversBottom;
