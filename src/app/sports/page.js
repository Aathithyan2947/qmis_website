"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SportsPage() {
  // Images for the carousel
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ======================= HEADER ======================= */}
      <div className="bg-[#0E1A47] w-full py-16 flex justify-center">
        <h1 className="text-white text-4xl font-semibold">Sports</h1>
      </div>

      {/* ======================= MAIN QUOTE ======================= */}
      <div className="bg-white py-16 px-6 flex justify-center">
        <div className="bg-[#C32228] text-white rounded-xl p-8 max-w-5xl text-center">
          <p className="text-2xl font-semibold">
            “Sport is the one place where your limits speak—and you get to answer back.”
          </p>
        </div>
      </div>

      {/* ======================= INTRO PARAGRAPH ======================= */}
      <div className="px-6 pb-20 flex justify-center">
        <p className="text-gray-600 max-w-4xl leading-8 text-lg text-center">
          Sports matter because they shape us far beyond the court or field...
        </p>
      </div>

      {/* ======================= IMAGE + WELL-BEING QUOTE ======================= */}
      <div className="bg-[#0E1A47] w-full py-24 px-6 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">

          <div className="bg-gray-300 w-full md:w-1/2 h-[350px] md:h-[420px] rounded-lg"></div>

          <p className="text-white text-xl md:text-2xl font-medium text-center md:text-left leading-relaxed md:w-1/2">
            “Sports strengthen the body, sharpen the mind, and awaken the soul—creating a complete sense of well-being.”
          </p>

        </div>
      </div>

      {/* ======================= BODY / MIND / SOUL ======================= */}
      <div className="w-full bg-white py-20 px-6 flex justify-center">
        <div className="max-w-6xl w-full relative">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">

            <div className="flex flex-col items-center px-6 text-center">
              <h2 className="text-3xl font-semibold text-[#0E1A47] mb-4">Body</h2>
              <p className="text-gray-600 leading-7">
                Through training, movement, and discipline, sports build strength...
              </p>
            </div>

            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 border-r-2 border-gray-300"></div>

            <div className="flex flex-col items-center px-6 text-center">
              <h2 className="text-3xl font-semibold text-[#0E1A47] mb-4">Mind</h2>
              <p className="text-gray-600 leading-7">
                Through training, movement, and discipline, sports build strength...
              </p>
            </div>

            <div className="hidden md:block absolute left-2/3 top-0 bottom-0 border-r-2 border-gray-300"></div>

            <div className="flex flex-col items-center px-6 text-center">
              <h2 className="text-3xl font-semibold text-[#0E1A47] mb-4">Soul</h2>
              <p className="text-gray-600 leading-7">
                At the soul level, sports ignite passion, purpose, and joy...
              </p>
            </div>

          </div>

          <p className="text-center text-gray-500 mt-16 mb-6">
            Together, sports become a pathway to holistic well-being
          </p>

          <ul className="text-gray-600 text-lg mb-16 space-y-2 mx-auto w-fit">
            <li>• A fit body</li>
            <li>• A steady mind</li>
            <li>• A fulfilled soul</li>
          </ul>

          <div className="space-y-10 text-gray-600 leading-8 text-lg max-w-4xl mx-auto">
            <p>Sports shape the way we think...</p>
            <p>Sports also help you deal with failure...</p>
            <p>In short, sports train your body...</p>
            <p>
              In 2025, obesity rates are predicted to continue rising globally...
            </p>
          </div>

        </div>
      </div>

      {/* ======================= CHILD OBESITY SECTION ======================= */}
      <div className="w-full bg-white py-20 px-6 flex justify-center">
        <div className="max-w-5xl w-full">

          <h3 className="text-2xl md:text-3xl font-semibold text-[#0E1A47] mb-8">
            Child and Adolescent Obesity
          </h3>

          <div className="space-y-4 text-gray-700 text-lg leading-7">
            <p className="flex gap-2">
              <span className="text-2xl leading-none">•</span>
              Globally, one in ten children aged 5–19 live with obesity.
            </p>
            <p className="flex gap-2">
              <span className="text-2xl leading-none">•</span>
              Obesity has become the most common form of malnutrition...
            </p>
            <p className="flex gap-2">
              <span className="text-2xl leading-none">•</span>
              Childhood and adolescent obesity has tripled since 2000.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-[#0E1A47] mt-12 mb-6">
            Consequences
          </h3>

          <ul className="text-gray-700 text-lg leading-8 space-y-3">
            <li>• Linked to diabetes and cardiovascular disease.</li>
            <li>• Economic burden: $4 trillion annually by 2035.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-8 mt-10">
            The rates of obesity and overweight among children in India are increasing...
          </p>

        </div>
      </div>

      {/* ================================================================ */}
      {/* =============== CAROUSEL CARD SECTION (ADDED) ================== */}
      {/* ================================================================ */}
      <div className="bg-[#C32228] py-20 px-6 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">

          {/* CAROUSEL */}
          <div className="w-full md:w-1/2">
            <Swiper spaceBetween={20} slidesPerView={1}>
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className="rounded-lg cursor-pointer transition-transform hover:scale-105"
                    alt="activity"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* TEXT */}
          <div className="md:w-1/2 text-white text-lg leading-8">
            Our school makes fitness a part of everyday life through exciting
            after-school activities like gym, rifle club, football, basketball,
            badminton, and many more. These programs help students stay active,
            healthy, and full of energy.
          </div>

        </div>

        {/* EXPANDED IMAGE OVERLAY */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
              alt="Expanded View"
            />
          </div>
        )}
      </div>
    <div className="w-full bg-white py-20 px-6">

      {/* Dotted Background Wrapper */}
      <div className="max-w-5xl mx-auto relative 
                      bg-[url('/dots.png')] bg-repeat">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0E1A47] mb-14 text-center">
          How our after-school sports help students
        </h1>

        {/* Bullet Section */}
        <div className="space-y-12 text-lg">

          {/* 1 */}
          <div>
            <p className="font-semibold text-[#0E1A47] flex items-start gap-3">
              <span className="text-2xl leading-none">•</span>
              Beat obesity the healthy way
            </p>
            <p className="text-gray-600 pl-8 mt-2">
              Regular movement keeps weight in check and builds stamina.
            </p>
          </div>

          {/* 2 */}
          <div>
            <p className="font-semibold text-[#0E1A47] flex items-start gap-3">
              <span className="text-2xl leading-none">•</span>
              Build strong habits early
            </p>
            <p className="text-gray-600 pl-8 mt-2">
              Kids learn to choose activity over screen time.
            </p>
          </div>

          {/* 3 */}
          <div>
            <p className="font-semibold text-[#0E1A47] flex items-start gap-3">
              <span className="text-2xl leading-none">•</span>
              Boost confidence
            </p>
            <p className="text-gray-600 pl-8 mt-2">
              Mastering a sport makes students feel proud and motivated.
            </p>
          </div>

          {/* 4 */}
          <div>
            <p className="font-semibold text-[#0E1A47] flex items-start gap-3">
              <span className="text-2xl leading-none">•</span>
              Improve focus in class
            </p>
            <p className="text-gray-600 pl-8 mt-2">
              Active bodies help create sharp, alert minds.
            </p>
          </div>

          {/* 5 */}
          <div>
            <p className="font-semibold text-[#0E1A47] flex items-start gap-3">
              <span className="text-2xl leading-none">•</span>
              Encourage teamwork and discipline
            </p>
            <p className="text-gray-600 pl-8 mt-2">
              Essential life skills learned through play.
            </p>
          </div>

        </div>

        {/* Footer Sentence */}
        <p className="text-gray-700 text-lg mt-16 text-center leading-relaxed">
          Together, we are <span className="font-semibold text-[#0E1A47]">change makers</span>, 
          creating a school community that stays active, beats obesity, and leads the way 
          toward a healthier future.
        </p>

      </div>
    </div>
    </div>
  );
}
