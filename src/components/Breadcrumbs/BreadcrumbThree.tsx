import React from "react";
import Link from "next/link";

const BreadcrumbThree: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Breadcrumb Style 3
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="rounded-[5px] border border-stroke bg-gray-1 p-4 py-3 dark:border-dark-3 dark:bg-dark-2 sm:px-6 sm:py-5.5 xl:px-7.5">
          <nav>
            <ol className="flex flex-wrap items-center gap-3">
              <li>
                <Link
                  className="flex items-center gap-3.5 font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3 font-medium" href="#">
                  <svg
                    className="fill-current"
                    width="6"
                    height="15"
                    viewBox="0 0 6 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.80682 0.818181L2.05682 14.75H0.255682L4.00568 0.818181H5.80682Z"
                      fill=""
                    />
                  </svg>

                  <span className="hover:text-primary">Projects</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <svg
                  className="fill-current"
                  width="6"
                  height="15"
                  viewBox="0 0 6 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.80682 0.818181L2.05682 14.75H0.255682L4.00568 0.818181H5.80682Z"
                    fill=""
                  />
                </svg>
                Marketing
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbThree;
