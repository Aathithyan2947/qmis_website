import PageHeader from "@/components/PageHeader";

export default function HealthCenter() {
  return (
    <>
      <PageHeader contentTitle={'Health Center'} />
    <div className="w-full bg-white text-gray-700 pb-16">
      {/* Top Description */}
      <div className="max-w-4xl mx-auto py-10 px-4 text-center leading-relaxed">
        <p>
          Our Health Centre (Sick Bay) is equipped with first-aid facilities and staffed by a
          full-time, trained nurse who works in close consultation with a paediatrician from our
          partner multi-specialty hospital, available during school hours. A dedicated Health &
          Safety Committee regularly oversees the sick bay’s operations, maintaining robust health
          protocols at all times.
        </p>
      </div>

      {/* Quotes */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 mb-16">
        {/* Left Quote */}
        <div className="flex flex-col items-center text-center">
          <div className="border-4 border-indigo-900 p-6 rounded-2xl relative">
            <span className="text-5xl text-indigo-900 absolute -top-6 left-4">“</span>
            <p className="text-red-600 font-medium mt-4">
              “In an emergency,<br />every second counts”
            </p>
            <span className="text-5xl text-indigo-900 absolute -bottom-6 right-4">”</span>
          </div>
        </div>

        {/* Right Quote */}
        <div className="flex flex-col items-center text-center">
          <div className="p-6 rounded-2xl border-4 border-indigo-900 relative">
            <span className="text-5xl text-indigo-900 absolute -top-6 left-4">“</span>
            <p className="text-red-600 font-medium mt-4">
              “A place of comfort in<br />moments of need”
            </p>
            <span className="text-5xl text-indigo-900 absolute -bottom-6 right-4">”</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Image 1 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img src='/facility/HealthCenter/2.png' alt="Nurse attending patient" className="w-full h-full object-cover" />
        </div>

        {/* Image 2 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img src='/facility/HealthCenter/1.png' alt="Sick bay bed" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    </>
  )
}
