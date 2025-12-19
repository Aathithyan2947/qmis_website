import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default function Melbourne() {
  return (
    <div className="w-full bg-white text-gray-800">

      <PageHeader contentTitle={'The University of Melbourne'} />
      <div className="w-full flex justify-center mt-10">
        <div className="bg-maroon-100 text-white px-8 py-6 rounded-2xl shadow-md inline-block">
          <h1 className="text-xl md:text-3xl font-semibold text-center">
            Reimagining learning with the University of Melbourne
          </h1>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-6 pt-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <Link
          href="https://drive.google.com/file/d/1I4ITHV9aUQin7zialwYgEK0xgzkEjjMS/view"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative w-full h-80 overflow-hidden rounded-lg cursor-pointer group">

            {/* Background Image */}
            <Image
              src="/melbourne/1.png"
              alt="Global studies skill gap visualization"
              fill
              className="object-cover blur-md scale-105"
              sizes="100vw"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-black/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-8 h-8 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

          </div>
        </Link>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-semibold text-darkBlue-100 mb-4">
            Global studies show a clear skill gap
          </h2>

          <p className="text-gray-500 leading-loose">
            According to the World Economic Forum (WEF), creativity ranks among the top 3 skills needed for the future, yet over 70% of schools worldwide still rely heavily on rote learning and traditional assessments.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        {/* Bullet Points */}
        <ul className="space-y-3 text-gray-500 leading-loose">
          <li className="flex items-start gap-3">
            <span className="text-gray-500 text-xl">•</span>
            <span>
              A UNESCO global monitoring report highlights that fewer than 30% of schools incorporate
              structured programs that build creativity and higher-order thinking.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-gray-500 text-xl">•</span>
            <span>
              Employers across 150+ countries report that creative problem-solving is one of the most
              difficult skills to find in graduates (WEF Future of Jobs Report).
            </span>
          </li>
        </ul>

        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-darkBlue-100 mt-14 mb-12">
          QMIS' Principal perspective
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Text Block */}
          <div className="text-gray-500 leading-loose">
            <h3 className="font-semibold text-gray-700 text-lg mb-4">
              Why QMIS chose this Future-Ready Path
            </h3>

            <p>
              "As educators preparing children for a rapidly evolving world, we know that
              traditional exams alone are not enough. Global research indicates that by 2035,
              nearly 85% of emerging careers will rely on competencies beyond academics —
              creativity, collaboration, adaptability, ethical reasoning, and complex
              problem-solving."
            </p>
          </div>

          {/* Image */}
          <div className="w-full h-96 relative">
            <Image
              src="/melbourne/2.png"
              alt="QMIS Principal's perspective"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 ">

        {/* Paragraphs */}
        <p className="text-gray-500 text-md leading-loose mb-6">
          Our collaboration with the University of Melbourne positions QMIS among fewer than
          60 pioneering schools worldwide transforming how student growth is measured. Only
          2 Indian Schools have collaborated with the University of Melbourne. QMIS is the
          only CBSE school in the world — to be part of this prestigious global initiative.
        </p>

        <p className="text-gray-500 leading-loose mb-16">
          At QMIS, every activity is intentionally mapped to a structured skill framework,
          ensuring students develop these essential future skills.
        </p>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full h-[50vh] relative">
            <Image
              src="/melbourne/3.png"
              alt="Dr. Sudha Govindaswamy"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-darkBlue-100">
              Dr. Sudha Govindaswamy
            </h2>

            <p className="text-gray-600 text-lg">
              Associate Director for Middle Eastern Countries (CIS)
            </p>

            <p className="text-gray-500 leading-loose text-lg">
              “QMIS is now under the CIS research radar for its unique ability to integrate
              global competency-based practices within a national curriculum framework.”
            </p>

            <p className="text-gray-500 leading-loose text-lg">
              To strengthen this work with scientific rigor and world-class expertise, we
              chose to partner with the University of Melbourne — a global leader in
              educational innovation.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Left: Text Content */}
          <div>
            {/* Section Headings */}
            <h2 className="text-xl md:text-2xl font-semibold text-darkBlue-100 mt-6">
              Why the New Metrics Program matters?
            </h2>

            <h2 className="text-xl md:text-2xl font-semibold text-darkBlue-100 mt-3 mb-10">
              What This Means for Our Students?
            </h2>

            {/* Bullet List */}
            <ul className="space-y-6 leading-loose">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 text-xl">•</span>
                <span>
                  Development of future-ready competencies (metacognition, critical thinking,
                  problem solving...) that global universities and employers prioritise.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-gray-500 text-xl">•</span>
                <span>
                  Access to research-backed assessment tools (available on the Ruby Platform of
                  New Metrics — domains such as agency in learning, collaboration, acting ethically,
                  Active Citizenship...) created by world-leading education experts.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-gray-500 text-xl">•</span>
                <span>
                  A holistic 360° learner profile capturing creativity, values, capability, and
                  character is provided.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-gray-500 text-xl">•</span>
                <span>
                  Stronger national and international university pathways.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-gray-500 text-xl">•</span>
                <span>
                  Personalised credentials and a comprehensive learner (student) portfolio issued
                  directly by the University of Melbourne.
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md md:max-w-lg h-[70vh] relative rounded-lg overflow-hidden">
              <Image
                src="/melbourne/Pic 3.png"
                alt="New Metrics Program"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
