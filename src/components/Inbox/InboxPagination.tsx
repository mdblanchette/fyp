import React from "react";

const InboxPagination = () => {
  return (
    <>
      <div className="flex items-center justify-between border-t border-stroke py-5.5 pl-11 pr-7.5 dark:border-dark-3">
        <p className="text-base font-medium text-dark dark:text-white">
          1-5 of 29
        </p>
        <div className="flex items-center justify-end space-x-3">
          <button className="flex h-7.5 w-7.5 items-center justify-center rounded border border-stroke bg-[#FAFBFF] hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white">
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.89775 4.10225C8.11742 4.32192 8.11742 4.67808 7.89775 4.89775L4.358 8.4375H15C15.3107 8.4375 15.5625 8.68934 15.5625 9C15.5625 9.31066 15.3107 9.5625 15 9.5625H4.358L7.89775 13.1023C8.11742 13.3219 8.11742 13.6781 7.89775 13.8977C7.67808 14.1174 7.32192 14.1174 7.10225 13.8977L2.60225 9.39775C2.38258 9.17808 2.38258 8.82192 2.60225 8.60225L7.10225 4.10225C7.32192 3.88258 7.67808 3.88258 7.89775 4.10225Z"
                fill=""
              />
            </svg>
          </button>
          <button className="flex h-7.5 w-7.5 items-center justify-center rounded border border-stroke bg-[#FAFBFF] hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white">
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1023 4.10225C10.3219 3.88258 10.6781 3.88258 10.8977 4.10225L15.3977 8.60225C15.6174 8.82192 15.6174 9.17808 15.3977 9.39775L10.8977 13.8977C10.6781 14.1174 10.3219 14.1174 10.1023 13.8977C9.88258 13.6781 9.88258 13.3219 10.1023 13.1023L13.642 9.5625H3C2.68934 9.5625 2.4375 9.31066 2.4375 9C2.4375 8.68934 2.68934 8.4375 3 8.4375H13.642L10.1023 4.89775C9.88258 4.67808 9.88258 4.32192 10.1023 4.10225Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default InboxPagination;
