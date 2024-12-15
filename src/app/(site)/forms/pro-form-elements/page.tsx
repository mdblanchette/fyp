import React from "react";
import ProFormElements from "@/components/ProFormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Pro Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description:
    "This is Next.js Pro Form Elements page for NextAdmin Dashboard Kit",
};

const ProFormElementsPage = () => {
  return (
    <DefaultLayout>
      <ProFormElements />
    </DefaultLayout>
  );
};

export default ProFormElementsPage;
