import React from "react";
import CountDownTimer from "@/components/CountDownTimer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Next.js Coming Soon Page | NextAdmin - Next.js Dashboard Kit`,
  description: `This is Coming Soon page for NextAdmin Dashboard Kit`,
};

const ComingSoon: React.FC = () => {
  return (
    <div className="relative z-10 overflow-hidden bg-white px-4 dark:bg-gray-dark sm:px-8">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="no-scrollbar overflow-y-auto py-20">
          <div className="mx-auto w-full max-w-[600px]">
            <div className="text-center">
              <Link href="/" className="mx-auto mb-10 inline-flex">
                <Image
                  width={176}
                  height={32}
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  priority
                  className="dark:hidden"
                />
                <Image
                  width={176}
                  height={32}
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  priority
                  className="hidden dark:block"
                />
              </Link>

              <h1 className="mb-2.5 text-3xl font-black text-dark dark:text-white lg:text-4xl xl:text-[50px] xl:leading-[60px]">
                Coming Soon
              </h1>

              <p className="font-medium text-dark-4 dark:text-dark-6">
                Our website is currently under construction, enter your email id
                to get latest updates and notifications about the website.
              </p>
            </div>
          </div>

          {/* <!-- Countdown timer start --> */}
          <div className="mt-10 flex justify-center">
            <CountDownTimer />
          </div>
          {/* <!-- Countdown timer start --> */}

          {/* <!-- form start --> */}
          <div className="mx-auto mt-12.5 w-full max-w-[580px]">
            <form>
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-md border-[1.5px] border-r-0 border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition placeholder:text-dark-4 focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:placeholder:text-dark-6 dark:focus:border-primary"
                />
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-r-md bg-primary px-4 py-3 font-medium text-white duration-200 ease-out hover:bg-opacity-90 sm:px-7.5"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          {/* <!-- form end --> */}

          {/* <!-- social link start --> */}
          <div className="mt-10 text-center">
            <p className="mb-5 font-medium text-dark dark:text-white">
              Follow Us On
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-full border border-[#DFE4EA] text-dark-4 hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 dark:hover:border-primary dark:hover:text-white"
              >
                <svg
                  className="fill-current"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3492 6.45H10.9492H10.4492V5.95V4.4V3.9H10.9492H11.9992C12.2742 3.9 12.4992 3.7 12.4992 3.4V0.75C12.4992 0.475 12.2992 0.25 11.9992 0.25H10.1742C8.19922 0.25 6.82422 1.65 6.82422 3.725V5.9V6.4H6.32422H4.62422C4.27422 6.4 3.94922 6.675 3.94922 7.075V8.875C3.94922 9.225 4.22422 9.55 4.62422 9.55H6.27422H6.77422V10.05V15.075C6.77422 15.425 7.04922 15.75 7.44922 15.75H9.79922C9.94922 15.75 10.0742 15.675 10.1742 15.575C10.2742 15.475 10.3492 15.3 10.3492 15.15V10.075V9.575H10.8742H11.9992C12.3242 9.575 12.5742 9.375 12.6242 9.075V9.05V9.025L12.9742 7.3C12.9992 7.125 12.9742 6.925 12.8242 6.725C12.7742 6.6 12.5492 6.475 12.3492 6.45Z"
                    fill=""
                  />
                </svg>
              </Link>

              <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-full border border-[#DFE4EA] text-dark-4 hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 dark:hover:border-primary dark:hover:text-white"
              >
                <svg
                  className="fill-current"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2539_14824)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.1884 15.5L7.40469 10.1069L2.668 15.5H0.664062L6.51566 8.83938L0.664062 0.5H5.80903L9.37512 5.58297L13.8433 0.5H15.8472L10.2672 6.85216L16.3333 15.5H11.1884ZM13.42 13.9795H12.0709L3.53338 2.02047H4.88269L8.30203 6.809L8.89328 7.63994L13.42 13.9795Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2539_14824">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-full border border-[#DFE4EA] text-dark-4 hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 dark:hover:border-primary dark:hover:text-white"
              >
                <svg
                  className="fill-current"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2261_18607)">
                    <path
                      d="M15.925 4.27495C15.75 3.59995 15.225 3.07495 14.55 2.89995C13.35 2.57495 8.5 2.57495 8.5 2.57495C8.5 2.57495 3.65 2.57495 2.45 2.89995C1.775 3.07495 1.25 3.59995 1.075 4.27495C0.75 5.49995 0.75 7.99995 0.75 7.99995C0.75 7.99995 0.75 10.525 1.075 11.7249C1.25 12.4 1.775 12.925 2.45 13.0999C3.65 13.425 8.5 13.4249 8.5 13.4249C8.5 13.4249 13.35 13.425 14.55 13.0999C15.225 12.925 15.75 12.4 15.925 11.7249C16.25 10.525 16.25 7.99995 16.25 7.99995C16.25 7.99995 16.25 5.49995 15.925 4.27495ZM6.95 10.325V5.67495L10.975 7.99995L6.95 10.325Z"
                      fill=""
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2261_18607">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href="#"
                className="flex size-10 items-center justify-center rounded-full border border-[#DFE4EA] text-dark-4 hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 dark:hover:border-primary dark:hover:text-white"
              >
                <svg
                  className="fill-current"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1761 1.33337H2.79977C2.26214 1.33337 1.83203 1.76348 1.83203 2.30112V13.699C1.83203 14.2151 2.26214 14.6667 2.79977 14.6667H14.1331C14.6707 14.6667 15.1009 14.2366 15.1009 13.699V2.27961C15.1439 1.76348 14.7138 1.33337 14.1761 1.33337ZM5.76752 12.6667H3.81053V6.32262H5.76752V12.6667ZM4.77828 5.4409C4.13312 5.4409 3.63848 4.92477 3.63848 4.30112C3.63848 3.67746 4.15462 3.16133 4.77828 3.16133C5.40193 3.16133 5.91806 3.67746 5.91806 4.30112C5.91806 4.92477 5.44494 5.4409 4.77828 5.4409ZM13.1869 12.6667H11.2299V9.59144C11.2299 8.86026 11.2084 7.89251 10.1976 7.89251C9.16537 7.89251 9.01483 8.70972 9.01483 9.52692V12.6667H7.05785V6.32262H8.97183V7.20434H8.99333C9.2729 6.68821 9.89656 6.17208 10.8643 6.17208C12.8643 6.17208 13.2299 7.46241 13.2299 9.22585V12.6667H13.1869Z"
                    fill=""
                  />
                </svg>
              </Link>
            </div>
          </div>
          {/* <!-- social link end --> */}
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10 flex h-screen w-full items-center justify-around">
        <div className="flex h-full gap-20">
          <span className="block h-full w-0.5 animate-line1">
            <span className="block h-55 w-0.5 bg-[#DEE4EE] dark:bg-dark-3"></span>
          </span>
          <span className="block h-full w-0.5 animate-line2">
            <span className="block h-36 w-0.5 bg-[#DEE4EE] dark:bg-dark-3"></span>
          </span>
          <span className="ml-10 block h-full w-0.5 animate-line3">
            <span className="block h-40 w-0.5 bg-[#DEE4EE] dark:bg-dark-3"></span>
          </span>
        </div>

        <div className="flex h-full gap-20">
          <span className="mr-10 block h-full w-0.5 animate-line1">
            <span className="block h-55 w-0.5 bg-[#DEE4EE] dark:bg-dark-3"></span>
          </span>
          <span className="block h-full w-0.5 animate-line2">
            <span className="block h-36 w-0.5 bg-[#DEE4EE] dark:bg-dark-3"></span>
          </span>
          <span className="block h-full w-0.5 animate-line3">
            <span className="block h-40 w-0.5 bg-[#DEE4EE] dark:bg-dark-3"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
