"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { IoChevronDown } from "react-icons/io5";

export default function FAQ() {
  const faqData = [
    {
      question: "What is the admission process at Queen Mira International School?",
      answer: (
        <>
          Here’s how to get started with our admissions process:<br />
          ✔️ Step 1: Create your account by clicking ‘Start Application’ on our portal – Apply here<br />
          ✔️ Step 2: Complete your family profile with parent and child information<br />
          ✔️ Step 3: Pay & Submit your application<br />
          ✔️ Step 4: View our comprehensive fee structure and available resources<br />
          ✔️ Step 5: Schedule your personalized campus visit/interview<br />
          After this is done, a representative from the admissions will reach out to you to assist you.
        </>
      ),
    },
    {
      question: "When do admissions open for Queen Mira International?",
      answer: (
        <>
          Applications for the 2025–26 academic year are already open. Parents are encouraged to apply early, especially for Play Home and Kindergarten, where seats are in high demand.<br />
          Check admission updates
        </>
      ),
    },
    {
      question: "What are the eligibility criteria for kindergarten admission?",
      answer: (
        <>
          Children must meet the following criteria:<br />
          Play Home: born on or before May 31, 2023<br />
          Pre-KG: born on or before May 31, 2022<br />
          KG-1: born on or before May 31, 2021<br />
          KG-2: born on or before May 31, 2020<br />
          Grade 1: born on or before May 31, 2019<br />
          Explore kindergarten eligibility
        </>
      ),
    },
    {
      question: "What documents are required for admission?",
      answer: (
        <>
          Parents need to provide the child’s birth certificate, address and ID proof, passport-size photos, and if applicable, past school reports or a transfer certificate. Additional requirements are shared after application submission.<br />
          View admission requirements
        </>
      ),
    },
    {
      question: "What is the fee structure for Queen Mira International?",
      answer: (
        <>
          Parents pay a ₹299 application fee to access detailed fee information, brochures, and guides. The structure includes tuition, infrastructure, lab, and activity fees. Optional charges apply for services such as transportation and uniforms.<br />
          See fee details
        </>
      ),
    },
    {
      question: "What is the withdrawal and refund policy?",
      answer: (
        <>
          Parents must submit a written application in advance for withdrawal. Refund of caution deposits (if applicable) is processed after clearing dues. Term fees already paid are non-refundable, ensuring fairness and clarity.<br />
          Read withdrawal guidelines
        </>
      ),
    },
    {
      question: "Which curriculum does Queen Mira International School follow?",
      answer: (
        <>
          Queen Mira International School is the first CBSE school worldwide accredited by CIS. Its Holistic 3B Curriculum (Broad, Balanced & Blended) combines CBSE rigor with international standards, offering experiential and future-ready education.<br />
          Explore curriculum
        </>
      ),
    },
    {
      question: "What is the student-teacher ratio?",
      answer: (
        <>
          Kindergarten classrooms maintain around a 1:10 ratio with assistant teachers for early years. Primary to senior grades average 1:30, ensuring a balance of personalized learning and peer interaction.<br />
          Discover classrooms
        </>
      ),
    },
    {
      question: "What languages are offered apart from English?",
      answer: (
        <>
          Up to Grade 6, children can take Tamil or Hindi alongside English. From Grade 6 onwards, French is added as an additional option, promoting multilingual and global exposure.<br />
          See language curriculum
        </>
      ),
    },
    {
      question: "Does the school provide transportation facilities?",
      answer: (
        <>
          QMIS offers a safe and reliable bus service with CCTV and GPS tracking, RFID ID logging, and trained staff. Transport charges vary by distance from campus.<br />
          Transport details
        </>
      ),
    },
    {
      question: "Is there a hostel or boarding option at Queen Mira?",
      answer: (
        <>
          While QMIS is a day school, it has partnered PG facilities close to the campus for students needing residential support. This ensures access to quality education with safe accommodation.<br />
          Learn more
        </>
      ),
    },
    {
      question: "What extracurricular activities are available at Queen Mira?",
      answer: (
        <>
          Programs include Kids’ Gym, BFit sessions, Premier League games, Olympiads, STEM clubs, robotics, TED Talks, Young Authors’ forums, music, and dance. These activities nurture creativity, fitness, and leadership.<br />
          Explore extracurriculars
        </>
      ),
    },
    {
      question: "How does the school encourage holistic development?",
      answer: (
        <>
          Academics are balanced with life skills, leadership programs, experiential learning, wellness, and creativity. Events like Genesis, Talent Nights, and sports integrate character building with education.<br />
          Holistic development
        </>
      ),
    },
    {
      question: "Are field trips and educational tours conducted regularly?",
      answer: (
        <>
          Local, national, and international trips are organized to extend classroom concepts to real-world exposure. These tours build cultural understanding, confidence, and hands-on knowledge.<br />
          Student experiences
        </>
      ),
    },
    {
      question: "How does Queen Mira involve parents in student progress?",
      answer: (
        <>
          Regular parent-teacher meetings, digital progress updates, newsletters, and workshops create collaboration. Parents are also invited to school events and guided tours for better involvement in their child’s journey.<br />
          Parent engagement
        </>
      ),
    },
    {
      question: "Does the school offer career counselling or guidance?",
      answer: (
        <>
          Aptitude assessments, mentoring, expert talks, and workshops prepare students for competitive exams, university admissions, and professional success.<br />
          Career counseling
        </>
      ),
    },
    {
      question: "How can I schedule a campus tour or virtual visit?",
      answer: (
        <>
          If you have already registered, you can log in using your registered mobile number to book a campus tour or virtual visit. If not, please complete the registration process first. Kindly note that all visits to Queen Mira International School are strictly by prior appointment.<br />
          Book a visit
        </>
      ),
    },
    {
      question: "What is the teaching approach in Kindergarten?",
      answer: (
        <>
          Kindergarten emphasizes discovery, creativity, and activity-driven learning with smart classrooms and Montessori-inspired practices. The focus is on curiosity, communication, and holistic early growth.<br />
          Kindergarten learning
        </>
      ),
    },
    {
      question: "What is the minimum age for Playhome admission at Queen Mira?",
      answer: (
        <>
          Playhome at QMIS is designed for toddlers who are ready to begin early social and learning experiences. Eligibility is based on age – children must be at least 2.5 years old, with DOB on or before May 31, 2023. This ensures they are developmentally prepared for structured play and exploration.<br />
          Learn more about age criteria on our Admissions Portal
        </>
      ),
    },
    {
      question: "What teaching methods are followed in Playhome?",
      answer: (
        <>
          In Playhome, learning happens through interactive “interest corners” — art, reading, fine motor, and cognitive play. Teachers guide children with XSEED’s proven 5-way methodology, encouraging exploration, creativity, and independence. This approach ensures toddlers enjoy learning while building strong early skills.<br />
          Explore our philosophy in the [QMIS Brochure].
        </>
      ),
    },
    {
      question: "What activities are included in the Playhome curriculum?",
      answer: (
        <>
          Playhome offers a variety of engaging activities — art and craft, music and rhythm, manipulative toys, free play, and reading corners. Each is designed to build motor skills, creativity, language, and social values in a joyful setting. These foundational experiences spark curiosity and love for learning.<br />
          Read more in the [QMIS Brochure].
        </>
      ),
    },
    {
      question: "What are the school timings for Playhome children?",
      answer: (
        <>
          Recognising the needs of young learners and parents, QMIS provides flexible Playhome timings. Families can choose between half-day and full-day programs, both structured to balance play, rest, and learning. This flexibility ensures toddlers thrive without feeling overwhelmed.<br />
          See available schedules on the Admissions Portal
        </>
      ),
    },
    {
      question: "How does the school ensure safety and care for toddlers?",
      answer: (
        <>
          Safety is central to Playhome. The Health & Safety Committee conducts regular audits, while CCTV covers classrooms and campus areas. Child Protection Policies, risk assessments, and trained staff create a secure, caring environment for toddlers to learn and play confidently.<br />
          Discover more in the [QMIS Brochure].
        </>
      ),
    },
    {
      question: "Does the Playhome program include meals or snacks?",
      answer: (
        <>
          While the admissions portal doesn’t detail meals or snacks, QMIS provides a hygienic and child-friendly setting that supports healthy routines. Parents can check directly with the school for customised meal or snack options during Playhome hours.<br />
          Get details from our Admissions Team
        </>
      ),
    },
    {
      question: "What is the admission age for LKG and UKG at Queen Mira?",
      answer: (
        <>
          Admission age is carefully set to match children’s readiness for early academics. For LKG, children must be at least 4 years old, and for UKG, 5 years old, based on the cutoff date of May 31. This ensures they are prepared socially and cognitively for structured learning.<br />
          Check full age criteria on the Admissions Portal
        </>
      ),
    },
    {
      question: "What subjects are introduced at the Kindergarten level?",
      answer: (
        <>
          In LKG and UKG, children begin with foundational literacy and numeracy alongside creative arts, music, and thematic projects. Lessons integrate Thirukural values and STEAM activities, ensuring children develop critical thinking and communication early.<br />
          Curriculum highlights are available in the [QMIS Brochure].
        </>
      ),
    },
    {
      question: "Are outdoor play and physical activities part of the Kindergarten program?",
      answer: (
        <>
          Kindergarten children enjoy outdoor play, yoga, swimming, and daily BFIT fitness sessions. These activities balance academics with physical and emotional well-being, nurturing healthy, confident learners.<br />
          Explore co-curriculars in the [QMIS Brochure].
        </>
      ),
    },
    {
      question: "How does the school prepare children for Primary transition?",
      answer: (
        <>
          Kindergarten develops strong foundations in communication, problem-solving, and collaboration through projects, field trips, and interactive lessons. These experiences ensure children move into the Primary Years Programme with confidence and readiness.<br />
          Learn more in the [QMIS Brochure].
        </>
      ),
    },
    {
      question: "What is the student–teacher ratio in Kindergarten?",
      answer: (
        <>
          While the admissions page doesn’t list ratios, QMIS highlights small-group learning and mentor-style teaching. Parent Relationship Managers support communication, ensuring every child gets individual care.<br />
          Contact the Admissions Team for more details.
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-grid-dots min-h-screen pb-24">
      <PageHeader contentTitle={"FAQ"} />

      <div className="px-6 md:px-24 max-w-5xl mx-auto py-12">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className="border-b border-gray-300 py-5 cursor-pointer"
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-darkBlue-900">
                {item.question}
              </h3>

              <IoChevronDown
                size={22}
                className={`text-darkBlue-900 transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
              />
            </div>

            {/* Answer Dropdown */}
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 mt-3" : "max-h-0"
                }`}
            >
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
