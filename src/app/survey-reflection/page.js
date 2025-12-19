'use client';

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";

export default function SurveyReflection() {
  return (
    <div>
      <PageHeader contentTitle="Survey Reflection" />

      <div className="flex justify-center items-center py-10">
        <HTMLFlipBook
          width={400}
          height={600}
          size="fixed"
          maxShadowOpacity={0.2}
          drawShadow={false}
          showCover
        >
          {/* Front Cover */}
          <div className="flex justify-center items-center">
            <Image
              src="/books/front_cover.png"
              width={400}
              height={600}
              alt="Front Cover"
              priority
            />
          </div>

          {/* Pages */}
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="flex justify-center items-center">
              <img
                src={`/books/${i + 1}.png`}
                width={400}
                height={600}
                loading={i < 2 ? "eager" : "lazy"}
                alt={`Page ${i + 1}`}
                className="object-contain"
              />
            </div>
          ))}

          {/* End Cover */}
          <div className="flex justify-center items-center">
            <Image
              src="/books/end_cover.png"
              width={400}
              height={600}
              alt="End Cover"
            />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
