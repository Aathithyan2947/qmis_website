'use client';
import ChromaGrid from "@/components/ChromaGrid";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FileText } from 'lucide-react';

const APPLY_NOW_URL =
  "https://admissions.qmis.edu.in/?utm_source=Website&utm_medium=popup_form&utm_campaign=BBC&_gl=1%2A11hbug0%2A_ga%2AMTIyNDc1NDU3Ni4xNzY1MDQ3MzAx%2A_ga_K5HD0P2MHT%2AczE3NjU2NDQ5NTkkbzkkZzEkdDE3NjU2NDYwNTEkajYwJGwwJGgw";

const facilities = [
  {
    image: '/home/1.png',
    title: 'LIBRARY',
    gradient: 'linear-gradient(145deg, #111827, #000)',
  },
  {
    image: '/home/2.png',
    title: 'MUSIC ROOM',
    gradient: 'linear-gradient(145deg, #1F2937, #000)',
  },
  {
    image: '/home/3.png',
    title: 'DANCE STUDIO',
    gradient: 'linear-gradient(145deg, #111827, #000)',
  },
  {
    image: '/home/4.png',
    title: 'CLASS ROOMS',
    gradient: 'linear-gradient(145deg, #1F2937, #000)',
  },
  {
    image: '/home/5.png',
    title: 'FOOTBALL FIELD',
    gradient: 'linear-gradient(145deg, #111827, #000)',
  },
  {
    image: '/home/6.png',
    title: 'ATHLETICS TRACK',
    gradient: 'linear-gradient(145deg, #1F2937, #000)',
  },
  {
    image: '/home/7.png',
    title: 'OUTDOOR GYM',
    gradient: 'linear-gradient(145deg, #111827, #000)',
  },
  {
    image: '/home/8.png',
    title: 'INDOOR BASKETBALL COURT',
    gradient: 'linear-gradient(145deg, #1F2937, #000)',
  },
  {
    image: '/home/9.png',
    title: 'COMPUTER LAB',
    gradient: 'linear-gradient(145deg, #111827, #000)',
  },
  {
    image: '/home/10.png',
    title: 'RIFLE ZONE',
    gradient: 'linear-gradient(145deg, #1F2937, #000)',
  },
  {
    image: '/home/11.png',
    title: 'BFIT CLASSES',
    gradient: 'linear-gradient(145deg, #111827, #000)',
  },
  {
    image: '/home/12.png',
    title: 'ENHANCED SAFETY MEASURES',
    gradient: 'linear-gradient(145deg, #1F2937, #000)',
  },
];

// Homepage FAQ Data - Added this array
const homeFaqData = [
  {
    question: "Are there after-school programs, such as art, clubs, film, music/performance, and sports?",
    answer: "All expenses are covered by the fees. Parents are not required to pay anything extra during the course of the school year."
  },
  {
    question: "Is there a policy for admitting siblings of students in the school?",
    answer: "If a prospective student has a sibling studying in the school, they are eligible for a 10% waiver in their tuition fees."
  },
  {
    question: "Can I get a tour of the school before applying?",
    answer: "Parents and guardians can visit the school and get a feel of the place before applying and admitting their children to the school."
  },
  {
    question: "How do I pay the registration fee?",
    answer: "The one-time registration fee is paid as part of the term fees and is not refundable."
  },
  {
    question: "Is there a waitlist for admissions?",
    answer: "There is a waitlist for admissions. If your child is on the list, you will be notified and we will work on moving your child up the list."
  },
  {
    question: "What are the next steps once the application is submitted?",
    answer: "Once the application is submitted, there will be an assessment and interview after which a decision will be made regarding the admission of your child."
  },
  {
    question: "Does QMIS accept mid-term transfers?",
    answer: "QMIS accepts mid-term transfers and provides a fee waiver as well. Students who are joining mid-term are eligible for the 1st Term Tuition Fee Waiver"
  },
  {
    question: "Do you accept applications after the deadline?",
    answer: "We are glad to make space for your child even after the deadline for application has been crossed. Please fill the form or call our office and we can begin the process."
  },
  {
    question: "Do you accommodate students with special needs?",
    answer: "We do have special provisions for students with special needs, including qualified teachers who are specifically trained for this."
  },
  {
    question: "How much is the annual fee revision that a Parent needs to budget for?",
    answer: "As per the existing School policy, the Annual fee revision is 5-10%. This may change depending on circumstances and government policies in the future."
  }
];

const cards = [
  {
    title: 'Anti Bullying Policy',
    pdf: 'https://drive.google.com/file/u/1/d/1P6xaVe1v58PLwPLQwc0mqDWjkJ_VlFID/view?usp=drive_open',
  },
  {
    title: 'Accessible Usage Policy',
    pdf: 'https://drive.google.com/file/d/1u0aBWaqnXihiXUuK9svL0kE3kumXhYeO/view',
  },
  {
    title: 'Cyber Safety Policy',
    pdf: 'https://drive.google.com/file/d/1kqig-xqzL_PX1vpBndv1uVXt2gFzVd_t/view',
  },
  {
    title: 'Anti-Discrimination Policy',
    pdf: 'https://drive.google.com/file/d/16PjC83B3yesiziEMdVyaUi3gFcgbFRLb/view',
  },
  {
    title: 'Child Protection Policy',
    pdf: 'https://drive.google.com/file/d/1vQor05ub646uC4SPTrIYngarzZf6pl8h/view',
  },
  {
    title: 'Digital Citizenship Policy',
    pdf: 'https://drive.google.com/file/d/1KScOHFenZ6DloNpjmQGqYeTwlIpmiPDh/view',
  },
  {
    title: 'Gender Sensitization Staff Policy',
    pdf: 'https://drive.google.com/file/d/16CyegbkabtQwZfx9VL_hexXHPUxl3MEo/view',
  },
  {
    title: 'Health and Safety Policy',
    pdf: 'https://drive.google.com/file/d/1ust3uLGkya_C_BBLbmdaMBUkY5a_snb_/view',
  },
  {
    title: 'Anti Bullying Policy',
    pdf: 'https://drive.google.com/file/d/1AuIYf11IVDyhIQIFDyILO_VxV2DMZ5vT/view',
  },
  {
    title: 'Accessible Usage Policy',
    pdf: 'https://drive.google.com/file/d/1QTW3SzwJEdO8htA5wrT8gGqtkrGltlpj/view',
  },
  {
    title: 'Cyber Safety Policy',
    pdf: 'https://drive.google.com/file/d/1nA9nrKudtWITptxLLn24fwUrGfIqusF8/view',
  },
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Added state for FAQ accordion
  const [currentPage, setCurrentPage] = useState(0); // For pagination
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default for desktop

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const images = [
    '/home/Pic_8.webp',
    '/home/Pic_9.webp',
    '/home/Pic_10.webp',
  ];

  useEffect(() => {
    setShowModal(true);
    // Update items per page based on screen size
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4); // Desktop
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(1); // Mobile
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handleApplyNow = () => {
    window.open(APPLY_NOW_URL, "_blank", "noopener,noreferrer");
  };

  // Added FAQ toggle handler
  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Pagination logic
  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = cards.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative bg-[#1B235A] rounded-2xl w-full max-w-xl shadow-2xl p-6 md:p-8">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 cursor-pointer hover:scale-110 transition-all duration-200 text-white text-2xl font-bold"
              aria-label="Close"
            >
              <X />
            </button>

            {/* Modal Content */}
            <div className="rounded-xl overflow-hidden bg-[#0F1B4C]">
              <div className="w-full h-80 bg-gray-400 flex items-center justify-center text-white">
                <Image src="/home/qmisad.webp" height={500} width={800} alt="no image found" />
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleApplyNow}
                className="bg-red-600 cursor-pointer hover:bg-red-700 duration-200 text-white px-8 py-3 rounded font-semibold transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0A0F3D] text-white px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 items-center">
          {/* LEFT CONTENT */}
          <div className="md:col-span-1">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Looking for a school that has a 360-degree approach to education?
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              At Queen Mira, we don't create toppers. We create leaders who will
              take the world into a brighter future.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              For us, education does not mean only academics. It encompasses every
              facet of learning for a child that will make them responsible and
              well-meaning members of society.
            </p>

            <button
              onClick={handleApplyNow}
              className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold transition"
            >
              APPLY NOW
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:col-span-2 flex justify-center items-end">
            <motion.div
              className="relative w-[85vw] h-[65vh] md:w-[50vw] md:h-[60vh]"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const offsetX = e.clientX - rect.left - rect.width / 2;
                const offsetY = e.clientY - rect.top - rect.height / 2;

                x.set(offsetX / 20);
                y.set(offsetY / 20);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
              style={{ x, y }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              <Image
                src="/home/Pic_1.webp"
                alt="Students"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WELCOME TO QMIS ================= */}
      <motion.section
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-grid-dots text-gray-500 py-20 px-6 md:px-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT: LOGO GRID */}
          <div className="grid grid-cols-2 gap-6 order-2 md:order-1">
            <div className="bg-gray-100 backdrop-blur rounded-lg p-6 flex justify-center items-center h-32">
              <Image src="/home/Pic_2.webp" height={500} width={600} alt="image not found" />
            </div>
            <div className="bg-gray-100 backdrop-blur rounded-lg p-6 flex justify-center items-center h-32">
              <Image src="/home/Pic_3.webp" height={500} width={600} alt="image not found" />
            </div>
            <div className="bg-gray-100 backdrop-blur rounded-lg p-6 flex justify-center items-center h-32">
              <Image src="/home/Pic_4.webp" height={500} width={600} alt="image not found" />
            </div>
            <div className="bg-gray-100 backdrop-blur rounded-lg p-6 flex justify-center items-center h-32">
              <Image src="/home/Pic_5.webp" height={500} width={600} alt="image not found" />
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="text-center font-semibold order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-black">Welcome to QMIS</h2>

            <div className="space-y-2 mb-10">
              <p className="leading-relaxed">
                Queen Mira International School is one of Tamil Nadu&apos;s leading CBSE schools.
              </p>
              <p className="leading-relaxed">
                The first CBSE school to be accredited by The Council of International Schools.
              </p>
              <p className="leading-relaxed">
                QMIS aims to redefine education and produce responsible global citizens who won&apos;t
                forget their roots.
              </p>
            </div>

            <p className="my-10">
              This is the greatest gift you could give your child.
            </p>

            <ul className="space-y-2 text-left">
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
      </motion.section>

      {/* ================= CURRICULUM SECTION ================= */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#B62020] text-white py-16 px-6 md:px-20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Curriculum
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center items-center">

            {/* LEFT: TEXT CONTENT */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Early Childhood Education Program
                </h3>
                <p className="text-sm font-semibold mb-2">Pre-KG, LKG, UKG</p>
                <p className="text-gray-100 leading-relaxed">
                  Our ECEP programme provides a conducive, stimulating environment
                  that encourages exploration, creativity, and holistic development,
                  laying a strong foundation for lifelong learning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Primary Years Academics Programme
                </h3>
                <p className="font-semibold text-sm mb-2">Grades 1, 2, 3, 4, 5</p>
                <p className="text-gray-100 leading-relaxed">
                  QMIS strives to balance knowledge, skills, creativity, and innovation
                  while emphasizing 21st-century skills for future-ready learners.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Middle Years Academics Programme
                </h3>
                <p className="font-semibold text-sm mb-2">Grades 6, 7, 8</p>
                <p className="text-gray-100 leading-relaxed">
                  Structured to meet varied intellectual needs, ensuring progression,
                  continuity, and continuous evaluation of student performance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Secondary Years Academics Programme
                </h3>
                <p className="font-semibold text-sm mb-2">Grades 9, 10, 11, 12</p>
                <p className="text-gray-100 leading-relaxed">
                  Graduates emerge confident and capable, gaining horizontal and
                  vertical dimensions of core knowledge aligned with school principles.
                </p>
              </div>
            </div>

            {/* RIGHT: IMAGE (SLIDE UP) */}
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="relative w-[70vw] h-[80vh] sm:w-[280px]">
                <Image
                  src="/home/Pic_6.webp"
                  alt="Standing student"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ================= WORLD-CLASS FACILITIES ================= */}
      <section className="bg-white pt-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          {/* TOP CONTENT */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-700 mb-6">
              World-class Facilities and Infrastructure
            </h2>

            <p className="text-gray-500 font-semibold leading-relaxed max-w-4xl">
              Our campus has been crafted as a nurturing educational setting to foster
              the intellectual, physical, social, and emotional growth of our students.
              Here are some of the features our campus proudly offers:
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center md:justify-start items-end">
              <div className="relative z-10 w-[60vw]">
                <Image
                  src="/home/Pic_7.webp"
                  alt="Child exploring"
                  width={500}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-10 text-center text-gray-500 font-semibold leading-relaxed">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Ergonomically Designed Furniture
                </h4>
                <p>Furniture designed for comfort and efficiency.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Aesthetically Decked Learning Spaces
                </h4>
                <p>
                  Learning spaces are thoughtfully adorned to cater to students' various
                  levels and requirements, stimulating and enhancing their young minds.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Air-Conditioned Classrooms
                </h4>
                <p>
                  Classrooms are equipped with air conditioning for a conducive learning atmosphere.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Real-World Extracurricular Activities
                </h4>
                <p>
                  Every extracurricular activity is meticulously planned to align with practical use
                  and real-world demands, allowing students to immerse themselves in a realistic environment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FACILITIES GRID ================= */}
      <section className="bg-gray-100 py-24 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World-class Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A holistic learning environment supported by thoughtfully designed infrastructure.
          </p>
        </div>

        {/* CHROMA GRID */}
        <div className="relative">
          <ChromaGrid
            items={facilities}
            radius={320}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </section>

      {/* ================= UNLOCK POTENTIAL ================= */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unlock Your Child's Full Potential With Us
          </h2>
          <p className="text-gray-700 mb-2">Enroll them in the QMIS family.</p>
          <p className="text-gray-700 mb-6">Every child is one-of-a-kind. One size does NOT fit all.</p>
          <button
            onClick={handleApplyNow}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition"
          >
            APPLY NOW
          </button>
        </div>
      </section>

      {/* ================= EDUCATION BEYOND CLASSROOM ================= */}
      <section className="bg-[#0A0F3D] text-white py-16 px-6 md:px-20 overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Education beyond the classroom
          </h2>

          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            We believe in expanding knowledge and skills beyond the limitations of
            textbooks and exams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Image
                  src={src}
                  alt={`Education beyond classroom ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= FAQs (UPDATED WITH ACCORDION) ================= */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">FAQs</h2>

          <div className="space-y-4">
            {homeFaqData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleFaqToggle(index)}
                className="border-b border-gray-300 py-5 cursor-pointer"
              >
                {/* Question Row */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-darkBlue-900 pr-4">
                    {item.question}
                  </h3>

                  <IoChevronDown
                    size={15}
                    className={`text-darkBlue-900 transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </div>

                {/* Answer Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? "max-h-96 mt-3" : "max-h-0"
                    }`}
                >
                  <p className="text-base md:text-md text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER CARDS WITH PAGINATION ================= */}
      <section className="bg-[#0A0F3D] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            School Policies & Information
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => window.open(card.pdf, '_blank')}
                className="bg-[#0A2847] h-56 p-8 rounded-lg text-white cursor-pointer 
                         hover:bg-[#0D3159] transition-all duration-300 
                         flex flex-col justify-between transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full border border-white 
                              flex items-center justify-center mb-6">
                  <FileText size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold leading-snug">
                  {card.title}
                </h3>

                {/* Divider */}
                <span className="w-12 h-[2px] bg-white my-4 block" />

                {/* CTA */}
                <p className="text-sm text-gray-300 flex items-center">
                  View now
                  <ChevronRight size={16} className="ml-1" />
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Page Info */}
            <div className="text-white text-sm">
              Showing <span className="font-semibold">{startIndex + 1}-{Math.min(endIndex, cards.length)}</span> of <span className="font-semibold">{cards.length}</span> policies
            </div>

            {/* Pagination Navigation */}
            <div className="flex items-center gap-4">
              {/* Previous Button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`p-2 rounded-full ${currentPage === 0
                  ? 'bg-gray-700 cursor-not-allowed text-gray-400'
                  : 'bg-[#0A2847] hover:bg-[#0D3159] text-white'
                  } transition-all duration-300`}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Page Dots/Buttons */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToPage(idx)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${currentPage === idx
                      ? 'bg-red-600 text-white'
                      : 'bg-[#0A2847] text-white hover:bg-[#0D3159]'
                      }`}
                    aria-label={`Go to page ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className={`p-2 rounded-full ${currentPage === totalPages - 1
                  ? 'bg-gray-700 cursor-not-allowed text-gray-400'
                  : 'bg-[#0A2847] hover:bg-[#0D3159] text-white'
                  } transition-all duration-300`}
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Mobile Page Info */}
            <div className="text-white text-sm sm:hidden">
              Page <span className="font-semibold">{currentPage + 1}</span> of <span className="font-semibold">{totalPages}</span>
            </div>
          </div>

          {/* Pagination Dots (Mobile Only) */}
          <div className="sm:hidden flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === idx ? 'bg-red-600 w-6' : 'bg-gray-600'}`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
