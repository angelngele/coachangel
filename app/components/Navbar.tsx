"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
            className="fixed top-0 w-full z-50 flex items-center justify-between p-4 px-6 lg:px-20 bg-gray-100 shadow-md py-3"
        >
            {/* Left: Name */}
            <div className="text-4xl font-bold">
                <Link href="/">
                    <span className="text-secondaryGreen">A</span>ngel
                    <span className="text-darkGreen">e</span>
                </Link>
            </div>

            <div className="hidden lg:flex flex-grow justify-center gap-8">
                {/* Center: Links (for Desktop) */}
                <div className="hidden lg:flex flex-grow justify-center gap-8">
                    <Link href="/webinar" className="px-2 py-2 text-gray-700  hover:text-green-500 ml-5">
                        Webinar
                    </Link>
                    <Link href="/newsletter" className="px-2 py-2 text-gray-700  hover:text-green-500 ml-5">
                        Newsletter
                    </Link>
                </div>

                {/* Right: Call Button */}
                <div className="hidden lg:flex">
                    <Link href="/contact" className="px-2 py-2 text-gray-700  hover:text-green-500 mr-5">
                        Contact Me
                    </Link>
                    <Link
                        href="https://calendly.com/theangelngele"
                        className="px-9 pt-2 pb-3 text-white border border-black bg-black rounded-full"
                    >
                        Schedule a Call
                    </Link>
                </div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-700 relative z-20">
                    <div
                        className={`w-6 h-1 bg-gray-700 mb-1 transition-all duration-300 ease-in-out transform ${menuOpen ? "rotate-45 absolute" : ""
                            }`}
                    ></div>
                    <div
                        className={`w-6 h-1 bg-gray-700 mb-1 transition-all duration-300 ease-in-out transform ${menuOpen ? "opacity-0" : ""
                            }`}
                    ></div>
                    <div
                        className={`w-6 h-1 bg-gray-700 transition-all duration-300 ease-in-out transform ${menuOpen ? "-rotate-45 absolute" : ""
                            }`}
                    ></div>
                </button>
            </div>

            {/* Mobile Menu (for small screens) */}
            <motion.div
                className={`lg:hidden ${menuOpen ? "block" : "hidden"
                    } absolute top-16 left-0 w-full bg-gray-100 py-4 shadow-md`}
                initial={{ opacity: 0, y: -20 }}
                animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="text-center">
                    <Link href="/webinar" className="py-2 text-gray-700">
                        Webinar
                    </Link>
                    <Link href="/newsletter" className="block py-2 text-gray-700">
                        Newsletter
                    </Link>
                    <Link href="/contact" className="block py-2 text-gray-700">
                        Contact Me
                    </Link>
                    <Link
                        href="https://calendly.com/theangelngele"
                        className="block py-2 text-white border border-black bg-black rounded-full mx-2 my-2"
                    >
                        Schedule a Call
                    </Link>
                </div>
            </motion.div>
        </motion.nav>
    );
}
