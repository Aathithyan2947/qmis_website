import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function HealthCenter() {
  const quotes = [
    {
      img: "/facility/HealthCenter/Pic_1.png",
      text: "In an emergency,\nevery second counts",
    },
    {
      img: "/facility/HealthCenter/Pic_2.png",
      text: "A place of comfort in\nmoments of need",
    },
  ];
  return (
    <>
      <PageHeader contentTitle={'Health Center'} />
      <div className="w-full bg-grid-dots text-gray-500 pb-16">
        {/* Top Description */}
        <div className="max-w-4xl mx-auto py-10 px-4 text-center leading-loose">
          <p>
            Our Health Centre (Sick Bay) is equipped with first-aid facilities and staffed by a
            full-time, trained nurse who works in close consultation with a paediatrician from our
            partner multi-specialty hospital, available during school hours. A dedicated Health &
            Safety Committee regularly oversees the sick bay’s operations, maintaining robust health
            protocols at all times.
          </p>
        </div>

        {/* Quotes */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 px-4 mb-16">
          {quotes.map((quote, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative w-[360px] md:w-[420px] h-[280px]">
                {/* Quote Image */}
                <Image
                  src={quote.img}
                  alt={`Health quote ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 420px"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                  <p className="text-maroon-100 font-medium text-lg md:text-xl leading-snug whitespace-pre-line">
                    {quote.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Image 1 */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src='/facility/HealthCenter/1.jpeg' alt="Nurse attending patient" className="w-full h-full object-cover" />
          </div>

          {/* Image 2 */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src='/facility/HealthCenter/2.jpeg' alt="Sick bay bed" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}
