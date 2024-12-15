import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AdvancedChart from "@/components/Charts/AdvancedChart";

export const metadata: Metadata = {
  title: "Next.js Advanced Chart Page | NextAdmin - Next.js Dashboard Kit",
  description:
    "This is Next.js Advanced Chart page for NextAdmin Dashboard Kit",
  // other metadata
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Advanced Chart" />

      <AdvancedChart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
