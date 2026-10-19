import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaEuroSign, FaListUl, FaPiggyBank, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { destinations } from '@/app/data/destinations';

const PAGE_URL = 'https://travelmpomps.gr/blog/fthines-poleis-xristougenna-evropi';
const HERO_IMAGE = '/blog_images/cheap-christmas-europe-1.jpg';

export const metadata: Metadata = {
    title: "Οι Πιο Φθηνές Πόλεις για Χριστούγεννα στην Ευρώπη 2026",
    description: "7 οικονομικές πόλεις για χριστουγεννιάτικο ταξίδι το 2026 — ημερομηνίες αγορών, κόστος, ιδανικός συνδυασμός και tips για να κρατήσετε το budget χαμηλά.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Οι Πιο Φθηνές Πόλεις για Χριστούγεννα στην Ευρώπη 2026',
        description: 'Βουκουρέστι, Μπρατισλάβα, Βρότσλαβ, Βαρσοβία και άλλες οικονομικές επιλογές για χριστουγεννιάτικες αγορές χωρίς τις τιμές της Δυτικής Ευρώπης.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Οικονομικά Χριστούγεννα στην Ευρώπη 2026',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaEuroSign className="w-5 h-5" />, label: 'Οι 7 πόλεις με μια ματιά', targetId: 'pinakas' },
    { icon: <FaListUl className="w-5 h-5" />, label: 'Οι πόλεις μία-μία', targetId: 'poleis' },
    { icon: <FaPiggyBank className="w-5 h-5" />, label: 'Πώς να μείνει φθηνό το ταξίδι', targetId: 'tips' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const overview = [
    { slug: 'bucharest', name: 'Βουκουρέστι', market: 'Piața Constituției', dates: '28/11 – 28/12 (αναμένεται)', cost: '€', best: 'Μικρό budget' },
    { slug: 'bratislava', name: 'Μπρατισλάβα', market: 'Hlavné námestie', dates: '27/11 – 3/1/2027', cost: '€', best: 'Συνδυασμό με Βιέννη' },
    { slug: 'wroclaw', name: 'Βρότσλαβ', market: 'Rynek', dates: 'Από 20/11 περίπου έως αρχές Ιανουαρίου (αναμένεται)', cost: '€', best: 'Παραμυθένια ατμόσφαιρα' },
    { slug: 'warsaw', name: 'Βαρσοβία', market: 'Παλιά Πόλη, Plac Zamkowy', dates: '20/11 – 5/1/2027 (αναμένεται)', cost: '€', best: 'Μεγάλη αγορά και φώτα' },
    { slug: 'budapest', name: 'Βουδαπέστη', market: 'Vörösmarty tér, Βασιλική', dates: 'Από μέσα Νοεμβρίου έως 1/1 (αναμένεται)', cost: '€€', best: 'Αγορές και λουτρά' },
    { slug: 'krakow', name: 'Κρακοβία', market: 'Rynek Główny', dates: '27/11 – 1/1/2027 (προγραμματισμένο)', cost: '€€', best: 'Κλασικά Χριστούγεννα' },
    { slug: 'prague', name: 'Πράγα', market: 'Παλιά Πλατεία', dates: '28/11 – 6/1/2027', cost: '€€', best: 'Το πιο όμορφο σκηνικό' },
    { slug: 'berlin', name: 'Βερολίνο (μπόνους)', market: 'Gendarmenmarkt', dates: '23/11 – 31/12/2026', cost: '€€', best: 'Πολλές χριστουγεννιάτικες αγορές' },
];

type City = {
    slug: string;
    title: string;
    /** "το Βουκουρέστι", "τη Μπρατισλάβα" … — accusative form used in "Δείτε τον οδηγό μας για …" */
    guideLabel: string;
    body: React.ReactNode;
    extraLink?: { href: string; label: string };
};

const cities: City[] = [
    {
        slug: 'bucharest',
        title: 'Βουκουρέστι: η πιο φθηνή',
        guideLabel: 'το Βουκουρέστι',
        body: 'Η μεγάλη αγορά στήνεται στην Piața Constituției, ακριβώς μπροστά στο Παλάτι του Κοινοβουλίου, ένα από τα μεγαλύτερα κτίρια του κόσμου. Περίπου 70 ξύλινα σπιτάκια με σουβενίρ και ρουμανικό φαγητό: sarmale, mici και ζεστό κρασί (vin fiert). Δεν είναι η πιο ρομαντική αγορά της λίστας, αλλά εδώ θα ξοδέψετε τα λιγότερα για φαγητό και διαμονή. Μπορείτε να τη συνδυάσετε με μια επίσκεψη στο Therme Spa.',
    },
    {
        slug: 'bratislava',
        title: 'Μπρατισλάβα: δύο πόλεις σε ένα ταξίδι',
        guideLabel: 'τη Μπρατισλάβα',
        body: 'Στις τελευταίες έρευνες του Post Office η Μπρατισλάβα ήταν η φθηνότερη πόλη το 2024 και η τρίτη το 2025. Ένα ζεστό κρασί στοιχίζει περίπου 3 €. Η αγορά είναι μικρή και απλώνεται στην κεντρική πλατεία Hlavné námestie και σε δύο γειτονικές πλατείες. Το μεγάλο της πλεονέκτημα: είναι μία ώρα από τη Βιέννη, οπότε μπορείτε να μείνετε φθηνά εδώ και να πάτε μονοήμερη για τις αγορές της Βιέννης.',
        extraLink: { href: '/blog/christougenniatikes-agores-vienni', label: 'άρθρο μας για τις αγορές της Βιέννης' },
    },
    {
        slug: 'wroclaw',
        title: 'Βρότσλαβ: η πιο παραμυθένια',
        guideLabel: 'το Βρότσλαβ',
        body: 'Η αγορά γεμίζει όλη την κεντρική πλατεία (Rynek) και την Plac Solny, χωρισμένη σε θεματικές ζώνες με ξωτικά και νάνους. Αν σας αρέσει το κυνήγι νάνων του Βρότσλαβ, τα Χριστούγεννα γίνεται ακόμα πιο ωραίο. Πέρσι έμεινε ανοιχτή μέχρι τις 7 Ιανουαρίου, ενώ την Πρωτοχρονιά το φαγητό και τα ποτά σερβίρονται μέχρι τις 2 τα ξημερώματα. Κλείνει στις 24 και 25 Δεκεμβρίου.',
    },
    {
        slug: 'warsaw',
        title: 'Βαρσοβία: η μεγαλύτερη σε έκταση',
        guideLabel: 'τη Βαρσοβία',
        body: 'Τα σπιτάκια ξεκινάνε από την Plac Zamkowy, ακολουθούν τα τείχη μέχρι το Barbican και φτάνουν στην πλατεία της Παλιάς Πόλης, όπου υπάρχει παγοδρόμιο γύρω από το άγαλμα της Γοργόνας. Η Βασιλική Οδός είναι γεμάτη φώτα. Στην έρευνα του 2025 ήταν πέμπτη πιο οικονομική πόλη για χριστουγεννιάτικο ταξίδι.',
    },
    {
        slug: 'budapest',
        title: 'Βουδαπέστη: αγορές και ζεστά λουτρά',
        guideLabel: 'τη Βουδαπέστη',
        extraLink: { href: '/blog/xristougenna-voudapesti', label: 'άρθρο μας για τα Χριστούγεννα στη Βουδαπέστη' },
        body: 'Δύο μεγάλες αγορές, 10 λεπτά με τα πόδια η μία από την άλλη. Η Vörösmarty tér είναι η παλαιότερη, με ουγγρικά χειροποίητα. Η αγορά μπροστά στη Βασιλική του Αγίου Στεφάνου έχει προβολή φωτός στην πρόσοψη της εκκλησίας και έχει βραβευτεί πολλές φορές ως από τις καλύτερες της Ευρώπης. Τα φαγητά εκεί ήταν περίπου 1.600 φιορίνια το πιάτο πέρσι. Το καλύτερο combo: αγορά το βράδυ, λουτρά το πρωί.',
    },
    {
        slug: 'krakow',
        title: 'Κρακοβία: τα πιο κλασικά Χριστούγεννα',
        guideLabel: 'την Κρακοβία',
        body: 'Η αγορά πιάνει ένα κομμάτι της Rynek Główny, της μεγαλύτερης μεσαιωνικής πλατείας της Ευρώπης, δίπλα στο Cloth Hall. Αν έχει πολύ κόσμο, η Mały Rynek είναι δύο λεπτά πίσω και είναι πιο ήσυχη. Μετά τις 26 Δεκεμβρίου πολλοί πάγκοι κλείνουν, οπότε πηγαίνετε πριν τα Χριστούγεννα.',
    },
    {
        slug: 'prague',
        title: 'Πράγα: το πιο όμορφο σκηνικό',
        guideLabel: 'την Πράγα',
        body: 'Το έλατο στην Παλιά Πλατεία ανάβει την πρώτη μέρα της αγοράς, στις 28 Νοεμβρίου, και η Πράγα είναι ίσως η πιο όμορφη πόλη της λίστας τα Χριστούγεννα. Είναι όμως και η πιο ακριβή: το 2025 έπεσε στη 13η θέση της έρευνας επειδή ακρίβυναν πολύ τα ξενοδοχεία. Το φαγητό και το ποτό παραμένουν σχετικά οικονομικά, όμως οι πτήσεις και η διαμονή είναι πολύ ακριβές. Μπορείτε να μειώσετε τα αεροπορικά αν πάτε πρώτα στο Βρότσλαβ ή στη Βιέννη και φτάσετε με τρένο στην Πράγα.',
    },
    {
        slug: 'berlin',
        title: 'Μπόνους — Βερολίνο: η εναλλακτική επιλογή',
        guideLabel: 'το Βερολίνο',
        extraLink: { href: '/blog/xristougenniatikes-agores-verolino', label: 'άρθρο μας για τις χριστουγεννιάτικες αγορές του Βερολίνου' },
        body: 'Το Βερολίνο διαθέτει πολλές χριστουγεννιάτικες αγορές, γεμάτες με κόσμο, παραδοσιακό κρασί και λουκάνικα. Οι καλύτερες είναι η Gendarmenmarkt, η αγορά στο Rotes Rathaus με τον ιπτάμενο Άγιο Βασίλη και η κομψή αγορά στο Charlottenburg, μπροστά από το παλάτι. Το Βερολίνο αναδείχθηκε 8ο στη λίστα του Post Office για το 2025. Αν βρείτε οικονομικές πτήσεις, μπορείτε να βρείτε και οικονομική διαμονή στην πόλη, καθώς καλύπτεται από πολύ καλά μέσα μεταφοράς.',
    },
];

const faq = [
    {
        q: 'Ποια είναι η πιο φθηνή πόλη για Χριστούγεννα στην Ευρώπη;',
        a: 'Από τις πόλεις της λίστας, το Βουκουρέστι και η Μπρατισλάβα. Στην έρευνα του Post Office για το 2025, πρώτες ήταν το Βίλνιους και η Ρίγα, με τη Μπρατισλάβα τρίτη. Στις δύο πρώτες το πρόβλημα είναι ότι από την Αθήνα τα αεροπορικά μπορούν να βγουν πολύ ακριβά.',
    },
    {
        q: 'Ποια αγορά μένει ανοιχτή και μετά τα Χριστούγεννα;',
        a: 'Πράγα, Βαρσοβία, Μπρατισλάβα και Βρότσλαβ μένουν ανοιχτές μέχρι αρχές Ιανουαρίου, ενώ Βουδαπέστη και Κρακοβία μέχρι την Πρωτοχρονιά. Το Βερολίνο κλείνει στις 31 Δεκεμβρίου και το Βουκουρέστι γύρω στις 28 Δεκεμβρίου.',
    },
    {
        q: 'Αξίζει να πάω Χριστούγεννα σε ανατολική Ευρώπη αντί για Βιέννη;',
        a: 'Αν σας ενδιαφέρει το budget, ναι. Στην έρευνα του 2025 η Βιέννη ήταν από τις ακριβότερες πόλεις, ενώ η Βουδαπέστη και η Κρακοβία έχουν το ίδιο χριστουγεννιάτικο κλίμα με πολύ μικρότερο κόστος.',
    },
    {
        q: 'Πότε ανακοινώνονται οι επίσημες ημερομηνίες;',
        a: 'Συνήθως τον Οκτώβριο.',
    },
];

const destinationBySlug = Object.fromEntries(destinations.map((d) => [d.slug, d]));

function CheapChristmasCities() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Οι πιο φθηνές πόλεις για Χριστούγεννα στην Ευρώπη 2026', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Οι πιο φθηνές πόλεις για Χριστούγεννα στην Ευρώπη 2026',
        description: '7 οικονομικές πόλεις για χριστουγεννιάτικο ταξίδι το 2026 — ημερομηνίες αγορών, κόστος, ιδανικός συνδυασμός και tips για να κρατήσετε το budget χαμηλά.',
        image: `https://travelmpomps.gr${HERO_IMAGE}`,
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

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    };

    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            <Script
                id="json-ld-breadcrumb-cheap-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-cheap-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-cheap-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Χριστουγεννιάτικη αγορά σε πόλη της Ανατολικής Ευρώπης"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        7 Φθηνές Πόλεις για Χριστούγεννα στην Ευρώπη (2026)
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Αν θέλετε χριστουγεννιάτικες αγορές χωρίς τις τιμές της Βιέννης, του Μονάχου ή του Λονδίνου, πρέπει να κοιτάξετε ανατολικά.
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                    <strong>Οι πιο οικονομικές:</strong> Βουκουρέστι, Μπρατισλάβα, Βρότσλαβ και Βαρσοβία. <strong>Λίγο ακριβότερες</strong>, αλλά πάλι πολύ φθηνότερες από τη Δυτική Ευρώπη: Βουδαπέστη, Κρακοβία και Πράγα. Μια αναφορά αξίζει και στο εναλλακτικό Βερολίνο, όπου μπορείτε να βρείτε οικονομική διαμονή και αεροπορικά.
                </div>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Αυτές οι πόλεις είναι οι πιο οικονομικές επιλογές όσον αφορά τα αεροπορικά, τη διαμονή και το κόστος ζωής εκεί. Σαφέστατα τα Χριστούγεννα είναι η πιο ακριβή περίοδος για ταξίδι στην Ευρώπη — όμως, αν επιλέξετε σωστά, μπορείτε να βρείτε διαμαντάκια για την υπέροχη αυτή εποχή.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Σε όλες έχουμε ταξιδέψει, οπότε κάθε πόλη έχει και τον δικό της αναλυτικό οδηγό. Ξεκινήστε από τον πίνακα και διαλέξτε.
                </p>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Πίνακας */}
                <div id="pinakas" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι 7 πόλεις με μια ματιά
                    </h2>

                    {/* Desktop table */}
                    <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <table className="w-full text-left text-sm text-[#2E2E2F]">
                            <thead className="bg-[#F5F1ED]">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-bold">Πόλη</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Κύρια αγορά</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Ημερομηνίες 2026</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Κόστος</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Ιδανική για</th>
                                </tr>
                            </thead>
                            <tbody>
                                {overview.map((row) => (
                                    <tr key={row.slug} className="border-t border-gray-100 align-top">
                                        <th scope="row" className="px-4 py-3 font-bold">
                                            <a href={`#poli-${row.slug}`} className="text-[#F76808] hover:underline">{row.name}</a>
                                        </th>
                                        <td className="px-4 py-3">{row.market}</td>
                                        <td className="px-4 py-3">{row.dates}</td>
                                        <td className="px-4 py-3 font-bold">{row.cost}</td>
                                        <td className="px-4 py-3">{row.best}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="md:hidden space-y-3">
                        {overview.map((row) => (
                            <div key={row.slug} className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-[#2E2E2F]">
                                <p className="font-bold mb-1">
                                    <a href={`#poli-${row.slug}`} className="text-[#F76808]">{row.name}</a>
                                    <span className="ml-2 text-sm">{row.cost}</span>
                                </p>
                                <p className="text-sm"><span className="font-semibold">Κύρια αγορά:</span> {row.market}</p>
                                <p className="text-sm"><span className="font-semibold">Ημερομηνίες:</span> {row.dates}</p>
                                <p className="text-sm"><span className="font-semibold">Ιδανική για:</span> {row.best}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[#2E2E2F] mt-6 mb-4 text-justify">
                        € = από τις φθηνότερες της Ευρώπης, €€ = φθηνή αλλά πιο τουριστική. Η κατάταξη βασίζεται στο{' '}
                        <a
                            href="https://www.postoffice.co.uk/travel-money/guides/christmas-markets"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            Christmas Markets Barometer 2025 του Post Office
                        </a>{' '}
                        και στη δική μας εμπειρία. Η έρευνα αφορά Βρετανούς ταξιδιώτες (2 άτομα, 2 διανυκτερεύσεις), οπότε τα αεροπορικά από την Αθήνα μπορεί να διαφέρουν. Οι ημερομηνίες που σημειώνονται ως «αναμένεται» δεν έχουν ανακοινωθεί επίσημα ακόμα.
                    </p>
                </div>

                {/* Οι πόλεις μία-μία */}
                <div id="poleis" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-6">
                        Οι πόλεις μία-μία
                    </h2>
                    <div className="space-y-10">
                        {cities.map((city, index) => {
                            const dest = destinationBySlug[city.slug];
                            const isBonus = city.slug === 'berlin';
                            return (
                                <section key={city.slug} id={`poli-${city.slug}`} className="scroll-mt-24 grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-5 items-start">
                                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md">
                                        <Image
                                            src={dest.image}
                                            alt={dest.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 768px) 16rem, 100vw"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2E2E2F] mb-2">
                                            {isBonus ? city.title : `${index + 1}. ${city.title}`}
                                        </h3>
                                        <p className="text-[#2E2E2F] mb-3 text-justify">{city.body}</p>
                                        <p className="text-[#2E2E2F]">
                                            <Link href={`/destinations/${city.slug}`} className="text-blue-600 underline">
                                                Δείτε τον οδηγό μας για {city.guideLabel}
                                            </Link>
                                            {city.extraLink && (
                                                <>
                                                    {' '}και το{' '}
                                                    <Link href={city.extraLink.href} className="text-blue-600 underline">
                                                        {city.extraLink.label}
                                                    </Link>
                                                </>
                                            )}
                                            .
                                        </p>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>

                {/* Tips */}
                <div id="tips" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Πώς να μείνει φθηνό το ταξίδι
                    </h2>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Κλείστε πτήσεις από τώρα, όσο πιο νωρίς γίνεται.</strong> Τα Σαββατοκύριακα του Δεκεμβρίου ακριβαίνουν γρήγορα. Πηγαίνετε Πέμπτη με Κυριακή ή μέσα στην εβδομάδα, ώστε να πετύχετε καλύτερες τιμές.</li>
                        <li><strong>Τέλη Νοεμβρίου είναι η καλύτερη περίοδος.</strong> Οι αγορές έχουν ανοίξει και οι τιμές στα ξενοδοχεία είναι χαμηλότερες από τις εβδομάδες πριν τα Χριστούγεννα. Επίσης ο καιρός θα είναι και λίγο πιο ήπιος σε σχέση με τα Χριστούγεννα.</li>
                        <li><strong>Μην τρώτε μόνο στους πάγκους.</strong> Γενικά το φαγητό στους πάγκους, σε οποιαδήποτε χώρα και αν έχουμε πάει, είναι πολύ ακριβό. Προτείνουμε να πάρετε π.χ. ένα κρασί και να επιλέξετε φαγητό από ένα μαγαζί, όπως θα κάνατε οποιαδήποτε άλλη περίοδο. Ειδικά σε χώρες με διαφορετικό νόμισμα είναι πολύ εύκολο να ξοδέψετε πολλά σε πάγκους χωρίς να το καταλάβετε.</li>
                        <li><strong>Για Μπρατισλάβα, δείτε και πτήσεις για Βιέννη.</strong> Το αεροδρόμιο της Βιέννης είναι περίπου μία ώρα με λεωφορείο από τη Μπρατισλάβα και συχνά έχει περισσότερες πτήσεις. Μπορείτε να βρείτε πτήσεις με την Ryanair και για τις δύο πόλεις.</li>
                    </ul>
                </div>

                {/* FAQ */}
                <div id="faq" className="mt-8 pt-10 border-t border-gray-200 mb-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Συχνές ερωτήσεις
                    </h2>
                    <div className="space-y-6">
                        {faq.map((item) => (
                            <div key={item.q}>
                                <h3 className="text-lg font-bold text-[#2E2E2F] mb-1">{item.q}</h3>
                                <p className="text-[#2E2E2F] text-justify">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pt-10">
                <PageFooter />
            </div>
        </div>
    )
}

export default CheapChristmasCities
