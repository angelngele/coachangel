import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800"><span>404 - Wetin you dey find no dey here,</span><span className="block">you fit message the ownner of this site</span></h1>
            <Link href="/" className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-green-700">Go Home
            </Link>
        </div>
    );
}