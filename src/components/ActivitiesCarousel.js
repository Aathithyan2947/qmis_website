"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function ActivitiesCarousel({ images }) {
  return (
    <div className="w-full relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-12 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 2000, // 2 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
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
                  alt={`Activity Image ${index + 1}`}
                  width={900}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Prev Button - Moved further left */}
        <button className="swiper-button-prev-custom absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:shadow-xl transition-shadow">
          <svg width="28" height="28" viewBox="0 0 24 24" className="fill-red-600">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Custom Next Button - Moved further right */}
        <button className="swiper-button-next-custom absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:shadow-xl transition-shadow">
          <svg width="28" height="28" viewBox="0 0 24 24" className="fill-red-600">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
