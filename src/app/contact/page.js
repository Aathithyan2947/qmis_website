import React from "react";

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-red-700 mb-6">General Enquiry</h2>

        {/* FORM + IMAGE SECTION */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT FORM */}
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="border w-full p-2 rounded"
                placeholder="Enter your name"
              />
            </div>

            {/* Email + Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="border w-full p-2 rounded"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Mobile Number <span className="text-red-600">*</span>
                </label>
                <div className="flex border rounded overflow-hidden">
                  <span className="px-3 bg-gray-100 flex items-center">🇮🇳 +91</span>
                  <input
                    type="text"
                    className="p-2 w-full outline-none"
                    placeholder="Enter Number Here"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="border w-full p-2 rounded"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                rows="4"
                className="border w-full p-2 rounded"
                placeholder="Your message"
              ></textarea>
            </div>

            {/* Captcha */}
            <div className="flex items-center gap-3 border p-3 rounded">
              <input type="checkbox" className="h-5 w-5" />
              <span>I am human</span>
              <div className="ml-auto">
                <div className="w-24 h-10 bg-gray-200 flex items-center justify-center text-xs rounded">
                  hCaptcha
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded shadow hover:bg-blue-800"
            >
              SUBMIT
            </button>
          </form>

          {/* RIGHT IMAGE + APPLY BUTTON */}
          <div className="flex flex-col items-center justify-start">
            <div className="w-full h-64 bg-gray-300 rounded"></div>

            <button className="mt-6 bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800">
              Apply Now
            </button>
          </div>
        </div>
      </div>


      {/* FOOTER */}
      <div className="bg-blue-900 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-3xl mb-4">📞</div>
          <p className="text-lg font-semibold">+91 96557 77000</p>
          <p className="text-lg font-semibold mb-6">+91 97875 70746</p>

          <p className="text-sm">
            <span className="font-bold">Address</span> Sholavandhan Road,
            Melakkal Road kochadai, Madurai, Tamil Nadu, 625019
          </p>

          <p className="text-sm mt-2">
            <span className="font-bold">Email</span> contact@queenmira.com
          </p>
        </div>
      </div>
      {/* GOOGLE MAP SECTION */}
      <div className="w-full mt-10">
        <iframe
          title="School Location Map"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3385.7174162986807!2d78.06721842708833!3d9.94930638278185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b00cf295cdadddd%3A0x9ea7866071b1aa99!2sW3X8%2BJM7%20Queen%20Mira%20International%20School%20(CBSE%20with%20CIS%20Accredtion)%2C%20Madurai%2C%20Sholavandhan%20Road%2C%20Melakkal%20Rd%2C%20Kochadai%2C%20Madurai%2C%20Tamil%20Nadu%20625019%2C%20India!3m2!1d9.949084!2d78.0696864!5e0!3m2!1sen!2sus!4v1765033188818!5m2!1sen!2sus"
          className="w-full h-[400px] md:h-[500px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
       </div>

    </div>
  );
}
