import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function FacultyResourceTeam() {
  return (
    <div className="w-full bg-grid-dots">
      <PageHeader contentTitle={"Faculty Resource Team"} />

      <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* ===== Section 1 ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Uniting for the Future: A Symphony of Education
            </h2>
            <p className="text-gray-500 leading-loose">
              Our school is fundamentally committed to forging a new generation of
              thoughtful leaders, and this ambitious goal is achieved through the
              unified and unwavering efforts of every single member of our
              community—teachers, staff, administrators, and dedicated support team.
              Every action, from a lesson plan to a maintenance task, is driven by
              the singular purpose of developing our students’ potential for
              leadership.
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/faculty-resource-team/1.png"
              alt="Team meeting"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ===== Section 2 ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden ">
            <Image
              src="/faculty-resource-team/2.png"
              alt="Teacher holding books"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-gray-500 leading-loose">
              A hallmark of our culture is the atmosphere of trust and respect
              where students feel genuinely comfortable around their teachers.
              Viewing them as mentors rather than strict authorities, ensuring
              they are not scared to raise questions and that all inquiries are
              met with encouragement. The entire school functions as a cohesive
              team to provide an environment of safety, security, and comfort,
              ensuring that students’ fundamental needs are met.
            </p>
          </div>
        </div>

        {/* ===== Icon Features ===== */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "/faculty-resource-team/icon/1.png",
              title: "Mentorship Culture",
              desc: "Teachers act as mentors rather than strict authorities."
            },
            {
              icon: "/faculty-resource-team/icon/2.png",
              title: "Encouraged Inquiry",
              desc: "Students are comfortable raising questions freely."
            },
            {
              icon: "/faculty-resource-team/icon/3.png",
              title: "Holistic Support",
              desc: "Students are supported emotionally, socially and mentally."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ===== Sports Image ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden ">
            <Image
              src="/faculty-resource-team/3.png"
              alt="Sports activity"
              width={600}
              height={500}
              className="object-contain"
            />
          </div>
          <p className="leading-loose text-gray-500">At QMIS, we are a unified force—our entire faculty operates as a cohesive Cricket Team, where teachers and support staff work together to achieve one goal: student triumph. We embody the truth that "one book, one pen, one teacher, and one student can change the world," fostering a dynamic where we view our teachers as trusted friends so students feel safe to question everything. Inspired by Einstein, we nurture intellectual curiosity, ensuring our students gain the critical skills necessary to challenge society. Our school is the essential Pool, a place of mastery and preparation, ensuring that when our graduates dive into the unpredictable Ocean of the world, they are not just ready to survive, but fully equipped to dominate its vast horizon.</p>
        </div>
        {/* ===== Quote Section ===== */}
        <div className="w-full flex justify-center py-20 px-2">
          {/* Image wrapper */}
          <div className="relative w-[500px] max-w-full">
            {/* Background image */}
            <Image
              src="/facility/KidzGym/Pic_1.png"
              alt="Quote Box"
              width={900}
              height={450}
              className="w-full h-auto"
              priority
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <p className="text-white text-md md:text-lg leading-loose max-w-2xl">
                “The faculty at QMIS are as exceptional as the institution itself, continually elevating the already exemplary standards of teaching and learning at Queen Mira.”
              </p>
            </div>
          </div>
        </div>

        {/* ===== Profiles ===== */}
        <div className="space-y-20">

          {/* ===== Profile 1 ===== */}
          <div className="mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-0 items-center">
              {/* Image (always first on mobile) */}
              <div className="order-1">
                <Image
                  src="/faculty-resource-team/4.png"
                  alt="Joy Sheeba"
                  width={350}
                  height={350}
                  className="rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="order-2">
                <h3 className="text-2xl font-semibold text-darkBlue-100">
                  Joy Sheeba{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    (Department of English)
                  </span>
                </h3>
                <p className="mt-4 text-gray-500 leading-loose text-md max-w-lg">
                  “My six-year journey at QMIS has been one of continuous learning and
                  growth. The school offers enriching opportunities for both students and
                  teachers, shaping me personally and professionally. I feel privileged to
                  work in an environment that inspires dedication and excellence, and I am
                  grateful for the experiences that have strengthened me as an educator.”
                </p>
              </div>
            </div>
          </div>
          {/* ===== Profile 2 (Reverse on Desktop) ===== */}
          <div className="mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-1 md:order-2">
                <Image
                  src="/faculty-resource-team/5.png"
                  alt="Anitha Thiliban"
                  width={350}
                  height={350}
                  className="rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-darkBlue-100">
                  Anitha Thiliban{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    (Department of Social Studies)
                  </span>
                </h3>
                <p className="mt-4 text-md text-gray-500 leading-loose max-w-lg">
                  “My seven years at QMIS reflect an environment that supports both
                  teacher growth and student development. As a Social Teacher, I value
                  the trust built with my students and the opportunity to shape empathetic,
                  thoughtful future citizens. Watching children find their voice and
                  confidence is my greatest reward, and every meaningful connection
                  inspires me to guide their future with purpose.”
                </p>
              </div>
            </div>
          </div>
          {/* ===== Profile 3 ===== */}
          <div className="mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-1">
                <Image
                  src="/faculty-resource-team/6.png"
                  alt="Akilandeshwari Thilagam"
                  width={350}
                  height={350}
                  className="rounded-lg "
                />
              </div>

              {/* Text */}
              <div className="order-2">
                <h3 className="text-2xl font-semibold text-darkBlue-100">
                  Akilandeshwari Thilagam{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    (Department of English)
                  </span>
                </h3>
                <p className="mt-4 text-md text-gray-500 leading-loose max-w-lg">
                  “My journey at Queen Mira has been deeply transformative. From
                  starting as a Middle School English teacher to taking on senior roles,
                  I have grown through creative teaching, mentoring, and leadership
                  opportunities. The support of the Senior Leadership Team has shaped my
                  confidence and professional identity. QMIS is more than a workplace — it
                  is a community that inspires growth and purpose.”
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
