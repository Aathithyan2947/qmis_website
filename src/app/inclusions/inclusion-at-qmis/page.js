import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function InclusionAtQmis() {
  return (
    <>
      <PageHeader contentTitle={"Inclusion @ QMIS"} />

      {/* Background */}
      <div className="bg-grid-dots">
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">

          {/* === Top Section === */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <div className="order-2 md:order-1 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Across the world today, nearly 240 million children live with some form
                of disability. UNESCO and UNICEF remind us that many of these children
                either never enter a classroom or quietly slip away before completing
                school. In fact, children with disabilities are 2.5 times more likely
                to miss out on education, and even when they do get enrolled, almost
                half of them do not receive the support they truly need.
              </p>

              <p>
                These numbers are not just statistics—they are stories of children
                who deserve to be seen, heard, and supported.
              </p>

              <p>
                Yet, in many schools, children with special needs have limited space to
                learn and thrive. Some are not admitted at all, and in others, one
                special educator is expected to support the needs of an entire school.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-xl order-1 mdorder-2 overflow-hidden shadow-lg">
              <Image
                src="/inclusions/inclusions-at-qmis/1.png"
                alt="Counseling Session"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* === What Makes QMIS Different === */}
          <div className="space-y-12">
            <h2 className="text-3xl font-semibold text-indigo-900">
              What Makes QMIS Different
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/inclusions/inclusions-at-qmis/2.png"
                  alt="Learning Support"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text */}
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At Queen Mira International School, we believe that every child is
                  unique, and every child deserves to feel safe, understood, and supported.
                </p>

                <p>
                  To make this belief real, we have built a strong Learning Support Team
                  with five dedicated members—Counselors and Special Educators—backed by
                  thoughtful infrastructure and well-equipped resource rooms.
                </p>

                <p>
                  When a child joins us with a clinical report, our team carefully designs
                  an Individualized Educational Program (IEP) that respects the child’s
                  strengths, pace, and personality. We support growth in:
                </p>
              </div>
            </div>
          </div>

          {/* === Feature Pills === */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Motor and sensory development",
              "Thinking and learning skills",
              "Language and communication",
              "Emotional and behavioural wellbeing"
            ].map((text, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl py-4 px-6 text-center text-sm font-medium text-gray-600 shadow-sm"
              >
                {text}
              </div>
            ))}
          </div>

          {/* === Supporting Text === */}
          <p className="text-center text-gray-600 leading-relaxed max-w-3xl mx-auto">
            But the journey doesn’t happen alone—parents, teachers, and the support
            team move together, celebrating every milestone, every improvement, every
            moment of confidence gained.
          </p>

          {/* === The Heart of Our Inclusion Story === */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Title + text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-indigo-900">
                The Heart of Our Inclusion Story
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-md">
                Today, about 10% of our students receive specialised support,
                and each of them is progressing with greater assurance, joy,
                and independence.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/inclusions/inclusions-at-qmis/3.png"
                alt="Inclusion"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* === Tree Structure (NOT an Image) === */}
          <div className="flex flex-col items-center pt-16">
            {/* Root Text */}
            <p className="text-sm font-medium text-gray-700 text-center">
              At Queen Mira, inclusion is not an initiative
            </p>

            {/* Trunk */}
            <div className="w-px h-12 bg-gray-300 my-4"></div>

            {/* Branch Wrapper */}
            <div className="relative w-full max-w-4xl">

              {/* Horizontal Branch Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gray-300"></div>

              {/* Branch Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-center">

                {/* Branch 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-10 bg-gray-300"></div>
                  <div className="px-6 py-3 bg-white rounded-full shadow text-sm text-gray-700">
                    It is a culture
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-10 bg-gray-300"></div>
                  <div className="px-6 py-3 bg-white rounded-full shadow text-sm text-gray-700">
                    A promise
                  </div>
                </div>

                {/* Branch 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-10 bg-gray-300"></div>
                  <div className="px-6 py-3 bg-white rounded-full shadow text-sm text-gray-700 max-w-xs text-center">
                    A belief that every child has a place, a voice, and a future worth nurturing.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
