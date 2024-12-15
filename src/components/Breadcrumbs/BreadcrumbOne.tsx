import React from "react";
import Link from "next/link";

const BreadcrumbOne: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Breadcrumb Style 1
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="rounded-[5px] border border-stroke p-4 py-3 dark:border-dark-3 sm:px-6 sm:py-5.5">
          <nav>
            <ol className="flex flex-wrap items-center gap-3">
              <li>
                <Link
                  className="flex items-center gap-3.5 font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-3 font-medium" href="#">
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.2234 4.55806C11.4675 4.31398 11.8632 4.31398 12.1073 4.55806L17.1073 9.55806C17.3514 9.80214 17.3514 10.1979 17.1073 10.4419L12.1073 15.4419C11.8632 15.686 11.4675 15.686 11.2234 15.4419C10.9793 15.1979 10.9793 14.8021 11.2234 14.5581L15.1565 10.625H3.33203C2.98685 10.625 2.70703 10.3452 2.70703 10C2.70703 9.65482 2.98685 9.375 3.33203 9.375H15.1565L11.2234 5.44194C10.9793 5.19786 10.9793 4.80214 11.2234 4.55806Z"
                      fill=""
                    />
                  </svg>

                  <span className="hover:text-primary">Projects</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2234 4.55806C11.4675 4.31398 11.8632 4.31398 12.1073 4.55806L17.1073 9.55806C17.3514 9.80214 17.3514 10.1979 17.1073 10.4419L12.1073 15.4419C11.8632 15.686 11.4675 15.686 11.2234 15.4419C10.9793 15.1979 10.9793 14.8021 11.2234 14.5581L15.1565 10.625H3.33203C2.98685 10.625 2.70703 10.3452 2.70703 10C2.70703 9.65482 2.98685 9.375 3.33203 9.375H15.1565L11.2234 5.44194C10.9793 5.19786 10.9793 4.80214 11.2234 4.55806Z"
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

export default BreadcrumbOne;
