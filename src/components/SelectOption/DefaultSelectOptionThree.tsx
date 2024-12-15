import React, { useState } from "react";
import ClickOutside from "@/components/ClickOutside";

const DefaultSelectOptionThree = ({ options }: any) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <ClickOutside onClick={() => setIsOpen(false)}>
      <div className="relative z-20 inline-flex cursor-pointer appearance-none bg-transparent font-medium dark:border-dark-3">
        <div
          className={`py-1 pl-2.5 pr-6.5 font-medium text-dark dark:text-white ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <span
            className={`absolute right-1 top-1/2 z-10 -translate-y-1/2 ${isOpen && "rotate-180"}`}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.0002 12.8249C8.83145 12.8249 8.69082 12.7687 8.5502 12.6562L2.08145 6.2999C1.82832 6.04678 1.82832 5.65303 2.08145 5.3999C2.33457 5.14678 2.72832 5.14678 2.98145 5.3999L9.0002 11.278L15.0189 5.34365C15.2721 5.09053 15.6658 5.09053 15.9189 5.34365C16.1721 5.59678 16.1721 5.99053 15.9189 6.24365L9.45019 12.5999C9.30957 12.7405 9.16895 12.8249 9.0002 12.8249Z"
                fill=""
              />
            </svg>
          </span>
        </div>
        {isOpen && (
          <div className="absolute right-0 top-full z-40 mt-2 w-full rounded-[7px] border border-stroke bg-white py-1.5 shadow-2 dark:border-dark-3 dark:bg-dark-2 dark:shadow-card">
            <ul>
              {options.map((option: string, index: number) => (
                <li
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`flex w-full cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-left font-medium hover:text-dark dark:hover:text-white ${selectedOption === option ? "selected" : ""}`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default DefaultSelectOptionThree;
