import React from "react";
import Link from "next/link";

const PaginationOne: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Pagination Style 1
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-7.5">
        <nav>
          <ul className="flex flex-wrap items-center">
            <li>
              <Link
                className="flex h-8 w-8 items-center justify-center rounded-[3px] hover:bg-primary hover:text-white"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1758 16.1158C12.007 16.1158 11.8383 16.0596 11.7258 15.9189L5.36953 9.45019C5.11641 9.19707 5.11641 8.80332 5.36953 8.5502L11.7258 2.08145C11.9789 1.82832 12.3727 1.82832 12.6258 2.08145C12.8789 2.33457 12.8789 2.72832 12.6258 2.98145L6.71953 9.0002L12.6539 15.0189C12.907 15.2721 12.907 15.6658 12.6539 15.9189C12.4852 16.0314 12.3445 16.1158 12.1758 16.1158Z"
                    fill=""
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                3
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                4
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                5
              </Link>
            </li>
            <li>
              <Link
                className="flex h-9 w-7 items-center justify-center rounded-[3px] font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.92773 15.0674C2.41992 15.0674 2.8164 14.6641 2.8164 14.1787C2.8164 13.6865 2.41992 13.29 1.92773 13.29C1.44238 13.29 1.03906 13.6865 1.03906 14.1787C1.03906 14.6641 1.44238 15.0674 1.92773 15.0674ZM5.99998 15.0674C6.49217 15.0674 6.88865 14.6641 6.88865 14.1787C6.88865 13.6865 6.49217 13.29 5.99998 13.29C5.51463 13.29 5.11131 13.6865 5.11131 14.1787C5.11131 14.6641 5.51463 15.0674 5.99998 15.0674ZM10.0722 15.0674C10.5644 15.0674 10.9609 14.6641 10.9609 14.1787C10.9609 13.6865 10.5644 13.29 10.0722 13.29C9.58689 13.29 9.18357 13.6865 9.18357 14.1787C9.18357 14.6641 9.58689 15.0674 10.0722 15.0674Z"
                    fill=""
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded-[3px] px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                10
              </Link>
            </li>
            <li>
              <Link
                className="flex h-8 w-8 items-center justify-center rounded-[3px] hover:bg-primary hover:text-white"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.81953 16.1158C5.65078 16.1158 5.51016 16.0596 5.36953 15.9471C5.11641 15.6939 5.11641 15.3002 5.36953 15.0471L11.2758 9.0002L5.36953 2.98145C5.11641 2.72832 5.11641 2.33457 5.36953 2.08145C5.62266 1.82832 6.01641 1.82832 6.26953 2.08145L12.6258 8.5502C12.8789 8.80332 12.8789 9.19707 12.6258 9.45019L6.26953 15.9189C6.15703 16.0314 5.98828 16.1158 5.81953 16.1158Z"
                    fill=""
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginationOne;
