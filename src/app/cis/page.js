'use client';
import PageHeader from "@/components/PageHeader";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CISPage() {
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
    <div className="w-full bg-grid-dots bg-grid-dots text-gray-800">
      {/* ===================== HEADER ===================== */}
      <PageHeader contentTitle={"Career At Qmis"} />
      {/* ===================== INTRO SECTION ===================== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0E1A47] mb-8">
            QMIS: Innovating Education. Inspiring Futures
          </h2>

          <p className="text-lg leading-8 mb-8">
            At Queen Mira International School, excellence is our identity.
            Our historic CIS Accreditation places us among
            <span className="font-semibold"> 1,500+ leading international schools across 120+ countries</span>
            — making QMIS the
            <span className="font-semibold"> First CBSE school</span>
            in the world to achieve this distinction.
          </p>

          <p className="text-lg leading-8 mb-16">
            Becoming a CIS Member School in 2016–17, earning full accreditation in 2021,
            and now moving into the re-accreditation cycle reflects one clear truth: <br />
            <span className="font-semibold">
              QMIS is committed to sustained growth, global standards, and continuous improvement.
            </span>
          </p>

          {/* First Image with Modal Trigger */}
          <div
            onClick={openModal}
            className="
    w-full
    max-w-6xl
    mx-auto
    grid
    grid-cols-1
    md:grid-cols-2
    rounded-2xl
    overflow-hidden
    cursor-pointer
    shadow-lg
    transition-transform
    hover:scale-[1.02]
    duration-300
    bg-[#1b2250]
  "
          >
            {/* Left – Certificate Image */}
            <div className="bg-white flex items-center justify-center p-8">
              <Image
                src="/cis/1-v2.png"
                alt="CIS Accreditation Certificate"
                width={600}
                height={400}
                className="object-contain max-h-[320px]"
                priority
              />
            </div>

            {/* Right – Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 text-white">
              <h2 className="text-3xl font-semibold mb-4">
                CIS Accredited School
              </h2>

              <p className="text-sm md:text-base text-white/80 leading-loose mb-6">
                Leading universities including University of Cambridge – UK, Imperial
                College – London, NUS – Singapore, University of Chicago and many other
                CIS accredited universities across the world accord priority to students
                from CIS-accredited schools. In short, it is a gateway for students to
                experience international higher education of quality.
              </p>

              <Link
                href="https://www.cois.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline tracking-wide hover:text-blue-600 transition"
              >
                VISIT WWW.COIS.ORG
              </Link>
            </div>
          </div>

          <h2 className="text-3xl mt-16 md:text-5xl font-semibold text-[#0E1A47] mb-8">
            Global Standards. Real Opportunities
          </h2>

          <p className="text-lg leading leading-loose mb-8">
            Recognized in Leiden, Netherlands as a model school, QMIS continues to influence
            international best practices — even prompting CIS to introduce Tamil as a survey language.
          </p>

          <p className="text-lg leading-loose ">
            Universities abroad consistently regard QMIS students as high-calibre applicants —
            confident, well-prepared, and aligned with international learning standards.
            Admissions teams often note that graduates from CIS-accredited schools demonstrate
            strong academic discipline, cultural awareness, and global readiness.
          </p>
        </div>
      </section>

      {/* ===================== STUDENT OUTCOMES ===================== */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-semibold mb-10">
            Success stories that speak for themselves
          </h1>

          {/* Karnish */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/cis/2.png"
                alt="Student Karnish"
                width={350}
                height={400}
                className="rounded-lg object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl font-medium">
                Karnish
                <span className="text-gray-500 text-xl ml-2">(Batch of 2020–2021)</span>
              </h2>

              <p className="text-xl mt-2">Studying at the University of Austin</p>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                “QMIS gave me a global edge. CIS accreditation made universities
                look at my profile with confidence.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STUDENT STORIES 2 ===================== */}
      <section className="py-5 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Rehma */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold">
                Rehma
                <span className="text-gray-500 text-xl ml-2">(Batch of 2020–2021)</span>
              </h2>

              <p className="text-xl mt-2">BSc Neuroscience, University of Toronto</p>

              <p className="mt-6 text-lg leading-loose text-gray-600">
                “Being from a CIS-accredited school strengthened my application instantly.
                On campus, I stood out — confident, disciplined, globally ready.
                QMIS didn't just help me get in; it helped me thrive.”
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/cis/3.png"
                alt="Student Rehma"
                width={350}
                height={400}
                className="rounded-lg object-contain"
              />
            </div>
          </div>

          {/* Aravind */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/cis/4.png"
                alt="Student Aravind"
                width={350}
                height={400}
                className="rounded-lg object-contain"
              />
            </div>

            <div>
              <h2 className="text-4xl font-semibold">
                Aravind Regu Subramanian
                <span className="text-gray-500 text-xl ml-2">(Batch of 2019–2020)</span>
              </h2>

              <p className="text-xl mt-2">MBChB Medicine, University of Aberdeen, UK</p>

              <p className="mt-6 text-lg text-gray-600 leading-loose">
                “Applying to Medicine in the UK is known to be tough. But coming from QMIS —
                a CIS-accredited school — changed everything. My application carried weight,
                my preparation stood out, and the entire process felt far smoother than I expected.”
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            Our accreditation is transforming student outcomes:
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-lg text-gray-500">
            <li>Nearly 10% of our graduates now study in leading universities worldwide.</li>
            <li>
              Many receive distinct admission advantage as global institutions recognise the
              quality, rigor, and reliability of a CIS-accredited education.
            </li>
          </ul>
        </div>
      </section>

      {/* ===================== HEALTH & SAFETY ===================== */}
      <section className="w-full py-20 px-6 relative">
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-5 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-6">Health And Safety Committee</h2>

            <p className="text-lg leading-loose text-gray-500 mb-4">
              The committee ensures safety for all through Health & Safety and Child Protection policies.
              They regularly review and upgrade safety measures.
            </p>

            <p className="text-lg text-gray-500 leading-loose ">
              We ensure physical, emotional, and social wellbeing—working with experts to provide
              child safety orientation. Health camps and safety programmes ensure wellbeing across
              classrooms, campus, and outdoor learning.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/cis/5.png"
              alt="Safety Committee"
              width={600}
              height={320}
              className="w-full max-w-lg h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ===================== DIGITAL CITIZENSHIP ===================== */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 h-[380px] rounded-lg shadow-md overflow-hidden">
            <Image
              src="/cis/6.png"
              alt="Digital Citizenship"
              width={600}
              height={380}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 space-y-6 text-gray-500">
            <h2 className="text-3xl md:text-4xl font-semibold text-darkBlue-100">
              Digital Citizenship Committee
            </h2>

            <p className="leading-8">
              DCC fosters the use of innovative technologies to augment learning and empower
              students as creators.
            </p>

            <p className="leading-8">
              We educate students about Digital Citizenship and Intellectual Property Rights.
            </p>

            <p className="leading-8">
              We promote cyber safety and a positive digital culture within the school.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== GLOBAL CITIZENSHIP ===================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 leading-relaxed text-gray-700">
            <h2 className="text-3xl md:text-4xl font-semibold text-darkBlue-100">
              Global Citizenship Committee
            </h2>

            <p>
              At Queen Mira, we define Global citizenship as:
              <span className="font-medium">
                {" "}“Internationally-minded by understanding and embracing diversity in all forms and by respecting and celebrating this diversity in order to foster a peaceful, just and sustainable world”
              </span>{" "}
              through
            </p>

            <ul className="space-y-3 pl-4">
              <li className="flex gap-3">
                <span className="text-xl leading-none">•</span>
                Being aware of learning about and understanding the world beyond ourselves, our planet and all people with whom we share it.
              </li>

              <li className="flex gap-3">
                <span className="text-xl leading-none">•</span>
                Demonstrating and promoting values of compassion, respect and acceptance for all people, diverse cultures and beliefs. Embracing cultural differences and commonalities.
              </li>

              <li className="flex gap-3">
                <span className="text-xl leading-none">•</span>
                Taking personal responsibility and working interdependently to create local and global sustainable solutions for a more peaceful, inclusive and united world.
              </li>
            </ul>

            <p>
              With this in mind, we have developed a unique Global Citizenship programme at QMIS which empowers learners to assume active roles to face and resolve global challenges taking proactive, personal responsibility for creating a more peaceful and sustainable world.
            </p>

            <p>
              Guided by the Council of International Schools and UN’s Sustainable Development Goals, we have created a framework for the Global Citizenship Programme that is linked to the curriculum as well. It gives the students a great opportunity to acquire and develop leadership experiences through meaningful collaborations.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-[420px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/cis/7.png"
              alt="Global Citizenship"
              width={700}
              height={420}
              className="w-full h-full object-cover"
              priority
            />
          </div>

        </div>
      </section>
      {/* Modal for First Image */}
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
              <Image
                src="/cis/1-v2.png"
                alt="New Metrics Program - Enlarged View"
                width={1200}
                height={600}
                className="rounded-xl max-h-[80vh] w-[80vw] object-contain mx-auto"
              />
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
