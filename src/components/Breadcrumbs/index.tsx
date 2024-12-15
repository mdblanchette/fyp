"use client";
import BreadcrumbOne from "@/components/Breadcrumbs/BreadcrumbOne";
import BreadcrumbTwo from "@/components/Breadcrumbs/BreadcrumbTwo";
import BreadcrumbThree from "@/components/Breadcrumbs/BreadcrumbThree";
import React from "react";

const Breadcrumbs: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-7.5">
        <BreadcrumbOne />
        <BreadcrumbTwo />
        <BreadcrumbThree />
      </div>
    </>
  );
};

export default Breadcrumbs;
