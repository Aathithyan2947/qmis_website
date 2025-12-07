export default function soulActivities() {
  return (
    <div className="w-full font-sans bg-white">

      {/* ===================== HEADER ===================== */}
      <header className="bg-[#0E1A47] py-8 flex justify-center">
        <h1 className="text-white text-3xl font-semibold">Soul</h1>
      </header>

      {/* ===================== MAIN CONTENT ===================== */}
      <section className="w-full bg-white relative">

        {/* dotted background */}
        <div className="absolute inset-0 "></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16">

          {/* Title */}
          <h1 className="text-4xl font-light text-[#0E1A47]">
            Activities for the Soul
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
           Social-emotional learning programs can boost student academic performance by an average of 8% when implemented for a full academic year, according to a Yale study. Our school also integrates activities helping students develop essential skills like empathy, emotional wellbeing and responsible decision-making, which foster both academic success and personal growth.
          </p>

    <div className="w-full font-sans">

      {/* 🔹 Top Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          {/* Text */}
          <p className="text-gray-700 max-w-lg leading-relaxed text-center md:text-left">
            Community outreach projects through IDCA International Global Citizens Award, 
            Kairo develop student's empathy.
          </p>

          {/* Image */}
          <div className="w-[260px] h-[200px] bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* 🔴 Red Dual Column Section */}
      <div className="bg-red-700 text-white py-14 px-6">
        <div className="container mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">

            {/* Left Column */}
            <div className="flex flex-col items-center md:items-center text-center">
              <p className="max-w-xs mb-6">
                Sibling Care creates a space of belongingness
              </p>
              <div className="w-[150px] h-[130px] bg-gray-300 rounded"></div>
            </div>

            {/* Divider Line (only on desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/50"></div>

            {/* Right Column */}
            <div className="flex flex-col items-center md:items-center text-center">
              <p className="max-w-xs mb-6">
                Aayulu, a life skill game with a transformative approach to life education
              </p>
              <div className="w-[150px] h-[130px] bg-gray-300 rounded"></div>
            </div>

          </div>
        </div>
      </div>

      {/* 🔵 Skills & Values Section */}
      <div className="py-14">
        <div className="container mx-auto px-6">

          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
            Skills and values Mapping
          </h2>

          {/* Left Image + Right Text */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="w-[260px] h-[230px] bg-gray-300 rounded"></div>

            <div className="md:max-w-lg">
              <h3 className="text-xl font-semibold mb-2">Sibling Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Sibling Care is a nurturing experience where older students learn 
                to guide and support younger peers.
              </p>
            </div>
          </div>

          {/* Skills It Develops + Right Image */}
          <div className="flex flex-col md:flex-row items-start justify-between mt-14 gap-10">

            <div className="max-w-sm">
              <h3 className="text-lg font-semibold mb-3">Skills it develops</h3>
              <p className="text-gray-600">
                Interpersonal skills, patience, counselling, communication, 
                emotional intelligence.
              </p>
            </div>

            <div className="w-[260px] h-[200px] bg-gray-300 rounded"></div>

          </div>
        </div>
      </div>

    </div>
  <div className="flex justify-center items-center">
  <img 
    src="/endpage.png"
    alt="Centered"
    className="w-[500px] h-auto"
  />
</div>

        </div>
      </section>

    </div>
  );
}
