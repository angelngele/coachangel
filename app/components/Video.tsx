import React from 'react'

export default function Video() {
    return (
        <main>
            {/* Video Section */}
            <div className="rounded-full flex justify-center">
                <div className="rounded-xl w-full max-w-[1000px] aspect-video">
                    <video
                        src="/assets/0709.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        controlsList="nodownload nofullscreen noremoteplayback"
                        disablePictureInPicture
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </main>
    )
}
