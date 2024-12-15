import React from "react";
import Progress from "@/components/Progress";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Progress | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Progress page for NextAdmin Dashboard Kit",
  // other metadata
};

const ProgressPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Progress" />

      <Progress />
    </DefaultLayout>
  );
};

export default ProgressPage;
