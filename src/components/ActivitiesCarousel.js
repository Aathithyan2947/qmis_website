"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function ActivitiesCarousel() {
  // array for images 5 to 15
  const images = Array.from({ length: 11 }, (_, i) => `/after-school-activities/${i + 5}.webp`);

  return (
    <div className="w-full relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`Activity Image ${index + 5}`}
                  width={900}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <svg width="30" height="30" viewBox="0 0 24 24" className="fill-red-600">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <svg width="30" height="30" viewBox="0 0 24 24" className="fill-red-600">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
