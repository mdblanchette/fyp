import React from "react";

const NotificationsTwo: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Notifications Style 2
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="max-w-[490px] rounded-lg border border-red-light-4 bg-red-light-6 py-4 pl-4 pr-5.5 dark:border-[#EA4E2C] dark:bg-[#1B1B24]">
          <div className="flex items-center justify-between">
            <div className="flex flex-grow items-center gap-5">
              <div className="flex h-15 w-full max-w-15 items-center justify-center rounded-[5px] bg-red">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 13.0208C3.75 9.02384 3.75 7.02535 4.22189 6.35301C4.69379 5.68067 6.57291 5.03745 10.3311 3.75099L11.0472 3.5059C13.0062 2.8353 13.9858 2.5 15 2.5C16.0142 2.5 16.9938 2.8353 18.9528 3.5059L19.6689 3.75099C23.4271 5.03745 25.3062 5.68067 25.7781 6.35301C26.25 7.02535 26.25 9.02384 26.25 13.0208V14.9892C26.25 22.0368 20.9513 25.4569 17.6268 26.9091C16.725 27.303 16.2741 27.5 15 27.5C13.7259 27.5 13.275 27.303 12.3732 26.9091C9.0487 25.4569 3.75 22.0368 3.75 14.9892V13.0208ZM15 9.0625C15.5178 9.0625 15.9375 9.48223 15.9375 10V15C15.9375 15.5178 15.5178 15.9375 15 15.9375C14.4822 15.9375 14.0625 15.5178 14.0625 15V10C14.0625 9.48223 14.4822 9.0625 15 9.0625ZM15 20C15.6904 20 16.25 19.4404 16.25 18.75C16.25 18.0596 15.6904 17.5 15 17.5C14.3096 17.5 13.75 18.0596 13.75 18.75C13.75 19.4404 14.3096 20 15 20Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-0.5 text-lg font-medium text-dark dark:text-[#EA4E2C]">
                  Uh oh, something went wrong
                </h4>
                <p className="text-body-sm font-medium">
                  Sorry! There was a problem with your request
                </p>
              </div>
            </div>

            <div>
              <button className="flex text-red-light">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsTwo;
