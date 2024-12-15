import { BRAND } from "@/types/brand";
import Image from "next/image";
import DropdownDefault from "../Dropdowns/DropdownDefault";
import React from "react";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "X.com",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-06.svg",
    name: "Youtube",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 1.2,
    revenues: "2,740",
    sales: 390,
    conversion: 1.9,
  },
];

const TableFour: React.FC = () => {
  return (
    <div className="col-span-12 2xl:col-span-5">
      <div className="rounded-[10px] bg-white px-5 pb-7.5 pt-6 shadow-1 dark:bg-gray-dark dark:shadow-card sm:px-7.5">
        <div className="mb-4 flex justify-between">
          <div>
            <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
              Top Channels
            </h4>
          </div>
          <DropdownDefault />
        </div>

        <div className="dark:bg-meta-4 mb-4.5 grid grid-cols-3 rounded bg-[#F7F9FC] dark:bg-dark-3 sm:grid-cols-4">
          <div className="px-2 py-3.5 2xsm:px-5">
            <h5 className="text-body-sm font-medium uppercase">Source</h5>
          </div>
          <div className="px-2 py-3.5 text-center 2xsm:px-5">
            <h5 className="text-body-sm font-medium uppercase">Visitors</h5>
          </div>
          <div className="px-2 py-3.5 text-center 2xsm:px-5">
            <h5 className="text-body-sm font-medium uppercase">Revenues</h5>
          </div>
          <div className="hidden px-2 py-3.5 text-center 2xsm:px-5 sm:block">
            <h5 className="text-body-sm font-medium uppercase">Conversion</h5>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {brandData.map((brand, key) => (
            <div className={`grid grid-cols-3 sm:grid-cols-4`} key={key}>
              <div className="flex items-center gap-6 px-2.5 2xsm:px-5">
                <div className="h-9 w-full max-w-9 flex-shrink-0">
                  <Image src={brand.logo} width={60} height={50} alt="Brand" />
                </div>
                <p className="hidden font-medium text-dark dark:text-white sm:block">
                  {brand.name}
                </p>
              </div>

              <div className="flex items-center justify-center px-2.5 2xsm:px-5">
                <p className="font-medium text-dark dark:text-white">
                  {brand.visitors}K
                </p>
              </div>

              <div className="flex items-center justify-center px-2.5 2xsm:px-5">
                <p className="font-medium text-green">${brand.revenues}</p>
              </div>

              <div className="hidden items-center justify-center px-2.5 2xsm:px-5 sm:flex">
                <p className="font-medium text-[#259AE6]">
                  {brand.conversion}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableFour;
