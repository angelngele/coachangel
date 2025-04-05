"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { testimonials } from "../../utils/index"; // Import testimonials from utils
import { Star } from "lucide-react"; // Lucide-react for star icons
import Image from "next/image";

export default function Attendees() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const x = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

    return (
        <main ref={containerRef}>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 30, damping: 15 }}
                className="flex flex-col items-center mb-16 lg:mx-28"
            >
                <div className="text-center mt-20 font-medium">
                    <p className="text-3xl sm:text-5xl">What Attendees Are Saying</p>
                </div>
            </motion.div>

            <div className="flex justify-center items-center -mt-11 text-center font-normal">
                <p>
                    <span>Angel&#39;s webinars deliver real impact. Here&#39;s what attendees have </span>
                    <span className="block">to say about their experience</span>
                </p>
            </div>

            {/* Testimonials */}
            <div className="relative overflow-hidden mt-10">
                <motion.div style={{ x }} className="flex gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-[350px] p-6 bg-green-100 rounded-3xl shadow-md text-left flex flex-col"
                        >
                            {/* 5 Stars at the top-left */}
                            <div className="flex items-center gap-1 text-green-500 mb-5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            {/* Testimonial text &quot;*/}
                            <p className="text-lg font-medium mt-2 mb-10">{testimonial.text}</p>

                            {/* Horizontal line */}
                            <hr className="border-t border-black mb-5" />

                            {/* Person's Image, Name, and Title */}
                            <div className="flex items-center gap-4 mt-1 -mb-10">
                                <Image
                                    width={500}
                                    height={500}
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-md font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
