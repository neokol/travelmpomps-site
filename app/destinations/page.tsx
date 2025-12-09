import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { PageFooter } from "../components/Footer"
// import Head from 'next/head';
import { Metadata } from "next";

interface Destination {
    name: string;
    slug: string;
    image: string;
}

export const metadata: Metadata = {
    // Τίτλος: Πρέπει να δείχνει ότι εδώ θα βρουν ΤΑ ΠΑΝΤΑ.
    title: "Κορυφαίοι Ταξιδιωτικοί Προορισμοί & Οδηγοί (2025) | Travelmpomps",

    // Περιγραφή: Αναφέρουμε γενικά την Ευρώπη και μερικές δημοφιλείς πόλεις ως "δόλωμα",
    // καθώς και λέξεις όπως "city breaks" και "tips".
    description: "Ανακαλύψτε τους καλύτερους προορισμούς για το επόμενο ταξίδι σας. Πλήρεις οδηγοί για Ευρώπη (Ρώμη, Λονδίνο, Βιέννη κ.α.), tips για οικονομικά city breaks και κρυμμένα διαμάντια.",

    // Canonical URL
    alternates: {
        canonical: 'https://travelmpomps.gr/destinations',
    },

    // Open Graph (Social Media)
    openGraph: {
        title: 'Βρείτε τον επόμενο ταξιδιωτικό προορισμό | Travelmpomps',
        description: 'Όλοι οι ταξιδιωτικοί οδηγοί συγκεντρωμένοι. Οργανώστε το τέλειο ταξίδι σε Ευρώπη και κόσμο με τους οδηγούς του Travelmpomps.',
        url: 'https://travelmpomps.gr/destinations',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'website', // <--- ΠΡΟΣΟΧΗ: Εδώ βάζουμε website γιατί είναι σελίδα κατηγορίας
    },
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
        },
        {
            name: "Βαρσοβία",
            slug: "warsaw",
            image: "/destinations/insta_warsaw.jpg",
        },
        {
            name: "Ρώμη",
            slug: "rome",
            image: "/destinations/insta_rome.jpg",
        }

    ];

    return (
        <div className="min-h-screen pt-22">
            {/* <Head>
                <title>Ταξιδιωτικοί Οδηγοί</title>
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
            </Head> */}
            {/* Navbar */}
            <Navbar />

            {/* Grid of Destinations */}
            <div className="p-12">
                <h1 className="text-3xl md:text-3xl font-bold text-[#2E2E2F] mb-4 text-center">
                    Ανακαλύψτε τον Επόμενο Προορισμό σας
                </h1>
                {/* <p className="text-gray-600 max-w-2xl mx-auto">
                    Εξερευνήστε τους αναλυτικούς οδηγούς μας για τις ομορφότερες πόλεις της Ευρώπης και οργανώστε το ταξίδι των ονείρων σας.
                </p> */}
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
