"use client";

import { useState } from "react";
import ContactButton from "../../components/ContactButton";
import Image from "next/image";

export default function FirstSectionDesktop() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative w-full h-screen flex items-center justify-end px-16 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 mt-16">
        <Image
          src="/images/Angel Ngele (30).png"
          alt="Growth and Success"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-xl text-center mt-20 pr-20">
        <h1 className="text-5xl font-bold mb-6">Let&#39;s Talk</h1>
        <p className="text-lg mb-8">
          I&#39;m just one click away from mastering growth and success together.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-green-500 font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Submit Quick Inquiry
        </button>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 px-4">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-600 text-7xl"
              title="Close"
            >
              &times;
            </button>

            {/* Contact Form */}
            <ContactButton />
          </div>
        </div>
      )}
    </div>
  );
}
