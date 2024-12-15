import React from "react";
import Tabs from "@/components/Tabs";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Tabs | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tabs page for NextAdmin Dashboard Kit",
  // other metadata
};

const TabsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tabs" />

      <Tabs />
    </DefaultLayout>
  );
};

export default TabsPage;
