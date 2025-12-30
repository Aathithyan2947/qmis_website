import Image from "next/image";

export default function BlogRightPanel() {
  return (
    <aside className="bg-[#1b2559] text-white overflow-hidden max-w-sm h-[105vh] flex flex-col">

      <div className="h-[220px] w-full">
        <Image
          src="/blog/school.png"
          alt="Queen Mira International School"
          height={300}
          width={385}
        />
      </div>

      <div className="flex-1 px-6 py-12 space-y-4 text-md leading-loose text-white/90">
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
      </div>

      <div className="flex justify-center px-6 pb-6 cursor-pointer">
        <button className="text-maroon-100 bg-white py-2 px-2 rounded-md text-sm font-medium hover:scale-105 duration-200 transition">
          LEARN MORE
        </button>
      </div>
    </aside>
  );
}
