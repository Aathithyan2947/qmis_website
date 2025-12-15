import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const journeyData = [
  {
    year: "2010",
    title: "The Beginning of a Vision",
    description:
      "Establishment of Queen Mira International School. A dream takes root — nurturing minds, shaping futures.",
    image: "/journey-of-qmis/1.png",
    position: "bottom",
  },
  {
    year: "2015",
    title: "Global Membership",
    description:
      "CIS Membership. QMIS steps into the global education community with a commitment to quality and inclusion.",
    image: "/journey-of-qmis/2.png",
    position: "top",
  },
  {
    year: "2017",
    title: "Academic Excellence Recognized",
    description:
      "Consistent academic performance with 84% average and 100% pass percentage.",
    image: "/journey-of-qmis/3.png",
    position: "bottom",
  },
  {
    year: "2021",
    title: "International Accreditation",
    description:
      "CIS Accreditation endorsed for world-class standards in learning, leadership, and well-being.",
    image: "/journey-of-qmis/4.png",
    position: "top",
  },
  {
    year: "2022",
    title: "A Step Towards Fitness",
    description:
      "BFIT program introduced — first school to mandate daily fitness as holistic education.",
    image: "/journey-of-qmis/5.png",
    position: "bottom",
  },
  {
    year: "2023",
    title: "Marksmanship & Leadership",
    description:
      "State ranks achieved in Grade X & XII. Discipline and precision nurtured alongside academics.",
    image: "/journey-of-qmis/6.png",
    position: "top",
  },
  {
    year: "2024",
    title: "Strengthening Skills & Sports",
    description:
      "Tie-up with Celebrate Sports Foundation and Pullela Gopichand Academy.",
    image: "/journey-of-qmis/7.png",
    position: "bottom",
  },
  {
    year: "2025",
    title: "Global Collaboration & Recognition",
    description:
      "Collaboration with University of Melbourne. National & international recognition.",
    image: "/journey-of-qmis/8.png",
    position: "top",
  },
];

export default function JourneyOfQMIS() {
  return (
    <>
      <PageHeader contentTitle="Journey of QMIS" />

      <section className="py-20 px-4 md:px-10 bg-white">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue-100">
            The Queen Mira Journey
          </h2>
          <p className="text-gray-600 mt-4">
            From Vision to Vanguard (2010–2026)
          </p>
          <p className="mt-6 text-gray-500">
            A chronicle of milestones that shaped excellence, innovation, and global learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-darkBlue-100 -translate-x-1/2" />

          <div className="space-y-20">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${item.position === "top"
                    ? "md:flex-row-reverse"
                    : ""
                  }`}
              >
                {/* Content */}
                <div className="md:w-1/2 px-6">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center md:text-left">
                    <h3 className="text-lg font-semibold text-darkBlue-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.year}
                    </p>
                    <p className="text-gray-600 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-5 h-5 bg-darkBlue-100 rounded-full border-4 border-white" />
                </div>

                {/* Image */}
                <div className="md:w-1/2 px-6 mt-8 md:mt-0 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={160}
                    className="rounded-lg shadow-md object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
