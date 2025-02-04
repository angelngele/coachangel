"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 30 }}
            className="fixed top-0 w-full z-50 flex items-center justify-between p-4 px-6 lg:px-20 bg-gray-100 shadow-md py-5"
        >
            {/* Left: Name */}
            <div className="text-4xl font-bold">
                <span className="text-secondaryGreen">A</span>ngel<span className="text-darkGreen">e</span>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-700 relative z-20">
                    <div
                        className={`w-6 h-1 bg-gray-700 mb-1 transition-all duration-300 ease-in-out transform ${menuOpen ? 'rotate-45 absolute' : ''}`}
                    ></div>
                    <div
                        className={`w-6 h-1 bg-gray-700 mb-1 transition-all duration-300 ease-in-out transform ${menuOpen ? 'opacity-0' : ''}`}
                    ></div>
                    <div
                        className={`w-6 h-1 bg-gray-700 transition-all duration-300 ease-in-out transform ${menuOpen ? '-rotate-45 absolute' : ''}`}
                    ></div>
                </button>
            </div>

            {/* Mobile Menu (for small screens) */}
            <motion.div
                className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-100 py-4 shadow-md`}
                initial={{ opacity: 0, y: -20 }}
                animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="text-center">
                    <Link href="mailto:coachangel@angelngele.com" className="block px-4 py-2 text-gray-700">
                        Contact Me
                    </Link>
                    <Link
                        href="https://calendly.com/theangelngele"
                        className="block px-4 py-2 text-white border border-black bg-black rounded-full mx-auto my-2"
                    >
                        Schedule a Call
                    </Link>
                </div>
            </motion.div>

            {/* Right: Contact Me and Schedule Link Call */}
            <div className="hidden lg:flex gap-4">
                <Link href="mailto:coachangel@angelngele.com" className="px-4 py-2 text-gray-700">
                    Contact Me
                </Link>
                <Link
                    href="https://calendly.com/theangelngele"
                    className="px-9 pt-2 pb-3 text-white border border-black bg-black rounded-full"
                >
                    Schedule a Call
                </Link>
            </div>
        </motion.nav>
    );
}
