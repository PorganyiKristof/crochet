"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Zoom, Navigation, Pagination } from "swiper";

export default function SwiperPage({ images }) {
  return (
    <div className="w-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Zoom, Navigation, Pagination]}
        className="mySwiper max-h-96"
      >
        {images?.map((image) => {
          return (
            <div key={image} className="object-fill">
              <SwiperSlide>
                <div className="swiper-zoom-container flex items-center justify-center h-full relative">
                  <Image
                    src={image}
                    width={"auto"}
                    height={"auto"}
                    alt="asd"
                    className="top-0 lg:-translate-y-1/3 w-full h-full"
                    placeholder="blur"
                    blurDataURL={`${image}`}
                  />
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
