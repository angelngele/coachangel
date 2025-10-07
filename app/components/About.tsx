'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Button from './ui/Button';

export default function About() {
    return (
        <main className="min-h-screen flex flex-col -px-14 md:px-0 bg-white">
            {/* Tagline */}
            <div className="flex justify-center items-center tracking-wider mt-36 lg:mt-36 md:mt-20">
                <h1 className="bg-green-100 py-2 text-xs px-4 rounded-full font-medium text-gray-600">
                    LITTLE ABOUT ME
                </h1>
            </div>

            {/* Title */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 30, damping: 15 }}
                className="newsletter-container flex flex-col items-center mb-16 mx-6 lg:mx-28"
            >
                <div className="text-center mt-5 font-medium">
                    <p className="text-3xl sm:text-5xl newsletter-heading">
                        MEET YOUR COACH
                    </p>
                </div>
            </motion.div>

            {/* Main Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10 px-4 md:px-8"
            >
                {/* Image*/}
                <div className="relative w-full max-w-[400px] h-[650px]">
                    <Image
                        src="/Coach Angel_files/AboutMe.png"
                        alt="Coach Angel"
                        fill
                        className="object-cover rounded-xl"
                    />
                    {/* + Badge */}
                    <div className="absolute top-2 right-2 w-20 h-24 md:w-28 md:h-32">
                        <Image
                            src="/Coach Angel_files/top10bg.png"
                            alt="Top 10 Badge"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>



                {/* Bio */}
                <div className="flex-1 w-full flex flex-col justify-center px-0 md:pl-8 lg:pl-12">
                    <div className="text-gray-700 space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>Hi, I&apos;m Angel Ngele, a self-improvement strategist and career coach passionate about helping individuals unlock clarity, confidence, and fulfillment.</p>
                        <p>My journey began with a simple yet profound question: <em>How can I be truly happy?</em> What I discovered was that fulfillment isn&apos;t something you find, it&apos;s something you create. Through years of mindfulness, journaling, and self-discovery, I transformed my own life and now empower others to do the same.</p>
                        <p>Having collaborated with global brands like Nestlé and guided professionals in leadership and personal development, I&apos;ve seen firsthand how powerful growth can be when paired with the right mindset and tools. Today, I dedicate my work to helping driven individuals like you overcome challenges, embrace purpose, and achieve meaningful breakthroughs.</p>
                        <p>
                            Ready to explore what&apos;s possible?{' '}
                            <Link
                                href={"https://calendly.com/theangelngele"} target="_blank"
                                rel="noopener noreferrer">
                                <span className="text-green-300 font-semibold">Let&apos;s connect.</span>
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                        <Link
                            href={"/about"} target="_blank"
                            rel="noopener noreferrer">
                            <Button className="group relative flex items-center justify-center w-full sm:w-[220px] px-6 py-2 rounded-full border border-black bg-black text-white text-lg transition-all duration-500 ease-in-out   hover:border-green-200 overflow-hidden">
                                {/* Text */}
                                <span className="transition-all duration-500 transform group-hover:-translate-x-10">
                                    Know more
                                </span>
                                {/* Arrow */}
                                <span className="absolute right-6 opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                    →
                                </span>
                            </Button>
                        </Link>
                    </div>

                </div>
            </motion.section>

        </main >
    );
}
