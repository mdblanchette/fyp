import React from "react";

const NotificationsThree: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Notifications Style 3
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="max-w-[557px] rounded-lg border border-stroke py-6 pl-4 pr-4.5 shadow-3 dark:border-dark-3 dark:bg-dark-2 dark:shadow-card sm:pl-6">
          <div className="flex justify-between">
            <div className="flex flex-grow gap-6">
              <div>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.02922 14.0455L12.3673 8.17621C15.1714 4.3823 16.5734 2.48535 17.8815 2.88622C19.1896 3.28708 19.1896 5.61369 19.1896 10.2669V10.7057C19.1896 12.384 19.1896 13.2231 19.7259 13.7495L19.7542 13.7768C20.3021 14.292 21.1755 14.292 22.9222 14.292C26.0656 14.292 27.6374 14.292 28.1685 15.2453C28.1773 15.2611 28.1859 15.277 28.1942 15.2931C28.6956 16.2612 27.7856 17.4924 25.9655 19.9549L21.6275 25.8241C18.8233 29.618 17.4213 31.515 16.1132 31.1141C14.8051 30.7132 14.8051 28.3866 14.8052 23.7333L14.8052 23.2948C14.8052 21.6164 14.8052 20.7773 14.269 20.2509L14.2406 20.2236C13.6927 19.7084 12.8193 19.7084 11.0725 19.7084C7.92915 19.7084 6.35745 19.7084 5.82627 18.755C5.81747 18.7392 5.80892 18.7233 5.80062 18.7073C5.29919 17.7392 6.2092 16.508 8.02922 14.0455Z"
                    fill="#5750F1"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-medium text-dark dark:text-white">
                  New update! available
                </h4>
                <p className="text-body-sm font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec ligula at dolor aliquam mollis.
                </p>
                <button className="mt-5 font-medium text-primary">
                  Update now
                </button>
              </div>
            </div>

            <div>
              <button className="hover:text-dark dark:hover:text-white">
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

export default NotificationsThree;
