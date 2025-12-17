import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function HolisticJourney() {
  return (
    <section className="w-full bg-grid-dots">

      {/* Page Header */}
      <PageHeader contentTitle="Holistic Journey" />

      {/* Top Image */}
      <div className="mx-auto max-w-6xl flex justify-center py-16">
        <Image
          src="/holistic_journey/01.png"
          width={800}
          height={1000}
          alt="Holistic Journey"
          className="w-full max-w-3xl h-auto"
        />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="max-w-5xl mx-auto px-6 pb-20">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-light text-darkBlue-100 text-center">
          Our Holistic Journey
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-gray-500 text-center max-w-3xl mx-auto leading-loose">
          Education at Queen Mira does not stop with Academics. Sports, Skill and value
          based activities makes us wholesome.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div className="flex justify-center px-2">
            <Image
              src="/holistic_journey/1.png"
              width={500}
              height={400}
              alt="Students Activity"
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Right Text */}
          <div className="text-gray-500 leading-loose space-y-6">
            <p>
              As of 2025, only 30%–45% of schools worldwide include structured
              skill-based education as part of their curriculum.
            </p>

            <p>
              Queen Mira International School is one of them, where students can
              experience over 65+ activities and develop over 35+ skill sets,
              making their educational ecosystem.
            </p>
          </div>

        </div>

        {/* Bottom Paragraph */}
        <p className="mt-12 text-gray-500 text-center max-w-4xl mx-auto leading-loose">
          These activities mapped to the skills and values are also ensured that
          they reflect our philosophy of “wellbeing of body, mind and soul.”
        </p>

      </div>
      <div className="bg-maroon-100 text-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-4xl font-semibold text-left mb-10">
            Student Life
          </h2>

          {/* Top Description */}
          <p className="leading-loose text-left max-w-4xl mx-auto mb-16">
            Student life at Queen Mira International School (QMIS) has been a
            meaningful journey of growth, responsibility, and confidence for us.
            Our experience begins the moment we walk through the school gate.
            The warm greeting we receive sets a positive tone for the day, and the
            simple habit of carrying our ID card teaches us accountability and
            pride in being part of the school community. Each day starts with a
            lively morning assembly, where we share thoughts, celebrate our
            achievements, and slowly build the confidence to speak in front of
            others. This is followed by our cherished Circle Time—a space where we
            learn to listen, understand, and support one another, developing
            empathy and emotional strength.
          </p>

          {/* Image Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            <div className="flex justify-center">
              <Image
                src="/holistic_journey/2.png"
                width={350}
                height={250}
                alt="Student Life Activity"
                className="w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/holistic_journey/Pic 4.png"
                width={350}
                height={250}
                alt="Student Life Activity"
                className="w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/holistic_journey/Pic 5.png"
                width={350}
                height={250}
                alt="Student Life Activity"
                className="w-full h-auto"
              />
            </div>

          </div>

          {/* Bottom Description */}
          <p className="leading-loose text-left max-w-4xl mx-auto">
            Our classrooms are vibrant and energetic, encouraging us to ask
            questions, explore ideas, and work together. Lunchtime is a moment to
            relax, bond with friends, and reflect on the values shared through
            Dhinam Oru Thirukural. After lunch, we look forward to the B-fit
            session, which helps us develop endurance, discipline, and a healthy
            mindset. These routines remind us that learning is not just about
            academics, but also about caring for our physical and emotional
            well-being. Throughout our school life, our teachers support and guide
            us, making us feel safe, valued, and motivated.
          </p>

        </div>
      </div>

      <div className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-16">

            {/* Text Content */}
            <div className="md:max-w-lg text-gray-500 leading-loose text-center md:text-left">
              <p>
                A remarkable opportunity we experience at QMIS is MD Connects.
                Meeting the Managing Director, Mr. Abinath Chandhran, and sharing
                our ideas with him makes us feel respected and heard. These
                meaningful conversations inspire us to think bigger and become
                responsible leaders who can make a difference.
              </p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src="/holistic_journey/4.png"
                width={380}
                height={380}
                alt="MD Connects"
                className="w-full h-auto"
              />
            </div>

          </div>

        </div>
      </div>


      <div className="pb-10">
        <div className="max-w-5xl mx-auto px-6">

          {/* Text Content */}
          <div className="text-gray-500 leading-loose text-center mb-16">
            <p>
              Our learning continues beyond regular classes through after-school
              clubs, enrichment programs, and Olympiad opportunities. These
              sessions help us strengthen our understanding and explore our
              interests. Student-led classes further boost our confidence, giving
              us ownership of our learning and a chance to present concepts in our
              own words.
            </p>
            <br />
            <p>
              Although joining school may have felt overwhelming at first, with
              supportive friends and caring teachers, we quickly found comfort
              and belonging. Along the way, we have learned important life
              skills—such as resilience, compassion, leadership, and
              teamwork—that shape who we are becoming.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Image
              src="/holistic_journey/5.png"
              alt="After school activities"
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <Image
              src="/holistic_journey/6.png"
              alt="Student-led learning"
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <Image
              src="/holistic_journey/7.png"
              alt="Collaborative learning"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section >
  );
}
