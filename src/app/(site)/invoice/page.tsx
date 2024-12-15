import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import InvoiceOne from "@/components/Invoice/InvoiceOne";
import InVoiceTwo from "@/components/Invoice/InVoiceTwo";

export const metadata: Metadata = {
  title: "Next.js Invoice Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Invoice page for NextAdmin Dashboard Kit",
};

const Invoice: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Invoice" />

      <div className="flex flex-col gap-10">
        <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-4 py-6 dark:border-dark-3 sm:px-6 xl:px-9">
            <h3 className="text-[22px] font-bold leading-7 text-dark dark:text-white">
              Style 1
            </h3>
          </div>

          <div className="p-4 sm:p-6 xl:p-9">
            <InvoiceOne />
          </div>
        </div>

        <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-4 py-6 dark:border-dark-3 sm:px-6 xl:px-9">
            <h3 className="text-[22px] font-bold leading-7 text-dark dark:text-white">
              Style 2
            </h3>
          </div>

          <div className="p-4 sm:p-6 xl:p-9">
            <InVoiceTwo />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Invoice;
