import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaCalendarAlt, FaStar, FaSun, FaCoins, FaMapMarkedAlt } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { PhotoPair } from '@/app/components/PhotoPair';
import { PhotoFull } from '@/app/components/PhotoFull';

const PAGE_URL = 'https://travelmpomps.gr/blog/christougenniatikes-agores-vienni';

export const metadata: Metadata = {
    title: "Χριστουγεννιάτικες Αγορές στη Βιέννη 2026: Ποιες Αξίζουν",
    description: "Ημερομηνίες και ώρες όλων των χριστουγεννιάτικων αγορών της Βιέννης το 2026, οι 6 που αξίζουν περισσότερο, πότε να πάτε και πόσο κοστίζει το punch.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Χριστουγεννιάτικες Αγορές στη Βιέννη 2026: Ποιες Αξίζουν και Πότε να Πάτε',
        description: 'Όλες οι ημερομηνίες για το 2026, οι 6 αγορές που ξεχωρίζουν, πόσο θα πληρώσετε και μια διαδρομή για ένα βράδυ.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: '/blog_images/vienna-xmas-1.jpg',
                width: 1200,
                height: 630,
                alt: 'Χριστουγεννιάτικες αγορές στη Βιέννη 2026',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaCalendarAlt className="w-5 h-5" />, label: 'Ημερομηνίες και ώρες 2026', targetId: 'imerominies' },
    { icon: <FaStar className="w-5 h-5" />, label: 'Οι 6 αγορές που αξίζουν', targetId: 'agores' },
    { icon: <FaSun className="w-5 h-5" />, label: 'Πότε να πάτε', targetId: 'pote' },
    { icon: <FaCoins className="w-5 h-5" />, label: 'Πόσο κοστίζει', targetId: 'kostos' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: 'Οργανώστε όλο το ταξίδι', targetId: 'taxidi' },
];

const marketSchedule = [
    { name: 'Rathausplatz (Wiener Christkindlmarkt)', dates: '13/11 – 26/12', hours: 'Καθημερινά 10:00–22:00', stop: 'Rathaus (U2)' },
    { name: 'Schönbrunn', dates: '6/11 – 6/1/2027', hours: 'Καθημερινά 10:00–21:00', stop: 'Schönbrunn (U4)' },
    { name: 'Stephansplatz', dates: '6/11 – 26/12', hours: 'Καθημερινά 11:00–21:00', stop: 'Stephansplatz (U1, U3)' },
    { name: 'Spittelberg', dates: '13/11 – 23/12', hours: 'Δευ–Παρ 14:00–21:30, Σαβ–Κυρ 11:00–21:30', stop: 'Volkstheater (U2, U3)' },
    { name: 'Belvedere (K&K)', dates: '20/11 – 31/12', hours: 'Δευ–Παρ 11:00–21:00, Σαβ–Κυρ 10:00–21:00', stop: 'Schloss Belvedere (τραμ D)' },
    { name: 'Maria-Theresien-Platz', dates: '20/11 – 26/12', hours: 'Δευ–Παρ 11:00–16:00, Σαβ–Κυρ 10:00–21:00', stop: 'Museumsquartier (U2)' },
    { name: 'Freyung (Altwiener)', dates: '14/11 – 23/12', hours: 'Καθημερινά 10:00–21:00', stop: 'Herrengasse (U3)' },
    { name: 'Am Hof', dates: '13/11 – 23/12', hours: 'Δευ–Πεμ 11:00–21:00, Παρ–Κυρ 10:00–21:00', stop: 'Herrengasse (U3)' },
    { name: 'Karlsplatz (Art Advent)', dates: '13/11 – 23/12', hours: 'Καθημερινά 12:00–20:00', stop: 'Karlsplatz (U1, U2, U4)' },
    { name: 'Uni Campus (Altes AKH)', dates: '13/11 – 23/12', hours: 'Δευ–Πεμ 14:00–22:00, Παρ 14:00–23:00, Σαβ 11:00–23:00, Κυρ 11:00–21:00', stop: 'Lange Gasse (τραμ 43, 44)' },
    { name: 'Schwarzenbergplatz', dates: '13/11 – 26/12', hours: 'Δευ–Παρ 11:00–21:00, Σαβ–Κυρ 10:00–21:00', stop: 'Schwarzenbergplatz (τραμ D, 71)' },
    { name: 'Prater (Wintermarkt)', dates: '20/11 – 6/1/2027', hours: 'Δευ–Παρ 12:00–22:00, Σαβ–Κυρ 11:00–22:00', stop: 'Praterstern (U1, U2)' },
];

const topMarkets = [
    {
        title: 'Rathausplatz: η μεγαλύτερη αγορά της Βιέννης',
        text: 'Η μεγαλύτερη αγορά της πόλης, μπροστά στο Δημαρχείο. Εδώ θα βρείτε πάνω από 100 πάγκους, φωτισμένα δέντρα στο πάρκο και παγοδρόμιο (Eistraum) που κάνει κύκλους ανάμεσα στα δέντρα του Rathauspark. Είναι η πιο εντυπωσιακή από όλες τις αγορές, αλλά και η πιο δημοφιλής, ειδικά το Σάββατο βράδυ. Αξίζει να την επισκεφτείτε νωρίτερα, ώστε να την απολαύσετε με λιγότερο κόσμο.',
    },
    {
        title: 'Schönbrunn: η αγορά με φόντο το παλάτι',
        text: 'Οι πάγκοι στήνονται ακριβώς μπροστά στο παλάτι της Σίσσυ. Έχει παγοδρόμιο, παραδοσιακά χειροποίητα και είναι πιο χαλαρή από το Rathausplatz. Ανοίγει νωρίτερα από όλες (6 Νοεμβρίου) και μένει ανοιχτή μέχρι τα Φώτα. Συνδυάστε την με την επίσκεψη στο παλάτι το πρωί. Ακόμα και αν επισκεφτείτε τη Βιέννη μετά τα Χριστούγεννα, έχετε χρόνο να πάρετε μια γεύση από τις χριστουγεννιάτικες αγορές.',
    },
    {
        title: 'Spittelberg: για ατμόσφαιρα γειτονιάς',
        text: 'Πάγκοι μέσα σε πλακόστρωτα στενάκια με παλιά σπίτια της εποχής Biedermeier, στην 7η συνοικία. Πολλά χειροποίητα, λιγότερα τουριστικά σουβενίρ και συνήθως το φθηνότερο punch της πόλης. Είναι η αγαπημένη των ντόπιων.',
    },
    {
        title: 'Belvedere (K&K): η πιο κομψή',
        text: 'Μικρή αγορά με μόλις 35 πάγκους μπροστά στο Upper Belvedere, με θέμα την αυτοκρατορική εποχή. Τη μέρα έχει παραδοσιακή μουσική και μετά τις 18:00 γίνεται lounge με jazz. Εδώ θα βρείτε λιγότερο κόσμο σε σχέση με τις υπόλοιπες αγορές — αξίζει σίγουρα μια βόλτα, ειδικά αν σας κουράσει ο κόσμος στο κέντρο.',
    },
    {
        title: 'Freyung και Am Hof: δύο σε μία βόλτα',
        text: 'Δύο αγορές σε απόσταση 2 λεπτών. Η Freyung (Altwiener) λειτουργεί από το 1772 και έχει κεραμικά, γυάλινα στολίδια και φάτνες. Από τις 16:00 παίζει μουσική. Η Am Hof έχει καλά χειροποίητα και χορωδίες. Από τις αγαπημένες μας αγορές μέσα στο κέντρο της πόλης.',
    },
    {
        title: 'Karlsplatz (Art Advent): για οικογένειες',
        text: 'Μπροστά στην εκκλησία Karlskirche, με έμφαση στην τέχνη, εργαστήρια και πολλά για παιδιά. Όλο το φαγητό είναι βιολογικό. Κλείνει νωρίτερα (20:00), οπότε βάλτε την στην αρχή της βραδιάς.',
    },
];

function ViennaChristmasMarkets() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Χριστουγεννιάτικες αγορές στη Βιέννη 2026', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Χριστουγεννιάτικες αγορές στη Βιέννη 2026: Ποιες αξίζουν και πότε να πάτε',
        description: 'Ημερομηνίες και ώρες όλων των χριστουγεννιάτικων αγορών της Βιέννης το 2026, οι 6 που αξίζουν περισσότερο, πότε να πάτε και πόσο κοστίζει το punch.',
        image: 'https://travelmpomps.gr/blog_images/vienna-xmas-1.jpg',
        datePublished: '2026-10-12',
        dateModified: '2026-10-12',
        inLanguage: 'el',
        mainEntityOfPage: PAGE_URL,
        author: { '@type': 'Organization', name: 'Travelmpomps', url: 'https://travelmpomps.gr' },
        publisher: {
            '@type': 'Organization',
            name: 'Travelmpomps',
            logo: { '@type': 'ImageObject', url: 'https://travelmpomps.gr/travelmpomps.png' },
        },
    };

    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            <Script
                id="json-ld-breadcrumb-vienna-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-vienna-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src="/blog_images/vienna-xmas-1.jpg"
                    alt="Χριστουγεννιάτικη αγορά στη Βιέννη"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Χριστουγεννιάτικες Αγορές στη Βιέννη 2026: Ποιες Αξίζουν και Πότε να Πάτε
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Οι περισσότερες χριστουγεννιάτικες αγορές της Βιέννης ανοίγουν περίπου στις 13 Νοεμβρίου 2026 και κλείνουν 23 ή 26 Δεκεμβρίου.
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                    Αν έχετε χρόνο μόνο για λίγες, πηγαίνετε στο <strong>Rathausplatz</strong> για την ατμόσφαιρα, στο <strong>Schönbrunn</strong> για το σκηνικό και στο <strong>Spittelberg</strong> για τα στενάκια και το φθηνότερο punch.
                </div>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η Βιέννη έχει πάνω από 15 αγορές τα Χριστούγεννα και δεν αξίζουν όλες τον χρόνο σας. Παρακάτω θα βρείτε όλες τις ημερομηνίες για το 2026, ποιες ξεχωρίζουν, πόσο θα πληρώσετε και μια διαδρομή για να δείτε τις καλύτερες με τα πόδια σε ένα βράδυ.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η αγαπημένη μας είναι η αγορά του Rathausplatz μπροστά από το δημαρχείο και φυσικά αυτή μπροστά από το παλάτι Schönbrunn.
                </p>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Ημερομηνίες */}
                <div id="imerominies" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Ημερομηνίες και ώρες 2026 με μια ματιά
                    </h2>

                    {/* Desktop table */}
                    <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <table className="w-full text-left text-sm text-[#2E2E2F]">
                            <thead className="bg-[#F5F1ED]">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-bold">Αγορά</th>
                                    <th scope="col" className="px-4 py-3 font-bold whitespace-nowrap">Ημερομηνίες 2026</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Ώρες</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Πλησιέστερη στάση</th>
                                </tr>
                            </thead>
                            <tbody>
                                {marketSchedule.map((m) => (
                                    <tr key={m.name} className="border-t border-gray-100 align-top">
                                        <th scope="row" className="px-4 py-3 font-bold">{m.name}</th>
                                        <td className="px-4 py-3 whitespace-nowrap">{m.dates}</td>
                                        <td className="px-4 py-3">{m.hours}</td>
                                        <td className="px-4 py-3">{m.stop}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="md:hidden space-y-3">
                        {marketSchedule.map((m) => (
                            <div key={m.name} className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-[#2E2E2F]">
                                <p className="font-bold mb-1">{m.name}</p>
                                <p className="text-sm"><span className="font-semibold">Ημερομηνίες:</span> {m.dates}</p>
                                <p className="text-sm"><span className="font-semibold">Ώρες:</span> {m.hours}</p>
                                <p className="text-sm"><span className="font-semibold">Στάση:</span> {m.stop}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[#2E2E2F] mt-6 mb-4 text-justify">
                        Κάτι σημαντικό που αξίζει να αναφέρουμε είναι ότι οι αγορές στις 24/12 κλείνουν νωρίτερα (συνήθως 16:00–18:30). Η είσοδος είναι παντού δωρεάν· καλό θα είναι να ελέγξετε τα επίσημα sites λίγο πριν επισκεφτείτε την πόλη.
                    </p>
                </div>

                {/* Οι 6 αγορές */}
                <div id="agores" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι 6 αγορές που αξίζουν
                    </h2>
                    {topMarkets.map((market, index) => (
                        <React.Fragment key={market.title}>
                            <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">
                                {index + 1}. {market.title}
                            </h3>
                            <p className="text-[#2E2E2F] mb-4 text-justify">{market.text}</p>
                            {index === 1 && (
                                <PhotoPair
                                    left={{ src: '/blog_images/vienna-xmas-2.jpg', alt: 'Η χριστουγεννιάτικη αγορά του Rathausplatz στη Βιέννη' }}
                                    right={{ src: '/blog_images/vienna-xmas-3.jpg', alt: 'Η χριστουγεννιάτικη αγορά μπροστά στο παλάτι Schönbrunn' }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                    <p className="text-[#2E2E2F] mt-6 mb-4 text-justify italic">
                        💡 Μια σημείωση: η αγορά στο Prater είναι καλή για Πρωτοχρονιά (είναι ανοιχτή μέχρι τις 2:00 στις 31/12), αλλά για Χριστούγεννα οι παραπάνω είναι πιο όμορφες.
                    </p>
                </div>

                {/* Πότε να πάτε */}
                <div id="pote" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Πότε να πάτε
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η καλύτερη περίοδος είναι τέλη Νοεμβρίου με αρχές Δεκεμβρίου: όλες οι αγορές είναι ανοιχτές και ο κόσμος είναι λιγότερος σε σχέση με τις εβδομάδες πριν τα Χριστούγεννα. Συνήθως είναι καλύτερο να επισκεφτείτε τις αγορές καθημερινές μετά τις 17:00, γιατί έχει αρχίσει να νυχτώνει, τα χριστουγεννιάτικα φώτα είναι αναμμένα και ο κόσμος ακόμα δεν έχει μαζευτεί.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στις 8 Δεκεμβρίου είναι αργία στην Αυστρία, οπότε εκείνη τη μέρα θα έχει πολύ κόσμο. Αν θέλετε να δείτε αγορές και μετά τα Χριστούγεννα, μόνο το Schönbrunn, το Belvedere και το Prater μένουν ανοιχτά.
                    </p>

                    <PhotoFull src="/blog_images/vienna-xmas-4.jpg" alt="Χριστουγεννιάτικα φώτα και πάγκοι στη Βιέννη το βράδυ" />
                </div>

                {/* Πόσο κοστίζει */}
                <div id="kostos" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Πόσο κοστίζει
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το ζεστό punch ή το Glühwein (ζεστό κρασί) κοστίζει περίπου 5–7 € την κούπα, ανάλογα με την αγορά. Στο Rathausplatz ο μέσος όρος ήταν γύρω στα 6,50 € το 2024. Πάνω σε αυτό πληρώνετε εγγύηση για την κούπα (Häferlpfand), συνήθως 2–5 €.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li>Αν επιστρέψετε την κούπα, παίρνετε πίσω την εγγύηση.</li>
                        <li>Αν την κρατήσετε, έχετε ένα φθηνό σουβενίρ. Κάθε αγορά έχει δικό της σχέδιο κάθε χρονιά.</li>
                        <li>Το φθηνότερο punch συνήθως είναι στο Spittelberg και το ακριβότερο στις αγορές του κέντρου.</li>
                        <li>Για φαγητό υπολογίστε 5–10 € για λουκάνικο, Langos ή Kaiserschmarrn.</li>
                    </ul>
                </div>

                {/* Οργανώστε το ταξίδι */}
                <div id="taxidi" className="mt-8 pt-10 border-t border-gray-200 mb-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οργανώστε όλο το ταξίδι
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Οι αγορές είναι μόνο ένα βράδυ. Για τις υπόλοιπες μέρες δείτε τον{' '}
                        <Link href="/destinations/vienna" className="text-blue-600 underline">αναλυτικό οδηγό μας για 4 ημέρες στη Βιέννη</Link>
                        , με πρόγραμμα, διαμονή και budget tips.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν σας αρέσει η χριστουγεννιάτικη ατμόσφαιρα, δείτε επίσης τα{' '}
                        <Link href="/blog/christougenna-londino" className="text-blue-600 underline">Χριστούγεννα στο Λονδίνο</Link>
                        {' '}και τις χριστουγεννιάτικες αγορές της{' '}
                        <Link href="/destinations/bratislava" className="text-blue-600 underline">Μπρατισλάβας</Link>
                        {' '}— μόλις 1 ώρα από τη Βιέννη — και της{' '}
                        <Link href="/destinations/prague" className="text-blue-600 underline">Πράγας</Link>.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Θέλετε χριστουγεννιάτικο ταξίδι χωρίς τις τιμές της Βιέννης; Δείτε τις{' '}
                        <Link href="/blog/fthines-poleis-xristougenna-evropi" className="text-blue-600 underline">πιο φθηνές πόλεις για Χριστούγεννα στην Ευρώπη</Link>.
                    </p>
                </div>
            </div>

            <div className="pt-10">
                <PageFooter />
            </div>
        </div>
    )
}

export default ViennaChristmasMarkets
