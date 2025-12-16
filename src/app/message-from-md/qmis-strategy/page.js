import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function MdLetter() {
  return (
    <div className="bg-grid-dots">
      <PageHeader contentTitle={'QMIS Strategy'} />
      {/* 1st section */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 mt-5">
        <Image
          src="/qmis-strategy/new_1.png"
          alt="image not found"
          width={350}
          height={400}
          className="h-[50vh] w-auto object-cover mx-auto col-span-1"
        />

        <Image
          src="/qmis-strategy/new_2.png"
          alt="image not found"
          width={2000}
          height={1000}
          className="h-[50vh] w-auto object-cover mx-auto col-span-2"
        />
      </section>
      {/* ================= SECTION 2 ================= */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-start text-darkBlue-100 text-3xl md:text-4xl font-medium mb-6">
              QMIS Strategy: Blue Ocean Strategy
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-loose">
              QMIS functions under the Blue Ocean Strategy — we do not compete in the
              overcrowded “red ocean” of conventional schooling; instead, we create
              new spaces, new ideas, and new possibilities, standing incomparable.
            </p>
          </div>

          {/* Strategy Card */}
          <div className="bg-gray-100 rounded-3xl px-3 py-12  md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

              {/* LEFT – Red Ocean */}
              <div className="text-center text-xl  space-y-4 text-gray-500 font-bold">
                <p>Competition</p>
                <p>Saturated</p>
                <p>Limited</p>
                <p>Known</p>
                <p>Incremental</p>
              </div>

              {/* CENTER – Image */}
              <div className="flex justify-center">
                <Image
                  src="/qmis-strategy/new_3.jpg"
                  alt="Blue Ocean vs Red Ocean Strategy"
                  width={820}
                  height={600}
                  className="object-cover"
                />
              </div>

              {/* RIGHT – Blue Ocean */}
              <div className="text-center text-xl font-bold space-y-4 text-gray-500 ">
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

            <p className="text-gray-500 text-start text-base md:text-lg leading-loose">
              Simon Sinek says that great institutions starts with WHY-a purpose bigger than themselves. And we are deeply
              moved by the philosophy of starting with the "WHY" of anything and everything at our school.
            </p>
          </div>
        </div>
      </section>
      {/* ================= SECTION 3 ================= */}
      <section className="pb-10 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">

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
