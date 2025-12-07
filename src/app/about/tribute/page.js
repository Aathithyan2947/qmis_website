import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AboutTribute() {
  return (
    <>
      <PageHeader contentTitle="Tribute" />

      <div className="relative w-full py-16 bg-grid-dots">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/aurobindo.jpg"
              alt="Sri Aurobindo"
              height={300}
              width={300}
              className="rounded-lg object-cover"
            />
            <p className="text-gray-500 py-3">
              Peace with patience is the real way to success
            </p>
            <p className="text-maroon-100 font-semibold">Sri Aurobindo</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/mother_mira.jpg"
              alt="Mother Mira"
              height={300}
              width={300}
              className="rounded-lg object-cover"
            />
            <p className="text-gray-500 py-3">
              Do not think of what you have been, <br />
              think only of what you want to be and <br />
              you are sure to progress.
            </p>
            <p className="text-maroon-100 font-semibold">Mother Mira</p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[30vh] flex flex-col justify-center items-start bg-darkBlue-100 text-white px-6 md:px-36 py-16">
        <h3 className="text-2xl md:text-4xl font-semibold leading-relaxed md:leading-[1.6]">
          அன்புநாண் ஒப்புரவுகண்ணோட்டம் வாய்மையொடு <br />
          ஐந்துசால் ஊன்றிய தூண்
        </h3>
        <p className="mt-4 text-lg font-semibold opacity-90">குறள் - 983</p>
      </div>

      <div className="relative w-full py-20 bg-grid-dots">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/jansi_rani.jpg"
              alt="Late Mrs. Jansi Rani Chandran"
              width={450}
              height={600}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center text-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              A Memorial Tribute
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              An avid disciplinarian, late Mrs. Jansi Rani Chandran has contributed
              immensely to the establishment of our institution. She is the reason
              for where our school stands today in the international arena. Her
              analytical decision making trait had stemmed from her leadership
              qualities coupled with humanity and self-motivation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              For her, the school, like home, should be a clean and safe environment
              for children. She treated every child in the school as her own. Her
              thrust on employee welfare is what the management follows strictly
              come what may. Her valuable suggestions had spurred the school’s
              growth on a large scale.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              She endeared all around her with her friendly demeanor and easy
              disposition. Mrs. Chandran may be no more, but she lives in our hearts
              and in every brick of the school.
            </p>

            <p className="text-maroon-100 text-center md:text-left font-semibold text-xl">
              Late Mrs. Jansi Rani Chandran <br />
              <span className="text-gray-700 text-lg font-normal">
                Vice Chairman <br />
                Queen Mira International School, Madurai
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
