import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Error Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Error page for NextAdmin Dashboard Kit",
};

const ErrorPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1148px]">
        <Breadcrumb pageName="Error Page" />

        <div className="rounded-[10px] bg-white px-5 py-10 shadow-1 dark:bg-gray-dark dark:shadow-card sm:py-17.5">
          <div className="mx-auto w-full max-w-[575px] px-4 sm:px-8 xl:px-0">
            <div className="relative z-1 lg:pt-15 xl:pt-20 2xl:pt-[187px]">
              <div className="absolute left-0 top-0 -z-1">
                <Image
                  src="/images/grids/grid-01.svg"
                  alt="grid"
                  width={575}
                  height={460}
                  className="dark:opacity-20"
                />
              </div>

              <div className="text-center">
                <div className="mx-auto mb-10 flex h-28.5 w-full max-w-[114px] items-center justify-center rounded-full border border-stroke bg-white text-dark shadow-error dark:border-dark-3 dark:bg-dark-2 dark:text-white">
                  <svg
                    className="fill-current"
                    width="50"
                    height="51"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.9993 6.26758C14.3564 6.26758 5.72852 14.8954 5.72852 25.5384C5.72852 36.1814 14.3564 44.8092 24.9993 44.8092C35.6423 44.8092 44.2702 36.1814 44.2702 25.5384C44.2702 14.8954 35.6423 6.26758 24.9993 6.26758ZM2.60352 25.5384C2.60352 13.1695 12.6305 3.14258 24.9993 3.14258C37.3682 3.14258 47.3952 13.1695 47.3952 25.5384C47.3952 37.9073 37.3682 47.9342 24.9993 47.9342C12.6305 47.9342 2.60352 37.9073 2.60352 25.5384ZM17.8189 34.6998C19.8448 33.1982 22.3223 32.3092 24.9993 32.3092C27.6764 32.3092 30.1539 33.1982 32.1798 34.6998C32.8731 35.2137 33.0185 36.1923 32.5046 36.8855C31.9907 37.5788 31.0122 37.7242 30.3189 37.2103C28.8015 36.0856 26.97 35.4342 24.9993 35.4342C23.0287 35.4342 21.1972 36.0856 19.6798 37.2103C18.9865 37.7242 18.008 37.5788 17.4941 36.8855C16.9802 36.1923 17.1256 35.2137 17.8189 34.6998Z"
                      fill=""
                    />
                    <path
                      d="M33.3327 22.4134C33.3327 24.1393 32.3999 25.5384 31.2493 25.5384C30.0988 25.5384 29.166 24.1393 29.166 22.4134C29.166 20.6875 30.0988 19.2884 31.2493 19.2884C32.3999 19.2884 33.3327 20.6875 33.3327 22.4134Z"
                      fill=""
                    />
                    <path
                      d="M20.8327 22.4134C20.8327 24.1393 19.8999 25.5384 18.7493 25.5384C17.5988 25.5384 16.666 24.1393 16.666 22.4134C16.666 20.6875 17.5988 19.2884 18.7493 19.2884C19.8999 19.2884 20.8327 20.6875 20.8327 22.4134Z"
                      fill=""
                    />
                  </svg>
                </div>

                <h1 className="mb-5 text-heading-4 font-black text-dark dark:text-white lg:text-heading-3">
                  Page not found
                </h1>

                <p className="mx-auto w-full max-w-[355px]">
                  The page you are looking for doesn’t exist. Here are some
                  helpful links:
                </p>

                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 rounded-[7px] bg-primary px-6 py-3 font-medium text-white hover:bg-opacity-90"
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
                      d="M15.7492 8.38125H3.73984L8.52109 3.51562C8.77422 3.2625 8.77422 2.86875 8.52109 2.61562C8.26797 2.3625 7.87422 2.3625 7.62109 2.61562L1.79922 8.52187C1.54609 8.775 1.54609 9.16875 1.79922 9.42188L7.62109 15.3281C7.73359 15.4406 7.90234 15.525 8.07109 15.525C8.23984 15.525 8.38047 15.4687 8.52109 15.3562C8.77422 15.1031 8.77422 14.7094 8.52109 14.4563L3.76797 9.64687H15.7492C16.0867 9.64687 16.368 9.36562 16.368 9.02812C16.368 8.6625 16.0867 8.38125 15.7492 8.38125Z"
                      fill=""
                    />
                  </svg>

                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ErrorPage;
