import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AboutQmis() {
  return (
    <div>
      <PageHeader contentTitle="About QMIS" />

      <div className="bg-grid-dots px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-10 text-gray-700 leading-relaxed text-base sm:text-[16px] md:text-[17px]">
        <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed text-[17px]">

          <p className="mb-6">
            Queen Mira International School (QMIS) stands as a symbol of progressive, value-driven education,
            guided by a philosophy that nurtures academic excellence, character, and holistic growth.
            Over the last fifteen years, the school has evolved into a dynamic learning community grounded
            in joy, inquiry, and competency-based practices.
          </p>

          <p className="mb-6">
            A significant milestone in this journey is QMIS becoming the first and only CBSE school globally
            to receive the prestigious CIS (Council of International Schools) accreditation. This recognition
            not only validates the school’s world-class standards but has also accelerated its growth,
            strengthened its learning culture, and elevated its global visibility. The rigorous CIS framework
            continues to influence QMIS’s curriculum, pedagogy, safety norms, leadership practices,
            and student well-being standards.
          </p>

          <p className="mb-6">
            Furthering its commitment to global best practices, QMIS was recently selected—among 60 schools
            worldwide and the only CBSE school—for a collaboration with the University of Melbourne to pilot
            innovative skill-assessment practices. This partnership marks another proud accomplishment,
            reinforcing the school’s vision of preparing future-ready learners equipped with the competencies
            needed for an evolving world.
          </p>

          <p className="mb-10">
            Driven by a passionate team of educators and leaders, QMIS proudly celebrates 15 years of
            transformation—shaping futures, inspiring excellence, and redefining quality education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">

          {/* VISION */}
          <div className="relative">
            <div className="bg-[#BA2025] text-white text-xl md:text-3xl font-semibold rounded-t-[50px] py-6 text-center">
              Vision
            </div>

            <div className="bg-white rounded-[50px] shadow-xl px-8 py-10 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                {/* Simple SVG */}
                <svg viewBox="0 0 24 24" className="w-full h-full" stroke="#000" strokeWidth="1.5" fill="none">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="#F4C430" stroke="none" />
                </svg>
              </div>

              <div className="sm:border-l border-gray-400 sm:pl-6 text-gray-600 text-lg">
                To empower every learner to become a thoughtful leader...
              </div>
            </div>
          </div>

          {/* MISSION */}
          <div className="relative">
            <div className="bg-[#1A234B] text-white text-xl md:text-3xl font-semibold rounded-t-[50px] py-6 text-center">
              Mission
            </div>

            <div className="bg-white rounded-[50px] shadow-xl px-8 py-10 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                {/* Simple SVG */}
                <svg viewBox="0 0 24 24" className="w-full h-full" stroke="#000" strokeWidth="1.5" fill="none">
                  <circle cx="12" cy="9" r="3" fill="#F4C430" stroke="none" />
                  <path d="M12 2a7 7 0 0 1 7 7c0 4-3 6-3 6H8s-3-2-3-6a7 7 0 0 1 7-7Z" />
                </svg>
              </div>

              <div className="sm:border-l border-gray-400 sm:pl-6 text-gray-600 text-lg">
                Promoting personal growth and well-being through holistic development...
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center mt-20">

          {/* LEFT IMAGE */}
          <div>
            <Image
              src="/main_image.jpeg"
              width={900}
              height={600}
              alt="QMIS Placeholder"
              className="rounded-xl w-full shadow-md object-cover"
            />
          </div>

          {/* RIGHT SIDE BULLET LIST */}
          <div className="space-y-6 text-gray-700 text-[17px] leading-relaxed">

            <p className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl mt-1">☀️</span>
              Fostering environmental awareness and stewardship by nurturing respect
              for nature and promoting sustainable living, conservation, and mindful resource use.
            </p>

            <p className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl mt-1">☀️</span>
              Cultivating community and social harmony by fostering inclusivity, empathy,
              and mutual respect, while inspiring collaboration to address shared challenges.
            </p>

            <p className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl mt-1">☀️</span>
              Fostering global and digital citizenship by promoting compassion,
              ethical awareness, critical thinking, and responsible use of technology.
            </p>

            <p className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl mt-1">☀️</span>
              Empowering individuals through balanced living—integrating academics,
              athletics, and personal growth while cultivating discipline and life skills.
            </p>

            <p className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl mt-1">☀️</span>
              Inspiring innovation and lifelong learning by embracing change, advancing skills,
              and cultivating an agile mindset for navigating the world.
            </p>

            <p className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl mt-1">☀️</span>
              Building resilience and courage by empowering individuals to face challenges
              with confidence, adaptability, and a growth mindset.
            </p>
          </div>
        </div>
        {/* qmis core value */}
        <div className="flex justify-center mt-10">
          <Image src="/Core_values.png" height={800} width={1000} alt="image not found" />
        </div>
      </div>
      {/* thirukural */}
      <div className="w-full bg-darkBlue-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-left flex justify-center">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-medium leading-relaxed">
              கேடில் விழுச்செல்வம் கல்வி யொருவற்கு<br />
              மாடல்ல மற்றை யவை
            </h2>
            <p className="text-gray-300 text-lg ">
              குறள் - 400
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-grid-dots py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-darkBlue-100 mb-2">
            Guiding Statement
          </h2>

          <p className="text-gray-600 mb-10">
            QMIS has a well structured guiding statements which act as the rungs of the ladders to take us to our vision.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD TEMPLATE */}
            {[
              {
                no: "01",
                text: "Deliver a comprehensive and dynamic CBSE curriculum that blends local relevance with international best practices, fostering academic excellence and global citizenship."
              },
              {
                no: "02",
                text: "Ensure a safe, inclusive, and nurturing environment that prioritizes the physical, emotional, and psychological well-being of all students and staff."
              },
              {
                no: "03",
                text: "Instill a deep understanding of global interdependence, encouraging learners to take responsibility for sustainable living and meaningful change."
              },
              {
                no: "04",
                text: "Provide opportunities that enhance life skills, well-being, self-management, and leadership through local and global engagement."
              },
              {
                no: "05",
                text: "Promote a values-based education that inspires inquiry, collaboration, communication, and strong research skills."
              },
              {
                no: "06",
                text: "Encourage multilingualism through regional languages (Tamil/Hindi) and global languages (French), fostering cultural awareness and global communication."
              },
              {
                no: "07",
                text: "Seamlessly integrate technology to enrich learning, empower student creativity, and instill responsible digital citizenship and respect for intellectual property."
              },
              {
                no: "08",
                text: "Drive continuous learning and curriculum development through purposeful, ongoing, and student-centered assessment practices."
              },
              {
                no: "09",
                text: "Cultivate collaborative communities and equip students with globally relevant skills through financial education, creative expression and individualized learning in dedicated creative spaces."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <h3 className="text-red-600 text-xl font-semibold mb-4">
                  {item.no}
                </h3>

                <p className="text-gray-700 leading-relaxed text-[15.5px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-grid-dots">
        <Image src='/about_admission.jpg' height={600} width={800} alt="image not found" />
      </div>
    </div>
  );
}
