import PageHeader from "@/components/PageHeader";

export default function RifleClub() {
  return (
    <>
      <PageHeader contentTitle={'Rifle Club'} />
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Top Image */}
      <div className="max-w-6xl mx-auto p-4">
        <img
          src="/facility/RifleClub/01.png"
          alt="Shooting Team"
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <p>
          Aiming at new benchmarks in sport and academics, our academy provides
          an exclusive Rifle Club, offering students access to professional
          training and world-class equipment. With expert coaching, structured
          programs, and dedicated practice sessions, learners develop
          world-standard shooting skills while enhancing focus, discipline,
          precision, and resilience.
        </p>

        <p>
          As an Olympic-recognized high-performance sport, shooting provides
          pathways to state, national, and international competitive levels.
          Through this unique program, the academy equips students with
          confidence, mental strength, and competitive readiness—skills that
          elevate both sports and academic excellence.
        </p>
      </div>

      {/* YouTube Video */}
      <div className="max-w-3xl mx-auto py-6 px-4">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/jmIg4CV7dHQ"
            title="Shooting Academy Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="flex flex-col md:flex-row justify-center gap-4 text-center py-6 px-4">
        <div className="bg-white shadow p-4 rounded-lg">
          “On the range, excellence begins with self-control.”
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          “Every shot is a lesson in patience.”
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          “The target is won in the mind before it’s hit on the range.”
        </div>
      </div>

      {/* Gallery Images */}
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

  {/* COLUMN 1 - tall building */}
  <div className="row-span-2 md:row-span-2">
    <img
      src="/facility/RifleClub/1.png"
      className="rounded-lg shadow w-full h-60 md:h-[400px] "
      alt=""
    />
  </div>

  {/* COLUMN 2 */}
  <div>
    <img
      src="/facility/RifleClub/3.png"
      className="rounded-lg shadow w-full h-40 md:h-48"
      alt=""
    />
  </div>

  <div>
    <img
      src="/facility/RifleClub/4.png"
      className="rounded-lg shadow w-full h-40 md:h-48 "
      alt=""
    />
  </div>

  {/* COLUMN 3 */}
  <div>
    <img
      src="/facility/RifleClub/5.png"
      className="rounded-lg shadow w-full h-40 md:h-48 "
      alt=""
    />
  </div>

  <div>
    <img
      src="/facility/RifleClub/6.png"
      className="rounded-lg shadow w-full h-40 md:h-48 "
      alt=""
    />
  </div>
</div>

    </div>
  
    </>
  )
}
