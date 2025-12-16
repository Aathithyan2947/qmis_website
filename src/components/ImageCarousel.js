'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageCarousel({
  images = [],
  autoPlay = true,
  interval = 2000,
}) {
  const [current, setCurrent] = useState(0);

  // Optional autoplay
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (!images.length) return null;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image */}
      <div className="relative w-full max-w-5xl aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={images[current]}
          alt={`Slide ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
      </div>

      {/* Dots */}
      <div className="flex gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full border transition-all ${current === index
              ? 'bg-[#0E1A47] border-[#0E1A47]'
              : 'border-[#0E1A47] bg-transparent'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
