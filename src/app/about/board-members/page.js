'use client';

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { useState } from "react";

const boardMembers = [
  {
    img: "/1_bm.jpg",
    name: "HONOURABLE JUSTICE D. MURUGESAN",
    desc: [
      "Former Chief Justice of Delhi High Court",
      "Former Member of National Human Rights Commission of India",
    ],
  },
  {
    img: "/2_bm.jpg",
    name: "THIRU. D.R. KAARTHIKEYAN",
    desc: [
      "Former Indian Police Officer (IPS) Former",
      "Director of the Central Bureau of",
      "Investigation (CBI) Former Director General",
      "of National Human Rights Commission",
    ],
  },
  {
    img: "/3_bm.jpg",
    name: "DR. R. VENKATRAMAN",
    desc: [
      "Deputy Director, Vehicle Assembly & Launch",
      "Facilities, Satish Dhawan Space Center",
      "(SHAR), Indian Space Research Organisation",
      "(ISRO), Sriharikota",
    ],
  },
  {
    img: "/4_bm.jpg",
    name: "MS. JENNI THOMPSON",
    desc: [
      "Early Childhood Expert, Australia ",
      "Former School Support and Evaluation Officer,",
      "Council of International Schools, Leiden,",
      "Netherlands",
    ],
  },
  {
    img: "/5_bm.jpg",
    name: "THIRU. A. MYILVAGANAN",
    desc: [
      "Superintendent of Police Directorate of",
      "Vigilance and Anticorruption Western Range,",
      "Tamilnadu ACE Athlete of Tamilnadu Police",
      "Department Brand Ambassador of BFIT",
    ],
  },
  {
    img: "/6_bm.jpg",
    name: "DR. AUGUSTUS SAMUEL DODD",
    desc: [
      "Chief Executive Officer, Grace Kennet",
      "Foundation(GKF) Ex. Medical Officer in the",
      "Indian Army",
    ],
  },
  {
    img: "/7_bm.jpg", name: "Dr. Madhan Karky",
    desc: [
      "Indian Lyricist Founder of Karky Research",
      "Foundation (KaReFo) & Mellinam Education",
    ],
  },
  {
    img: "/8_bm.jpg", name: "Dr. R. Thiruchenthuran",
    desc: [
      "President, Dr. APJ Abdul Kalam's Vision 2020",
      "Recipient of Life Time Achievement Award",
      "from British Parliament",
    ],
  },
  {
    img: "/10_bm.jpg", name: "Dr. Sarvesh Naidu",
    desc: [
      "Former Executive Director Pathways World",
      "School (Gurgaon, Delhi & Noida) Executive",
      "Vice President TRINS Institutions, Kerala",
    ],
  },
  {
    img: "/9_bm.jpg", name: "Mr. Jayaprakash Gandhi",
    desc: [
      "Leading Career Consultant and analyst",
    ],
  },
  {
    img: "/11_bm.jpg", name: "Thiru. Ganeskumar Ramanathan",
    desc: [
      "Lead, Strategy & Operations, Cisco Systems India Pvt. Ltd",
    ],
  },
  {
    img: "/13_bm.jpg", name: "Dr. Pathmarani K. Naidu",
    desc: [
      "Former Head of Well-being, Pathways World",
      "School, Gurgaon Ambassador, International",
      "Global Citizen's Award Program Founder,",
      "Compassionate World Citizen Program",
    ],
  },
];

export default function BoardMembers() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (index) => {
    setSelectedMember(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Small delay to allow fade-out animation
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <div>
      <PageHeader contentTitle="Board Members" />

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6 lg:px-10 py-8 lg:py-12 max-w-7xl mx-auto">
        <div className="relative w-full h-[250px] lg:h-[300px]">
          <Image
            src="/bg_image.JPG"
            alt="Group Image"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-4">
          <p className="text-gray-500 leading-loose text-base lg:text-lg">
            Our Board of Governors comprising eminent personalities from diverse
            fields of expertise collectively creates a multifarious and
            all-encompassing mix of competence and perspective that enhances the
            efficiency and ethos of our school. This celebrated band — from a
            legal luminary to a nutritional expert and from a celebrated police
            officer to a personality developer — brings their vast operational
            experiences, leadership qualities, and strategic skills into our
            institution to groom future citizens into smart global citizens. They
            are the livewire behind the professional success of QMIS and add grace
            and glory to our institution.
          </p>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="bg-darkBlue-100 px-4 lg:px-6 xl:px-10 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer lg:cursor-default"
                onClick={() => handleCardClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(index);
                  }
                }}
                aria-label={`View details of ${member.name}`}
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 lg:group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                {/* Name Tag (Always Visible) */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent px-4 py-3">
                  <h3 className="text-white font-semibold text-sm line-clamp-2">
                    {member.name}
                  </h3>
                </div>

                {/* Touch Indicator (For mobile and tablets - hidden on desktop) */}
                <div className="absolute top-2 right-2 lg:hidden bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  Tap for details
                </div>

                {/* Hover Overlay with Details (Desktop Only - lg and above) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hidden lg:flex flex-col justify-end p-4">
                  <div className="space-y-2 transform translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                    <div className="space-y-1">
                      {member.desc.map((line, i) => (
                        line && (
                          <p
                            key={i}
                            className="text-gray-200 text-sm"
                          >
                            {line}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL FOR MOBILE AND TABLETS (up to 1024px) */}
      {selectedMember !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 lg:hidden transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Modal Content */}
          <div
            className={`relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden transform transition-transform duration-300 ${isModalOpen ? 'scale-100' : 'scale-95'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Member Image */}
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={boardMembers[selectedMember].img}
                alt={boardMembers[selectedMember].name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw"
              />
            </div>

            {/* Member Details */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[40vh]">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                {boardMembers[selectedMember].name}
              </h2>
              <div className="space-y-2">
                {boardMembers[selectedMember].desc.map((line, i) => (
                  line && (
                    <p key={i} className="text-gray-600 text-sm lg:text-base">
                      {line}
                    </p>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
