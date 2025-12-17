import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AboutQmis() {
  return (
    <div>
      <PageHeader contentTitle="About QMIS" />

      <div className="bg-grid-dots px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-10 text-gray-500 leading-loose text-base sm:text-[16px] md:text-[17px]">
        <div className="max-w-6xl mx-auto text-gray-500 leading-loose text-[17px]">

          <p className="mb-6">
            Queen Mira International School (QMIS) stands as a symbol of progressive, value-driven education,
            guided by a philosophy that nurtures academic excellence, character, and holistic growth.
            Over the last fifteen years, the school has evolved into a dynamic learning community grounded
            in joy, inquiry, and competency-based practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
            <p className="mb-6">
              A significant milestone in this journey is QMIS becoming the first and only CBSE school globally
              to receive the prestigious CIS (Council of International Schools) accreditation. This recognition
              not only validates the school’s world-class standards but has also accelerated its growth,
              strengthened its learning culture, and elevated its global visibility. The rigorous CIS framework
              continues to influence QMIS’s curriculum, pedagogy, safety norms, leadership practices,
              and student well-being standards.
            </p>
            <Image src='/qmis-strategy/1.png' height={800} width={600} alt="image not found" />
          </div>
          <p className="my-6">
            Furthering its commitment to global best practices, QMIS was recently selected—among 60 schools
            worldwide and the only CBSE school—for a collaboration with the University of Melbourne to pilot
            innovative skill-assessment practices. This partnership marks another proud accomplishment,
            reinforcing the school’s vision of preparing future-ready learners equipped with the competencies
            needed for an evolving world.
          </p>

          <p className="my-10">
            Driven by a passionate team of educators and leaders, QMIS proudly celebrates 15 years of
            transformation—shaping futures, inspiring excellence, and redefining quality education.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-5 text-gray-500 leading-loose text-[17px]">
          <p className="text-gray-500 text-xl font-bold mb-5">School's philosophy</p>
          <p className="text-gray-500 text-md mb-5">"We at QMIS believe in ensuring the well being of the body, mind and soul of the individual by instilling a steady growth mindset, who learn and unlearn to emerge as makers."</p>
        </div>

        <div className="mx-auto max-w-6xl mt-16 flex justify-center">
          <Image
            src="/about-qmis/new.png"
            alt="not found"
            width={900}
            height={600}
            className="w-full max-w-5xl h-auto"
            priority
          />
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

                <p className="text-gray-500 leading-relaxed text-[15.5px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-grid-dots">
        <Image src='/about_admission.jpg' height={1000} width={900} alt="image not found" />
      </div>
    </div>
  );
}
