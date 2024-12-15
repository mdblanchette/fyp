import React from "react";

interface VideosItemProps {
  title: string;
  embeds?: boolean;
  aspectOne?: boolean;
  aspectFour?: boolean;
  aspectTwentyOne?: boolean;
}

const VideosItem: React.FC<VideosItemProps> = ({
  title,
  embeds,
  aspectOne,
  aspectFour,
  aspectTwentyOne,
}) => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">{title}</h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <iframe
          className={`w-full 
            ${embeds && "aspect-video"} 
            ${aspectOne && "aspect-square"} 
            ${aspectFour && "aspect-4/3"} 
            ${aspectTwentyOne && "aspect-21/9"}
          `}
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideosItem;
