"use client";

import { useEffect } from "react";

export default function EnquiryDialog({ open, onClose, enquiryFor }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#FAEECF] p-8 rounded-md shadow-lg">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-center mb-6 text-[#1b234f]">
          Enquire Now
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          />

          <select
            defaultValue={enquiryFor || ""}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          >
            <option value="" disabled>
              Enquiry For
            </option>
            <option value="badminton">Badminton</option>
            <option value="kidz-gym">Kidz Gym</option>
            <option value="school-activities">School Activities</option>
          </select>

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-[#1b234f] text-white py-2 rounded-md font-semibold hover:opacity-90"
          >
            ENQUIRE NOW
          </button>
        </form>
      </div>
    </div>
  );
}
