import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function ValueBasedEducation() {
  return (
    <>
      <PageHeader contentTitle="Value Based Education" />

      {/* Hero Image */}
      <Image
        src="/value-based-education/1.png"
        alt="Value Based Education"
        width={1920}
        height={800}
        className="w-full h-[60vh] object-cover"
        priority
      />

      <section className="py-24 bg-grid-dots">
        <div className="max-w-5xl mx-auto px-6">

          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="bg-gray-100 rounded-3xl p-10 text-center text-gray-500 leading-loose">
              Thirukkural is recited and its meanings explained daily, fostering moral
              understanding and cultural grounding.
            </div>

            <div className="bg-gray-100 rounded-3xl p-10 text-center text-gray-500 leading-loose">
              Core values are consistently woven into classroom learning, ensuring
              holistic and responsible student development.
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* YouTube Shorts */}
            <div className="flex justify-center">
              <div className="relative aspect-square w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/NcrcdHYhI0w"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="text-center text-gray-500 leading-loose text-lg px-4">
              Values education is integrated through structured practices such as
              Circle Time, promoting reflection and character development.
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
