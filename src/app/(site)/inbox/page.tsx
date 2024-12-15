import Inbox from "@/components/Inbox";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Inbox Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Inbox page for NextAdmin Dashboard Kit",
};

const InboxPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Inbox" />

      <Inbox />
    </DefaultLayout>
  );
};

export default InboxPage;
