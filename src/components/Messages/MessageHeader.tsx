import React from "react";
import Image from "next/image";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";

const MessageHeader = () => {
  return (
    <>
      <div className="sticky flex items-center justify-between border-b border-stroke py-4.5 pl-7.5 pr-6 dark:border-dark-3">
        <div className="flex items-center">
          <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
            <Image
              src={"/images/user/user-11.png"}
              alt="avatar"
              className="h-full w-full object-cover object-center"
              width={52}
              height={52}
            />
          </div>
          <div>
            <h5 className="font-medium text-dark dark:text-white">
              Henry Dholi
            </h5>
            <p className="text-body-sm">Reply to message</p>
          </div>
        </div>
        <div>
          <DropdownDefault />
        </div>
      </div>
    </>
  );
};

export default MessageHeader;
