import React from "react";
import Carousel from "@/components/Carousels";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Carousel Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Carousel page for NextAdmin Dashboard Kit",
  // other metadata
};

const CarouselPage = () => {
  return (
    <DefaultLayout>
      <Carousel />
    </DefaultLayout>
  );
};

export default CarouselPage;
