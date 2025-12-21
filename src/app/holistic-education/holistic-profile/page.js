import PageHeader from "@/components/PageHeader";
import {
  LightBulbIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  UsersIcon,
  MusicalNoteIcon,
  UserCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function profile() {
  const sections = [
    {
      title: "Critical Thinkers",
      image: "/holistic_profile/1.png",
      items: [
        "Demonstrate strong analytical and evaluative skills nurtured through activities like  MUN sessions, MD connects, Financial literacy.",
        "Approach challenges with creativity, inquiry, and problem-solving abilities by equipping us to solve the external question papers set by experts from Grade 1 to 12.",
      ],
    },
    {
      title: "Innovative Learners",
      image: "/holistic_profile/2.png",
      items: [
        "Explore beyond traditional learning boundaries through Student driven classes.",
        "Engage in STEAM activities, fostering curiosity, experimentation, and innovation",
      ],
    },
    {
      title: "Effective Communicators",
      image: "/holistic_profile/3.png",
      items: [
        "Exhibit strong interpersonal and intrapersonal communication skills through circle time, bridge hour.",
        "Collaborate effectively in teams and express ideas confidently and clearly - through various class room and ground activities",
      ],
    },
    {
      title: "Technologically Adept",
      image: "/holistic_profile/4.png",
      items: [
        "Acquire advanced skills through IT, robotics, coding, and digital citizenship initiatives.",
        "Use digital tools responsibly, creatively, and efficiently.",
      ],
    },
    {
      title: "Socially Responsible Citizens",
      image: "/holistic_profile/5.png",
      items: [
        "Participate actively in community welfare and social outreach initiatives - like Karko, IGCA award programs.",
        "Demonstrate empathy, compassion, and global awareness through SDG-driven learning and Global Citizenship programs.",
      ],
    },
    {
      title: "Creatively Expressive Individuals",
      image: "/holistic_profile/6.png",
      items: [
        "Explore and refine talents in music, art, dance, theatre, and design.",
        "Cultivate imagination and personal expression through diverse creative avenues of creative space club.",
      ],
    },
    {
      title: "Self-Aware and Reflective Learners",
      image: "/holistic_profile/7.png",
      items: [
        "Demonstrate emotional intelligence through understanding and regulating emotions of self and others through the activities of Health and Safety committee.",
        "Reflect on strengths and growth areas while setting meaningful personal and academic goals.",
      ],
    },
    {
      title: "Ethically Grounded Individuals",
      image: "/holistic_profile/8.png",
      items: [
        "Act with honesty, respect, and integrity.",
        "Contribute positively to society and the environment with responsible choices.",
      ],
    },
  ];

  return (
    <>
      <PageHeader contentTitle={'Holistic Profile'} />
      <div className="py-12 px-4 bg-grid-dots md:px-12 lg:px-24 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            Holistic Learner Profile of QMIS Students
          </h1>
        </div>
        <p className="max-w-4xl mx-auto text-gray-600 mb-12 leading-loose">
          At Queen Mira International School, we nurture well-rounded individuals
          equipped to thrive in a dynamic and interconnected world. Our holistic
          learner profile reflects the balanced development of students across
          essential dimensions, empowering them not only with knowledge but with
          character, creativity, and purpose.
        </p>

        <div className="relative max-w-4xl mx-auto space-y-28">
          {sections.map((section, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                  } items-center gap-12`}
              >
                {/* IMAGE */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-[260px] h-[360px] md:w-[280px] md:h-[380px] bg-white border border-gray-200 shadow-xl">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-semibold text-darkBlue-100 mb-6">
                    {section.title}
                  </h2>

                  <ul className="space-y-4 text-gray-500 leading-relaxed">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="max-w-4xl mx-auto text-gray-600 mt-12 leading-loose ">
          By fostering academic excellence alongside emotional, social, ethical,
          and creative development, QMIS empowers its students to emerge as
          confident, compassionate, and future-ready thoughtful leaders and
          changemakers.
        </p>

        <p className="max-w-4xl mx-auto text-gray-600 mt-6 leading-loose ">
          In addition to these shared traits, many of our students proudly carry a
          signature identity—as thinkers, innovators, performers or leaders—
          representing the pinnacle of discipline, passion, and dedication in our
          chosen fields.
        </p>
      </div>
    </>
  )
}
