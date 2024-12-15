import React from "react";
import Modals from "@/components/Modals";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Modals | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Modals page for NextAdmin Dashboard Kit",
  // other metadata
};

const ModalPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Modals" />

      <Modals />
    </DefaultLayout>
  );
};

export default ModalPage;
