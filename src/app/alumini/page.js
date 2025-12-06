export default function Alumni() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">

      {/* ===================== HEADER ===================== */}
      <header className="bg-[#0E1A47] py-20 flex justify-center">
        <h1 className="text-white text-4xl font-semibold">Alumni</h1>
      </header>


      {/* ====================================================================== */}
      {/*                         SECTION 1 – SIVA BHAGYA                       */}
      {/* ====================================================================== */}
      <section className="flex justify-center px-4 md:px-10 py-16">
        <div className="max-w-4xl w-full">

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/student.jpg"
                alt="Student"
                className="w-72 h-80 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Siva Bhagya S. E
                <span className="block text-gray-500 text-lg mt-1">
                  (Batch of 2022–2023)
                </span>
              </h1>

              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Final Year, B.Tech – Metallurgical & Materials Engineering<br />
                National Institute of Technology, Tiruchirappalli (NIT–Trichy)
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                QMIS played a transformative role in shaping my academic journey...
              </p>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
            <p>
              The continuous support and mentorship of my teachers...
            </p>

            <p>
              During my time at QMIS, I authored a comprehensive book review...
            </p>

            <p>
              In college, I continued to follow the path QMIS helped pave...
            </p>
          </div>
        </div>
      </section>


      {/* ====================================================================== */}
      {/*                        SECTION – POSITIONS LIST                       */}
      {/* ====================================================================== */}
      <section className="flex justify-center px-4 md:px-10 py-16">
        <div className="max-w-4xl w-full">

          <p className="text-gray-700 leading-relaxed">
            Today, I hold several positions of responsibility at NIT Trichy:
          </p>

          <ul className="mt-6 space-y-8">
            {[
              ["Joint Secretary", "Metallurgical and Materials Engineering Association (MMEA)"],
              ["Treasurer", "Colossus Toastmasters Club"],
              ["Media Manager", "Festember Media Relations Team"],
              ["Speakers’ Liaison", "TEDx NIT Trichy"],
            ].map(([title, desc], i) => (
              <li key={i}>
                <p className="font-semibold text-lg text-gray-900">• {title}</p>
                <p className="text-gray-700 ml-4">{desc}</p>
              </li>
            ))}
          </ul>

          {/* Closing */}
          <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
            <p>
              These roles strengthened my leadership, communication...
            </p>

            <p>
              I received the <b>Academic Excellence Award – 2022</b>...
            </p>

            <p>
              QMIS has truly been the foundation on which I built my aspirations...
            </p>
          </div>
        </div>
      </section>


      {/* ====================================================================== */}
      {/*                     SECTION 2 – DAYAKANT KEVIN RAI L                  */}
      {/* ====================================================================== */}
      <section className="w-full bg-[#0b1a3d] text-white flex justify-center px-6 py-16 md:px-20">
        <div className="max-w-4xl w-full">

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/your-image.jpg"
                alt="Advocate"
                className="w-72 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">
                Dayakant Kevin Rai L
              </h1>
              <p className="text-lg mt-2 opacity-80">(Batch of 2018 – 19)</p>
              <p className="text-lg mt-4 font-medium">
                Practicing Advocate, Madras High Court
              </p>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="mt-10 space-y-8 text-gray-200 leading-relaxed">
            <p>
              "QMIS is one of the most prestigious institutions in Madurai...
            </p>

            <p>
              One of my fondest memories from school was the QMIS Sports League...
            </p>

            <h1 className="text-xl font-semibold">QMIS's Impact on My Personal Growth</h1>

            <p>
              My school played a pivotal role in moulding me...
            </p>

            <p>
              I am truly thankful to QMIS...
            </p>
          </div>

          {/* School Achievements */}
          <div className="w-full py-16 flex justify-center">
            <div className="max-w-4xl w-full">
              <h2 className="text-2xl font-semibold mb-6">School Achievements:</h2>

              <ul className="space-y-4 text-gray-200 ml-6 list-disc">
                <li>Participated in the District-Level Under-16 Boys Basketball Tournament</li>
                <li>Winners – Sahodaya Under-17 Boys Basketball Tournament</li>
              </ul>

              {/* Red Banner */}
              <div className="mt-10 bg-[#C0262D] text-white text-center text-xl md:text-2xl font-semibold py-10 px-6 rounded-2xl shadow-lg">
                QMIS will always remain an integral part of my journey.
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ====================================================================== */}
      {/*                     SECTION 3 – DR. SHRIJAH                           */}
      {/* ====================================================================== */}
      <section className="flex justify-center px-4 md:px-10 py-16">
        <div className="max-w-5xl w-full">

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/shrijah.jpg"
                alt="Dr. Shrijah"
                className="w-72 md:w-96 rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Dr. Shrijah
                <span className="block md:inline text-gray-500 text-lg">
                  (Batch of 2011–2019)
                </span>
              </h1>

              <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                This is Shrijah. I did my schooling at Queen Mira...
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-8 text-gray-700 leading-relaxed text-lg">
            <p> I owe every bit of this transformation to my school...</p>
            <p> Today, I have completed my Medicine degree...</p>
            <p>Consistent effort and dedication can lead anyone...</p>
          </div>
        </div>
      </section>


      {/* ====================================================================== */}
      {/*                     SECTION 4 – SARVESH                               */}
      {/* ====================================================================== */}
      <section className="w-full bg-white py-16 px-6 md:px-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light text-[#1c1c50]">
            Sarvesh
            <span className="text-base font-normal ml-1">(Entrepreneur)</span>
          </h1>
          <p className="text-gray-600 mt-1 text-lg">(Batch of 2018 - 19)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-[#b82025] text-white rounded-[80px] p-10 md:p-14">
            <p className="mb-6 leading-relaxed">
              My journey at QMIS continues to remain one of the most meaningful...
            </p>
            <p>What makes my school truly special...</p>
          </div>

          <div className="flex justify-center">
            <img
              src="/your-image-path.jpg"
              alt="Speaker"
              className="rounded-lg shadow-lg w-full md:w-auto"
            />
          </div>
        </div>
      </section>


      {/* ====================================================================== */}
      {/*                    SECTION 5 – TAMIL MOZHI                             */}
      {/* ====================================================================== */}
      <section className="flex justify-center px-4 md:px-10 py-16">
        <div className="max-w-5xl w-full">

          <div className="grid md:grid-cols-2 gap-10 items-start">

            <div className="flex justify-center md:justify-start">
              <img
                src="/shrijah.jpg"
                alt="Tamil Mozhi"
                className="w-72 md:w-96 rounded-lg shadow-lg object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Tamil Mozhi .B
                <span className="block md:inline text-gray-500 text-lg">
                  (Batch of 2017 -18)
                </span>
              </h1>

              <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                QMIS provides an amazing and safe environment...
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
