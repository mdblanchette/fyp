"use client";
import DataTableOne from "@/components/DataTables/DataTableOne";
import DataTableTwo from "@/components/DataTables/DataTableTwo";
import React from "react";

const DataTables: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <DataTableOne />
        <DataTableTwo />
      </div>
    </>
  );
};

export default DataTables;
