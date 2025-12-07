export default function mindActivities() {
  return (
    <div className="w-full font-sans bg-white">

      {/* ===================== HEADER ===================== */}
      <header className="bg-[#0E1A47] py-8 flex justify-center">
        <h1 className="text-white text-3xl font-semibold">Mind</h1>
      </header>

      {/* ===================== MAIN CONTENT ===================== */}
      <section className="w-full bg-white relative">

        {/* dotted background */}
        <div className="absolute inset-0 bg-[url('/dots.png')] opacity-20 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16">

          {/* Title */}
          <h1 className="text-4xl font-light text-[#0E1A47]">
            Activities for the Mind
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
           Academic enrichment programs have been shown to significantly improve student performance. Studies
· indicate that such programs increase academic achievement scores by up to 20%, enhance critical thinking and

study skills, and boost student's confidence and motivation to learn ..
          </p>

          

          <p className="mt-2 text-gray-700 font-medium">
            Academic Enrichment Programs for competitive exams
          </p>

          {/* ===================== CARDS SECTION ===================== */}
          <div className="mt-12 relative">

            {/* LEFT ARROW */}
            <button className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 text-[#0E1A47] text-3xl font-bold">
              ‹
            </button>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-full h-60 bg-gray-300 rounded-lg"
                ></div>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-[#0E1A47] text-3xl font-bold">
              ›
            </button>

          </div>
        </div>
      </section>
 
    <div className="w-full font-sans">

      {/* 🔴 Top Red Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm md:text-base font-medium">
        Student Driven Classes for a refined classroom
      </div>

      {/* 🔹 Top Images Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-10">

          {/* Two Images Row */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-[250px] h-[180px] bg-gray-300 rounded"></div>
            <div className="w-[250px] h-[180px] bg-gray-300 rounded"></div>
          </div>

          {/* Large Image + Rounded Text Bar */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
            <div className="w-[250px] h-[220px] bg-gray-300 rounded"></div>

            <div className="bg-[#0E1A4B] text-white px-6 py-4 rounded-r-full w-full md:w-auto md:ml-[-20px]">
              Model United Nations Session to display our communication and diplomacy
            </div>
          </div>

        </div>
      </div>

      {/* 🔵 Skills & Values Section */}
      <div className="bg-[#0E1A4B] text-white py-14">
  <div className="max-w-4xl mx-auto px-6">

    {/* Section Title */}
    <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
      Skills and Values Mapping
    </h2>

    {/* Left Image + Right Text */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
      <div className="w-[260px] h-[220px] bg-gray-300 rounded flex-shrink-0"></div>

      <div className="md:max-w-lg text-center md:text-left">
        <h3 className="text-xl font-bold mb-2">STEAM</h3>
        <p className="text-gray-300 leading-relaxed">
          STEAM encourages hands-on learning, resilience, and innovation,
          preparing students for future challenges and careers with confidence
          and adaptability.
        </p>
      </div>
    </div>

    {/* Skills It Develops + Right Image */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-14">
      <div className="md:max-w-sm text-center md:text-left">
        <h3 className="text-xl font-semibold mb-3">Skills It Develops</h3>
        <p className="text-gray-300">
          Critical thinking, creativity, collaboration, and problem-solving skills.
        </p>
      </div>

      <div className="w-[260px] h-[200px] bg-gray-300 rounded flex-shrink-0"></div>
    </div>

  </div>
</div>


    </div>
    </div>
  );
}
