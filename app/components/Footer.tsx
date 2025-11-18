import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
    Linkedin,
    Instagram,
    Youtube,
    Facebook,
    Mail,
} from "lucide-react";

export default function Footer() {
    const socialLinks = [
        { icon: <Linkedin />, href: "https://linkedin.com/in/theangelngele", label: "LinkedIn" },
        { icon: <Instagram />, href: "https://www.instagram.com/theangelngele/", label: "Instagram" },
        { src: "/threads.png", href: "https://www.threads.com/@theangelngele", label: "Threads" },
        { src: "/ticktok-logo.png", href: " https://www.tiktok.com/@theangelngele", label: "TikTok" },
        { icon: <Youtube />, href: "https://www.youtube.com/@theangelngele", label: "YouTube" },
        { icon: <Facebook />, href: "https://www.facebook.com/coachangelngele", label: "Facebook" },
        { icon: <Mail />, href: "mailto:coachangel@angelngele.com", label: "Email" },
    ];

    return (
        <footer className="flex flex-col justify-center items-center bg-gray-800 text-white px-6 py-8 md:py-14 space-y-6">
            <div className="flex flex-col md:flex-row w-full justify-between items-center">

                {/* Logo */}
                <div className="text-3xl md:text-4xl font-bold text-center md:text-left pl-0 md:pl-20">
                    <Link href="/">Angele</Link>
                </div>

                {/* Social Icons */}
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 text-base md:text-lg font-semibold pr-0 md:pr-20">
                    {socialLinks.map(({ icon, src, href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-green-400 transition-colors"
                            aria-label={label}
                        >
                            {icon ? (
                                icon
                            ) : (
                                <Image
                                    src={src!}
                                    alt={label}
                                    width={50}
                                    height={50}
                                    className="object-contain gap-0 hover:text-green-400 transition-colors"
                                />
                            )}
                            <span className="hidden md:inline">{label}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <hr className="border-t-2 border-gray-600 w-full my-6" />

            <div className="text-sm text-center">
                © {new Date().getFullYear()} Angele
            </div>
        </footer>
    );
}
