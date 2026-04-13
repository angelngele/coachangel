import Link from "next/link";
import Image from "next/image";
import { LuFacebook, LuLinkedin, LuInstagram, LuYoutube, LuMail} from "react-icons/lu";
import { FaThreads, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const socialLinks = [
        // { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/theangelngele", label: "LinkedIn" },
        {icon: <LuLinkedin size={22} />, href: "https://www.linkedin.com/in/theangelngele/", label: "LinkedIn" },
        // { icon: <Instagram size={22} />, href: "https://www.instagram.com/theangelngele/", label: "Instagram" },
        {icon: <LuInstagram size={22} />, href: "https://www.instagram.com/theangelngele/", label: "Instagram" },
        // { src: "/threads.png", href: "https://www.threads.com/@theangelngele", label: "Threads" },
        {icon: <FaThreads size={22} />, href: "https://www.threads.com/@theangelngele", label: "Threads" },
        // { src: "/tiktok-logo.png", href: " https://www.tiktok.com/@theangelngele", label: "TikTok" },
        {icon: <FaTiktok size={22} />, href: " https://www.tiktok.com/@theangelngele", label: "TikTok" },
        // { src: "/X-logo.png", href: "https://x.com/theangelngele", label: "X" },
        {icon: <FaXTwitter size={22} />, href: "https://x.com/theangelngele", label: "X" },
        // { icon: <YouTube size={22} />, href: "https://www.youtube.com/@theangelngele", label: "YouTube" },
        {icon: <LuYoutube size={22} />, href: "https://www.youtube.com/@theangelngele", label: "YouTube" },
        { icon: <LuFacebook size={22} />, href: "https://www.facebook.com/coachangelngele", label: "Facebook" },
        // { icon: <Mail size={22} />, href: "mailto:coachangel@angelngele.com", label: "Email" },
        {icon: <LuMail size={22} />, href: "mailto:coachangel@angelngele.com", label: "Email" }
    ];

    return (
        <footer className="flex flex-col items-center bg-gray-800 text-white px-6 py-10 md:py-14 space-y-8">

            {/* Logo */}
            <div className="text-3xl md:text-4xl font-bold text-center">
                <Link href="/">Angele</Link>
            </div>

            {/* Social Icons */}
            <div className="w-full flex justify-center md:justify-center md:items-center">
                <div
                    className="
            grid grid-cols-2 gap-4
            max-w-xs w-full

            md:flex md:justify-center md:flex-row md:flex-wrap md:gap-6 md:max-w-none
        "
                >
                    {socialLinks.map(({ icon, href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                    flex items-center gap-2
                    border px-2 py-1 rounded-full
                    hover:border-green-400 hover:bg-green-400
                    hover:scale-105 transition-all duration-500
                    justify-center md:justify-start
                "
                            aria-label={label}
                        >
                            {icon ? (
                                icon
                            ) : (
                                <Image
                                    src={icon!}
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
            </div>



            <hr className="border-t border-gray-600 w-full" />

            <div className="text-sm text-center opacity-75">
                © {new Date().getFullYear()} Angele
            </div>
        </footer >
    );
}