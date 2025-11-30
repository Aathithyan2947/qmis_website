"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, X, Youtube } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Particles from "@/components/Particles";

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();
  const [hoverItem, setHoverItem] = useState("");
  const [activeItem, setActiveItem] = useState("");

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const menu = [
    { name: "Home", route: "/" },
    {
      name: "About",
      route: "/about",
      submenu: [
        { label: "Tribute", route: "/about/tribute" },
        { label: "Why, How & What", route: "/about/WhyHowWhat" },
        { label: "Leadership Team", route: "/about/leadership-team" },
        { label: "Board Members", route: "/about/board-members" },
        { label: "About QMIS", route: "/about/qmis" },
        { label: "Disclosure", route: "/about/disclosure" },
      ],
    },
    {
      name: "Message From MD",
      route: "/message-from-md",
      submenu: [
        { label: "MD Letter", route: "/md-letter" },
        { label: "QMIS Strategy", route: "/qmis-strategy" },
        { label: "Promises", route: "/promises" },
      ],
    },
    { name: "Journey Of QMIS", route: "/journey-of-qmis" },
    {
      name: "Facilities",
      route: "/facilities",
      submenu: [
        { label: "Infrastructure", route: "/facilities/infrastructure" },
        { label: "Badminton", route: "/facilities/Badminton" },
        { label: "Veeravanam", route: "/facilities/Veeravanam" },
        { label: "Rifle Club", route: "/facilities/rifle-club" },
        { label: "Kidz Club", route: "/facilities/kidz-club" },
        { label: "Sports Complex", route: "/facilities/sports-complex" },
        { label: "Vehicles", route: "/facilities/vehicles" },
        { label: "Health Center", route: "/facilities/health-center" },
        { label: "Safety & Security", route: "/facilities/safety-and-security" },
      ],
    },
    {
      name: "Academia",
      route: "/academia",
      submenu: [
        { label: "Overview", route: "/academia/overview" },
        { label: "Board Achievements", route: "/academia/board-achievements" },
        { label: "Academic Enrichment Program", route: "/academia/academic-enrichment-program" },
        { label: "Value Based Education", route: "/academia/value-based-eduction" },
        { label: "Resources", route: "/academia/resources" },
      ],
    },
    {
      name: "Inclusions",
      route: "/inclusions",
      submenu: [
        { label: "Inclusion @ QMIS", route: "/inclusions/inclusion-at-qmis" },
        { label: "Hear from our Team", route: "/inclusions/hear-from-our-team" },
      ],
    },
    { name: "Sports", route: "/sports" },
    {
      name: "Holistic Education",
      route: "/holistic-education",
      submenu: [
        { label: "Body", route: "/holistic-education/body" },
        { label: "Mind", route: "/holistic-education/mind" },
        { label: "Soul", route: "/holistic-education/soul" },
        { label: "Holistic Profile", route: "/holistic-education/holistic-profile" },
      ],
    },
    { name: "Holistic Achievers", route: "holistic-achievers" },
    { name: "CIS", route: "/cis" },
    { name: "MelBourne", route: "/melbourne" },
    { name: "Admissions", route: "/admissions" },
    { name: "After School Activities", route: "/after-school-activities" },
    {
      name: "Careers",
      route: "/careers",
      submenu: [
        { label: "Career Guidance", route: "/careers/career-guidance" },
        { label: "Eligibility", route: "/careers/career-at-qmis" },
      ],
    },
    { name: "Alumini", route: "/alumini" },
    {
      name: "Educational Resources",
      route: "/educational-resources",
      submenu: [
        { label: "Blog", route: "/educational-resources/blog" },
        { label: "FAQ", route: "/educational-resources/faq" },
      ],
    },
    {
      name: "Social Outreach",
      route: "/social-outreach",
    },
    { name: "Survey Reflection", route: "/survey-reflection" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-9999 flex"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          {/* Full Background */}
          <div className="absolute inset-0 bg-white">
            <Particles
              particleColors={["#e5e7eb", "#d1d5db"]}
              particleCount={1000}
              particleSpread={10}
              speed={0.08}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={true}
              disableRotation={false}
            />
          </div>

          {/* Scrollable Content */}
          <div className="relative z-10 w-full h-full overflow-y-auto">
            {/* HEADER SECTION */}
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

            {/* MAIN CONTENT */}
            <div className="px-8 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT MENU */}
                <div className="space-y-6 text-[18px] tracking-wide col-span-1 md:pl-12">
                  {menu.map((item) => (
                    <div key={item.name} className="relative">

                      {/* Parent */}
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

                      {/* Mobile Submenu */}
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

                      {/* Desktop Submenu */}
                      <AnimatePresence>
                        {(hoverItem === item.name ||
                          activeItem === item.name) &&
                          item.submenu && (
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="hidden md:block absolute left-full top-0 ml-10 pl-8 border-l border-gray-300 space-y-3 text-[#1a2752] w-64"
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

                {/* Middle Spacer */}
                <div className="col-span-1 hidden md:block" />

                {/* RIGHT CONTACT SECTION */}
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
                    <IconCircle><Youtube /></IconCircle>
                    <IconCircle><Instagram /></IconCircle>
                    <IconCircle><Facebook /></IconCircle>
                  </div>

                  <Image
                    src="/Blue_Happy Schooling.png"
                    width={220}
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

function IconCircle({ children }) {
  return (
    <div className="h-10 w-10 border border-gray-500 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer">
      {children}
    </div>
  );
}
