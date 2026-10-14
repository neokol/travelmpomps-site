import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaGifts, FaUtensils, FaMapMarkedAlt, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ResponsiveTable } from '@/app/components/ResponsiveTable';
import { PhotoPair } from '@/app/components/PhotoPair';

const PAGE_URL = 'https://travelmpomps.gr/blog/xristougenna-voudapesti';
const HERO_IMAGE = '/blog_images/budapest-xmas-1.jpg';

export const metadata: Metadata = {
    title: "Χριστούγεννα στη Βουδαπέστη 2026: Αγορές, Φαγητό, Τι να Κάνετε",
    description: "Οι χριστουγεννιάτικες αγορές της Βουδαπέστης για το 2026, τι να φάτε και πόσο κοστίζει, φωτισμένα τραμ, παγοδρόμιο και λουτρά τον χειμώνα.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Χριστούγεννα στη Βουδαπέστη 2026: Αγορές, Φαγητό, Τι να Κάνετε',
        description: 'Advent Bazilika, Vörösmarty, το μενού των 1.600 φιορινιών, φωτισμένα τραμ και λουτρά στο κρύο.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Χριστούγεννα στη Βουδαπέστη 2026',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaGifts className="w-5 h-5" />, label: 'Οι χριστουγεννιάτικες αγορές', targetId: 'agores' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Τι να φάτε και πόσο κοστίζει', targetId: 'fagito' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: 'Τι να κάνετε εκτός από τις αγορές', targetId: 'kanete' },
    { icon: <FaCalendarAlt className="w-5 h-5" />, label: 'Τι είναι ανοιχτό 24–26 Δεκεμβρίου', targetId: 'argies' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const marketColumns = [
    { key: 'market', label: 'Αγορά' },
    { key: 'dates', label: 'Ημερομηνίες 2026' },
    { key: 'transport', label: 'Πώς θα πάτε' },
];

const markets = [
    { market: 'Advent Bazilika', dates: '13/11 – 1/1/2027', transport: 'Bajcsy-Zsilinszky út (M1) ή Deák Ferenc tér' },
    { market: 'Vörösmarty Classic Xmas', dates: 'Μέσα Νοεμβρίου – 31/12 (αναμένεται)', transport: 'Vörösmarty tér (M1)' },
    { market: 'Városháza Park', dates: 'Μέσα Νοεμβρίου – αρχές Ιανουαρίου (αναμένεται)', transport: 'Deák Ferenc tér' },
    { market: 'Κάστρο της Βούδας', dates: 'Τέλη Νοεμβρίου – αρχές Ιανουαρίου (αναμένεται)', transport: 'Λεωφορείο 16 από Deák Ferenc tér' },
    { market: 'Gozsdu Udvar', dates: '4/12 – 23/12', transport: 'Deák Ferenc tér, 5 λεπτά με τα πόδια' },
];

const foodColumns = [
    { key: 'item', label: 'Τι' },
    { key: 'what', label: 'Τι είναι' },
    { key: 'price', label: 'Τιμή 2025' },
];

const foods = [
    { item: 'Forralt bor', what: 'Ζεστό κρασί με μπαχαρικά', price: '1.500–1.900 HUF (4–5 €)' },
    { item: 'Lángos', what: 'Τηγανητή πίτα με ξινή κρέμα και τυρί', price: '2.400–3.200 HUF (6,50–9 €)' },
    { item: 'Kürtőskalács', what: 'Γλυκό σε σχήμα «καμινάδας», ψημένο στα κάρβουνα', price: '2.800–4.900 HUF (8–13,50 €)' },
    { item: 'Γκούλας σε ψωμί', what: 'Σούπα γκούλας μέσα σε στρογγυλό ψωμί', price: 'περίπου 4.500 HUF (12,50 €)' },
    { item: 'Töltött káposzta', what: 'Λαχανοντολμάδες, το κλασικό χριστουγεννιάτικο πιάτο', price: 'περίπου 7.000 HUF (19 €)' },
    { item: 'Kolbász', what: 'Ψητό ουγγρικό λουκάνικο', price: 'ποικίλει ανά πάγκο' },
];

const faq = [
    {
        q: 'Πότε ανοίγουν οι χριστουγεννιάτικες αγορές στη Βουδαπέστη το 2026;',
        a: 'Η Advent Bazilika ανοίγει στις 13 Νοεμβρίου 2026 και μένει μέχρι την 1η Ιανουαρίου 2027. Η Vörösmarty συνήθως ανοίγει την ίδια περίοδο και κλείνει στις 31 Δεκεμβρίου.',
    },
    {
        q: 'Ποια αγορά να διαλέξω αν έχω χρόνο για μία;',
        a: 'Την Advent Bazilika για τα φώτα και την ατμόσφαιρα. Αν σας ενδιαφέρει περισσότερο το φαγητό και τα σουβενίρ, τη Vörösmarty. Είναι 10 λεπτά η μία από την άλλη, οπότε στην πράξη θα δείτε και τις δύο.',
    },
    {
        q: 'Είναι ακριβή η Βουδαπέστη τα Χριστούγεννα;',
        a: 'Οι πάγκοι στις μεγάλες αγορές είναι ακριβοί για τα ουγγρικά δεδομένα. Με το μενού των 1.600 φιορινιών και φαγητό εκτός αγορών, η Βουδαπέστη μένει από τις πιο οικονομικές επιλογές στην Ευρώπη.',
    },
    {
        q: 'Αξίζουν τα λουτρά τον χειμώνα;',
        a: 'Ναι, είναι ίσως η καλύτερη εποχή. Οι εξωτερικές πισίνες του Széchenyi λειτουργούν όλο τον χρόνο.',
    },
];

const sources = [
    { label: 'Advent Bazilika, επίσημο site', href: 'https://adventbazilika.hu/en' },
    { label: 'Travel And Tour World, Advent Bazilika 2026', href: 'https://www.travelandtourworld.com/news/article/2zrqipvsh91y/' },
    { label: 'Budapest by Locals, Christmas Markets in Budapest 2025', href: 'https://www.budapestbylocals.com/christmas-markets-in-budapest/' },
    { label: 'Hungary Today, τιμές αγορών 2025', href: 'https://hungarytoday.hu/?p=346138' },
    { label: 'Time Out Budapest, Városligeti Műjégpálya', href: 'https://www.timeout.com/hu/budapest/hirek/megvan-mikor-nyit-a-varosligeti-mujegpalya-111925' },
    { label: 'Budappest, BKV Light Fleet 2025', href: 'https://budappest.com/budapest-events/bkv-light-fleet-returns-to-budapest-for-the-2025-holiday-season/' },
];

function BudapestChristmas() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Χριστούγεννα στη Βουδαπέστη 2026', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Χριστούγεννα στη Βουδαπέστη 2026: Αγορές, φαγητό και τι να κάνετε',
        description: 'Οι χριστουγεννιάτικες αγορές της Βουδαπέστης για το 2026, τι να φάτε και πόσο κοστίζει, φωτισμένα τραμ, παγοδρόμιο και λουτρά τον χειμώνα.',
        image: `https://travelmpomps.gr${HERO_IMAGE}`,
        datePublished: '2026-10-13',
        dateModified: '2026-10-13',
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
                id="json-ld-breadcrumb-budapest-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-budapest-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-budapest-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Χριστουγεννιάτικη αγορά μπροστά στη Βασιλική του Αγίου Στεφάνου στη Βουδαπέστη"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Χριστούγεννα στη Βουδαπέστη 2026: Αγορές, Φαγητό και Τι να Κάνετε
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Ζεστό κρασί στο χέρι, φώτα που χορεύουν πάνω στη Βασιλική του Αγίου Στεφάνου και, το επόμενο πρωί, ζεστό νερό στους 38 βαθμούς ενώ έξω έχει μείον. Αυτά είναι τα Χριστούγεννα στη Βουδαπέστη.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Οι δύο μεγάλες αγορές της πόλης, η <strong>Advent Bazilika</strong> και η <strong>Vörösmarty</strong>, ανοίγουν μέσα Νοεμβρίου και μένουν ανοιχτές μέχρι την Πρωτοχρονιά. Η Bazilika έχει ήδη επιβεβαιώσει <strong>13 Νοεμβρίου 2026 – 1 Ιανουαρίου 2027</strong>. Για φαγητό υπολογίστε 4–7 € το πιάτο, αρκεί να ξέρετε τι να ζητήσετε, και θα σας το πούμε παρακάτω.
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F] font-semibold">
                    Η Βουδαπέστη ήταν το πρώτο μας χριστουγεννιάτικο ταξίδι στην Ευρώπη. Πιστεύουμε ότι είναι μια από τις ομορφότερες πόλεις, ειδικά τα Χριστούγεννα.
                </div>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Αγορές */}
                <div id="agores" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι χριστουγεννιάτικες αγορές της Βουδαπέστης
                    </h2>

                    <ResponsiveTable columns={marketColumns} rows={markets} />

                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Η είσοδος είναι δωρεάν παντού.
                    </p>

                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">Advent Bazilika: τα φώτα</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Μπροστά στη Βασιλική του Αγίου Στεφάνου, με σχεδόν 100 Ούγγρους τεχνίτες, ένα τεράστιο έλατο και παγοδρόμιο γύρω του. Το highlight είναι η <strong>προβολή φωτός πάνω στην πρόσοψη της εκκλησίας</strong> κάθε βράδυ. Έχει ψηφιστεί τέσσερις φορές η καλύτερη χριστουγεννιάτικη αγορά της Ευρώπης. Πηγαίνετε λίγο πριν νυχτώσει (γύρω στις 16:00) για να δείτε τα φώτα να ανάβουν.
                    </p>

                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">Vörösmarty Classic Xmas: το φαγητό</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η παλαιότερη αγορά της πόλης, με πάνω από 100 πάγκους. Όλα τα χειροποίητα έχουν πιστοποιητικό ότι είναι ντόπια προϊόντα, οπότε εδώ θα βρείτε τα καλύτερα σουβενίρ. Είναι και ο παράδεισος του φαγητού. Σε έρευνα του 2025 (Tollwayr) βγήκε η πιο δημοφιλής χριστουγεννιάτικη αγορά της Ευρώπης, πάνω από το Στρασβούργο και τη Βιέννη. Απέχει 10 λεπτά με τα πόδια από την Bazilika.
                    </p>

                    <PhotoPair
                        left={{ src: '/blog_images/budapest-xmas-2.jpg', alt: 'Η προβολή φωτός στην πρόσοψη της Βασιλικής του Αγίου Στεφάνου' }}
                        right={{ src: '/blog_images/budapest-xmas-3.jpg', alt: 'Η χριστουγεννιάτικη αγορά της Vörösmarty tér στη Βουδαπέστη' }}
                    />

                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">Οι μικρότερες που αξίζουν</h3>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Városháza Park:</strong> δίπλα στο Δημαρχείο, με παγοδρόμιο και πολλά για παιδιά. Πιο χαλαρή από τις δύο μεγάλες.</li>
                        <li><strong>Κάστρο της Βούδας:</strong> μικρή αγορά με φόντο την εκκλησία του Ματίας. Συνδυάστε τη με τη θέα από τον Προμαχώνα των Ψαράδων το βράδυ.</li>
                        <li><strong>Gozsdu Udvar:</strong> στο εβραϊκό quarter, με design, vintage και χειροποίητα. Ιδανική για δώρα που δεν είναι τα κλασικά σουβενίρ.</li>
                    </ul>
                </div>

                {/* Φαγητό */}
                <div id="fagito" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Τι να φάτε και πόσο κοστίζει
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Οι αγορές της Βουδαπέστης δεν είναι φθηνές, ειδικά η Vörösmarty και η Bazilika. Υπάρχει όμως ένα κόλπο που ξέρουν λίγοι τουρίστες.
                    </p>
                    <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                        <strong>Το μενού των 1.600 φιορινιών:</strong> στις δύο μεγάλες αγορές, οι μεγάλοι πάγκοι φαγητού προσφέρουν συνήθως ένα πιάτο σε σταθερή τιμή, 1.600 HUF (περίπου 4,50 €). Δεν είναι πάντα γραμμένο μπροστά, οπότε ρωτήστε («Van 1600 forintos menü?») και ελέγξτε αν ισχύει και τις καθημερινές. Με αυτό τρώτε κανονικό ουγγρικό πιάτο στη μισή τιμή.
                    </div>

                    <ResponsiveTable columns={foodColumns} rows={foods} />

                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Τιμές από τη Vörösmarty και την Bazilika το 2025. Οι φετινές τιμές ανακοινώνονται με το άνοιγμα των αγορών.
                    </p>

                    <p className="text-[#2E2E2F] mb-2">Δύο συμβουλές από εμάς:</p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li>Το kürtőskalács να είναι <strong>ψημένο στα κάρβουνα</strong> μπροστά σας. Τα έτοιμα που περιμένουν στον πάγκο είναι στεγνά.</li>
                        <li>Για lángos, πάρτε το κλασικό με ξινή κρέμα και τυρί. Οι «instagram» εκδοχές κοστίζουν διπλά και δεν αξίζουν.</li>
                    </ul>

                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        <strong>Budget tip:</strong> για κανονικό γεύμα φύγετε από τις αγορές. Στον{' '}
                        <Link href="/destinations/budapest" className="text-blue-600 underline">οδηγό μας</Link>{' '}
                        θα βρείτε μαγαζιά όπως το Fatal Étterem και το Retro Lángos, με καλύτερες τιμές από τους πάγκους.
                    </p>
                </div>

                {/* Τι να κάνετε */}
                <div id="kanete" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Τι να κάνετε εκτός από τις αγορές
                    </h2>

                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">Βόλτα με το φωτισμένο τραμ</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Κάθε Δεκέμβριο κυκλοφορούν στην πόλη τραμ στολισμένα με χιλιάδες λαμπάκια (Fényvillamos), μαζί με φωτισμένο οδοντωτό και καράβι στον Δούναβη. Το πιο γνωστό είναι το παλιό τραμ που κάνει τη διαδρομή της γραμμής 2, δίπλα στο ποτάμι. Πέρσι κυκλοφόρησαν από τις 28 Νοεμβρίου μέχρι αρχές Ιανουαρίου, από τις 16:00 και μετά. <strong>Ισχύει το κανονικό εισιτήριο</strong>, οπότε είναι ίσως η πιο φθηνή χριστουγεννιάτικη εμπειρία της πόλης. Το πρόγραμμα βγαίνει στο site της BKV λίγο πριν ξεκινήσουν.
                    </p>


                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">Πατινάζ δίπλα σε κάστρο</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το παγοδρόμιο του Városliget (Városligeti Műjégpálya) στήνεται στη λίμνη μπροστά από το κάστρο Vajdahunyad, πίσω από την Πλατεία Ηρώων. Είναι από τα παλαιότερα και μεγαλύτερα υπαίθρια παγοδρόμια της Ευρώπης. Ανοίγει συνήθως τέλη Νοεμβρίου. Πέρσι η είσοδος ήταν 3.500 HUF (περίπου 10 €) τις καθημερινές και 4.500 HUF (12,50 €) Παρασκευή απόγευμα και Σαββατοκύριακο.
                    </p>

                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">Λουτρά στο κρύο</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η καλύτερη εμπειρία του χειμώνα. Στις εξωτερικές πισίνες του <strong>Széchenyi</strong> κάθεστε στο ζεστό νερό ενώ γύρω βγαίνει ατμός και κάνει κρύο. Πηγαίνετε πρωί για λιγότερο κόσμο. Για τιμές και tips (πάρτε δική σας πετσέτα και παντόφλες) δείτε τον{' '}
                        <Link href="/destinations/budapest" className="text-blue-600 underline">οδηγό μας για τη Βουδαπέστη</Link>.
                    </p>

                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">Βραδινή κρουαζιέρα στον Δούναβη</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το Κοινοβούλιο, το Κάστρο και οι γέφυρες φωτισμένα από το νερό. Τον Δεκέμβριο είναι ακόμα πιο όμορφα με τα χριστουγεννιάτικα φώτα στις όχθες. Διαλέξτε κρουαζιέρα με κλειστό και ζεστό σαλόνι.
                    </p>
                </div>

                {/* 24–26 Δεκεμβρίου */}
                <div id="argies" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Τι είναι ανοιχτό 24–26 Δεκεμβρίου
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στην Ουγγαρία η 25η και 26η Δεκεμβρίου είναι αργίες και τα περισσότερα μαγαζιά κλείνουν. Στις 24 κλείνουν νωρίς το απόγευμα. Οι δύο μεγάλες αγορές όμως μένουν ανοιχτές με μικρότερο ωράριο. Πέρσι η Vörösmarty ήταν ανοιχτή 10:00–14:00 στις 24/12 και 12:00–18:00 στις 25 και 26/12. Η Bazilika μένει ανοιχτή μέχρι και την 1η Ιανουαρίου.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν ταξιδεύετε αυτές τις μέρες, κλείστε από πριν εστιατόριο για το βράδυ και ελέγξτε το ωράριο των λουτρών και των μουσείων.
                    </p>
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

                {/* Οργανώστε το ταξίδι */}
                <div className="mt-8 pt-10 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οργανώστε όλο το ταξίδι
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για μετακινήσεις, διαμονή και πρόγραμμα 3 ημερών δείτε τον{' '}
                        <Link href="/destinations/budapest" className="text-blue-600 underline font-bold">αναλυτικό οδηγό μας για τη Βουδαπέστη</Link>.
                        Αν ακόμα διαλέγετε προορισμό, δείτε και τις{' '}
                        <Link href="/blog/fthines-poleis-xristougenna-evropi" className="text-blue-600 underline font-bold">7 φθηνές πόλεις για Χριστούγεννα στην Ευρώπη</Link>.
                    </p>
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

export default BudapestChristmas
