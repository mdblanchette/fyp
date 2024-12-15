import React from "react";

const MessageInputBox = () => {
  return (
    <>
      <div className="sticky bottom-0 border-t border-stroke bg-white px-7.5 py-5 dark:border-dark-3 dark:bg-gray-dark">
        <form className="flex items-center justify-between space-x-4.5">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Type something here..."
              className="h-13 w-full rounded-[7px] border border-stroke bg-gray-1 py-2 pl-5 pr-22.5 text-dark outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            <div className="absolute right-4 top-1/2 inline-flex -translate-y-1/2 items-center justify-end gap-4.5">
              <button className="hover:text-primary">
                <svg
                  className="stroke-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25771 16.3231L14.491 9.39924C15.3595 8.56795 15.3595 7.22017 14.491 6.38888C13.6226 5.55759 12.2145 5.55759 11.3461 6.38888L4.16521 13.2625C2.51517 14.842 2.51517 17.4028 4.16521 18.9822C5.81526 20.5617 8.49051 20.5617 10.1405 18.9822L17.4263 12.0082C19.8579 9.68062 19.8579 5.90681 17.4263 3.5792C14.9946 1.25159 11.0522 1.25159 8.62051 3.5792L2.75 9.19855"
                    stroke=""
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button className="hover:text-primary">
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9987 2.521C6.31578 2.521 2.51953 6.31725 2.51953 11.0002C2.51953 15.6831 6.31578 19.4793 10.9987 19.4793C15.6816 19.4793 19.4779 15.6831 19.4779 11.0002C19.4779 6.31725 15.6816 2.521 10.9987 2.521ZM1.14453 11.0002C1.14453 5.55786 5.55639 1.146 10.9987 1.146C16.441 1.146 20.8529 5.55786 20.8529 11.0002C20.8529 16.4425 16.441 20.8543 10.9987 20.8543C5.55639 20.8543 1.14453 16.4425 1.14453 11.0002ZM7.69638 14.2574C7.92248 13.9524 8.35306 13.8884 8.65809 14.1145C9.32574 14.6094 10.1316 14.896 10.9987 14.896C11.8658 14.896 12.6717 14.6094 13.3393 14.1145C13.6443 13.8884 14.0749 13.9524 14.301 14.2574C14.5271 14.5625 14.4631 14.993 14.1581 15.2191C13.2667 15.8799 12.1766 16.271 10.9987 16.271C9.82081 16.271 8.73068 15.8799 7.8393 15.2191C7.53427 14.993 7.47028 14.5625 7.69638 14.2574Z"
                    fill=""
                  />
                  <path
                    d="M14.6654 9.62516C14.6654 10.3846 14.255 11.0002 13.7487 11.0002C13.2424 11.0002 12.832 10.3846 12.832 9.62516C12.832 8.86577 13.2424 8.25016 13.7487 8.25016C14.255 8.25016 14.6654 8.86577 14.6654 9.62516Z"
                    fill=""
                  />
                  <path
                    d="M9.16536 9.62516C9.16536 10.3846 8.75496 11.0002 8.2487 11.0002C7.74244 11.0002 7.33203 10.3846 7.33203 9.62516C7.33203 8.86577 7.74244 8.25016 8.2487 8.25016C8.75496 8.25016 9.16536 8.86577 9.16536 9.62516Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>

          <button className="flex h-13 w-full max-w-13 items-center justify-center rounded-md bg-primary text-white hover:bg-opacity-90">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6357 15.6701L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698C1.87731 8.91112 1.87731 9.95369 2.36806 10.7978C2.88392 11.6852 4.69923 12.2903 8.32987 13.5005C8.77981 13.6505 9.28601 13.5434 9.62294 13.2096L15.1286 7.75495C15.4383 7.44808 15.9382 7.45041 16.245 7.76015C16.5519 8.06989 16.5496 8.56975 16.2398 8.87662L10.8231 14.2432C10.4518 14.6111 10.3342 15.1742 10.4995 15.6701C11.7097 19.3007 12.3148 21.1161 13.2022 21.6319C14.0463 22.1227 15.0889 22.1227 15.933 21.6319C16.8204 21.1161 17.4255 19.3008 18.6357 15.6701Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default MessageInputBox;
