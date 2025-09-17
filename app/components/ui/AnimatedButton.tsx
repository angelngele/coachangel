"use client"

import Link from "next/link"
import React from "react"

type Props = {
    children: React.ReactNode
    href?: string
    className?: string
}

export default function AnimatedButton({ children, href, className }: Props) {
    const baseStyles =
        "group relative flex items-center justify-center px-6 w-full py-3 text-base rounded-full transition-all duration-500 ease-in-out hover:cursor-pointer"

    const button = (
        <button className={`${baseStyles} ${className ?? "bg-black text-white hover:bg-gray-900"}`}>
            {/* Text slides left */}
            <span className="transition-all duration-500 transform group-hover:-translate-x-10">
                {children}
            </span>

            {/* Arrow slides in */}
            <span className="absolute right-6 opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                →
            </span>
        </button>
    )

    return href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            {button}
        </Link>
    ) : (
        button
    )
}
