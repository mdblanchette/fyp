import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import { structuredAlgoliaHtmlData } from "@/libs/crawlIndex";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default async function Home() {
  await structuredAlgoliaHtmlData({
    pageUrl: `${process.env.SITE_URL}`,
    htmlString: "",
    title: "Next.js E-commerce Dashboard Page",
    type: "page",
    imageURL: "",
  });

  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
