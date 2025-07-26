'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <main className="min-h-screen px-6 md:px-20 bg-white">
            {/* Section Tagline */}
            <div className="flex justify-center items-center tracking-wider mt-36">
                <h1 className="bg-green-100 py-2 text-xs px-4 rounded-full font-medium text-gray-600">
                    WEBINARS AND SPEAKING
                </h1>
            </div>

            {/* Animated Headline */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 30, damping: 15 }}
                className="flex flex-col items-center mb-16 mx-6 lg:mx-28"
            >
                <div className="text-center mt-5 font-medium">
                    <p className="text-3xl sm:text-5xl leading-tight px-4 sm:px-40">
                        Empowering growth, resilience, and impactful leadership.
                    </p>
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10"
            >
                {/* Text Section */}
                <div className="flex-1 self-stretch flex flex-col justify-center pr-6 md:pr-12 lg:pr-28">
                    <div className="text-gray-700 space-y-10 text-lg md:text-xl leading-relaxed">
                        <p >
                            Elevate your team event with Angel’s transformative workshops on leadership,
                            public speaking, and mindset. Inspire growth, ignite innovation, and empower
                            lasting resilience.
                        </p>

                        {/* Keynote Topics */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-4 h-4 bg-green-300 rounded-full mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Public Speaking</h4>
                                    <p className="text-sm text-gray-600">Master impactful communication and captivate any audience with confidence.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-4 h-4 bg-green-300 rounded-full mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Career Growth</h4>
                                    <p className="text-sm text-gray-600">Accelerate your success with strategies to thrive and advance in any industry.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-4 h-4 bg-green-300 rounded-full mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Leadership</h4>
                                    <p className="text-sm text-gray-600">Unlock your potential to lead with vision, authenticity, and influence.</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-6 flex flex-col sm:flex-row gap-4">
                            <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:opacity-90">
                                Inquire Now
                            </button>
                            <button className="bg-green-200 text-black px-6 py-3 rounded-full text-sm hover:bg-green-300">
                                Speaker Profile
                            </button>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-[1000px] h-[500px] rounded-xl overflow-hidden shadow-md">
                        <video
                            src="/assets/AngelVideo.mp4"
                            muted
                            autoPlay
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
