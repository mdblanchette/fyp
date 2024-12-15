import React, { useRef } from "react";
import { FaqItem } from "@/types/faqItem";

const AccordionItemTwo: React.FC<FaqItem> = ({ active, handleToggle, faq }) => {
  const contentEl = useRef<HTMLDivElement>(null);

  const { header, id, text } = faq;

  return (
    <div className="shadow-card-3 rounded-[5px] border border-stroke py-6 pl-4 pr-4 dark:border-dark-3 dark:shadow-card md:pl-6 md:pr-6 xl:pl-7.5">
      <button
        className={`flex w-full items-center justify-between gap-2 ${
          active === id ? "active" : ""
        }`}
        onClick={() => handleToggle(id)}
      >
        <div>
          <h4 className="text-left text-lg font-bold text-dark dark:text-white sm:text-heading-6">
            {header}
          </h4>
        </div>
        <div className="flex h-9 w-full max-w-9 items-center justify-center rounded-full">
          <svg
            className={`fill-primary duration-200 ease-in-out dark:fill-white ${
              active === id ? "hidden" : ""
            }`}
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0651 12.7502C18.0651 12.1634 17.5894 11.6877 17.0026 11.6877C16.4158 11.6877 15.9401 12.1634 15.9401 12.7502L15.9401 15.9377H12.7526C12.1658 15.9377 11.6901 16.4134 11.6901 17.0002C11.6901 17.587 12.1658 18.0627 12.7526 18.0627H15.9401V21.2502C15.9401 21.837 16.4158 22.3127 17.0026 22.3127C17.5894 22.3127 18.0651 21.837 18.0651 21.2502L18.0651 18.0627H21.2526C21.8394 18.0627 22.3151 17.587 22.3151 17.0002C22.3151 16.4134 21.8394 15.9377 21.2526 15.9377H18.0651V12.7502Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0026 1.771C8.59177 1.771 1.77344 8.58933 1.77344 17.0002C1.77344 25.411 8.59177 32.2293 17.0026 32.2293C25.4134 32.2293 32.2318 25.411 32.2318 17.0002C32.2318 8.58933 25.4134 1.771 17.0026 1.771ZM3.89844 17.0002C3.89844 9.76293 9.76537 3.896 17.0026 3.896C24.2398 3.896 30.1068 9.76293 30.1068 17.0002C30.1068 24.2374 24.2398 30.1043 17.0026 30.1043C9.76537 30.1043 3.89844 24.2374 3.89844 17.0002Z"
              fill=""
            />
          </svg>

          <svg
            className={`fill-primary duration-200 ease-in-out dark:fill-white ${
              active === id ? "block" : "hidden"
            }`}
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2526 18.0627C21.8394 18.0627 22.3151 17.587 22.3151 17.0002C22.3151 16.4134 21.8394 15.9377 21.2526 15.9377H12.7526C12.1658 15.9377 11.6901 16.4134 11.6901 17.0002C11.6901 17.587 12.1658 18.0627 12.7526 18.0627H21.2526Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0026 1.771C8.59177 1.771 1.77344 8.58933 1.77344 17.0002C1.77344 25.411 8.59177 32.2293 17.0026 32.2293C25.4134 32.2293 32.2318 25.411 32.2318 17.0002C32.2318 8.58933 25.4134 1.771 17.0026 1.771ZM3.89844 17.0002C3.89844 9.76293 9.76537 3.896 17.0026 3.896C24.2398 3.896 30.1068 9.76293 30.1068 17.0002C30.1068 24.2374 24.2398 30.1043 17.0026 30.1043C9.76537 30.1043 3.89844 24.2374 3.89844 17.0002Z"
              fill=""
            />
          </svg>
        </div>
      </button>

      <div
        ref={contentEl}
        className={`mt-5 duration-200 ease-in-out ${
          active === id ? "block" : "hidden"
        }`}
      >
        <p className="max-w-[830px] font-medium">{text}</p>
      </div>
    </div>
  );
};

export default AccordionItemTwo;
