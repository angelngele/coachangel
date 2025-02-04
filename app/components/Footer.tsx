import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center md:flex-row justify-between bg-gray-800 text-white py-8 md:py-14 px-6 mt-16 md:mt-32">
            <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 mx-12 text-center md:text-left">
                Angele
            </div>

            <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8 text-lg md:text-xl font-semibold md:mr-24">
                <Link
                    href="https://linkedin.com/in/theangelngele"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400"
                >
                    LinkedIn
                </Link>

                <Link
                    href="mailto:coachangel@angelngele.com"
                    className="hover:text-green-400"
                >
                    coachangel@angelngele.com
                </Link>
            </div>
        </footer>
    );
}
