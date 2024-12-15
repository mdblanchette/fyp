"use client";

import { useState } from "react";
import TaskPopup from "./TaskPopup";
import Image from "next/image";

const TaskHeader = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="flex flex-col gap-y-4 rounded-[10px] bg-white p-2.5 shadow-1 dark:bg-gray-dark dark:shadow-card sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="pl-2.5 text-heading-5 font-bold leading-[34px] text-dark dark:text-white">
          Tasks
        </h3>
      </div>
      <div className="flex flex-col gap-4 2xsm:flex-row 2xsm:items-center">
        <div className="flex -space-x-2">
          <button className="h-9 w-9 rounded-full border-2 border-white dark:border-dark-2">
            <Image
              width={36}
              height={36}
              src={"/images/user/user-07.png"}
              alt="User"
            />
          </button>
          <button className="h-9 w-9 rounded-full border-2 border-white dark:border-dark-2">
            <Image
              width={36}
              height={36}
              src={"/images/user/user-08.png"}
              alt="User"
            />
          </button>
          <button className="h-9 w-9 rounded-full border-2 border-white dark:border-dark-2">
            <Image
              width={36}
              height={36}
              src={"/images/user/user-09.png"}
              alt="User"
            />
          </button>
          <button className="h-9 w-9 rounded-full border-2 border-white dark:border-dark-2">
            <Image
              width={36}
              height={36}
              src={"/images/user/user-10.png"}
              alt="User"
            />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-white text-primary dark:border-dark-3 dark:bg-dark-2">
            <svg
              className="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6253 7.49984C10.6253 7.15466 10.3455 6.87484 10.0003 6.87484C9.65515 6.87484 9.37533 7.15466 9.37533 7.49984L9.37533 9.37486H7.50033C7.15515 9.37486 6.87533 9.65468 6.87533 9.99986C6.87533 10.345 7.15515 10.6249 7.50033 10.6249H9.37533V12.4998C9.37533 12.845 9.65515 13.1248 10.0003 13.1248C10.3455 13.1248 10.6253 12.845 10.6253 12.4998L10.6253 10.6249H12.5003C12.8455 10.6249 13.1253 10.345 13.1253 9.99986C13.1253 9.65468 12.8455 9.37486 12.5003 9.37486H10.6253V7.49984Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0003 1.0415C5.05278 1.0415 1.04199 5.05229 1.04199 9.99984C1.04199 14.9474 5.05278 18.9582 10.0003 18.9582C14.9479 18.9582 18.9587 14.9474 18.9587 9.99984C18.9587 5.05229 14.9479 1.0415 10.0003 1.0415ZM2.29199 9.99984C2.29199 5.74264 5.74313 2.2915 10.0003 2.2915C14.2575 2.2915 17.7087 5.74264 17.7087 9.99984C17.7087 14.257 14.2575 17.7082 10.0003 17.7082C5.74313 17.7082 2.29199 14.257 2.29199 9.99984Z"
                fill=""
              />
            </svg>
          </button>
        </div>

        <div>
          <button
            onClick={() => setPopupOpen(!popupOpen)}
            className="flex items-center gap-2 rounded-[7px] bg-primary px-5 py-2 font-medium text-white hover:bg-opacity-90"
          >
            <svg
              className="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6253 7.49984C10.6253 7.15466 10.3455 6.87484 10.0003 6.87484C9.65515 6.87484 9.37533 7.15466 9.37533 7.49984L9.37533 9.37486H7.50033C7.15515 9.37486 6.87533 9.65468 6.87533 9.99986C6.87533 10.345 7.15515 10.6249 7.50033 10.6249H9.37533V12.4998C9.37533 12.845 9.65515 13.1248 10.0003 13.1248C10.3455 13.1248 10.6253 12.845 10.6253 12.4998L10.6253 10.6249H12.5003C12.8455 10.6249 13.1253 10.345 13.1253 9.99986C13.1253 9.65468 12.8455 9.37486 12.5003 9.37486H10.6253V7.49984Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0003 1.0415C5.05278 1.0415 1.04199 5.05229 1.04199 9.99984C1.04199 14.9474 5.05278 18.9582 10.0003 18.9582C14.9479 18.9582 18.9587 14.9474 18.9587 9.99984C18.9587 5.05229 14.9479 1.0415 10.0003 1.0415ZM2.29199 9.99984C2.29199 5.74264 5.74313 2.2915 10.0003 2.2915C14.2575 2.2915 17.7087 5.74264 17.7087 9.99984C17.7087 14.257 14.2575 17.7082 10.0003 17.7082C5.74313 17.7082 2.29199 14.257 2.29199 9.99984Z"
                fill=""
              />
            </svg>
            Add task
          </button>

          {/* <!-- ===== Task Popup Star ===== --> */}
          {popupOpen && (
            <TaskPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
          )}
          {/* <!-- ===== Task Popup End ===== --> */}
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
