import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AcademicEnrichmentProgram() {
  return (
    <>
      <PageHeader contentTitle={'Academic Enrichment Program'} />
      <div className="bg-grid-dots">
        <div className="flex justify-center">
          <Image
            src="/academic-enrichment-program/1.png"
            height={1000}
            width={1000}
            alt="Academic enrichment program banner"
          />
        </div>
        {/* 2nd section */}
        <div className="flex justify-center items-center bg-darkBlue-100 p-6 text-white">
          <div className="flex flex-col items-center text-center">
            <p className="leading-loose text-sm md:text-lg max-w-[680px]">
              The Academic Enrichment Programmes strategically prepare students for
              competitive exams like NEET, JEE, CLAT, CUTE fostering high-level
              academic excellence.
            </p>
            <p className="leading-loose text-md md:text-lg max-w-[680px]">
              Extended classes provide targeted support, ensuring consistent
              progress and eliminating learning gaps.
            </p>
            <p className="leading-loose text-md md:text-lg text-center mt-3 max-w-[680px]">
              A well-designed schedule enables athletes to excel in both sports and
              academics, maintaining a strong and healthy balance.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd Section */}
      <div className="px-10 py-20 space-y-32">

        {/* ITEM 1 */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-16">
            <div className="flex md:justify-center mb-10 md:mb-0">
              <div className="p-2">
                <Image
                  src="/academic-enrichment-program/new_3.png"
                  alt="Dr. H. Rabi Ahamad"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-500">Dr. H. RABI AHAMAD</h2>
              <p className="font-medium text-gray-600 mt-1">Ph.d (Chemistry)</p>
              <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-loose">
                <li>NAAC Accredited Professional</li>
                <li>40 Yrs of Teaching & HOD Experience in CBSE, ICSE, ISC Boards</li>
                <li>Placed 30+ Aspirants in NEET</li>
                <li>Placed 10+ Aspirants in IIT, NIT</li>
                <li>Placed 5+ students in Arizona State University & Boston University, UK</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-20 md:gap-0 md:grid-cols-2 items-center">
            {/* TEXT FIRST ON MOBILE, SECOND ON DESKTOP */}
            <div className="flex order-1 md:order-2 md:justify-center">
              <div className="">
                <h2 className="text-3xl font-semibold text-gray-500">Dr. VASANTHAKUMAR GOVINDARAJAN</h2>
                <p className="font-medium text-gray-600 mt-1">Ph.d (Physics), IIT – Chennai</p>
                <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-loose">
                  <li>NAAC Accredited Professional</li>
                  <li>8 Yrs of Teaching in CBSE Schools</li>
                  <li>Guinness and Limca Book of Records Awardee</li>
                  <li>Placed 10+ Aspirants in NEET, NIT, IIIT</li>
                </ul>
              </div>
            </div>
            {/* IMAGE SECOND ON DESKTOP */}
            <div className="flex md:justify-center mt-10 md:mt-0 md:order-2">
              <div className="p-2">
                <Image
                  src="/academic-enrichment-program/new_4.png"
                  alt="Dr. Vasanthakumar Govindarajan"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-16">
            <div className="flex md:justify-center mb-10 md:mb-0">
              <div className="p-2">
                <Image
                  src="/academic-enrichment-program/new_5.png"
                  alt="Mr. Mahalingam"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-500">MR. MAHALINGAM</h2>
              <p className="font-medium text-gray-600 mt-1">M.Phil., (Ph.d)</p>
              <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-loose">
                <li>27 Yrs of Teaching & HOD Experience in Schools and Colleges</li>
                <li>8 Yrs of Experience as Trainer for JEE Mains/Advance at T.I.M.E Academy</li>
                <li>5 Yrs of Experience as Trainer in CAT, MAT, CLAT, CA, ICWA, CPT</li>
                <li>Placed 30+ Aspirants in IIT, NIT, IIIT</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
            {/* TEXT FIRST ON MOBILE, SECOND ON DESKTOP */}
            <div className="flex order-1 md:order-2 md:justify-center">
              <div className="">
                <h2 className="text-3xl font-semibold text-gray-500">MS. SUDHA</h2>
                <p className="font-medium text-gray-600 mt-1">M.Phil., M.Ed</p>
                <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-loose">
                  <li>30 Yrs of Teaching Experience in CBSE, B.Ed College</li>
                  <li>Placed 50+ NEET Aspirants with Centum Score in Biology</li>
                  <li>Produced 100+ Centum Scorers in CBSE Board Exam</li>
                </ul>
              </div>
            </div>
            {/* IMAGE SECOND ON DESKTOP */}
            <div className="flex md:justify-center mt-10 md:mt-0 md:order-2">
              <div className="p-2">
                <Image
                  src="/academic-enrichment-program/new_6.png"
                  alt="Ms. Sudha"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 5 */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-16">
            <div className="flex md:justify-center mb-10 md:mb-0">
              <div className="p-2">
                <Image
                  src="/academic-enrichment-program/new_7.png"
                  alt="Faculty member"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-500">Dr. H. RABI AHAMAD</h2>
              <p className="font-medium text-gray-600 mt-1">Ph.d (Chemistry)</p>
              <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-loose">
                <li>Director, Kanavugal Academy PVT.Ltd</li>
                <li>Devised Programs for NEET, JEE, NDA and CLAT — Placed 30+ Aspirants in NEET</li>
                <li>Handled Economics, Current Affairs & Indian Polity and Governance for Civil Service Aspirants</li>
                <li>Placed 50+ Students in NEET</li>
                <li>Placed 80+ Students in JEE, VITEE</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
