export default function BodyActivities() {
  return (
    <div className="w-full font-sans bg-white">

      {/* ===================== HEADER ===================== */}
      <header className="bg-[#0E1A47] py-8 flex justify-center">
        <h1 className="text-white text-3xl font-semibold">Body</h1>
      </header>

      {/* ===================== MAIN CONTENT ===================== */}
      <section className="w-full bg-white relative">

        {/* dotted background */}
        <div className="absolute inset-0 "></div>

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
    <div className="bg-white font-sans">
      {/* Activities Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Activities</h2>
          <p className="mt-2 text-gray-600">After school activities foster mastery by building confidence in a supportive environment.</p>
          <div className="mt-8 flex justify-center gap-6">
            {/* Empty boxes for images (replace with actual images) */}
            <div className="w-40 h-40 bg-gray-300"></div>
            <div className="w-40 h-40 bg-gray-300"></div>
            <div className="w-40 h-40 bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Aadukalam Section */}
      <section className="bg-indigo-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Aadukalam</h2>
          <p className="mt-2">The Annual Athletic Meet is a fun-filled day where students showcase their talents and skills.</p>
          <div className="mt-8 flex justify-center gap-6">
            <div className="w-40 h-40 bg-gray-300"></div>
            <div className="w-40 h-40 bg-gray-300"></div>
            <div className="w-40 h-40 bg-gray-300"></div>
          </div>
        </div>
      </section>

      <section className="py-12 flex flex-col items-center gap-12">
  {/* First Section: Box Left, Text Right */}
  <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
    <div className="w-40 h-40 bg-gray-300 flex-shrink-0"></div>
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-semibold text-gray-800">BFIT</h2>
      <p className="mt-2 text-gray-600">
        The activity that stems out of taking care of well-being of body, mind, and soul.
      </p>
    </div>
  </div>

  {/* Second Section: Text Left, Box Right */}
  <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
    <div className="text-center md:text-left md:order-1">
      <h2 className="text-3xl font-semibold text-gray-800">Skills It Develops</h2>
      <p className="mt-2 text-gray-600">
        Resilience, Self-confidence, Self-discipline, Independence, Endurance, Collaboration,
        Adaptability, Conflict resolution and Management, Problem solving, Decision making, and so on...
      </p>
    </div>
    <div className="w-40 h-40 bg-gray-300 flex-shrink-0 md:order-2"></div>
  </div>
</section>

    </div>
      </section>

    </div>
  );
}
