'use client';
import React from 'react';

export default function ImpactPage() {
    return (
        <main className="min-h-screen bg-white pt-36 px-6 md:px-20">
            {/* Section wrapper with rounded border */}
            <section className="max-w-6xl border border-dashed border-gray-200 rounded-3xl px-6 py-16 md:px-16 mx-auto">
                {/* Badge */}
                <div className="mb-4">
                    <span className="text-xs font-semibold bg-green-100 text-gray-600 px-3 py-1 rounded-full">
                        METRICS
                    </span>
                </div>

                {/* Heading + Subheading */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight">
                            Empowering Growth,
                            <br />
                            <span className="font-bold">One Life at a Time</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-md text-base md:text-lg">
                        I’m here to guide you toward tangible results — Sharper Clarity,
                        Stronger Confidence, and Career Breakthroughs.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center border-t border-gray-200 pt-12">
                    <div>
                        <h3 className="text-4xl font-bold text-gray-900">100+</h3>
                        <p className="text-green-500 font-semibold mt-2">LIVES TRANSFORMED</p>
                        <p className="text-gray-500 mt-2 text-sm">
                            Guided individuals to unlock clarity and achieve breakthroughs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-gray-900">99%</h3>
                        <p className="text-green-500 font-semibold mt-2">CLIENT SATISFACTION</p>
                        <p className="text-gray-500 mt-2 text-sm">
                            Delivering life-changing results through personalized coaching.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-gray-900">5+</h3>
                        <p className="text-green-500 font-semibold mt-2">YEARS OF EXPERTISE</p>
                        <p className="text-gray-500 mt-2 text-sm">
                            Empowering growth with proven strategies and real-world experience.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
