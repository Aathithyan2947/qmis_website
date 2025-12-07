import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function FacultyResourceTeam() {
  return (
    <div className="w-full">
      <PageHeader contentTitle={"Faculty Resource Team"} />

      <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* ===== Section 1 ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Uniting for the Future: A Symphony of Education
            </h2>
            <p className="text-gray-600 leading-relaxed">
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
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/faculty-resource-team/2.png"
              alt="Teacher holding books"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <p className="text-gray-600 leading-relaxed">
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
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ===== Sports Image ===== */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/faculty-resource-team/3.png"
            alt="Sports activity"
            width={1200}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* ===== Quote Section ===== */}
        <div className="flex justify-center">
          <div className="bg-indigo-900 text-white rounded-xl px-8 py-6 max-w-3xl text-center relative">
            <p className="text-lg italic leading-relaxed">
              “The faculty at QMIS are exceptional as the institution itself,
              continually elevating the already exemplary standards of teaching
              and learning at Queen Mira.”
            </p>
          </div>
        </div>

        {/* ===== Profiles ===== */}
        <div className="space-y-20">

          {/* ===== Profile 1 ===== */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-0 items-start">
            {/* Image (always first on mobile) */}
            <div className="order-1">
              <Image
                src="/faculty-resource-team/4.png"
                alt="Joy Sheeba"
                width={350}
                height={350}
                className="rounded-lg w-full max-w-[320px]"
              />
            </div>

            {/* Text */}
            <div className="order-2">
              <h3 className="text-2xl font-semibold text-[#1C1C4A]">
                Joy Sheeba{" "}
                <span className="text-sm text-gray-500 font-normal">
                  (Department of English)
                </span>
              </h3>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-lg">
                “My six-year journey at QMIS has been one of continuous learning and
                growth. The school offers enriching opportunities for both students and
                teachers, shaping me personally and professionally. I feel privileged to
                work in an environment that inspires dedication and excellence, and I am
                grateful for the experiences that have strengthened me as an educator.”
              </p>
            </div>
          </div>

          {/* ===== Profile 2 (Reverse on Desktop) ===== */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="order-1 md:order-2">
              <Image
                src="/faculty-resource-team/5.png"
                alt="Anitha Thiliban"
                width={350}
                height={350}
                className="rounded-lg w-full max-w-[320px]"
              />
            </div>

            {/* Text */}
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-[#1C1C4A]">
                Anitha Thiliban{" "}
                <span className="text-sm text-gray-500 font-normal">
                  (Department of Social Studies)
                </span>
              </h3>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-lg">
                “My seven years at QMIS reflect an environment that supports both
                teacher growth and student development. As a Social Teacher, I value
                the trust built with my students and the opportunity to shape empathetic,
                thoughtful future citizens. Watching children find their voice and
                confidence is my greatest reward, and every meaningful connection
                inspires me to guide their future with purpose.”
              </p>
            </div>
          </div>

          {/* ===== Profile 3 ===== */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="order-1">
              <Image
                src="/faculty-resource-team/6.png"
                alt="Akilandeshwari Thilagam"
                width={350}
                height={350}
                className="rounded-lg w-full max-w-[320px]"
              />
            </div>

            {/* Text */}
            <div className="order-2">
              <h3 className="text-2xl font-semibold text-[#1C1C4A]">
                Akilandeshwari Thilagam{" "}
                <span className="text-sm text-gray-500 font-normal">
                  (Department of English)
                </span>
              </h3>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-lg">
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

      </section>
    </div>
  );
}
