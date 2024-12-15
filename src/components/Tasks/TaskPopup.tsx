import React, { useState } from "react";
import ClickOutside from "@/components/ClickOutside";

interface TaskPopupProps {
  popupOpen: boolean;
  setPopupOpen: (open: boolean) => void;
}

const TaskPopup: React.FC<TaskPopupProps> = (props) => {
  const [files, setFiles] = useState<FileList | null>(null);

  return (
    <div
      className={`fixed left-0 top-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-[#111928]/70 px-4 py-5`}
    >
      <ClickOutside
        onClick={() => props.setPopupOpen(false)}
        className="w-full max-w-[730px]"
      >
        <div className="relative m-auto rounded-xl border border-stroke bg-gray-2 p-4 shadow-3 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-8 xl:p-10">
          <button
            onClick={() => props.setPopupOpen(false)}
            className="absolute right-1 top-1 sm:right-5 sm:top-5"
          >
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
                d="M12.8908 10.996L20.5038 3.38635C21.0315 2.85888 21.0315 2.02306 20.5038 1.49559C19.9763 0.968267 19.1405 0.968267 18.613 1.49559L10.9996 9.10559L3.38624 1.49559C2.85868 0.968267 2.02294 0.968267 1.49538 1.49559C0.967684 2.02306 0.967684 2.85888 1.49538 3.38635L9.10839 10.996L1.49538 18.6056C0.967684 19.1331 0.967684 19.9689 1.49538 20.4964C1.71682 20.7177 2.05849 20.9001 2.44081 20.9001C2.75323 20.9001 3.13233 20.7971 3.40557 20.4771L10.9996 12.8864L18.613 20.4964C18.8344 20.7177 19.1761 20.9001 19.5584 20.9001C19.8719 20.9001 20.2526 20.7964 20.526 20.4737C21.0314 19.9452 21.024 19.1256 20.5038 18.6056L12.8908 10.996Z"
                fill=""
              />
            </svg>
          </button>

          <form action="#">
            <div className="mb-5">
              <label
                htmlFor="taskTitle"
                className="mb-2.5 block font-medium text-dark dark:text-white"
              >
                Task title
              </label>
              <input
                type="text"
                name="taskTitle"
                id="taskTitle"
                placeholder="Enter task title"
                className="w-full rounded-[7px] border border-stroke bg-white px-4.5 py-3 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="taskDescription"
                className="mb-2.5 block font-medium text-dark dark:text-white"
              >
                Task description
              </label>
              <textarea
                name="taskDescription"
                id="taskDescription"
                cols={30}
                rows={7}
                placeholder="Enter task description"
                className="w-full rounded-[7px] border border-stroke bg-white px-4.5 py-3 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              ></textarea>
            </div>

            <div className="mb-5">
              <label
                htmlFor="taskList"
                className="mb-2.5 block font-medium text-black dark:text-white"
              >
                Task list
              </label>
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-2.5">
                  <input
                    type="text"
                    name="taskList"
                    id="taskList"
                    placeholder="Enter list text"
                    className="w-full rounded-[7px] border border-stroke bg-white px-4.5 py-3 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />

                  <button className="flex h-12.5 w-full max-w-12.5 items-center justify-center rounded-[7px] border border-stroke bg-white hover:text-primary dark:border-dark-3 dark:bg-dark-2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
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
                <div className="flex items-center gap-2.5">
                  <input
                    type="text"
                    name="taskList"
                    id="taskList"
                    placeholder="Enter list text"
                    className="w-full rounded-[7px] border border-stroke bg-white px-4.5 py-3 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />

                  <button className="ml-1.5 flex h-12.5 w-full max-w-12.5 items-center justify-center rounded-[7px] border border-stroke bg-white hover:text-primary dark:border-dark-3 dark:bg-dark-2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H15Z"
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
                  <button className="flex h-12.5 w-full max-w-12.5 items-center justify-center rounded-[7px] border border-stroke bg-white hover:text-primary dark:border-dark-3 dark:bg-dark-2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
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
                <div className="flex items-center gap-2.5">
                  <input
                    type="text"
                    name="taskList"
                    id="taskList"
                    placeholder="Enter list text"
                    className="w-full rounded-[7px] border border-stroke bg-white px-4.5 py-3 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />

                  <button className="ml-1.5 flex h-12.5 w-full max-w-12.5 items-center justify-center rounded-[7px] border border-stroke bg-white hover:text-primary dark:border-dark-3 dark:bg-dark-2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H15Z"
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
                  <button className="flex h-12.5 w-full max-w-12.5 items-center justify-center rounded-[7px] border border-stroke bg-white hover:text-primary dark:border-dark-3 dark:bg-dark-2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
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

            <div className="mb-5">
              <label
                htmlFor="taskImg"
                className="mb-2.5 block font-medium text-dark dark:text-white"
              >
                Add image
              </label>
              <div>
                <div
                  id="FileUpload"
                  className="relative block w-full appearance-none rounded-[7px] border border-dashed border-stroke bg-white px-4 py-4 dark:border-dark-3 dark:bg-dark-2 sm:py-14"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 z-50 m-0 h-full w-full p-0 opacity-0 outline-none"
                    onChange={(event) => setFiles(event.target.files)}
                  />
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="flex h-13.5 w-13.5 items-center justify-center rounded-full border border-stroke bg-primary/5 dark:border-dark-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_75_12841)">
                          <path
                            d="M2.5 15.8333H17.5V17.5H2.5V15.8333ZM10.8333 4.85663V14.1666H9.16667V4.85663L4.1075 9.91663L2.92917 8.73829L10 1.66663L17.0708 8.73746L15.8925 9.91579L10.8333 4.85829V4.85663Z"
                            fill="#3C50E0"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_75_12841">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <p className="text-body-sm">
                      <span className="text-primary">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                </div>

                {files !== null && (
                  <div className="mt-4.5 rounded-[7px] border border-stroke bg-white px-4 py-3 dark:border-dark-3 dark:bg-dark-2">
                    <div className="flex items-center justify-between">
                      <span>{files[0].name}</span>

                      <button onClick={() => setFiles(null)}>
                        <svg
                          className="fill-current"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill=""
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-[7px] bg-primary px-4.5 py-3.5 font-medium text-white hover:bg-opacity-90">
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
          </form>
        </div>
      </ClickOutside>
    </div>
  );
};

export default TaskPopup;
