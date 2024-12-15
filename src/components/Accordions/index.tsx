"use client";
import AccordionOne from "@/components/Accordions/AccordionOne";
import AccordionTwo from "@/components/Accordions/AccordionTwo";
import React from "react";

const Accordion: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-7.5">
        <AccordionOne />
        <AccordionTwo />
      </div>
    </>
  );
};

export default Accordion;
