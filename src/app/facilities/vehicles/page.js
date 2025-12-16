import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Vehicles() {
  const vehicleImages = Array.from({ length: 10 }, (_, i) =>
    `/facility/Vehicle/Pic_${i + 3}.png`
  );

  return (
    <>
      <PageHeader contentTitle={'Vehicles'} />

      <div className="w-full bg-grid-dots pb-20">

        {/* ---------------- VIDEOS SECTION ---------------- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pt-10">

          {/* Video 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
              <iframe
                className="w-full h-64 md:h-80 rounded-lg"
                src="https://www.youtube.com/embed/lGPT94W1lpA"
                allowFullScreen
              ></iframe>

            </div>
            <p className="text-center mt-3 text-lg md:text-xl  font-semibold text-gray-500">Bus Rally</p>
          </div>

          {/* Video 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
              <iframe
                src="https://www.instagram.com/reel/DQeYst4j_hk/embed"
                className="w-full h-64 md:h-80 rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-lg md:text-xl mt-3 font-semibold text-gray-500">Safety Training</p>
          </div>
        </div>

        {/* ---------------- BUS IMAGES SECTION ---------------- */}
        <div className="max-w-7xl mx-auto ">
          <ActivitiesCarousel images={vehicleImages} />
        </div>

        {/* ---------------- QUOTE + TEXT SECTION ---------------- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 mt-10 items-center">

          {/* Quote Section */}
          <div className="relative flex justify-center">
            <div className="relative w-96 h-[300px]">
              <Image
                src="/facility/Vehicle/1.png"
                alt="Quote shape"
                fill
                className="object-contain opacity-90"
              />
            </div>

          </div>

          {/* Text Section */}
          <div className="text-gray-500 text-lg leading-loose">
            <p>
              At QMIS, our school buses deliver comfort and security—with air-conditioned interiors,
              GPS tracking, and CCTV surveillance so every trip is supervised and safe.
            </p>

            <p className="mt-4">
              Our drivers and conductors are carefully trained, well-groomed, and deeply committed to
              child safety.
            </p>

            <p className="mt-4">
              With regular maintenance checks and a strict safety-first approach, we ensure that
              students travel in a reliable, caring, and protected environment.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
