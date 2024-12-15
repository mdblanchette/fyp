import React, { useRef } from "react";
import { FaqItem } from "@/types/faqItem";

const AccordionItemOne: React.FC<FaqItem> = ({ active, handleToggle, faq }) => {
  const contentEl = useRef<HTMLDivElement>(null);

  const { header, id, text } = faq;

  return (
    <div className="shadow-card-3 rounded-[5px] border border-stroke p-4 dark:border-dark-3 dark:shadow-card sm:p-6">
      <button
        className={`flex w-full items-center gap-1.5 sm:gap-3 xl:gap-6 ${
          active === id ? "active" : ""
        }`}
        onClick={() => handleToggle(Number(id))}
      >
        <div className="flex h-10.5 w-full max-w-10.5 items-center justify-center rounded-[5px] bg-[#F3F5FC] dark:bg-dark-2">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out dark:fill-white dark:stroke-white ${
              active === id ? "rotate-180" : ""
            }`}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3987 17.1546L20.3642 9.97156C20.7988 9.52335 20.5354 8.6665 19.9629 8.6665H6.03189C5.45944 8.6665 5.19598 9.52335 5.63062 9.97156L12.5961 17.1546C12.827 17.3927 13.1678 17.3927 13.3987 17.1546Z"
              fill=""
            />
          </svg>
        </div>

        <div>
          <h4 className="text-left text-lg font-medium leading-6 text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        ref={contentEl}
        className={`ml-16.5 mt-5 duration-200 ease-in-out ${
          active === id ? "block" : "hidden"
        }`}
      >
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
};

export default AccordionItemOne;
