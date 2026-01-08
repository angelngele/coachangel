'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

const services = [
    {
        title: 'Public Speaking',
        icon: '/icons/Public_Speaking-removebg-preview.png', // make sure this file exists in /public/icons
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
        icon: '/icons/Leadership-removebg-preview.png',
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
        icon: '/icons/Growth-removebg-preview.png',
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
        <main className="pt-20 px-6 md:px-10 bg-white">
            {/* Section Badge */}
            <div className="text-center">
                <span className="bg-green-100 text-xs md:text-sm font-semibold text-gray-600 px-5 py-2 rounded-full tracking-wider">
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
                    <span className="block h-1.5 bg-green-300 w-full absolute bottom-1 left-0 rounded-full z-[-1]" />
                </span>
            </motion.h2>

            {/* Cards */}
            <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-5">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-green-50 rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Icon */}
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={500}
                                height={500}
                                className="object-contain"
                            />
                        </div>

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
                            <Link
                                href="/webinar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="group relative flex items-center justify-center px-6 w-full bg-black text-white py-3 text-base rounded-full transition-all duration-500 ease-in-out hover:bg-gray-900 hover:cursor-pointer">
                                    <span className="transition-all duration-500 transform group-hover:-translate-x-10">
                                        Know more
                                    </span>
                                    <span className="absolute right-6 opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                        →
                                    </span>
                                </Button>
                            </Link>

                            <Link
                                href="https://calendly.com/theangelngele"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="group relative flex items-center justify-center px-6 w-full mt-5 bg-green-200 text-black py-3 text-base rounded-full transition-all duration-500 ease-in-out hover:bg-green-300 hover:cursor-pointer">
                                    <span className="transition-all duration-500 transform group-hover:-translate-x-10">
                                        Schedule a Call
                                    </span>
                                    <span className="absolute right-6 opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                        →
                                    </span>
                                </Button>
                            </Link>
                        </div>

                    </motion.div>
                ))}
            </section>
        </main>
    );
}
