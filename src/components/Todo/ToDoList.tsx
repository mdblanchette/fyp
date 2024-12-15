import Image from "next/image";
import DropdownDefault from "../Dropdowns/DropdownDefault";
import React from "react";

const todoData = [
  {
    logo: "/images/todo/uideck.svg",
    title: "Next.js Uideck Yearly Meetings",
    time: "10:20 AM - 3:00 PM",
    date: "14 February,2025",
    status: "Completed",
  },
  {
    logo: "/images/todo/dribble.svg",
    title: "Next.js 2025 Dribbble Meet Up",
    time: "09:30 AM - 12:00 AM",
    date: "14 February,2025",
    status: "Upcoming",
  },
  {
    logo: "/images/todo/linkdin.svg",
    title: "Next.js 2025 Linkedin Meet Up",
    time: "10:30 AM - 11:00 PM",
    date: "14 February,2025",
    status: "Canceled",
  },
];

const ToDoList: React.FC = () => {
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 md:px-6 md:py-6 xl:px-7.5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
                To Do List
              </h2>
            </div>
            <DropdownDefault />
          </div>
        </div>

        <div className="px-4 py-4 md:px-6 md:py-6 xl:px-7.5">
          <div className="flex flex-col gap-6">
            {/* <!-- To Do Item --> */}
            {todoData.map((todo, key) => (
              <div className="flex items-center justify-between" key={key}>
                <div className="flex flex-grow items-center gap-4.5">
                  <div className="hidden h-15 w-full max-w-15 items-center justify-center rounded-full border border-stroke bg-gray-1 dark:border-dark-3 dark:bg-dark-2 xsm:flex">
                    <Image
                      src={todo.logo}
                      width={32}
                      height={32}
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                      alt={todo.title}
                    />
                  </div>

                  <div>
                    <h4 className="mb-2 font-medium text-dark dark:text-white">
                      {todo.title}
                    </h4>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                      <span className="flex items-center gap-1.5">
                        <svg
                          className="fill-current"
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99984 2.10425C4.0198 2.10425 1.604 4.52004 1.604 7.50008C1.604 10.4801 4.0198 12.8959 6.99984 12.8959C9.97987 12.8959 12.3957 10.4801 12.3957 7.50008C12.3957 4.52004 9.97987 2.10425 6.99984 2.10425ZM0.729004 7.50008C0.729004 4.0368 3.53655 1.22925 6.99984 1.22925C10.4631 1.22925 13.2707 4.0368 13.2707 7.50008C13.2707 10.9634 10.4631 13.7709 6.99984 13.7709C3.53655 13.7709 0.729004 10.9634 0.729004 7.50008ZM6.99984 4.72925C7.24146 4.72925 7.43734 4.92512 7.43734 5.16675V7.31886L8.76753 8.64906C8.93838 8.81991 8.93838 9.09692 8.76753 9.26777C8.59668 9.43863 8.31967 9.43863 8.14881 9.26777L6.69048 7.80944C6.60843 7.72739 6.56234 7.61611 6.56234 7.50008V5.16675C6.56234 4.92512 6.75821 4.72925 6.99984 4.72925Z"
                            fill=""
                          />
                        </svg>

                        <span className="text-body-xs font-medium">
                          {todo.time}
                        </span>
                      </span>

                      <span className="flex items-center gap-1.5">
                        <svg
                          className="fill-current"
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.9165 8.66659C10.2387 8.66659 10.4998 8.40542 10.4998 8.08325C10.4998 7.76109 10.2387 7.49992 9.9165 7.49992C9.59434 7.49992 9.33317 7.76109 9.33317 8.08325C9.33317 8.40542 9.59434 8.66659 9.9165 8.66659Z"
                            fill=""
                          />
                          <path
                            d="M9.9165 10.9999C10.2387 10.9999 10.4998 10.7388 10.4998 10.4166C10.4998 10.0944 10.2387 9.83325 9.9165 9.83325C9.59434 9.83325 9.33317 10.0944 9.33317 10.4166C9.33317 10.7388 9.59434 10.9999 9.9165 10.9999Z"
                            fill=""
                          />
                          <path
                            d="M7.58317 8.08325C7.58317 8.40542 7.322 8.66659 6.99984 8.66659C6.67767 8.66659 6.4165 8.40542 6.4165 8.08325C6.4165 7.76109 6.67767 7.49992 6.99984 7.49992C7.322 7.49992 7.58317 7.76109 7.58317 8.08325Z"
                            fill=""
                          />
                          <path
                            d="M7.58317 10.4166C7.58317 10.7388 7.322 10.9999 6.99984 10.9999C6.67767 10.9999 6.4165 10.7388 6.4165 10.4166C6.4165 10.0944 6.67767 9.83325 6.99984 9.83325C7.322 9.83325 7.58317 10.0944 7.58317 10.4166Z"
                            fill=""
                          />
                          <path
                            d="M4.08317 8.66659C4.40534 8.66659 4.6665 8.40542 4.6665 8.08325C4.6665 7.76109 4.40534 7.49992 4.08317 7.49992C3.761 7.49992 3.49984 7.76109 3.49984 8.08325C3.49984 8.40542 3.761 8.66659 4.08317 8.66659Z"
                            fill=""
                          />
                          <path
                            d="M4.08317 10.9999C4.40534 10.9999 4.6665 10.7388 4.6665 10.4166C4.6665 10.0944 4.40534 9.83325 4.08317 9.83325C3.761 9.83325 3.49984 10.0944 3.49984 10.4166C3.49984 10.7388 3.761 10.9999 4.08317 10.9999Z"
                            fill=""
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.08317 1.52075C4.3248 1.52075 4.52067 1.71663 4.52067 1.95825V2.40317C4.90684 2.39574 5.33228 2.39575 5.80019 2.39575H8.19941C8.66733 2.39575 9.09284 2.39574 9.479 2.40317V1.95825C9.479 1.71663 9.67488 1.52075 9.9165 1.52075C10.1581 1.52075 10.354 1.71663 10.354 1.95825V2.44072C10.5056 2.45228 10.6492 2.46681 10.7851 2.48508C11.469 2.57703 12.0226 2.77076 12.4591 3.20731C12.8957 3.64386 13.0894 4.19741 13.1813 4.88132C13.2707 5.54586 13.2707 6.39497 13.2707 7.46699V8.69949C13.2707 9.77151 13.2707 10.6206 13.1813 11.2852C13.0894 11.9691 12.8957 12.5226 12.4591 12.9592C12.0226 13.3957 11.469 13.5895 10.7851 13.6814C10.1206 13.7708 9.27145 13.7708 8.19944 13.7708H5.80026C4.72825 13.7708 3.87911 13.7708 3.21457 13.6814C2.53066 13.5895 1.97711 13.3957 1.54056 12.9592C1.10402 12.5226 0.910282 11.9691 0.818333 11.2852C0.728988 10.6206 0.728995 9.77152 0.729004 8.69949V7.46701C0.728995 6.39498 0.728988 5.54586 0.818333 4.88132C0.910282 4.19741 1.10402 3.64386 1.54056 3.20731C1.97711 2.77076 2.53066 2.57703 3.21457 2.48508C3.35045 2.46681 3.49404 2.45228 3.64567 2.44072V1.95825C3.64567 1.71663 3.84155 1.52075 4.08317 1.52075ZM3.33117 3.35228C2.74428 3.43118 2.40615 3.57916 2.15928 3.82603C1.91241 4.0729 1.76443 4.41103 1.68553 4.99791C1.67217 5.09731 1.66099 5.20194 1.65165 5.31242H12.348C12.3387 5.20194 12.3275 5.09731 12.3141 4.99791C12.2352 4.41103 12.0873 4.0729 11.8404 3.82603C11.5935 3.57916 11.2554 3.43118 10.6685 3.35228C10.069 3.27168 9.27882 3.27075 8.1665 3.27075H5.83317C4.72086 3.27075 3.93064 3.27168 3.33117 3.35228ZM1.604 7.49992C1.604 7.00174 1.60419 6.56818 1.61164 6.18742H12.388C12.3955 6.56818 12.3957 7.00174 12.3957 7.49992V8.66659C12.3957 9.7789 12.3947 10.5691 12.3141 11.1686C12.2352 11.7555 12.0873 12.0936 11.8404 12.3405C11.5935 12.5873 11.2554 12.7353 10.6685 12.8142C10.069 12.8948 9.27882 12.8958 8.1665 12.8958H5.83317C4.72086 12.8958 3.93064 12.8948 3.33117 12.8142C2.74428 12.7353 2.40615 12.5873 2.15928 12.3405C1.91241 12.0936 1.76443 11.7555 1.68553 11.1686C1.60493 10.5691 1.604 9.7789 1.604 8.66659V7.49992Z"
                            fill=""
                          />
                        </svg>

                        <span className="text-body-xs font-medium">
                          {todo.date}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className={`rounded px-2.5 py-[5px] text-body-sm font-medium ${
                    todo.status === "Completed"
                      ? "bg-[#10B981]/[0.08] text-green"
                      : todo.status === "Upcoming"
                        ? "bg-primary/[0.08] text-primary"
                        : "bg-[#FB5454]/[0.08] text-red"
                  } `}
                >
                  {todo.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
