import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableFive from "@/components/Tables/TableFive";
import TableSix from "@/components/Tables/TableSix";

export const metadata: Metadata = {
  title: "Next.js Pro Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Pro Tables page for NextAdmin Dashboard Kit",
};

const ProTablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pro Tables" />

      <div className="flex flex-col gap-10">
        <TableFive />
        <TableSix />
      </div>
    </DefaultLayout>
  );
};

export default ProTablesPage;
