'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function SocialOutreach() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Keyboard support for modal
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="w-full">
      {/* ================= HEADER ================= */}
      <header
        className="w-full py-20 flex items-center justify-center bg-[#11184C]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold">
          Social Outreach
        </h1>
      </header>

      {/* ===========================================================
          GLOBAL HONOUR SECTION
      =========================================================== */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a5a]">
          A Global Honour
        </h2>
        <p className="text-xl mt-2 text-red-600 font-semibold">
          QMIS Student Anthem Recognized by UNICEF
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center">
          <Image
            src="/social-outreach/7.png"
            alt="QMIS UNICEF Honour Event"
            width={800}
            height={600}
            className="w-full rounded-lg shadow-lg object-cover"
          />

          {/* Certificate Image with Modal Trigger */}
          <div
            className="w-full rounded-lg shadow-lg border border-yellow-500 p-4 cursor-pointer transition-transform hover:scale-[1.02] duration-300"
            onClick={openModal}
          >
            <Image
              src="/social-outreach/8.png"
              alt="UNICEF Certificate"
              width={800}
              height={600}
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0VDWMJ_IpQo"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              Another remarkable initiative from Mr. Abinath is the QMIS Student Anthem —
              a celebration of youth, hope, and global unity composed by Anil Srinivasan
              and written by Madhan Karky.
            </p>
            <p>
              At UNICEF&apos;s prestigious meet in Mumbai, the anthem was officially recognised
              as the Student Anthem for children worldwide — a proud milestone for QMIS.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================================================
          ISRO SECTION
      =========================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Visit to Indian Space Research Organisation
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl mb-12">
            At QMIS, giving back to the community means inspiring curiosity and aspiration —
            not just charity. Through our student-outreach program, we organised a fully funded
            trip for 187 underprivileged students from local government schools to ISRO&apos;s Satish
            Dhawan Space Centre in Sriharikota. This was a first-of-its-kind visit, and the
            experience — from interacting with scientists to touring launch facilities —
            sparked dreams of space and science.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <Image
              src="/social-outreach/1.png"
              width={900}
              height={600}
              alt="ISRO Visit Group"
              className="w-full rounded-lg shadow-md object-cover"
            />

            <div className="text-gray-700 leading-relaxed">
              <p className="mb-6">
                Globally, while ISRO&apos;s outreach initiatives are growing, only a handful of
                schools — especially in remote and underserved areas — get such exposure.
                In India, surveys show that only <strong>8% of students</strong> aspire to become scientists.
              </p>
              <p>
                Through this initiative, QMIS is helping close that aspiration gap — by giving
                students not just a visit, but the chance to dream bigger.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-8">
            To honour the brilliance and dedication of India&apos;s space heroes, QMIS also proudly
            produced an exclusive anthem dedicated to ISRO scientists.
          </p>
        </div>
      </section>

      {/* ===========================================================
          VAANATHAI VELLAPOROM SECTION
      =========================================================== */}
      <section className="bg-[#0d1b3d] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              &ldquo;Vaanathai Vellaporom&rdquo;
            </h2>

            <p className="text-lg mb-4">
              A tribute of gratitude, hope, and inspiration.
            </p>

            <p className="text-lg mb-6">
              At QMIS, we don&apos;t just teach students to dream —
            </p>

            <p className="text-2xl font-semibold leading-snug">
              we show them how high those dreams can fly.
            </p>
          </div>

          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wysPQ3DPkmE"
              title="Vaanathai Vellaporom"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===========================================================
          KARKO SECTION
      =========================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-6">
            KARKO: Learning with Heart
          </h2>

          <p className="max-w-4xl mx-auto text-lg leading-relaxed text-center mb-12">
            QMIS partners with the Chellamuthu Trust, led by Dr. C. Ramasubramanian,
            to introduce KARKO — a powerful program where QMIS students collaborate
            with government school students to break learning barriers through shared experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">
            <Image
              src="/social-outreach/2.png"
              width={900}
              height={600}
              alt="KARKO Program"
              className="rounded-lg shadow-md object-cover w-full"
            />

            <p className="text-lg leading-relaxed">
              Through this initiative, students learn together, support each other,
              and build genuine connections. KARKO nurtures empathy, emotional well-being,
              social awareness, and a deeper understanding of diverse learning environments.
            </p>
          </div>

          <ul className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed list-disc pl-6">
            <li>
              School–community partnerships can increase student engagement by up to 40% and
              improve academic performance by 30%.
            </li>
            <li>
              Such partnerships also provide essential emotional support, creating a nurturing
              environment beyond classrooms.
            </li>
          </ul>
        </div>
      </section>

      {/* ===========================================================
          VALLUVAR MARAI SECTION
      =========================================================== */}
      <section className="py-16 bg-white">
        <div className="bg-red-700 text-white py-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            &ldquo;Valluvar Marai, Vairamuthu Urai&rdquo;
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-12">
          <Image
            src="/social-outreach/3.png"
            width={800}
            height={600}
            alt="Left Event"
            className="rounded-lg shadow w-full object-cover"
          />

          <Image
            src="/social-outreach/4.png"
            width={800}
            height={600}
            alt="Right Event"
            className="rounded-lg shadow w-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <p className="text-lg md:text-xl leading-relaxed">
            Another landmark initiative by Queen Mira was creating extraordinary cultural exposure
            for 100 students across government schools. They travelled to Chennai to attend
            &ldquo;Valluvar Marai, Vairamuthu Urai,&rdquo; hosted by award-winning poet Vairamuthu — graced by
            the Hon&apos;ble Chief Minister of Tamil Nadu and other renowned scholars.
            <br /><br />
            This rare opportunity allowed young learners to witness Tamil culture at its finest —
            deepening their cultural identity and broadening their aspirations.
          </p>
        </div>
      </section>

      {/* ===========================================================
          QMIS x IGCA SECTION
      =========================================================== */}
      <section className="bg-[#0c1b39] text-white py-16 px-6 flex justify-center">
        <div className="max-w-4xl text-center space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            QMIS x IGCA: Empowering Tomorrow&apos;s Global Citizens
          </h2>

          <div className="flex justify-center">
            <div className="border border-blue-300 bg-white p-4 rounded-md shadow-md">
              <Image
                src="/social-outreach/5.png"
                alt="IGCA Award"
                width={400}
                height={300}
                className="max-h-40 w-auto object-contain"
              />
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            QMIS collaborates with IGCA to nurture socially responsible, globally aware
            learners through meaningful projects and international collaboration.
          </p>

          <p className="text-lg leading-relaxed">
            The program helps students think globally, act purposefully, and grow into
            compassionate leaders ready to shape a better world.
          </p>
        </div>
      </section>

      {/* ===========================================================
          DRUG AWARENESS SECTION
      =========================================================== */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#1a2a5a] mb-10">
          A Powerful Stand Against Drug Abuse
        </h2>

        <div className="flex justify-center mb-12">
          <Image
            src="/social-outreach/6.png"
            alt="Drug Awareness Event"
            width={1000}
            height={600}
            className="w-full max-w-5xl rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              Queen Mirs, through the visionary production house of
              Mr. Abinath, created a compelling atlhem to raise
              awareness about the dangers of drug abuse. With
              soul-stirring music composed by Gerard Feliz and
              thought-provoking lyrics penned by Madhan Karky,
              the anthem delivers a strong message of hope,
              courage, and conscious choice.
            </p>
            <p>
              It reflects QMIS&apos;s unwavering commitment to shaping
              responsible, informed, and resilient young citizens.
            </p>
          </div>

          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GYlpQDrQt2Y?list=RDGYlpQDrQt2Y"
              title="Vaanathai Vellaporom"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Modal for Certificate Image */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:scale-110 transition-transform z-10"
          >
            <X size={32} />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-4 border-yellow-500">
              <Image
                src="/social-outreach/8.png"
                alt="UNICEF Certificate - Enlarged View"
                width={1200}
                height={900}
                className="rounded-lg max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Image Description */}
            <div className="mt-6 text-center text-white">
              <p className="text-xl font-semibold">UNICEF Certificate of Recognition</p>
              <p className="text-base opacity-90 mt-2">QMIS Student Anthem recognized as the official Student Anthem for children worldwide</p>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  );
}
