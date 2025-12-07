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

export default function profile() {
    const sections = [
  {
    title: "Critical Thinkers",
    icon: LightBulbIcon,
    items: [
      "Demonstrate strong analytical and evaluative skills nurtured through activities like MLM sessions, Model United Nations, Financial literacy.",
      "Approach challenges with creativity, inquiry, and problem-solving abilities by developing skills to solve the unfamiliar questions seen by experts for each Grade from 1 to 12.",
    ],
  },
  {
    title: "Innovative Learners",
    icon: BookOpenIcon,
    items: [
      "Explore beyond traditional learning boundaries through Student driven classes.",
      "Explore beyond traditional learning boundaries through Student driven classes.",
    ],
  },
  {
    title: "Effective Communicators",
    icon: ChatBubbleLeftRightIcon,
    items: [
      "Exhibit strong interpersonal and intrapersonal communication skills through circle time, bridge hour.",
      "Collaborate effectively in teams and express ideas confidently and clearly – through various class room and ground activities.",
    ],
  },
  {
    title: "Technologically Adept",
    icon: ComputerDesktopIcon,
    items: [
      "Acquire advanced skills through IT, robotics, coding, and digital citizenship initiatives.",
      "Use digital tools responsibly, creatively, and efficiently.",
    ],
  },
  {
    title: "Socially Responsible Citizens",
    icon: UsersIcon,
    items: [
      "Participate actively in community welfare and social outreach initiatives – like Karla, IGC4 award programs.",
      "Demonstrate empathy, compassion, and global awareness through SDG-driven learning and Global Citizenship programs.",
    ],
  },
  {
    title: "Creatively Expressive Individuals",
    icon: MusicalNoteIcon,
    items: [
      "Explore and refine talents in music, art, dance, drama, and design.",
      "Cultivate imagination and personal expression through diverse creative avenues of creative stage exposure.",
    ],
  },
  {
    title: "Self-Aware and Reflective Learners",
    icon: UserCircleIcon,
    items: [
      "Demonstrate emotional intelligence through understanding and regulating emotions of self and others through the activities of Health and Safety committee.",
      "Reflect on strengths and growth areas while setting meaningful personal and academic goals.",
    ],
  },
  {
    title: "Ethically Grounded Individuals",
    icon: ShieldCheckIcon,
    items: [
      "Act with honesty, respect, and integrity.",
      "Contribute positively to society and the environment with responsible choices.",
    ],
  },
];

  return (
    <>
      <PageHeader contentTitle={'Holistic Profile'} />
    <div className="bg-gray-50 py-12 px-4 md:px-12 lg:px-24 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Holistic Learner Profile of QMIS Students
      </h1>

      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-12 leading-relaxed">
        At Queen Mira International School, we nurture well-rounded individuals
        equipped to thrive in a dynamic and interconnected world. Our holistic
        learner profile reflects the balanced development of students across
        essential dimensions, empowering them not only with knowledge but with
        character, creativity, and purpose.
      </p>

      <div className="grid gap-10 md:gap-10 ">
        {sections.map(({ title, icon: Icon, items }, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-6 md:gap-8 items-start"
          >
            <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full">
              <Icon className="w-10 h-10 text-blue-600" />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                {title}
              </h2>

              <ul className="space-y-2 list-disc pl-5 text-gray-700 leading-relaxed">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p className="max-w-4xl mx-auto text-gray-600 mt-12 leading-relaxed text-center">
        By fostering academic excellence alongside emotional, social, ethical,
        and creative development, QMIS empowers its students to emerge as
        confident, compassionate, and future-ready thoughtful leaders and
        changemakers.
      </p>

      <p className="max-w-4xl mx-auto text-gray-600 mt-6 leading-relaxed text-center">
        In addition to these shared traits, many of our students proudly carry a
        signature identity—as thinkers, innovators, performers or leaders—
        representing the pinnacle of discipline, passion, and dedication in our
        chosen fields.
      </p>
    </div>
    </>
  )}