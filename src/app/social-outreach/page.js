import Image from "next/image";

export default function SocialOutreach() {
  return (
    <div className="w-full">

      {/* ================= HEADER ================= */}
      <header
        className="w-full py-20 flex items-center justify-center bg-[#11184C]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold">
          Social Outreach
        </h1>
      </header>

      {/* ===========================================================
          ISRO SECTION
      =========================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Visit to Indian Space Research Organisation
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl mb-12">
            At QMIS, giving back to the community means inspiring curiosity and aspiration —
            not just charity. Through our student-outreach program, we organised a fully funded
            trip for 187 underprivileged students from local government schools to ISRO’s Satish
            Dhawan Space Centre in Sriharikota. This was a first-of-its-kind visit, and the
            experience — from interacting with scientists to touring launch facilities —
            sparked dreams of space and science.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <Image
              src="/images/isro-group.jpg"
              width={900}
              height={600}
              alt="ISRO Visit Group"
              className="w-full rounded-lg shadow-md object-cover"
            />

            <div className="text-gray-700 leading-relaxed">
              <p className="mb-6">
                Globally, while ISRO’s outreach initiatives are growing, only a handful of
                schools — especially in remote and underserved areas — get such exposure.
                In India, surveys show that only <strong>8% of students</strong> aspire to become scientists.
              </p>
              <p>
                Through this initiative, QMIS is helping close that aspiration gap — by giving
                students not just a visit, but the chance to dream bigger.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-8">
            To honour the brilliance and dedication of India&apos;s space heroes, QMIS also proudly
            produced an exclusive anthem dedicated to ISRO scientists.
          </p>

        </div>
      </section>

      {/* ===========================================================
          VAANATHAI VELLAPOROM SECTION
      =========================================================== */}
      <section className="bg-[#0d1b3d] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              “Vaanathai Vellaporom”
            </h2>

            <p className="text-lg mb-4">
              A tribute of gratitude, hope, and inspiration.
            </p>

            <p className="text-lg mb-6">
              At QMIS, we don’t just teach students to dream —
            </p>

            <p className="text-2xl font-semibold leading-snug">
              we show them how high those dreams can fly.
            </p>
          </div>

          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
              title="Vaanathai Vellaporom"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </section>

      {/* ===========================================================
          KARKO SECTION
      =========================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-6">
            KARKO: Learning with Heart
          </h2>

          <p className="max-w-4xl mx-auto text-lg leading-relaxed text-center mb-12">
            QMIS partners with the Chellamuthu Trust, led by Dr. C. Ramasubramanian,
            to introduce KARKO — a powerful program where QMIS students collaborate
            with government school students to break learning barriers through shared experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">
            <Image
              src="/your-image.jpg"
              width={900}
              height={600}
              alt="KARKO Program"
              className="rounded-lg shadow-md object-cover w-full"
            />

            <p className="text-lg leading-relaxed">
              Through this initiative, students learn together, support each other,
              and build genuine connections. KARKO nurtures empathy, emotional well-being,
              social awareness, and a deeper understanding of diverse learning environments.
            </p>
          </div>

          <ul className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed list-disc pl-6">
            <li>
              School–community partnerships can increase student engagement by up to 40% and
              improve academic performance by 30%.
            </li>
            <li>
              Such partnerships also provide essential emotional support, creating a nurturing
              environment beyond classrooms.
            </li>
          </ul>

        </div>
      </section>

      {/* ===========================================================
          VALLUVAR MARAI SECTION
      =========================================================== */}
      <section className="py-16 bg-white">
        <div className="bg-red-700 text-white py-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            “Valluvar Marai, Vairamuthu Urai”
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-12">
          <Image
            src="/images/event-left.png"
            width={800}
            height={600}
            alt="Left Event"
            className="rounded-lg shadow w-full object-cover"
          />

          <Image
            src="/images/event-right.png"
            width={800}
            height={600}
            alt="Right Event"
            className="rounded-lg shadow w-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <p className="text-lg md:text-xl leading-relaxed">
            Another landmark initiative by Queen Mira was creating extraordinary cultural exposure
            for 100 students across government schools. They travelled to Chennai to attend
            “Valluvar Marai, Vairamuthu Urai,” hosted by award-winning poet Vairamuthu — graced by
            the Hon'ble Chief Minister of Tamil Nadu and other renowned scholars.
            <br /><br />
            This rare opportunity allowed young learners to witness Tamil culture at its finest —
            deepening their cultural identity and broadening their aspirations.
          </p>
        </div>
      </section>

      {/* ===========================================================
          QMIS x IGCA SECTION
      =========================================================== */}
      <section className="bg-[#0c1b39] text-white py-16 px-6 flex justify-center">
        <div className="max-w-4xl text-center space-y-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            QMIS x IGCA: Empowering Tomorrow’s Global Citizens
          </h2>

          <div className="flex justify-center">
            <div className="border border-blue-300 bg-white p-4 rounded-md shadow-md">
              <img
                src="/images/igca-award.png"
                alt="IGCA Award"
                className="max-h-40 object-contain"
              />
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            QMIS collaborates with IGCA to nurture socially responsible, globally aware
            learners through meaningful projects and international collaboration.
          </p>

          <p className="text-lg leading-relaxed">
            The program helps students think globally, act purposefully, and grow into
            compassionate leaders ready to shape a better world.
          </p>

        </div>
      </section>

      {/* ===========================================================
          DRUG AWARENESS SECTION
      =========================================================== */}
      <section className="py-16 px-6 md:px-12 bg-white">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#1a2a5a] mb-10">
          A Powerful Stand Against Drug Abuse
        </h2>

        <div className="flex justify-center mb-12">
          <img
            src="/images/drug-awareness-banner.jpg"
            alt="Drug Awareness Event"
            className="w-full max-w-5xl rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              Queen Mirs, through the visionary production house of Mr. Abinath,
              created a compelling anthem to raise awareness about drug abuse.
            </p>
            <p>
              With music by Gerard Feliz and lyrics by Madhan Karky, the anthem urges
              society toward safety, awareness, and collective responsibility.
            </p>
          </div>

          <div className="relative">
            <img
              src="/images/drug-video-thumbnail.jpg"
              alt="Drug Abuse Video"
              className="rounded-lg shadow-lg w-full"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="w-8 h-8 text-gray-800"
                     viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

        </div>

      </section>

      {/* ===========================================================
          GLOBAL HONOUR SECTION
      =========================================================== */}
      <section className="py-16 px-6 md:px-12">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a5a]">
          A Global Honour
        </h2>
        <p className="text-xl mt-2 text-red-600 font-semibold">
          QMIS Student Anthem Recognized by UNICEF
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center">

          <img
            src="/images/global-honour-event.jpg"
            alt="QMIS UNICEF Honour Event"
            className="w-full rounded-lg shadow-lg object-cover"
          />

          <img
            src="/images/unicef-certificate.jpg"
            alt="UNICEF Certificate"
            className="w-full rounded-lg shadow-lg object-contain border border-yellow-500 p-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">

          <div className="relative">
            <img
              src="/images/student-anthem-video.jpg"
              alt="Student Anthem Video"
              className="rounded-lg shadow-lg w-full"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-8 w-8 text-gray-800"
                     fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              Another remarkable initiative from Mr. Abinath is the QMIS Student Anthem —
              a celebration of youth, hope, and global unity composed by Anil Srinivasan
              and written by Madhan Karky.
            </p>
            <p>
              At UNICEF’s prestigious meet in Mumbai, the anthem was officially recognised
              as the Student Anthem for children worldwide — a proud milestone for QMIS.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}
