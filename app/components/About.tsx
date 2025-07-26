'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export default function About() {
    return (
        <main className="min-h-screen pt-36 px-6 md:px-20 bg-white">
            {/* Tagline */}
            <div className="flex justify-center items-center tracking-wider mt-36 lg:mt-36 md:mt-20">
                <h1 className="bg-green-100 py-2 text-xs px-4 rounded-full font-medium text-gray-600">
                    LITTLE ABOUT ME
                </h1>
            </div>

            {/* Motion section for the rest of the content */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 30, damping: 15 }}
                className="newsletter-container flex flex-col items-center mb-16 mx-6 lg:mx-28"
            >
                <div className="text-center mt-5 font-medium">
                    <p className="text-3xl sm:text-5xl newsletter-heading">
                        MEET YOUR COACH
                        {/* <span>Let&#39;s Level Up Your</span>
                        <span className="block">Growth Game</span> */}
                    </p>
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10"
            >
                {/* Profile Image with Badge Overlay */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-[1000px] aspect-[1/1]">
                        <Image
                            src="/Coach Angel_files/AboutMe.png"
                            alt="Coach Angel"
                            fill
                            className="object-cover rounded-xl"
                        />
                        <div className="absolute top-0 right-0 w-24 h-28 md:w-28 md:h-32">
                            <Image
                                src="/Coach Angel_files/Top100.png"
                                alt="Top 100 Badge"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Bio */}
                <div className="flex-1 self-stretch flex flex-col justify-center pl-6 md:pl-12 lg:pl-20">
                    <div className="text-gray-700 space-y-6 text-lg md:text-xl leading-relaxed">
                        <p>
                            Hi, I’m Angel Ngele — a self-improvement strategist and career coach passionate about helping individuals unlock clarity, confidence, and fulfillment.
                        </p>
                        <p>
                            My journey began with a simple yet profound question: <em>How can I be truly happy?</em> What I discovered was that fulfillment isn’t something you find — it’s something you create. Through years of mindfulness, journaling, and self-discovery, I transformed my own life and now empower others to do the same.
                        </p>
                        <p>
                            Having collaborated with global brands like Nestlé and guided professionals in leadership and personal development, I’ve seen firsthand how powerful growth can be when paired with the right mindset and tools. Today, I dedicate my work to helping driven individuals like you overcome challenges, embrace purpose, and achieve meaningful breakthroughs.
                        </p>
                        <p>
                            Ready to explore what’s possible?{' '}
                            <span className="text-green-300 font-semibold">Let’s connect.</span>
                        </p>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
