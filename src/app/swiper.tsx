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
        <SwiperSlide key={idx} className="flex items-center justify-center">
          <img
            src={img.src}
            alt={img.alt}
            className="object-contain w-48 h-48"
            draggable={false}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
