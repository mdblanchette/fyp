import Link from "next/link";
import React from "react";

const ButtonsGroupOne: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">Buttons Group</h3>
      </div>

      <div className="p-4 sm:p-5 xl:p-7.5">
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <Link
              href="#"
              className="inline-flex border border-primary bg-primary px-6 py-[11px] font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary"
            >
              About
            </Link>
            <Link
              href="#"
              className="inline-flex border-y border-stroke px-6 py-[11px] font-medium text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="inline-flex border border-stroke px-6 py-[11px] font-medium text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary"
            >
              Services
            </Link>
          </div>

          <div className="flex items-center rounded-lg">
            <Link
              href="#"
              className="inline-flex rounded-l-lg border border-primary bg-primary px-6 py-[11px] font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary"
            >
              About
            </Link>
            <Link
              href="#"
              className="inline-flex border-y border-stroke px-6 py-[11px] font-medium text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="inline-flex rounded-r-lg border border-stroke px-6 py-[11px] font-medium text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary"
            >
              Services
            </Link>
          </div>

          <div className="flex items-center rounded-full">
            <Link
              href="#"
              className="inline-flex rounded-l-full border border-primary bg-primary px-6 py-[11px] font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary"
            >
              About
            </Link>
            <Link
              href="#"
              className="inline-flex border-y border-stroke px-6 py-[11px] font-medium text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="inline-flex rounded-r-full border border-stroke px-6 py-[11px] font-medium text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsGroupOne;
