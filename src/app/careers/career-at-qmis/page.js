'use client';

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { useState, useRef } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function CareerAtQmis() {
  // API configuration
  const API_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api/careers'
    : 'https://qmis-dashboard.vercel.app/api/careers';

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    education_qualification: '',
    gender: 'Male',
    address: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle phone input
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    setFormData(prev => ({ ...prev, phone: value }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  // File upload functions
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }));
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }));
      }
    }
  };

  const handleBoxClick = () => {
    if (!loading) {
      fileInputRef.current.click();
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = "";
    if (errors.resume) {
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (formData.phone.replace(/\D/g, '').length !== 10) {
      newErrors.phone = 'Enter valid 10-digit number';
    }
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.education_qualification.trim()) newErrors.education_qualification = 'Education qualification is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    if (!selectedFile) {
      newErrors.resume = 'Resume file is required';
    } else {
      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'application/rtf'
      ];

      if (!allowedTypes.includes(selectedFile.type)) {
        newErrors.resume = 'Invalid file type. Allowed: PDF, DOC, DOCX, TXT, RTF';
      }

      // Check file size (10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        newErrors.resume = 'File size too large. Maximum size is 10MB';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Format phone display
  const formatPhoneDisplay = (phone) => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix all errors in the form');
      return;
    }

    setLoading(true);

    try {
      // Create FormData
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('email', formData.email.trim());
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position.trim());
      formDataToSend.append('education_qualification', formData.education_qualification.trim());
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('address', formData.address.trim());
      formDataToSend.append('resume', selectedFile);

      console.log('Submitting to:', API_URL);

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Application submitted successfully!');
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          resetForm();
        }, 3000);

      } else {
        toast.error(result.error || 'Submission failed');
      }

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      education_qualification: '',
      gender: 'Male',
      address: '',
    });
    setSelectedFile(null);
    setSubmitted(false);
    setErrors({});
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Success screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for applying to Queen Mira International School.
            We will review your application and contact you soon.
          </p>
          <button
            onClick={resetForm}
            className="bg-darkBlue-100 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors font-medium"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  const sec = [
    { img: "/career-guidance/8.png", title: "Martial Arts" },
    { img: "/career-guidance/9.png", title: "Non - Academics Department" },
  ];

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
              { img: "/career-guidance/Pic_11.png", title: "Sports" },
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
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter Name"
              disabled={loading}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter Email"
              disabled={loading}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className={`flex border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}>
              <span className="px-3 flex items-center bg-gray-100">🇮🇳 +91</span>
              <input
                type="text"
                name="phone"
                value={formatPhoneDisplay(formData.phone)}
                onChange={handlePhoneChange}
                className="p-2 flex-1 focus:outline-none"
                placeholder="Enter Number Here"
                disabled={loading}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Position */}
          <div className="flex flex-col">
            <label className="font-medium">
              Position <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.position ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter Position"
              disabled={loading}
            />
            {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
          </div>

          {/* Education Qualification */}
          <div className="flex flex-col">
            <label className="font-medium">
              Education Qualification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="education_qualification"
              value={formData.education_qualification}
              onChange={handleChange}
              className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.education_qualification ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter Qualification"
              disabled={loading}
            />
            {errors.education_qualification && <p className="text-red-500 text-xs mt-1">{errors.education_qualification}</p>}
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="font-medium">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Address (Full Width) */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter Address"
              disabled={loading}
            ></textarea>
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          {/* Modern File Upload Component */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium mb-2">
              Upload Your Resume <span className="text-red-500">*</span>
            </label>

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileSelect}
              accept=".pdf,.doc,.docx,.txt,.rtf"
              disabled={loading}
            />

            {/* Upload Box */}
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200
                ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'}
                ${selectedFile ? 'border-green-300 bg-green-50' : ''}
                ${errors.resume ? 'border-red-500' : ''}
                ${loading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
              `}
              onClick={handleBoxClick}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {selectedFile ? (
                // Selected file display (like Gmail)
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>

                  <div className="text-center">
                    <p className="font-medium text-gray-800">{selectedFile.name}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatFileSize(selectedFile.size)} • {selectedFile.type?.split('/')[1]?.toUpperCase() || 'Unknown type'}
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBoxClick();
                      }}
                      className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors disabled:opacity-50"
                      disabled={loading}
                    >
                      Change File
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="px-4 py-2 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors disabled:opacity-50"
                      disabled={loading}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                // Default upload state
                <>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="mb-2">
                    <p className="font-medium text-gray-700">
                      <span className="">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      PDF, DOC, DOCX, TXT, RTF (Max 10MB)
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">PDF</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">DOC</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">DOCX</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">TXT</span>
                  </div>
                </>
              )}
            </div>

            {/* Helper text */}
            {errors.resume ? (
              <p className="text-red-500 text-xs mt-2">{errors.resume}</p>
            ) : (
              <p className="text-xs text-gray-500 mt-2">
                Accepted file types: PDF, DOC, DOCX, TXT, RTF. Maximum file size: 10MB.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-darkBlue-100 text-white px-6 py-3 rounded shadow hover:bg-gray-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  SUBMITTING...
                </>
              ) : (
                'SUBMIT APPLICATION'
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
