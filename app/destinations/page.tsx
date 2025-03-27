"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { PageFooter } from "../components/Footer"


interface Destination {
    name: string;
    slug: string;
    image: string;
}

function Destinations() {
    // Your destinations array
    const destinations: Destination[] = [
        {
            name: "Βερολίνο",
            slug: "berlin",
            image: "/Berlin_post.png",
        }

    ];

    return (
        <div className="min-h-screen pt-22">
            {/* Navbar */}
            <Navbar />

            {/* Grid of Destinations */}
            <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.slug}
                            href={`/destinations/${destination.slug}`}
                            className="flex flex-col items-center"
                        >
                            <Image
                                className="rounded-lg shadow-xl"
                                src={destination.image}
                                width={300}
                                height={300}
                                alt={destination.name}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="py-0">
                <PageFooter />
            </div>
        </div>
    );
}

export default Destinations;
