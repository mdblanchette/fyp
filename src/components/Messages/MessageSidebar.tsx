import React from "react";
import Image from "next/image";

const chatList = [
  {
    active: true,
    imgSrc: "/images/user/user-12.png",
    name: "Devid Heilo",
    message: "Hello, how are you?",
    textCount: 3,
  },
  {
    active: true,
    seen: true,
    imgSrc: "/images/user/user-13.png",
    name: "Henry Fisher",
    message: "I am waiting for you",
    textCount: 0,
  },
  {
    active: null,
    seen: true,
    imgSrc: "/images/user/user-22.png",
    name: "Wilium Smith",
    message: "Where are you now?",
    textCount: 0,
  },
  {
    active: true,
    imgSrc: "/images/user/user-23.png",
    name: "Henry Deco",
    message: `Thank you so much!`,
    textCount: 3,
  },
  {
    active: false,
    seen: true,
    imgSrc: "/images/user/user-24.png",
    name: "Jubin Jack",
    message: "Hello, how are you?",
    textCount: 0,
  },
];

const MessageSidebar = () => {
  return (
    <>
      <div className="sticky border-b border-stroke py-7.5 pl-6 pr-7.5 dark:border-dark-3">
        <h3 className="flex items-center justify-between text-lg font-medium text-dark dark:text-white 2xl:text-xl">
          Active Conversations
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-body-sm font-medium text-white">
            7
          </span>
        </h3>
      </div>
      <div className="flex max-h-full flex-col overflow-auto px-6 py-7.5">
        <form className="sticky mb-9">
          <input
            type="text"
            className="w-full rounded-[7px] border border-stroke bg-gray-2 py-2.5 pl-4.5 pr-12 text-body-sm text-dark outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            placeholder="Search..."
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1699_11536)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.625 2.0625C5.00063 2.0625 2.0625 5.00063 2.0625 8.625C2.0625 12.2494 5.00063 15.1875 8.625 15.1875C12.2494 15.1875 15.1875 12.2494 15.1875 8.625C15.1875 5.00063 12.2494 2.0625 8.625 2.0625ZM0.9375 8.625C0.9375 4.37931 4.37931 0.9375 8.625 0.9375C12.8707 0.9375 16.3125 4.37931 16.3125 8.625C16.3125 10.5454 15.6083 12.3013 14.4441 13.6487L16.8977 16.1023C17.1174 16.3219 17.1174 16.6781 16.8977 16.8977C16.6781 17.1174 16.3219 17.1174 16.1023 16.8977L13.6487 14.4441C12.3013 15.6083 10.5454 16.3125 8.625 16.3125C4.37931 16.3125 0.9375 12.8707 0.9375 8.625Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_1699_11536">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </form>
        <div className="no-scrollbar max-h-full overflow-auto">
          {/* <!-- Chat List Item --> */}
          {chatList.map((chat, item) => {
            return (
              <div
                key={item}
                className="flex cursor-pointer items-center rounded-lg py-3 hover:bg-gray-1 dark:hover:bg-dark-2 2xl:px-7.5"
              >
                <div className="relative mr-4.5 h-14 w-full max-w-14 rounded-full">
                  <Image
                    src={chat.imgSrc}
                    alt="profile"
                    className="h-full w-full object-cover object-center"
                    width={56}
                    height={56}
                  />
                  <span
                    className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-dark-2 ${
                      chat.active === true
                        ? "bg-green"
                        : chat.active === false
                          ? `bg-red-light`
                          : "bg-orange-light"
                    }`}
                  ></span>
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h5 className="font-medium text-dark dark:text-white">
                      {chat.name}
                    </h5>
                    <p>
                      <span
                        className={`mt-px text-body-sm font-medium ${chat.seen ? "text-dark-5 dark:text-dark-6" : "text-dark-3 dark:text-white/80"}`}
                      >
                        {chat.message}
                      </span>
                    </p>
                  </div>
                  {chat.textCount !== 0 && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary px-2 py-0.5">
                      <span className="text-body-sm font-medium text-white">
                        {" "}
                        {chat.textCount}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {/* <!-- Chat List Item --> */}
        </div>
      </div>
    </>
  );
};

export default MessageSidebar;
