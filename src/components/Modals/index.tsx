"use client";
import ModalOne from "@/components/Modals/ModalOne";
import ModalTwo from "@/components/Modals/ModalTwo";
import ModalThree from "@/components/Modals/ModalThree";
import React from "react";

const Modals: React.FC = () => {
  return (
    <>
      <div className="rounded-[10px] bg-white p-10 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap justify-center gap-6">
          <ModalOne />
          <ModalTwo />
          <ModalThree />
        </div>
      </div>
    </>
  );
};

export default Modals;
