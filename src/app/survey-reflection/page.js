'use client';

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import HTMLFlipBook from 'react-pageflip';

export default function SurvayReflection() {
  return (
    <div>
      <PageHeader contentTitle={"Survey Reflection"} />

      {/* Center the flipbook */}
      <div className="flex justify-center items-center py-10">
        <HTMLFlipBook
          width={400}
          height={600}
          size="fixed"
          maxShadowOpacity={0.5}
          showCover={true}
          drawShadow={true}
        >

          {/* Front Cover */}
          <div className="bg-transparent flex justify-center items-center">
            <Image
              src="/books/front_cover.png"
              width={400}
              height={600}
              alt="Front Cover"
              className="object-contain"
            />
          </div>

          {/* Pages 1–10 */}
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="bg-transparent flex justify-center items-center">
              <Image
                src={`/books/${i + 1}.png`}
                width={400}
                height={600}
                alt={`Page ${i + 1}`}
                className="object-contain"
              />
            </div>
          ))}

          {/* End Cover */}
          <div className="bg-transparent flex justify-center items-center">
            <Image
              src="/books/end_cover.png"
              width={400}
              height={600}
              alt="End Cover"
              className="object-contain"
            />
          </div>

        </HTMLFlipBook>
      </div>
    </div>
  );
}
