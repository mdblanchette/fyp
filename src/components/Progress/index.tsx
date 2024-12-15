"use client";
import ProgressOne from "@/components/Progress/ProgressOne";
import ProgressTwo from "@/components/Progress/ProgressTwo";
import ProgressThree from "@/components/Progress/ProgressThree";
import ProgressFour from "@/components/Progress/ProgressFour";
import React from "react";

const Progress: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-7.5">
        <ProgressOne />
        <ProgressTwo />
        <ProgressThree />
        <ProgressFour />
      </div>
    </>
  );
};

export default Progress;
