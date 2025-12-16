import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function RifleClub() {
  const rifleClubImages = [
    {
      src: "/facility/RifleClub/1.png",
      alt: "Rifle Club Building",
      className: "md:row-span-2", // BIG image
    },
    {
      src: "/facility/RifleClub/4.png",
      alt: "Shooting Practice",
    },
    {
      src: "/facility/RifleClub/5.png",
      alt: "Indoor Shooting Range",
    },
    {
      src: "/facility/RifleClub/Pic_3.png",
      alt: "Additional Rifle Club View",
      className: "md:col-start-1 md:row-start-3", // BELOW tall image
    },
    {
      src: "/facility/RifleClub/3.png",
      alt: "Cadet March",
    },
    {
      src: "/facility/RifleClub/6.png",
      alt: "Medal Winner",
    },
  ];

  return (
    <>
      <PageHeader contentTitle={'Rifle Club'} />
      <div className="w-full bg-grid-dots bg-gray-50 text-gray-800">
        {/* Top Image */}
        <div className="max-w-6xl mx-auto p-4">
          <div className="relative w-full h-[480px] rounded-xl overflow-hidden">
            <Image
              src="/facility/RifleClub/01.png"
              alt="Shooting Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-4xl mx-auto text-gray-500 py-16 px-4 text-center space-y-4">
          <p className="leading-loose">
            Aiming at new benchmarks in sport and academics, our academy provides
            an exclusive Rifle Club, offering students access to professional
            training and world-class equipment. With expert coaching, structured
            programs, and dedicated practice sessions, learners develop
            world-standard shooting skills while enhancing focus, discipline,
            precision, and resilience.
          </p>

          <p className="leading-loose">
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
        <div className="py-6 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center text-gray-500 text-center">

              <div className="border border-gray-300 shadow rounded-xl w-72 h-24 px-2 flex items-center justify-center">
                "On the range, excellence begins with self-control."
              </div>

              <div className="border border-gray-300 shadow rounded-xl w-72 h-24 px-2 flex items-center justify-center">
                "Every shot is a lesson in patience."
              </div>

              <div className="border border-gray-300 shadow rounded-xl w-72 h-24 px-2 flex items-center justify-center">
                "The target is won in the mind before it's hit on the range."
              </div>

            </div>
          </div>
        </div>

        {/* Gallery Images - Using Next.js Image component */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 py-10 md:py-20">
              {rifleClubImages.map((image, index) => (
                <div
                  key={index}
                  className={`mb-4 break-inside-avoid rounded-2xl overflow-hidden shadow-lg ${image.className || ''}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
