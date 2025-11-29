"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function MainHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="py-4 md:py-6 px-4 bg-grid-dots relative">
      {/* Slide Menu */}
      <Sidebar isOpen={openMenu} onClose={() => setOpenMenu(false)} />

      {/* First Row */}
      <div className="flex flex-row justify-between md:justify-around items-center mb-4 md:mb-0">
        {/* Logos */}
        <div className="flex flex-row gap-3 md:gap-8 items-center">
          <Image
            src='/Mebourne.png'
            height={80}
            width={80}
            alt="Melbourne Logo"
            className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
          />
          <Image
            src='/QMIS_Logo.png'
            height={80}
            width={170}
            alt="QMIS Logo"
            className="h-12 w-auto md:h-16 md:w-auto lg:h-20 lg:w-auto"
          />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 lg:gap-8 items-center">
          <Button>Apply Now</Button>
          <Button>Download School Brochure</Button>
          <Menu className="cursor-pointer" onClick={() => setOpenMenu(true)} />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu className="cursor-pointer" onClick={() => setOpenMenu(true)} />
        </div>
      </div>

      {/* Second Row - Mobile Buttons */}
      <div className="flex md:hidden flex-row justify-around gap-3 mt-4">
        <Button>Apply Now</Button>
        <Button>Download School Brochure</Button>
      </div>
    </div>
  );
}
