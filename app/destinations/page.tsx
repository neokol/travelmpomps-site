import React from "react";
import Link from "next/link";
import Image from "next/image";
import SiteNavbar from "../components/SiteNavbar";
import { PageFooter } from "../components/Footer";
import DestinationsGrid from "../components/DestinationsGrid";
import { destinations } from "../data/destinations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Κορυφαίοι Ταξιδιωτικοί Προορισμοί & Οδηγοί (2026)",
    description: "Ανακαλύψτε τους καλύτερους προορισμούς για το επόμενο ταξίδι σας. Πλήρεις οδηγοί για Ευρώπη (Ρώμη, Λονδίνο, Βιέννη κ.α.), tips για οικονομικά city breaks και κρυμμένα διαμάντια.",
    alternates: {
        canonical: 'https://travelmpomps.gr/destinations',
    },
    openGraph: {
        title: 'Βρείτε τον επόμενο ταξιδιωτικό προορισμό | Travelmpomps',
        description: 'Όλοι οι ταξιδιωτικοί οδηγοί συγκεντρωμένοι. Οργανώστε το τέλειο ταξίδι σε Ευρώπη και κόσμο με τους οδηγούς του Travelmpomps.',
        url: 'https://travelmpomps.gr/destinations',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'website',
    },
}

async function Destinations({
    searchParams,
}: {
    searchParams: Promise<{ country?: string }>;
}) {
    const { country } = await searchParams;
    return (
        <div className="min-h-screen">
            {/* Hero banner */}
            <div className="relative w-full h-[320px] md:h-[420px]">
                <Image
                    src="/images/hero-background.jpg"
                    alt="Ταξιδιωτικοί προορισμοί"
                    fill
                    className="object-cover"
                    priority
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-2xl md:text-4xl font-bold mb-3">
                        Ανακαλύψτε τον Επόμενο Προορισμό σας
                    </h1>
                    <p className="text-white/90 max-w-xl">
                        Επιλέξτε μια πόλη και διαβάστε τον πλήρη ταξιδιωτικό οδηγό.
                    </p>
                </div>
            </div>

            <div className="p-6 md:p-12 max-w-6xl mx-auto">
                <DestinationsGrid destinations={destinations} initialCountry={country} />
            </div>

            {/* CTA */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 pb-10">
                <div className="bg-[#F5F1ED] rounded-2xl p-8 text-center">
                    <p className="font-bold text-[#2E2E2F] mb-4">
                        Δεν βρήκες αυτό που ψάχνεις;
                    </p>
                    <Link
                        href="/blog"
                        className="inline-block bg-[#F76808] hover:bg-[#E55D07] text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                        Δες όλα τα άρθρα
                    </Link>
                </div>
            </div>

            <PageFooter />
        </div>
    );
}

export default Destinations;
