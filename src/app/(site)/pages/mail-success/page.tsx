import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js MailSuccess Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js MailSuccess page for NextAdmin Dashboard Kit",
};

const MailSuccess: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1148px]">
        <Breadcrumb pageName="Mail Success" />

        <div className="rounded-[10px] bg-white px-5 py-10 shadow-1 dark:bg-gray-dark dark:shadow-card sm:py-20">
          <div className="mx-auto w-full max-w-[588px] px-4 sm:px-8 xl:px-0">
            <div className="relative z-1 lg:pt-15 xl:pt-20 2xl:pt-[157px]">
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
                      d="M37.8 8.33311C35.3626 8.76671 32.0764 9.85767 27.4646 11.3949L17.0244 14.875C13.316 16.1111 10.63 17.0078 8.73286 17.8147C6.74939 18.6583 6.0438 19.2464 5.81464 19.6405C5.1088 20.8547 5.1088 22.3542 5.81464 23.5683C6.0438 23.9625 6.74939 24.5506 8.73286 25.3942C10.63 26.2011 13.316 27.0978 17.0244 28.3339C17.083 28.3534 17.1408 28.3726 17.1979 28.3916C17.9888 28.6547 18.6422 28.8721 19.2131 29.1706L30.3035 18.2024C30.932 17.5808 31.9455 17.5865 32.5671 18.215C33.1887 18.8435 33.1831 19.857 32.5545 20.4786L21.513 31.3984C21.8572 32.0064 22.0902 32.7068 22.3779 33.5716C22.3969 33.6287 22.4161 33.6866 22.4357 33.7451C23.6718 37.4535 24.5685 40.1395 25.3754 42.0367C26.219 44.0201 26.807 44.7257 27.2012 44.9549C28.4153 45.6607 29.9149 45.6607 31.129 44.9549C31.5232 44.7257 32.1112 44.0201 32.9548 42.0367C33.7617 40.1395 34.6584 37.4535 35.8945 33.7451L39.3746 23.305C40.9119 18.6931 42.0028 15.4069 42.4364 12.9695C42.8721 10.5204 42.5391 9.48012 41.9143 8.85525C41.2894 8.23038 40.2491 7.89744 37.8 8.33311ZM37.2394 5.18132C39.9523 4.69871 42.3956 4.80932 44.1779 6.59161C45.9602 8.3739 46.0708 10.8173 45.5882 13.5302C45.1085 16.2267 43.9388 19.7358 42.4578 24.1787L38.9059 34.8344C37.7007 38.4499 36.7643 41.2592 35.9007 43.2896C35.0677 45.2481 34.1428 46.9057 32.7379 47.7225C30.5291 49.0066 27.8011 49.0066 25.5922 47.7225C24.1874 46.9057 23.2625 45.2481 22.4295 43.2896C21.5659 41.2592 20.6295 38.45 19.4244 34.8345L19.3987 34.7574C18.9764 33.4908 18.8477 33.1472 18.6654 32.8749C18.4614 32.57 18.1995 32.3082 17.8947 32.1041C17.6223 31.9218 17.2787 31.7931 16.0121 31.3709L15.9349 31.3452C12.3195 30.14 9.5103 29.2036 7.47991 28.3401C5.52141 27.5071 3.86379 26.5822 3.04706 25.1773C1.76296 22.9684 1.76296 20.2404 3.04706 18.0316C3.86379 16.6267 5.52141 15.7018 7.47991 14.8688C9.51032 14.0052 12.3196 13.0688 15.9351 11.8637L26.5909 8.31173C31.0337 6.83075 34.5429 5.661 37.2394 5.18132Z"
                      fill=""
                    />
                  </svg>
                </div>

                <h1 className="mb-5 text-heading-4 font-black text-dark dark:text-white lg:text-heading-3">
                  Message Sent Successfully!
                </h1>

                <p className="mx-auto w-full max-w-[588px]">
                  Thank you so much for your message. We check e-mail frequently
                  and will try our best to respond to your inquiry.
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

export default MailSuccess;
