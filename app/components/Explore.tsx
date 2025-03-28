"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
    {
        title: "Βερολίνο",
        image: "/images/1.jpg",
        description:
            "Where golden deserts whisper ancient tales and lost cities rise from the sands of time.",
        link: "/destinations/berlin",
    },
    {
        title: "Βαρκελώνη",
        image: "/images/2.jpg",
        description:
            "Where we could spend a thousand summers and never grow tired (or full).",
        link: "/destinations/berlin",
    },
    {
        title: "Ρώμη",
        image: "/images/3.jpg",
        description:
            "Love to hike? Then you’ll adore travelling through Peru – one of our favourite countries in South America.",
        link: "/destinations/berlin",
    },
];

export const Explore = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        // No real sliding, but let's cycle through the array for demonstration
        setCurrentIndex((prev) =>
            prev <= 0 ? destinations.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev >= destinations.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="bg-[#F8F6F0] py-8">
            {/* Outer container for heading + carousel */}
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <div className="flex items-center justify-center mb-6">
                    <hr className="w-1/4 border-t border-[#F76808] mx-2" />
                    <h2 className="text-3xl font-bold">Ανακαλύψτε Προορισμούς</h2>
                    <hr className="w-1/4 border-t border-[#F76808] mx-2" />
                </div>
                {/* Make this container relative so arrows stay near the cards */}
                <div className="relative">
                    {/* Scrollable Row of Cards */}
                    <div className="flex gap-6 overflow-x-auto py-4 no-scrollbar">
                        {destinations.map((dest) => (
                            <div
                                key={dest.title}
                                className="min-w-[300px] flex-shrink-0 bg-white rounded-md
                           overflow-hidden shadow-md border border-[#E3E3E3]"
                                style={{ width: "350px" }} // Card width
                            >
                                {/* Image */}
                                <div className="relative h-60 w-full">
                                    <Image
                                        src={dest.image}
                                        alt={dest.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="p-4 flex flex-col justify-between h-[180px]">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1">
                                            {dest.title}
                                        </h3>
                                        <p className="text-sm text-gray-700">
                                            {dest.description}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <Link href={dest.link}>
                                            <button
                                                className="bg-[#F76808] text-white px-4 py-2
                                   rounded-md hover:bg-[#22333B]
                                   transition-colors"
                                            >
                                                Οδηγός
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Left Arrow: absolutely positioned relative to the .relative container */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-[#F76808] text-white
                       flex items-center justify-center
                       hover:bg-[#22333B] transition-colors"
                    >
                        &#8592;
                    </button>

                    {/* Right Arrow: absolutely positioned relative to the .relative container */}
                    <button
                        onClick={handleNext}
                        aria-label="Next"
                        className="absolute right-2 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-[#F76808] text-white
                       flex items-center justify-center
                       hover:bg-[#22333B] transition-colors"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};
