import React from 'react';
import Link from 'next/link';
import LandingNavbar from '../components/LandingNavbar';
import { PageFooter } from "../components/Footer";
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Σχετικά με εμάς",
    description: "Μάθετε την ιστορία πίσω από το Travelmpomps και το πάθος μας για τα ταξίδια, από τη Ρώμη μέχρι κάθε γωνιά της Ελλάδας.",
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'Σχετικά με το Travelmpomps',
        description: 'Η ιστορία πίσω από το Travelmpomps και το πάθος μας για τα ταξίδια.',
        url: '/about',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'website',
    },
}

const favorites = [
    { name: 'Ρώμη', slug: 'rome', image: '/images/rome-hero.png' },
    { name: 'Βαρκελώνη', slug: 'barcelona', image: '/destinations/barcelona.jpg' },
    { name: 'Βιέννη', slug: 'vienna', image: '/destinations/vienna.jpg' },
    { name: 'Βρότσλαβ', slug: 'wroclaw', image: '/images/wroclaw-hero.jpg' },
    { name: 'Μαδρίτη', slug: 'madrid', image: '/images/madrid-hero.jpg' },
    { name: 'Κρακοβία', slug: 'krakow', image: '/images/krakow-hero.jpg' },
];

function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative w-full h-[60vh] md:h-[75vh]">
                <Image
                    src="/images/rome-hero.png"
                    alt="Το Κολοσσαίο στη Ρώμη, όπου ξεκίνησε η ιστορία του Travelmpomps"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <LandingNavbar />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 flex flex-col items-center justify-center text-center px-4">
                    <p className="text-white/80 tracking-[0.2em] uppercase text-sm font-semibold mb-4">
                        Το Travelmpomps
                    </p>
                    <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-4 max-w-3xl">
                        Λίγα λόγια για εμάς
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-xl">
                        Η ιστορία πίσω από τα ταξίδια, τα βίντεο και τους οδηγούς μας
                    </p>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
                {/* Chapter 1 */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-16 md:py-24">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                        <Image
                            src="/images/fontana.jpg"
                            alt="Η Fontana di Trevi στη Ρώμη, το ταξίδι που ξεκίνησε τα πάντα"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <p className="text-[#F76808] tracking-[0.2em] uppercase text-sm font-bold mb-3">01 · Η Αρχή</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2F] mb-4">
                            Ένα ταξίδι στη Ρώμη που έγινε το ξεκίνημα
                        </h2>
                        <p className="text-[#2E2E2F] text-justify leading-relaxed">
                            Το travelmpomps ξεκίνησε από το πάθος μας για τα ταξίδια. Η αρχή έγινε με ένα ταξίδι στη Ρώμη, όπου αποφασίσαμε να μοιραστούμε την αγάπη μας για τις νέες εμπειρίες δημιουργώντας μικρά βίντεο στο TikTok. Στόχος μας ήταν να δείξουμε στον κόσμο τα αξιοθέατα, τα κρυφά σημεία και τις μοναδικές τοποθεσίες που ανακαλύπταμε σε κάθε προορισμό.
                        </p>
                    </div>
                </section>

                {/* Chapter 2 */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-16 md:py-24">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/toscany_1.jpg"
                            alt="Η ύπαιθρος της Τοσκάνης, ένας από τους προορισμούς που ανακαλύψαμε"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div>
                        <p className="text-[#F76808] tracking-[0.2em] uppercase text-sm font-bold mb-3">02 · Η Εξέλιξη</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2F] mb-4">
                            Από την Ευρώπη μέχρι κάθε γωνιά της Ελλάδας
                        </h2>
                        <p className="text-[#2E2E2F] text-justify leading-relaxed">
                            Με τον καιρό, η επιθυμία μας να μοιραστούμε τις εμπειρίες μας επεκτάθηκε, και έτσι ξεκινήσαμε να δημιουργούμε περιεχόμενο όχι μόνο για τα ταξίδια μας στο εξωτερικό, αλλά και για τις εκδρομές μας στην Ελλάδα. Εστιάσαμε σε αγαπημένα μέρη, από παραδοσιακά εστιατόρια και street food μέχρι μοναδικά σημεία και αξιοθέατα που επισκεπτόμαστε κατά τη διάρκεια των περιηγήσεών μας.
                        </p>
                    </div>
                </section>

                {/* Chapter 3 */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-16 md:py-24">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                        <Image
                            src="/images/budapesthero.jpg"
                            alt="Η Γέφυρα των Αλυσίδων στη Βουδαπέστη τη νύχτα"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <p className="text-[#F76808] tracking-[0.2em] uppercase text-sm font-bold mb-3">03 · Ο Σκοπός μας</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2F] mb-4">
                            Να εμπνέουμε την επόμενη εξερεύνηση
                        </h2>
                        <p className="text-[#2E2E2F] text-justify leading-relaxed">
                            Σκοπός μας είναι να εμπνέουμε και να βοηθάμε άλλους να ανακαλύπτουν και να εξερευνούν τον κόσμο, είτε πρόκειται για την Ελλάδα, είτε για άλλους προορισμούς, με χρήσιμες πληροφορίες, συμβουλές και γνήσιες ιστορίες από τα ταξίδια μας.
                        </p>
                    </div>
                </section>
            </main>

            {/* Favorite destinations mosaic */}
            <section className="bg-[#F5F1ED] py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2F] mb-3">
                            Μερικοί από τους αγαπημένους μας προορισμούς
                        </h2>
                        <p className="text-[#2E2E2F]/80 max-w-xl mx-auto">
                            Κάθε πόλη έχει τη δική της ιστορία. Διαβάστε τους αναλυτικούς οδηγούς μας.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {favorites.map((dest) => (
                            <Link
                                key={dest.slug}
                                href={`/destinations/${dest.slug}`}
                                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-40 md:h-56">
                                    <Image
                                        src={dest.image}
                                        alt={`Ταξιδιωτικός οδηγός για ${dest.name}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-base md:text-lg font-bold">{dest.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            href="/destinations"
                            className="inline-block bg-[#F76808] hover:bg-[#E55D07] text-white px-8 py-3 rounded-full font-medium transition-colors"
                        >
                            Δες όλους τους Οδηγούς μας
                        </Link>
                    </div>
                </div>
            </section>

            <PageFooter />
        </div>
    );
}

export default About;
