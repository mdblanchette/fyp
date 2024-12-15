import React from "react";

const listItems = [
  {
    icon: (
      <svg
        className="fill-current"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.24976 2.22164C5.02703 2.4159 4.14826 2.78043 3.46423 3.46447C2.78019 4.1485 2.41566 5.02727 2.2214 6.25H6.24976V2.22164Z"
          fill=""
        />
        <path
          d="M2.0685 7.75C2.01015 8.73117 2.00133 9.88382 2 11.25H6.24976V7.75H2.0685Z"
          fill="#5750F1"
        />
        <path
          d="M2 12.75C2.00133 14.1162 2.01015 15.2688 2.0685 16.25H6.24976V12.75H2Z"
          fill="#5750F1"
        />
        <path
          d="M2.2214 17.75C2.41566 18.9727 2.78019 19.8515 3.46423 20.5355C4.14826 21.2196 5.02703 21.5841 6.24976 21.7784V17.75H2.2214Z"
          fill=""
        />
        <path
          d="M7.74976 21.9313C8.90556 22 10.2993 22 11.9998 22C13.7002 22 15.094 22 16.2498 21.9313V12.75H7.74976V21.9313Z"
          fill=""
        />
        <path
          d="M17.7498 21.7784C18.9725 21.5841 19.8513 21.2196 20.5353 20.5355C21.2193 19.8515 21.5839 18.9727 21.7781 17.75H17.7498V21.7784Z"
          fill=""
        />
        <path
          d="M21.931 16.25C21.9894 15.2688 21.9982 14.1162 21.9995 12.75H17.7498V16.25H21.931Z"
          fill="#5750F1"
        />
        <path
          d="M21.9995 11.25C21.9982 9.88382 21.9894 8.73117 21.931 7.75H17.7498V11.25H21.9995Z"
          fill="#5750F1"
        />
        <path
          d="M21.7781 6.25C21.5839 5.02727 21.2193 4.1485 20.5353 3.46447C19.8513 2.78043 18.9725 2.4159 17.7498 2.22164V6.25H21.7781Z"
          fill=""
        />
        <path
          d="M16.2498 2.06874C15.094 2 13.7002 2 11.9998 2C10.2993 2 8.90556 2 7.74976 2.06874V11.25H16.2498V2.06874Z"
          fill=""
        />
      </svg>
    ),
    name: "Media",
    size: "85 GB",
    percent: 80,
    color: "#5750F1",
  },
  {
    icon: (
      <svg
        className="fill-current"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.33398 5.41691V20.5836C4.33398 22.3785 5.78906 23.8336 7.58398 23.8336H18.4173C20.2122 23.8336 21.6673 22.3785 21.6673 20.5836V9.75024C21.6673 7.95532 20.2122 6.50024 18.4173 6.50024H5.41732C4.81901 6.50024 4.33398 6.01522 4.33398 5.41691ZM7.85482 13.0002C7.85482 12.5515 8.21859 12.1877 8.66732 12.1877H17.334C17.7827 12.1877 18.1465 12.5515 18.1465 13.0002C18.1465 13.449 17.7827 13.8127 17.334 13.8127H8.66732C8.21859 13.8127 7.85482 13.449 7.85482 13.0002ZM7.85482 16.7919C7.85482 16.3432 8.21859 15.9794 8.66732 15.9794H14.6257C15.0744 15.9794 15.4382 16.3432 15.4382 16.7919C15.4382 17.2406 15.0744 17.6044 14.6257 17.6044H8.66732C8.21859 17.6044 7.85482 17.2406 7.85482 16.7919Z"
          fill=""
        />
        <path
          d="M4.77684 4.42793C5.15436 4.59724 5.41732 4.97637 5.41732 5.41691H18.4173C18.7914 5.41691 19.1544 5.46431 19.5006 5.55343V4.66512C19.5006 3.3466 18.3328 2.33376 17.0276 2.52023L5.33021 4.19128C5.1217 4.22107 4.93275 4.30513 4.77684 4.42793Z"
          fill=""
        />
      </svg>
    ),
    name: "Documents",
    size: "25 GB",
    percent: 60,
    color: "#FF9C55",
  },
];

const StorageList: React.FC = () => {
  return (
    <div className="flex-grow space-y-5 rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-8">
      {listItems.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <div
            style={{ color: item.color }}
            className="flex h-11.5 w-11.5 items-center justify-center rounded-lg bg-[#F6F6F8] dark:bg-dark-2"
          >
            {item.icon}
          </div>

          <div className="flex-grow">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-medium text-dark dark:text-white">
                {item.name}
              </span>
              <span className="text-body-sm font-medium">{item.size}</span>
            </div>

            <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-dark-3">
              <span
                className="absolute left-0 block h-1.5 rounded-full"
                style={{
                  width: item.percent + "%",
                  backgroundColor: item.color,
                }}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StorageList;
