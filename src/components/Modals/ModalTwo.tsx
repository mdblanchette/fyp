import React, { useState } from "react";
import ClickOutside from "@/components/ClickOutside";

const ModalTwo: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(!modalOpen)}
        className="rounded-[7px] bg-primary px-9 py-3 font-medium text-white"
      >
        Modal 2
      </button>

      {modalOpen && (
        <div
          className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-[#111928]/90 px-4 py-5`}
        >
          <ClickOutside onClick={() => setModalOpen(false)}>
            <div className="w-full max-w-[550px] rounded-[15px] bg-white px-8 py-12 text-center shadow-3 dark:bg-gray-dark dark:shadow-card md:px-15 md:py-15">
              <span className="mx-auto flex h-15 w-full max-w-15 items-center justify-center rounded-full bg-[#DC2626] bg-opacity-10 text-[#DC2626]">
                <svg
                  className="fill-current"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 12.1529C3.5 8.42241 3.5 6.55715 3.94043 5.92964C4.38087 5.30212 6.13471 4.70178 9.6424 3.50109L10.3107 3.27233C12.1391 2.64644 13.0534 2.3335 14 2.3335C14.9466 2.3335 15.8609 2.64644 17.6893 3.27233L18.3576 3.50109C21.8653 4.70178 23.6191 5.30212 24.0596 5.92964C24.5 6.55715 24.5 8.42241 24.5 12.1529V13.9901C24.5 20.5678 19.5545 23.7599 16.4517 25.1153C15.61 25.483 15.1891 25.6668 14 25.6668C12.8109 25.6668 12.39 25.483 11.5483 25.1153C8.44546 23.7599 3.5 20.5678 3.5 13.9901V12.1529ZM14 8.4585C14.4832 8.4585 14.875 8.85025 14.875 9.3335V14.0002C14.875 14.4834 14.4832 14.8752 14 14.8752C13.5168 14.8752 13.125 14.4834 13.125 14.0002V9.3335C13.125 8.85025 13.5168 8.4585 14 8.4585ZM14 18.6668C14.6443 18.6668 15.1667 18.1445 15.1667 17.5002C15.1667 16.8558 14.6443 16.3335 14 16.3335C13.3557 16.3335 12.8333 16.8558 12.8333 17.5002C12.8333 18.1445 13.3557 18.6668 14 18.6668Z"
                    fill=""
                  />
                </svg>
              </span>
              <h3 className="mt-5.5 pb-2 text-xl font-bold text-dark dark:text-white sm:text-2xl">
                Deactivate Your Account
              </h3>
              <p className="mb-10 font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum been.
              </p>
              <div className="-mx-2.5 flex flex-wrap gap-y-4">
                <div className="w-full px-2.5 2xsm:w-1/2">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="block w-full rounded-[7px] border border-stroke bg-gray-2 p-[11px] text-center font-medium text-dark transition hover:border-gray-3 hover:bg-gray-3 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:border-dark-4 dark:hover:bg-dark-4"
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-full px-3 2xsm:w-1/2">
                  <button className="block w-full rounded-[7px] border border-[#DC2626] bg-[#DC2626] p-[11px] text-center font-medium text-white transition hover:bg-opacity-90">
                    Deactivate
                  </button>
                </div>
              </div>
            </div>
          </ClickOutside>
        </div>
      )}
    </div>
  );
};

export default ModalTwo;
