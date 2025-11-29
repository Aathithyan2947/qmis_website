import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0A0F3D] text-white px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              Looking for a school that has a 360-degree approach to education?
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              At Queen Mira, we don’t create toppers. We create leaders who will 
              take the world into a brighter future.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              For us, education does not mean only academics. It encompasses every 
              facet of learning for a child that will make them responsible and 
              well-meaning members of society.
            </p>

            <button className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold transition">
              APPLY NOW
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/home.png"
              alt="Queen Mira International School"
              width={1200}
              height={600}
              className="rounded-lg mb-6 w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= NEW CARD SECTION ================= */}
      <section className="bg-[#B62020] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: LOGO GRID */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 flex justify-center">
              <Image src="/holistic-achievers/01.jpg" alt="CIS" width={200} height={80} className="object-contain" />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 flex justify-center">
              <Image src="/holistic-achievers/02.jpg" alt="British Council" width={200} height={80} className="object-contain" />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 flex justify-center">
              <Image src="/holistic-achievers/02.jpg" alt="Education World" width={200} height={80} className="object-contain" />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 flex justify-center">
              <Image src="/holistic-achievers/03.jpg" alt="Future 50" width={200} height={80} className="object-contain" />
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Welcome to QMIS</h2>

            <p className="text-gray-200 leading-relaxed mb-6">
              Queen Mira International School is one of Tamil Nadu’s leading CBSE schools.
              The first CBSE school to be accredited by The Council of International Schools (CIS),
              QMIS aims to redefine education and produce responsible global citizens who won’t
              forget their roots.
            </p>

            <ul className="space-y-2 text-gray-100">
              <li>• Pre-KG to Grade 12 with fully integrated curricula</li>
              <li>• 14+ year legacy</li>
              <li>• Sprawling campus over 2 acres of land</li>
              <li>• 10:1 student to teacher ratio</li>
              <li>• Air-conditioned classrooms</li>
              <li>• Student-centric teaching strategies</li>
              <li>• Value-based education</li>
              <li>• Flexible & real-world approach</li>
              <li>• Special needs–friendly curricula</li>
            </ul>
          </div>
        
        </div>
      </section>

      {/* ================= FACILITIES SECTION (2 ROWS) ================= */}
<section className="bg-white text-black py-20 px-6 md:px-20">

  {/* ---------- ROW 1 ---------- */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: Middle + Secondary Years */}
    <div className="text-center md:text-left">

      <h3 className="text-xl font-semibold mb-1">
        Middle Years Academics Programme
      </h3>
      <p className="text-gray-600 mb-2">Grades 6, 7, 8</p>

      <p className="text-gray-700 leading-relaxed mb-8">
        The Middle Years Programme is structured to meet children’s varied 
        intellectual and developmental needs. It ensures progression and 
        continuity across the various stages of learning and incorporates 
        continuous evaluation and review of children’s performance.
      </p>

      <h3 className="text-xl font-semibold mb-1">
        Secondary Years Academics Programme
      </h3>
      <p className="text-gray-600 mb-2">Grades 9, 10, 11, 12</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Graduates of Secondary programmes emerge as confident young minds 
        ready to take their potential forward in line with the school’s 
        guiding principles. Students gain both horizontal and vertical 
        dimensions of core knowledge.
      </p>

      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded shadow transition">
        DOWNLOAD BROCHURE
      </button>
    </div>

    {/* RIGHT: Standing student image */}
    <div className="flex justify-center">
      <Image
        src="/standing-student.png"   // add this image to /public
        alt="Student"
        width={350}
        height={500}
        className="object-contain"
      />
    </div>

  </div>

  {/* ---------- ROW 2 ---------- */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-24">

    {/* LEFT: Kid with microphone + blue circle */}
    <div className="relative flex justify-center">
      <div className="absolute w-72 h-72 bg-[#0A1847] rounded-full -z-10 top-10"></div>

      <Image
        src="/kid.png"     // add your kid PNG cutout here
        alt="Kid singing"
        width={420}
        height={420}
        className="relative z-10 object-contain"
      />
    </div>

    {/* RIGHT: World-class Facilities content */}
    <div className="md:pl-4">

      <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
        World-class Facilities<br/>and Infrastructure
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Our campus is meticulously crafted as a nurturing educational space that 
        fosters intellectual, physical, social, and emotional growth.
      </p>

      <ul className="space-y-4 text-gray-800 leading-relaxed">
        <li>
          <strong>Ergonomically Designed Furniture:</strong> Built for comfort and efficiency.
        </li>
        <li>
          <strong>Aesthetically Decked Learning Spaces:</strong> Designed to enhance 
          students’ creativity and curiosity.
        </li>
        <li>
          <strong>Air-Conditioned Classrooms:</strong> A comfortable, conducive environment 
          for learning.
        </li>
        <li>
          <strong>Real-World Extracurricular Activities:</strong> Focused on practical 
          learning and real-life application.
        </li>
      </ul>

    </div>

  </div>

</section>

    </>

    
  );
}
