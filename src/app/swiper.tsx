"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  { src: "/link1.avif", alt: "Image 1" },
  { src: "/link2.avif", alt: "Image 2" },
  { src: "/link3.avif", alt: "Image 3" },
  { src: "/link4.avif", alt: "Image 4" },
];

export default function HoodieSwiper() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      className="w-full h-56 rounded-2xl bg-gray-100 mb-4"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex items-center justify-center w-full h-56">
            <img
              src={img.src}
              alt={img.alt}
              className="object-contain max-w-full max-h-full"
              draggable={false}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
