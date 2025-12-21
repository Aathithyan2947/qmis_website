import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function SoulActivities() {
  return (
    <div className="w-full bg-white">

      <PageHeader contentTitle="Soul" />

      {/* ===================== MAIN CONTENT ===================== */}
      <section className="w-full bg-grid-dots relative">
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-20">

          {/* ===================== TOP SECTION ===================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
            <div>
              <h1 className="text-4xl font-bold text-darkBlue-100 mb-8">
                Activities for the Soul
              </h1>

              <p className="text-gray-600 leading-loose max-w-xl">
                Social-emotional learning programs can boost student academic
                performance by an average of 8% when implemented for a full
                academic year, according to a Yale study. Our school also
                integrates activities helping students develop essential skills
                like empathy, emotional wellbeing and responsible
                decision-making, which foster both academic success and personal
                growth.
              </p>

              <p className="mt-12 text-gray-600 leading-loose max-w-md text-center md:text-left">
                Execution of community outreach projects as a part of their International Global Citizen award program, Karko
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/soul/01.png"
                alt="Activities for the Soul"
                width={340}
                height={340}
                className="w-[340px] h-auto object-cover"
              />
            </div>

          </div>

        </div>

        {/* ===================== RED DUAL COLUMN ===================== */}
        <div className="bg-maroon-100 text-white py-20">
          <div className="max-w-5xl mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">

              {/* LEFT */}
              <div className="text-center">
                <p className="leading-loose mb-8">
                  Sibling Care creates a space of belongingness
                </p>
                <div className="mx-auto w-[350px]">
                  <Image
                    src="/soul/1.png"
                    alt="Sibling Care"
                    width={350}
                    height={250}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* DIVIDER */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/50" />

              {/* RIGHT */}
              <div className="text-center">
                <p className="leading-relaxed mb-2">
                  Aayulu, a life skill game with a transformative <br />approach to
                  life education
                </p>
                <div className="mx-auto w-[350px]">
                  <Image
                    src="/soul/2.png"
                    alt="Aayulu life skill game"
                    width={350}
                    height={250}
                    className="w-full h-auto"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ===================== SKILLS & VALUES ===================== */}
        <div className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold text-[#0E1A47] mb-16">
            Skills and values Mapping
          </h2>

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="w-full">
              <Image
                src="/soul/5.png"
                alt="Group activity"
                width={500}
                height={350}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Sibling Care</h3>
              <p className="text-gray-600 leading-loose max-w-md">
                Sibling Care is a nurturing experience where older students
                learn to guide and support younger peers.
              </p>
            </div>

          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Skills it develops
              </h3>
              <p className="text-gray-600 leading-loose max-w-md">
                Interpersonal skills, patience, counselling, communication,
                emotional intelligence.
              </p>
            </div>

            <div className="w-full">
              <Image
                src="/soul/4.png"
                alt="Skills development"
                width={500}
                height={350}
                className="w-full h-auto rounded-lg"
              />
            </div>

          </div>
        </div>

        {/* ===================== QUOTE / UNIQUENESS ===================== */}
        <div className="flex px-2 justify-center py-5">
          <div className="w-[720px]">
            <Image
              src="/endpage.png"
              alt="Uniqueness of our program"
              width={720}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

      </section>
    </div>
  );
}
