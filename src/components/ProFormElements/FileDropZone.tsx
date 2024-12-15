import Dropzone from "dropzone";
import { useEffect } from "react";

const FileDropZone = () => {
  useEffect(() => {
    let myDropzone = new Dropzone("#demo-upload", { url: "/file/post" });

    return () => {
      (myDropzone as any).destroy();
    };
  }, []);

  return (
    <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
        <h3 className="font-medium text-dark dark:text-white">
          File Drop Zone
        </h3>
      </div>
      <div className="p-6.5">
        <form
          className="dropzone dark:!border-strokedark rounded-md !border-dashed !border-[#DEE4EE] bg-gray hover:!border-primary dark:bg-dark-2 dark:hover:!border-primary"
          id="demo-upload"
          action="/upload"
        >
          <div className="dz-message">
            <div className="mb-2.5 flex justify-center">
              <div className="shadow-card-8 flex h-15 w-15 items-center justify-center rounded-full bg-white text-dark dark:bg-dark dark:text-white">
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2298_23087)">
                    <path
                      d="M18.75 13.7501C18.375 13.7501 18.0313 14.0626 18.0313 14.4688V17.2501C18.0313 17.5313 17.8125 17.7501 17.5313 17.7501H2.46875C2.1875 17.7501 1.96875 17.5313 1.96875 17.2501V14.4688C1.96875 14.0626 1.625 13.7501 1.25 13.7501C0.875 13.7501 0.53125 14.0626 0.53125 14.4688V17.2501C0.53125 18.3126 1.375 19.1563 2.4375 19.1563H17.5313C18.5938 19.1563 19.4375 18.3126 19.4375 17.2501V14.4688C19.4688 14.0626 19.125 13.7501 18.75 13.7501Z"
                      fill=""
                    />
                    <path
                      d="M5.96875 6.46881L9.3125 3.21881V14.0313C9.3125 14.4063 9.625 14.7501 10.0312 14.7501C10.4062 14.7501 10.75 14.4376 10.75 14.0313V3.21881L14.0937 6.46881C14.2187 6.59381 14.4063 6.65631 14.5938 6.65631C14.7813 6.65631 14.9688 6.59381 15.0938 6.43756C15.375 6.15631 15.3438 5.71881 15.0938 5.43756L10.5 1.06256C10.2187 0.812561 9.78125 0.812561 9.53125 1.06256L4.96875 5.46881C4.6875 5.75006 4.6875 6.18756 4.96875 6.46881C5.25 6.71881 5.6875 6.75006 5.96875 6.46881Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2298_23087">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <span className="font-medium text-dark dark:text-white">
              Drop files here to upload
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileDropZone;
