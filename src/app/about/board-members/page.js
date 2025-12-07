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
      "Former Director of CBI",
      "Former Director General of NHRC",
    ],
  },
  {
    img: "/3_bm.jpg",
    name: "DR. R. VENKATRAMAN",
    desc: ["Educationist & Academic Leader"],
  },
  {
    img: "/4_bm.jpg",
    name: "MS. JENNI THOMPSON",
    desc: ["International Academic Advisor"],
  },
  {
    img: "/5_bm.jpg",
    name: "THIRU. A. MYILVAGANAN",
    desc: ["Police Officer (Retd.)"],
  },
  {
    img: "/6_bm.jpg",
    name: "DR. AUGUSTUS SAMUEL DODD",
    desc: ["Nutrition & Health Expert"],
  },
  { img: "/7_bm.jpg", name: "BOARD MEMBER 7", desc: [""] },
  { img: "/8_bm.jpg", name: "BOARD MEMBER 8", desc: [""] },
  { img: "/9_bm.jpg", name: "BOARD MEMBER 9", desc: [""] },
  { img: "/10_bm.jpg", name: "BOARD MEMBER 10", desc: [""] },
  { img: "/11_bm.jpg", name: "BOARD MEMBER 11", desc: [""] },
  { img: "/12_bm.jpg", name: "BOARD MEMBER 12", desc: [""] },
];

export default function BoardMembers() {
  return (
    <div>
      <PageHeader contentTitle="Board Members" />

      {/* TOP SECTION - KEPT SAME */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 px-10 py-5">
        <Image src="/grp_bm.jpg" height={600} width={600} alt="Group Image" />

        <p className="text-gray-700 leading-relaxed">
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

      {/* CARDS SECTION - UPDATED */}
      <div className="bg-darkBlue-100 grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-10">
        {boardMembers.map((member, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-md shadow-lg bg-white"
          >
            {/* Member Image */}
            <Image
              src={member.img}
              height={350}
              width={350}
              alt={member.name}
              className="w-full h-auto object-cover"
            />

            {/* NAME ALWAYS VISIBLE */}
            <div
              className="
                absolute bottom-0 left-0 w-full 
                bg-black/50 text-white px-4 py-2 
                text-sm font-semibold 
                transition-opacity duration-300 
                group-hover:opacity-0
              "
            >
              {member.name}
            </div>

            {/* HOVER OVERLAY (DESKTOP ONLY) */}
            <div
              className="
                absolute inset-0 bg-black/70 
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300 
                hidden md:flex flex-col justify-end p-4 text-white
              "
            >
              <h3 className="font-bold text-lg">{member.name}</h3>
              <div className="text-sm mt-1 text-gray-200">
                {member.desc.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
