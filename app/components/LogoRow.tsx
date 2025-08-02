'use client';

import Image from 'next/image';

export default function LogoRow({
    logos,
    direction,
    duration = 20,
}: {
    logos: string[];
    direction: 'left' | 'right';
    duration?: number;
}) {
    const animationClass = direction === 'left' ? 'animate-moveLeft' : 'animate-moveRight';

    return (
        <div className="overflow-hidden py-4">
            <div
                className={`flex w-max gap-20 ${animationClass}`}
                style={{ animationDuration: `${duration}s` }}
            >
                {[...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className="shrink-0 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px]"
                    >
                        <Image
                            src={logo}
                            alt={`Logo ${i}`}
                            width={200}
                            height={200}
                            className="object-contain scale-125 sm:scale-150"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
