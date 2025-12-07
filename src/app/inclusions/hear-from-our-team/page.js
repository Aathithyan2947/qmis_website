import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function HearFromOurTeam() {
  return (
    <>
      <PageHeader contentTitle={"Hear From Our Team"} />

      <div className="bg-grid-dots">
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">

          {/* === Special Educator === */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="order-1 md:order-1">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/inclusions/hear-from-our-team/1.png"
                  alt="Special Educator"
                  width={400}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-2 text-center">
                  MS. SASIREKA
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-2 md:order-2 space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-900">
                Special Educator
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                I started my journey as a Kindergarten teacher. When I came across a few
                children with special needs in my class, I wanted to understand them
                better and support them effectively. Learning about special children
                and their needs deeply changed my approach to teaching — it made me
                more patient, inclusive, and aware of each child’s unique needs. This
                made me as a special educator.
              </p>
            </div>
          </div>

          {/* === Counsellor === */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Text */}
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-900">
                Counsellor
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                People usually have unresolved issues within themselves that hinder
                their productivity. As a counsellor I am interested in analysing such
                recurrent patterns in their behaviour which will help them become
                better versions of themselves.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                At Queen Mira we provide emotional support and all children are treated
                equally with love and care.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex md:justify-end">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/inclusions/hear-from-our-team/2.png"
                  alt="Counsellor"
                  width={400}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-2 text-center">
                  MS. SHAYNA FRANCIS
                </div>
              </div>
            </div>
          </div>

          {/* === Team Image + Quote === */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Team Image */}
            <div>
              <Image
                src="/inclusions/hear-from-our-team/3.png"
                alt="Team"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>

            {/* Quote */}
            <div className="text-center md:text-left space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg">
                If they can’t <span className="font-semibold">learn</span> the way we{" "}
                <span className="font-semibold">teach</span>,<br />
                we teach the way they{" "}
                <span className="font-semibold">learn</span>.
              </p>
              <p className="text-xs text-gray-400">– DR. OLIVAR LOVASS</p>
            </div>
          </div>

          {/* === Big Quote Block === */}
          <div className="flex justify-center py-10">
            <div className="relative max-w-3xl w-full">
              <div className="border-2 border-darkBlue-100 rounded-2xl p-10">
                <div className="absolute -top-4 left-6 text-4xl text-indigo-900">“</div>
                <div className="absolute -bottom-6 right-6 text-4xl text-indigo-900">”</div>

                <div className="bg-darkBlue-100 text-white p-8 rounded-xl text-center text-sm leading-relaxed">
                  {/* The special education team has really helped me and my child a lot. */}
                  {/* By their inclusive education, they helped my child to come out of */}
                  {/* their label as a ‘special child’. He was given a scribe in Grade 10 */}
                  {/* and he was denied admission in Grade 11 in the other school, wherein */}
                  {/* he was given admission and was also made independent, confident and */}
                  {/* successful with 80% score in the Grade 12 board exam. */}
                </div>
              </div>
            </div>
          </div>

          {/* === Parent Image + Text === */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Text */}
            <div className="order-2 md:order-1 text-sm text-gray-600 leading-relaxed">
              <p>
                The special education team has really helped me and my child a lot.
                By their inclusive education, they have helped my child to come out of
                their label as a ‘special child’. He was given a scribe in Grade 10 and
                was denied admission in Grade 11 in another school, where he was later
                supported fully, made independent, confident and successful with 80%
                score in the Grade 12 board exam.
              </p>
            </div>

            {/* Image */}
            <div className="flex md:justify-end order-1 md:order-2">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/inclusions/hear-from-our-team/4.png"
                  alt="Parent"
                  width={400}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-2 text-center">
                  MS. MANGA (P/O DHEENADAYAL BATCH OF 2024-25)
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
