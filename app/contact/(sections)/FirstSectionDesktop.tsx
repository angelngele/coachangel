"use client";

import { useState } from "react";
import ContactButton from "../../components/ContactButton";

export default function FirstSectionDesktop() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative flex h-screen md:flex">
      {/* Left Side: Image */}
      <div className="w-1/2 relative">
        <img
          src="/images/edited1.1.jpg"
          alt="Growth and Success"
          className="w-full h-full object-cover"
        />
        {/* Overlay for Image (Left to Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/75"></div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-1/2 flex items-center justify-center p-10 relative text-white">
        {/* Overlay for Text (Darker) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/80"></div>

        {/* Text Content */}
        <div className="relative max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Let's Talk</h1>
          <p className="text-lg mb-6">
            I'm just one click away from mastering growth and success together.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          >
            Submit Quick Inquiry
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-xl"
            >
              ✖
            </button>

            {/* Contact Form Component */}
            <ContactButton />
          </div>
        </div>
      )}
    </div>
  );
}
