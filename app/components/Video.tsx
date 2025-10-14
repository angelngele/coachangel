import React from 'react'
import AnimatedButton from './ui/AnimatedButton';
import Link from 'next/link'

export default function Video() {
    return (
        <main className="px-2 md:px-20">
            {/* Video Section */}
            <div className="shadow-sm shadow-green-500 rounded-xl -mb-10 md:mb-10">
                <div className="rounded-xl flex justify-center mt-5 px-10 md:px-0 pt-10 md:pt-20">
                    <div className="rounded-xl aspect-video">
                        <video
                            src="/assets/video/Mainwebvideo.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            controlsList="nodownload nofullscreen noremoteplayback"
                            disablePictureInPicture
                            className="w-[1500px] h-full md:w-full object-cover rounded-xl border-none"
                        />
                    </div>
                </div>
                <div className='flex justify-center mt-6 py-2 pb-4 md:py-4 md:pb-10'>
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
            </div>

        </main>
    )
}
