import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AcademicProgrammes() {
  return (
    <>
      <PageHeader contentTitle="Academic Program" />

      <section className="bg-grid-dots py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">

          {/* SECTION 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <Image
              src="/academic-program/1.png"
              alt="Early Childhood Programme"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full"
            />
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              The Early Childhood Programme (Grades Pre KG1, KG2, KG3) nurtures
              curiosity through activity-based learning and engaging experiences.
            </p>
          </div>

          {/* SECTION 2 (SWAP) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24">
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              The Primary Programme (Grades 1-5) builds core skills through inquiry,
              LSRW development, problem-solving, and interdisciplinary learning.
            </p>
            <Image
              src="/academic-program/2.png"
              alt="Primary Programme"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* SECTION 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <Image
              src="/academic-program/3.png"
              alt="Middle Years Programme"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full"
            />
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              The Middle Years Programme (Grades 6-8) strengthens critical thinking
              and life skills through meaningful projects, presentations, and
              research-based learning.
            </p>
          </div>

          {/* SECTION 4 (SWAP) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24">
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              Guided by expert staff, our CBSE Secondary (Grades 9 & 10) and Senior
              Secondary Programme (Grades 11 & 12) blends competency-based learning,
              personalised support, and holistic growth. We consistently produce
              successful, industry-ready students equipped for tomorrow’s challenges.
            </p>
            <Image
              src="/academic-program/4.png"
              alt="Secondary & Senior Secondary Programme"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* SECTION 5 */}
          <div className="w-full py-12 bg-white ">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Content - Appears FIRST on mobile, FIRST on desktop (left) */}
                <div className="order-1 text-gray-700 space-y-4">
                  <p className="text-lg md:text-xl leading-relaxed italic">
                    "Queen Mira has provided quality education rooted in project-based and research-oriented learning. The teaching environment prioritizes student comfort while equally emphasizing life skills and holistic activities. Pre-planned continuous assessments further strengthen our preparation for major examinations."
                  </p>
                </div>

                {/* Image - Appears SECOND on mobile, SECOND on desktop (right) */}
                <div className="order-2 w-full h-[90%] rounded-lg overflow-hidden shadow-xl relative">
                  <Image
                    src="/academic-program/5.png"
                    alt="Tanvi Pavan Kumar"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="text-sm md:text-base font-bold uppercase tracking-wide">
                      Tanvi Pavan Kumar
                    </h3>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="w-full bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
              {/* Testimonial Card */}
              <div className="flex flex-col md:flex-row items-center mb-20">
                {/* Image */}
                <div className="w-full md:w-auto shrink-0">
                  <Image
                    height={300}
                    width={300}
                    src="/academic-program/6.png"
                    alt="Deepika Siva"
                    className="w-full md:w-[350px] h-auto object-cover"
                  />
                </div>
                {/* Content Card with Conditional Rounded Edge */}
                <div className="relative w-full md:w-auto md:flex-1 mt-8 md:mt-0">
                  <div className="bg-[#252d52] text-white rounded-md md:rounded-r-full py-12 px-12 md:pl-24 md:pr-16">
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-normal mb-2">Deepika Siva</h3>
                      <p className="text-gray-300 text-lg">Parent of Deepakshi</p>
                    </div>
                    <p className="text-white text-base md:text-lg leading-relaxed">
                      "We are delighted with Queen Mira International School (QMIS) for our daughter, Deepakshi. The school's holistic approach has nurtured her academic growth, creativity, and confidence. We are proud of her Holistic Achiever's Award and grateful to the dedicated staff for their support. QMIS's commitment to excellence and parent partnership makes it a truly student-centered school."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
