import Stocks from "@/components/Dashboard/Stocks";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Stocks Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description:
    "This is Next.js Stocks Dashboard page for NextAdmin Dashboard Kit",
};

const StocksPage = () => {
  return (
    <DefaultLayout>
      <Stocks />
    </DefaultLayout>
  );
};

export default StocksPage;
