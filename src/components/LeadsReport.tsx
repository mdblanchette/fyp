import Image from "next/image";
import DropdownDefault from "./Dropdowns/DropdownDefault";
import { Lead } from "@/types/Lead";
import React from "react";

const leadsData: Lead[] = [
  {
    avatar: "/images/user/user-17.png",
    name: "Charlie Donin",
    email: "wdavis@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "lost",
  },
  {
    avatar: "/images/user/user-18.png",
    name: "Makenna Carder",
    email: "ltorres@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "active",
  },
  {
    avatar: "/images/user/user-19.png",
    name: "Talan Dokidis",
    email: "rtaylor@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "active",
  },
  {
    avatar: "/images/user/user-20.png",
    name: "Cheyenne Levin",
    email: "ebrown@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "active",
  },
  {
    avatar: "/images/user/user-21.png",
    name: "James Aminoff",
    email: "slee@aol.com",
    project: "25 Dec 2024 - 28 Dec 2024",
    duration: 3,
    status: "lost",
  },
];

const LeadsReport: React.FC = () => {
  return (
    <div className="col-span-12">
      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="p-4 md:p-6 xl:p-7.5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                Leads Report
              </h2>
            </div>
            <DropdownDefault />
          </div>
        </div>

        <div className="border-b border-stroke px-4 pb-5 dark:border-dark-3 md:px-6 xl:px-7.5">
          <div className="flex items-center gap-3">
            <div className="w-2/12 xl:w-3/12">
              <span className="font-medium">Name</span>
            </div>
            <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
              <span className="font-medium">Email</span>
            </div>
            <div className="hidden w-4/12 md:block xl:w-3/12">
              <span className="font-medium">Project</span>
            </div>
            <div className="hidden w-1/12 xl:block">
              <span className="font-medium">Duration</span>
            </div>
            <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
              <span className="font-medium">Status</span>
            </div>
            <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
              <span className="font-medium">Actions</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 xl:p-7.5">
          <div className="flex flex-col gap-7">
            {leadsData.map((lead, key) => (
              <div className="flex items-center gap-3" key={key}>
                <div className="w-2/12 xl:w-3/12">
                  <div className="flex items-center gap-4">
                    <div className="2xsm:h-11 2xsm:w-full 2xsm:max-w-11 2xsm:rounded-full">
                      <Image
                        src={lead.avatar}
                        alt="User"
                        width={44}
                        height={44}
                      />
                    </div>
                    <span className="hidden font-medium xl:block">
                      {lead.name}
                    </span>
                  </div>
                </div>
                <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                  <span className="font-medium">{lead.email}</span>
                </div>
                <div className="hidden w-4/12 md:block xl:w-3/12">
                  <span className="font-medium">{lead.project}</span>
                </div>
                <div className="hidden w-1/12 xl:block">
                  <span className="font-medium">{lead.duration} Days</span>
                </div>
                <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                  <span
                    className={`inline-block rounded px-2.5 py-1 text-body-sm font-medium ${
                      lead.status === "lost"
                        ? "bg-[#FB5454]/[0.08] text-red"
                        : "bg-[#10B981]/[0.08] text-green"
                    } `}
                  >
                    {lead.status === "lost" ? "Lost Lead" : "Active"}
                  </span>
                </div>
                <div className="hidden w-2/12 2xsm:block md:w-1/12">
                  <button className="mx-auto block hover:text-red">
                    <svg
                      className="mx-auto fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.44992 2.06252H12.5496C12.7479 2.06239 12.9208 2.06228 13.0839 2.08834C13.7286 2.19129 14.2865 2.59338 14.588 3.17244C14.6644 3.319 14.7189 3.48298 14.7815 3.6712L14.8838 3.97819C14.9011 4.03015 14.9061 4.04486 14.9103 4.05645C15.0708 4.50022 15.487 4.80021 15.9588 4.81217C15.9712 4.81248 15.9864 4.81254 16.0414 4.81254H18.7914C19.1711 4.81254 19.4789 5.12034 19.4789 5.50004C19.4789 5.87973 19.1711 6.18754 18.7914 6.18754H3.20801C2.82831 6.18754 2.52051 5.87973 2.52051 5.50004C2.52051 5.12034 2.82831 4.81254 3.20801 4.81254H5.95808C6.01313 4.81254 6.02832 4.81248 6.04072 4.81217C6.51249 4.80021 6.92867 4.50024 7.0892 4.05647C7.09342 4.0448 7.09827 4.03041 7.11568 3.97819L7.21798 3.67122C7.28059 3.48301 7.33514 3.319 7.41146 3.17244C7.71299 2.59339 8.27088 2.19129 8.91557 2.08834C9.07875 2.06228 9.25156 2.06239 9.44992 2.06252ZM8.25715 4.81254C8.30436 4.71993 8.34621 4.6237 8.3822 4.52419C8.39313 4.49397 8.40385 4.4618 8.41763 4.42048L8.50911 4.14601C8.59269 3.8953 8.61193 3.84416 8.63102 3.8075C8.73153 3.61448 8.91749 3.48045 9.13239 3.44614C9.1732 3.43962 9.22778 3.43754 9.49207 3.43754H12.5074C12.7717 3.43754 12.8263 3.43962 12.8671 3.44614C13.082 3.48045 13.268 3.61449 13.3685 3.8075C13.3876 3.84416 13.4068 3.89529 13.4904 4.14601L13.5818 4.42031L13.6173 4.52421C13.6533 4.62372 13.6951 4.71994 13.7424 4.81254H8.25715Z"
                        fill=""
                      />
                      <path
                        d="M5.42184 7.74597C5.39658 7.36711 5.06899 7.08047 4.69013 7.10572C4.31128 7.13098 4.02463 7.45858 4.04989 7.83743L4.47471 14.2099C4.55308 15.3857 4.61639 16.3355 4.76486 17.0808C4.91923 17.8557 5.18178 18.5029 5.72408 19.0103C6.26637 19.5176 6.92962 19.7365 7.71305 19.839C8.46658 19.9376 9.41847 19.9376 10.5969 19.9375H11.4026C12.581 19.9376 13.5329 19.9376 14.2864 19.839C15.0699 19.7365 15.7331 19.5176 16.2754 19.0103C16.8177 18.5029 17.0803 17.8557 17.2346 17.0808C17.3831 16.3355 17.4464 15.3857 17.5248 14.2099L17.9496 7.83743C17.9749 7.45858 17.6882 7.13098 17.3094 7.10572C16.9305 7.08047 16.6029 7.36711 16.5777 7.74597L16.1561 14.0702C16.0737 15.3057 16.015 16.1654 15.8861 16.8122C15.7611 17.4396 15.5867 17.7717 15.336 18.0062C15.0854 18.2406 14.7424 18.3926 14.1081 18.4756C13.4542 18.5612 12.5925 18.5625 11.3542 18.5625H10.6453C9.40702 18.5625 8.54535 18.5612 7.8914 18.4756C7.25706 18.3926 6.91408 18.2406 6.66346 18.0062C6.41283 17.7717 6.23836 17.4396 6.11337 16.8122C5.98451 16.1654 5.92582 15.3057 5.84345 14.0702L5.42184 7.74597Z"
                        fill=""
                      />
                      <path
                        d="M8.63968 9.39928C9.01749 9.3615 9.3544 9.63715 9.39218 10.015L9.85051 14.5983C9.8883 14.9761 9.61265 15.313 9.23483 15.3508C8.85702 15.3886 8.52012 15.1129 8.48234 14.7351L8.024 10.1518C7.98622 9.77397 8.26187 9.43706 8.63968 9.39928Z"
                        fill=""
                      />
                      <path
                        d="M13.3598 9.39928C13.7376 9.43706 14.0133 9.77397 13.9755 10.1518L13.5172 14.7351C13.4794 15.1129 13.1425 15.3886 12.7647 15.3508C12.3869 15.313 12.1112 14.9761 12.149 14.5983L12.6073 10.015C12.6451 9.63715 12.982 9.3615 13.3598 9.39928Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsReport;
