'use client';

import Image from 'next/image';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-0 py-12 gap-20">
            {/* Left Side */}
            <div className="md:w-1/2 -mt-44 pt-5">
                <p className="text-3xl font-medium text-green-700">Hi, I&apos;m Angel</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-wider tracking-tighter">
                    Your Guide to Personal Growth and <span className="relative inline-block">
                        <span className="z-10 relative">Lasting</span>
                        <svg className="absolute -bottom-2 left-0 w-full h-4 z-0" viewBox="0 0 200 20">
                            <path d="M0,15 Q50,0 100,15 T200,15" fill="none" stroke="#3ecf8e" strokeWidth="5" />
                        </svg>
                    </span> Change.
                </h1>
                <p className="text-gray-600 text-2xl pt-14 pb-1">
                    Let&apos;s work together to turn your goals into reality with clear <strong><em>purpose</em></strong> and <strong><em>strategies</em></strong> that make <strong><em>growth</em></strong> happen!
                </p>

                {/* Avatars + Stats */}
                <div className="flex items-center space-x-4 pt-8">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="relative w-[60px] h-[60px]">
                                <Image
                                    src={`/avatars/avatar${i}.jpg`}
                                    alt={`Avatar ${i}`}
                                    fill
                                    className="rounded-full object-cover border-2 border-white transition-transform duration-300 ease-in-out hover:-translate-y-1"
                                />
                            </div>
                        ))}
                    </div>
                    <span className="text-gray-700">Mentored over 100+ individuals.</span>
                </div>



                {/* CTA Buttons */}
                <div className="flex space-x-4 pt-8">
                    <button className="bg-black text-white px-6 py-3 rounded-full text-lg">View Services</button>
                    <button className="bg-green-200 text-green-800 px-6 py-3 rounded-full text-lg">Schedule a Call</button>
                </div>
            </div>

            {/* Left-aligned Image Section */}
            <div className="md:w-1/2 mt-40 -pt-40 md:-mt-40 md:-pt-40 relative">
                <Image
                    src="/images/angelbackground2.png"
                    alt="Angel"
                    width={600}
                    height={100}
                    className="rounded-xl mx-auto"
                />

                <div className="space-y-4 absolute top-64 left-0 -translate-x-1/4 -translate-y-6 mt-20">
                    {[
                        { src: '/images/YourGrowth.png', alt: 'Your Growth' },
                        { src: '/images/helpingYouRedefine.png', alt: 'Helping Redefine Success' },
                        { src: '/images/MentorHomePage.png', alt: 'Mentored 100 Individuals' }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center px-20 py-0"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={400}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
