import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NotificationsOne from "@/components/Notifications/NotificationsOne";
import NotificationsTwo from "@/components/Notifications/NotificationsTwo";
import NotificationsThree from "@/components/Notifications/NotificationsThree";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import NotificationsFour from "@/components/Notifications/NotificationsFour";

export const metadata: Metadata = {
  title: "Next.js Notifications | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Notifications page for NextAdmin Dashboard Kit",
};

const Notifications: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Notifications" />

      <div className="flex flex-col gap-7.5">
        <NotificationsOne />
        <NotificationsTwo />
        <NotificationsThree />
        <NotificationsFour />
      </div>
    </DefaultLayout>
  );
};

export default Notifications;
