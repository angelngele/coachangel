'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Button from './ui/Button';

export default function About() {
  return (
    <main className="flex flex-col justify-center items-center bg-white mt-20">
      {/* Tagline */}
      <div className="flex justify-center items-center tracking-wider mt-0 md:mt-20 mb-5 md:mb-10">
        <h1 className="bg-green-100 py-2 text-xs px-4 rounded-full font-medium text-gray-600">
          LITTLE ABOUT ME
        </h1>
      </div>

      {/* Title */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 30, damping: 15 }}
        className="flex flex-col items-center mb-12 md:mb-16 mx-6 lg:mx-28 text-center"
      >
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
          MEET YOUR COACH
        </p>
      </motion.div>

      {/* Main Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          flex flex-col lg:flex-row justify-center
          items-center lg:items-start
          gap-10 md:gap-5 sm:gap-5 lg:gap-5
          w-full
          px-4 md:px-32
          mb-20
        "
      >
        {/* Image (on top for mobile, left for desktop) */}
        {/* Image + Badge Wrapper */}
        <div className="relative w-full max-w-[450px] md:max-w-[700px] h-[400px] md:h-[700px] flex-shrink-0">
          <Image
            src="/Coach Angel_files/AboutMe.png"
            alt="Coach Angel"
            fill
            className="object-cover rounded-xl"
          />

          {/* Badge */}
          <div className="absolute top-42 right-20 md:top-14 md:right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
            <Image
              src="/Coach Angel_files/top10bg.png"
              alt="Top 10 Badge"
              fill
              className="object-contain"
            />
          </div>
        </div>



        {/* Bio */}
        <div className="flex-1 w-full flex flex-col justify-center items-center text-left lg:text-left h-[700px] sm:h-[500px] lg:h-[700px]">
          <div className="text-gray-700 space-y-5 justify-center items-center text-lg md:text-xl leading-relaxed overflow-y-auto">
            <p>
              Hi, I&apos;m Angel Ngele, a self-improvement strategist and career
              coach passionate about helping individuals unlock clarity,
              confidence, and fulfillment.
            </p>
            <p>
              My journey began with a simple yet profound question:{' '}
              <em>How can I be truly happy?</em> What I discovered was that
              fulfillment isn&apos;t something you find, it&apos;s something you
              create. Through years of mindfulness, journaling, and
              self-discovery, I transformed my own life and now empower others
              to do the same.
            </p>
            <p>
              Having collaborated with global brands like Nestlé and guided
              professionals in leadership and personal development, I&apos;ve
              seen firsthand how powerful growth can be when paired with the
              right mindset and tools. Today, I dedicate my work to helping
              driven individuals like you overcome challenges, embrace purpose,
              and achieve meaningful breakthroughs.
            </p>
            <p>
              Ready to explore what&apos;s possible?{' '}
              <Link
                href="https://calendly.com/theangelngele"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-green-400 font-semibold hover:underline">
                  Let&apos;s connect.
                </span>
              </Link>
            </p>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-8">
            <Link href="/about" target="_blank" rel="noopener noreferrer">
              <Button className="group relative flex items-center justify-center w-full sm:w-[220px] px-6 py-2 rounded-full border border-black bg-black text-white text-lg transition-all duration-500 ease-in-out hover:border-green-200 overflow-hidden">
                <span className="transition-all duration-500 transform group-hover:-translate-x-10">
                  Know more
                </span>
                <span className="absolute right-6 opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  →
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
