import React from "react";
import Star from "../Star";

const inboxList = [
  {
    name: "Musharof Chowdhury",
    subject: "Some note & Lorem Ipsum available alteration in some form.",
    date: "17 Oct, 2024",
  },
  {
    name: "Naimur Rahman",
    subject: "Lorem Ipsum available alteration in some form.",
    date: "25 Nov, 2024",
  },
  {
    name: "Juhan Ahamed",
    subject: "Lorem Ipsum available alteration in some form.",
    date: "25 Nov, 2024",
  },
  {
    name: "Mahbub Hasan",
    subject: "Lorem Ipsum available alteration in some form.",
    date: "19 Dec, 2024",
  },
  {
    name: "Shafiq Hammad",
    subject: "Lorem Ipsum available alteration in some form.",
    date: "20 Dec, 2024",
  },
];

const InboxList: React.FC = () => {
  return (
    <table className="h-full w-full table-auto">
      <thead>
        <tr className="flex border-y border-stroke dark:border-dark-3">
          <th className="w-[65%] py-5 pl-4 pr-4 lg:pl-10 xl:w-1/4">
            <label
              htmlFor="checkbox-1"
              className="flex cursor-pointer select-none items-center font-medium"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="checkbox-1"
                  className="tableCheckbox sr-only"
                />
                <div className="box mr-4 flex h-4 w-4 items-center justify-center rounded-[3px] border border-stroke text-white dark:border-dark-3">
                  <span className="opacity-0">
                    <svg
                      className="fill-current"
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.6917 0.242523C8.07198 0.593634 8.10501 1.19705 7.76547 1.59029L3.36988 6.6812C3.19475 6.88403 2.94427 7 2.68132 7C2.41837 7 2.1679 6.88403 1.99277 6.6812L0.234528 4.64484C-0.105007 4.25159 -0.0719774 3.64817 0.308302 3.29706C0.688581 2.94595 1.2721 2.98011 1.61164 3.37335L2.68132 4.61224L6.38836 0.318812C6.72789 -0.0744316 7.31142 -0.108587 7.6917 0.242523Z"
                        fill=""
                      />
                    </svg>
                  </span>
                </div>
              </div>
              Sender
            </label>
          </th>
          <th className="hidden w-3/5 px-4 py-5 xl:block">
            <p className="text-left font-medium">Subject</p>
          </th>
          <th className="w-[35%] py-5 pl-4 pr-4 lg:pr-7.5 xl:w-[20%]">
            <p className="text-right font-medium">Date</p>
          </th>
        </tr>
      </thead>
      <tbody className="block h-full max-h-full overflow-auto py-4">
        {inboxList.map((listItem, listIndex) => (
          <tr
            key={listIndex}
            className="flex cursor-pointer items-center hover:bg-gray-1 dark:hover:bg-dark-2"
          >
            <td className="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4">
              <div className="flex items-center font-medium">
                <label
                  htmlFor={`inboxCheckbox-${listIndex}`}
                  className="flex cursor-pointer select-none items-center text-body-sm font-medium sm:text-base"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id={`inboxCheckbox-${listIndex}`}
                      className="tableCheckbox sr-only"
                    />
                    <div className="box mr-4 flex h-4 w-4 items-center justify-center rounded-[3px] border border-stroke text-white dark:border-dark-3">
                      <span className="opacity-0">
                        <svg
                          className="fill-current"
                          width="8"
                          height="7"
                          viewBox="0 0 8 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.6917 0.242523C8.07198 0.593634 8.10501 1.19705 7.76547 1.59029L3.36988 6.6812C3.19475 6.88403 2.94427 7 2.68132 7C2.41837 7 2.1679 6.88403 1.99277 6.6812L0.234528 4.64484C-0.105007 4.25159 -0.0719774 3.64817 0.308302 3.29706C0.688581 2.94595 1.2721 2.98011 1.61164 3.37335L2.68132 4.61224L6.38836 0.318812C6.72789 -0.0744316 7.31142 -0.108587 7.6917 0.242523Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </label>
                <span className="pr-3">
                  <Star />
                </span>
                <span className="truncate">{listItem.name}</span>
              </div>
            </td>
            <td className="hidden w-3/5 p-4 xl:block">
              <p className="font-medium">{listItem.subject}</p>
            </td>
            <td className="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]">
              <p className="text-right text-xs font-medium xl:text-base">
                {listItem.date}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InboxList;
