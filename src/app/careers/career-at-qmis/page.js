'use client';

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { useState, useRef } from "react";

export default function CareerAtQmis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
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
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = "";
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

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
            />

            {/* Upload Box */}
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200
                ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'}
                ${selectedFile ? 'border-green-300 bg-green-50' : ''}
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
                      {formatFileSize(selectedFile.size)} • {selectedFile.type || "Unknown type"}
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBoxClick();
                      }}
                      className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                    >
                      Change File
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="px-4 py-2 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
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
            <p className="text-xs text-gray-500 mt-2">
              Accepted file types: PDF, DOC, DOCX, TXT, RTF. Maximum file size: 10MB.
            </p>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-darkBlue-100 text-white px-6 py-3 rounded shadow hover:bg-gray-800 transition-colors font-medium"
            >
              SUBMIT APPLICATION
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
