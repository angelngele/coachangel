"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupType, setPopupType] = useState<"success" | "error">("success");

    const handleSubscribe = async () => {
        if (!email || !email.includes("@")) {
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
                // Show the API message directly
                setMessage(data.message || "Subscription successful!");
                if (data.message !== "You are already subscribed.") {
                    setEmail(""); // Clear email only for new subscriptions
                }
            } else {
                setPopupType("error");
                setMessage(data.error || "Oops! Something went wrong.");
            }
        } catch {
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
            <div className="flex justify-center items-center tracking-wider mt-28 sm:mt-28 lg:mt-28 md:mt-24">
                <h1 className="bg-green-100 py-2 text-xs px-4 rounded-full font-medium text-gray-600">
                    NEWSLETTER
                </h1>
            </div>

            {/* Motion section for heading */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 30, damping: 15 }}
                className="flex justify-center flex-col items-center mb-16 mx-6 lg:mx-2"
            >
                <div className="text-center mt-5 font-medium">
                    <p className="text-3xl sm:text-5xl newsletter-heading">
                        <span>Let&#39;s Level Up Your</span>
                        <span className="block">Growth Game</span>
                    </p>
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 md:px-10 mb-12 justify-center items-center">
                {/* Image Section */}
                <div className="p-2 mb-8 lg:mb-0 shrink-0 w-full lg:w-105">
                    <Image
                        src="/images/new (1).png"
                        width={600}
                        height={600}
                        alt="Newsletter"
                        className="rounded-lg w-full max-w-full lg:w-102.5 h-auto lg:h-107.5"
                    />
                </div>

                {/* Text and Form Section */}
                <div className="bg-green-100 rounded-3xl py-6 sm:py-8 px-5 sm:px-8 md:px-10 w-full lg:max-w-3xl h-auto max-w-full">
                    <div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 pt-4 pb-2 leading-snug">
                            One newsletter, straight from me to you. Countless breakthroughs. Join now for expert insights and updates!
                        </h1>
                        <p className="text-sm sm:text-sm md:text-base text-gray-700 leading-relaxed">
                            Weekly tips and strategies to boost your confidence, refine your skills, and find balance. Your growth journey starts here, don&#39;t miss out!
                        </p>
                    </div>

                    <div className="flex flex-col items-center sm:items-start space-y-3 pt-8 sm:pt-10 md:pt-14">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@email.com"
                            className="w-full p-3 sm:p-4 px-5 rounded-full bg-transparent border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm sm:text-base"
                        />
                        <Button
                            className={`w-full bg-green-200 text-black py-3 px-6 rounded-full transition-all duration-700 ease-in-out hover:bg-black hover:text-green-200 hover:border-green-200 text-sm sm:text-base font-medium flex justify-center items-center space-x-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            onClick={handleSubscribe}
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Subscribe to Newsletter"}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Popup Notification */}
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl text-center"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-3 right-4 text-gray-400 hover:text-black transition px-2 py-1 rounded-full bg-white shadow hover:cursor-pointer hover:bg-gray-100"
                        >
                            ✕
                        </button>

                        {popupType === "success" ? (
                            <motion.div className="flex flex-col items-center justify-center text-center">
                                <motion.div
                                    className="flex items-center justify-center border-4 border-green-500 rounded-full w-14 h-14 sm:w-16 sm:h-16 mb-4"
                                    animate={{ scale: [0.9, 1, 0.9], opacity: [0.7, 1, 0.7] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <CheckCircle2 className="text-green-500 w-7 h-7 sm:w-8 sm:h-8" />
                                </motion.div>

                                <p className="text-lg sm:text-xl font-semibold">{message}</p>
                                <p className="text-sm sm:text-base text-gray-600 mt-1">
                                    {message === "You are already subscribed."
                                        ? "Looks like you're already on the list."
                                        : "Stay tuned for insights and updates."}
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div className="flex flex-col items-center justify-center text-center">
                                <XCircle className="text-red-500 w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                                <p className="text-lg sm:text-xl text-red-500 font-semibold">
                                    Oops! Something went wrong.
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 mt-1">{message}</p>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </main>
    );
}
