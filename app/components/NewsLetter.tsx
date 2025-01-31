"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupType, setPopupType] = useState<"success" | "error">("success");

    const handleSubscribe = async () => {
        if (!email) {
            setMessage("Please enter a valid email address.");
            setPopupType("error");
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setPopupType("success");
                setMessage("Subscription successful!");
                setEmail("");
            } else {
                setPopupType("error");
                setMessage(data.error || "Oops! Something went wrong.");
            }
        } catch (error) {
            setPopupType("error");
            setMessage("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 10000);
        }
    };

    return (
        <main>
            {/* Centered "NEWSLETTER" h1 */}
            <div className="flex justify-center items-center tracking-wider mt-24 lg:mt-36">
                <h1 className="bg-green-100 py-2 text-xs px-4 rounded-full font-medium text-gray-600">
                    NEWSLETTER
                </h1>
            </div>

            {/* Motion section for the rest of the content */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 30, damping: 15 }}
                className="newsletter-container flex flex-col items-center mb-16 mx-8 lg:mx-28"
            >
                <div className="text-center mt-5 font-medium">
                    <p className="text-4xl sm:text-5xl newsletter-heading">
                        <span>Let&#39;s Level Up Your</span>
                        <span className="block">Growth Game</span>
                    </p>
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center justify-center mx-6 lg:mx-20 mb-16 newsletter-content">
                {/* Image Section */}
                <div className="flex-[6] p-2 relative overflow-hidden lg:ml-12 ml-12 newsletter-image">
                    <img
                        src="/images/new (1).png"
                        alt="Newsletter Illustration"
                        className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute top-0 w-full h-full"></div>
                </div>

                {/* Text and Form Section */}
                <div className="flex-[12] mr-28 bg-green-100 rounded-3xl shadow-md newsletter-text">
                    <div className="px-5 py-5">
                        <div className="px-4">
                            <h1 className="text-2xl font-semibold mb-2 sm:pr-28 sm:mr-20 text-center sm:text-left">
                                One newsletter, straight from me to you. Countless breakthroughs. Join now for expert insights and updates!
                            </h1>
                            <p className="text-base text-gray-700 mb-4 sm:pr-24 sm:mr-28 text-center sm:text-left">
                                Weekly tips and strategies to boost your confidence, refine your skills, and find balance. Your growth journey starts here, don&#39;t miss out!
                            </p>
                        </div>
                        <div className="flex flex-col items-center sm:items-start space-y-3 pt-10 sm:pt-20">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@email.com"
                                className="w-full p-2 px-5 rounded-full border border-gray-300 focus:outline-none py-3 newsletter-input"
                            />
                            <button
                                className={`w-full bg-green-200 text-black py-2 px-5 rounded-full text-base font-medium flex justify-center items-center space-x-2 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                    } newsletter-button`}
                                onClick={handleSubscribe}
                                disabled={loading}
                            >
                                {loading ? <Loader2 className="animate-spin" /> : "Subscribe to Newsletter"}
                            </button>
                            {/* {message && (
                                <p className="text-center text-sm text-gray-700 mt-4">
                                    {message}
                                </p>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Notification */}
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        className="bg-white p-10 rounded-lg shadow-lg text-center relative"
                    >
                        {popupType === "success" ? (
                            <motion.div className="flex flex-col items-center justify-center text-center">
                                {/* Animated Circular Check Icon */}
                                <motion.div
                                    className="flex items-center justify-center border-4 border-green-500 rounded-full w-16 h-16 mb-4 relative"
                                    animate={{ scale: [0.9, 1, 0.9], opacity: [0.7, 1, 0.7] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <CheckCircle2 className="text-green-500 w-8 h-8" />
                                </motion.div>
                                <p className="text-xl font-semibold">
                                    Thank you! You're now part of the growth journey.
                                </p>
                                <p className="text-gray-600">Stay tuned for insights and updates.</p>

                                {/* Confetti Simulation */}
                                {/* <motion.div
                                    className="absolute top-0 -left-10 w-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    🎉✨💥🎊
                                </motion.div> */}
                            </motion.div>
                        ) : (
                            <motion.div className="flex flex-col items-center justify-center text-center">
                                <XCircle className="text-red-500 w-12 h-12 mb-4" />
                                <p className="text-xl text-red-500 font-semibold">
                                    Oops! Something went wrong.
                                </p>
                                <p className="text-gray-600">{message}</p>
                            </motion.div>)}
                    </motion.div>
                </motion.div>
            )}
        </main>
    );
}
