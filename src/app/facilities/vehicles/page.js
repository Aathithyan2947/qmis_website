import PageHeader from "@/components/PageHeader";
export default function Vehicles() {
  return (
    <>
      <PageHeader contentTitle={'Vehicles'} />

    <div className="w-full bg-white pb-20">

      {/* ---------------- VIDEOS SECTION ---------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pt-10">
        
        {/* Video 1 */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
            <iframe
  className="w-full h-64 md:h-80 rounded-lg"
  src="https://www.youtube.com/embed/lGPT94W1lpA"
  allowFullScreen
></iframe>

          </div>
          <p className="text-center mt-3 font-semibold text-gray-700">Bus Rally</p>
        </div>

        {/* Video 2 */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
            <iframe 
  src="https://www.instagram.com/reel/DQeYst4j_hk/embed"
  className="w-full h-64 md:h-80 rounded-lg"
  allowFullScreen
></iframe>
          </div>
          <p className="text-center mt-3 font-semibold text-gray-700">Safety Training</p>
        </div>
      </div>

      {/* ---------------- BUS IMAGES SECTION ---------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-14">
        <img src="/facility/Vehicle/2.png"  className="rounded-lg shadow w-full h-56 object-cover" alt="Bus 1" />
        <img src="/facility/Vehicle/3.png"  className="rounded-lg shadow w-full h-56 object-cover" alt="Bus 2" />
        <img src="/facility/Vehicle/4.png"  className="rounded-lg shadow w-full h-56 object-cover" alt="Bus 3" />
      </div>

      {/* ---------------- QUOTE + TEXT SECTION ---------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 mt-20 items-center">

        {/* Quote Section */}
        <div className="relative flex justify-center">
          <img src="/facility/Vehicle/1.png" className="w-80 opacity-90" alt="Quote shape" />
          
        </div>

        {/* Text Section */}
        <div className="text-gray-700 text-lg leading-relaxed">
          <p>
            At QMIS, our school buses deliver comfort and security—with air-conditioned interiors,
            GPS tracking, and CCTV surveillance so every trip is supervised and safe.
          </p>

          <p className="mt-4">
            Our drivers and conductors are carefully trained, well-groomed, and deeply committed to
            child safety.
          </p>

          <p className="mt-4">
            With regular maintenance checks and a strict safety-first approach, we ensure that
            students travel in a reliable, caring, and protected environment.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
