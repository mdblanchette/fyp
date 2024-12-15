import React from "react";
import Link from "next/link";

const PaginationThree: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Pagination Style 3
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-7.5">
        <nav>
          <ul className="shadow-card-5 inline-flex flex-wrap items-center gap-2 rounded-[5px] bg-white p-2.5 dark:bg-dark-2 dark:shadow-card">
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] bg-[#EDEFF1] px-2.5 py-1 text-xs font-medium text-dark hover:bg-primary hover:text-white dark:bg-dark-4 dark:text-white dark:hover:bg-primary dark:hover:text-white"
                href="#"
              >
                Previous
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-[7px] font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-[7px] font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-[7px] font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                3
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-[7px] font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                4
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-[7px] font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                5
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] bg-[#EDEFF1] px-2.5 py-1 text-xs font-medium text-dark hover:bg-primary hover:text-white dark:bg-dark-4 dark:text-white dark:hover:bg-primary dark:hover:text-white"
                href="#"
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginationThree;
