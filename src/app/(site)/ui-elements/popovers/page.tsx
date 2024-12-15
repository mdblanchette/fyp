import React from "react";
import Popovers from "@/components/Popovers";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Popovers | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Popovers page for NextAdmin Dashboard Kit",
};

const PopOversPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Popovers" />

      <Popovers />
    </DefaultLayout>
  );
};

export default PopOversPage;
