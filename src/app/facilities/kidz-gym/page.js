import PageHeader from "@/components/PageHeader";

export default function KidzGym() {
  return (
    <>
      <PageHeader contentTitle={'Kidz Gym'} />
        <div className="w-full bg-white pb-20">

      {/* ---------- YOUTUBE VIDEO ---------- */}
      <div className="max-w-4xl mx-auto px-4 pt-10">
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
 <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/BKVkxCQPzE0"
  title="YouTube Shorts video"
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
          At QMIS, the Kidz Gym, in collaboration with Celebrate Sports Foundation, provides a fun and safe space for
kindergarteners to stay active, build strength, coordination, and confidence, and reduce screen time. Through guided
movement, age-appropriate equipment, and engaging play, children develop healthy habits early.
<br/>
With UNICEF predicting over 27 million Indian children and adolescents aged 5-19 will be living with obesity by 2030,
the Kidz Gym offers a proactive approach to prevent sedentary lifestyles, encourage fitness, and promote long-term
physical and emotional wellness.
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
     <div className="flex justify-center items-center w-full h-56 md:h-64 bg-gray-100 rounded-lg shadow">
  <img
    src="/facility/KidzGym/4.png"
    alt="Sports 1"
    className="h-full object-contain"
  />
</div>

      {/* ---------- IMAGE GALLERY ---------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-10">

        <img
          src="/facility/KidzGym/1.png"                 // <-- Replace with your images
          alt="Sports 1"
          className="w-full h-56 md:h-70  rounded-lg shadow"
        />

        <img
          src="/facility/KidzGym/2.png" 
          alt="Sports 2"
          className="w-full h-56 md:h-70  rounded-lg shadow"
        />

        <img
          src="/facility/KidzGym/3.png" 
          alt="Sports 3"
          className="w-full h-56 md:h-70 rounded-lg shadow"
        />

      </div>

    </div>
    </>
  )
}
