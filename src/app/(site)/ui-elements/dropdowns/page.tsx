import React from "react";
import Dropdowns from "@/components/Dropdowns";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Dropdowns Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Dropdowns page for NextAdmin Dashboard Kit",
  // other metadata
};

const DropdownPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Dropdowns" />

      <Dropdowns />
    </DefaultLayout>
  );
};

export default DropdownPage;
