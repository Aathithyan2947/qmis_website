"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, X, Youtube } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Particles from "@/components/Particles";

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();
  const [hoverItem, setHoverItem] = useState("");
  const [activeItem, setActiveItem] = useState("");

  const menu = [
    { name: "Home", route: "/" },
    {
      name: "About",
      route: "/about",
      submenu: [
        { label: "Tribute", route: "/about/tribute" },
        { label: "Leadership Team", route: "/about/leadership-team" },
        { label: "Board Members", route: "/about/board-members" },
        { label: "About QMIS", route: "/about/qmis" },
        { label: "Disclosure", route: "/about/disclosure" },
      ],
    },
    {
      name: "Infrastructure",
      route: "/infrastructure",
      submenu: [
        { label: "Campus", route: "/infrastructure/campus" },
        { label: "Facilities", route: "/infrastructure/facilities" },
        { label: "Transport", route: "/infrastructure/transport" },
      ],
    },
    {
      name: "Academia",
      route: "/academia",
      submenu: [
        { label: "Curriculum", route: "/academia/curriculum" },
        { label: "Learning Approach", route: "/academia/learning-approach" },
        { label: "Faculty", route: "/academia/faculty" },
      ],
    },
    { name: "Happy Schooling", route: "/happy-schooling" },
    { name: "Gallery", route: "/gallery" },
    { name: "Advantage", route: "/advantage" },
    { name: "CIS", route: "/cis" },
    {
      name: "Admissions",
      route: "/admissions",
      submenu: [
        { label: "Admission Process", route: "/admissions/process" },
        { label: "Eligibility", route: "/admissions/eligibility" },
        { label: "Documents", route: "/admissions/documents" },
      ],
    },
    {
      name: "Student Activities",
      route: "/activities",
      submenu: [
        { label: "Sports", route: "/activities/sports" },
        { label: "Clubs", route: "/activities/clubs" },
        { label: "Events", route: "/activities/events" },
      ],
    },
    {
      name: "Career",
      route: "/career",
      submenu: [
        { label: "Work With Us", route: "/career/work-with-us" },
        { label: "Open Positions", route: "/career/open-positions" },
      ],
    },
    {
      name: "Educational Resources",
      route: "/resources",
      submenu: [
        { label: "E-Learning", route: "/resources/elearning" },
        { label: "Downloads", route: "/resources/downloads" },
        { label: "Study Material", route: "/resources/material" },
      ],
    },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-9999 overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          {/* Particles Background */}
          <div className="absolute inset-0 bg-white">
            <Particles
              particleColors={['#e5e7eb', '#d1d5db']}
              particleCount={1000}
              particleSpread={10}
              speed={0.08}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={true}
              disableRotation={false}
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6">
              <div className="flex gap-5 items-center">
                <Image
                  src="/Mebourne.png"
                  height={60}
                  width={60}
                  alt="Melbourne Logo"
                  className="h-16 w-16 md:h-14 md:w-14 lg:h-18 lg:w-18"
                />
                <Image
                  src="/QMIS_Logo.png"
                  width={180}
                  height={80}
                  alt="Menu Logo"
                  className="h-16 md:h-18 w-auto"
                />
              </div>
              <X className="cursor-pointer h-8 w-8 text-gray-700" onClick={onClose} />
            </div>

            {/* Content */}
            <div className="px-8 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT MENU */}
                <div className="space-y-6 text-[18px] tracking-wide col-span-1 md:pl-12">
                  {menu.map((item) => (
                    <div key={item.name} className="relative">

                      {/* Parent Row */}
                      <div
                        className="group cursor-pointer flex items-center justify-between pr-4"
                        onMouseEnter={() => item.submenu && setHoverItem(item.name)}
                        onMouseLeave={() => setHoverItem("")}
                        onClick={() => {
                          if (item.submenu) {
                            setActiveItem(activeItem === item.name ? "" : item.name);
                          } else {
                            router.push(item.route);
                            onClose();
                          }
                        }}
                      >
                        <span
                          className={`font-semibold ${hoverItem === item.name || activeItem === item.name
                            ? "text-red-600"
                            : "text-[#1a2752]"
                            }`}
                        >
                          {item.name}
                        </span>

                        {item.submenu && (
                          <span
                            className={`ml-2 ${hoverItem === item.name || activeItem === item.name
                              ? "text-red-600"
                              : "text-[#1a2752]"
                              }`}
                          >
                            ›
                          </span>
                        )}
                      </div>

                      {/* MOBILE SUBMENU */}
                      <AnimatePresence>
                        {activeItem === item.name &&
                          item.submenu && (
                            <motion.div
                              className="md:hidden pl-4 mt-2 space-y-2 text-[#1a2752]"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              {item.submenu.map((sub) => (
                                <div
                                  key={sub.label}
                                  onClick={() => {
                                    router.push(sub.route);
                                    onClose();
                                  }}
                                  className="cursor-pointer hover:text-red-600"
                                >
                                  {sub.label}
                                </div>
                              ))}
                            </motion.div>
                          )}
                      </AnimatePresence>

                      {/* DESKTOP SUBMENU (Right Column) */}
                      <AnimatePresence>
                        {(hoverItem === item.name ||
                          activeItem === item.name) &&
                          item.submenu && (
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="
                                hidden md:block absolute left-full top-0 
                                ml-10 pl-8 border-l border-gray-300 
                                space-y-3 text-[#1a2752] w-64
                              "
                            >
                              {item.submenu.map((sub) => (
                                <div
                                  key={sub.label}
                                  onClick={() => {
                                    router.push(sub.route);
                                    onClose();
                                  }}
                                  className="cursor-pointer hover:text-red-600 whitespace-nowrap"
                                >
                                  {sub.label}
                                </div>
                              ))}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* MIDDLE EMPTY COLUMN */}
                <div className="col-span-1 hidden md:block"></div>

                {/* CONTACT SECTION */}
                <div className="col-span-1">
                  <h3 className="text-red-600 font-bold mb-3">CONTACT</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Queen Mira International School<br />
                    Melakkal Road, Kochadai<br />
                    Madurai - 625 019<br />
                    Tamil Nadu, India
                  </p>

                  <div className="space-y-1 mb-6">
                    <a href="tel:+919655777000" className="text-blue-600 block">
                      +91 96557 77000
                    </a>
                    <a href="tel:+919787570746" className="text-blue-600 block">
                      +91 97875 70746
                    </a>
                    <a href="mailto:contact@queenmira.com" className="text-blue-600 block">
                      contact@queenmira.com
                    </a>
                  </div>

                  <h3 className="text-red-600 font-bold mb-4">CONNECT</h3>

                  <div className="flex gap-6 mb-10">
                    <div className="h-10 w-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer">
                      <Youtube />
                    </div>
                    <div className="h-10 w-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer">
                      <Instagram />
                    </div>
                    <div className="h-10 w-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer">
                      <Facebook />
                    </div>
                  </div>

                  <Image
                    src="/Blue_Happy Schooling.png"
                    width={200}
                    height={80}
                    alt="Happy Schooling"
                  />
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
