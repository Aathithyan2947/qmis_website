"use client";

import { useEffect, useState } from "react";

export default function EnquiryDialog({ open, onClose, enquiryFor }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    activityType: enquiryFor || "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Reset form when dialog opens
      setFormData({
        name: "",
        email: "",
        phone: "",
        activityType: enquiryFor || "",
        message: ""
      });
      setError("");
      setSuccess("");
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, enquiryFor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const API_BASE_URL = process.env.NODE_ENV === 'production'
        ? 'https://qmis-dashboard.vercel.app/api'
        : 'http://localhost:3001/api';

      const response = await fetch(`${API_BASE_URL}/after-school-activity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enquiry');
      }

      setSuccess('Enquiry submitted successfully!');

      // Reset form and close dialog after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          activityType: enquiryFor || "",
          message: ""
        });
        onClose();
      }, 2000);

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Error submitting enquiry:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#FAEECF] p-8 rounded-md shadow-lg">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-black"
          disabled={loading}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-center mb-6 text-[#1b234f]">
          Enquire Now
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
            required
            disabled={loading}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
            required
            disabled={loading}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
            required
            disabled={loading}
          />

          <select
            name="activityType"
            value={formData.activityType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
            required
            disabled={loading}
          >
            <option value="" disabled>
              Enquiry For
            </option>
            <option value="badminton">Badminton</option>
            <option value="kidz-gym">Kidz Gym</option>
            <option value="school-activities">School Activities</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none resize-none"
            disabled={loading}
          />

          <button
            type="submit"
            className="w-full bg-[#1b234f] text-white py-2 rounded-md font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'ENQUIRE NOW'}
          </button>
        </form>
      </div>
    </div>
  );
}
