'use client';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";

const APPLY_NOW_URL =
  "https://admissions.qmis.edu.in/?utm_source=Website&utm_medium=popup_form&utm_campaign=BBC&_gl=1%2A11hbug0%2A_ga%2AMTIyNDc1NDU3Ni4xNzY1MDQ3MzAx%2A_ga_K5HD0P2MHT%2AczE3NjU2NDQ5NTkkbzkkZzEkdDE3NjU2NDYwNTEkajYwJGwwJGgw";

// Updated facilities data to match your screenshot
const facilities = [
  {
    image: '/home/1.png',
    title: 'LIBRARY',
    description: 'Where learning goes beyond the clasroom.',
  },
  {
    image: '/home/2.png',
    title: 'MUSIC ROOM',
    description: 'For Unleashing the budding musician in you!',
  },
  {
    image: '/home/3.png',
    title: 'DANCE STUDIO',
    description: 'To stay on the better side of the health.',
  },
  {
    image: '/home/4.png',
    title: 'CLASS ROOMS',
    description: 'A state-of-the-art place for holistic learning & discovery',
  },
  {
    image: '/home/5.png',
    title: 'FOOTBALL FIELD',
    description: 'For building muscle and promoting team work from a young age.',
  },
  {
    image: '/home/6.png',
    title: 'ATHLETICS TRACK',
    description: 'For a healthy balance between body and mind',
  },
  {
    image: '/home/7.png',
    title: 'OUTDOOR GYM',
    description: 'For improved energy levels and focus!',
  },
  {
    image: '/home/8.png',
    title: 'INDOOR BASKETBALL COURT',
    description: 'A secure and safe place area for a healthy and active lifestyle.',
  },
  {
    image: '/home/9.png',
    title: 'COMPUTER LAB',
    description: 'To prepare mind for a world dominated by technology.',
  },
  {
    image: '/home/10.png',
    title: 'RIFLE ZONE',
    description: 'The area that guarantees enhanced vision and stamina.',
  },
  {
    image: '/home/11.png',
    title: 'BFIT CLASSES',
    description: 'A wellness program to keep both students and teachers active.',
  },
  {
    image: '/home/12.png',
    title: 'ENHANCED SAFETY',
    description: 'To mitigate potential risks and overcome emergency situation.',
  },
];

// Homepage FAQ Data
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

// New Facilities Grid Component
function FacilitiesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            className="relative h-64 overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image Container */}
            <div className="relative w-full h-full">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className={`object-cover transition-all duration-700 ${hoveredIndex === index ? 'grayscale-0 scale-105' : 'grayscale'
                  }`}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Black & White Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                             transition-all duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                }`} />

              {/* Title Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${hoveredIndex === index ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                <h3 className="text-white text-lg font-bold tracking-wider text-center">
                  {facility.title}
                </h3>
              </div>

              {/* Color Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                             transition-all duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`} />

              {/* Hover Content */}
              <div className={`absolute inset-0 flex items-end justify-center transition-all duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                <div className="text-center px-6 py-1">
                  <h3 className="text-white text-2xl font-bold tracking-wider">
                    {facility.title}
                  </h3>
                  <p className="text-gray-200 text-sm ">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Carousel Component
function CardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlideIntervalRef = useRef(null);
  const containerRef = useRef(null);

  // Calculate visible items based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
      stopAutoSlide();
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }

    return () => {
      stopAutoSlide();
    };
  }, [isAutoPlaying, currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideIntervalRef.current = setInterval(() => {
      handleNext();
    }, 2000); // Changed to 2 seconds
  };

  const stopAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = null;
    }
  };

  // Calculate total items needed for infinite scroll
  const totalItems = cards.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Create an extended array for smooth infinite scrolling
  const extendedCards = [...cards, ...cards, ...cards];

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAutoPlaying(false);
    setIsAnimating(true);

    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? totalItems - itemsPerPage : newIndex;
    });

    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAutoPlaying(false);
    setIsAnimating(true);

    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex > totalItems - itemsPerPage ? 0 : newIndex;
    });

    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Calculate which cards to show
  const getVisibleCards = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + itemsPerPage;
    return extendedCards.slice(startIndex, startIndex + itemsPerPage * 2).slice(0, itemsPerPage);
  };

  const visibleCards = getVisibleCards();

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10
                   w-10 h-10 md:w-12 md:h-12 rounded-full bg-darkBlue-100 backdrop-blur-sm
                   border border-darkBlue-100 flex items-center justify-center
                   hover:bg-darkBlue-100 hover:scale-110 transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-white/50
                   disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous policies"
        disabled={isAnimating}
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      {/* Cards Container */}
      <div className="overflow-hidden px-8" ref={containerRef}>
        <div
          className={`flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out ${isAnimating ? 'transition-all duration-500' : ''
            }`}
          style={{
            transform: `translateX(-${(currentIndex % totalItems) * (100 / itemsPerPage)}%)`,
          }}
        >
          {extendedCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              onClick={() => window.open(card.pdf, '_blank')}
              className="bg-darkBlue-100 h-56 w-72 p-6 sm:p-8 rounded-lg text-white cursor-pointer 
                       hover:bg-red-500 transition-all duration-300 
                       flex flex-col justify-between transform hover:-translate-y-1
                       min-w-[250px] flex-shrink-0"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white 
                            flex items-center justify-center mb-4 sm:mb-6">
                <FileText size={18} className="sm:text-lg" />
              </div>

              <h3 className="text-base sm:text-lg font-semibold leading-snug">
                {card.title}
              </h3>

              <span className="w-8 sm:w-12 h-[2px] bg-white my-3 sm:my-4 block" />

              <p className="text-xs sm:text-sm text-gray-300 flex items-center">
                View now
                <ChevronRight size={14} className="sm:w-4 sm:h-4 ml-1" />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10
                   w-10 h-10 md:w-12 md:h-12 rounded-full bg-darkBlue-100 backdrop-blur-sm
                   border border-darkBlue-100 flex items-center justify-center
                   hover:bg-darkBlue-100 hover:scale-110 transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-white/50
                   disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next policies"
        disabled={isAnimating}
      >
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const images = [
    '/home/Pic_8.webp',
    '/home/Pic_9.webp',
    '/home/Pic_10.webp',
  ];

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleApplyNow = () => {
    window.open(APPLY_NOW_URL, "_blank", "noopener,noreferrer");
  };

  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Fixed Mobile Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 hidden md:flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-[#1B235A] rounded-2xl md:max-w-xl shadow-2xl p-2 md:p-12 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-1 right-1 md:top-4 md:right-4 cursor-pointer hover:scale-110 transition-all duration-200 text-white text-2xl font-bold z-10"
              aria-label="Close"
            >
              <X size={24} className="md:w-8 md:h-8" />
            </button>

            <div className="rounded-xl overflow-hidden bg-[#0F1B4C]">
              <div className="w-full h-48 md:h-80 bg-gray-400 flex items-center justify-center text-white">
                <Image
                  src="/home/qmisad.webp"
                  height={500}
                  width={800}
                  alt="Apply Now"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center mt-4 md:mt-6">
              <button
                onClick={handleApplyNow}
                className="bg-maroon-100 cursor-pointer duration-200 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold transition w-full md:w-auto"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0A0F3D] text-white px-4 md:px-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 items-center gap-8 md:gap-0">
          <div className="md:col-span-1">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Looking for a school that has a 360-degree approach to education?
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
              At Queen Mira, we don&apos;t create toppers. We create leaders who will
              take the world into a brighter future.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              For us, education does not mean only academics. It encompasses every
              facet of learning for a child that will make them responsible and
              well-meaning members of society.
            </p>

            <button
              onClick={handleApplyNow}
              className="mt-6 md:mt-8 bg-maroon-100 hover:scale-105 px-6 py-3 rounded text-white font-semibold transition cursor-pointer w-full md:w-auto"
            >
              APPLY NOW
            </button>
          </div>

          <div className="md:col-span-2 flex justify-center items-end">
            <motion.div
              className="relative w-full h-64 md:w-[50vw] md:h-[60vh]"
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
                src="/home/Pic_1.png"
                alt="Students"
                fill
                className="object-cover"
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
        className="bg-grid-dots text-gray-500 py-12 md:py-20 px-4 md:px-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 md:gap-6 order-2 md:order-1">
            <div className="bg-gray-100 backdrop-blur rounded-lg p-4 md:p-6 flex justify-center items-center h-24 md:h-32">
              <Image src="/home/Pic_2.webp" height={500} width={600} alt="image not found" />
            </div>
            <div className="bg-gray-100 backdrop-blur rounded-lg p-4 md:p-6 flex justify-center items-center h-24 md:h-32">
              <Image src="/home/Pic_3.webp" height={500} width={600} alt="image not found" />
            </div>
            <div className="bg-gray-100 backdrop-blur rounded-lg p-4 md:p-6 flex justify-center items-center h-24 md:h-32">
              <Image src="/home/Pic_4.webp" height={500} width={600} alt="image not found" />
            </div>
            <div className="bg-gray-100 backdrop-blur rounded-lg p-4 md:p-6 flex justify-center items-center h-24 md:h-32">
              <Image src="/home/Pic_5.webp" height={500} width={600} alt="image not found" />
            </div>
          </div>

          <div className="text-center font-semibold order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">Welcome to QMIS</h2>

            <div className="space-y-2 mb-6 md:mb-10">
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

            <p className="my-6 md:my-10">
              This is the greatest gift you could give your child.
            </p>

            <ul className="space-y-2 text-left text-sm md:text-base">
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
        className="bg-[#B62020] text-white py-12 md:py-16 px-4 md:px-20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Curriculum
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center items-center">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Early Childhood Education Program
                </h3>
                <p className="text-xs md:text-sm font-semibold mb-2">Pre-KG, LKG, UKG</p>
                <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                  Our ECEP programme provides a conducive, stimulating environment
                  that encourages exploration, creativity, and holistic development,
                  laying a strong foundation for lifelong learning.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Primary Years Academics Programme
                </h3>
                <p className="font-semibold text-xs md:text-sm mb-2">Grades 1, 2, 3, 4, 5</p>
                <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                  QMIS strives to balance knowledge, skills, creativity, and innovation
                  while emphasizing 21st-century skills for future-ready learners.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Middle Years Academics Programme
                </h3>
                <p className="font-semibold text-xs md:text-sm mb-2">Grades 6, 7, 8</p>
                <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                  Structured to meet varied intellectual needs, ensuring progression,
                  continuity, and continuous evaluation of student performance.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Secondary Years Academics Programme
                </h3>
                <p className="font-semibold text-xs md:text-sm mb-2">Grades 9, 10, 11, 12</p>
                <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                  Graduates emerge confident and capable, gaining horizontal and
                  vertical dimensions of core knowledge aligned with school principles.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="relative w-[60vw] h-[60vh] md:w-[70vw] md:h-[80vh] sm:w-[280px]">
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
      <section className="bg-grid-dots pt-8 md:pt-10 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl sm:text-3xl md:text-4xl font-bold text-red-700 mb-4 md:mb-6">
              World-class Facilities and Infrastructure
            </h2>

            <p className="text-gray-500 font-semibold leading-relaxed max-w-4xl text-sm md:text-base">
              Our campus has been crafted as a nurturing educational setting to foster
              the intellectual, physical, social, and emotional growth of our students.
              Here are some of the features our campus proudly offers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex justify-center md:justify-start items-end">
              <div className="relative z-10 w-[70vw] md:w-[60vw]">
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

            <div className="space-y-6 md:space-y-10 text-center text-gray-500 font-semibold leading-relaxed text-sm md:text-base">
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
                  Learning spaces are thoughtfully adorned to cater to students&apos; various
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

      {/* ================= NEW FACILITIES GRID ================= */}
      <section className="bg-grid-dots pb-12 md:pb-20">
        <FacilitiesGrid />
      </section>

      {/* ================= UNLOCK POTENTIAL ================= */}
      <section className="bg-grid-dots px-4 pb-10 md:pb-16">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unlock Your Child&apos;s Full Potential With Us
          </h2>
          <p className="text-gray-700 mb-2">Enroll them in the QMIS family.</p>
          <p className="text-gray-700 mb-6">Every child is one-of-a-kind. One size does NOT fit all.</p>
          <button
            onClick={handleApplyNow}
            className="bg-maroon-100 hover:scale-105 cursor-pointer text-white px-6 md:px-8 py-3 rounded font-semibold transition w-full md:w-auto"
          >
            APPLY NOW
          </button>
        </div>
      </section>

      {/* ================= EDUCATION BEYOND CLASSROOM ================= */}
      <section className="bg-[#0A0F3D] text-white py-12 md:py-16 px-4 md:px-20 overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-center mb-4">
            Education beyond the classroom
          </h2>

          <p className="text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            We believe in expanding knowledge and skills beyond the limitations of
            textbooks and exams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="relative h-48 md:h-64 rounded-lg overflow-hidden"
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

      {/* ================= FAQs ================= */}
      <section className="bg-grid-dots py-12 md:py-16 px-4 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center mb-8 md:mb-12">FAQs</h2>

          <div className="space-y-4">
            {homeFaqData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleFaqToggle(index)}
                className="border-b border-gray-300 py-4 md:py-5 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className={`text-sm md:text-base font-semibold text-darkBlue-900 pr-4 ${openFaqIndex === index ? 'text-red-600' : 'text-darkBlue-100'}`}>
                    {item.question}
                  </h3>

                  <IoChevronDown
                    size={15}
                    className={`text-darkBlue-900 transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? "max-h-96 mt-3" : "max-h-0"
                    }`}
                >
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ================= FOOTER CARDS WITH CAROUSEL ================= */}
      < section className="py-12 md:py-20 px-4 md:px-20 overflow-hidden" >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center text-darkBlue-100 mb-8 md:mb-12">
            School Policies & Information
          </h2>

          <CardsCarousel />
        </div>
      </section >
    </>
  );
}
