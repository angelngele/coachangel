"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function KeyNotes() {
    return (
        <main className="mt-14">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 30, damping: 15 }}
                className="flex flex-col items-center mb-16 lg:mx-28"
            >
                <div className="text-center mt-5 font-medium">
                    <p className="text-3xl sm:text-5xl">Keynote Topics</p>
                </div>
            </motion.div>

            <div className="flex justify-center items-center -mt-11 text-center font-normal mb-14 px-4">
                <p className="max-w-xs sm:max-w-full">
                    <span>I enable individuals, supervisors, and groups to</span>
                    <span className="block"> harness their true strength</span>
                </p>
            </div>

            {/* Images Section */}
            <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-10 sm:gap-20 mt-6 px-4">
                {/* Public Speaking */}
                <div className="flex flex-col items-center text-center space-y-2 max-w-xs sm:max-w-fit">
                    <Image
                        src="/assets/AngelOne.png"
                        alt="Angel One"
                        width={250}
                        height={250}
                        className="rounded-lg w-full max-w-[250px] h-auto"
                    />
                    <p className="text-base font-medium">Public Speaking</p>
                    <p className="pt-5 max-w-xs sm:max-w-full">
                        <span>
                            Master the art of impactful <span className="block">communication and captivate any</span>
                            audience with confidence.
                        </span>
                    </p>
                </div>

                {/* Career Growth */}
                <div className="flex flex-col items-center text-center space-y-2 max-w-xs sm:max-w-fit">
                    <Image
                        src="/assets/AngelTwo.png"
                        alt="Angel Two"
                        width={250}
                        height={250}
                        className="rounded-lg w-full max-w-[250px] h-auto"
                    />
                    <p className="text-base font-medium">Career Growth</p>
                    <p className="pt-5 max-w-xs sm:max-w-full">
                        <span>
                            Accelerate your success with
                            <span className="block">strategies to thrive and advance in any</span>
                            industry.
                        </span>
                    </p>
                </div>

                {/* Leadership */}
                <div className="flex flex-col items-center text-center space-y-2 max-w-xs sm:max-w-fit -mt-6">
                    <Image
                        src="/assets/AngelThree.png"
                        alt="Angel Three"
                        width={250}
                        height={250}
                        className="rounded-lg w-full max-w-[250px] h-auto"
                    />
                    <div>
                        <p className="text-base font-medium">Leadership</p>
                        <p className="mt-6 max-w-xs sm:max-w-full">
                            <span>
                                Unlock your potential to lead with
                                <span className="block">vision, authenticity, and influence.</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* Hire Angel Button */}
            <div className="flex justify-center mt-10 mb-36">
                <Link href={"/contact"}>
                    <button className="bg-black text-white py-3 px-8 rounded-full text-sm font-medium hover:bg-green-700 transition">
                        Hire Angel as a Speaker
                    </button>
                </Link>
            </div>
        </main>
    );
}
