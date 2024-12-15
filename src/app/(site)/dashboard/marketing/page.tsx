import Marketing from "@/components/Dashboard/Marketing";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Marketing Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description:
    "This is Next.js Marketing Dashboard page for NextAdmin Dashboard Kit",
};

const MarketingPage = () => {
  return (
    <DefaultLayout>
      <Marketing />
    </DefaultLayout>
  );
};

export default MarketingPage;
