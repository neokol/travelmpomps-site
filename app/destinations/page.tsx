import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { PageFooter } from "../components/Footer"
import Head from 'next/head';
import { Metadata } from "next";

interface Destination {
    name: string;
    slug: string;
    image: string;
}

export const metadata: Metadata = {
    title: "Προορισμοί | Travelmpomps",
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
        },
        {
            name: "Βουκουρέστι",
            slug: "bucharest",
            image: "/destinations/insta_bucharest.jpg",
        },
        {
            name: "Λονδίνο",
            slug: "london",
            image: "/destinations/insta_london.jpg",
        },
        {
            name: "Βουδαπέστη",
            slug: "budapest",
            image: "/destinations/insta_budapest.jpg",
        },
        {
            name: "Κρακοβία",
            slug: "krakow",
            image: "/destinations/insta_krakow.jpg",
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 justify-items-center">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.slug}
                            href={`/destinations/${destination.slug}`}
                            className="flex justify-center p-1"
                        >
                            <Image
                                className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                                src={destination.image}
                                width={250}
                                height={250}
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
