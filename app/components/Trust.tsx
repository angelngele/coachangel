'use client';
import React, { useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Sienna Hewitt',
        title: 'CEO, Tech Innovations',
        text: 'Her imaginative and pragmatic approach to web creation has assisted me in creating websites that are both aesthetically pleasing and useful.',
        image: 'https://i.pravatar.cc/100?img=41',
    },
    {
        name: 'Liam Torres',
        title: 'Founder, CreativHub',
        text: 'Angel’s guidance helped me unlock clarity and purpose in my leadership strategy.',
        image: 'https://i.pravatar.cc/100?img=42',
    },
    {
        name: 'Ava Johnson',
        title: 'Product Manager, FlowTech',
        text: 'Working with her was a transformational experience — especially around mindset and confidence.',
        image: 'https://i.pravatar.cc/100?img=43',
    },
    {
        name: 'Noah Adams',
        title: 'Lead Developer, NovaCore',
        text: 'Her coaching is both practical and inspiring. It challenged me to grow in ways I didn’t expect.',
        image: 'https://i.pravatar.cc/100?img=44',
    },
    {
        name: 'Olivia Carter',
        title: 'Entrepreneur',
        text: 'From career clarity to public speaking, every session left me empowered and equipped.',
        image: 'https://i.pravatar.cc/100?img=45',
    },
];

export default function TestimonialCarousel() {
    const x = useMotionValue(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxOffset = -1000; // limit how far it scrolls left
            const newOffset = Math.max(maxOffset, -scrollY * 0.6);
            animate(x, newOffset, { duration: 0.4 });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [x]);

    return (
        <section className="relative bg-white min-h-[150vh] py-32">
            {/* Heading */}
            <div className="text-center mb-14 px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Trusted by Professionals
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                    Clients from all walks of life have transformed their careers and confidence
                    through my coaching. Hear their stories of growth and success.
                </p>
            </div>

            {/* Horizontal Carousel */}
            <div className="relative overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex min-w-[3000px] space-x-6 px-6"
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-green-100 p-6 rounded-2xl min-w-[320px] max-w-sm flex-shrink-0 shadow-md"
                        >
                            <div className="flex space-x-1 mb-4">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <span key={i} className="text-green-600 text-lg">★</span>
                                    ))}
                            </div>
                            <p className="text-gray-800 font-medium mb-6">{testimonial.text}</p>
                            <hr className="mb-4 border-green-200" />
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    height={40}
                                    width={40}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
