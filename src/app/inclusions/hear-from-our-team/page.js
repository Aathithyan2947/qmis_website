import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function HearFromOurTeam() {
  return (
    <>
      <PageHeader contentTitle={"Hear From Our Team"} />

      <div className="bg-grid-dots">
        <section className="max-w-4xl mx-auto px-4 py-16 space-y-20">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-2xl font-semibold text-darkBlue-100">
                Parent Testimonial
              </h2>

              <p className="text-md text-gray-500 leading-loose">
                The special education team has really helped me and my child a lot.
                By their inclusive education, they have helped my child to come out of
                their label as a 'special child'. He was given a scribe in Grade 10 and
                was denied admission in Grade 11 in another school, where he was later
                supported fully, made independent, confident and successful with 80%
                score in the Grade 12 board exam.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-1">
              <div className="relative inline-block">
                <Image
                  src="/inclusions/hear-from-our-team/4.png"
                  alt="Parent"
                  width={350}
                  height={350}
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-2 text-center">
                  MS. MANGA (P/O DHEENADAYAL BATCH OF 2024-25)
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center py-20 px-2">
            {/* Image wrapper */}
            <div className="relative w-[550px] max-w-full">
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
                <p className="text-white text-sm md:text-md leading-loose max-w-2xl">
                  The team is warm and friendly. They know every child by name and their
                  specific needs and what they are capable of doing and create a truly
                  supportive environment.
                </p>

                <span className="mt-6 text-white text-sm md:text-base tracking-wide">
                  – QMIS Parent
                </span>
              </div>
            </div>
          </div>

          {/* === Special Educator === */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-1 md:order-1">
              <div className="relative inline-block">
                <Image
                  src="/inclusions/hear-from-our-team/1.png"
                  alt="Special Educator"
                  width={350}
                  height={350}
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-2 text-center">
                  MS. SASIREKA
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-2 md:order-2 space-y-4">
              <h2 className="text-2xl font-semibold text-darkBlue-100">
                Special Educator
              </h2>

              <p className="text-md text-gray-500 leading-loose">
                I started my journey as a Kindergarten teacher. When I came across a few
                children with special needs in my class, I wanted to understand them
                better and support them effectively. Learning about special children
                and their needs deeply changed my approach to teaching — it made me
                more patient, inclusive, and aware of each child’s unique needs. This
                made me as a special educator.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-2xl font-semibold text-darkBlue-100">
                Special Educator
              </h2>

              <div className="text-md text-gray-500 leading-loose space-y-4 max-w-md">
                <p>
                  My passion for choosing special education stems from the belief that all children have equal rights to education. I see Queen Mira providing this in the right way.
                </p>

                <p>
                  My personal motivation comes from having a brother who is mentally challenged. I've witnessed how parents and people treat him unfairly and unequally, which is not right for any child.
                </p>

                <p>
                  I feel that parents and society should be educated on how to handle and treat special children. I want to educate parents on providing the special attention these children need.
                </p>

                <p>
                  At Queen Mira, we educate parents while QMIS educates the child, playing a major role in shaping the child's future for good.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
              <div className="relative inline-block">
                <Image
                  src="/inclusions/hear-from-our-team/Pic_2.png"
                  alt="Special Educator"
                  width={350}
                  height={350}
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-2 text-center">
                  MS. JESSIE
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-1 md:order-1">
              <div className="relative inline-block">
                <Image
                  src="/inclusions/hear-from-our-team/Pic_3.png"
                  alt="Special Educator"
                  width={350}
                  height={350}
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-2 text-center">
                  MRS. UMAIYALPALANI
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-2 md:order-2 space-y-4">
              <h2 className="text-2xl font-semibold text-darkBlue-100">
                Special Educator
              </h2>

              <ul className="list-disc list-inside text-md text-gray-500 leading-loose space-y-2">
                <li>
                  QMIS provides an inclusive learning environment where students with special
                  needs receive individual attention.
                </li>
                <li>
                  Personalized education plans and specialized teaching methods support each
                  child’s unique growth.
                </li>
                <li>
                  Special educators, psychologists, B-Fit specialists, and the entire team work
                  collaboratively to address academic, social, and behavioral needs.
                </li>
                <li>
                  QMIS ensures integration with regular students, promoting confidence and
                  healthy social development.
                </li>
                <li>
                  The structured support system creates a learning environment that is effective,
                  compassionate, and truly child-centered.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-2xl font-semibold text-darkBlue-100">
                Counsellor
              </h2>

              <p className="text-base text-gray-500 leading-loose">
                What's unique about my journey is that my career as a counsellor began
                later in life, but it's been incredibly fulfilling. I've discovered that
                it's never too late to pursue your passion, and I'm proof that with
                dedication and hard work, you can achieve your goals and make a meaningful
                impact.
              </p>

              <p className="text-base text-gray-500 leading-loose">
                I appreciate the trust they've placed in me, allowing me to make a
                difference in the lives of our students. I'm grateful to be part of a
                community that values mental well-being and empowers its students to
                thrive.
              </p>

              <p className="text-base text-gray-500 leading-loose">
                Kudos to the QMIS management for fostering an environment that prioritizes
                student well-being.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-1">
              <div className="relative inline-block">
                <Image
                  src="/inclusions/hear-from-our-team/Pic_4.png"
                  alt="Counsellor"
                  width={350}
                  height={350}
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-2 text-center">
                  DR. DHARANI, PH.D.
                </div>
              </div>
            </div>
          </div>
          {/* === Counsellor === */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div className="order-2 md:order-2 space-y-4">
              <h2 className="text-2xl font-semibold text-darkBlue-100">
                Counsellor
              </h2>

              <p className="text-md text-gray-500 leading-loose">
                People usually have unresolved issues within themselves that hinder
                their productivity. As a counsellor I am interested in analysing such
                recurrent patterns in their behaviour which will help them become
                better versions of themselves.
              </p>

              <p className="text-md text-gray-500 leading-loose">
                At Queen Mira we provide emotional support and all children are treated
                equally with love and care.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-1">
              <div className="relative inline-block">
                <Image
                  src="/inclusions/hear-from-our-team/Pic_5.png"
                  alt="Counsellor"
                  width={350}
                  height={350}
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs py-2 text-center">
                  MS. SHAYNA FRANCIS
                </div>
              </div>
            </div>
          </div>

          <div className="py-20 px-6 md:px-16 bg-grid-dots">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">

              {/* Image */}
              <div className="flex justify-center col-span-2">
                <Image
                  src="/inclusions/hear-from-our-team/6.png"
                  alt="Hear From Our Team"
                  width={920}
                  height={720}
                  className="object-contain"
                />
              </div>

              {/* Quote */}
              <div className="text-center md:text-left col-span-1">
                <p className="text-lg md:text-2xl font-light text-gray-500 leading-loose">
                  If they can’t <span className="font-semibold text-gray-700">learn</span>
                  <br />
                  the way we <span className="font-semibold text-gray-700">teach</span>,
                  <br />
                  we teach the way
                  <br />
                  they <span className="font-semibold text-gray-700">learn.</span>
                </p>

                <p className="text-sm tracking-widest text-gray-400 uppercase mt-4">
                  – Dr. O. Ivar Lovaas
                </p>
              </div>

            </div>
          </div>
        </section>
      </div >
    </>
  );
}
