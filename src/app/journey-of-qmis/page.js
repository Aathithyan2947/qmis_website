'use client'
import { useState } from 'react';
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { X } from 'lucide-react';

const journeyData = [
  {
    year: "2010",
    title: "The Beginning of a Vision",
    description:
      "Establishment of Queen Mira International School. A dream takes root — nurturing minds, shaping futures.",
    image: "/journey-of-qmis/1.png",
    position: "bottom",
  },
  {
    year: "2015",
    title: "Global Membership",
    description:
      "CIS Membership. QMIS steps into the global education community with a commitment to quality and inclusion.",
    image: "/journey-of-qmis/2.png",
    position: "top",
  },
  {
    year: "2017",
    title: "Academic Excellence Recognized",
    description:
      "First batch to begin its journey towards Academic Excellence and continues with a weighted average of 84% and 100% pass percentage. Celebrating scholastic brilliance and consistent performance.",
    image: "/journey-of-qmis/3.png",
    position: "bottom",
  },
  {
    year: "2021",
    title: "International Accreditation",
    description:
      "CIS Accreditation Endorsed for world-class standards in learning, Leadership and well-being.",
    image: "/journey-of-qmis/4.png",
    position: "top",
  },
  {
    year: "2022",
    title: "A Step Towards Fitness",
    description:
      "BFIT program introduced — first school to introduce daily fitness as holistic education.",
    image: "/journey-of-qmis/5.png",
    position: "bottom",
  },
  {
    year: "2023",
    title: "Marksmanship & Leadership",
    description:
      "Inauguration of Rifle Club State Rank Achieved in Grade X & Xll cultivating precision, discipline, and academic excellence side by side. ",
    image: "/journey-of-qmis/6.png",
    position: "top",
  },
  {
    year: "2024",
    title: "Strengthening Skills & Sports",
    description:
      "Tie-up with Celebrate Sports Foundation and Mentored by Pullela Gopichand for badminton academy. State Achievement in Rifle Expanding horizons through sports and mentorship.",
    image: "/journey-of-qmis/7.png",
    position: "bottom",
  },
  {
    year: "2025",
    title: "Global Collaboration & Recognition",
    description:
      "Collaboration with Melbourne University, Australia, for Skill-Based Learning project amongst one of the 60 schools across the global and one of the two schools in India. State representation of Throwball and rifle - Stepping onto the national and International stage. ",
    image: "/journey-of-qmis/8.png",
    position: "top",
  },
];

export default function JourneyOfQMIS() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <PageHeader contentTitle="Journey of QMIS" />

      <section className="py-20 px-4 md:px-10 bg-grid-dots">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue-100">
            The Queen Mira Journey
          </h2>
          <p className="text-gray-500 text-lg md:text-3xl font-semibold mt-4">
            From Vision to Vanguard (2010–2026)
          </p>
          <p className="mt-6 border-4 px-6 py-4 rounded-4xl border-gray-300 text-lg md:text-2xl text-gray-500">
            A chronicle of milestones that shaped excellence, innovation, and global learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-darkBlue-100 -translate-x-1/2" />

          <div className="space-y-20">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${item.position === "top"
                  ? "md:flex-row-reverse"
                  : ""
                  }`}
              >
                {/* Content */}
                <div className="md:w-1/2 px-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center md:text-left">
                    <h3 className="text-lg font-semibold text-darkBlue-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.year}
                    </p>
                    <p className="text-gray-500 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-5 h-5 bg-darkBlue-100 rounded-full border-4 border-white" />
                </div>

                {/* Image - Clickable */}
                <div
                  className={`md:w-1/2 mt-8 md:mt-0 flex ${index % 2 === 0
                    ? "md:justify-start md:pl-2"
                    : "md:justify-end md:pr-2"
                    }`}
                >
                  <button
                    onClick={() => openModal(item.image)}
                    className="focus:outline-none cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={220}
                      height={160}
                      className="object-contain"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:scale-110 transition-transform z-10"
          >
            <X size={32} />
          </button>

          {/* Image Container - Fills most of the screen */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-[80vw] max-h-[80vh] flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain p-4"
                sizes="80vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
