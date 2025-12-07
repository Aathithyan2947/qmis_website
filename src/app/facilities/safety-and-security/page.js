import PageHeader from "@/components/PageHeader";

export default function SafetyAndSecurity() {
  return (
    <>
      <PageHeader contentTitle={"Safety & Security"} />

      <div className="w-full bg-gray-50 px-6 md:px-12 py-10">

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-600 text-white text-lg md:text-xl font-medium py-4 px-6 rounded-md">
            “A secure school is the foundation of fearless learning.”
          </div>
        </div>

        {/* Left–Right Section with Divider */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Left Content */}
          <div className="text-center md:text-right px-4 md:col-span-1">
            <h2 className="text-xl font-semibold mb-3">
              Background Checks & Verification
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All employees undergo thorough background checks to ensure a safe,
              trustworthy, and secure environment for every student.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block h-full w-px bg-gray-300 mx-auto"></div>

          {/* Right Content */}
          <div className="text-center md:text-left px-4 md:col-span-1">
            <h2 className="text-xl font-semibold mb-3">E-Appointments</h2>
            <p className="text-gray-600 leading-relaxed">
              Streamline and secure visitor management by allowing entry only to
              those with pre-approved appointments, reducing unauthorized or
              unplanned visits.
            </p>
          </div>

        </div>

        {/* Turnstile Entry + Image */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Turnstile Entry</h2>
            <p className="text-gray-600 leading-relaxed">
              Enhances campus security by allowing controlled,
              one-person-at-a-time access, ensuring every entry is authenticated
              and recorded.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/facility/HealthCenter/01.png"
              alt="Turnstile Entry"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </>
  );
}
