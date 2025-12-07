import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function WhyHowWhat() {
  return (
    <>
      <PageHeader contentTitle="What, How & Why" />

      <div className="relative w-full py-16 bg-grid-dots">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex justify-center mb-20">
            <Image
              src="/Golden_Circle.png"
              height={700}
              width={700}
              alt="Golden Circle"
              className="w-full max-w-[650px]"
            />
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-semibold text-darkBlue-100 mb-6">
              Why QMIS
            </h2>

            <p className="leading-[1.9] text-gray-700 max-w-[900px]">
              The world is often shaped by the top 10% of thought leaders who
              pioneer transformation, innovation, and progress across industries
              and communities. Recognizing the disparity between the potential for
              leadership and the actual number of impactful leaders, MD Abinath
              Chandran envisions bridging this gap. Driven by a passion to inspire
              and cultivate transformative leaders, he aspires to expand this elite
              group, fostering a society rich with visionary individuals capable of
              driving change. Through this mission, he aims to empower future
              generations, create sustainable progress, and redefine societal norms,
              ensuring a more inclusive, innovative, and dynamic world.
            </p>
          </section>

          <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-darkBlue-100 mb-6">
                How QMIS
              </h2>

              <h3 className="text-xl font-semibold text-red-600 mb-4">
                Vision Driven Educational Excellence
              </h3>

              <p className="leading-[1.9] text-gray-700 max-w-[900px]">
                QMIS stands apart as a school that moves beyond rote learning,
                emphasizing conceptual understanding and critical thinking. By
                encouraging learners to delve deeply into concepts and think
                innovatively, QMIS fosters an educational approach designed to shape
                future leaders and changemakers who will inspire and drive progress.
                Driven by a strong belief that problem-solving and decision-making
                are core leadership skills, QMIS seamlessly aligns its vision with
                purposeful action.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src="/question.png"
                height={450}
                width={450}
                alt="question"
                className="w-[300px] md:w-[380px] lg:w-[420px]"
              />
            </div>
          </section>

          <section className="pb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-darkBlue-100 mb-6">
              What QMIS
            </h2>

            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Holistic Approach to teaching and learning
            </h3>

            <p className="leading-[1.9] text-gray-700 max-w-[900px]">
              At QMIS, every student’s journey is about creating a harmonious
              blend of Body, Mind, and Soul—ensuring they are not only prepared for
              academic success but for a future where they can truly make a
              difference.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
