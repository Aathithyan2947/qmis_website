import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function SafetyAndSecurity() {
  return (
    <>
      <PageHeader contentTitle={"Safety & Security"} />

      <div className="w-full bg-gray-50 px-6 md:px-12 py-10">

        {/* Quote Section */}
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="
      bg-maroon-100 text-white
      mx-auto
      w-full md:w-[900px]
      h-[110px] md:h-[130px]
      flex items-center justify-center
      rounded-3xl
      text-center
      px-8
    "
          >
            <p className="text-xl md:text-3xl font-semibold leading-snug">
              "A secure school is the foundation of fearless learning."
            </p>
          </div>
        </div>

        {/* Left–Right Section with Divider */}
        <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-center px-4">

          {/* Left Content */}
          <div className="text-center md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-darkBlue-100 mb-2 leading-relaxed">
              Background Checks & Verification
            </h2>
            <p className="text-gray-500 leading-loose max-w-md mx-auto">
              All employees undergo thorough background checks to ensure a safe,
              trustworthy, and secure environment for every student.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:flex justify-center">
            <div className="h-64 w-[2px] bg-darkBlue-100/60"></div>
          </div>

          {/* Right Content */}
          <div className="text-center md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-darkBlue-100 mb-4">
              E-Appointments
            </h2>
            <p className="text-gray-500 leading-loose max-w-md mx-auto">
              Streamline and secure visitor management by allowing entry only to those
              with pre-approved appointments, reducing unauthorized or unplanned visits.
            </p>
          </div>

        </div>

        {/* Turnstile Entry + Image */}
        <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h2 className="text-2xl text-darkBlue-100 font-bold mb-3">Turnstile Entry</h2>
            <p className="text-lg text-gray-500 leading-loose">
              Enhances campus security by allowing controlled,
              one-person-at-a-time access, ensuring every entry is authenticated
              and recorded.
            </p>
          </div>

          {/* Image - Updated with Next.js Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-[300px] rounded-lg shadow-md overflow-hidden">
              <Image
                src="/facility/HealthCenter/01.png"
                alt="Turnstile Entry"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
