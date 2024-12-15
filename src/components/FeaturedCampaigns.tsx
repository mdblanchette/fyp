import React, { useState } from "react";
import DropdownDefault from "./Dropdowns/DropdownDefault";

interface FeaturedTab {
  icon: any;
  title: string;
  contentItem: {
    emailTitle: string;
    status: string;
    conversion: string;
  }[];
}

const tabItems: FeaturedTab[] = [
  {
    title: "Google",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_557_14701)">
          <path
            d="M17.9999 9.19956C18.0108 8.58084 17.9456 7.96308 17.8058 7.35962H9.18359V10.6996H14.2448C14.1489 11.2852 13.9331 11.8458 13.6105 12.3476C13.2878 12.8493 12.8649 13.282 12.3673 13.6195L12.3496 13.7314L15.076 15.8011L15.2648 15.8196C16.9993 14.2496 17.9996 11.9395 17.9996 9.19956"
            fill="#4285F4"
          />
          <path
            d="M9.18357 18C11.6631 18 13.7447 17.2 15.2653 15.82L12.3672 13.6199C11.5918 14.15 10.551 14.52 9.18357 14.52C8.02225 14.5134 6.89255 14.1485 5.95475 13.4772C5.01696 12.8058 4.31869 11.8621 3.95903 10.78L3.8514 10.789L1.01654 12.9389L0.979492 13.0399C1.74299 14.5311 2.9147 15.7848 4.36361 16.6607C5.81251 17.5367 7.48149 18.0004 9.18393 18"
            fill="#34A853"
          />
          <path
            d="M3.95909 10.7799C3.75822 10.2071 3.65457 9.60576 3.65226 9C3.65596 8.39523 3.75579 7.79471 3.94815 7.22006L3.94304 7.10075L1.07342 4.9162L0.979559 4.95995C0.335486 6.21312 0 7.59676 0 8.99991C0 10.4031 0.335486 11.7867 0.979559 13.0399L3.95909 10.7799Z"
            fill="#FBBC05"
          />
          <path
            d="M9.18393 3.48001C10.4999 3.45999 11.7726 3.94027 12.735 4.82007L15.3268 2.34002C13.6645 0.811712 11.4631 -0.0268481 9.18393 1.57224e-05C7.48152 -0.000381223 5.81255 0.463308 4.36364 1.33923C2.91473 2.21516 1.74301 3.4688 0.979492 4.95996L3.94915 7.22007C4.31236 6.13809 5.01294 5.19513 5.95212 4.52412C6.89129 3.85311 8.02169 3.48792 9.18393 3.48001Z"
            fill="#EB4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_557_14701">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    contentItem: [
      {
        emailTitle: "Best Headsets Giveaway",
        status: "In Queue",
        conversion: "0%(0)",
      },
      {
        emailTitle: "iPhone 14 Plus Giveaway",
        status: "Sent",
        conversion: "37%(247)",
      },
      {
        emailTitle: "Macbook Pro M1 Giveaway",
        status: "Sent",
        conversion: "18%(6.4k)",
      },
      {
        emailTitle: "Affiliation Program",
        status: "Sent",
        conversion: "12%(2.6K)",
      },
      {
        emailTitle: "Google AdSense",
        status: "In Draft",
        conversion: "0.01%(1)",
      },
    ],
  },
  {
    title: "Facebook",
    icon: (
      <svg
        width="9"
        height="18"
        viewBox="0 0 9 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.84172 17.9986V9.78978H8.4952L8.89246 6.59069H5.84172V4.54817C5.84172 3.62198 6.08943 2.99073 7.3686 2.99073L9 2.98995V0.128727C8.71772 0.0898825 7.74937 0.00280762 6.62277 0.00280762C4.27065 0.00280762 2.66034 1.4936 2.66034 4.2315V6.59078H0V9.78987H2.66026V17.9986L5.84172 17.9986Z"
          fill="#3162C9"
        />
      </svg>
    ),
    contentItem: [
      {
        emailTitle: "iPhone 14 Plus Giveaway",
        status: "Sent",
        conversion: "37%(247)",
      },
      {
        emailTitle: "Macbook Pro M1 Giveaway",
        status: "Sent",
        conversion: "18%(6.4k)",
      },
      {
        emailTitle: "Best Headsets Giveaway",
        status: "In Queue",
        conversion: "0%(0)",
      },
      {
        emailTitle: "Google AdSense",
        status: "In Draft",
        conversion: "0.01%(1)",
      },
      {
        emailTitle: "Affiliation Program",
        status: "Sent",
        conversion: "12%(2.6K)",
      },
    ],
  },
  {
    title: "Instagram",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8848 4.19609C14.8848 3.59786 14.3999 3.11483 13.8039 3.11483C13.2079 3.11483 12.7227 3.59786 12.7227 4.19609C12.7227 4.79211 13.2079 5.27515 13.8039 5.27515C14.3999 5.27515 14.8848 4.79211 14.8848 4.19609Z"
          fill="url(#paint0_linear_2252_15943)"
        />
        <path
          d="M16.3249 12.6363C16.2849 13.5139 16.1381 13.9907 16.0162 14.3074C15.8526 14.7273 15.6573 15.0275 15.3406 15.3424C15.0275 15.6573 14.7273 15.8521 14.3074 16.014C13.9907 16.1377 13.5121 16.2849 12.6346 16.3267C11.6858 16.3685 11.4047 16.3774 8.99888 16.3774C6.59528 16.3774 6.31193 16.3685 5.3632 16.3267C4.48566 16.2849 4.0093 16.1377 3.69259 16.014C3.2705 15.8521 2.97251 15.6573 2.6576 15.3424C2.34046 15.0275 2.14521 14.7273 1.98375 14.3074C1.86186 13.9907 1.71288 13.5139 1.67505 12.6363C1.62881 11.6876 1.62034 11.4021 1.62034 9.00112C1.62034 6.59528 1.62881 6.31193 1.67505 5.3632C1.71288 4.48566 1.86186 4.0093 1.98375 3.68992C2.14521 3.2705 2.34046 2.97204 2.6576 2.65713C2.97251 2.34269 3.2705 2.14741 3.69259 1.98375C4.0093 1.85966 4.48566 1.71465 5.3632 1.67285C6.31193 1.63101 6.59528 1.62034 8.99888 1.62034C11.4047 1.62034 11.6858 1.63101 12.6346 1.67285C13.5121 1.71465 13.9907 1.85966 14.3074 1.98375C14.7273 2.14741 15.0275 2.34269 15.3406 2.65713C15.6573 2.97204 15.8526 3.2705 16.0162 3.68992C16.1381 4.0093 16.2849 4.48566 16.3249 5.3632C16.369 6.31193 16.3796 6.59528 16.3796 9.00112C16.3796 11.4021 16.369 11.6876 16.3249 12.6363ZM17.9453 5.28938C17.9013 4.33041 17.75 3.67524 17.5254 3.10461C17.2968 2.51259 16.9903 2.01087 16.4886 1.50916C15.9891 1.00967 15.4874 0.703205 14.8954 0.47193C14.3225 0.249525 13.6696 0.096508 12.7102 0.0547085C11.7508 0.00844002 11.4443 0 8.99888 0C6.55568 0 6.24701 0.00844002 5.28761 0.0547085C4.33041 0.096508 3.67791 0.249525 3.10237 0.47193C2.51259 0.703205 2.01087 1.00967 1.51139 1.50916C1.00967 2.01087 0.703204 2.51259 0.472361 3.10461C0.249958 3.67524 0.0987422 4.33041 0.0524735 5.28938C0.0106748 6.24878 0 6.55568 0 9.00112C0 11.4443 0.0106748 11.7508 0.0524735 12.7102C0.0987422 13.6674 0.249958 14.3221 0.472361 14.8954C0.703204 15.4852 1.00967 15.9891 1.51139 16.4886C2.01087 16.9881 2.51259 17.2968 3.10237 17.5276C3.67791 17.75 4.33041 17.9013 5.28761 17.9453C6.24701 17.9893 6.55568 18 8.99888 18C11.4443 18 11.7508 17.9893 12.7102 17.9453C13.6696 17.9013 14.3225 17.75 14.8954 17.5276C15.4874 17.2968 15.9891 16.9881 16.4886 16.4886C16.9903 15.9891 17.2968 15.4852 17.5254 14.8954C17.75 14.3221 17.9013 13.6674 17.9453 12.7102C17.9893 11.7508 18 11.4443 18 9.00112C18 6.55568 17.9893 6.24878 17.9453 5.28938Z"
          fill="url(#paint1_linear_2252_15943)"
        />
        <path
          d="M8.99887 11.9985C7.34294 11.9985 5.99925 10.657 5.99925 9.00109C5.99925 7.34249 7.34294 5.99927 8.99887 5.99927C10.6553 5.99927 12.0007 7.34249 12.0007 9.00109C12.0007 10.657 10.6553 11.9985 8.99887 11.9985ZM8.99887 4.37669C6.44625 4.37669 4.37891 6.44847 4.37891 9.00109C4.37891 11.5515 6.44625 13.6211 8.99887 13.6211C11.5515 13.6211 13.6211 11.5515 13.6211 9.00109C13.6211 6.44847 11.5515 4.37669 8.99887 4.37669Z"
          fill="url(#paint2_linear_2252_15943)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2252_15943"
            x1="0.162409"
            y1="17.8139"
            x2="16.5008"
            y2="1.47551"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD521" />
            <stop offset="0.05" stopColor="#FFD521" />
            <stop offset="0.501119" stopColor="#F50000" />
            <stop offset="0.95" stopColor="#B900B4" />
            <stop offset="0.950079" stopColor="#B900B4" />
            <stop offset="1" stopColor="#B900B4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2252_15943"
            x1="0.162358"
            y1="17.8363"
            x2="16.5142"
            y2="1.48447"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD521" />
            <stop offset="0.05" stopColor="#FFD521" />
            <stop offset="0.501119" stopColor="#F50000" />
            <stop offset="0.95" stopColor="#B900B4" />
            <stop offset="0.950079" stopColor="#B900B4" />
            <stop offset="1" stopColor="#B900B4" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2252_15943"
            x1="0.166587"
            y1="17.8368"
            x2="16.5145"
            y2="1.48884"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD521" />
            <stop offset="0.05" stopColor="#FFD521" />
            <stop offset="0.501119" stopColor="#F50000" />
            <stop offset="0.95" stopColor="#B900B4" />
            <stop offset="0.950079" stopColor="#B900B4" />
            <stop offset="1" stopColor="#B900B4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    contentItem: [
      {
        emailTitle: "Best Headsets Giveaway",
        status: "In Queue",
        conversion: "0%(0)",
      },
      {
        emailTitle: "iPhone 14 Plus Giveaway",
        status: "Sent",
        conversion: "37%(247)",
      },
      {
        emailTitle: "Macbook Pro M1 Giveaway",
        status: "Sent",
        conversion: "18%(6.4k)",
      },
      {
        emailTitle: "Google AdSense",
        status: "In Draft",
        conversion: "0.01%(1)",
      },
      {
        emailTitle: "Affiliation Program",
        status: "Sent",
        conversion: "12%(2.6K)",
      },
    ],
  },
  {
    title: "Seranking",
    icon: (
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1.55217C0 0.694956 0.695478 0 1.55374 0H18.8723C19.7301 0 20.4261 0.697565 20.4261 1.55217V16.4478C20.4261 17.305 19.7306 18 18.8723 18H1.55374C0.696 18 0 17.3024 0 16.4478V1.55217ZM1.4087 2.18296V15.817C1.4087 16.2355 1.76087 16.5913 2.19548 16.5913H18.2306C18.6678 16.5913 19.0174 16.2449 19.0174 15.817V2.18296C19.0174 1.76452 18.6652 1.4087 18.2306 1.4087H2.19548C1.75826 1.4087 1.4087 1.75513 1.4087 2.18296ZM2.11304 9.23113C2.11304 8.8007 2.43652 8.45217 2.84035 8.45217H6.31565C6.71739 8.45217 7.04296 8.79861 7.04296 9.23113V15.887H2.11252V9.23113H2.11304ZM7.74783 6.41687C7.74783 5.98487 8.0713 5.63478 8.47513 5.63478H11.9504C12.3522 5.63478 12.6777 5.98122 12.6777 6.41687V15.887H7.7473V6.41687H7.74783ZM13.3826 3.5953C13.3826 3.16539 13.7061 2.81687 14.1099 2.81687H17.5852C17.987 2.81687 18.3125 3.16644 18.3125 3.5953V15.8864H13.3821V3.5953H13.3826Z"
          fill="#0080F7"
        />
      </svg>
    ),
    contentItem: [
      {
        emailTitle: "iPhone 14 Plus Giveaway",
        status: "Sent",
        conversion: "37%(247)",
      },
      {
        emailTitle: "Best Headsets Giveaway",
        status: "In Queue",
        conversion: "0%(0)",
      },
      {
        emailTitle: "Google AdSense",
        status: "In Draft",
        conversion: "0.01%(1)",
      },
      {
        emailTitle: "Macbook Pro M1 Giveaway",
        status: "Sent",
        conversion: "18%(6.4k)",
      },
      {
        emailTitle: "Affiliation Program",
        status: "Sent",
        conversion: "12%(2.6K)",
      },
    ],
  },
];

const FeaturedCampaigns: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const selectTab = (index: number) => {
    setActiveTab(index);
  };

  const activeClasses = "bg-primary/[0.08] text-primary border-primary";
  const inactiveClasses = "border-stroke dark:border-dark-3";

  return (
    <div className="col-span-12 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-6">
      <div className="flex items-start justify-between border-b border-stroke px-6 pb-4 pt-5 dark:border-dark-3">
        <div>
          <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
            Featured Campaigns
          </h2>
          <p className="text-body-sm font-medium">75% activity growth</p>
        </div>
        <DropdownDefault />
      </div>

      <div className="px-6 pb-7.5 pt-6">
        {/* <!-- Featured Tab Buttons --> */}
        <div className="mb-5.5 flex flex-wrap items-center gap-3.5">
          {tabItems.map((item, index) => (
            <button
              key={index}
              className={`inline-flex items-center gap-3 rounded-md border px-4.5 py-2 font-medium hover:bg-gray-2 dark:hover:bg-dark-2 ${
                activeTab === index ? activeClasses : inactiveClasses
              }`}
              onClick={() => selectTab(index)}
            >
              {item.icon}
              {item.title}
            </button>
          ))}
        </div>
        {/* <!-- Featured Tab Buttons --> */}

        <div>
          {/* <!-- Featured Table Titles --> */}
          <div className="grid gap-1 rounded bg-gray-1 px-4.5 py-3 dark:bg-dark-2 xsm:grid-cols-7 sm:grid-cols-5">
            <div className="xsm:col-span-3">
              <h4 className="text-body-sm font-medium uppercase">
                EMAIL TITLE
              </h4>
            </div>
            <div className="xsm:col-span-2 sm:col-span-1">
              <h4 className="text-body-sm font-medium uppercase">STATUS</h4>
            </div>
            <div className="xsm:col-span-2 sm:col-span-1">
              <h4 className="text-body-sm font-medium uppercase xsm:text-right">
                CONVERSION
              </h4>
            </div>
          </div>
          {/* <!-- Featured Table Titles --> */}

          {/* <!-- Featured Tab Content --> */}
          <div className={`mt-5 flex flex-col gap-6`}>
            {tabItems[activeTab].contentItem.map((item, index) => (
              <div
                key={index}
                className="grid gap-1 px-4.5 xsm:grid-cols-7 sm:grid-cols-5"
              >
                <div className="xsm:col-span-3">
                  <h5 className="cursor-pointer text-body-sm font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                    {item.emailTitle}
                  </h5>
                </div>
                <div className="xsm:col-span-2 sm:col-span-1">
                  <span
                    className={`
                        ${item.status === "In Queue" && "bg-yellow-light-4 text-yellow-dark-2"} 
                        ${item.status === "Sent" && "bg-green-light-7 text-green-dark"} 
                        ${item.status === "In Draft" && "border border-primary bg-primary/10 text-primary"} 
                        inline-block rounded px-2.5 py-1 text-body-xs font-medium
                      `}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="xsm:col-span-2 xsm:text-right sm:col-span-1">
                  <span className="inline-block text-body-sm font-medium text-dark dark:text-white">
                    {item.conversion}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- Featured Tab Content --> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCampaigns;
