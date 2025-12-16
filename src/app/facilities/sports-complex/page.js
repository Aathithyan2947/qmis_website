import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import PageHeader from "@/components/PageHeader";

export default function SportsComplex() {
  const sportsImages = [
    "/facility/SportsComplex/Pic_3.png",
    "/facility/SportsComplex/Pic_4.png",
    "/facility/SportsComplex/Pic_5.png",
    "/facility/SportsComplex/Pic_6.png",
    "/facility/SportsComplex/Pic_7.png",
    "/facility/SportsComplex/Pic_8.png",
    "/facility/SportsComplex/Pic_9.png",
  ]
  return (
    <>
      <PageHeader contentTitle={'Sports Complex'} />

      <div className="w-full bg-white pb-20">

        {/* ---------- YOUTUBE VIDEO ---------- */}
        <div className="max-w-3xl mx-auto px-4 pt-10">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">

            <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8qkMvUKojoI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>

        {/* ---------- DESCRIPTION TEXT ---------- */}
        <div className="max-w-3xl mx-auto text-center px-6 mt-8 text-gray-500 leading-loose">
          <p>
            Our school’s Sports Complex is a vibrant space where students stay active, explore their athletic skills,
            and enjoy healthy competition. With facilities for basketball, throwball, volleyball, 5-a-side football,
            skating, and an athletic track, it promotes fitness, teamwork, and overall development in a safe and
            inspiring environment.
          </p>
        </div>

        {/* ---------- RED QUOTES ---------- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-10">

          {/* Quote 1 */}
          <div className="bg-maroon-100 text-white 
                  w-full md:w-[500px] h-[120px]
                  flex items-center justify-center
                  rounded-2xl shadow-lg mx-auto">
            <p className="text-md md:text-lg font-medium text-center px-6 leading-relaxed">
              “Building champions, on the field and in life.”
            </p>
          </div>

          {/* Quote 2 */}
          <div className="bg-maroon-100 text-white 
                  w-full md:w-[500px] h-[120px]
                  flex items-center justify-center
                  rounded-2xl shadow-lg mx-auto">
            <p className="text-md md:text-lg font-medium text-center px-6 leading-relaxed">
              “Fields that fuel future champions.”
            </p>
          </div>

        </div>

        {/* ---------- IMAGE GALLERY ---------- */}
        <div className="max-w-6xl mx-auto px-4">
          <ActivitiesCarousel images={sportsImages} />
        </div>
      </div>
    </>
  )
}
