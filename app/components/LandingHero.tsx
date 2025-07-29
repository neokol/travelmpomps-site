import Image from 'next/image';
import Link from "next/link";

import LandingNavbar from './LandingNavbar';

export default function LandingHero() {
    return (
        <section className="relative h-screen w-full">
            {/* Background Image - Replace with your actual image path */}
            <Image
                src="/images/hero-background.jpg"
                alt="Nature and Adventure"
                fill
                className="object-cover"
                priority
            />

            <LandingNavbar />


            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-1 px-4">
                <h1 className="text-white text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                    Ολοκληρωμένοι Οδηγοί Ταξιδιού
                </h1>

                <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-xl font-bold mb-4 md:mb-8 tracking-wide rounded-full px-4 py-2 md:px-8 md:py-4 bg-[rgba(190,188,188,0.3)]">
                    Αναλυτικά Προγράμματα και Πρακτικές Συμβουλές για την Περιπέτειά σας
                </h3>
                <Link
                    href={`/destinations/`}>
                    <button className="relative mt-8 px-8 py-3 text-lg font-semibold text-black group">
                        <span className="absolute inset-0 w-full h-full  bg-white rounded-full group-hover:border-amber-300 transition-all "></span>
                        <span className="relative z-10 flex items-center justify-center">
                            Explore Now
                            <svg
                                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </button>
                </Link>
            </div>

            {/* Bottom text boxes */}
            {/* <div className="absolute bottom-10 left-0 right-0 flex flex-col md:flex-row justify-center gap-4 px-4">
                <div className="bg-white bg-opacity-80 p-4 rounded-lg max-w-md">
                    <p className="text-gray-800">
                        Provides a visual representation of destinations, attractions, and activities.
                    </p>
                </div>
                <div className="bg-white bg-opacity-80 p-4 rounded-lg max-w-md">
                    <p className="text-gray-800">
                        Provides travelers with more accurate and reliable perspective of the destination.
                    </p>
                </div>
            </div> */}
        </section>
    );
}