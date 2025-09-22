import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-gray-800 text-white px-6 py-8 md:py-14 space-y-6">
            {/* Wrapper for name and links */}
            <div className="flex flex-col md:flex-row w-full justify-between items-center">
                {/* Logo/Name */}
                <div className="text-3xl md:text-4xl font-bold text-center md:text-left pl-0 md:pl-20">
                    <Link href={'/'}>
                        Angele
                    </Link>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-base md:text-lg font-semibold pr-0 md:pr-20">
                    <Link
                        href="https://linkedin.com/in/theangelngele"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors md:mt-0 mt-5"
                    >
                        LinkedIn
                    </Link>

                    <Link
                        href="mailto:coachangel@angelngele.com"
                        className="hover:text-green-500 transition-colors"
                    >
                        coachangel@angelngele.com
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-t-2 border-gray-600 w-full my-6" />
            {/* Copyright */}
            <div className="text-sm text-center">
                © {new Date().getFullYear()} Angele
            </div>
        </footer>
    );
}
