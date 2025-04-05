import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center bg-gray-800 text-white px-6 py-8 md:py-14 space-y-6 md:space-y-0">
            {/* Logo/Name */}
            <div className="text-3xl md:text-4xl font-bold text-center md:text-left">
                Angele
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-base md:text-lg font-semibold">
                <Link
                    href="https://linkedin.com/in/theangelngele"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors"
                >
                    LinkedIn
                </Link>

                <Link
                    href="mailto:coachangel@angelngele.com"
                    className="hover:text-green-400 transition-colors"
                >
                    coachangel@angelngele.com
                </Link>
            </div>
        </footer>
    );
}
