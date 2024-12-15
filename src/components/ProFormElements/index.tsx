"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import RangeSliderOne from "@/components/ProFormElements/RangeSlider/RangeSliderOne";
import RangeSliderTwo from "@/components/ProFormElements/RangeSlider/RangeSliderTwo";
import FileDropZone from "@/components/ProFormElements/FileDropZone";

const ProFormElements = () => {
  return (
    <>
      <Breadcrumb pageName="Pro Form Elements" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Range Slider --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                Range Slider
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-7.5">
              <RangeSliderOne />
              <RangeSliderTwo />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- File Drop Zone --> */}
          <FileDropZone />
        </div>
      </div>
    </>
  );
};

export default ProFormElements;
