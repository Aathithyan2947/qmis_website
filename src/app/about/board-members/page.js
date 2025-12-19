import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const boardMembers = [
  {
    img: "/1_bm.jpg",
    name: "HONOURABLE JUSTICE D. MURUGESAN",
    desc: [
      "Former Chief Justice of Delhi High Court",
      "Former Member of National Human Rights Commission of India",
    ],
  },
  {
    img: "/2_bm.jpg",
    name: "THIRU. D.R. KAARTHIKEYAN",
    desc: [
      "Former Indian Police Officer (IPS) Former",
      "Director of the Central Bureau of",
      "Investigation (CBI) Former Director General",
      "of National Human Rights Commission",
    ],
  },
  {
    img: "/3_bm.jpg",
    name: "DR. R. VENKATRAMAN",
    desc: [
      "Deputy Director, Vehicle Assembly & Launch",
      "Facilities, Satish Dhawan Space Center",
      "(SHAR), Indian Space Research Organisation",
      "(ISRO), Sriharikota",
    ],
  },
  {
    img: "/4_bm.jpg",
    name: "MS. JENNI THOMPSON",
    desc: [
      "Early Childhood Expert, Australia ",
      "Former School Support and Evaluation Officer,",
      "Council of International Schools, Leiden,",
      "Netherlands",
    ],
  },
  {
    img: "/5_bm.jpg",
    name: "THIRU. A. MYILVAGANAN",
    desc: [
      "Superintendent of Police Directorate of",
      "Vigilance and Anticorruption Western Range,",
      "Tamilnadu ACE Athlete of Tamilnadu Police",
      "Department Brand Ambassador of BFIT",
    ],
  },
  {
    img: "/6_bm.jpg",
    name: "DR. AUGUSTUS SAMUEL DODD",
    desc: [
      "Chief Executive Officer, Grace Kennet",
      "Foundation(GKF) Ex. Medical Officer in the",
      "Indian Army",
    ],
  },
  {
    img: "/7_bm.jpg", name: "Dr. Madhan Karky",
    desc: [
      "Indian Lyricist Founder of Karky Research",
      "Foundation (KaReFo) & Mellinam Education",
    ],
  },
  {
    img: "/8_bm.jpg", name: "Dr. R. Thiruchenthuran",
    desc: [
      "President, Dr. APJ Abdul Kalam's Vision 2020",
      "Recipient of Life Time Achievement Award",
      "from British Parliament",
    ],
  },
  {
    img: "/10_bm.jpg", name: "Dr. Sarvesh Naidu",
    desc: [
      "Former Executive Director Pathways World",
      "School (Gurgaon, Delhi & Noida) Executive",
      "Vice President TRINS Institutions, Kerala",
    ],
  },
  {
    img: "/9_bm.jpg", name: "Mr. Jayaprakash Gandhi",
    desc: [
      "Leading Career Consultant and analyst",
    ],
  },
  {
    img: "/11_bm.jpg", name: "Thiru. Ganeskumar Ramanathan",
    desc: [
      "Lead, Strategy & Operations, Cisco Systems India Pvt. Ltd",
    ],
  },
  {
    img: "/13_bm.jpg", name: "Dr. Pathmarani K. Naidu",
    desc: [
      "Former Head of Well-being, Pathways World",
      "School, Gurgaon Ambassador, International",
      "Global Citizen's Award Program Founder,",
      "Compassionate World Citizen Program",
    ],
  },
];

export default function BoardMembers() {
  return (
    <div>
      <PageHeader contentTitle="Board Members" />

      {/* TOP SECTION - KEPT SAME */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-10 py-8 md:py-12 max-w-7xl mx-auto">
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/grp_bm.JPG"
            alt="Group Image"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-4">
          <p className="text-gray-500 leading-loose text-base md:text-lg">
            Our Board of Governors comprising eminent personalities from diverse
            fields of expertise collectively creates a multifarious and
            all-encompassing mix of competence and perspective that enhances the
            efficiency and ethos of our school. This celebrated band — from a
            legal luminary to a nutritional expert and from a celebrated police
            officer to a personality developer — brings their vast operational
            experiences, leadership qualities, and strategic skills into our
            institution to groom future citizens into smart global citizens. They
            are the livewire behind the professional success of QMIS and add grace
            and glory to our institution.
          </p>
        </div>
      </div>

      {/* CARDS SECTION - OPTIMIZED */}
      <div className="bg-darkBlue-100 px-4 md:px-6 lg:px-10 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                {/* Name Tag (Always Visible) */}
                <div className="absolute text-sm bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent px-4 py-3">
                  <h3 className="text-white font-semibold line-clamp-2">
                    {member.name}
                  </h3>
                </div>

                {/* Hover Overlay with Details (Desktop Only) */}
                <div className="text-sm absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex flex-col justify-end p-2">
                  <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold">{member.name}</h3>
                    <div className="">
                      {member.desc.map((line, i) => (
                        line && (
                          <p
                            key={i}
                            className="text-gray-200 "
                          >
                            {line}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
