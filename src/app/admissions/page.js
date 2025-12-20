import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* ================= HEADER ================= */}
      <header className="bg-[#E3F2FF]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Queen Mira International School"
              width={48}
              height={48}
            />
            <span className="text-[#1B2A5B] font-semibold leading-tight text-sm">
              queen<br />
              mira<br />
              international school
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <span className="text-[#1B2A5B] hidden md:block">
              Admission process
            </span>
            <button className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-sm font-medium">
              Apply Now
            </button>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-[#1B2455] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tomorrow’s <br />
              leaders take their <br />
              first steps here.
            </h1>

            <p className="text-white/80 mb-1 max-w-xl">
              Admissions open for Play Home, Pre-KG & KG. Begin your child’s journey
              at QMIS with holistic learning and global values.
            </p>

            <p className="font-semibold mb-6 text-sm md:text-base">
              1:10 Student-Teacher ratio | All-Rounded Growth | Kidz Gym |
              Montessori Techniques | Beyond Books Learning | Happy Schooling
            </p>

            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 font-semibold mb-8">
              Apply before Oct 12, 2025
            </button>

            <div className="mt-8">
              <p className="text-sm text-white/70 mb-2">
                Vijayadasami 2025 Admissions now open for
              </p>
              <p className="font-semibold">
                Play home | Pre-KG | KG 1 | KG 2
              </p>
            </div>

            {/* Age Limit */}
            <div className="mt-10">
              <p className="uppercase text-sm tracking-wide mb-4">
                Age Limit
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-center">
  <div className="md:border-r border-white/30 pr-4">
    <p className="font-semibold">Play Home</p>
    <p className="text-white/70">2-3 Years</p>
  </div>

  <div className="md:border-r border-white/30 pr-4">
    <p className="font-semibold">Pre-KG</p>
    <p className="text-white/70">3+ Years</p>
  </div>

  <div className="md:border-r border-white/30 pr-4">
    <p className="font-semibold">Kindergarten 1</p>
    <p className="text-white/70">4+ Years</p>
  </div>

  <div>
    <p className="font-semibold">Kindergarten 2</p>
    <p className="text-white/70">5+ Years</p>
  </div>
</div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <Image
              src="/hero-child.webp"
              alt="Child climbing ladder"
              width={200}
              height={150}
              className="object-contain z-10"
            />

            {/* Decorative clouds */}
            <Image
              src="/cloud.webp"
              alt=""
              width={120}
              height={60}
              className="absolute top-10 left-10 opacity-70"
            />
            <Image
              src="/cloud.webp"
              alt=""
              width={150}
              height={70}
              className="absolute top-1/3 right-0 opacity-70"
            />
            <Image
              src="/cloud.webp"
              alt=""
              width={100}
              height={50}
              className="absolute bottom-10 left-1/3 opacity-70"
            />
          </div>

        </div>
      </section>
      {/* ================= MARQUEE ================= */}
<div className="w-full overflow-hidden bg-red-600 py-3">
  <div
    className="flex whitespace-nowrap text-white font-semibold tracking-wide text-sm md:text-base"
    style={{
      animation: "marquee 18s linear infinite",
    }}
  >
    <span className="mx-10">
      VIJAYADASAMI – 2025 ADMISSIONS OPEN ✦
    </span>
    <span className="mx-10">
      VIJAYADASAMI – 2025 ADMISSIONS OPEN ✦
    </span>
    <span className="mx-10">
      VIJAYADASAMI – 2025 ADMISSIONS OPEN ✦
    </span>
    <span className="mx-10">
      VIJAYADASAMI – 2025 ADMISSIONS OPEN ✦
    </span>
  </div>

  {/* Keyframes */}
  <style>{`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</div>
{/* ================= STATS SECTION ================= */}
<section className="bg-[#EFF6FF] py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-[#0B1C4D] text-3xl md:text-4xl font-bold leading-tight mb-16">
      Let Your Child&apos;s First Words & First <br />
      Dreams Take Off at Queen Mira!
    </h2>

    {/* Top Cards */}
    <div className="grid md:grid-cols-3 gap-8 mb-10">

      <div className="bg-[#C7DFFF] border border-[#8FB6FF] rounded-2xl py-12">
        <p className="text-[#0B1C4D] text-4xl font-bold mb-3">350+</p>
        <p className="text-[#0B1C4D] font-medium">Successful Alumni</p>
      </div>

      <div className="bg-[#C7DFFF] border border-[#8FB6FF] rounded-2xl py-12">
        <p className="text-[#0B1C4D] text-4xl font-bold mb-3">100+</p>
        <p className="text-[#0B1C4D] font-medium">Global Universities</p>
      </div>

      <div className="bg-[#C7DFFF] border border-[#8FB6FF] rounded-2xl py-12">
        <p className="text-[#0B1C4D] text-4xl font-bold mb-3">100+</p>
        <p className="text-[#0B1C4D] font-medium">Sports Stars</p>
      </div>

    </div>

    {/* Bottom Cards */}
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

      <div className="bg-[#C7DFFF] border border-[#8FB6FF] rounded-2xl py-12">
        <p className="text-[#0B1C4D] text-4xl font-bold mb-3">20+</p>
        <p className="text-[#0B1C4D] font-medium">Innovative Practises</p>
      </div>

      <div className="bg-[#C7DFFF] border border-[#8FB6FF] rounded-2xl py-12">
        <p className="text-[#0B1C4D] text-4xl font-bold mb-3">14+</p>
        <p className="text-[#0B1C4D] font-medium">Year Legacy</p>
      </div>

    </div>

  </div>
</section>
      
      {/* ===== TOP SECTION ===== */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-16 items-center">
        
        {/* Image */}
       <div className="w-full max-w-4xl mx-auto aspect-video">
  <iframe
    className="w-full h-full rounded-lg shadow-lg"
    src="https://www.youtube.com/embed/-r3mlxcxo50i"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-[#0A1A44] leading-tight">
            Join the World’s first ever <br />
            CBSE school with CIS <br />
            accreditation
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            QMIS is your child’s second home, a safe, caring space where
            global standards meet the warmth every parent looks for.
          </p>
        </div>
      </section>

      {/* ===== BOTTOM SECTION ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-2 w-full">
        
        {/* Left CTA */}
      <div className="bg-[#CFE5FF] flex flex-col items-center justify-center px-10 py-20">
  <div className="flex flex-col text-left space-y-6 max-w-md">
    <h2 className="text-[#0A1A44] text-4xl font-bold tracking-wide">
      REVEALED!
    </h2>

    <p className="text-[#0A1A44] text-4xl leading-snug">
      Secrets To Free Your Child <br />
      From Screens
    </p>

    <button className="bg-red-600 text-white px-6 py-3 w-fit font-semibold rounded hover:bg-red-700 transition">
      Download for Free
    </button>
  </div>
</div>



        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src="/girl_1.webp"
            alt="Child using tablet"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
