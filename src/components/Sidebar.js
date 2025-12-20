"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, X, Youtube } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Particles from "@/components/Particles";

const APPLY_NOW_URL =
  "https://admissions.qmis.edu.in/?utm_source=Website&utm_medium=popup_form&utm_campaign=BBC&_gl=1%2A11hbug0%2A_ga%2AMTIyNDc1NDU3Ni4xNzY1MDQ3MzAx%2A_ga_K5HD0P2MHT%2AczE3NjU2NDQ5NTkkbzkkZzEkdDE3NjU2NDYwNTEkajYwJGwwJGgw";

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();
  const [hoverItem, setHoverItem] = useState("");
  const [activeItem, setActiveItem] = useState("");
  const menuRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const handleMouseEnter = (itemName, hasSubmenu) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (hasSubmenu) {
      // Close active item if it's different from hovered item
      if (activeItem && activeItem !== itemName) {
        setActiveItem("");
      }
      setHoverItem(itemName);
    } else {
      setHoverItem("");
      // If hovering a non-submenu item, close any active submenu
      if (activeItem) {
        setActiveItem("");
      }
    }
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow moving to submenu
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverItem("");
    }, 150);
  };

  const handleSubmenuEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleSubmenuLeave = () => {
    setHoverItem("");
  };

  const handleParentClick = (itemName, hasSubmenu, route, externalUrl) => {
    if (hasSubmenu) {
      // Toggle the active item
      if (activeItem === itemName) {
        setActiveItem("");
      } else {
        setActiveItem(itemName);
      }
      // Close hover state when clicking
      setHoverItem("");
    } else {
      // Check if it has an external URL
      if (externalUrl) {
        // Open external URL in new tab
        window.open(externalUrl, "_blank", "noopener,noreferrer");
      } else {
        // Navigate to internal route
        router.push(route);
      }
      onClose();
    }
  };

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
        { label: "About QMIS", route: "/about/about-qmis" },
        { label: "Disclosure", route: "/about/disclosure" },
      ],
    },
    {
      name: "Message From MD",
      route: "/message-from-md",
      submenu: [
        { label: "MD Speaks", route: "/message-from-md/md-letter" },
        { label: "QMIS Strategy", route: "/message-from-md/qmis-strategy" },
        { label: "Promises", route: "/message-from-md/promises" },
      ],
    },
    { name: "Journey Of QMIS", route: "/journey-of-qmis" },
    {
      name: "Facilities",
      route: "/facilities",
      submenu: [
        { label: "Infrastructure", route: "/facilities/infrastructure" },
        { label: "Badminton", route: "/facilities/badminton" },
        { label: "Veeravanam", route: "/facilities/veeravanam" },
        { label: "Rifle Club", route: "/facilities/rifle-club" },
        { label: "Kidz Gym", route: "/facilities/kidz-gym" },
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
        { label: "Academic Programmes", route: "/academia/academic-programmes" },
        { label: "Board Achievements", route: "/academia/board-achievements" },
        { label: "Academic Enrichment Program", route: "/academia/academic-enrichment-program" },
        { label: "Value Based Education", route: "/academia/value-based-education" },
        { label: "Faculty Resource Team", route: "/academia/faculty-resource-team" },
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
        { label: "Holistic Journey", route: "/holistic-education/holistic-journey" },
        { label: "Body", route: "/holistic-education/body" },
        { label: "Mind", route: "/holistic-education/mind" },
        { label: "Soul", route: "/holistic-education/soul" },
        { label: "Holistic Profile", route: "/holistic-education/holistic-profile" },
      ],
    },
    { name: "Holistic Achievers", route: "/holistic-achievers" },
    { name: "CIS", route: "/cis" },
    { name: "MelBourne", route: "/melbourne" },
    {
      name: "Admissions",
      route: "#",
      externalUrl: APPLY_NOW_URL
    },
    { name: "After School Activities", route: "/after-school-activities" },
    { name: "Clubs & Activities", route: "/clubs-and-activities" },
    {
      name: "Careers",
      route: "/careers",
      submenu: [
        { label: "Career Guidance", route: "/careers/career-guidance" },
        { label: "Career @QMIS", route: "/careers/career-at-qmis" },
      ],
    },
    { name: "Alumni", route: "/alumini" },
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
                <div ref={menuRef} className="space-y-6 text-[18px] tracking-wide col-span-1 md:pl-12">
                  {menu.map((item) => {
                    const hasSubmenu = !!item.submenu;
                    const isActive = activeItem === item.name;
                    const isHovered = hoverItem === item.name;
                    const showSubmenu = isActive || isHovered;

                    return (
                      <div key={item.name} className="relative">

                        {/* Parent */}
                        <div
                          className="group cursor-pointer flex items-center justify-between pr-4"
                          onMouseEnter={() => handleMouseEnter(item.name, hasSubmenu)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => handleParentClick(item.name, hasSubmenu, item.route, item.externalUrl)}
                        >
                          <span
                            className={`font-semibold transition-colors ${showSubmenu
                              ? "text-red-600"
                              : "text-[#1a2752]"
                              }`}
                          >
                            {item.name}
                          </span>

                          {hasSubmenu && (
                            <span
                              className={`ml-2 transition-colors ${showSubmenu
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
                          {isActive && hasSubmenu && (
                            <motion.div
                              className="md:hidden pl-4 mt-2 space-y-2 text-[#1a2752]"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.submenu.map((sub) => (
                                <div
                                  key={sub.label}
                                  onClick={() => {
                                    router.push(sub.route);
                                    onClose();
                                  }}
                                  className="cursor-pointer hover:text-red-600 transition-colors"
                                >
                                  {sub.label}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Desktop Submenu */}
                        <AnimatePresence>
                          {showSubmenu && hasSubmenu && (
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.2 }}
                              onMouseEnter={handleSubmenuEnter}
                              onMouseLeave={handleSubmenuLeave}
                              className="hidden md:block absolute left-full top-0 ml-10 pl-8 border-l border-gray-300 space-y-3 text-[#1a2752] w-64"
                            >
                              {item.submenu.map((sub) => (
                                <div
                                  key={sub.label}
                                  onClick={() => {
                                    router.push(sub.route);
                                    onClose();
                                  }}
                                  className="cursor-pointer hover:text-red-600 whitespace-nowrap transition-colors"
                                >
                                  {sub.label}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>
                    );
                  })}
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
                    <a href="tel:+919655777000" className="text-blue-600 block hover:underline">
                      +91 96557 77000
                    </a>
                    <a href="tel:+919677715429" className="text-blue-600 block hover:underline">
                      +91 96777 15429
                    </a>
                    <a href="mailto:contact@queenmira.com" className="text-blue-600 block hover:underline">
                      contact@queenmira.com
                    </a>
                  </div>

                  <h3 className="text-red-600 font-bold mb-4">CONNECT</h3>

                  <div className="flex gap-6 mb-10">
                    <a
                      href="https://www.youtube.com/c/QueenMiraInternationalSchool"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconCircle>
                        <Youtube />
                      </IconCircle>
                    </a>

                    <a
                      href="https://www.instagram.com/qmiscis/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconCircle>
                        <Instagram />
                      </IconCircle>
                    </a>

                    <a
                      href="https://www.facebook.com/qmiscis?rdid=KRhgDIdBJb8gUanf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17TcQJn8oi%2F#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconCircle>
                        <Facebook />
                      </IconCircle>
                    </a>
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
