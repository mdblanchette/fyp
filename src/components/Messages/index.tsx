"use client";
import React from "react";
import MessageSidebar from "@/components/Messages/MessageSidebar";
import MessageHeader from "@/components/Messages/MessageHeader";
import MessageOutputBox from "@/components/Messages/MessageOutputBox";
import MessageInputBox from "@/components/Messages/MessageInputBox";

const Messages: React.FC = () => {
  const chatList = [
    {
      imgSrc: "/images/user/user-12.png",
      name: "Henry Dholi",
      message: "I cam across your profile and...",
    },
    {
      imgSrc: "/images/user/user-13.png",
      name: "Mariya Desoja",
      message: "I like your confidence 💪",
    },
    {
      imgSrc: "/images/user/user-22.png",
      name: "Robert Jhon",
      message: "Can you share your offer?",
    },
    {
      imgSrc: "/images/user/user-23.png",
      name: "Cody Fisher",
      message: `I'm waiting for you response!`,
    },
    {
      imgSrc: "/images/user/user-24.png",
      name: "Jenny Wilson",
      message: "I cam across your profile and...",
    },
  ];

  return (
    <>
      <div className="h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
        <div className="h-full rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card xl:flex">
          <div className="hidden h-full flex-col xl:flex xl:w-1/4">
            {/* <!-- ====== Message Sidebar Star --> */}
            <MessageSidebar />
            {/* <!-- ====== Message Sidebar End --> */}
          </div>
          <div className="flex h-full flex-col border-l border-stroke dark:border-dark-3 xl:w-3/4">
            {/* <!-- ====== Message Header Star --> */}
            <MessageHeader />
            {/* <!-- ====== Message Header End --> */}

            {/* <!-- ====== Message Output Box Star --> */}
            <MessageOutputBox />
            {/* <!-- ====== Message Output Box End --> */}

            {/* <!-- ====== Message Input Box Star --> */}
            <MessageInputBox />
            {/* <!-- ====== Message Input Box End --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
