import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ButtonsGroupOne from "@/components/ButtonsGroups/ButtonsGroupOne";
import ButtonsGroupTwo from "@/components/ButtonsGroups/ButtonsGroupTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Button Groups Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Button Groups page for NextAdmin Dashboard Kit",
};

const ButtonsGroup: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Buttons Group" />

      <div className="flex flex-col gap-7.5">
        <ButtonsGroupOne />
        <ButtonsGroupTwo />
      </div>
    </DefaultLayout>
  );
};

export default ButtonsGroup;
