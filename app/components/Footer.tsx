import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Linkedin, Instagram, Youtube, Facebook, Mail } from "lucide-react";

export default function Footer() {
    const socialLinks = [
        { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/theangelngele", label: "LinkedIn" },
        { icon: <Instagram size={22} />, href: "https://www.instagram.com/theangelngele/", label: "Instagram" },
        { src: "/threads.png", href: "https://www.threads.com/@theangelngele", label: "Threads" },
        { src: "/tiktok-logo.png", href: " https://www.tiktok.com/@theangelngele", label: "TikTok" },
        { src: "/X-logo.png", href: "https://x.com/theangelngele", label: "X" },
        { icon: <Youtube size={22} />, href: "https://www.youtube.com/@theangelngele", label: "YouTube" },
        { icon: <Facebook size={22} />, href: "https://www.facebook.com/coachangelngele", label: "Facebook" },
        { icon: <Mail size={22} />, href: "mailto:coachangel@angelngele.com", label: "Email" },
    ];

    return (
        <footer className="flex flex-col items-center bg-gray-800 text-white px-6 py-10 md:py-14 space-y-8">

            {/* Logo */}
            <div className="text-3xl md:text-4xl font-bold text-center">
                <Link href="/">Angele</Link>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-5 md:gap-6 w-2xl md:w-auto md:max-w-none">
                {socialLinks.map(({ icon, src, href, label }) => (
                    <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-green-400 transition-colors"
                        aria-label={label}
                    >
                        {icon ? (
                            icon
                        ) : (
                            <Image
                                src={src!}
                                alt={label}
                                width={26}
                                height={26}
                                className="object-contain"
                            />
                        )}
                        <span className="hidden md:inline">{label}</span>
                    </Link>
                ))}
            </div>

            <hr className="border-t border-gray-600 w-full" />

            <div className="text-sm text-center opacity-75">
                © {new Date().getFullYear()} Angele
            </div>
        </footer>
    );
}
