import React from "react";
import Link from "next/link";
import Image from "next/image";
import LandingNavbar from "../components/LandingNavbar";
import { PageFooter } from "../components/Footer";
import DestinationsGrid, { Destination } from "../components/DestinationsGrid";
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

const destinations: Destination[] = [
    {
        name: "Ρώμη",
        slug: "rome",
        image: "/images/rome-hero.png",
        alt: "Ταξιδιωτικός οδηγός για τη Ρώμη και το Κολοσσαίο",
        country: "Ιταλία",
        teaser: "Κολοσσαίο, Βατικανό & Fontana di Trevi",
        budget: false,
        featured: true,
    },
    {
        name: "Βερολίνο",
        slug: "berlin",
        image: "/destinations/berlin1.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Βερολίνο και τον Καθεδρικό Ναό",
        country: "Γερμανία",
        teaser: "Ιστορία, τέχνη & νυχτερινή ζωή",
        budget: false,
    },
    {
        name: "Βαρκελώνη",
        slug: "barcelona",
        image: "/destinations/barcelona.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Βαρκελώνη και τη Sagrada Familia",
        country: "Ισπανία",
        teaser: "Sagrada Familia & παραλίες",
        budget: false,
    },
    {
        name: "Βιέννη",
        slug: "vienna",
        image: "/destinations/vienna.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Βιέννη και τα Αυτοκρατορικά Ανάκτορα",
        country: "Αυστρία",
        teaser: "Αυτοκρατορικά ανάκτορα & καφέ κουλτούρα",
        budget: false,
    },
    {
        name: "Βουκουρέστι",
        slug: "bucharest",
        image: "/bucharest/bucharest-hero.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Βουκουρέστι και την Παλιά Πόλη",
        country: "Ρουμανία",
        teaser: "Οικονομικό city break στην Παλιά Πόλη",
        budget: true,
    },
    {
        name: "Λονδίνο",
        slug: "london",
        image: "/destinations/london.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Λονδίνο, Big Ben και αξιοθέατα",
        country: "Ηνωμένο Βασίλειο",
        teaser: "Big Ben & θρυλικά αξιοθέατα",
        budget: false,
    },
    {
        name: "Βουδαπέστη",
        slug: "budapest",
        image: "/destinations/budapest.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Βουδαπέστη και το Κοινοβούλιο",
        country: "Ουγγαρία",
        teaser: "Λουτρά & φθηνή διαμονή",
        budget: true,
    },
    {
        name: "Κρακοβία",
        slug: "krakow",
        image: "/destinations/krakow.jpg",
        alt: "Ταξιδιωτικός οδηγός για την Κρακοβία και την κεντρική πλατεία",
        country: "Πολωνία",
        teaser: "Μεσαιωνική πλατεία με μικρό budget",
        budget: true,
    },
    {
        name: "Βαρσοβία",
        slug: "warsaw",
        image: "/destinations/warsaw.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Βαρσοβία και την Παλιά Πόλη",
        country: "Πολωνία",
        teaser: "Ανακατασκευασμένη Παλιά Πόλη",
        budget: true,
    },
    {
        name: "Μαδρίτη",
        slug: "madrid",
        image: "/destinations/madrid.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Μαδρίτη",
        country: "Ισπανία",
        teaser: "Παλιά πόλη, φαγητό & νυχτερινή ζωή",
        budget: false,
    },
    {
        name: "Μπολόνια",
        slug: "bologna",
        image: "/destinations/bologna.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Μπολόνια",
        country: "Ιταλία",
        teaser: "Φαγητό και παλιά πόλη",
        budget: true,
    },
    {
        name: "Μιλάνο",
        slug: "milan",
        image: "/destinations/milan.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Μιλάνο",
        country: "Ιταλία",
        teaser: "Φαγητό και παλιά πόλη",
        budget: false,
    },
    {
        name: "Βρότσλαβ",
        slug: "wroclaw",
        image: "/destinations/wroclaw.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Βρότσλαβ, τη Βενετία της Πολωνίας",
        country: "Πολωνία",
        teaser: "Η \"Βενετία\" της Πολωνίας & κυνήγι νάνων",
        budget: true,
    },
];

function Destinations() {
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
                <LandingNavbar />
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
                <DestinationsGrid destinations={destinations} />
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
