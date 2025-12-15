'use client';

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function HolisticAchievers() {
  const imageNumbers = Array.from({ length: 79 }, (_, i) => i + 1);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imageNumbers.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === imageNumbers.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard support
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <PageHeader contentTitle="Holistic Achievers" />

      {/* Quote */}
      <div className="w-full flex justify-center py-12 bg-grid-dots">
        <div className="bg-white border-2 border-gray-300 rounded-full px-12 py-4 shadow-sm">
          <p className="text-red-600 font-bold text-xl text-center">
            “Where balanced growth creates extraordinary achievers.”
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="bg-darkBlue-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {imageNumbers.map((num, index) => (
            <button
              key={num}
              onClick={() => openModal(index)}
              className="focus:outline-none"
            >
              <Image
                src={`/holistic-achievers/${num.toString().padStart(2, "0")}.jpg`}
                alt={`Holistic Achievers Image ${num}`}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto hover:scale-105 transition-transform"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:scale-110"
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            onClick={showPrev}
            className="absolute left-6 text-white hover:scale-110"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
            <Image
              src={`/holistic-achievers/${imageNumbers[
                currentIndex
              ].toString().padStart(2, "0")}.jpg`}
              alt="Selected Achiever"
              width={1200}
              height={800}
              className="
      rounded-xl
      max-h-[80vh]
      w-auto
      object-contain
      mx-auto
      transition-transform
      duration-300
      scale-100
    "
            />
          </div>

          {/* Next */}
          <button
            onClick={showNext}
            className="absolute right-6 text-white hover:scale-110"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}
