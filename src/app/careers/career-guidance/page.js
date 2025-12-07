import PageHeader from "@/components/PageHeader";

export default function CareerGuidance() {
  return (
    <>
      <PageHeader contentTitle={"Career Guidance"} />

      <div className="bg-gray-50 min-h-screen px-6 lg:px-24 py-16 flex justify-center">
        <div className="max-w-5xl w-full">
          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-12 text-gray-800">
            Career Guidance Credentials & Contributions
          </h1>

          {/* Main two-column section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Ms. Kalpana Karthik Somasekar has been professionally certified
                since June 2020 as a Global Career Counsellor by UCLA Extension
                and holds a Green Belt Certification from Univariety. Over the
                past five years at Queen Mira International School, she has been
                actively supporting the higher-education aspirations of students
                by providing expert counselling, personalised guidance, and
                officially authorised reference and recommendation letters for
                university admissions across the globe.
              </p>

              {/* Neatly Styled Image */}
              <img
                src="/career-guidance/1.png"
                alt="Career Counselor"
                className="w-full h-64 object-cover rounded-md shadow-md"
              />
            </div>

            {/* Right Section */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <img
                src="/career-guidance/1.png"
                alt="Career Counselor"
                className="w-full h-64 object-cover rounded-md shadow-md"
              />

              <p>
                Her guidance has benefitted students applying through major
                international platforms such as Common App (United States),
                UCAS (United Kingdom), and admission systems for Canadian and
                Australian universities. She has successfully recommended
                students to esteemed institutions including ESSEC Business
                School – Asia Pacific Campus (Singapore), University of
                Toronto, MIT, and several leading US and UK universities.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12">
            {["2.png", "3.png", "4.png"].map((img, i) => (
              <div
                key={i}
                className="rounded-lg shadow-md overflow-hidden flex justify-center items-center"
              >
                <img
                  src={`/career-guidance/${img}`}
                  alt={`Career Guidance ${i + 1}`}
                  className="w-full h-100 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Additional Content */}
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              In addition, our students receive continuous support from leading
              Educational Consultants including Mr. D. Nedunchezhilan (Technocrats
              India College Finder), Mr. Jeyaprakash Gandhi (one of the top 10
              leading Career Consultants & Analysts), and Mr. Janarthanan. Their
              ongoing support ensures that our guidance extends beyond
              conventional career paths and includes diverse, emerging, and
              high-demand fields.
            </p>

            <p>
              Their combined efforts provide students with comprehensive,
              year-round guidance in choosing suitable programmes in both Indian
              and international universities. This has contributed to a
              well-structured and highly aspirational career-planning ecosystem
              within the school.
            </p>

            <p>
              Through their dedicated efforts, students at Queen Mira
              International School receive tailored advice, exposure to global
              academic landscapes, and the confidence to pursue their
              aspirations—making the journey from school to university smooth,
              informed, and inspired.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
