import React from "react";

const messageTexts = [
  {
    userName: "Andri Thomas",
    text: "I want to make an appointment tomorrow from 2:00 to 5:00pm?",
    time: "1:55pm",
    reply: {
      text: "Hello, Thomas! I will check the schedule and inform you",
      time: "1:58pm",
    },
  },
  {
    userName: "Andri Thomas",
    text: "Ok, Thanks for your reply.",
    time: "1:59pm",
    reply: {
      text: "You are welcome!",
      time: "2:00pm",
    },
  },
  {
    userName: "Andri Thomas",
    text: "I want to make an appointment tomorrow from 2:00 to 5:00pm?",
    time: "1:55pm",
    reply: {
      text: "Hello, Thomas! I will check the schedule and inform you",
      time: "1:58pm",
    },
  },
  {
    userName: "Andri Thomas",
    text: "Ok, Thanks for your reply.",
    time: "1:59pm",
    reply: {
      text: "You are welcome!",
      time: "2:00pm",
    },
  },
];

const MessageOutputBox = () => {
  return (
    <>
      <div className="no-scrollbar max-h-full space-y-2 overflow-auto px-7.5 py-7">
        {messageTexts.map((textItem, textIndex) => (
          <>
            <div key={textIndex} className="w-full max-w-[340px]">
              <p className="mb-2 text-body-sm font-medium">
                {textItem.userName}
              </p>
              <div className="rounded-2xl rounded-tl-none bg-[#E8F7FF] px-5 py-3 dark:bg-opacity-10">
                <p className="font-medium text-dark dark:text-white">
                  {textItem.text}
                </p>
              </div>
              <p className="mt-2.5 text-body-sm">{textItem.time}</p>
            </div>
            {textItem.reply && (
              <div className="ml-auto max-w-[328px]">
                <div className="rounded-2xl rounded-br-none bg-blue-light-5 px-5 py-3 dark:bg-opacity-10">
                  <p className="font-medium text-dark dark:text-white">
                    {textItem.reply.text}
                  </p>
                </div>
                <p className="mt-2 text-right text-body-sm">
                  {textItem.reply.time}
                </p>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default MessageOutputBox;
