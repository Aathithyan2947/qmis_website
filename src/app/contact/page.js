'use client';

import { PhoneCall } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export default function ContactPage() {
  const APPLY_NOW_URL =
    "https://admissions.qmis.edu.in/?utm_source=Website&utm_medium=popup_form&utm_campaign=BBC&_gl=1%2A11hbug0%2A_ga%2AMTIyNDc1NDU3Ni4xNzY1MDQ3MzAx%2A_ga_K5HD0P2MHT%2AczE3NjU2NDQ5NTkkbzkkZzEkdDE3NjU2NDYwNTEkajYwJGwwJGgw";
  // API configuration
  const API_BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://qmis-dashboard.vercel.app/api'
    : 'http://localhost:3001/api';

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    captcha: false
  });

  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleApplyNow = () => {
    window.open(APPLY_NOW_URL, "_blank", "noopener,noreferrer");
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Captcha validation
    if (!formData.captcha) {
      newErrors.captcha = "Please confirm you are human";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    try {
      // Prepare data for API
      const contactData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: `+91${formData.phone.replace(/\D/g, '')}`,
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      console.log('Sending contact data:', contactData);
      console.log('API URL:', `${API_BASE_URL}/contacts`);

      // Send POST request to backend API
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success - show success message and reset form
        toast.success("Thank you for contacting us! We'll get back to you soon.");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          captcha: false
        });

        // Clear errors
        setErrors({});

      } else {
        // Handle API errors
        const errorMessage = result.error || result.message || "Failed to submit form. Please try again.";
        toast.error(errorMessage);

        // Set server-side errors if provided
        if (result.errors) {
          setErrors(result.errors);
        }
      }

    } catch (error) {
      console.error('Submission error:', error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Phone input formatting
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 10) value = value.slice(0, 10); // Limit to 10 digits
    setFormData(prev => ({
      ...prev,
      phone: value
    }));

    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };


  // Format phone number for display
  const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(6, 10)}`;
  };

  return (
    <div className="w-full bg-grid-dots">
      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-red-700 mb-6">General Enquiry</h2>

        {/* FORM + IMAGE SECTION */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`border w-full p-2 rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your name"
                disabled={loading}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email + Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`border w-full p-2 rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter email"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Mobile Number <span className="text-red-600">*</span>
                </label>

                <div className={`flex border rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-gray-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}>
                  <span className="px-4 bg-gray-100 flex items-center text-sm font-medium text-gray-700 border-r">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formatPhoneNumber(formData.phone)}
                    onChange={handlePhoneChange}
                    className="p-2 w-full outline-none text-sm"
                    placeholder="Enter 10-digit number"
                    disabled={loading}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`border w-full p-2 rounded ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Subject"
                disabled={loading}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`border w-full p-2 rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your message"
                disabled={loading}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Captcha */}
            <div className={`flex items-center gap-3 border p-3 rounded ${errors.captcha ? 'border-red-500' : 'border-gray-300'}`}>
              <input
                type="checkbox"
                name="captcha"
                checked={formData.captcha}
                onChange={handleChange}
                className="h-5 w-5"
                disabled={loading}
              />
              <span>I am human</span>
              <div className="ml-auto">
                <div className="w-24 h-10 bg-gray-200 flex items-center justify-center text-xs rounded">
                  hCaptcha
                </div>
              </div>
            </div>
            {errors.captcha && (
              <p className="text-red-500 text-xs -mt-2">{errors.captcha}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-darkBlue-100 text-white px-6 py-2 rounded shadow hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4" />
                  SUBMITTING...
                </>
              ) : (
                'SUBMIT'
              )}
            </button>
          </form>

          {/* RIGHT IMAGE + APPLY BUTTON */}
          <div className="flex flex-col items-center justify-start">
            <div className="w-full h-96">
              <img
                src="/contact.png"
                alt="Card image"
                className="w-full h-full rounded object-contain"
              />
            </div>

            <button
              onClick={handleApplyNow}
              disabled={loading}
              className="mt-6 bg-maroon-100 text-white px-6 py-2 rounded hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-darkBlue-100 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center text-3xl mb-4">
            <PhoneCall />
          </div>
          <p className="text-lg font-semibold">
            <a href="tel:+919655777000" className="hover:text-red-400 transition">+91 96557 77000</a>
          </p>
          <p className="text-lg font-semibold mb-6">
            <a href="tel:+919787570746" className="hover:text-red-400 transition">+91 97875 70746</a>
          </p>

          <p className="text-sm">
            <span className="font-bold">Address</span> Sholavandhan Road,
            Melakkal Road kochadai, Madurai, Tamil Nadu, 625019
          </p>

          <p className="text-sm mt-2">
            <span className="font-bold">Email</span>{" "}
            <a href="mailto:contact@queenmira.com" className="hover:text-red-400 transition">contact@queenmira.com</a>
          </p>
        </div>
      </div>

      {/* GOOGLE MAP SECTION */}
      <div className="w-full mt-10">
        <iframe
          title="School Location Map"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3385.7174162986807!2d78.06721842708833!3d9.94930638278185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b00cf295cdadddd%3A0x9ea7866071b1aa99!2sW3X8%2BJM7%20Queen%20Mira%20International%20School%20(CBSE%20with%20CIS%20Accredtion)%2C%20Madurai%20Sholavandhan%20Road%2C%20Melakkal%20Rd%2C%20Kochadai%2C%20Madurai%2C%20Tamil%20Nadu%20625019%2C%20India!3m2!1d9.949084!2d78.0696864!5e0!3m2!1sen!2sus!4v1765033188818!5m2!1sen!2sus"
          className="w-full h-[400px] md:h-[500px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
