import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function MdLetter() {
  return (
    <div>
      <PageHeader contentTitle="MD Speaks" />

      {/* ================= SECTION 1 ================= */}
      <section className="bg-grid-dots py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">

          <h3 className="text-left text-gray-500 max-w-4xl mx-auto">
            We are not preparing followers. We are preparing leaders—resilient,
            courageous, and thoughtful.
          </h3>

          {/* IMAGE + TEXT */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">

            <div className="flex justify-center">
              <Image
                src="/md-message/1.png"
                alt="MD speaking"
                width={320}
                height={520}
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6 text-gray-500 leading-loose text-sm md:text-base">
              <p>
                We are one among the islands of excellence floating in a sea of
                mediocrity. We don't sell education; we cultivate transformation.
              </p>

              <p>
                Your child—sorry, our child—will grow into a confident human being,
                a global citizen, and a changemaker.
              </p>

              <p>Your decision today will shape your child's tomorrow.</p>

              <p className="font-medium">
                Choose not just a school—choose a purpose-driven future.
              </p>
            </div>
          </div>

          {/* LETTER */}
          <div className="mx-auto max-w-4xl space-y-6 leading-loose text-gray-500 ">
            <h2 className="text-4xl font-bold text-gray-700">
              Dear Parents,
            </h2>

            <p>
              Thank you for visiting Queen Mira International School and taking
              the time to explore Queen Mira's learning world.
              We understand that selecting a school is a one of the most defining decisions you will make
              for your child's future. At QMIS, we want to help you make this choice with clarity and confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 mx-auto max-w-4xl md:grid-cols-2 gap-10 items-center">

            <div className="space-y-6 text-gray-500 leading-loose text-sm md:text-base">

              <p>
                For many years, the Indian education system-shaped by ancient
practices was holistic, replaced later with the British
rote-learning model-which left little room for individuality,
curiosity, or questioning. At QMIS, we believe that every child
is unique, with a personal Ikigai-a deeper purpose that needs
to be discovered, nurtured, and guided. Here our focus is on
identifying each child's strengths, challenges, aspirations,
and rhythm of learning.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/md-message/2.png"
                alt="MD at QMIS"
                width={480}
                height={360}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="bg-darkBlue-100 py-16 px-6 md:px-20">
        <div className="flex justify-center mb-12 max-w-4xl mx-auto text-center">
          <p className="text-white text-xl md:text-3xl font-bold leading-relaxed">
            Breaking the Myth:
            “If We Play, We Cannot Study”
            (Those who play don’t study)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center max-w-4xl mx-auto">

          <div className="flex justify-center ">
            <Image
              src="/md-message/4.png"
              alt="BFit Program"
              width={350}
              height={450}
              className="object-contain w-[260px] sm:w-[300px] md:w-[350px]"
            />
          </div>

          <div className="space-y-6 text-white text-base text-md md:text-lg leading-loose text-center md:text-left">
            <p>
              Life requires more than academics. That is why QMIS insists on 35+
              40-minute BFit session daily
              strengthening both body and mind.
            </p>

            <p>
              “A sound mind in a sound body” is not just a motto here;
              it is a lived reality.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="bg-grid-dots py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center">
            Deep Conceptual Foundation — Not Just IIT-Oriented Coaching
          </h2>

          {/* Content */}
          <div className="grid grid-cols-1 mx-auto max-w-4xl md:grid-cols-2 gap-10 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-6 text-gray-500 leading-loose text-sm md:text-base">
              <p>
                Many institutions chase NEET / IIT-focused foundational courses.
                At QMIS, we focus on something deeper—solid conceptual understanding
                from Grade 1. When the foundation is deep, children confidently choose their
                destiny—engineering, medicine, law, arts, agriculture,
                public service, sports, or entrepreneurship.

              </p>

              <p className="font-medium text-gray-600">
                Besides this, QMIS promotes a culture where students are expected to:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Ask questions</li>
                <li>Think independently</li>
                <li>Voice ideas respectfully</li>
                <li>Collaborate meaningfully</li>
                <li>Arrive at solutions with clarity</li>
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/md-message/3.png"
                alt="Conceptual Learning at QMIS"
                width={420}
                height={520}
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4 ================= */}
      <section className="bg-darkBlue-100 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* Heading */}
          <h2 className="text-center text-white text-3xl md:text-4xl font-light tracking-wide">
            Skill Sets, Activities & Values: A Complete Triangle
          </h2>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

            {/* LEFT: LOGO */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/md-message/logo.png"
                alt="Happy Schooling"
                width={360}
                height={360}
                className="object-contain w-[220px] sm:w-[260px] md:w-[360px]"
              />
            </div>

            {/* RIGHT: TEXT */}
            <div className="space-y-8 text-white text-base sm:text-lg leading-loose text-center md:text-left">

              <p>
                Life requires more than academics. That is why QMIS insists on
                <span className="font-semibold"> 35+ essential life skill sets</span> —
                social, emotional, leadership, analytical, practical, and reflective.
              </p>

              <p>
                These are seamlessly developed through
                <span className="font-semibold"> 65+ curated activities</span>
                mapped with our core values. We accord the equation for education at
                Queen Mira as
              </p>

            </div>
          </div>
        </div>
      </section>
      {/* ================= SECTION 5 ================= */}
      <section className="bg-grid-dots py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">

          {/* QUOTE IMAGE WITH TEXT OVERLAY */}
          <div className="relative flex justify-center mb-20">
            <Image
              src="/md-message/Image.png"
              alt="Education Equation"
              width={500}
              height={260}
              className="object-contain"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <p className="text-white text-center font-semibold text-lg sm:text-xl md:text-2xl leading-snug max-w-3xl">
                Academics + Sports + Skills & Values = <br />
                <span className="font-bold">Education at Queen Mira</span>
              </p>
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-darkBlue-100 text-2xl md:text-3xl font-bold">
                AI With Values – A Balanced Approach
              </h3>

              <p className="text-gray-700 text-base md:text-lg leading-loose">
                AI has both pros and cons. Yet, it is the future. We integrate AI
                thoughtfully—not to replace learning but to enhance knowledge,
                build skills, and prepare students for the world ahead. While
                technology boosts intelligence, our values strengthen wisdom,
                ensuring that the child grows as a complete human being.
              </p>
            </div>

            {/* RIGHT SIGNATURE */}
            <div className="flex flex-col items-start md:items-end space-y-4">
              <Image
                src="/md-message/5.png"
                alt="Signature"
                width={580}
                height={180}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
