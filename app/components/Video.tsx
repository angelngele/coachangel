import React from 'react'
import AnimatedButton from './ui/AnimatedButton';
import Link from 'next/link'

export default function Video() {
    return (
        <main className="px-6 md:px-20 shadow-xs rounded-4xl shadow-green-200 -mb-10 md:mb-10">
            {/* Video Section */}
            <div className="rounded-full flex justify-center mt-5">
                <div className="rounded-xl w-full max-w-[1000px] aspect-video">
                    <video
                        src="/assets/video/Mainwebvideo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        controlsList="nodownload nofullscreen noremoteplayback"
                        disablePictureInPicture
                        className="w-full h-full object-cover rounded-2xl border-none"
                    />
                </div>
            </div>
            <div className='flex justify-center mt-6 py-4 mb-0 md:mb-10'>
                <Link
                    href={"/contact"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AnimatedButton className="bg-green-200 text-black px-4 py-3 md:px-14 rounded-full text-sm hover:bg-green-300">
                        Contact Me
                    </AnimatedButton>
                </Link>
            </div>
        </main>
    )
}
