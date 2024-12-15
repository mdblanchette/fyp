import React from "react";
import Image from "next/image";

const ImagesTwo: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">Image Grid</h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <div>
            <Image
              width={431}
              height={385}
              src={"/images/cover/cover-03.jpg"}
              alt="Cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              width={431}
              height={385}
              src={"/images/cover/cover-04.jpg"}
              alt="Cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              width={431}
              height={385}
              src={"/images/cover/cover-05.jpg"}
              alt="Cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesTwo;
