import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function careerAtQmis() {

  const sec = [
    { img: "/career-guidance/8.png", title: "Martial Arts" },
    { img: "/career-guidance/9.png", title: "Non - Academics Department" },
  ]

  return (
    <>
      <PageHeader contentTitle={"Career At Qmis"} />
      <div className="w-full bg-gray-50 text-gray-800 bg-grid-dots p-6 md:p-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Join a Community That Values Your Impact
          </h1>
          <p className="mt-4 text-gray-600 leading-loose">
            At Queen Mira International School (QMIS), every role—within and beyond the
            classroom—contributes to advancing a globally competitive educational environment.
            We welcome passionate Educational and Institutional Professionals who embody
            excellence, innovation, and a commitment to service.
          </p>
        </div>

        {/* QMIS Advantage */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-left">
            The QMIS Advantage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-center">
            <div>
              <p className="font-medium">Progressive, collaborative</p>
              <p className="text-gray-600">work culture</p>
            </div>
            <div className="border-l border-r border-gray-300 px-6">
              <p className="font-medium">Opportunities for continuous</p>
              <p className="text-gray-600">growth and leadership</p>
            </div>
            <div>
              <p className="font-medium">A supportive community grounded</p>
              <p className="text-gray-600">in integrity and teamwork</p>
            </div>
          </div>
        </div>

        {/* Functional Areas */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-left">
            Join Us Across Various Functional Areas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { img: "/career-guidance/5.png", title: "Academics" },
              { img: "/career-guidance/6.png", title: "Sports" },
              { img: "/career-guidance/7.png", title: "Performance Arts" },
              { img: "/career-guidance/8.png", title: "Martial Arts" },
              { img: "/career-guidance/9.png", title: "Non - Academics Department" },
            ].map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-50 rounded-xl shadow-sm px-6 py-10 text-center"
              >
                <div className="relative w-24 h-24 mb-6">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold text-indigo-900">
                  {card.title}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </div>



      <div className="w-full bg-gray-50 p-6 md:p-12">
        <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Email"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex border border-gray-300 rounded">
              <span className="px-3 flex items-center bg-gray-100">🇮🇳 +91</span>
              <input
                type="text"
                className="p-2 flex-1 focus:outline-none"
                placeholder="Enter Number Here"
              />
            </div>
          </div>

          {/* Position */}
          <div className="flex flex-col">
            <label className="font-medium">
              Position <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Position"
            />
          </div>

          {/* Education Qualification */}
          <div className="flex flex-col">
            <label className="font-medium">
              Education Qualification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Qualification"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="font-medium">
              Gender <span className="text-red-500">*</span>
            </label>
            <select className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>

          {/* Address (Full Width) */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Address"
            ></textarea>
          </div>

          {/* Resume Upload */}
          <div className="flex flex-col">
            <label className="font-medium">
              Upload Your Resume <span className="text-red-500">*</span>
            </label>

            <input type="file" className="mt-1 border-gray-300 rounded" />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800"
            >
              SUBMIT
            </button>
          </div>

        </form>
      </div>

    </>)
}
