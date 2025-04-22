import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import { structuredAlgoliaHtmlData } from "@/libs/crawlIndex";
import { redirect } from "next/navigation";

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

  // This will redirect the user to the markets page
  redirect("/markets");

  // The code below won't execute due to the redirect
  return (
    <>
      <DefaultLayout>{/* Markets Page Content Goes Here */
        <p>Hi</p>
      }</DefaultLayout>
    </>
  );
}