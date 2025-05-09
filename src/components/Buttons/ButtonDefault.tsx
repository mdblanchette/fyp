import React from "react";
import Link from "next/link";

interface ButtonPropTypes {
  label: string;
  link: string;
  customClasses: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const ButtonDefault = ({
  label,
  link,
  customClasses,
  children,
  onClick,
}: ButtonPropTypes) => {
  return (
    <Link
      href={link}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
    >
      {children}
      {label}
    </Link>
  );
};

export default ButtonDefault;