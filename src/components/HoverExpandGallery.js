'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HoverExpandGallery({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  return (
    <div className="w-full">
      <div className="flex gap-2 aspect-[1.77/1] w-full">
        {images.map((src, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                relative overflow-hidden rounded-3xl cursor-pointer
                transition-all duration-500 ease-in-out
                ${isActive ? 'flex-[4]' : 'flex-[1]'}
              `}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
