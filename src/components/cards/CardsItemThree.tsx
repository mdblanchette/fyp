import React from "react";
import Link from "next/link";
import { CardItemProps } from "@/types/cards";

const CardsItemThree: React.FC<CardItemProps> = ({
  cardTitle,
  cardContent,
}) => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-7.5 py-5 dark:border-dark-3">
        <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href="#">{cardTitle}</Link>
        </h4>
      </div>
      <div className="px-7.5 pb-9 pt-6">
        <p className="w-full max-w-[290px] font-medium">{cardContent}</p>
      </div>
    </div>
  );
};

export default CardsItemThree;
