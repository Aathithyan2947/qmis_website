export default function mindActivities() {
  return (
    <div className="w-full font-sans bg-white">

      {/* ===================== HEADER ===================== */}
      <header className="bg-[#0E1A47] py-8 flex justify-center">
        <h1 className="text-white text-3xl font-semibold">Body</h1>
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

    </div>
  );
}
