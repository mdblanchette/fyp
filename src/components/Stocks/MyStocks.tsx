import React from "react";
import Image from "next/image";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";

interface Stocks {
  image: string;
  name: string;
  share: number;
  price: number;
  returnRate: number;
}

const stocksItems: Stocks[] = [
  {
    image: "/images/brand/brand-07.svg",
    name: "Apple Inc",
    share: 16,
    price: 410.5,
    returnRate: +0.95,
  },
  {
    image: "/images/brand/brand-01.svg",
    name: "Google",
    share: 100,
    price: 410.5,
    returnRate: +0.95,
  },
  {
    image: "/images/brand/brand-10.svg",
    name: "Tesla",
    share: 20,
    price: 410.5,
    returnRate: +0.95,
  },
  {
    image: "/images/brand/brand-13.svg",
    name: "X.com",
    share: 87,
    price: 410.5,
    returnRate: -0.95,
  },
  {
    image: "/images/brand/brand-11.svg",
    name: "Microsoft",
    share: 37,
    price: 410.5,
    returnRate: +0.95,
  },
];

const MyStocks: React.FC = () => {
  return (
    <div className="col-span-12 rounded-[10px] bg-white px-5.5 py-7.5 shadow-1 dark:bg-gray-dark xl:col-span-5">
      <div className="mb-7.5 flex flex-wrap items-center justify-between gap-2 px-2">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            My Stocks
          </h4>
        </div>

        <DefaultSelectOption options={["Monthly", "Yearly"]} />
      </div>

      <div className="flex flex-col">
        {stocksItems.map((item, key) => (
          <div
            key={key}
            className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-dark-2"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full">
                <Image
                  src={item.image}
                  alt="brand"
                  width={40}
                  height={40}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h5 className="text-sm font-bold leading-6 text-dark dark:text-white">
                  {item.name}
                </h5>
                <p className="text-body-sm font-medium">{item.share} Shares</p>
              </div>
            </div>

            <div className="text-right">
              <p className="mb-1 font-medium text-dark dark:text-white">
                ${item.price}
              </p>
              <p
                className={`flex items-center justify-end gap-1 text-xs font-medium ${
                  item.returnRate >= 0 ? "text-green" : "text-red"
                }`}
              >
                {item.returnRate}%
                {item.returnRate >= 0 ? (
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 6.099L0.484999 0.0989983L8.49108 0.098999L4.48804 6.099Z"
                      fill=""
                    />
                  </svg>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStocks;
