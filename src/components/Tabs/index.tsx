"use client";
import TabOne from "@/components/Tabs/TabOne";
import TabTwo from "@/components/Tabs/TabTwo";
import TabThree from "@/components/Tabs/TabThree";
import React from "react";

const Tabs: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-9">
        <TabOne />
        <TabTwo />
        <TabThree />
      </div>
    </>
  );
};

export default Tabs;
