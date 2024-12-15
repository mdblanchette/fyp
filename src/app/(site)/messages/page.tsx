import React from "react";
import Messages from "@/components/Messages";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Messages Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Messages page for NextAdmin Kit",
  // other metadata
};

const MessagesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Messages" />

      <Messages />
    </DefaultLayout>
  );
};

export default MessagesPage;
