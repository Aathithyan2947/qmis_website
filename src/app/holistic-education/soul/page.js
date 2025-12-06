export default function soulActivities() {
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
            Activities for the Body
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
            According to WHO, children who get 60 minutes of daily physical activity have 
            better concentration and reduced anxiety. Active students also experience 
            improved fitness and lower risks of obesity. Students build discipline, 
            strength, teamwork, through
          </p>

          {/* B-Fit */}
          <h2 className="mt-10 text-2xl font-semibold text-[#B82025]">B-Fit</h2>

          <p className="mt-2 text-gray-700 font-medium">
            Everyday B-fit classes using an exclusive curriculum.
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
