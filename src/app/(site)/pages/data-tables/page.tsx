import React from "react";
import DataTables from "@/components/DataTables";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js DataTables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js DataTables page for NextAdmin Dashboard Kit",
  // other metadata
};

const DataTablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Data Tables" />
      <DataTables />
    </DefaultLayout>
  );
};

export default DataTablesPage;
