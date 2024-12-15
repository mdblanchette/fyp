import React, { useRef } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const CarouselThree: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Slider With Controls & Indicators
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <Swiper
          className="carouselThree"
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <Image
              width={1376}
              height={520}
              priority
              src={"/images/carousel/carousel-03.jpg"}
              alt="carousel"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1376}
              height={520}
              priority
              src={"/images/carousel/carousel-02.jpg"}
              alt="carousel"
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1376}
              height={520}
              priority
              src={"/images/carousel/carousel-01.jpg"}
              alt="carousel"
              className="rounded-lg"
            />
          </SwiperSlide>
          <div className="swiper-button-prev">
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2344 21.4876C16.0094 21.4876 15.7844 21.4126 15.6344 21.2251L7.15937 12.6001C6.82187 12.2626 6.82187 11.7376 7.15937 11.4001L15.6344 2.7751C15.9719 2.4376 16.4969 2.4376 16.8344 2.7751C17.1719 3.1126 17.1719 3.6376 16.8344 3.9751L8.95937 12.0001L16.8719 20.0251C17.2094 20.3626 17.2094 20.8876 16.8719 21.2251C16.6469 21.3751 16.4594 21.4876 16.2344 21.4876Z"
                fill=""
              />
            </svg>
          </div>
          <div className="swiper-button-next">
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75938 21.4876C7.53438 21.4876 7.34687 21.4126 7.15937 21.2626C6.82187 20.9251 6.82187 20.4001 7.15937 20.0626L15.0344 12.0001L7.15937 3.9751C6.82187 3.6376 6.82187 3.1126 7.15937 2.7751C7.49687 2.4376 8.02187 2.4376 8.35937 2.7751L16.8344 11.4001C17.1719 11.7376 17.1719 12.2626 16.8344 12.6001L8.35937 21.2251C8.20937 21.3751 7.98438 21.4876 7.75938 21.4876Z"
                fill=""
              />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselThree;
