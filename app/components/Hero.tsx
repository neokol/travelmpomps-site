"use client";
import Image from "next/image";
import Link from "next/link";


export const Hero = () => {
    return (
        <section
            // Sets a responsive max-width and centers it; add padding around
            className="container mx-auto max-w-7xl px-12 py-12 flex flex-col md:flex-row items-center justify-between"
        >
            {/* Left: Text Content */}
            <div className="md:w-1/2 flex flex-col space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                    Ολοκληρωμένοι Οδηγοί Ταξιδιού
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600">
                    Αναλυτικά Προγράμματα και Πρακτικές Συμβουλές για την Περιπέτειά σας
                </h2>

                {/* Shorter button */}
                <div className="flex">
                <Link
                    href={`/destinations/`}>
                    <button className="px-4 py-2 bg-[#F76808] text-white rounded-md hover:bg-[#22333B] transition-colors duration-200">
                        Explore
                    </button>
                </Link>
                </div>
            </div>

            {/* Right: Image */}
            <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
                <Image
                    src="/images/hero.png"
                    alt="Travel Tips Logo"
                    width={600}
                    height={600}
                    className="max-w-full h-auto"
                />
            </div>
        </section>
    );
};
