import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PricingTableOne from "@/components/PricingTables/PricingTableOne";
import PricingTableTwo from "@/components/PricingTables/PricingTableTwo";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Pricing Table Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Pricing Table page for NextAdmin Dashboard Kit",
};

const PricingTables: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pricing Table" />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <PricingTableOne />
        <PricingTableTwo />
      </div>
    </DefaultLayout>
  );
};

export default PricingTables;
