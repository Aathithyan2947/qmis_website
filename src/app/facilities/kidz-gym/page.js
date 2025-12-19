import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import ImageCarousel from "@/components/ImageCarousel";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function KidzGym() {
  const gymImages = [
    "/facility/KidzGym/Pic_4.png",
    "/facility/KidzGym/Pic_5.png",
    "/facility/KidzGym/Pic_6.png",
    "/facility/KidzGym/Pic_7.png",
    "/facility/KidzGym/Pic_8.png",
    "/facility/KidzGym/Pic_9.png",
  ];
  return (
    <>
      <PageHeader contentTitle={'Kidz Gym'} />
      <div className="w-full bg-grid-dots pb-20">

        {/* ---------- YOUTUBE VIDEO ---------- */}
        <div className="max-w-3xl mx-auto px-4 pt-10">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">

            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fLKl8CDLz6A"
                title="YouTube Shorts video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

            </div>

          </div>
        </div>

        {/* ---------- DESCRIPTION TEXT ---------- */}
        <div className="max-w-4xl mx-auto text-center px-6 mt-8 text-gray-500 leading-loose">
          <p>
            At QMIS, the Kidz Gym, in collaboration with Celebrate Sports Foundation, provides a fun and safe space for
            kindergarteners to stay active, build strength, coordination, and confidence, and reduce screen time. Through guided
            movement, age-appropriate equipment, and engaging play, children develop healthy habits early.
          </p>
          <p className="text-center mt-8">
            With UNICEF predicting over 27 million Indian children and adolescents aged 5-19 will be living with obesity by 2030,
            the Kidz Gym offers a proactive approach to prevent sedentary lifestyles, encourage fitness, and promote long-term
            physical and emotional wellness.
          </p>
        </div>

        {/* ---------- RED QUOTES ---------- */}
        {/* <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-10"> */}
        {/**/}
        {/*   <div className="bg-red-600 text-white p-6 rounded-lg text-center shadow"> */}
        {/*     <p className="text-lg font-medium"> */}
        {/*       “Building champions, on the field and in life.” */}
        {/*     </p> */}
        {/*   </div> */}
        {/**/}
        {/*   <div className="bg-red-600 text-white p-6 rounded-lg text-center shadow"> */}
        {/*     <p className="text-lg font-medium"> */}
        {/*       “Fields that fuel future champions.” */}
        {/*     </p> */}
        {/*   </div> */}

        {/* </div> */}
        <div className="w-full flex justify-center py-20 px-2">
          {/* Image wrapper */}
          <div className="relative w-[500px] max-w-full">
            {/* Background image */}
            <Image
              src="/facility/KidzGym/Pic_1.png"
              alt="Quote Box"
              width={900}
              height={450}
              className="w-full h-auto"
              priority
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <p className="text-white text-md md:text-lg leading-loose max-w-2xl">
                “Excessive screen time can interfere with a child’s social skills,
                creativity, and emotional development.”
              </p>

              <span className="mt-6 text-white text-sm text-right md:text-base tracking-wide">
                — UNICEF
              </span>
            </div>
          </div>
        </div>

        {/* ---------- IMAGE GALLERY ---------- */}
        <div className="max-w-6xl mx-auto">
          <ActivitiesCarousel images={gymImages} />
        </div>
      </div >
    </>
  )
}
