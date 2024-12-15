"use client";
import PopoversOne from "@/components/Popovers/PopoversOne";
import PopoversTwo from "@/components/Popovers/PopoversTwo";
import React from "react";

const Popovers: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-7.5">
        <PopoversOne />
        <PopoversTwo />
      </div>
    </>
  );
};

export default Popovers;
