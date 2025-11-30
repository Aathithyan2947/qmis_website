export default function SportsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ======================= HEADER ======================= */}
      <div className="bg-[#0E1A47] w-full py-16 flex justify-center">
        <h1 className="text-white text-4xl font-semibold">Sports</h1>
      </div>

      {/* ======================= MAIN QUOTE ======================= */}
      <div className="bg-white py-16 px-6 flex justify-center">
        <div className="bg-[#C32228] text-white rounded-xl p-8 max-w-5xl text-center">
          <p className="text-2xl font-semibold">
            “Sport is the one place where your limits speak—and you get to answer back.”
          </p>
        </div>
      </div>

      {/* ======================= INTRO PARAGRAPH ======================= */}
      <div className="px-6 pb-20 flex justify-center">
        <p className="text-gray-600 max-w-4xl leading-8 text-lg text-center">
          Sports matter because they shape us far beyond the court or field. They build
          discipline, strengthen resilience, sharpen focus, and teach us how to grow
          through pressure. When we train our body, we influence our mind; when our mind
          strengthens, our spirit follows. That is why sports are more than activity—they
          are a powerful path to becoming a complete, balanced individual.
        </p>
      </div>

      {/* ======================= IMAGE + WELL-BEING QUOTE ======================= */}
      <div className="bg-[#0E1A47] w-full py-24 px-6 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">

          {/* Image Placeholder */}
          <div className="bg-gray-300 w-full md:w-1/2 h-[350px] md:h-[420px] rounded-lg"></div>

          {/* Text */}
          <p className="text-white text-xl md:text-2xl font-medium text-center md:text-left leading-relaxed md:w-1/2">
            “Sports strengthen the body, sharpen the mind, and awaken the soul—
            creating a complete sense of well-being.”
          </p>

        </div>
      </div>

      {/* ======================= BODY / MIND / SOUL ======================= */}
      <div className="w-full bg-white py-20 px-6 flex justify-center">
        <div className="max-w-6xl w-full relative">

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">

            {/* BODY */}
            <div className="flex flex-col items-center px-6 text-center">
              <h2 className="text-3xl font-semibold text-[#0E1A47] mb-4">Body</h2>
              <p className="text-gray-600 leading-7">
                Through training, movement, and discipline, sports build strength,
                stamina, coordination, and overall physical health. Every practice
                session pushes the body to grow stronger and more capable.
              </p>
            </div>

            {/* Divider 1 */}
            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 border-r-2 border-gray-300"></div>

            {/* MIND */}
            <div className="flex flex-col items-center px-6 text-center">
              <h2 className="text-3xl font-semibold text-[#0E1A47] mb-4">Mind</h2>
              <p className="text-gray-600 leading-7">
                Through training, movement, and discipline, sports build strength,
                stamina, coordination, and overall physical health. Every practice
                session pushes the body to grow stronger and more capable.
              </p>
            </div>

            {/* Divider 2 */}
            <div className="hidden md:block absolute left-2/3 top-0 bottom-0 border-r-2 border-gray-300"></div>

            {/* SOUL */}
            <div className="flex flex-col items-center px-6 text-center">
              <h2 className="text-3xl font-semibold text-[#0E1A47] mb-4">Soul</h2>
              <p className="text-gray-600 leading-7">
                At the soul level, sports ignite passion, purpose, and joy. The
                thrill of improvement, the spirit of teamwork, and the drive to compete
                connect athletes deeply to their inner motivation and identity.
              </p>
            </div>

          </div>

          {/* Subheading */}
          <p className="text-center text-gray-500 mt-16 mb-6">
            Together, sports become a pathway to holistic well-being
          </p>

          {/* Bullets */}
          <ul className="text-gray-600 text-lg mb-16 space-y-2 mx-auto w-fit">
            <li>• A fit body</li>
            <li>• A steady mind</li>
            <li>• A fulfilled soul</li>
          </ul>

          {/* Paragraphs */}
          <div className="space-y-10 text-gray-600 leading-8 text-lg max-w-4xl mx-auto">

            <p>
              Sports shape the way we think and handle challenges. When you play,
              you learn to stay positive because every practice, win, and mistake
              teaches you something. You see that effort leads to improvement, so
              you naturally build a stronger mindset.
            </p>

            <p>
              Sports also help you deal with failure. Missing a point or losing a
              game shows you that failure is normal and temporary. You learn to
              accept it, correct it, and move forward. This attitude carries into
              daily life—whether you face a tough exam, a bad day, or a setback,
              you handle it with more confidence and patience.
            </p>

            <p>
              In short, sports train your body, but they also train your mind to
              stay strong, calm, and ready to try again.
            </p>

            <p>
              In 2025, obesity rates are predicted to continue rising globally, with
              some estimates projecting that the number of adults living with obesity
              will reach 1 billion by 2030. Global obesity prevalence may exceed 18% for
              men and 21% for women.
            </p>

          </div>

        </div>
      </div>

      {/* ======================= CHILD OBESITY SECTION ======================= */}
      <div className="w-full bg-white py-20 px-6 flex justify-center">
        <div className="max-w-5xl w-full">

          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0E1A47] mb-8">
            Child and Adolescent Obesity
          </h3>

          {/* Points */}
          <div className="space-y-4 text-gray-700 text-lg leading-7">
            <p className="flex gap-2">
              <span className="text-2xl leading-none">•</span>
              Globally, one in ten children aged 5–19 — or 188 million — live with obesity.
            </p>

            <p className="flex gap-2">
              <span className="text-2xl leading-none">•</span>
              Obesity has become the most common form of malnutrition among
              school-aged children and adolescents worldwide, surpassing underweight.
            </p>

            <p className="flex gap-2">
              <span className="text-2xl leading-none">•</span>
              Childhood and adolescent obesity has **tripled** since 2000.
            </p>
          </div>

          {/* Consequences */}
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0E1A47] mt-12 mb-6">
            Consequences
          </h3>

          <ul className="text-gray-700 text-lg leading-8 space-y-3">
            <li>• Obesity is linked to higher risks of diabetes, cardiovascular disease, and some cancers.</li>
            <li>• The global economic burden of obesity is projected to exceed **$4 trillion annually by 2035**.</li>
          </ul>

          {/* Final Paragraph */}
          <p className="text-gray-700 text-lg leading-8 mt-10">
            The rates of obesity and overweight among children and adolescents in India
            are increasing rapidly due to changing diets, sedentary lifestyles, and
            socioeconomic shifts. India is projected to account for **11% of the global
            childhood obesity burden by 2030**, representing over **27 million** children
            aged 5 to 19 living with obesity.
            <br /><br />
            After-school sports directly combat obesity by increasing physical activity
            and reducing sedentary screen time.
          </p>

        </div>
      </div>

    </div>
  );
}
