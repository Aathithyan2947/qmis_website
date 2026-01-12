'use client';
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import HTMLFlipBook from 'react-pageflip';
import { useRef, useEffect } from "react";

export default function SurveyReflection() {
  const flipBookRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        flipBookRef.current?.pageFlip().flipPrev();
      }
      if (e.key === "ArrowRight") {
        flipBookRef.current?.pageFlip().flipNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <PageHeader contentTitle={"Survey Reflection"} />
      <div className="flex justify-center items-center py-10 px-4">
        <div className="w-full max-w-2xl">
          <HTMLFlipBook
            ref={flipBookRef}
            width={500}
            height={700}
            size="stretch"
            maxShadowOpacity={0.5}
            showCover={true}
            drawShadow={true}
            useMouseEvents={true}
          >
            {/* Front Cover */}
            <div className="bg-white flex justify-center items-center w-full h-full">
              <Image
                src="/books/front_cover.png"
                width={500}
                height={700}
                alt="Front Cover"
                priority
                quality={85}
                className="object-contain"
              />
            </div>

            {/* Pages 1–10 */}
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="bg-white flex justify-center items-center w-full h-full"
              >
                <Image
                  src={`/books/${i + 1}.png`}
                  width={500}
                  height={700}
                  alt={`Page ${i + 1}`}
                  quality={85}
                  className="object-contain"
                />
              </div>
            ))}

            {/* End Cover */}
            <div className="bg-white flex justify-center items-center w-full h-full">
              <Image
                src="/books/end_cover.png"
                width={500}
                height={700}
                alt="End Cover"
                quality={85}
                className="object-contain"
              />
            </div>
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
}
