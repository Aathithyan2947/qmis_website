import ImageCarousel from "@/components/ImageCarousel";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function CareerGuidance() {
  const carouselImages = [
    '/career-guidance/Pic_8.png',
    '/career-guidance/Pic_9.png',
    '/career-guidance/Pic_10.png',
  ];
  return (
    <>
      <PageHeader contentTitle={"Career Guidance"} />

      <div className="bg-grid-dots bg-gray-50 bg-grid-dots min-h-screen px-6 lg:px-24 py-16 flex justify-center">
        <div className="max-w-5xl w-full">
          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-semibold text-left mb-12 text-gray-800">
            Career Guidance Credentials & Contributions
          </h1>

          <div className="space-y-16">

            {/* ===== Row 1 ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Image (mobile first, desktop right) */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-full max-w-sm">
                  <Image
                    src="/career-guidance/1.png"
                    alt="Career Counselor"
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain rounded-md"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="order-2 lg:order-1 text-gray-500 ">
                <p className="leading-loose text-md ">
                  Ms. Kalpana Karthik Somasekar has been professionally certified since
                  June 2020 as a Global Career Counsellor by UCLA Extension and holds a
                  Green Belt Certification from Univariety. Over the past five years at
                  Queen Mira International School, she has been actively supporting the
                  higher-education aspirations of students by providing expert
                  counselling, personalised guidance, and officially authorised
                  reference and recommendation letters for university admissions across
                  the globe.
                </p>
              </div>
            </div>

            {/* ===== Row 2 ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Image (mobile first, desktop left) */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <Image
                    src="/career-guidance/02.png"
                    alt="Career Counselor"
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain rounded-md"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-gray-500">
                <p className="text-md leading-loose">
                  Her guidance has benefitted students applying through major
                  international platforms such as Common App (United States), UCAS
                  (United Kingdom), and admission systems for Canadian and Australian
                  universities. She has successfully recommended students to esteemed
                  institutions including ESSEC Business School – Asia Pacific Campus
                  (Singapore), University of Toronto, MIT, and several leading US and UK
                  universities.
                </p>
              </div>
            </div>

          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12">
            {["2.png", "3.png", "4.png"].map((img, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden flex justify-center"
              >
                <div className="w-full max-w-[300px]">
                  <Image
                    src={`/career-guidance/${img}`}
                    alt={`Career Guidance ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-gray-500 space-y-6">
            <p className="leading-loose">
              In addition, our students receive continuous support from leading
              Educational Consultants including Mr. D. Nedunchezhilan (Technocrats
              India College Finder), Mr. Jeyaprakash Gandhi (one of the top 10
              leading Career Consultants & Analysts), and Mr. Janarthanan. Their
              ongoing support ensures that our guidance extends beyond
              conventional career paths and includes diverse, emerging, and
              high-demand fields.
              Their combined efforts provide students with comprehensive,
              year-round guidance in choosing suitable programmes in both Indian
              and international universities. This has contributed to a
              well-structured and highly aspirational career-planning ecosystem
              within the school.
              Through their dedicated efforts, students at Queen Mira
              International School receive tailored advice, exposure to global
              academic landscapes, and the confidence to pursue their
              aspirations—making the journey from school to university smooth,
              informed, and inspired.
            </p>
          </div>

          <div className="mt-5 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div className="text-gray-500 ">
              <p className="leading-loose">
                Through their dedicated efforts, students at Queen Mira International School, receive tailored advice, exposure to global academic landscapes, and the confidence to aim for their aspirations — making the journey from school to university, and beyond, both informed and inspired.
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <ImageCarousel
                  images={carouselImages}
                  autoPlay
                  interval={4000}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
