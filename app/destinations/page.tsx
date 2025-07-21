"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { PageFooter } from "../components/Footer"
import Head from 'next/head';

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
            image: "/destinations/insta_berlin.png",
        },
        {
            name: "Βαρκελώνη",
            slug: "barcelona",
            image: "/destinations/insta_barca.png",
        },
        {
            name: "Βιέννη",
            slug: "vienna",
            image: "/destinations/insta_vienna.jpg",
        }

    ];

    return (
        <div className="min-h-screen pt-22">
            <Head>
                <title>Travel Guides </title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/destinations/"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Αναλυτικοί ταξιδιωτικοί οδηγοί"
                    key="desc"
                />
            </Head>
            {/* Navbar */}
            <Navbar />

            {/* Grid of Destinations */}
            <div className="p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-0.5">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.slug}
                            href={`/destinations/${destination.slug}`}
                            className="flex justify-center"
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
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>
    );
}

export default Destinations;
