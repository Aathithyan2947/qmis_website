import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function MdLetter() {
  return (
    <div>
      <PageHeader contentTitle={'QMIS Strategy'} />
      {/* 1st section */}
      <section className="max-w-8xl">
        <Image src='/qmis-strategy/1.png' height={1000} width={2000} alt="image not found" />
      </section>
      {/* ================= SECTION 2 ================= */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-center text-darkBlue-100 text-3xl md:text-4xl font-medium mb-6">
              QMIS Strategy: Blue Ocean Strategy
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              QMIS functions under the Blue Ocean Strategy — we do not compete in the
              overcrowded “red ocean” of conventional schooling; instead, we create
              new spaces, new ideas, and new possibilities, standing incomparable.
            </p>
          </div>

          {/* Strategy Card */}
          <div className="bg-gray-100 rounded-3xl px-6 py-12 md:px-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

              {/* LEFT – Red Ocean */}
              <div className="text-center md:text-right space-y-4 text-gray-600 font-medium">
                <p>Competition</p>
                <p>Saturated</p>
                <p>Limited</p>
                <p>Known</p>
                <p>Incremental</p>
              </div>

              {/* CENTER – Image */}
              <div className="flex justify-center">
                <Image
                  src="/qmis-strategy/2.png"
                  alt="Blue Ocean vs Red Ocean Strategy"
                  width={420}
                  height={300}
                  className="w-full max-w-[320px] md:max-w-[420px] h-auto object-contain"
                />
              </div>

              {/* RIGHT – Blue Ocean */}
              <div className="text-center md:text-left space-y-4 text-gray-600 font-medium">
                <p>Innovation</p>
                <p>Uncontested</p>
                <p>Expansive</p>
                <p>Unknown</p>
                <p>Transformational</p>
              </div>

            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-16 mb-5">
            <h2 className="text-center text-darkBlue-100 text-3xl md:text-4xl font-medium mb-6">
              The "Why" of QMIS - Inspired by Simon Sinek
            </h2>

            <p className="text-gray-500 text-start text-base md:text-lg leading-relaxed">
              Simon Sinek says that great institutions starts with WHY-a purpose bigger than themselves. And we are deeply
              moved by the philosophy of starting with the "WHY" of anything and everything at our school.
            </p>
          </div>
        </div>
      </section>
      {/* ================= SECTION 3 ================= */}
      <section className="bg-white pb-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Top Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-red-500 text-2xl md:text-3xl font-semibold">
                Our WHY:
              </h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We are committed to bringing in a sustainable change for a better
                world by empowering every learner as a thoughtful leader
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center ">
              <Image
                src="/qmis-strategy/3.png"
                alt="Start With Why - Simon Sinek"
                width={380}
                height={280}
                className="h-auto object-contain"
              />
            </div>

          </div>

          {/* Bottom Line */}
          <div className="mt-16 text-center max-w-5xl mx-auto">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              From this WHY flows our WHAT and HOW — our teaching methods,
              programs, values, activities, and culture.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
