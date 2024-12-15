"use client";
import React from "react";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import InboxList from "@/components/Inbox/InboxList";
import InboxPagination from "@/components/Inbox/InboxPagination";
import InboxHeader from "@/components/Inbox/InboxHeader";
import InboxSidebar from "@/components/Inbox/InboxSidebar";

const Inbox: React.FC = () => {
  return (
    <>
      <div className="h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
        <div className="h-full rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card lg:flex">
          {/* <!-- ====== Inbox Sidebar Star --> */}
          <InboxSidebar />
          {/* <!-- ====== Inbox Sidebar End --> */}

          <div className="flex h-full flex-col border-stroke dark:border-dark-3 lg:w-4/5 lg:border-l">
            {/* <!-- ====== Inbox Header Star --> */}
            <InboxHeader />
            {/* <!-- ====== Inbox Header End --> */}

            <div className="h-full">
              {/* <!-- ====== Inbox List Star --> */}
              <InboxList />
              {/* <!-- ====== Inbox List End --> */}
            </div>

            {/* <!-- ====== Inbox Pagination Star --> */}
            <InboxPagination />
            {/* <!-- ====== Inbox Pagination End --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
