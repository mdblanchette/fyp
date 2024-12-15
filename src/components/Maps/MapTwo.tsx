"use client";
import jsVectorMap from "jsvectormap";
import React, { useEffect } from "react";
import "jsvectormap/dist/maps/world";
import { Country } from "@/types/country";
import Image from "next/image";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";

const countryData: Country[] = [
  {
    flag: "/images/country/country-01.svg",
    percentage: 35,
    name: "United States",
  },
  {
    flag: "/images/country/country-02.svg",
    percentage: 26,
    name: "Canada",
  },
  {
    flag: "/images/country/country-03.svg",
    percentage: 18,
    name: "France",
  },
  {
    flag: "/images/country/country-04.svg",
    percentage: 14,
    name: "Italy",
  },
  {
    flag: "/images/country/country-05.svg",
    percentage: 10,
    name: "Australia",
  },
  {
    flag: "/images/country/country-06.svg",
    percentage: 7,
    name: "India",
  },
];

const MapTwo: React.FC = () => {
  useEffect(() => {
    const vectorMapTwo = new jsVectorMap({
      selector: "#mapTwo",
      map: "world",
      zoomButtons: true,

      regionStyle: {
        initial: {
          fontFamily: "Satoshi",
          fill: "#A9BDFF",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },

      onRegionTooltipShow: function (tooltip: any, code: string) {
        if (code === "EG") {
          tooltip.selector.innerHTML =
            tooltip.text() + " <b>(Hello Russia)</b>";
        }
      },
    });

    return () => {
      vectorMapTwo.destroy();
    };
  }, []);

  return (
    <div className="col-span-12 overflow-hidden rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-6">
      <div className="px-4 pb-7.5 pt-5.5 md:px-6 xl:px-7.5">
        <div className="mb-7.5 items-center justify-between sm:flex">
          <div className="mb-2">
            <h3 className="text-body-2xlg font-bold text-dark dark:text-white">
              Top Countries
            </h3>
          </div>
          <div className="mb-2">
            <DefaultSelectOption options={["Last 7 days", "Last 15 days"]} />
          </div>
        </div>
        <div className="flex h-65 items-center justify-center md:h-95">
          <div id="mapTwo" className="mapTwo map-btn"></div>
        </div>
      </div>
      <div className="space-y-3.5 border-t border-stroke p-4 dark:border-dark-3 md:p-6 xl:p-7.5">
        {countryData.map((country, key) => (
          <div className="items-center sm:flex" key={key}>
            <div className="flex w-full max-w-42.5 items-center gap-3.5">
              <Image width={20} height={13} src={country.flag} alt="usa" />
              <p className="font-medium text-dark dark:text-dark-6">
                {country.name}
              </p>
            </div>
            <div className="relative block h-4.5 w-full rounded bg-gray-3 dark:bg-dark-2">
              <div
                className={`absolute left-0 top-0 flex h-full items-center justify-center rounded bg-primary text-xs font-medium text-white`}
                style={{
                  width: country.percentage + "%",
                }}
              >
                {country.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapTwo;
