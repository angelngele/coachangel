"use client";

import { useState } from "react";
import ContactButton from "../../components/ContactButton";

export default function FirstSectionMobile() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div
            className="relative flex flex-col h-screen md:hidden items-center justify-center p-10 text-white"
            style={{
                backgroundImage: "url('/images/edited1.1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay for Mobile (Darker Background) */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Text Content */}
            <div className="relative max-w-lg text-center">
                <h1 className="text-4xl font-bold mb-4">Let's Talk</h1>
                <p className="text-lg mb-6">
                    I'm just one click away from mastering growth and success together.
                </p>
                <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                >
                    Submit Quick Inquiry
                </button>
            </div>

            {/* Modal Form */}
            {showForm && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative max-h-[80vh] overflow-y-auto">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
                        >
                            ✖
                        </button>

                        {/* Contact Form Component */}
                        <ContactButton />
                    </div>
                </div>
            )}

        </div>
    );
}
