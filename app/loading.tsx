import React from "react";

export default function LoadingScreen() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="flex flex-col items-center space-y-6">
                {/* Animated Spinner */}
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-green-600 border-b-transparent rounded-full animate-spin-slow"></div>
                </div>

                {/* Pulsating Text */}
                <p className="text-green-600 text-xl font-bold animate-pulse">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
}