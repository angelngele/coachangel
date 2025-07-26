'use client';

import Image from 'next/image';

const topLogos = [
    '/logos/thinkers.png',
    '/logos/LinkedIn.png',
    '/logos/CompTia.png',
    '/logos/GitHub.png',
    '/logos/Canva.png',
];

const bottomLogos = [
    '/logos/Jobberman.png',
    '/logos/ServiceNow.png',
    '/logos/Microsoft.png',
    '/logos/ProjectManagementInstitute.png',
];

const LogoRow = ({
    logos,
    direction,
    duration = 20, // seconds
}: {
    logos: string[];
    direction: 'left' | 'right';
    duration?: number;
}) => {
    const animationClass = direction === 'left' ? 'animate-moveLeft' : 'animate-moveRight';

    return (
        <div className="overflow-hidden -py-20">
            <div
                className={`flex w-max gap-20 ${animationClass} px-6 md:px-24 md:mx-32`}
                style={{ animationDuration: `${duration}s` }}
            >
                {[...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className="shrink-0 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] "
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
};

export default function LogoCarousel() {
    return (
        <section className="bg-green-50 py-0 px-6 sm:px-10 md:px-20 rounded-3xl my-0 mx-4 sm:mx-10 md:mx-36 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mt-10 mb-10">
                Proudly Certified by Top Organizations
            </h2>

            <div className="space-y-12 -mb-20 md:mb-0 -px-20 sm:-px-10 md:px-44">
                <LogoRow logos={topLogos} direction="left" duration={35} />
                <LogoRow logos={bottomLogos} direction="right" duration={35} />
            </div>
        </section>
    );
}
