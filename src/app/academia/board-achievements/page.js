import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function BoardAchievements() {
  return (
    <>
      <PageHeader contentTitle={'Board Achievements'} />
      {/* 1st section */}
      <div className="w-full py-12 bg-grid-dots">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Main Quote Box */}
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
                  QMIS has consistently achieved 100% results in the CBSE board
                  examinations, with toppers attaining up to 99%, reflecting the
                  school's commitment to academic excellence and personalized
                  attention.
                </p>
              </div>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-4 text-gray-500">
            <div className="flex items-start space-x-3">
              <span className="text-black mt-1">•</span>
              <p className="text-sm md:text-base leading-loose">
                Students have secured multiple centums across varied subjects.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-black mt-1">•</span>
              <p className="text-sm md:text-base leading-loose">
                With a weighted average of 84%, QMIS stands out, as fewer than 2% of schools in India reach this level of performance, and the school has also earned numerous district and state ranks in the board exams.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <section className="bg-grid-dots py-20 px-6 md:px-20">
        {/* ======================= CARD 1 ======================= */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 mb-32">
            {/* Left Image */}
            <div className="relative">
              <Image
                src="/board-achievements/1.png"
                alt="Someshvar Sharan"
                width={400}
                height={400}
                className="rounded-lg object-contain"
              />
              <p className="absolute bottom-0 left-0 bg-black/80 text-white px-6 py-3 text-sm tracking-wide">
                SOMESHVAR SHARAN (GRADE 11)
              </p>
            </div>

            {/* Right Text */}
            <p className="text-gray-500 leading-loose text-lg max-w-[650px]">
              “Our 10th board preparation at Queen Mira International School was
              strongly supported. We balanced academics and sports, playing badminton
              daily and then attending focused study sessions. Regular tests, detailed
              analysis, and consistent faculty guidance ensured steady learning and
              improvement, contributing greatly to our performance.”
            </p>
          </div>
        </div>
        {/* ======================= CARD 2 ======================= */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 mb-32">
            {/* Left Text */}
            <p className="text-gray-500 leading-loose text-lg max-w-[650px] order-2 md:order-1">
              “As an alumnus of Queen Mira, I had the privilege of securing a state
              rank in Grade 10, thanks to the unwavering support of my teachers and
              friends who shaped my journey. Having spent more than half my life
              here, I can confidently say I wouldn’t have wished for any other school.
              Queen Mira truly stands as a student-friendly institution that nurtures
              success and personal growth.”
            </p>

            {/* Right Image */}
            <div className="relative order-1 md:order-2">
              <Image
                src="/board-achievements/2.png"
                alt="Shrinithi"
                width={400}
                height={400}
                className="rounded-lg object-contain"
              />
              <p className="absolute bottom-0 left-0 bg-black/80 text-white px-6 py-3 text-sm tracking-wide">
                SHRINITHI (ALUMNI - STATE RANK HOLDER)
              </p>
            </div>
          </div>

        </div>
        {/* ======================= CARD 3 ======================= */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20">
            {/* Left Image */}
            <div className="relative">
              <Image
                src="/board-achievements/3.png"
                alt="Shivani Nachiyar"
                width={400}
                height={400}
                className="rounded-lg object-contain "
              />
              <p className="absolute bottom-0 left-0 bg-black/80 text-white px-6 py-3 text-sm tracking-wide">
                SHIVANI NACHIYAR
              </p>
            </div>

            {/* Right Text */}
            <p className="text-gray-500 leading-loose text-lg max-w-[650px]">
              “As a student transitioning from Grade 9 to Grade 10, Queen Mira has
              provided exceptional academic support. Monthly and Cumulative
              Assessments deepen our understanding and prepare us effectively for
              the board exams. In Grade 10, the schedule is thoughtfully structured
              to avoid overwhelming students, while slip tests and RCTs strengthen
              learning and assess true understanding. I look forward to continuing my
              journey at QMIS.”
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
