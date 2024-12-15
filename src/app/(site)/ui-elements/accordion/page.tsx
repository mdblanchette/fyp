import React from "react";
import Accordion from "@/components/Accordions";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Accordion Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Accordion page for NextAdmin Dashboard Kit",
  // other metadata
};

const AccordionPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Accordion" />

      <Accordion />
    </DefaultLayout>
  );
};

export default AccordionPage;
