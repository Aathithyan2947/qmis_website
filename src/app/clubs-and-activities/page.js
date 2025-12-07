import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function ClubsAndActivities() {
  return (
    <>
      <PageHeader contentTitle={'Clubs & Activities'} />
      {/* 1st section */}
      <div className="flex justify-center p-5">
        <Image src='/clubs-activities/8.png' height={1000} width={1000} alt="image not found" />
      </div>
      <div className="flex justify-center p-5">
        <Image src='/clubs-activities/1.jpg' height={1000} width={1000} alt="image not found" />
      </div>
      {/* 2nd section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-3xl font-extrabold text-darkBlue-800 mb-6">
            Financial Literacy
          </h2>

          {/* Top Red Quote Box */}
          <div className="w-full flex justify-center">
            <p className="bg-red-700 text-white text-center text-lg font-semibold py-3 px-6 rounded-xl max-w-3xl">
              “Without money, there is nothing; money is not everything”.
            </p>
          </div>

          {/* Text + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-10 mt-10">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base order-2 md:order-1">
              At just 23 years old, with an MBA degree and a heart full of hope, I made a
              bold decision that would transform the lives of hundreds of students and
              educators. With no financial backing—only vision and courage—Queen Mira
              International School was founded in the year 2010, a school that began as a
              dream against all odds.
              <br /><br />
              Starting the institution with a Rs. 5 crore debt and taking on 100% personal
              risk, the early years were marked by intense struggle, financial hardship, and
              humiliation. Many doubted the feasibility of the venture and advised giving
              up. At one point, paying salaries for just 10 staff members became a
              monumental challenge. The absence of financial guidance and the weight of
              recurring debt added to the burden.
            </p>

            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="/clubs-activities/2.png"
                alt="Financial literacy story"
                width={550}
                height={420}
                className="rounded-md object-cover"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-14">
            {/* Quote Box */}
            <div>
              <Image
                src="/clubs-activities/3.png"
                alt="Founder's journey"
                width={550}
                height={420}
                className="rounded-md object-cover"
              />
            </div>
            {/* Right Paragraphs */}
            <div className="text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                Working tirelessly 24 × 7, I focused all energy on strategy, planning, and
                execution. Every setback became a stepping stone, and slowly, that
                foundation of faith, resilience, and relentless effort began to bear fruit.
              </p>
              <br />
              <p>
                From its humble beginning with 20 students and 8 staff, QMIS has now
                grown to an institution of over 800 students and 250 staff in just 15 years.
                What began with borrowed capital has multiplied its value, and now the
                institution is focused on reaching the mid–three-digit crore mark within
                seven years from this year 2025.
              </p>

            </div>
          </div>
        </div>
      </section>
      {/* 3rd Section */}
      <div className="bg-darkBlue-100 py-16 px-6 md:px-14">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image first on mobile, second on desktop */}
          <div className="order-1 md:order-2 flex justify-center w-full">
            <Image
              src="/clubs-activities/4.png"
              alt="Financial literacy activity"
              width={550}
              height={420}
              className="rounded-md object-cover"
            />
          </div>

          {/* Text */}
          <p className="order-2 md:order-1 text-white leading-relaxed text-sm md:text-base max-w-2xl">
            A key turning point in this incredible journey was the realization of the
            power of financial literacy. Having personally endured the consequences of
            poor financial understanding of members of the family, school, friends and
            social network, I am now passionate about ensuring that the next generation
            and other members does not face similar struggles.
            <br /><br />
            Through this vision, I advocate for financial education from a young age,
            urging students to be involved in family budgeting, understanding financial
            obligations, interest rates, and investment strategies. My belief is simple
            but powerful: a financially aware child today will become a responsible,
            empowered citizen tomorrow, perhaps even drafting the nation's financial policy.
          </p>
        </div>
      </div>
      {/* 4th section */}
      <div className="px-4">
        {/* Top text */}
        <div className="pt-4 text-center">
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            Financial literacy must be deeply interwoven with core humane values. Without this balance,
            financial knowledge alone loses its purpose. Our goal is not only to create financially capable
            individuals but also value–driven, thoughtful members of society.
          </p>
        </div>

        {/* Two column section */}
        <div className="grid grid-cols-1 md:grid-cols-2 py-5 md:px-36 items-center gap-10">

          {/* Left paragraph */}
          <p className="text-gray-500 order-2 md:order-1 text-sm md:text-base leading-relaxed max-w-xl">
            With a dedicated team of more than 220 employees supporting 800 students, we are positively
            impacting over a thousand families. This expansion is driven by our commitment to empowerment:
            financial literacy, upskilling, and job creation are at the heart of the change we bring.
          </p>

          {/* Quote Box with text on top */}
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/clubs-activities/5.png"
              height={300}
              width={400}
              alt="Quote Box"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="px-6 md:px-20 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-darkBlue-100 mb-8">
          Creative Studio
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-6">
          Why Creative Studio Matters
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 space-y-6 text-gray-600 leading-relaxed">
            <p>
              At a CBSE International school, learning goes beyond textbooks. Art helps students grow
              creatively, emotionally, and intellectually, building a well-balanced and confident mind.
            </p>

            <p>
              Art classes strengthen creativity, problem-solving, critical thinking, communication,
              teamwork, and resilience — essential skills for the 21st century. They also improve focus,
              memory, observation, and overall well-being, supporting stronger academic performance.
            </p>

            <p>
              Art connects students to culture, identity, and global perspectives, while helping them
              discover their unique creative voice.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <Image
              src="/clubs-activities/creative.png"
              width={600}
              height={400}
              alt="Creative Studio"
              className="rounded-md object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div>
            <h3 className="text-2xl md:text-3xl text-center font-medium text-darkBlue-100 mb-6">
              The skills learned in art open doors to many future careers:
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-5xl">
              Design (graphic, fashion, product, architecture, web, UX/UI), media and entertainment
              (animation, film, photography, game design), marketing and advertising, education,
              healthcare (art therapy), and even innovation in STEM fields where visualization and
              creative thinking are highly valued.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src="/clubs-activities/7.png" height={500} width={500} alt="not found" />
      </div>
    </>
  )
}
