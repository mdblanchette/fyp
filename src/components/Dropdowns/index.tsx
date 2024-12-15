"use client";
import DropdownsTwo from "@/components/Dropdowns/DropdownsTwo";
import DropdownsOne from "@/components/Dropdowns/DropdownsOne";
import DropdownsThree from "@/components/Dropdowns/DropdownsThree";
import React from "react";

const Dropdowns: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-7.5">
        <DropdownsOne />
        <DropdownsTwo />
        <DropdownsThree />
      </div>
    </>
  );
};

export default Dropdowns;
