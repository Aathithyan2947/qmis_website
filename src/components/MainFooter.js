"use client";

import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function MainFooter() {
  return (
    <footer className="bg-darkBlue-100 text-white pt-10 pb-4 px-6 md:px-16">
      {/* TOP SECTION */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO + ADDRESS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/QMIS_White_Logo.png"
            alt="Queen Mira International School"
            width={180} // smaller
            height={100}
            className="mb-3"
          />

          <p className="font-semibold text-base md:text-lg">
            Queen Mira International School
          </p>

          <p className="mt-1 text-sm md:text-base leading-relaxed opacity-90">
            Sholavandhan Road, Melakkal Rd, Kochadai,<br />
            Madurai, Tamil Nadu 625019<br />
            contact@queenmira.com
          </p>

          <a
            href="/privacy-policy"
            className="underline mt-3 text-sm md:text-base hover:text-red-400 transition"
          >
            Privacy Policy
          </a>
        </div>

        {/* POLICIES */}
        <div className="text-center md:text-left">
          <h3 className="text-red-500 text-xl font-semibold mb-4">
            Policies
          </h3>

          <div className="flex flex-col gap-2 text-sm md:text-base">
            <a href="/privacy-policy" className="hover:text-red-400">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-red-400">Terms and Conditions</a>
            <a href="/shipping-delivery" className="hover:text-red-400">Shipping Delivery</a>
            <a href="/cancellation-refund" className="hover:text-red-400">Cancellation and Refund</a>
          </div>
        </div>

        {/* CONNECT + CONTACT */}
        <div className="text-center md:text-left">
          <h3 className="text-red-500 text-xl font-semibold mb-4">
            Connect
          </h3>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mb-5">
            <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition cursor-pointer">
              <Facebook className="w-6 h-6" />
            </div>
            <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition cursor-pointer">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition cursor-pointer">
              <Youtube className="w-6 h-6" />
            </div>
          </div>

          {/* CONTACT NUMBERS */}
          <h3 className="text-red-500 text-xl font-semibold mb-3">
            Contact
          </h3>
          <p className="text-sm md:text-base">+91 96557 77000</p>
          <p className="text-sm md:text-base">+91 97875 70746</p>

          {/* QUICK LINKS */}
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg mt-5 text-sm md:text-base transition">
            Quick Links
          </button>
        </div>
      </div>

      {/* LINE */}
      <div className="w-full border-t border-white/20 mt-10 pt-4"></div>

      {/* BOTTOM SECTION */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center text-center text-xs md:text-sm opacity-80">
        <p>© Queen Mira International School. All Right Reserved</p>
        <p className="mt-2 md:mt-0">
          Powered By{" "}
          <span className="text-blue-400">Sanjay & team</span>
        </p>
      </div>
    </footer>
  );
}
