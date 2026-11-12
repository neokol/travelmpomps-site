import React from 'react';
import SiteNavbar from '../components/SiteNavbar';
import { PageFooter } from "../components/Footer";
import Image from 'next/image';
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
    title: "Travel Blog: Οδηγοί Πόλης & Συμβουλές",
    description: "Διαβάστε τους αναλυτικούς ταξιδιωτικούς οδηγούς μας για Ευρώπη και κόσμο. Tips για οικονομικά ταξίδια, φαγητό και αξιοθέατα.",
    alternates: {
        canonical: 'https://travelmpomps.gr/blog',
    },
    openGraph: {
        title: 'Travel Blog & Tips | Travelmpomps',
        description: 'Ολοι οι ταξιδιωτικοί οδηγοί συγκεντρωμένοι.',
        url: 'https://travelmpomps.gr/blog',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'website',
    },
}

// Newest first — the first entry is shown as the featured post.
const Posts = [
    {
        name: "Χριστούγεννα στην Κρακοβία 2026",
        slug: "xristougenna-krakovia",
        image: "/blog_images/krakow-xmas-1.jpg",
        title: "Χριστούγεννα στην Κρακοβία 2026",
        description: "Η αγορά στη Rynek Główny, ο διαγωνισμός με τις φάτνες και tips για να μην πληρώσετε παραπάνω στους πάγκους."
    },
    {
        name: "Χριστουγεννιάτικη αγορά στην Πράγα 2026",
        slug: "xristougenniatiki-agora-praga",
        image: "/blog_images/prague-xmas-1.jpg",
        title: "Χριστουγεννιάτικη αγορά στην Πράγα 2026",
        description: "Ημερομηνίες, τιμές, η παγίδα με το ζαμπόν και μια διαδρομή με τα πόδια για ένα βράδυ στις αγορές της Πράγας."
    },
    {
        name: "Τι αποσκευή δίνει κάθε αεροπορική",
        slug: "aposkeues-fthinotero-eisitirio",
        image: "/blog_images/aposkeues-1.jpg",
        title: "Τι αποσκευή δίνει κάθε αεροπορική στο φθηνότερο εισιτήριο (2026)",
        description: "Aegean, SKY express, Ryanair, Wizz Air, easyJet και άλλες — τι χωράει στο φθηνότερο εισιτήριο, διαστάσεις και πόσο κοστίζει η έξτρα χειραποσκευή."
    },
    {
        name: "Πρωτοχρονιά στην Ευρώπη 2027",
        slug: "protoxronia-evropi",
        image: "/blog_images/protoxronia-1.jpg",
        title: "Πρωτοχρονιά στην Ευρώπη: 6 πόλεις για να την περάσετε",
        description: "Βιέννη, Μαδρίτη, Βερολίνο, Βαρσοβία, Βουδαπέστη και Λονδίνο — πού γίνεται το μεγάλο πάρτι, τι είναι δωρεάν και τι να κλείσετε από τώρα."
    },
    {
        name: "Τα καλύτερα δωρεάν αξιοθέατα στο Λονδίνο",
        slug: "dorean-aksiothea-londino",
        image: "/blog_images/london-free-1.jpg",
        title: "Τα καλύτερα δωρεάν αξιοθέατα στο Λονδίνο (2026)",
        description: "Δωρεάν μουσεία, θέα από ουρανοξύστες, κρυμμένοι κήποι και αλλαγή φρουράς — με tips για να μη χάσετε τις κρατήσεις."
    },
    {
        name: "Χριστουγεννιάτικες αγορές στο Βερολίνο 2026",
        slug: "xristougenniatikes-agores-verolino",
        image: "/blog_images/berlin-xmas-1.jpg",
        title: "Χριστουγεννιάτικες αγορές στο Βερολίνο 2026",
        description: "Οι 6 αγορές που αξίζουν, ημερομηνίες, είσοδος, Pfand και μια διαδρομή με τα πόδια για ένα βράδυ."
    },
    {
        name: "Χριστούγεννα στη Βουδαπέστη 2026",
        slug: "xristougenna-voudapesti",
        image: "/blog_images/budapest-xmas-1.jpg",
        title: "Χριστούγεννα στη Βουδαπέστη 2026",
        description: "Αγορές, φαγητό, φωτισμένα τραμ και λουτρά στο κρύο — μαζί με το κόλπο των 1.600 φιορινιών για να τρώτε φθηνά."
    },
    {
        name: "Οι πιο φθηνές πόλεις για Χριστούγεννα στην Ευρώπη 2026",
        slug: "fthines-poleis-xristougenna-evropi",
        image: "/blog_images/cheap-christmas-europe-1.jpg",
        title: "Οι πιο φθηνές πόλεις για Χριστούγεννα στην Ευρώπη 2026",
        description: "7 οικονομικές πόλεις για χριστουγεννιάτικες αγορές — με ημερομηνίες, κόστος και tips για να κρατήσετε το budget χαμηλά."
    },
    {
        name: "Χριστουγεννιάτικες αγορές στη Βιέννη 2026",
        slug: "christougenniatikes-agores-vienni",
        image: "/blog_images/vienna-xmas-1.jpg",
        title: "Χριστουγεννιάτικες αγορές στη Βιέννη 2026",
        description: "Ημερομηνίες, ώρες και οι 6 αγορές που αξίζουν πραγματικά — μαζί με το πόσο κοστίζει το punch και πότε να πάτε."
    },
    {
        name: "Χριστούγεννα στο Λονδίνο",
        slug: "christougenna-londino",
        image: "/blog_images/london_christmas.jpg",
        title: "Χριστούγεννα στο Λονδίνο",
        description: "Τα καλύτερα μέρη για να επισκεφθείτε και να απολαύσετε τη μαγεία των Χριστουγέννων στο Λονδίνο."
    }
];

function Blog() {
    const [featured, ...rest] = Posts;

    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            {/* Hero */}
            <div className="relative w-full h-[320px] md:h-[420px]">
                <Image
                    src="/images/hero-background.jpg"
                    alt="Χριστουγεννιάτικος στολισμός στο Regent Street του Λονδίνου"
                    fill
                    priority
                    className="object-cover"
                    style={{ objectPosition: 'center 30%' }}
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-2xl md:text-4xl font-bold mb-3">
                        Ιστορίες από τα Ταξίδια μας
                    </h1>
                    <p className="text-white/90 max-w-xl">
                        Συμβουλές, οδηγοί πόλης και εμπειρίες από τα ταξίδια μας στην Ευρώπη.
                    </p>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-20">
                {/* Featured post */}
                <p className="text-[#F76808] tracking-[0.2em] uppercase text-sm font-bold mb-4">
                    Πρόσφατο Άρθρο
                </p>
                <Link
                    href={`/blog/${featured.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg bg-white"
                >
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2F] mb-4 group-hover:text-[#F76808] transition-colors">
                            {featured.title}
                        </h2>
                        <p className="text-[#2E2E2F]/80 mb-6 leading-relaxed">
                            {featured.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-[#F76808] font-semibold">
                            Διαβάστε περισσότερα
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </div>
                </Link>

                {/* More posts grid */}
                {rest.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {rest.map((blog) => (
                            <Link
                                key={blog.slug}
                                href={`/blog/${blog.slug}`}
                                className="group block overflow-hidden rounded-xl shadow-lg relative"
                            >
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                                    <h3 className="text-white text-xl font-bold leading-tight">
                                        {blog.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {rest.length === 0 && (
                    <p className="text-center text-[#2E2E2F]/60 mt-16">
                        Νέα άρθρα έρχονται σύντομα ✨
                    </p>
                )}
            </main>

            <PageFooter />
        </div>
    );
}

export default Blog;
