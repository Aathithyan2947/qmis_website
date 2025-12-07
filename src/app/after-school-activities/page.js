import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AfterSchoolActivites() {
  return (
    <>
      <PageHeader contentTitle={'After School Activities'} />
      <div className="bg-grid-dots">
        <div className="flex justify-center p-4">
          <Image src='/after-school-activities/main.jpg' height={1000} width={1000} alt="image not found" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-[#1b234f] overflow-hidden border border-gray-200">
              {/* Image Section */}
              <div className="bg-[#1b234f] flex justify-center p-6">
                <Image
                  src="/after-school-activities/1.webp"
                  height={500}
                  width={600}
                  className="object-contain"
                  alt="Pullela Gopichand"
                />
              </div>

              {/* Red Content Box */}
              <div className="bg-[#a12a2a] text-white text-center p-8">
                <h3 className="text-xl font-bold">
                  Pullela Gopichand<br />Badminton Academy
                </h3>

                <p className="text-sm mt-4 leading-relaxed">
                  Unlocking Potentials with World-class<br />
                  Training & Guidance!
                </p>

                <button className="mt-6 text-sm font-semibold underline underline-offset-4 hover:opacity-80">
                  Apply Now &gt;
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1b234f] overflow-hidden border border-gray-200">
              <div className="bg-[#a12a2a] flex justify-center p-6">
                <Image
                  src="/after-school-activities/2.webp"
                  height={500}
                  width={600}
                  className="object-contain"
                  alt="After School Activities"
                />
              </div>

              <div className="bg-[#1b234f] text-white text-center p-8">
                <h3 className="text-xl font-bold">
                  After School Activities
                </h3>

                <p className="text-sm mt-4 leading-relaxed">
                  Empowering Future Scholars, Athletic Icons and Rising
                  Intellects through After-school Activities!
                </p>

                <button className="mt-6 text-sm font-semibold underline underline-offset-4 hover:opacity-80">
                  Apply Now &gt;
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#a12a2a] overflow-hidden border border-gray-200">
              <div className="bg-[#1b234f] flex justify-center p-6">
                <Image
                  src="/after-school-activities/3.webp"
                  height={500}
                  width={600}
                  className="object-contain"
                  alt="Kids Gym"
                />
              </div>

              <div className="bg-[#a12a2a] text-white text-center p-8">
                <h3 className="text-xl font-bold">
                  Kids’ Gym
                </h3>

                <p className="text-sm mt-4 leading-relaxed">
                  From Screen time to Dumbbells: Enhancing Physical &
                  Mental Well-being from a Tender Age!
                </p>

                <button className="mt-6 text-sm font-semibold underline underline-offset-4 hover:opacity-80">
                  Apply Now &gt;
                </button>
              </div>
            </div>

          </div>

          <div className="text-center py-16">
            <p className="text-lg font-bold text-[#1b234f]">
              STARTING AT <span className="pl-3 text-[#a12a2a] text-3xl">Rs.3000</span>
            </p>
          </div>
        </div>
      </div>
      {/* 3rd section */}
      <div className="bg-darkBlue-100">
        <div className="max-w-7xl p-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* Tilted Image */}
          <div className="flex justify-center">
            <div className="transform rotate-2">
              <Image
                src="/after-school-activities/17.webp"
                width={520}
                height={680}
                alt="Badminton Academy"
                className="object-cover"
              />

              <h2 className="transform -rotate-2 text-white text-3xl font-extrabold text-center mt-10 tracking-wide">
                BADMINTON<br />ACADEMY
              </h2>
            </div>
          </div>

          {/* Right Content */}
          <div className="text-white space-y-6">
            <h3 className="text-2xl font-bold leading-snug">
              Pullela Gopichand<br />Badminton Academy
            </h3>

            <p className="font-semibold">
              Unlocking Potentials with World-class Training & Guidance!
            </p>

            <p className="text-sm leading-relaxed text-gray-200">
              This yet another exclusive feature of Queen Mira aims to foster a love for badminton among
              students and sports enthusiasts of all ages. QMIS is going to open a state-of-the-art
              badminton court in collaboration with ‘Celebrate Sports Foundation’s – Badminton Academy’
              mentored by Pullela Gopichand, the renowned trainer of Olympic medalists P.V. Sindhu,
              Saina Nehwal, and other top International Players.
            </p>

            <button className="text-red-500 font-semibold hover:underline">
              Apply Now &gt;
            </button>
          </div>

        </div>
      </div>
      {/* SECTION 4 - KIDZ GYM */}
      <div className="bg-white">
        <div className="max-w-7xl p-10 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-3xl font-extrabold text-red-600 tracking-wide">
              Kidz Gym
            </h3>

            <p className="font-semibold text-red-600 leading-snug">
              From Screentime to Dumbbells: Enhancing<br />
              Physical & Mental Well-being from a Tender Age!
            </p>

            <p className="text-sm leading-relaxed text-gray-600">
              To address screen time and combat obesity from a young age, QMIS has proposed
              launching a kids' gym for children aged 6 months to 12 years, emphasizing
              strength, flexibility, and agility during early development.
            </p>

            <button className="text-red-600 font-semibold hover:underline">
              Apply Now &gt;
            </button>
          </div>

          {/* RIGHT IMAGE TILTED */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="transform -rotate-2">
              <Image
                src="/after-school-activities/20.webp"
                width={520}
                height={680}
                alt="Kidz Gym"
                className="object-cover rounded-none"
              />

              <h2 className="transform rotate-2 text-red-700 text-3xl font-extrabold text-center mt-10 tracking-wide">
                KIDZ GYM
              </h2>
            </div>
          </div>

        </div>
      </div>
      {/* SECTION 5 - AFTER SCHOOL ACTIVITIES INFO */}
      <div className="bg-[#FAEECF] pt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* CENTER IMAGE (FIRST ON MOBILE) */}
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="w-72 h-72 md:w-96 md:h-96 absolute top-1/2 -translate-y-1/2"></div>
            <Image
              src="/after-school-activities/19.webp"   // Replace with your path
              width={420}
              height={600}
              alt="Shooter Girl"
              className="relative z-10 object-contain"
            />
          </div>

          {/* LEFT CONTENT */}
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl font-extrabold text-darkBlue-800 leading-snug">
              WISH TO ENROL FOR THE<br /> AFTER SCHOOL ACTIVITIES
            </h3>

            <div className="space-y-5 text-gray-800 text-sm md:text-base">
              <p className="flex gap-3">
                <span className="text-xl font-bold text-darkBlue-800">›</span>
                Open to all children OF 4 years and above<br />
                <span className="text-gray-500">(Contact the Program Coordinator for more details regarding the age eligibility for the various activities)</span>
              </p>

              <p className="flex gap-3">
                <span className="text-xl font-bold text-darkBlue-800">›</span>
                Currently available to Queen Mira's students.<br />
                Will be open to the public from 15th October 2024
              </p>

              <p className="flex gap-3">
                <span className="text-xl font-bold text-darkBlue-800">›</span>
                Open on Monday - Friday<br />
                Timing 3.30 PM - 5.30 PM
              </p>

              <p className="flex gap-3">
                <span className="text-xl font-bold text-darkBlue-800">›</span>
                Special offer on after-school activities<br />
                starting at Rs. 3000
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 order-3 md:order-3">
            <h3 className="text-2xl font-extrabold text-darkBlue-800 leading-snug">
              WHY CHOOSE THE AFTER-SCHOOL<br /> ACTIVITIES AT QMIS?
            </h3>

            <div className="space-y-5 text-gray-800 text-sm md:text-base">
              <p><span className="font-bold">Expert training & coaching</span> for the chosen field of interest.</p>

              <p><span className="font-bold">A tailored learning environment</span> for each activity, to set the right tone and for effective learning.</p>

              <p><span className="font-bold">CCTV monitoring & security system</span> to ensure the safety of students at all times.</p>

              <p>
                Thorough training & opportunities to participate in varied competitions, Grading exams
                <span className="font-bold"> (for musical instruments)</span>,
                and Belt exams
                <span className="font-bold"> (for Martial Arts)</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* SECTION 7 - After School Activities */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative overflow-hidden">
          <div className="flex justify-center order-1 md:order-1 relative">
            <div className="transform -rotate-2">
              <Image
                src="/after-school-activities/18.webp" // Replace with actual image path
                width={520}
                height={680}
                alt="After School Activities Shooting Practice"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="space-y-5 order-2 md:order-2 relative z-10">
            <h3 className="text-3xl font-extrabold text-darkBlue-800 tracking-wide">
              After school activities
            </h3>

            <p className="text-red-600 font-semibold leading-snug">
              Empowering Future Scholars, Athletic Icons, and<br />
              Rising Intellects through After-school Activities!
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              This At QMIS, kindergarteners and students are encouraged to explore beyond Rhymes,
              Science, and classrooms through extra-curricular activities and sports like Skating,
              Rifle Shooting, Keyboard, Bharathanatyam, Music, Karate, Taekwondo, Yoga, Silambam,
              Swimming, Basketball, Western Dance, and more. These programs are crafted to keep the
              body and mind of the students in balance, ensuring stable and robust growth from the
              germinating stage.
            </p>

            <button className="text-red-600 font-semibold hover:underline text-sm">
              Apply Now &gt;
            </button>
          </div>

        </div>
      </div>
      {/* SECTION - Activities Category Listing */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-4">Sports</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="list-disc ml-5">Rifle Training</li>
                <li className="list-disc ml-5">Skating</li>
                <li className="list-disc ml-5">Basketball</li>
                <li className="list-disc ml-5">Football</li>
                <li className="list-disc ml-5">Throwball</li>
                <li className="list-disc ml-5">Athletics</li>
                <li className="list-disc ml-5">Tennis</li>
                <li className="list-disc ml-5">Table Tennis</li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative space-y-10">
            {/* Vertical Divider Line - Desktop Only */}
            <div className="hidden md:block absolute left-0 top-0 h-full border-l border-gray-300"></div>

            <div className="pl-6 md:pl-10">
              <h3 className="text-xl font-bold text-red-700 mb-4">Performance Arts</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="list-disc ml-5">Classical Dance</li>
                <li className="list-disc ml-5">Western Dance</li>
                <li className="list-disc ml-5">Carnatic Music</li>
                <li className="list-disc ml-5">Instruments</li>
              </ul>
            </div>

            <div className="pl-6 md:pl-10">
              <h3 className="text-xl font-bold text-red-700 mb-4">Martial Arts</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="list-disc ml-5">Silambam</li>
                <li className="list-disc ml-5">Karate</li>
                <li className="list-disc ml-5">Kung Fu</li>
                <li className="list-disc ml-5">Taekwondo</li>
              </ul>
            </div>

            {/* Right vertical divider */}
            <div className="hidden md:block absolute right-0 top-0 h-full border-l border-gray-300"></div>
          </div>

          {/* Column 3 */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-4">Well-being</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="list-disc ml-5">Yoga</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-700 mb-4">Exploring Technology</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="list-disc ml-5">Robotics</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      {/* last section */}
      <ActivitiesCarousel from={5} to={15} picPath={'/after-school-activities/'} picType={'webp'} />
    </>
  )
}
