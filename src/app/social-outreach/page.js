import Image from "next/image";

export default function SocialOutreach() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="w-full py-20 flex items-center justify-center"
        style={{
          backgroundColor: "#11184C",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <h1 className="text-white text-3xl font-semibold">
          Social Outreach
        </h1>
      </div>
     
    <div className="w-full bg-white">
      {/* PAGE CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Visit to Indian Space Research Organisation
        </h1>

        {/* INTRO PARAGRAPH */}
        <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl">
          At QMIS, giving back to the community means inspiring curiosity and aspiration —
          not just charity. Through our student-outreach program, we organised a fully funded
          trip for 187 underprivileged students from local government schools to ISRO’s Satish
          Dhawan Space Centre in Sriharikota. This was a first-of-its-kind visit, and the
          experience — from interacting with scientists to touring launch facilities —
          sparked dreams of space and science.
        </p>

        {/* IMAGE + TEXT SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="/images/isro-group.jpg" 
              alt="ISRO Visit Group"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-6">
              Globally, while ISRO’s outreach initiatives are growing, only a handful
              of schools (especially in remote and underserved areas) typically get such
              exposure. In India, surveys show that only about <strong>8% of students</strong> say
              they want to become scientists.
            </p>

            <p>
              Through this initiative, QMIS is helping close that aspiration gap —
              by giving students not just a visit, but the chance to dream bigger.
            </p>
           
          </div>
           <p>To honour the brilliance and dedication of India's space heroes, QMIS also proudly produced an exclusive

anthem dedicated to ISRO scientists</p>
        </div>
      </div>
    </div>


    <section className="w-full bg-[#0d1b3d] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
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

          <p className="text-2xl font-semibold">
            we show them how high those dreams can fly
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-white/20">
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
    </div>
  );
}
