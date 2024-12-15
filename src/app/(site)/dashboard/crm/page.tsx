import CRM from "@/components/Dashboard/CRM";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js CRM Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js CRM Dashboard page for NextAdmin Dashboard Kit",
  // other metadata
};

const CrmPage = () => {
  return (
    <DefaultLayout>
      <CRM />
    </DefaultLayout>
  );
};

export default CrmPage;
