'use client';
import { motion } from 'framer-motion';
import React from 'react';

const services = [
    {
        title: 'Public Speaking',
        points: [
            'Build confidence on stage.',
            'Craft impactful presentations.',
            'Manage stage fright effectively.',
            'Master storytelling techniques.',
            'Deliver persuasive messages.',
        ],
    },
    {
        title: 'Leadership Development',
        points: [
            'Develop key leadership skills.',
            'Motivate and empower teams.',
            'Enhance decision-making.',
            'Cultivate emotional intelligence.',
            'Tackle challenges strategically.',
        ],
    },
    {
        title: 'Career Growth Coaching',
        points: [
            'Define clear career goals.',
            'Strengthen your personal brand.',
            'Navigate professional challenges.',
            'Unlock growth opportunities.',
            'Transition roles with ease.',
        ],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-44 px-6 md:px-10 bg-white">
            {/* Section Badge */}
            <div className="text-center">
                <span className="bg-green-100 text-xs md:text-sm font-semibold text-gray-600 px-5 py-2 rounded-full tracking-wide">
                    SERVICES
                </span>
            </div>

            {/* Heading */}
            <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-center mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-snug"
            >
                Ways in which I can{' '}
                <span className="relative inline-block">
                    help you
                    <span className="block h-[6px] bg-green-300 w-full absolute bottom-1 left-0 rounded-full z-[-1]" />
                </span>
            </motion.h2>

            {/* Cards */}
            <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-green-50 rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Icon placeholder */}
                        <div className="w-10 h-10 rounded-xl bg-green-200 mb-4" />

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">
                            {service.title}
                        </h3>

                        {/* Bullet Points */}
                        <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2 mb-8">
                            {service.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                        {/* Buttons */}
                        <div className="space-y-3 mt-auto">
                            <button className="w-full bg-black text-white py-3 text-base rounded-full hover:opacity-90 transition">
                                Know more
                            </button>
                            <button className="w-full bg-green-200 text-black py-3 text-base rounded-full hover:bg-green-300 transition">
                                Schedule a Call
                            </button>
                        </div>
                    </motion.div>
                ))}
            </section>
        </main>
    );
}
