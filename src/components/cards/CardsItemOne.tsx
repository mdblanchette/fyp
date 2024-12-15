import React from "react";
import Link from "next/link";
import { CardItemProps } from "@/types/cards";
import Image from "next/image";

const CardsItemOne: React.FC<CardItemProps> = ({
  imageSrc,
  name,
  role,
  cardImageSrc,
  cardTitle,
  cardContent,
}) => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="h-10 w-10 rounded-full">
          <Image width={40} height={40} src={imageSrc || ""} alt="User" />
        </div>
        <div>
          <h4 className="font-medium text-dark dark:text-white">{name}</h4>
          <p className="text-body-sm">{role}</p>
        </div>
      </div>

      <Link href="#" className="block rounded-[5px] px-4">
        <Image width={432} height={238} src={cardImageSrc || ""} alt="Cards" />
      </Link>

      <div className="p-6">
        <h4 className="mb-3 text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href="#">{cardTitle}</Link>
        </h4>
        <p className="w-full max-w-[290px] font-medium">{cardContent}</p>
      </div>
    </div>
  );
};

export default CardsItemOne;
