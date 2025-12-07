import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function LeadershipTeam() {
  return (
    <>
      <PageHeader contentTitle="Leadership Team" />

      <div className="w-full py-12 bg-grid-dots">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-24">

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed text-[17px] max-w-4xl">
            A vision driven Senior Leadership Team that serves as the steward of the
            school's Philosophy, Vision, Mission and Core values.
          </p>

          {/* === 1. DR C CHANDRAN — Image First on Mobile, Image Left on Desktop === */}
          <section className="flex flex-col md:grid md:grid-cols-2 gap-10 items-start">
            <div className="order-1 md:order-1 w-full">
              <div className="w-full h-[400px] md:h-auto overflow-hidden">
                <Image
                  src="/leadership-team/Photo_1.png"
                  alt="Dr. C. Chandran"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-2 md:order-2">
              <h2 className="text-[26px] font-semibold text-darkBlue-100 mb-3">
                Dr. C. Chandran
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16.7px]">
                As an academician, I have always felt that education should be holistic and students should possess the ability to handle challenging situations in global ecosystem. I can confidently state that every student of QMIS will be a change maker. Noble values are inculcated in the young minds. Measures taken for the physical, mental and emotional wellness of students and staff have profound impact on their productivity. At QMIS, the Team is always ready to adapt to the change and has swiftly made the transformation from time to time. The prestigious accreditation from the Council of International Schools (CIS) is a result of the exemplary contribution of our staff, students and parents.
              </p>
            </div>
          </section>

          {/* === 2. ABINATH — Image First on Mobile, Content Left on Desktop === */}
          <section className="flex flex-col md:grid md:grid-cols-2 gap-10 items-start">
            <div className="order-1 md:order-2 w-full">
              <div className="w-full h-[400px] md:h-auto overflow-hidden">
                <Image
                  src="/leadership-team/Photo_2.png"
                  alt="Abinath Chandran"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-2 md:order-1">
              <h2 className="text-[26px] font-semibold text-darkBlue-100 mb-3">
                Abinath Chandran
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16.7px]">
                QMIS' philosophy, which ensures the wellbeing of every individual by nurturing their body, mind and soul, holds the key to build an educational eco-system of facilitating children to bloom into purposeful citizens. I strongly advocate our BFIT, a significant tool to bring all the three into an alignment. An hour a day in the ground allows the children to develop a robust body that leads to shaping a strong mind. The strong-minded individuals develop a positive attitude and radiate good vibes into the environment. I am thankful to the Almighty and my late mother for the blessings and I am grateful to my mentors - my father Dr.C.Chandran and Padmashree Kaviperarasu Vairamuthu Ayya for their trust in me. Privileged with a dedicated team, QMIS has become the only CBSE School to have made its mark in the global arena with an international accreditation from the Council of International Schools (CIS), Leidens, Netherlands.
              </p>
            </div>
          </section>

          {/* === 3. SUJATHA — Image First on Mobile, Image Left on Desktop === */}
          <section className="flex flex-col md:grid md:grid-cols-2 gap-10 items-start">
            <div className="order-1 md:order-1 w-full">
              <div className="w-full h-[400px] md:h-auto overflow-hidden">
                <Image
                  src="/leadership-team/Photo_3.png"
                  alt="Sujatha Guptan"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-2 md:order-2">
              <h2 className="text-[26px] font-semibold text-darkBlue-100 mb-3">
                Sujatha Guptan
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16.7px] mb-4">
                The process of the learning has no boundaries and the dignity of the men is determined by the greatness of their mind. Holding strong belief in these facts, QMIS imparts an education which focuses on building great minds and operates with the motto of more & beyond. We allow the children to grow in a progressive environment, where their interests and learning are taken more & beyond the walls of the classroom and syllabus. While academic excellence is our major thrust, the school is also devoted to prepare the students for life, groom them to face the challenges of tomorrow and encourage them to be socially relevant.
              </p>

              <p className="text-gray-700 leading-relaxed text-[16.7px]">
                The unique pedagogical approach which is broad, balanced and blended confers a holistic development and instills a happy learning in every learner. QMIS unfolds a beautiful learning experience which nurtures the thirst of these 21st generation learners. Creativity, Collaboration and Communication are integrated into their day to day lessons and children are equipped towards building a sustainable world.
              </p>
            </div>
          </section>

          {/* === 4. JOSEPHINE — Image First on Mobile, Content Left on Desktop === */}
          <section className="flex flex-col md:grid md:grid-cols-2 gap-10 items-start">
            <div className="order-1 md:order-2 w-full">
              <div className="w-full h-[400px] md:h-auto overflow-hidden">
                <Image
                  src="/leadership-team/Photo_4.png"
                  alt="Josephine Anne Sheebha Aruldass"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-2 md:order-1">
              <h2 className="text-[26px] font-semibold text-darkBlue-100 mb-3">
                Josephine Anne Sheebha Aruldass
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16.7px] mb-4">
                One thing that is most valued in QMIS is the strong "TEAM". Journey of prestigious Council of International School (CIS) Accreditation process has chiseled us through the years and has brought the present glory of being the first ever CBSE school to be Accredited by CIS. This achievement was possible because of the inspirational leadership and the conviction of the employees.
              </p>
              <p className="text-gray-700 leading-relaxed text-[16.7px]">
                It is very important to make the stakeholders particularly employees to internalize the philosophy of the school. Diverse and ample opportunities are created at QMIS, where experience is not just the number of years spent on the campus. But a rewarding learning cycle in their career growth. Taking the Ownership of tasks should be an ingrained habit and the same is sowed through involving the team in strategic planning and incentivizing employees. All our integrated efforts are channeled towards creating the leaders of tomorrow.
              </p>
            </div>
          </section>

          {/* === 5. ASHRAFA — Image First on Mobile, Image Left on Desktop === */}
          <section className="flex flex-col md:grid md:grid-cols-2 gap-10 items-start">
            <div className="order-1 md:order-1 w-full">
              <div className="w-full h-[400px] md:h-auto overflow-hidden">
                <Image
                  src="/leadership-team/Photo_5.png"
                  alt="Ashrafa Siddika Akbar Ali"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-2 md:order-2">
              <h2 className="text-[26px] font-semibold text-darkBlue-100 mb-3">
                Ashrafa Siddika Akbar Ali
              </h2>

              <p className="text-gray-700 leading-relaxed text-[16.7px] mb-4">
                Our holistic educational approach ensures strong academics, character development, and global exposure—shaping confident, future-ready learners.
              </p>
              <p className="text-gray-700 leading-relaxed text-[16.7px] mb-4">
                This progress is strengthened by a strategic Human Resources Framework that attracts, develops, and supports professionals who embody QMIS values. Their expertise and commitment create a positive, high-performing school environment. Our comprehensive year-round Internal Audit Process reinforces quality through systematic review, reflection, and continuous improvement, ensuring global benchmarking and transparency.
              </p>
              <p className="text-gray-700 leading-relaxed text-[16.7px]">
                Together, these pillars—holistic student development, empowered and committed human resources and a rigorous internal audit system—position QMIS as a world-class school preparing learners for a sustainable, meaningful, and globally responsible future.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
