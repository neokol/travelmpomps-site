import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaTable, FaMapMarkerAlt, FaLightbulb, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ResponsiveTable } from '@/app/components/ResponsiveTable';

const PAGE_URL = 'https://travelmpomps.gr/blog/protoxronia-evropi';
const HERO_IMAGE = '/blog_images/protoxronia-1.jpg';

export const metadata: Metadata = {
    title: "Πρωτοχρονιά στην Ευρώπη 2027: 6 Πόλεις για να την Περάσετε",
    description: "Βιέννη, Μαδρίτη, Βερολίνο, Βαρσοβία, Βουδαπέστη και Λονδίνο: πού γίνεται το μεγάλο πάρτι, τι είναι δωρεάν, τι θέλει εισιτήριο και τι να κλείσετε από τώρα για την Πρωτοχρονιά.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Πρωτοχρονιά στην Ευρώπη 2027: 6 Πόλεις για να την Περάσετε',
        description: 'Silvesterpfad στη Βιέννη, 12 σταφύλια στη Μαδρίτη, πάρτι στα λουτρά της Βουδαπέστης και πυροτεχνήματα στο Λονδίνο.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Πρωτοχρονιά στην Ευρώπη 2027',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaTable className="w-5 h-5" />, label: 'Οι 6 πόλεις με μια ματιά', targetId: 'pinakas' },
    { icon: <FaMapMarkerAlt className="w-5 h-5" />, label: '1. Βιέννη', targetId: 'polis-vienna' },
    { icon: <FaMapMarkerAlt className="w-5 h-5" />, label: '2. Μαδρίτη', targetId: 'polis-madrid' },
    { icon: <FaMapMarkerAlt className="w-5 h-5" />, label: '3. Βερολίνο', targetId: 'polis-berlin' },
    { icon: <FaMapMarkerAlt className="w-5 h-5" />, label: '4. Βαρσοβία', targetId: 'polis-warsaw' },
    { icon: <FaMapMarkerAlt className="w-5 h-5" />, label: '5. Βουδαπέστη', targetId: 'polis-budapest' },
    { icon: <FaMapMarkerAlt className="w-5 h-5" />, label: '6. Λονδίνο', targetId: 'polis-london' },
    { icon: <FaLightbulb className="w-5 h-5" />, label: 'Γενικά tips', targetId: 'tips' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const overviewColumns = [
    { key: 'city', label: 'Πόλη' },
    { key: 'event', label: 'Το μεγάλο event' },
    { key: 'cost', label: 'Κόστος' },
    { key: 'best', label: 'Ιδανική για' },
];

const link = (slug: string, label: string) => (
    <a href={`#polis-${slug}`} className="text-[#F76808] hover:underline">{label}</a>
);

const overview = [
    { city: link('vienna', 'Βιέννη'), event: 'Silvesterpfad: πάρτι σε 8 πλατείες', cost: 'Δωρεάν', best: 'Ζευγάρια και οικογένειες' },
    { city: link('madrid', 'Μαδρίτη'), event: '12 σταφύλια στην Puerta del Sol', cost: 'Δωρεάν', best: 'Μια μοναδική παράδοση' },
    { city: link('berlin', 'Βερολίνο'), event: 'Πάρτι στην Πύλη του Βρανδεμβούργου', cost: 'Δωρεάν με κράτηση (πέρσι)', best: 'Clubbing μέχρι το πρωί' },
    { city: link('warsaw', 'Βαρσοβία'), event: 'Αυθόρμητη γιορτή στην Plac Zamkowy', cost: 'Δωρεάν', best: 'Πάρτι στον δρόμο με χαμηλό budget' },
    { city: link('budapest', 'Βουδαπέστη'), event: 'Πάρτι στα λουτρά και στον Δούναβη', cost: 'Ο δρόμος δωρεάν, τα πάρτι από 75 €', best: 'Νεανική παρέα με budget' },
    { city: link('london', 'Λονδίνο'), event: 'Πυροτεχνήματα στο London Eye', cost: 'Από 20 λίρες', best: 'Το μεγαλύτερο θέαμα' },
];

function Tips({ items }: { items: React.ReactNode[] }) {
    return (
        <>
            <p className="text-[#2E2E2F] mt-4 mb-2 font-bold">Tips:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#2E2E2F]">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    );
}

function Callout({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
            {children}
        </div>
    );
}

const P = ({ children }: { children: React.ReactNode }) => (
    <p className="text-[#2E2E2F] mb-4 text-justify">{children}</p>
);

const SeeAlso = ({ children }: { children: React.ReactNode }) => (
    <p className="text-[#2E2E2F] mt-4 mb-4">{children}</p>
);

const a = 'text-blue-600 underline';

const faq = [
    {
        q: 'Ποια είναι η πιο φθηνή πόλη για Πρωτοχρονιά στην Ευρώπη;',
        a: 'Από αυτές τις έξι, η Βουδαπέστη και η Βαρσοβία. Στη Βιέννη και στη Μαδρίτη το μεγάλο πάρτι είναι δωρεάν, αλλά τα ξενοδοχεία είναι ακριβότερα.',
    },
    {
        q: 'Πού γίνεται δωρεάν πάρτι για την Πρωτοχρονιά;',
        a: 'Στη Βιέννη (Silvesterpfad) και στη Μαδρίτη (Puerta del Sol). Στη Βαρσοβία δεν υπάρχει επίσημο πάρτι, αλλά ο κόσμος γιορτάζει δωρεάν στην Plac Zamkowy. Στο Βερολίνο πέρσι ήταν δωρεάν με κράτηση, ενώ στο Λονδίνο τα πυροτεχνήματα θέλουν εισιτήριο.',
    },
    {
        q: 'Πού γίνονται τα καλύτερα πυροτεχνήματα;',
        a: 'Στο Λονδίνο, αλλά θέλει εισιτήριο. Στη Βουδαπέστη δεν υπάρχουν επίσημα πυροτεχνήματα.',
    },
    {
        q: 'Πότε πρέπει να κλείσω;',
        a: 'Όσο πιο νωρίς τόσο καλύτερα. Για Λονδίνο και για το πάρτι στα λουτρά της Βουδαπέστης, από τώρα. Για το Βερολίνο, μόλις ανακοινωθεί το πρόγραμμα, συνήθως τον Νοέμβριο.',
    },
];

const sources = [
    { label: 'Vienna.at, Silvesterpfad 2025/26', href: 'https://www.vienna.at/rund-550-000-menschen-begruessten-beim-wiener-silvesterpfad-das-jahr-2026/9897704' },
    { label: 'Pixidia, Silvesterpfad 2026', href: 'https://pixidia.com/?p=92640' },
    { label: 'Berlin.de, Silvester am Brandenburger Tor', href: 'https://www.berlin.de/rbmskzl/aktuelles/pressemitteilungen/2025/pressemitteilung.1617816.php' },
    { label: 'Time Out Madrid, Nochevieja en la Puerta del Sol', href: 'https://www.timeout.es/madrid/es/noticias/preuvas-en-la-puerta-del-sol-accesos-aforo-horarios-y-toda-la-informacion-para-despedir-antes-que-nadie-el-2025-122625' },
    { label: 'Széchenyi Baths, New Year Bath Party 2026', href: 'https://szechenyibath.com/szechenyi-baths-new-year-bath-party/' },
    { label: "Budappest, New Year's Eve fireworks in Budapest", href: 'https://budappest.com/new-years-eve-fireworks-in-budapest-what-tourists-need-to-know-for-2025-26/' },
    { label: 'Super Express, Sylwester w Warszawie', href: 'https://www.se.pl/warszawa/sylwester-w-warszawie-na-ostatnia-chwile-gdzie-isc-wydarzenia-aa-PhxE-zDmu-3qwK.html' },
    { label: 'Londonist, London NYE fireworks 2026', href: 'https://londonist.com/london/christmas-in-london/new-years-eve-fireworks-london-2026' },
];

function NewYearEurope() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Πρωτοχρονιά στην Ευρώπη: 6 πόλεις', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Πρωτοχρονιά στην Ευρώπη: 6 πόλεις για να την περάσετε',
        description: 'Βιέννη, Μαδρίτη, Βερολίνο, Βαρσοβία, Βουδαπέστη και Λονδίνο: πού γίνεται το μεγάλο πάρτι, τι είναι δωρεάν, τι θέλει εισιτήριο και τι να κλείσετε από τώρα για την Πρωτοχρονιά.',
        image: `https://travelmpomps.gr${HERO_IMAGE}`,
        datePublished: '2026-10-30',
        dateModified: '2026-10-30',
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
                id="json-ld-breadcrumb-nye-europe"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-nye-europe"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-nye-europe"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Πυροτεχνήματα την Πρωτοχρονιά σε πόλη της Ευρώπης"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Πρωτοχρονιά στην Ευρώπη: 6 Πόλεις για να την Περάσετε
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <P>
                    Δώδεκα ρώγες σταφύλι σε δώδεκα χτύπους του ρολογιού στη Μαδρίτη, ένα βαλς στη μέση του δρόμου στη Βιέννη ή πάρτι μέσα σε θερμά λουτρά στη Βουδαπέστη. Η Πρωτοχρονιά στην Ευρώπη δεν είναι παντού ίδια.
                </P>
                <Callout>
                    Αν θέλετε <strong>δωρεάν πάρτι στον δρόμο</strong>, πηγαίνετε στη <strong>Βιέννη</strong> ή στη <strong>Μαδρίτη</strong>. Για <strong>ξέφρενη νύχτα με χαμηλό budget</strong>, η <strong>Βουδαπέστη</strong> και η <strong>Βαρσοβία</strong>. Για <strong>τα πιο εντυπωσιακά πυροτεχνήματα</strong>, το <strong>Λονδίνο</strong>, αλλά θέλει εισιτήριο που πρέπει να κλείσετε από τώρα.
                </Callout>
                <P>
                    Παρακάτω θα βρείτε τι γίνεται σε κάθε πόλη, τι κοστίζει και τι πρέπει να κανονίσετε.
                </P>
                <P>
                    Έχουμε περάσει τρεις φορές Πρωτοχρονιά στο εξωτερικό, και η αλήθεια είναι ότι είναι μια εντελώς διαφορετική εμπειρία. Η πρώτη μας ήταν στη Βαρσοβία, όπου ο κόσμος μαζεύεται κυρίως στην Πλατεία του Κάστρου (Plac Zamkowy) και η πόλη είναι απίστευτα ζωντανή όλη τη νύχτα. Το Βερολίνο ήταν εξίσου εντυπωσιακό, με όλη την πόλη να βγαίνει στους δρόμους για να γιορτάσει. Ο περισσότερος κόσμος μαζεύεται στην Πύλη του Βρανδεμβούργου, όπου στήνεται σκηνή και γίνεται συναυλία, αλλά πυροτεχνήματα ρίχνουν παντού στην πόλη. Τέλος, στη Μαδρίτη, για μια πιο κομψή Πρωτοχρονιά, ο κόσμος μαζεύεται μέσα και γύρω από την Puerta del Sol για το γνωστό έθιμο με τις ρώγες του σταφυλιού.
                </P>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Πίνακας */}
                <div id="pinakas" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι 6 πόλεις με μια ματιά
                    </h2>
                    <ResponsiveTable columns={overviewColumns} rows={overview} />
                </div>

                {/* 1. Βιέννη */}
                <div id="polis-vienna" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">1. Βιέννη: βαλς στους δρόμους</h2>
                    <P>
                        Το <strong>Silvesterpfad</strong> είναι το μεγαλύτερο πάρτι της Πρωτοχρονιάς στη Βιέννη και είναι <strong>εντελώς δωρεάν</strong>. Στις 31 Δεκεμβρίου 2026 στήνονται σκηνές σε 8 σημεία, 7 στο ιστορικό κέντρο και μία στο Prater, από τις 14:00 μέχρι τις 2:00 τα ξημερώματα. Υπάρχουν ζωντανές μπάντες, DJs, μαθήματα βαλς στον δρόμο και πάγκοι με punch και φαγητό. Πέρσι το επισκέφτηκαν περίπου 550.000 άνθρωποι.
                    </P>
                    <P>
                        Το πιο όμορφο κομμάτι είναι τα μεσάνυχτα: χτυπάει η Pummerin, η μεγάλη καμπάνα του Αγίου Στεφάνου, ακούγεται ο «Γαλάζιος Δούναβης» και ο κόσμος πιάνεται και χορεύει βαλς στη μέση του δρόμου.
                    </P>
                    <Tips
                        items={[
                            'Πέρσι ο σταθμός του μετρό Stephansplatz έκλεισε στις 21:00. Κατεβείτε σε κάποια διπλανή στάση και περπατήστε.',
                            'Στις αγορές και στους πάγκους πληρώνετε εγγύηση για την κούπα (Pfand), όπως και στις χριστουγεννιάτικες αγορές.',
                            'Οι αγορές στο Schönbrunn, στο Belvedere και στο Prater είναι ανοιχτές και την παραμονή (το Belvedere μέχρι τις 17:00), οπότε τη μέρα μπορείτε να δείτε και χριστουγεννιάτικες αγορές.',
                        ]}
                    />
                    <SeeAlso>
                        Δείτε τον <Link href="/destinations/vienna" className={a}>οδηγό μας για τη Βιέννη</Link> και τις{' '}
                        <Link href="/blog/christougenniatikes-agores-vienni" className={a}>χριστουγεννιάτικες αγορές της Βιέννης</Link>.
                    </SeeAlso>
                </div>

                {/* 2. Μαδρίτη */}
                <div id="polis-madrid" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">2. Μαδρίτη: τα 12 σταφύλια της τύχης</h2>
                    <P>
                        Η πιο ξεχωριστή παράδοση της λίστας. Τα μεσάνυχτα, στην <strong>Puerta del Sol</strong>, το ρολόι του κτιρίου Real Casa de Correos χτυπάει δώδεκα φορές και με κάθε χτύπο τρώτε μία ρώγα σταφύλι. Αν προλάβετε και τις δώδεκα, λένε ότι θα έχετε καλή τύχη για όλη τη χρονιά. Το βλέπει ζωντανά όλη η Ισπανία στην τηλεόραση. Η είσοδος είναι <strong>δωρεάν</strong>.
                    </P>
                    <Tips
                        items={[
                            'Η πρόσβαση στην πλατεία ελέγχεται από την αστυνομία. Πέρσι άδειασε στις 21:00 και ξανάνοιξε στις 22:00, ενώ ο σταθμός Sol έκλεισε από τις 18:00. Πηγαίνετε νωρίς και φτάστε από τους κεντρικούς δρόμους.',
                            'Δεν επιτρέπονται γυάλινα μπουκάλια και πυροτεχνήματα.',
                            'Αγοράστε από πριν τα «uvas de la suerte» από οποιοδήποτε σούπερ μάρκετ: έρχονται σε συσκευασίες των 12, συχνά χωρίς κουκούτσια. Οι χτύποι είναι γρήγοροι, οπότε μικρά σταφύλια!',
                        ]}
                    />
                    <Callout>
                        <strong>Το κόλπο με τα «Preúvas»:</strong> στις <strong>30 Δεκεμβρίου</strong> τα μεσάνυχτα γίνεται «πρόβα» στην ίδια πλατεία, με ακριβώς την ίδια διαδικασία. Έχει πολύ λιγότερο κόσμο και τη ζείτε πιο άνετα, ενώ την παραμονή μπορείτε να κάνετε κάτι άλλο.
                    </Callout>
                    <SeeAlso>
                        Δείτε τον <Link href="/destinations/madrid" className={a}>οδηγό μας για τη Μαδρίτη</Link>.
                    </SeeAlso>
                </div>

                {/* 3. Βερολίνο */}
                <div id="polis-berlin" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">3. Βερολίνο: η πόλη που δεν κοιμάται</h2>
                    <P>
                        Το Βερολίνο είναι η πόλη για όσους θέλουν να γιορτάσουν μέχρι το πρωί. Πέρσι το πάρτι στην <strong>Πύλη του Βρανδεμβούργου</strong> ήταν δωρεάν, αλλά μόνο με <strong>προσωπικό εισιτήριο που κλείνατε από πριν</strong>, για περίπου 20.000 άτομα: είσοδος από τις 21:30, DJs από τις 22:00 μέχρι τη 1:00 και μεγάλα πυροτεχνήματα τα μεσάνυχτα. Για το 2026 το πρόγραμμα <strong>δεν έχει ανακοινωθεί ακόμα</strong>, οπότε παρακολουθήστε το berlin.de τον Νοέμβριο.
                    </P>
                    <P>
                        Μετά τα μεσάνυχτα, η νύχτα συνεχίζεται στα clubs της πόλης, πολλά από τα οποία μένουν ανοιχτά μέχρι την 1η Ιανουαρίου το μεσημέρι.
                    </P>
                    <Tips
                        items={[
                            'Οι Βερολινέζοι ρίχνουν πολλά βαρελότα στους δρόμους. Σε κάποιες ζώνες, όπως η Alexanderplatz, απαγορεύονται, αλλά αλλού θα ακούτε εκρήξεις όλη νύχτα. Προσέχετε, ειδικά με παιδιά.',
                            'Για clubs, κλείστε εισιτήρια από πριν. Τα μεγάλα πάρτι εξαντλούνται.',
                            'Η αγορά του Gendarmenmarkt μένει ανοιχτή μέχρι τις 31/12, και του Rotes Rathaus μέχρι τις 3/1.',
                        ]}
                    />
                    <SeeAlso>
                        Δείτε τον <Link href="/destinations/berlin" className={a}>οδηγό μας για το Βερολίνο</Link> και τις{' '}
                        <Link href="/blog/xristougenniatikes-agores-verolino" className={a}>χριστουγεννιάτικες αγορές του Βερολίνου</Link>.
                    </SeeAlso>
                </div>

                {/* 4. Βαρσοβία */}
                <div id="polis-warsaw" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">4. Βαρσοβία: αυθόρμητο πάρτι στην Παλιά Πόλη</h2>
                    <P>
                        Στη Βαρσοβία δεν υπάρχει επίσημη συναυλία από τον δήμο, και αυτό είναι που την κάνει ξεχωριστή. Ο κόσμος μαζεύεται μόνος του στην <strong>Plac Zamkowy</strong>, την πλατεία μπροστά στο Βασιλικό Κάστρο, με σαμπάνιες στο χέρι, και τα μεσάνυχτα ο ουρανός γεμίζει πυροτεχνήματα από παντού. Είναι εντελώς <strong>δωρεάν</strong> και η Παλιά Πόλη μένει ζωντανή μέχρι το πρωί.
                    </P>
                    <Tips
                        items={[
                            'Τα χριστουγεννιάτικα σπιτάκια της Παλιάς Πόλης και τα φώτα της Βασιλικής Οδού μένουν μέχρι αρχές Ιανουαρίου, οπότε το σκηνικό είναι ακόμα γιορτινό.',
                            'Μετά τα μεσάνυχτα, η νύχτα συνεχίζεται στα clubs και στα bars του κέντρου. Για τα μεγάλα πάρτι κλείστε εισιτήριο από πριν.',
                            'Όπως και στο Βερολίνο, ο κόσμος ρίχνει πυροτεχνήματα στους δρόμους. Κρατήστε απόσταση και προσέχετε.',
                            'Η Βαρσοβία είναι από τις πιο οικονομικές πρωτεύουσες της Ευρώπης για φαγητό και διαμονή, ακόμα και τις μέρες των γιορτών.',
                        ]}
                    />
                    <SeeAlso>
                        Δείτε τον <Link href="/destinations/warsaw" className={a}>οδηγό μας για τη Βαρσοβία</Link>.
                    </SeeAlso>
                </div>

                {/* 5. Βουδαπέστη */}
                <div id="polis-budapest" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">5. Βουδαπέστη: πάρτι με χαμηλό budget</h2>
                    <P>
                        Η Βουδαπέστη είναι, μαζί με τη Βαρσοβία, η πιο οικονομική από τις έξι και από τις πιο διασκεδαστικές. Ένα πράγμα όμως να ξέρετε από πριν: <strong>δεν υπάρχουν επίσημα πυροτεχνήματα</strong> από τον δήμο, και τα ιδιωτικά απαγορεύονται στις κεντρικές πλατείες, όπως η Vörösmarty. Η γιορτή γίνεται στους δρόμους, στα ruin bars και στα πάρτι.
                    </P>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Πάρτι στα λουτρά Széchenyi:</strong> το πιο ξεχωριστό. Προσοχή, γίνεται στις <strong>30 Δεκεμβρίου</strong>, όχι την παραμονή (επιβεβαιώστε την ημερομηνία στο επίσημο site πριν κλείσετε). DJs, lasers και ζεστό νερό στους 34–38 βαθμούς. Τα early bird εισιτήρια ξεκινάνε περίπου από 75 € και εξαντλούνται, οπότε κλείστε από τώρα. Μόνο για άνω των 18.</li>
                        <li><strong>Κρουαζιέρα στον Δούναβη:</strong> πάρτι σε καράβι με θέα στο φωτισμένο Κοινοβούλιο τα μεσάνυχτα.</li>
                        <li><strong>Ruin bars:</strong> το Szimpla Kert και τα υπόλοιπα της εβραϊκής συνοικίας γεμίζουν.</li>
                        <li><strong>Στον δρόμο:</strong> η γιορτή γύρω από τη Vörösmarty είναι δωρεάν.</li>
                    </ul>
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        <strong>Tip:</strong> η Advent Bazilika μένει ανοιχτή μέχρι την 1η Ιανουαρίου, οπότε μπορείτε να δείτε και τη χριστουγεννιάτικη αγορά.
                    </p>
                    <SeeAlso>
                        Δείτε τον <Link href="/destinations/budapest" className={a}>οδηγό μας για τη Βουδαπέστη</Link> και τα{' '}
                        <Link href="/blog/xristougenna-voudapesti" className={a}>Χριστούγεννα στη Βουδαπέστη</Link>.
                    </SeeAlso>
                </div>

                {/* 6. Λονδίνο */}
                <div id="polis-london" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">6. Λονδίνο: τα πιο εντυπωσιακά πυροτεχνήματα</h2>
                    <P>
                        Τα πυροτεχνήματα γύρω από το London Eye είναι από τα πιο διάσημα στον κόσμο. Από το 2014 όμως <strong>δεν μπορείτε να τα δείτε από κοντά χωρίς εισιτήριο</strong>. Τα εισιτήρια για το 2026 βγήκαν στις 23 Οκτωβρίου μέσω Ticketmaster και μια δεύτερη, μικρότερη παρτίδα θα βγει τον Νοέμβριο. Πέρσι κόστιζαν από 20 έως 55 λίρες, ανάλογα με τη θέση, και η περιοχή άνοιγε στις 20:00.
                    </P>
                    <Tips
                        items={[
                            'Αν θέλετε να πάτε, μην περιμένετε. Οι καλές θέσεις εξαντλούνται γρήγορα.',
                            <>Το Primrose Hill, που ήταν το κλασικό δωρεάν σημείο θέας, αναφέρεται ότι <strong>θα είναι κλειστό</strong> την παραμονή. Ελέγξτε το site των Royal Parks πριν βασιστείτε σε αυτό.</>,
                            'Εναλλακτικά, πολλές παμπ και bars στο κέντρο κάνουν πάρτι, αλλά για θέα στα πυροτεχνήματα θα χρειαστείτε εισιτήριο ή κρουαζιέρα, που είναι ακριβή.',
                        ]}
                    />
                    <SeeAlso>
                        Δείτε τον <Link href="/destinations/london" className={a}>οδηγό μας για το Λονδίνο</Link> και τα{' '}
                        <Link href="/blog/dorean-aksiothea-londino" className={a}>δωρεάν αξιοθέατα του Λονδίνου</Link> για τις υπόλοιπες μέρες του ταξιδιού.
                    </SeeAlso>
                    
                </div>

                {/* Γενικά tips */}
                <div id="tips" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Γενικά tips για Πρωτοχρονιά στο εξωτερικό
                    </h2>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Κλείστε ξενοδοχείο τώρα.</strong> Οι τιμές για 30/12 έως 2/1 ανεβαίνουν κάθε εβδομάδα. Διαλέξτε κάτι σε απόσταση που μπορείτε να γυρίσετε με τα πόδια, γιατί τα μέσα και τα ταξί τα ξημερώματα είναι δύσκολα.</li>
                        <li><strong>Πρωτοχρονιά σημαίνει κλειστά μαγαζιά.</strong> Την 1η Ιανουαρίου τα περισσότερα μουσεία και μαγαζιά είναι κλειστά. Προγραμματίστε κάτι χαλαρό ή μια βόλτα.</li>
                        <li><strong>Ντυθείτε σαν κρεμμύδι.</strong> Θα στέκεστε ώρες έξω στο κρύο: ισοθερμικά, σκουφί, γάντια και ζεστά παπούτσια.</li>
                        <li><strong>Έχετε το κινητό φορτισμένο.</strong> Το δίκτυο συχνά πέφτει τα μεσάνυχτα από τον κόσμο. Συμφωνήστε από πριν ένα σημείο συνάντησης με την παρέα σας.</li>
                        <li><strong>Προσοχή στα πορτοφόλια.</strong> Στα μεγάλα πλήθη υπάρχουν πορτοφολάδες. Τσάντα μπροστά και κινητό σε εσωτερική τσέπη.</li>
                    </ul>
                </div>

                {/* FAQ */}
                <div id="faq" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
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

                {/* Πηγές */}
                <div className="mt-8 pt-10 border-t border-gray-200 mb-8">
                    <h2 className="text-xl font-bold text-[#2E2E2F] mb-3">Πηγές</h2>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-[#2E2E2F]">
                        {sources.map((s) => (
                            <li key={s.href}>
                                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="pt-10">
                <PageFooter />
            </div>
        </div>
    )
}

export default NewYearEurope
