import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TooltipsOne from "@/components/ToolTips/TooltipsOne";
import TooltipsTwo from "@/components/ToolTips/TooltipsTwo";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Tooltips | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tooltips page for NextAdmin Dashboard Kit",
};

const Tooltips: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tooltips" />

      <div className="flex flex-col gap-7.5">
        <TooltipsOne />
        <TooltipsTwo />
      </div>
    </DefaultLayout>
  );
};

export default Tooltips;
