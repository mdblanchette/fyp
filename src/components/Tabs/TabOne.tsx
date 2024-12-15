import React, { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    title: "Home",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.",
  },
  {
    title: "About Us",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ex dolorum voluptate cupiditate adipisci doloremque, vel quam praesentium nihil veritatis.",
  },
  {
    title: "Our Team",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?",
  },
  {
    title: "Company Details",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.",
  },
];

const TabOne: React.FC = () => {
  const [openTab, setOpenTab] = useState(0);

  const selectTab = (index: number) => {
    setOpenTab(index);
  };

  const activeClasses = "bg-primary text-white border-primary";
  const inactiveClasses =
    "bg-gray-2 dark:bg-dark-2 border-stroke dark:border-dark-3 text-dark dark:text-white";

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">Tab Style 1</h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-7.5">
        <div className="mb-7.5 flex flex-wrap gap-3.5 rounded-lg border border-stroke p-3 dark:border-dark-3">
          {tabs.map((item, index) => (
            <Link
              key={index}
              href="#"
              className={`rounded-[7px] border px-5 py-[7px] font-medium hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary dark:hover:bg-primary ${
                openTab === index ? activeClasses : inactiveClasses
              }`}
              onClick={() => selectTab(index)}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div>
          <div className="font-medium">{tabs[openTab].content}</div>
        </div>
      </div>
    </div>
  );
};

export default TabOne;
