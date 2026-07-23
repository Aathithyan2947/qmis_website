"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const APPLY_NOW_URL =
  "https://portal.qmis.edu.in/client/enquiry-form?source=Website&sub_source=applynow_button&campaign=BBC&_gl=1*1t4oqfi*_ga*MTIyNDc1NDU3Ni4xNzY1MDQ3MzAx*_ga_K5HD0P2MHT*czE3NjU2NDQ5NTkkbzkkZzEkdDE3NjU2NDQ5OTEkajI4JGwwJGgw";

export default function MainHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter()

  const handleApplyNow = () => {
    window.open(APPLY_NOW_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-4 md:py-6 px-4 bg-grid-dots relative">
      {/* Slide Menu */}
      <Sidebar isOpen={openMenu} onClose={() => setOpenMenu(false)} />

      {/* First Row */}
      <div className="flex flex-row justify-between md:justify-around items-center mb-4 md:mb-0">
        {/* Logos */}
        <div className="flex flex-row gap-3 md:gap-8 items-center">
          {/* <Link href="https://www.unimelb.edu.au/" */}
          {/*   target="_blank" */}
          {/*   rel="noopener noreferrer"> */}
          {/*   <Image */}
          {/*     src="/Mebourne.png" */}
          {/*     height={80} */}
          {/*     width={80} */}
          {/*     alt="Melbourne Logo" */}
          {/*     className="cursor-pointer hover:scale-105 duration-150 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" */}
          {/*   /> */}
          {/* </Link> */}
          <div onClick={() => router.push('/')
          }>
            <Image
              src="/QMIS_Logo.webp"
              height={121}
              width={256}
              alt="QMIS Logo"
              className="h-12 cursor-pointer hover:scale-105 duration-150 w-auto md:h-16 md:w-auto lg:h-20 lg:w-auto"
            />
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 lg:gap-8 items-center">
          <Button onClick={handleApplyNow}>Apply Now</Button>
          {/* <Button>Download School Brochure</Button> */}
          <Menu
            className="cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu
            className="cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </div>

      {/* Second Row - Mobile Buttons */}
      <div className="flex md:hidden flex-row justify-around gap-3 mt-4">
        <Button onClick={handleApplyNow}>Apply Now</Button>
        {/*<Button>Download School Brochure</Button> */}
      </div>
    </div>
  );
}
