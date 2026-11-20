import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaBalanceScale, FaGifts, FaUtensils, FaMapMarkedAlt, FaCalendarAlt, FaCheckCircle, FaTrain, FaVoteYea, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ResponsiveTable } from '@/app/components/ResponsiveTable';
import { PhotoPair } from '@/app/components/PhotoPair';

const PAGE_URL = 'https://travelmpomps.gr/blog/praga-i-voudapesti-xristougenna';
const HERO_IMAGE = '/blog_images/prague-vs-budapest-1.jpg';

export const metadata: Metadata = {
    title: "Πράγα ή Βουδαπέστη για Χριστούγεννα; Η Σύγκριση (2026)",
    description: "Πράγα ή Βουδαπέστη για χριστουγεννιάτικο ταξίδι; Συγκρίνουμε αγορές, ατμόσφαιρα, τιμές, φαγητό και τι άλλο να κάνετε, για να διαλέξετε την πόλη που σας ταιριάζει.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Πράγα ή Βουδαπέστη για Χριστούγεννα; Η Σύγκριση (2026)',
        description: 'Αγορές, ατμόσφαιρα, τιμές, φαγητό και δραστηριότητες. Ποια πόλη σας ταιριάζει περισσότερο;',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Πράγα ή Βουδαπέστη για Χριστούγεννα',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaBalanceScale className="w-5 h-5" />, label: 'Η σύγκριση με μια ματιά', targetId: 'sygkrisi' },
    { icon: <FaGifts className="w-5 h-5" />, label: 'Οι αγορές', targetId: 'agores' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Φαγητό και τιμές', targetId: 'fagito' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: 'Τι να κάνετε πέρα από τις αγορές', targetId: 'kanete' },
    { icon: <FaCalendarAlt className="w-5 h-5" />, label: 'Πότε να πάτε', targetId: 'pote' },
    { icon: <FaCheckCircle className="w-5 h-5" />, label: 'Ποια να διαλέξετε', targetId: 'epilogi' },
    { icon: <FaTrain className="w-5 h-5" />, label: 'Μπορώ να δω και τις δύο;', targetId: 'dyo' },
    { icon: <FaVoteYea className="w-5 h-5" />, label: 'Η δική μας γνώμη', targetId: 'gnomi' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const compareColumns = [
    { key: 'criterion', label: 'Κριτήριο' },
    { key: 'prague', label: 'Πράγα' },
    { key: 'budapest', label: 'Βουδαπέστη' },
];

const compare = [
    { criterion: 'Μεγάλες αγορές', prague: 'Παλιά Πλατεία, πλατεία Βάτσλαβ', budapest: 'Advent Bazilika, Vörösmarty' },
    { criterion: 'Ημερομηνίες 2026', prague: '28/11/2026 – 6/1/2027', budapest: 'Ανοιχτές από 13/11/2026 έως την Πρωτοχρονιά' },
    { criterion: 'Ζεστό κρασί', prague: 'περίπου 100 CZK (4 €)', budapest: '1.500 HUF (4 €)' },
    { criterion: 'Φθηνό φαγητό στην αγορά', prague: 'Δεν υπάρχει σταθερό φθηνό μενού', budapest: 'Μενού Budapest με 1.600 HUF (4,50 €) στους μεγάλους πάγκους' },
    { criterion: 'Το highlight', prague: 'Το έλατο με το show φωτός κάθε ώρα', budapest: 'Η προβολή φωτός στη Βασιλική κάθε μισή ώρα' },
    { criterion: 'Πέρα από τις αγορές', prague: 'Γέφυρα του Καρόλου, Κάστρο, Αστρονομικό Ρολόι', budapest: 'Λουτρά, φωτισμένο τραμ, παγοδρόμιο, κρουαζιέρα' },
    { criterion: 'Η «παγίδα»', prague: 'Το ζαμπόν με το βάρος', budapest: 'Ακριβοί πάγκοι, αν δεν ζητήσετε το φθηνό μενού' },
    { criterion: 'Νόμισμα', prague: 'Κορώνα Τσεχίας', budapest: 'Φιορίνι Ουγγαρίας' },
];

const choosePrague = [
    'Θέλετε το πιο «παραμυθένιο» χριστουγεννιάτικο σκηνικό.',
    'Σας αρέσει να περπατάτε σε μεσαιωνικά στενά χωρίς πρόγραμμα.',
    'Ταξιδεύετε μετά την Πρωτοχρονιά.',
    'Είναι η πρώτη σας χριστουγεννιάτικη αγορά και θέλετε την «κλασική» εικόνα.',
];

const chooseBudapest = [
    'Θέλετε να φάτε καλά και φθηνά μέσα στις αγορές.',
    'Θέλετε κι άλλα πράγματα να κάνετε, όπως λουτρά, πατινάζ και κρουαζιέρα.',
    'Ταξιδεύετε νωρίς, μέσα Νοεμβρίου.',
    'Ταξιδεύετε με παιδιά: το φωτισμένο τραμ, τα παγοδρόμια και το παιδικό μενού είναι μεγάλο πλεονέκτημα.',
];

const faq = [
    {
        q: 'Ποια είναι πιο φθηνή τα Χριστούγεννα, η Πράγα ή η Βουδαπέστη;',
        a: 'Στην καθημερινότητα εκεί είναι περίπου ίδιες. Η μεγαλύτερη διαφορά είναι στα αεροπορικά από την Ελλάδα, που είναι σαφώς φθηνότερα στη Βουδαπέστη. Στις αγορές η Βουδαπέστη βγαίνει λίγο φθηνότερη, χάρη στο μενού των 1.600 φιορινιών. Τα ξενοδοχεία στην Πράγα ακριβαίνουν περισσότερο τον Δεκέμβριο.',
    },
    {
        q: 'Ποια έχει τις καλύτερες χριστουγεννιάτικες αγορές;',
        a: 'Η Advent Bazilika της Βουδαπέστης έχει πάρει περισσότερα βραβεία. Η Παλιά Πλατεία της Πράγας έχει το πιο εντυπωσιακό σκηνικό.',
    },
    {
        q: 'Πότε ανοίγουν οι αγορές το 2026;',
        a: 'Στη Βουδαπέστη άνοιξαν στις 13 Νοεμβρίου 2026. Στην Πράγα ανοίγουν στις 28 Νοεμβρίου 2026 και μένουν μέχρι τις 6 Ιανουαρίου 2027.',
    },
    {
        q: 'Ποια πόλη είναι καλύτερη για παιδιά τα Χριστούγεννα;',
        a: 'Η Βουδαπέστη, χάρη στα φωτισμένα τραμ, τα παγοδρόμια και το νέο παιδικό μενού στις αγορές.',
    },
];

const sources = [
    { label: 'We Love Budapest, Karácsonyi vásár Budapest 2026', href: 'https://welovebudapest.com/cikk/2026/11/18/karacsonyi-vasar-budapest-2026-advent-bazilika-vorosmarty-classic-xmas/' },
    { label: 'Prague Experience, Christmas Markets 2026–27', href: 'https://www.pragueexperience.com/events/christmas-markets.asp' },
    { label: 'Novinky.cz, Τιμές στις χριστουγεννιάτικες αγορές 2025', href: 'https://www.novinky.cz/clanek/domaci-vanocni-trhy-pod-lupou-kolik-letos-stoji-svarak-punc-a-langos-napric-mesty-40552207' },
    { label: 'Advent Bazilika, επίσημο site', href: 'https://adventbazilika.hu/en' },
];

const h2 = 'text-2xl font-bold text-[#2E2E2F] mb-4';
const p = 'text-[#2E2E2F] mb-4 text-justify';
const link = 'text-blue-600 underline';

function Winner({ children }: { children: React.ReactNode }) {
    return (
        <p className="mt-4 mb-4 rounded-lg bg-[#F5F1ED] px-4 py-3 text-[#2E2E2F]">
            <strong>Ποια κερδίζει:</strong> {children}
        </p>
    );
}

function ChooseCard({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-[#2E2E2F] mb-3">{title}</h3>
            <ul className="list-disc list-inside space-y-2 text-[#2E2E2F]">
                {items.map((item) => (<li key={item}>{item}</li>))}
            </ul>
        </div>
    );
}

function PragueVsBudapest() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Πράγα ή Βουδαπέστη για Χριστούγεννα;', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Πράγα ή Βουδαπέστη για Χριστούγεννα; Η σύγκριση (2026)',
        description: 'Πράγα ή Βουδαπέστη για χριστουγεννιάτικο ταξίδι; Συγκρίνουμε αγορές, ατμόσφαιρα, τιμές, φαγητό και τι άλλο να κάνετε, για να διαλέξετε την πόλη που σας ταιριάζει.',
        image: `https://travelmpomps.gr${HERO_IMAGE}`,
        datePublished: '2026-11-20',
        dateModified: '2026-11-20',
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
                id="json-ld-breadcrumb-prague-vs-budapest"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-prague-vs-budapest"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-prague-vs-budapest"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Χριστουγεννιάτικες αγορές σε Πράγα και Βουδαπέστη"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Πράγα ή Βουδαπέστη για Χριστούγεννα;
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className={p}>
                    Από τη μία έχουμε ένα έλατο 25 μέτρων ακριβώς μέσα στην Παλιά Πλατεία της Πράγας, δίπλα στο Αστρονομικό Ρολόι. Από την άλλη, εντυπωσιακό φωτισμό στην πρόσοψη της Βασιλικής του Αγίου Στεφάνου της Βουδαπέστης και ζεστά λουτρά στο κρύο. Δύο από τις πιο όμορφες χριστουγεννιάτικες πόλεις της Ευρώπης, με παρόμοιες τιμές και περίπου την ίδια απόσταση από την Ελλάδα. Ποια να διαλέξετε;
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                    <strong>Με λίγα λόγια:</strong> διαλέξτε την <strong>Πράγα</strong> για το πιο παραμυθένιο σκηνικό και αν ταξιδεύετε μετά τα Χριστούγεννα. Διαλέξτε τη <strong>Βουδαπέστη</strong> για καλύτερο φαγητό στις αγορές, για τα λουτρά και αν θέλετε περισσότερα πράγματα να κάνετε πέρα από τις αγορές. Και οι δύο είναι από τις πιο οικονομικές επιλογές στην Ευρώπη τα Χριστούγεννα.
                </div>
                <p className={`${p} font-semibold`}>
                    Και οι δύο πόλεις είναι πραγματικά εντυπωσιακές, και οι περισσότεροι τις ερωτεύονται με την πρώτη ματιά. Οικονομικά όμως η Βουδαπέστη κερδίζει για έναν βασικό λόγο: θα βρείτε πολύ φθηνότερα αεροπορικά με low cost εταιρείες, ενώ για την Πράγα τα εισιτήρια είναι σαφώς ακριβότερα. Επιπλέον, η Βουδαπέστη έχει εμπειρίες που δεν θα βρείτε στην Πράγα, όπως τα εξωτερικά θερμά λουτρά και το τεράστιο παγοδρόμιο σε φυσική λίμνη, μπροστά από ένα κάστρο.
                </p>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Σύγκριση */}
                <div id="sygkrisi" className="mt-8 scroll-mt-24">
                    <h2 className={h2}>Η σύγκριση με μια ματιά</h2>
                    <ResponsiveTable columns={compareColumns} rows={compare} />
                    <p className="text-sm text-[#2E2E2F]/70 mt-3 mb-4">
                        Τιμές Βουδαπέστης 2026 (ισοτιμία περίπου 1 € = 360 HUF) και Πράγας Δεκεμβρίου 2025 (περίπου 1 € = 24 CZK).
                    </p>
                </div>

                {/* Αγορές */}
                <div id="agores" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Οι αγορές</h2>
                    <p className={p}>
                        <strong>Πράγα:</strong> η αγορά της <strong>Παλιάς Πλατείας</strong> είναι ίσως η πιο φωτογενής της Ευρώπης. Το έλατο, οι γοτθικοί πύργοι της εκκλησίας Týn και τα παστέλ σπίτια γύρω σας κάνουν την πλατεία να μοιάζει με σκηνικό ταινίας. Η δεύτερη μεγάλη αγορά, στην πλατεία Βάτσλαβ, είναι 5 λεπτά πιο πέρα και έχει περισσότερο φαγητό. Υπάρχουν και μικρότερες, όπως στην Πλατεία Ειρήνης, όπου πηγαίνουν οι ντόπιοι.
                    </p>
                    <p className={p}>
                        <strong>Βουδαπέστη:</strong> η <strong>Advent Bazilika</strong> έχει ψηφιστεί τέσσερις φορές η καλύτερη χριστουγεννιάτικη αγορά της Ευρώπης. Το μεγάλο της ατού είναι η <strong>τρισδιάστατη προβολή φωτός</strong> στην πρόσοψη της Βασιλικής, που φέτος ξεκινάει στις 17:30 και επαναλαμβάνεται κάθε μισή ώρα. Η <strong>Vörösmarty</strong>, 10 λεπτά πιο πέρα, είναι η παλαιότερη αγορά της πόλης, με τα καλύτερα χειροποίητα και πολύ φαγητό.
                    </p>
                    <Winner>
                        για ατμόσφαιρα και σκηνικό, η <strong>Πράγα</strong>. Για ποικιλία και φαγητό μέσα στην αγορά, η <strong>Βουδαπέστη</strong>.
                    </Winner>
                    <PhotoPair
                        left={{ src: '/blog_images/prague-vs-budapest-2.jpg', alt: 'Το έλατο στην Παλιά Πλατεία της Πράγας' }}
                        right={{ src: '/blog_images/prague-vs-budapest-3.jpg', alt: 'Η προβολή φωτός στη Βασιλική του Αγίου Στεφάνου στη Βουδαπέστη' }}
                    />
                </div>

                {/* Φαγητό */}
                <div id="fagito" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Φαγητό και τιμές</h2>
                    <p className={p}>
                        Οι τιμές είναι παρόμοιες. Ένα ζεστό κρασί κοστίζει περίπου 4 € και στις δύο πόλεις. Η μεγάλη διαφορά είναι στο φαγητό:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F] mb-4">
                        <li><strong>Βουδαπέστη:</strong> στις δύο μεγάλες αγορές, οι μεγάλοι πάγκοι φαγητού προσφέρουν συνήθως ένα πιάτο στα <strong>1.600 HUF (περίπου 4,50 €)</strong>, το λεγόμενο «Budapest menü». Φέτος περιλαμβάνει πιάτα όπως lecsó με λουκάνικο και székelykáposzta (χοιρινό με ξινολάχανο). Ένα απλό lángos κοστίζει 2.400 HUF (6,50 €). Υπάρχει και νέο παιδικό μενού κάτω από 1.000 HUF.</li>
                        <li><strong>Πράγα:</strong> δεν υπάρχει αντίστοιχο φθηνό μενού. Ένα λουκάνικο κοστίζει περίπου 160 CZK (6,50 €) και ένα langoš 200–240 CZK (8–10 €). Προσοχή στο <strong>ψητό ζαμπόν</strong>: η τιμή είναι για 100 γραμμάρια, και αν δεν ζητήσετε συγκεκριμένο βάρος, ο λογαριασμός ανεβαίνει πολύ.</li>
                    </ul>
                    <Winner>
                        η <strong>Βουδαπέστη</strong>, χάρη στο σταθερό φθηνό μενού και στη μεγαλύτερη ποικιλία.
                    </Winner>
                </div>

                {/* Τι να κάνετε */}
                <div id="kanete" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Τι να κάνετε πέρα από τις αγορές</h2>
                    <p className={p}>
                        <strong>Πράγα:</strong> η πόλη είναι από μόνη της ένα ανοιχτό μουσείο. Η <strong>Γέφυρα του Καρόλου</strong> τα χειμωνιάτικα πρωινά, με την ομίχλη πάνω από τον Μολδάβα, είναι από τις πιο όμορφες εικόνες της Ευρώπης. Υπάρχουν επίσης το <strong>Κάστρο της Πράγας</strong>, το <strong>Αστρονομικό Ρολόι</strong> και η μικρή αγορά στην Kampa.
                    </p>
                    <p className="text-[#2E2E2F] mb-2"><strong>Βουδαπέστη:</strong> έχει περισσότερες χειμερινές δραστηριότητες:</p>
                    <ul className="list-disc pl-6 space-y-2 text-[#2E2E2F]">
                        <li><strong>Λουτρά Széchenyi:</strong> εξωτερικές πισίνες με ζεστό νερό ενώ έξω κάνει κρύο. Η καλύτερη εμπειρία του χειμώνα.</li>
                        <li><strong>Φωτισμένο τραμ:</strong> τραμ στολισμένα με χιλιάδες λαμπάκια, με το κανονικό εισιτήριο.</li>
                        <li><strong>Πατινάζ:</strong> στο παγοδρόμιο του Városliget, μπροστά από ένα κάστρο.</li>
                        <li><strong>Κρουαζιέρα στον Δούναβη:</strong> το φωτισμένο Κοινοβούλιο από το νερό.</li>
                    </ul>
                    <Winner>
                        η <strong>Βουδαπέστη</strong>, αν θέλετε δραστηριότητες. Η <strong>Πράγα</strong>, αν σας αρκεί να περπατάτε και να χαζεύετε.
                    </Winner>
                </div>

                {/* Πότε */}
                <div id="pote" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Πότε να πάτε</h2>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Αν ταξιδεύετε αρχές ή μέσα Νοεμβρίου:</strong> <strong>Βουδαπέστη</strong>. Οι αγορές της άνοιξαν φέτος στις 13 Νοεμβρίου, ενώ της Πράγας ανοίγουν στις 28 Νοεμβρίου.</li>
                        <li><strong>Αν ταξιδεύετε ανάμεσα σε Χριστούγεννα και Πρωτοχρονιά:</strong> και οι δύο είναι καλές επιλογές. Οι μεγάλες αγορές της Πράγας μένουν ανοιχτές κάθε μέρα, ακόμα και ανήμερα, μέχρι τις <strong>6 Ιανουαρίου</strong>.</li>
                        <li><strong>Αν ταξιδεύετε μετά την Πρωτοχρονιά:</strong> <strong>Πράγα</strong>. Η Βουδαπέστη κλείνει τις αγορές της με την Πρωτοχρονιά.</li>
                        <li>
                            <strong>Για την Πρωτοχρονιά:</strong> η Βουδαπέστη έχει πάρτι στα λουτρά και ζωντανή νυχτερινή ζωή, αλλά <strong>όχι επίσημα πυροτεχνήματα</strong>. Δείτε περισσότερα στο άρθρο μας για την{' '}
                            <Link href="/blog/protoxronia-evropi" className={link}>Πρωτοχρονιά στην Ευρώπη</Link>.
                        </li>
                    </ul>
                </div>

                {/* Ποια να διαλέξετε */}
                <div id="epilogi" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Ποια να διαλέξετε</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ChooseCard title="Διαλέξτε την Πράγα αν…" items={choosePrague} />
                        <ChooseCard title="Διαλέξτε τη Βουδαπέστη αν…" items={chooseBudapest} />
                    </div>
                </div>

                {/* Και τις δύο */}
                <div id="dyo" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Μπορώ να δω και τις δύο;</h2>
                    <p className={p}>
                        Ναι, αλλά θέλει χρόνο. Το τρένο από την Πράγα στη Βουδαπέστη κάνει γύρω στις 7 ώρες. Αν έχετε 6–7 μέρες, μια καλή διαδρομή είναι <strong>Πράγα → Βιέννη → Βουδαπέστη</strong>, με 2 μέρες σε κάθε πόλη, ή και με μια στάση στη{' '}
                        <Link href="/blog/monoimeri-bratislava-apo-vienni" className={link}>Μπρατισλάβα</Link>. Έτσι βλέπετε τρεις από τις καλύτερες χριστουγεννιάτικες πόλεις της Ευρώπης σε ένα ταξίδι.
                    </p>
                </div>

                {/* Η δική μας γνώμη */}
                <div id="gnomi" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Η δική μας γνώμη</h2>
                    <div className="rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F] font-semibold">
                        Η τελική μας ψήφος πάει στη Βουδαπέστη, αν και λατρέψαμε την Πράγα. Η βραδινή βόλτα στον φωτισμένο Δούναβη είναι από τις ωραιότερες που μπορείτε να κάνετε σε χειμωνιάτικη Ευρώπη.
                    </div>
                </div>

                {/* FAQ */}
                <div id="faq" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Συχνές ερωτήσεις</h2>
                    <div className="space-y-6">
                        {faq.map((item) => (
                            <div key={item.q}>
                                <h3 className="text-lg font-bold text-[#2E2E2F] mb-1">{item.q}</h3>
                                <p className="text-[#2E2E2F] text-justify">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Διαβάστε αναλυτικά */}
                <div className="mt-8 pt-10 border-t border-gray-200">
                    <h2 className={h2}>Διαβάστε αναλυτικά</h2>
                    <ul className="list-disc pl-6 space-y-2 text-[#2E2E2F]">
                        <li><Link href="/blog/xristougenniatiki-agora-praga" className={link}>Χριστουγεννιάτικη αγορά στην Πράγα: τι να δείτε και τι κοστίζει</Link></li>
                        <li><Link href="/blog/xristougenna-voudapesti" className={link}>Χριστούγεννα στη Βουδαπέστη: αγορές, φαγητό, τι να κάνετε</Link></li>
                        <li><Link href="/destinations/prague" className={link}>Ο οδηγός μας για την Πράγα</Link></li>
                        <li><Link href="/destinations/budapest" className={link}>Ο οδηγός μας για τη Βουδαπέστη</Link></li>
                        <li><Link href="/blog/fthines-poleis-xristougenna-evropi" className={link}>7 φθηνές πόλεις για Χριστούγεννα στην Ευρώπη</Link></li>
                    </ul>
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

export default PragueVsBudapest
