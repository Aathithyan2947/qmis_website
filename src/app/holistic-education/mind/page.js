import PageHeader from "@/components/PageHeader";

export default function mindActivities() {
  return (
    <div className="w-full  bg-grid-dots">

      <PageHeader contentTitle={'Mind'} />
      {/* ===================== MAIN CONTENT ===================== */}
      <section className="w-full  relative">

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-16">

          {/* Title */}
          <h1 className="text-3xl font-medium text-darkBlue-100">
            Activities for the Mind
          </h1>

          {/* Description */}
          <p className="mt-6 text-md text-gray-600 leading-loose">
            Academic enrichment programs have been shown to significantly improve student performance. Studies
            · indicate that such programs increase academic achievement scores by up to 20%, enhance critical thinking and

            study skills, and boost student's confidence and motivation to learn ..
          </p>



          <p className="mt-10 text-lg text-gray-700 font-bold">
            Academic Enrichment Programs for competitive exams
          </p>

          {/* ===================== CARDS SECTION ===================== */}
          <div className="mt-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="w-full h-80 rounded-lg overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={`/mind/${i}.png`}
                    alt={`Image ${i}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full ">

        <div className="bg-maroon-100 text-white text-center p-5 text-xl font-bold">
          Student Driven Classes for a refined classroom
        </div>

        <section className="w-full py-16 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center">

              {/* IMAGE */}
              <div className="relative z-10">
                <div className="w-[360px] h-[380px] rounded-sm overflow-hidden shadow-md">
                  <img
                    src="/mind/3.png"
                    alt="Model United Nations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* TEXT PILL */}
              <div className="ml-[-20px]">
                <div className="bg-[#0E1A4B] text-white px-10 py-8 rounded-r-[80px] rounded-l-[20px] max-w-xl shadow-lg">
                  <p className="text-lg leading-loose">
                    Model United Nations Session to display our communication and diplomacy
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 🔵 Skills & Values Section */}
        <section className="w-full bg-darkBlue-100 text-white py-20">
          <div className="max-w-5xl mx-auto px-6">

            {/* SECTION TITLE */}
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
              Skills and values Mapping
            </h2>

            {/* TOP ROW — IMAGE LEFT, TEXT RIGHT */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 mb-24">

              {/* IMAGE */}
              <div className="flex justify-center md:justify-start">
                <div className="w-[420px] h-[460px] overflow-hidden rounded-sm">
                  <img
                    src="/mind/4.png"
                    alt="STEAM Activity"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="tracking-wide">STEAM</span>
                </h3>
                <p className="text-gray-300 text-lg leading-loose">
                  STEAM encourages hands-on learning, resilience, and innovation,
                  preparing students for future challenges and careers with confidence
                  and adaptability.
                </p>
              </div>
            </div>

            {/* BOTTOM ROW — TEXT LEFT, IMAGE RIGHT */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

              {/* TEXT */}
              <div className="max-w-md order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4">
                  Skills it develops
                </h3>
                <p className="text-gray-300 text-lg leading-loose">
                  Critical thinking, creativity, collaboration, and problem-solving
                  skills.
                </p>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="w-[420px] h-[460px] overflow-hidden rounded-sm">
                  <img
                    src="/mind/5.png"
                    alt="Skills Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>
        </section>


      </div>
    </div>
  );
}
