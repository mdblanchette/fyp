import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PaginationOne from "@/components/Paginations/PaginationOne";
import PaginationTwo from "@/components/Paginations/PaginationTwo";
import PaginationThree from "@/components/Paginations/PaginationThree";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Pagination | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Pagination page for NextAdmin Dashboard Kit",
};

const Pagination: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pagination" />

      <div className="flex flex-col gap-7.5">
        <PaginationOne />
        <PaginationTwo />
        <PaginationThree />
      </div>
    </DefaultLayout>
  );
};

export default Pagination;
