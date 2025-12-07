import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AcademicEnrichmentProgram() {
  return (
    <>
      <PageHeader contentTitle={'Academic Enrichment Program'} />
      <div className="bg-grid-dots">
        <div className="flex justify-center">
          <Image src="/academic-enrichment-program/1.png" height={1000} width={1000} alt="image not found" />
        </div>
        {/* 2nd section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          <div className="flex flex-col items-center text-center">
            <p className="text-gray-700 leading-relaxed text-sm md:text-lg ">
              The Academic Enrichment Programmes strategically prepare students for
              competitive exams like NEET, JEE, CLAT, CUTE fostering high-level
              academic excellence.
            </p>

            <p className="text-gray-700 leading-relaxed text-md md:text-lg max-w-[580px] mt-5">
              Extended classes provide targeted support, ensuring consistent
              progress and eliminating learning gaps.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/academic-enrichment-program/2.png"
              alt="Academic Enrichment"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="py-10 flex justify-center">
          <p className="text-gray-700 leading-relaxed text-xl md:text-[22px] text-center max-w-[800px]">
            A well-designed schedule enables athletes to excel in both sports and
            academics, maintaining a strong and healthy balance.
          </p>
        </div>
      </div>
      {/* 3rd Section */}
      <div className="px-10 py-20 space-y-32">

        {/* ITEM 1 (unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-16">
          <div className="flex md:justify-center mb-10 md:mb-0">
            <div className="rounded-full border-[6px] border-gray-300 p-2">
              <Image
                src="/academic-enrichment-program/3.png"
                alt="faculty"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-700">Dr. H. RABI AHAMAD</h2>
            <p className="font-medium text-gray-600 mt-1">Ph.d (Chemistry)</p>

            <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-relaxed">
              <li>NAAC Accredited Professional</li>
              <li>40 Yrs of Teaching & HOD Experience in CBSE, ICSE, ISC Boards</li>
              <li>Placed 30+ Aspirants in NEET</li>
              <li>Placed 10+ Aspirants in IIT, NIT</li>
              <li>Placed 5+ students in Arizona State University & Boston University, UK</li>
            </ul>
          </div>
        </div>

        {/* ITEM 2 (fixed order) */}
        <div className="grid grid-cols-1 gap-20 md:gap-0 md:grid-cols-2 items-center ">

          {/* TEXT FIRST ON MOBILE, SECOND ON DESKTOP */}
          <div className="flex order-1 md:order-2 md:justify-center">
            <div className="">
              <h2 className="text-3xl font-semibold text-gray-700">Dr. VASANTHAKUMAR GOVINDARAJAN</h2>
              <p className="font-medium text-gray-600 mt-1">Ph.d (Physics), IIT – Chennai</p>

              <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-relaxed">
                <li>NAAC Accredited Professional</li>
                <li>8 Yrs of Teaching in CBSE Schools</li>
                <li>Guinness and Limca Book of Records Awardee</li>
                <li>Placed 10+ Aspirants in NEET, NIT, IIIT</li>
              </ul>
            </div>
          </div>
          {/* IMAGE SECOND ON DESKTOP */}
          <div className="flex md:justify-center mt-10 md:mt-0 md:order-2">
            <div className="rounded-full border-[6px] border-gray-300 p-2">
              <Image
                src="/academic-enrichment-program/4.png"
                alt="faculty"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* ITEM 3 (unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-16">
          <div className="flex md:justify-center mb-10 md:mb-0">
            <div className="rounded-full border-[6px] border-gray-300 p-2">
              <Image
                src="/academic-enrichment-program/5.png"
                alt="faculty"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-700">MR. MAHALINGAM</h2>
            <p className="font-medium text-gray-600 mt-1">M.Phil., (Ph.d)</p>

            <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-relaxed">
              <li>27 Yrs of Teaching & HOD Experience in Schools and Colleges</li>
              <li>8 Yrs of Experience as Trainer for JEE Mains/Advance at T.I.M.E Academy</li>
              <li>5 Yrs of Experience as Trainer in CAT, MAT, CLAT, CA, ICWA, CPT</li>
              <li>Placed 30+ Aspirants in IIT, NIT, IIIT</li>
            </ul>
          </div>
        </div>

        {/* ITEM 4 (fixed order) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

          {/* TEXT FIRST ON MOBILE, SECOND ON DESKTOP */}
          <div className="flex order-1 md:order-2 md:justify-center">
            <div className="">
              <h2 className="text-3xl font-semibold text-gray-700">MS. SUDHA</h2>
              <p className="font-medium text-gray-600 mt-1">M.Phil., M.Ed</p>

              <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-relaxed">
                <li>30 Yrs of Teaching Experience in CBSE, B.Ed College</li>
                <li>Placed 50+ NEET Aspirants with Centum Score in Biology</li>
                <li>Produced 100+ Centum Scorers in CBSE Board Exam</li>
              </ul>
            </div>
          </div>
          {/* IMAGE SECOND ON DESKTOP */}
          <div className="flex md:justify-center mt-10 md:mt-0 md:order-2">
            <div className="rounded-full border-[6px] border-gray-300 p-2">
              <Image
                src="/academic-enrichment-program/6.png"
                alt="faculty"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* ITEM 5 (unchanged, already correct) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-16">
          <div className="flex md:justify-center mb-10 md:mb-0">
            <div className="rounded-full border-[6px] border-gray-300 p-2">
              <Image
                src="/academic-enrichment-program/7.png"
                alt="faculty"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-700">Dr. H. RABI AHAMAD</h2>
            <p className="font-medium text-gray-600 mt-1">Ph.d (Chemistry)</p>

            <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-600 leading-relaxed">
              <li>Director, Kanavugal Academy PVT.Ltd</li>
              <li>Devised Programs for NEET, JEE, NDA and CLAT — Placed 30+ Aspirants in NEET</li>
              <li>Handled Economics, Current Affairs & Indian Polity and Governance for Civil Service Aspirants</li>
              <li>Placed 50+ Students in NEET</li>
              <li>Placed 80+ Students in JEE, VITEE</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}
