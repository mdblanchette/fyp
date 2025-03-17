"use client";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Portfolio from "@/components/Portfolio/Portfolio";
import ModelSelection from "@/components/ModelSelection/ModelSelection";
import OrderHistory from "@/components/OrderHistory/OrderHistory";
import Positions from "@/components/Positions/Positions";

const PortfolioPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Portfolio" />
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
          <Portfolio />
          <ModelSelection />
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
          <OrderHistory />
          <Positions />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PortfolioPage;
