"use client";

import { useState } from "react";
import ContactButton from "../../components/ContactButton";
import Image from "next/image";

export default function FirstSectionMobile() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/MobileView design (31).png"
                    alt="Angel Ngele"
                    fill
                    priority
                    className="object-cover w-full h-full"  // Ensure full width and height
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[90%] px-4 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Let&#39;s Talk</h1>
                <p className="text-base sm:text-lg mb-6">
                    I&#39;m just one click away from mastering growth and success together.
                </p>
                <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                >
                    Submit Quick Inquiry
                </button>
            </div>

            {/* Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 px-4">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto relative">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-3 right-4 text-gray-600 hover:text-red-600 text-2xl"
                        >
                            &times;
                        </button>

                        {/* Contact Form */}
                        <ContactButton />
                    </div>
                </div>
            )}
        </div>
    );
}
