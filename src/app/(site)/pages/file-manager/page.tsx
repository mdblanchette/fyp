import React from "react";
import FileManager from "@/components/FileManager";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js File Manager Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js File Manager page for NextAdmin Dashboard Kit",
  // other metadata
};

const FileManagerPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="File Manager" />

      <FileManager />
    </DefaultLayout>
  );
};

export default FileManagerPage;
