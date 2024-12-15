import React from "react";
import Images from "@/components/Images";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Images Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Images page for NextAdmin Dashboard Kit",
  // other metadata
};

const ImagesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Images" />

      <Images />
    </DefaultLayout>
  );
};

export default ImagesPage;
