"use client";
import React from "react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
            <div className="flex flex-col items-center space-y-6 text-center">
                {/* Elegant Spinner */}
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-3 border-4 border-emerald-400 border-b-transparent rounded-full animate-spin-slow"></div>
                </div>

                {/* Motivational Text */}
                <div className="space-y-2">
                    <p className="text-emerald-400 text-2xl font-semibold tracking-wide animate-pulse">
                        Preparing your growth journey...
                    </p>
                    <p className="text-gray-400 text-sm max-w-md">
                        Great things take a moment — we’re getting things ready for you.
                    </p>
                </div>
            </div>
        </div>
    );
}
