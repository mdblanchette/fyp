import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

const CarouselTwo: React.FC = () => {
  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Slider With Indicators
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <Swiper
          className="carouselTwo"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
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
              src={"/images/carousel/carousel-01.jpg"}
              alt="carousel"
              className="rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselTwo;
