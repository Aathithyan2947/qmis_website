import PageHeader from "@/components/PageHeader";

export default function SportsComplex() {
  return (
    <>
      <PageHeader contentTitle={'Sports Complex'} />
    
    <div className="w-full bg-white pb-20">

      {/* ---------- YOUTUBE VIDEO ---------- */}
      <div className="max-w-4xl mx-auto px-4 pt-10">
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/8qkMvUKojoI"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

        </div>
      </div>

      {/* ---------- DESCRIPTION TEXT ---------- */}
      <div className="max-w-3xl mx-auto text-center px-6 mt-8 text-gray-700 leading-relaxed">
        <p>
          Our school’s Sports Complex is a vibrant space where students stay active, explore their athletic skills,
          and enjoy healthy competition. With facilities for basketball, throwball, volleyball, 5-a-side football,
          skating, and an athletic track, it promotes fitness, teamwork, and overall development in a safe and
          inspiring environment.
        </p>
      </div>

      {/* ---------- RED QUOTES ---------- */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-10">
        
        <div className="bg-red-600 text-white p-6 rounded-lg text-center shadow">
          <p className="text-lg font-medium">
            “Building champions, on the field and in life.”
          </p>
        </div>

        <div className="bg-red-600 text-white p-6 rounded-lg text-center shadow">
          <p className="text-lg font-medium">
            “Fields that fuel future champions.”
          </p>
        </div>

      </div>

      {/* ---------- IMAGE GALLERY ---------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-10">

        <img
          src="/facility/SportsComplex/1.png"                 // <-- Replace with your images
          alt="Sports 1"
          className="w-full h-56 md:h-64 object-cover rounded-lg shadow"
        />

        <img
          src="/facility/SportsComplex/2.png" 
          alt="Sports 2"
          className="w-full h-56 md:h-64 object-cover rounded-lg shadow"
        />

        <img
          src="/facility/SportsComplex/3.png" 
          alt="Sports 3"
          className="w-full h-56 md:h-64 object-cover rounded-lg shadow"
        />

      </div>

    </div>
    </>
  )
}
