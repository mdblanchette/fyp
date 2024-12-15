import React, { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    title: "Profile",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus ligula nec dolor placerat, a consequat elit volutpat. Quisque nibh lacus, posuere et turpis in, pretium facilisis nisl. Proin congue sem vel sollicitudin sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",
  },
  {
    title: "Password",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ex dolorum voluptate cupiditate adipisci doloremque, vel quam praesentium nihil veritatis.",
  },
  {
    title: "Team",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?",
  },
  {
    title: "Notification",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.",
  },
  {
    title: "Integrations",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.",
  },
  {
    title: "Licenses",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.",
  },
];

const TabThree: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "text-primary border-primary";
  const inactiveClasses = "border-transparent";

  const selectTab = (index: number) => {
    setOpenTab(index);
  };

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">Tab Style 3</h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-7.5">
        <div className="mb-6 flex flex-wrap gap-10 border-b border-stroke dark:border-dark-3">
          {tabs.map((item, index) => (
            <Link
              key={index}
              href="#"
              className={`border-b-2 py-[7px] font-medium hover:border-primary hover:text-primary dark:hover:border-primary ${
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

export default TabThree;
