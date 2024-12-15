"use client";
import { useState } from "react";
import ClickOutside from "@/components/ClickOutside";

const DropdownFour = ({ classes }: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)}>
      <div>
        <button
          className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-body-sm text-dark shadow-1 hover:text-primary dark:bg-dark-2 dark:text-white dark:shadow-card"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Action
          <svg
            className="fill-current"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.50039 11.4C8.35039 11.4 8.22539 11.35 8.10039 11.25L2.35039 5.60005C2.12539 5.37505 2.12539 5.02505 2.35039 4.80005C2.57539 4.57505 2.92539 4.57505 3.15039 4.80005L8.50039 10.025L13.8504 4.75005C14.0754 4.52505 14.4254 4.52505 14.6504 4.75005C14.8754 4.97505 14.8754 5.32505 14.6504 5.55005L8.90039 11.2C8.77539 11.325 8.65039 11.4 8.50039 11.4Z"
              fill=""
            />
          </svg>
        </button>

        {dropdownOpen && (
          <div
            className={`absolute right-0 z-1 w-full max-w-[158px] rounded-[5px] bg-white py-2.5 shadow-card-7 dark:bg-dark-2 ${classes}`}
          >
            <button className="flex w-full px-4 py-2 text-body-sm hover:bg-[#F5F7FD] hover:text-primary dark:hover:bg-dark-3 dark:hover:text-white">
              Edit
            </button>
            <button className="flex w-full px-4 py-2 text-body-sm hover:bg-[#F5F7FD] hover:text-primary dark:hover:bg-dark-3 dark:hover:text-white">
              Delete
            </button>
            <button className="flex w-full px-4 py-2 text-body-sm hover:bg-[#F5F7FD] hover:text-primary dark:hover:bg-dark-3 dark:hover:text-white">
              Details
            </button>
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default DropdownFour;
