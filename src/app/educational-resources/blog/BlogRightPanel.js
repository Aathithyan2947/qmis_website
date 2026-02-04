"use client";

import Image from "next/image";

export default function BlogRightPanel() {
  const handleLearnMoreClick = () => {
    // Find the target element (you can change the ID to match your content)
    const targetElement = document.querySelector('.apply-now');

    if (targetElement) {
      // Calculate the position with an offset of 30vh
      const offset = window.innerHeight * 0.3; // 30vh
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Smooth scroll to the target element with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback: scroll down by 30vh if element not found
      const scrollDistance = window.innerHeight * 0.3;
      window.scrollBy({
        top: scrollDistance,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="text-white flex flex-col">

      <div className="h-[220px] w-full">
        <Image
          src="/blog/school.png"
          alt="Queen Mira International School"
          height={300}
          width={385}
        />
      </div>

      <div className="bg-darkBlue-100 px-6 py-12 space-y-4 text-md leading-loose text-white/90">
        <p>
          With 12+ years of indisputable academic legacy, Queen Mira
          International School is celebrated as one of the best CBSE
          schools in Madurai. Offering exceptional education and
          globalising perspectives, the school shapes not just performers
          but thought leaders from grade 1. After school activities
          Digitalised learning tools, Linguistic classes & Fitness
          Programs are integrated with the school's curriculum to get the
          students global ready.
        </p>

        <p>
          From Academic Struggles to a Holistic Education, witness your
          child's transformational learning journey at Queen Mira.
        </p>
        <div className="flex justify-center px-6 pt-3 cursor-pointer">
          <button
            onClick={handleLearnMoreClick}
            className="text-maroon-100 bg-white py-2 px-2 rounded-md text-sm font-medium hover:scale-105 duration-200 transition"
          >
            LEARN MORE
          </button>
        </div>
      </div>

    </aside>
  );
}
