"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PageHeader from "@/components/PageHeader";
import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import Image from "next/image";

export default function SportsPage() {
  // Images for the carousel
  const sportsImages = [
    "/sports/Pic 5.png",
    "/sports/Pic 6.png",
    "/sports/Pic 7.png",
    "/sports/Pic 8.png",
    "/sports/Pic 9.png",
  ];
  const images = [
    "/sports/6.png",
    "/sports/5.png",
    "/sports/3.png",
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ======================= HEADER ======================= */}
      <PageHeader contentTitle={'Sports'} />
      {/* ======================= MAIN QUOTE ======================= */}
      <div className="bg-white py-16 px-6 flex justify-center">
        <div className="bg-maroon-100 text-white rounded-xl p-8 max-w-5xl text-center">
          <p className="text-2xl font-semibold">
            “Sport is the one place where your limits speak—and you get to answer back.”
          </p>
        </div>
      </div>

      {/* ======================= INTRO PARAGRAPH ======================= */}
      <div className="px-6 pb-20 flex justify-center">
        <p className="text-gray-600 max-w-4xl leading-8 text-lg text-left">
          Sports matter because they shape us far beyond the court or field. They build discipline, strengthen resilience, sharpen focus, and teach us how to grow through pressure. When we train our body, we influence our mind; when our mind strengthens, our spirit follows. That is why sports are more than activity—they are a powerful path to becoming a complete, balanced individual.
        </p>
      </div>

      {/* ======================= IMAGE + WELL-BEING QUOTE ======================= */}
      <div className="bg-darkBlue-100 w-full py-24 px-6 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">

          <div className=" w-full md:w-1/2 h-[350px] md:h-[420px] rounded-lg">
            <img
              src="/sports/1.png"
              alt="Description"
              className="w-full h-full object-contain rounded-lg"
            /></div>

          <p className="text-white text-xl md:text-2xl font-medium text-center md:text-left leading-relaxed md:w-1/2">
            “Sports strengthen the body, sharpen the mind, and awaken the soul—creating a complete sense of well-being.”
          </p>

        </div>
      </div>

      {/* ======================= BODY / MIND / SOUL ======================= */}
      <div className="w-full bg-grid-dots py-20 px-6 flex justify-center">
        <div className="max-w-6xl w-full relative">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">

  {/* Body */}
  <div className="flex flex-col items-center px-6 text-center">
    <div className="inline-flex items-center gap-4 px-6 py-3 mb-6 bg-white border border-gray-200 rounded-full shadow-md">
  {/* Body */}
  <div className="flex flex-col items-center px-6 text-center">
    <div className="flex items-center gap-3 mb-4">
  <Image
    src="/sports/01.png"
    alt="Body Icon"
    width={64}
    height={64}
  />
  <h2 className="text-3xl font-semibold text-[#0E1A47]">
    Body
  </h2>
</div>

            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 border-r-2 border-gray-300"></div>

            <div className="flex flex-col items-center px-6 text-center">
              <h2 className="text-3xl font-semibold text-[#0E1A47] mb-4">Mind</h2>
              <p className="text-gray-600 leading-loose">
                Through training, movement, and discipline, sports build strength, stamina, coordination, and overall physical health. Every practice session pushes the body to grow stronger and more capable.
              </p>
            </div>

  {/* Mind */}
  <div className="flex flex-col items-center px-6 text-center">
   <div className="inline-flex items-center gap-4 px-6 py-3 mb-6 bg-white border border-gray-200 rounded-full shadow-md">

    <p className="text-gray-600 text-left leading-loose">
      Through training, movement, and discipline, sports build strength,
      stamina, coordination, and overall physical health. Every practice
      session pushes the body to grow stronger and more capable.
    </p>
  </div>

  {/* Divider */}
  <div className="hidden md:block absolute left-1/3 top-0 bottom-0 border-r-2 border-gray-300"></div>

  {/* Mind */}
  <div className="flex flex-col items-center px-6 text-center">
   <div className="flex items-center gap-3 mb-4">
  <Image
    src="/sports/02.png"
    alt="mind Icon"
    width={64}
    height={64}
  />
  <h2 className="text-3xl font-semibold text-[#0E1A47]">
    Mind
  </h2>
</div>
    <p className="text-gray-600 text-left leading-loose">
      Through training, movement, and discipline, sports build strength,
      stamina, coordination, and overall physical health. Every practice
      session pushes the body to grow stronger and more capable.
    </p>
  </div>


            <div className="flex flex-col items-center px-6 text-center">
              <h2 className="text-3xl font-semibold text-[#0E1A47] mb-4">Soul</h2>
              <p className="text-gray-600 leading-loose">
                At the soul level, sports ignite passion, purpose, and joy. The thrill of improvement, the spirit of teamwork, and the drive to compete connect athletes deeply to their inner motivation and identity.
              </p>
            </div>

  {/* Soul */}
  <div className="flex flex-col items-center px-6 text-center">
   <div className="inline-flex items-center gap-4 px-6 py-3 mb-6 bg-white border border-gray-200 rounded-full shadow-md">
  <Image
    src="/sports/03.png"
    alt="Soul Icon"
    width={48}
    height={48}

  {/* Divider */}
  <div className="hidden md:block absolute left-2/3 top-0 bottom-0 border-r-2 border-gray-300"></div>

  {/* Soul */}
  <div className="flex flex-col items-center px-6 text-center">
    <div className="flex items-center gap-3 mb-4">
  <Image
    src="/sports/03.png"
    alt="mind Icon"
    width={64}
    height={64}
  />
  <h2 className="text-3xl font-semibold text-[#0E1A47]">
    Soul
  </h2>
</div>
    <p className="text-gray-600 text-left leading-loose">
      At the soul level, sports ignite passion, purpose, and joy. The thrill
      of improvement, the spirit of teamwork, and the drive to compete connect
      athletes deeply to their inner motivation and identity.
    </p>
  </div>

</div>


          <div className="flex flex-col md:flex-row items-start gap-10 mt-16">
            <div className="flex-1">
              <p className="text-center text-xl text-gray-600 font-semibold mt-10 mb-6">
                Together, sports become a pathway to holistic well-being
              </p>
              <ul className="text-gray-600 text-lg mb-16 mx-auto w-fit list-disc list-inside flex space-x-10">
                <li className="whitespace-nowrap">A fit body</li>
                <li className="whitespace-nowrap">A steady mind</li>
                <li className="whitespace-nowrap">A fulfilled soul</li>
              </ul>
              <div className="space-y-10 text-gray-500 leading-loose text-lg max-w-4xl mx-auto">
                <p>
                  Sports shape the way we think and handle challenges. When you play, you learn to stay positive because every practice, win, and mistake teaches you something. You see that effort leads to improvement, so you naturally build a stronger mindset.

                  Sports also help you deal with failure. Missing a point or losing a game shows you that failure is normal and temporary. You learn to accept it, correct it, and move forward. This attitude carries into daily life—whether you face a tough exam, a bad day, or a setback, you handle it with more confidence and patience.

                  In short, sports train your body, but they also train your mind to stay strong, calm, and ready to try again.
                </p>
                <p>
                  In 2025, obesity rates are predicted to continue rising globally...
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/sports/2.png"
                alt="Sports Wellbeing"
                className="w-full h-[600px] object-cover rounded-lg shadow"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ======================= CHILD OBESITY SECTION ======================= */}
      <div className="w-full bg-grid-dots py-16 px-6 flex justify-center">
        <div className="max-w-6xl w-full">
          <ActivitiesCarousel images={sportsImages} />
          <section className="mt-16 px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* LEFT – Quote Image */}
              <div className="flex justify-center">
                <div className="relative w-[500px] max-w-full">
                  <Image
                    src="/facility/KidzGym/Pic_1.png"
                    alt="Quote Box"
                    width={900}
                    height={450}
                    className="w-full h-auto"
                    priority
                  />

                  {/* Overlay Quote */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                    <p className="text-white text-md md:text-lg leading-loose max-w-xl">
                      Globally, one in the ten children aged 5-19, or 188 million, live with obesity.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT – Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#0E1A47] mb-8">
                  Child and Adolescent Obesity
                </h3>

                <div className="space-y-6 text-gray-500 text-lg leading-7">
                  <p className="flex gap-3"> 
                    Obesity has become the most common form of malnutrition among
                    school-aged children and adolescents worldwide, surpassing
                    underweight.
                  </p>

                  <p className="flex gap-3">
                    The prevalence of underweight children has decreased globally,
                    but the prevalence of obesity has tripled since 2000.
                  </p>
                </div>
              </div>

            </div>
          </section>

          <h3 className="text-2xl md:text-3xl font-semibold text-darkBlue-100 mt-12 mb-5">
            Consequences
          </h3>

          <ul className="text-gray-500 text-lg leading-loose">
            <li> Obesity is linked to a higher risk of non-communicable diseases such as diabetes, cardiovascular disease, and certain cancers.`</li>
            <li> The economic impact of obesity is also substantial, with the global cost projected to exceed $4 trillion annually by 2035</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-center">

            {/* LEFT – TEXT */}
            <div>
              <p className="mt-4 text-gray-500 leading-loose">
                The rates of obesity and overweight among children and adolescents in India
                are increasing rapidly, driven primarily by changing diets, sedentary
                lifestyles, and socioeconomic shifts. India is projected to account for
                11% of the global burden of childhood obesity by 2030, which equates to over
                27 million children and adolescents aged 5 to 19 living with obesity.
                <br />
                <br />
                After-school sports directly combat obesity by increasing{" "}
                <span className="font-medium text-gray-700">energy expenditure</span> and
                reducing{" "}
                <span className="font-medium text-gray-700">sedentary time</span> (screen
                time).
              </p>
            </div>

            {/* RIGHT – IMAGE */}
            <div className="flex justify-center">
              <img
                src="/sports/5.png"
                alt="Sports activity"
                className="w-full max-w-lg h-[320px] object-cover rounded-lg"
              />
            </div>

          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* =============== CAROUSEL CARD SECTION (ADDED) ================== */}
      {/* ================================================================ */}
      <div className="bg-[#C32228] py-20 px-6 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">

          {/* CAROUSEL */}
           <div className="flex justify-center">
              <img
                src="/sports/6.png"
                alt="Sports activity"
                className="w-150 max-w-lg h-[320px] object-cover rounded-lg"
              />
            </div>

          {/* TEXT */}
          <div className="md:w-1/2 text-white text-lg leading-loose">
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
      <div className="w-full bg-grid-dots py-20 px-6">
        <div className="mx-auto max-w-6xl mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-darkBlue-100">
            How our after-school sports help students
          </h2>

        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT — TEXT CONTENT */}
          <div>

            {/* Heading */}

            {/* Bullet Points */}
            <div className="space-y-4 text-lg">

              {/* Item 1 */}
              <div>
                <p className="font-semibold text-gray-700 flex items-start gap-4">
                  <span className="text-xl leading-none mt-1">•</span>
                  Beat obesity the healthy way
                </p>
                <p className="text-gray-500 pl-7 mt-2">
                  Regular movement keeps weight in check and builds stamina.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <p className="font-semibold text-gray-700 flex items-start gap-4">
                  <span className="text-xl leading-none mt-1">•</span>
                  Build strong habits early
                </p>
                <p className="text-gray-500 pl-7 mt-2">
                  Kids learn to choose activity over screen time.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <p className="font-semibold text-gray-700 flex items-start gap-4">
                  <span className="text-xl leading-none mt-1">•</span>
                  Boost confidence
                </p>
                <p className="text-gray-500 pl-7 mt-2">
                  Mastering a sport makes students feel proud and motivated.
                </p>
              </div>

              {/* Item 4 */}
              <div>
                <p className="font-semibold text-gray-700 flex items-start gap-4">
                  <span className="text-xl leading-none mt-1">•</span>
                  Improve focus in class
                </p>
                <p className="text-gray-500 pl-7 mt-2">
                  Active bodies help create sharp, alert minds.
                </p>
              </div>

              {/* Item 5 */}
              <div>
                <p className="font-semibold text-gray-700 flex items-start gap-4">
                  <span className="text-xl leading-none mt-1">•</span>
                  Encourage teamwork and discipline
                </p>
                <p className="text-gray-500 pl-7 mt-2">
                  Essential life skills learned through play.
                </p>
              </div>

            </div>

            {/* Footer Line */}

          </div>

          {/* RIGHT — IMAGE */}
          <div className="w-full">
            <img
              src="/sports/7.png"
              alt="After-school sports"
              className="w-full h-[420px] object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 text-lg mt-8 leading-loose ">
            Together, we are{" "}
            <span className="font-semibold text-gray-800">
              change makers
            </span>
            , creating a school community that stays active, beats obesity,
            and leads the way toward a healthier future.
          </p>

        </div>
      </div>

    </div>
  );
}
