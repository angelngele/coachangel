'use client';

import LogoRow from './LogoRow';

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

export default function LogoCarousel() {
    return (
        <section className="bg-green-50 py-0 px-6 sm:px-10 md:px-20 rounded-3xl my-0 mx-4 sm:mx-10 md:mx-36 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mt-10 mb-10">
                Proudly Certified by Top Organizations
            </h2>

            <div className="space-y-12 mb-10 md:mb-0">
                <LogoRow logos={topLogos} direction="left" duration={35} />
                <LogoRow logos={bottomLogos} direction="right" duration={35} />
            </div>
        </section>
    );
}
