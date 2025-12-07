'use client';
import Image from "next/image";
import CardSwap, { Card } from '@/components/CardSwap'; // Adjust path if needed
import PageHeader from "@/components/PageHeader";

export default function AcademicOverview() {
  return (
    <>
      <PageHeader contentTitle="Academic Overview" />
      <div className="bg-white">
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/academic-overview/1.JPG"
              alt="Academic Overview Image 1"
              width={800}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="text-gray-700 leading-relaxed text-lg">
            <p className="mb-5">
              QMIS upholds strong academic standards alongside a vibrant extracurricular program.
            </p>
            <p className="mb-5">
              With no compromise on academics, the school’s consistently outstanding results reflect its
              commitment to excellence.
            </p>
            <p>
              The curriculum blends CBSE with international practices through CIS,
              aligning closely with the standards of an IB-style learning framework.
            </p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-2">
            <Image
              src="/academic-overview/2.png"
              alt="Bloom’s Taxonomy Chart"
              width={800}
              height={600}
              className="rounded-lg object-contain"
            />
          </div>

          <div className="text-gray-700 leading-relaxed text-lg order-2 md:order-1">
            <p className="mb-5">
              Following Bloom’s Taxonomy—where many schools focus only on remembering and understanding—
              QMIS takes students to the highest level, <span className="italic">Create</span>, fostering higher-order thinking.
            </p>
            <p className="mb-5">
              With only 2% of the world recognized as higher-order thinkers, Queen Mira is shaping them.
            </p>
            <p>
              External question papers are used to strengthen students’ thinking skills.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/academic-overview/3.png"
              alt="Student Test Image"
              width={800}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="text-gray-700 leading-relaxed text-lg">
            <p className="mb-5">
              Regular Class Tests (RCT) on all subjects for Grades 9–12 are conducted in a well-structured,
              scheduled manner, helping students overcome exam anxiety, build confidence, and ensure sustained
              academic progress and readiness for higher-level learning.
            </p>

            <p>
              Continuous Assessments from Grades 1–8 monitor student development, aiming to improve our class
              average from 75% to 85% while maintaining strong overall performance.
              To align with our philosophy of holistic education, the Academic Strategic Committee introduced
              the Holistic Progress Report System, assessing both scholastic and co-scholastic areas.
              <span className="italic"> (Reference -25, 26- The Master minds)</span>
            </p>
          </div>
        </section>
      </div>
      {/* Main section 2 */}
      <div className="w-full py-12 bg-red-700 ">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6">
              <h2 className="text-[28px] md:text-[36px] font-bold leading-tight">
                Your Child's Bright Future Starts Here at QMIS!
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                As you embark on the significant journey of choosing the right school for your child, Queen Mira International School (QMIS) stands ready to be your partner in shaping your child's educational and personal growth. We understand the importance of selecting a school that aligns with your aspirations and values for your child's future.
              </p>
            </div>

            {/* Image */}
            <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/academic-overview/4.webp"
                alt="Child playing with educational blocks at QMIS"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </section>
        </div>
      </div>
      {/* 3rd main section */}
      <div className="w-full py-12 bg-[#12183A] ">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Header Section */}
          <div className="text-white mb-12 max-w-3xl">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight mb-4">
              QMIS is not just a school. It is a way of life.
            </h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
              We equip our students with qualities that will help them flourish on the global platform and is useful in every aspect of their lives.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              This is the greatest gift you could give your child.
            </p>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10">
            {/* Row 1 */}
            {[
              { src: '/academic-overview/icon/1-aca.webp', alt: 'Communication', label: 'Communication' },
              { src: '/academic-overview/icon/2-aca.webp', alt: 'Leadership', label: 'Leadership' },
              { src: '/academic-overview/icon/3-aca.webp', alt: 'Knowledge', label: 'Knowledge' },
              { src: '/academic-overview/icon/4-aca.webp', alt: 'Experience', label: 'Experience' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs md:text-sm font-medium">{item.label}</span>
              </div>
            ))}

            {/* Row 2 */}
            {[
              { src: '/academic-overview/icon/5-aca.webp', alt: 'Exposure', label: 'Exposure' },
              { src: '/academic-overview/icon/6-aca.webp', alt: 'Survival Skills', label: 'Survival Skills' },
              { src: '/academic-overview/icon/7-aca.webp', alt: 'Competitive Skills', label: 'Competitive Skills' },
              { src: '/academic-overview/icon/8-aca.webp', alt: 'Freedom', label: 'Freedom' },
            ].map((item, index) => (
              <div key={`row2-${index}`} className="flex flex-col items-center text-center space-y-3">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs md:text-sm font-medium">{item.label}</span>
              </div>
            ))}

            {/* Row 3 */}
            {[
              { src: '/academic-overview/icon/9-aca.webp', alt: 'Courage', label: 'Courage' },
              { src: '/academic-overview/icon/10-aca.webp', alt: 'Problem-solving skills', label: 'Problem-solving skills' },
              { src: '/academic-overview/icon/11-aca.webp', alt: 'Physical Fitness', label: 'Physical Fitness' },
              { src: '/academic-overview/icon/12-aca.webp', alt: 'Mental Fitness', label: 'Mental Fitness' },
            ].map((item, index) => (
              <div key={`row3-${index}`} className="flex flex-col items-center text-center space-y-3">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs md:text-sm font-medium">{item.label}</span>
              </div>
            ))}

            {/* Row 4 */}
            {[
              { src: '/academic-overview/icon/13-aca.webp', alt: 'Resilience', label: 'Resilience' },
              { src: '/academic-overview/icon/14-aca.webp', alt: 'Perseverance', label: 'Perseverance' },
              { src: '/academic-overview/icon/15-aca.webp', alt: 'Patience', label: 'Patience' },
              { src: '/academic-overview/icon/16-aca.webp', alt: 'Discipline', label: 'Discipline' },
            ].map((item, index) => (
              <div key={`row4-${index}`} className="flex flex-col items-center text-center space-y-3">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs md:text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 4th section */}
      <div className="w-full py-12 bg-grid-dots">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Content - Appears SECOND on mobile, FIRST on desktop */}
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-darkBlue-100">
                Queen Mira: The World's 1st CIS Accredited CBSE School
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                We equip our students with qualities that will help them flourish on the global platform and is useful in every aspect of their lives.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                This is the greatest gift you could give your child.
              </p>
              <button className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
                KNOW MORE
              </button>
            </div>

            {/* Image - Appears FIRST on mobile, SECOND on desktop */}
            <div className="order-1 md:order-2 w-full h-auto rounded-lg overflow-hidden">
              <Image
                src="/academic-overview/11.png"
                alt="Child in a cardboard rocket costume at Queen Mira International School"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </section>
        </div>
      </div>

      {/* 5th section */}
      <div className="w-full py-12 bg-red-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Swapping Image with CardSwap Carousel */}
            <div className="order-1 w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl relative">
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={2000}
                pauseOnHover={true}
              >
                <Card>
                  <Image
                    src="/academic-overview/5.webp"
                    alt="QMIS Classroom Learning Environment"
                    fill
                    className="object-cover"
                    priority
                  />
                </Card>
                <Card>
                  <Image
                    src="/academic-overview/6.webp"
                    alt="QMIS Early Childhood Program"
                    fill
                    className="object-cover"
                  />
                </Card>
                <Card>
                  <Image
                    src="/academic-overview/7.webp"
                    alt="QMIS Student Activity"
                    fill
                    className="object-cover"
                  />
                </Card>
              </CardSwap>
            </div>

            {/* Text Content */}
            <div className="order-2 text-white space-y-8">
              <div>
                <h2 className="text-[28px] md:text-[26px] font-bold leading-tight mb-4">
                  A Unique Learning Environment Designed for Your Child’s Success
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
                  At Queen Mira, we take pride in being the first-ever CBSE school globally to receive the prestigious CIS accreditation. This accolade is a testament to our commitment to delivering high-quality education while upholding exceptional international safety standards.
                </p>
                <p className="text-sm md:text-base leading-relaxed opacity-90">
                  Our smaller class sizes ensure a personalized approach to education, with a remarkable 1:10 teacher-student ratio. We strive to make every child feel valued and empowered on their educational journey.
                </p>
              </div>

              <div>
                <h2 className="text-[28px] md:text-[26px] font-bold leading-tight mb-4">
                  Early Childhood Academics Program: Nurturing Young Minds
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-90">
                  Our Early Childhood program, spanning Pre-KG, KG1, and KG2, is designed to foster curiosity, exploration, and discovery in a safe and engaging environment. We focus on various aspects of childhood development, including communication, physical well-being, social and emotional growth, literacy, understanding the world, and creative expression.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 6th section */}
      <div className="w-full py-12 bg-darkBlue-100">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Content - Appears FIRST on mobile, FIRST on desktop (left) */}
            <div className="order-1 text-white space-y-8">
              <div>
                <h2 className="text-[28px] md:text-[26px] font-bold leading-tight mb-4">
                  Embracing Learning Through Play
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-90 mb-4">
                  At QMIS, we believe that play is fundamental to a child's development. Our curriculum seamlessly blends CBSE requirements with international CIS standards, emphasizing learning through play. We celebrate each child's uniqueness, fostering positive relationships and providing supportive environments conducive to learning and growth.
                </p>
              </div>

              <div>
                <h2 className="text-[28px] md:text-[26px] font-bold leading-tight mb-4">
                  Faculty Excellence and World-class Facilities
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-90">
                  Our dedicated teachers ensure a safe, happy, and progressive learning experience for your child. Combined with our state-of-the-art facilities, including aesthetically designed classrooms, real-world extracurricular activities, and comprehensive learning spaces, your child's holistic development is our priority.
                </p>
              </div>
            </div>

            {/* Swapping Image with CardSwap Carousel - Appears SECOND on mobile, SECOND on desktop (right) */}
            <div className="order-2 w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl relative">
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={2000}
                pauseOnHover={true}
              >
                <Card>
                  <Image
                    src="/academic-overview/5.webp"
                    alt="QMIS Learning Through Play"
                    fill
                    className="object-cover"
                    priority
                  />
                </Card>
                <Card>
                  <Image
                    src="/academic-overview/6.webp"
                    alt="QMIS Faculty and Students"
                    fill
                    className="object-cover"
                  />
                </Card>
                <Card>
                  <Image
                    src="/academic-overview/7.webp"
                    alt="QMIS World-class Facilities"
                    fill
                    className="object-cover"
                  />
                </Card>
              </CardSwap>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
