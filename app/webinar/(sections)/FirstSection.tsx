"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { trustedByImages } from "../../utils/index"; // Import the images
import Link from "next/link";

export default function FirstSection() {
  return (
    <main>
      <div className="flex justify-center items-center tracking-wider mt-12 lg:mt-36">
        <h1 className="bg-green-100 py-2 text-xs px-4 rounded-full font-medium text-gray-600">
          WEBINARS AND SPEAKING
        </h1>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, damping: 15 }}
        className="flex flex-col items-center mb-16 lg:mx-28"
      >
        <div className="text-center mt-5 font-medium">
          <p className="text-3xl sm:text-5xl">
            <span>Empowering growth,</span>
            <span className="block">resilience, and impactful</span>
            <span>leadership.</span>
          </p>
        </div>
      </motion.div>

      <div className="flex items-center justify-center gap-5 mt-5 text-xs">
        <span className="border border-gray-500 bg-gray-500 text-white px-2 py-1 rounded-full">
          PUBLIC SPEAKING
        </span>
        <span className="border border-gray-500 bg-gray-500 text-white px-2 py-1 rounded-full">
          CAREER GROWTH
        </span>
        <span className="border border-gray-500 bg-gray-500 text-white px-3 py-1 rounded-full">
          LEADERSHIP
        </span>
      </div>

      {/* Video Section */}
      <div className="flex justify-center items-center mt-10 px-4 sm:px-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          width="640"
          height="640"
          className="rounded-3xl shadow-3xl"
        >
          <source src="/assets/AngelVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second Text Section */}
      <div className="flex items-center justify-center mt-6 sm:mt-14 text-xl font-medium text-center">
        <p>
          <span>
            Elevate your team event with Angel&#39;s transformative workshops on
            leadership,
          </span>
          <span className="block">
            public speaking, and mindset. Inspire growth, ignite innovation, and
            empower
          </span>
          <span>lasting resilience.</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10 space-y-5 md:space-y-0">
        <Link href={"/contact"}>
          <span className="border border-slate-900 bg-slate-900 text-white py-2 px-5 rounded-full">
            Inquire Now
          </span>
        </Link>
        <Link href={"/documents/Angel Ngele - Speaker Brief.pdf"}>
          <span className="border border-green-200 bg-green-200 text-black py-2 px-5 rounded-full">
            Speaker Profile
          </span>
        </Link>
      </div>

      <div className="flex justify-center items-center tracking-wider mt-12 lg:mt-36">
        <h1 className="bg-green-100 py-2 text-xs px-4 rounded-full font-medium text-gray-600">
          TRUSTED BY
        </h1>
      </div>

      {/* Images Section */}
      <div className="flex justify-center items-center gap-10 mt-6 flex-wrap">
        {trustedByImages.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} width={140} height={60} />
        ))}
      </div>
    </main>
  );
}
