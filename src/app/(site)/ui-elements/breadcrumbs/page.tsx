import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Breadcrumbs Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Breadcrumbs page for NextAdmin Dashboard Kit",
  // other metadata
};

const BreadcrumbsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Breadcrumb" />

      <Breadcrumbs />
    </DefaultLayout>
  );
};

export default BreadcrumbsPage;
