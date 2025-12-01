export default function CISPage() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* ===================== HEADER ===================== */}
      <header className="bg-[#0E1A47] py-20 flex justify-center">
        <h1 className="text-white text-4xl font-semibold">CIS</h1>
      </header>

      {/* ===================== INTRO SECTION ===================== */}
      <section className="py-20 px-6 bg-[url('/dots.png')] bg-repeat">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-semibold text-[#0E1A47] mb-8">
            QMIS: Innovating Education. Inspiring Futures
          </h2>

          <p className="text-lg leading-8 mb-8">
            At Queen Mira International School, excellence is our identity.
            Our historic CIS Accreditation places us among
            <span className="font-semibold"> 1,500+ leading international schools across 120+ countries</span>
            — making QMIS the
            <span className="font-semibold"> First CBSE school</span>
            in the world to achieve this distinction.
          </p>

          <p className="text-lg leading-8 mb-16">
            Becoming a CIS Member School in 2016–17, earning full accreditation in 2021,
            and now moving into the re-accreditation cycle reflects one clear truth: <br />
            <span className="font-semibold">
              QMIS is committed to sustained growth, global standards, and continuous improvement.
            </span>
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#0E1A47] mb-8">
            Global Standards. Real Opportunities
          </h2>

          <p className="text-lg leading-8 mb-8">
            Recognized in Leiden, Netherlands as a model school, QMIS continues to influence
            international best practices — even prompting CIS to introduce Tamil as a survey language.
          </p>

          <p className="text-lg leading-8">
            Universities abroad consistently regard QMIS students as high-calibre applicants —
            confident, well-prepared, and aligned with international learning standards.
            Admissions teams often note that graduates from CIS-accredited schools demonstrate
            strong academic discipline, cultural awareness, and global readiness.
          </p>
        </div>
      </section>

      {/* ===================== STUDENT OUTCOMES ===================== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-xl font-semibold mb-4">
            Our accreditation is transforming student outcomes:
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-lg mb-16">
            <li>Nearly 10% of our graduates now study in leading universities worldwide.</li>
            <li>
              Many receive distinct admission advantage as global institutions recognise the
              quality, rigor, and reliability of a CIS-accredited education.
            </li>
          </ul>

          <h1 className="text-4xl font-semibold mb-10">
            Success stories that speak for themselves
          </h1>

          {/* Karnish */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/page.jpg"
                alt="Student"
                className="w-full max-w-md rounded-lg shadow-md object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-medium">
                Karnish
                <span className="text-gray-600 text-xl ml-2">(Batch of 2020–2021)</span>
              </h2>

              <p className="text-xl mt-2">Studying at the University of Austin</p>

              <p className="mt-6 text-lg italic leading-relaxed">
                “QMIS gave me a global edge. CIS accreditation made universities
                look at my profile with confidence.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STUDENT STORIES 2 ===================== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* Rehma */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold">
                Rehma
                <span className="text-gray-600 text-xl ml-2">(Batch of 2020–2021)</span>
              </h2>

              <p className="text-xl mt-2">BSc Neuroscience, University of Toronto</p>

              <p className="mt-6 text-lg italic leading-relaxed">
                “Being from a CIS-accredited school strengthened my application instantly.
                On campus, I stood out — confident, disciplined, globally ready.
                QMIS didn’t just help me get in; it helped me thrive.”
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/k.jpg"
                alt="Student"
                className="w-full max-w-md rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          {/* Aravind */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/k.jpg"
                alt="Student"
                className="w-full max-w-md rounded-lg shadow-md object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-semibold">
                Aravind Regu Subramanian
                <span className="text-gray-600 text-xl ml-2">(Batch of 2019–2020)</span>
              </h2>

              <p className="text-xl mt-2">MBChB Medicine, University of Aberdeen, UK</p>

              <p className="mt-6 text-lg italic leading-relaxed">
                “Applying to Medicine in the UK is known to be tough. But coming from QMIS —
                a CIS-accredited school — changed everything. My application carried weight,
                my preparation stood out, and the entire process felt far smoother than I expected.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CIS ACCREDITED BLOCK ===================== */}
      <section className="w-full grid md:grid-cols-2">
        <div className="flex justify-center p-10">
          <img
            src="/k.jpg"
            alt="Certificate"
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="bg-[#0C1A4B] text-white p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-6">CIS Accredited School</h2>

          <p className="text-lg leading-relaxed mb-6">
            Leading universities across the world accord priority to students from
            CIS-accredited schools—opening doors to global education opportunities.
          </p>

          <a href="#" className="underline text-sm tracking-wide">
            VISIT WWW.COIS.ORG
          </a>
        </div>
      </section>

      {/* ===================== HEALTH & SAFETY ===================== */}
      <section className="w-full py-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#ccc_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-semibold mb-6">Health And Safety Committee</h2>

            <p className="text-lg leading-8 mb-4">
              The committee ensures safety for all through Health & Safety and Child Protection policies.
              They regularly review and upgrade safety measures.
            </p>

            <p className="text-lg leading-8">
              We ensure physical, emotional, and social wellbeing—working with experts to provide
              child safety orientation. Health camps and safety programmes ensure wellbeing across
              classrooms, campus, and outdoor learning.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/k.jpg"
              alt="Safety"
              className="w-full max-w-lg h-80 object-cover rounded-lg shadow-md"
            />
          </div>

        </div>
      </section>

      {/* ===================== DIGITAL CITIZENSHIP ===================== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

          <div className="md:w-1/2 bg-gray-300 h-[380px] rounded-lg shadow-md"></div>

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0E1A47]">
              Digital Citizenship Committee
            </h2>

            <p className="leading-8">
              DCC fosters the use of innovative technologies to augment learning and empower
              students as creators.
            </p>

            <p className="leading-8">
              We educate students about Digital Citizenship and Intellectual Property Rights.
            </p>

            <p className="leading-8">
              We promote cyber safety and a positive digital culture within the school.
            </p>
          </div>

        </div>
      </section>

      {/* ===================== GLOBAL CITIZENSHIP ===================== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0E1A47]">
              Global Citizenship Committee
            </h2>

            <p className="leading-8">
              At Queen Mira, we define Global Citizenship as:
              <span className="italic font-medium">
                “Understanding and embracing diversity to foster a peaceful, just and sustainable world.”
              </span>
            </p>

            <ul className="space-y-4 leading-7">
              <li className="flex gap-3"><span>•</span> Learning about and understanding the world we share.</li>
              <li className="flex gap-3"><span>•</span> Showing compassion, respect and acceptance for diverse people.</li>
              <li className="flex gap-3"><span>•</span> Taking responsibility to create sustainable global solutions.</li>
            </ul>

            <p className="leading-8">
              Our Global Citizenship Programme empowers students to engage with global issues through leadership and collaboration.
            </p>

            <p className="leading-8">
              Guided by CIS and UN SDGs, we integrate global citizenship across our curriculum.
            </p>
          </div>

          <div className="md:w-1/2 bg-gray-300 h-[380px] rounded-lg shadow-md"></div>

        </div>
      </section>

    </div>
  );
}
