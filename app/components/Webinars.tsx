'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
import Image from 'next/image'
import AnimatedButton from './ui/AnimatedButton';


const features = [
    {
        title: 'Public Speaking',
        description:
            'Master impactful communication and captivate any audience with confidence.',
        icon: '/icons/Public_Speaking-removebg-preview.png',
        bg: 'bg-green-200',
    },
    {
        title: 'Career Growth',
        description:
            'Accelerate your success with strategies to thrive and advance in any industry.',
        icon: '/icons/Growth-removebg-preview.png',
        bg: 'bg-green-300',
    },
    {
        title: 'Leadership',
        description:
            'Unlock your potential to lead with vision, authenticity, and influence.',
        icon: '/icons/Leadership-removebg-preview.png',
        bg: 'bg-green-400',
    },
];

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
                className="flex flex-col items-center mb-10 lg:mx-28"
            >
                <div className="text-center mt-5 font-medium mx-5">
                    <p className="text-3xl sm:text-5xl">
                        Empowering growth, resilience, and impactful leadership.
                    </p>
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="min-w-[350px] mx-auto flex flex-col lg:flex-row items-center gap-20"
            >
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-center -mx-10 sm:-mx-10 -px-14 sm:-px-14">
                    <div className="text-gray-700 space-y-10 text-lg md:text-xl leading-relaxed mx-10 sm:mx-0">
                        <p className='mx-5 sm:mr-36'>
                            Elevate your team event with Angel&apos;s transformative workshops on leadership,
                            public speaking, and mindset. Inspire growth, ignite innovation, and empower
                            lasting resilience.
                        </p>

                        {/* Keynote Topics */}
                        <div className="mx-5">
                            <p className="pb-0 lg:pb-10">KEYNOTE TOPICS -</p>
                        </div>
                        <div className="space-y-8">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start space-x-4 mx-3">
                                    {/* Icon with bg */}
                                    <div
                                        className={`w-[100px] h-10 mt-2 flex items-center justify-center rounded-full}`}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                            className="object-contain h-200 w-3000"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className='my-0 lg:my-2'>
                                        <h4 className="font-semibold text-gray-900 mt-0 md:-mt-5">{item.title}</h4>
                                        <p className="text-bold text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-6 flex flex-col items-center sm:flex-row sm:justify-start gap-4 mx-8">
                            <Link href="/contact">
                                <AnimatedButton className="bg-black text-white px-14 py-3 rounded-full text-sm hover:opacity-90">
                                    Inquire Now
                                </AnimatedButton>
                            </Link>
                            <Link
                                href="https://drive.google.com/file/d/1x6pu2mk98Xrad3pJhBFBxcVR_6xtwD1z/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AnimatedButton className="bg-green-200 text-black px-14 py-3 rounded-full text-sm hover:bg-green-300">
                                    Speaker Profile
                                </AnimatedButton>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Video Section */}
                <div className="video-wrapper mt-0 sm:mt-44">
                    <div className="rounded-xl h-140 scroll overflow-hidden shadow-md">
                        <video
                            src="/assets/video/AngelVideo.mp4"
                            muted
                            autoPlay
                            loop
                            playsInline
                            className="video-el"
                        />
                    </div>

                </div>
            </motion.section>
        </main >
    );
}
