import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaTable, FaPlane, FaSuitcaseRolling, FaBriefcase, FaCalendarAlt, FaLightbulb, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ResponsiveTable } from '@/app/components/ResponsiveTable';

const PAGE_URL = 'https://travelmpomps.gr/blog/aposkeues-fthinotero-eisitirio';
const HERO_IMAGE = '/blog_images/aposkeues-1.jpg';
const LAST_UPDATED = '2 Νοεμβρίου 2026';

export const metadata: Metadata = {
    title: "Τι Αποσκευή Δίνει Κάθε Αεροπορική στο Φθηνότερο Εισιτήριο (2026)",
    description: "Aegean, SKY express, Ryanair, Wizz Air, easyJet, Volotea και άλλες: τι χωράει στο φθηνότερο εισιτήριο, διαστάσεις και πόσο κοστίζει η έξτρα χειραποσκευή.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Τι Αποσκευή Δίνει Κάθε Αεροπορική στο Φθηνότερο Εισιτήριο (2026)',
        description: 'Διαστάσεις, βάρος και τιμές χειραποσκευής για Aegean, SKY express, Ryanair, Wizz Air, easyJet και άλλες.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Χειραποσκευή και αποσκευές για αεροπορικά ταξίδια',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaTable className="w-5 h-5" />, label: 'Με μια ματιά', targetId: 'matia' },
    { icon: <FaPlane className="w-5 h-5" />, label: 'Οι ελληνικές αεροπορικές', targetId: 'ellinikes' },
    { icon: <FaSuitcaseRolling className="w-5 h-5" />, label: 'Οι μεγάλες low cost', targetId: 'lowcost' },
    { icon: <FaBriefcase className="w-5 h-5" />, label: 'Lufthansa, Austrian και Swiss', targetId: 'lufthansa' },
    { icon: <FaCalendarAlt className="w-5 h-5" />, label: 'Τι αλλάζει από το 2027', targetId: 'eu2027' },
    { icon: <FaLightbulb className="w-5 h-5" />, label: 'Tips για να μην πληρώσετε παραπάνω', targetId: 'tips' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const columns = [
    { key: 'airline', label: 'Εταιρεία' },
    { key: 'fare', label: 'Φθηνότερος ναύλος' },
    { key: 'includes', label: 'Τι περιλαμβάνει' },
    { key: 'extra', label: 'Έξτρα χειραποσκευή (περίπου)' },
];

const rows = [
    { airline: 'SKY express', fare: 'SKY offer / SKY joy', includes: <>Προσωπικό αντικείμενο <strong>και</strong> χειραποσκευή 8 kg</>, extra: 'Περιλαμβάνεται' },
    { airline: 'Aegean / Olympic Air', fare: 'Light', includes: <>Χειραποσκευή 8 kg <strong>ή</strong> προσωπικό αντικείμενο</>, extra: 'Με αναβάθμιση σε Flex έχετε και τα δύο' },
    { airline: 'Lufthansa, Austrian, Swiss', fare: 'Economy Light', includes: 'Χειραποσκευή 8 kg και προσωπικό αντικείμενο', extra: 'Περιλαμβάνεται' },
    { airline: 'easyJet', fare: 'Light', includes: 'Τσάντα κάτω από το κάθισμα 45×36×20 cm', extra: 'Cabin bag 40–60 €' },
    { airline: 'Ryanair', fare: 'Basic', includes: 'Σακίδιο 40×30×20 cm', extra: 'Regular περίπου 30–60 €' },
    { airline: 'Wizz Air', fare: 'Basic', includes: 'Σακίδιο 40×30×20 cm', extra: 'WIZZ Smart περίπου 30–60 €' },
    { airline: 'Volotea', fare: 'Standard', includes: 'Σακίδιο 40×30×20 cm', extra: 'Περίπου 20–50 €' },
    { airline: 'Vueling', fare: 'Light', includes: 'Σακίδιο 40×30×20 cm', extra: 'Από περίπου 40–60 €' },
    { airline: 'Transavia', fare: 'Basic', includes: 'Σακίδιο 40×30×20 cm', extra: 'Smart από περίπου 32–50 €' },
    { airline: 'SAS', fare: 'Basic', includes: 'Σακίδιο 40×30×25 cm', extra: 'Από περίπου 18–50 €' },
    { airline: 'Pegasus', fare: 'Light', includes: 'Σακίδιο 40×30×15 cm', extra: 'Saver από περίπου 30–50 €' },
    { airline: 'Air Serbia', fare: 'Economy Light', includes: 'Χειραποσκευή 8 kg', extra: 'Περιλαμβάνεται' },
    { airline: 'ITA Airways', fare: 'Economy Light', includes: 'Σακίδιο 40×30×15 cm + χειραποσκευή 8 kg', extra: 'Περιλαμβάνεται' },
    { airline: 'Air Cairo', fare: 'Super Light', includes: 'Σακίδιο 7 kg και 115 εκατοστά', extra: 'Χειραποσκευή 8 kg από 50 €' },
];

const faq = [
    {
        q: 'Ποια αεροπορική δίνει δωρεάν χειραποσκευή στο φθηνότερο εισιτήριο;',
        a: 'Η SKY express, που δίνει και χειραποσκευή 8 kg και προσωπικό αντικείμενο. Η Aegean στο Light δίνει ένα από τα δύο. Ο ναύλος Economy Light των Lufthansa, Austrian και Swiss περιλαμβάνει επίσης χειραποσκευή.',
    },
    {
        q: 'Ποιες διαστάσεις έχει το δωρεάν σακίδιο στη Ryanair και στη Wizz Air;',
        a: '40×30×20 cm και στις δύο, και πρέπει να χωράει κάτω από το κάθισμα.',
    },
    {
        q: 'Ποια low cost έχει το μεγαλύτερο δωρεάν σακίδιο;',
        a: 'Η easyJet, με τσάντα 45×36×20 cm έως 15 kg.',
    },
    {
        q: 'Θα γίνει δωρεάν η χειραποσκευή σε όλη την Ευρώπη;',
        a: 'Το προσωπικό αντικείμενο μάλλον ναι. Για τη χειραποσκευή των 7 kg, οι αεροπορικές θα μπορούν ακόμα να πουλάνε φθηνότερους ναύλους χωρίς αυτή, οπότε δεν είναι σίγουρο ότι θα περιλαμβάνεται στον φθηνότερο ναύλο. Σε κάθε περίπτωση, όχι πριν από τον Οκτώβριο του 2027.',
    },
];

const sources = [
    { label: 'Aegean, Fares 2026', href: 'https://www.aegeanhub.com/-/media/TravelAgents/Files/Aegean_fares-leaflet2026.pdf' },
    { label: 'Aegean, Baggage policy', href: 'https://www.aegeanhub.com/en/passenger-services-and-procedures/baggage/baggage-policy' },
    { label: 'SKY express, Τύποι ναύλων', href: 'https://www.skyexpress.gr/el/sky-experience/before-fly/fare-types' },
    { label: 'Eurosender, Αποσκευές SKY express', href: 'https://www.eurosender.com/el/aeroporikes/orio-aposkeuon-sky-express' },
    { label: 'Loudavymkrokem, Ryanair baggage 2026', href: 'https://loudavymkrokem.cz/en/ryanair-baggage-sizes-fees/' },
    { label: 'Loudavymkrokem, Wizz Air luggage 2026', href: 'https://loudavymkrokem.cz/en/wizz-air-luggage/' },
    { label: 'Loudavymkrokem, easyJet baggage 2026', href: 'https://loudavymkrokem.cz/en/easyjet-baggage-allowance/' },
    { label: 'Cestee, Volotea luggage', href: 'https://www.cestee.com/airline/volotea/luggage' },
    { label: 'Baggage Policies, Vueling 2026', href: 'https://baggagepolicies.com/?p=162' },
    { label: 'Transavia, Basic fare', href: 'https://www.transavia.com/help/en-fr/search-and-book/basic-smart-plus-max-fare/basic-fare' },
    { label: 'One Mile at a Time, Lufthansa Economy Basic', href: 'https://onemileatatime.com/news/lufthansa-economy-basic-fares-carry-on-bag-not-included/' },
    { label: 'Euronews, New EU cabin baggage rules', href: 'https://www.euronews.com/2026/10/01/explained-how-the-eus-new-cabin-baggage-rules-will-work-and-when-they-start' },
];

const h3 = 'text-xl font-bold text-[#2E2E2F] mt-6 mb-2';
const p = 'text-[#2E2E2F] mb-4 text-justify';

function CabinBaggage() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Τι αποσκευή δίνει κάθε αεροπορική', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Τι αποσκευή δίνει κάθε αεροπορική στο φθηνότερο εισιτήριο (2026)',
        description: 'Aegean, SKY express, Ryanair, Wizz Air, easyJet, Volotea και άλλες: τι χωράει στο φθηνότερο εισιτήριο, διαστάσεις και πόσο κοστίζει η έξτρα χειραποσκευή.',
        image: `https://travelmpomps.gr${HERO_IMAGE}`,
        datePublished: '2026-11-02',
        dateModified: '2026-11-02',
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
                id="json-ld-breadcrumb-baggage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-baggage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-baggage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Χειραποσκευή και βαλίτσες σε αεροδρόμιο"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Τι Αποσκευή Δίνει Κάθε Αεροπορική στο Φθηνότερο Εισιτήριο (2026)
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className={p}>
                    Βρήκατε εισιτήριο για Βιέννη με 29 €, και στο τέλος καταλήγει να γίνεται 70 € επειδή θέλετε να πάρετε και χειραποσκευή μαζί σας. Το «φθηνότερο εισιτήριο» δεν σημαίνει το ίδιο πράγμα σε κάθε αεροπορική. Σε κάποιες χωράει μόνο ένα μικρό σακίδιο κάτω από το κάθισμα, ενώ σε άλλες παίρνετε και βαλιτσάκι 8 κιλών. Οπότε μπορεί ένα πιο φθηνό εισιτήριο να σας βγει ίδιο ή και πιο ακριβό σε σχέση με μια άλλη αεροπορική.
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                    Με λίγα λόγια: <strong>η SKY express δίνει και προσωπικό αντικείμενο και χειραποσκευή 8 κιλών</strong> στον φθηνότερο ναύλο. Η <strong>Aegean</strong> δίνει <strong>ένα από τα δύο</strong>. Οι low cost (Ryanair, Wizz Air, easyJet, Volotea, Transavia) δίνουν <strong>μόνο ένα μικρό σακίδιο</strong>, και τη χειραποσκευή την πληρώνετε χωριστά.
                </div>
                <p className={p}>
                    Παρακάτω θα βρείτε τι ακριβώς ισχύει στην κάθε εταιρεία, με διαστάσεις και ενδεικτικές τιμές.
                </p>
                <p className="text-sm text-[#2E2E2F]/70 mb-4">
                    Τελευταία ενημέρωση: {LAST_UPDATED}. Οι όροι και οι τιμές αλλάζουν συχνά, οπότε ελέγξτε το site της εταιρείας πριν κλείσετε.
                </p>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Με μια ματιά */}
                <div id="matia" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Με μια ματιά
                    </h2>
                    <ResponsiveTable columns={columns} rows={rows} />
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Οι τιμές είναι ανά διαδρομή, όταν τις αγοράζετε online μαζί με το εισιτήριο. Στο αεροδρόμιο κοστίζουν πολύ περισσότερο.
                    </p>
                </div>

                {/* Ελληνικές */}
                <div id="ellinikes" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι ελληνικές αεροπορικές
                    </h2>

                    <h3 className={h3}>SKY express: η πιο γενναιόδωρη</h3>
                    <p className={p}>
                        Στους φθηνότερους ναύλους, <strong>SKY offer</strong> και <strong>SKY joy</strong>, παίρνετε <strong>και τα δύο</strong>: ένα προσωπικό αντικείμενο έως <strong>40×30×15 cm</strong> κάτω από το κάθισμα και μια χειραποσκευή έως <strong>8 kg</strong> στο ντουλάπι (55×40×23 cm).
                    </p>
                    <p className={p}>
                        Για city break 3–7 ημερών, αυτό σημαίνει ότι συνήθως δεν χρειάζεται να πληρώσετε τίποτα παραπάνω.
                    </p>

                    <h3 className={h3}>Aegean και Olympic Air: ένα από τα δύο</h3>
                    <p className={p}>
                        Ο φθηνότερος ναύλος της Aegean, ο <strong>Light</strong>, περιλαμβάνει <strong>μία χειραποσκευή έως 8 kg ή ένα προσωπικό αντικείμενο</strong>, όχι και τα δύο. Αν πάρετε βαλιτσάκι, δεν μπορείτε να έχετε και τσάντα ή σακίδιο από κάτω. Η χειραποσκευή μπορεί να είναι έως <strong>56×45×25 cm</strong> στα αεροσκάφη Airbus και 55×40×23 cm στα μικρότερα ελικοφόρα.
                    </p>
                    <p className={p}>
                        Για να έχετε και τα δύο, χρειάζεστε τον ναύλο <strong>Flex</strong>. Αποσκευή στο αμπάρι (23 kg) δίνει ο <strong>ComfortFlex</strong>.
                    </p>
                    <p className={`${p} italic`}>
                        💡 Tip: αν ταξιδεύετε με Light, βάλτε την τσάντα ή το laptop μέσα στο βαλιτσάκι πριν περάσετε την πύλη.
                    </p>
                </div>

                {/* Low cost */}
                <div id="lowcost" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι μεγάλες low cost
                    </h2>

                    <h3 className={h3}>Ryanair</h3>
                    <p className={p}>
                        Δωρεάν παίρνετε μόνο ένα <strong>σακίδιο 40×30×20 cm</strong> που χωράει κάτω από το κάθισμα. Η Ryanair δεν δίνει επίσημο όριο βάρους. Για χειραποσκευή <strong>55×40×20 cm έως 10 kg</strong> στο ντουλάπι χρειάζεστε το πακέτο <strong>Priority</strong>, περίπου 12–36 € ανά διαδρομή, το οποίο όμως περιλαμβάνει και επιλογή της θέσης. Αν φτάσετε στην πύλη με βαλιτσάκι χωρίς Priority, η χρέωση είναι περίπου 46–70 €.
                    </p>
                    <p className={p}>
                        Η κάρτα επιβίβασης είναι πλέον μόνο ψηφιακή, στην εφαρμογή της Ryanair.
                    </p>

                    <h3 className={h3}>Wizz Air</h3>
                    <p className={p}>
                        Και εδώ δωρεάν είναι μόνο ένα <strong>σακίδιο 40×30×20 cm</strong>, έως 10 kg. Οι διαστάσεις έχουν αλλάξει τα τελευταία χρόνια, οπότε μετρήστε το σακίδιό σας πριν φύγετε. Χειραποσκευή <strong>55×40×23 cm</strong> έως 10 kg παίρνετε με το <strong>WIZZ Priority</strong>.
                    </p>

                    <h3 className={h3}>easyJet: το μεγαλύτερο δωρεάν σακίδιο</h3>
                    <p className={p}>
                        Η easyJet δίνει τη <strong>μεγαλύτερη δωρεάν τσάντα</strong> από όλες τις low cost: <strong>45×36×20 cm έως 15 kg</strong>, κάτω από το κάθισμα. Σε αυτή χωράει άνετα ρουχισμός για ένα Σαββατοκύριακο. Η μεγάλη χειραποσκευή <strong>56×45×25 cm</strong> κοστίζει από περίπου 40 € αν το κλείσετε online. Οι θέσεις Up Front και Extra Legroom <strong>δεν</strong> την περιλαμβάνουν πια.
                    </p>

                    <h3 className={h3}>Volotea</h3>
                    <p className={p}>
                        Στον ναύλο <strong>Standard</strong> παίρνετε ένα <strong>σακίδιο 40×30×20 cm</strong>. Βαλιτσάκι <strong>55×40×20 cm έως 10 kg</strong> μπορείτε να προσθέσετε στην κράτηση για περίπου 20–50 €. Με τη συνδρομή Megavolotea, και τα δύο είναι δωρεάν.
                    </p>

                    <h3 className={h3}>Vueling, Transavia</h3>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Vueling:</strong> δωρεάν σακίδιο 40×30×20 cm. Βαλιτσάκι 55×40×20 cm έως 10 kg από περίπου 40 € online.</li>
                        <li><strong>Transavia:</strong> στον ναύλο Basic μόνο σακίδιο 40×30×20 cm κάτω από το κάθισμα. Βαλιτσάκι και αποσκευή αγοράζονται χωριστά.</li>
                    </ul>
                </div>

                {/* Lufthansa */}
                <div id="lufthansa" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Lufthansa, Austrian και Swiss
                    </h2>
                    <p className={p}>
                        Αν πετάτε για Βιέννη, Φρανκφούρτη, Μόναχο ή Ζυρίχη, ο ναύλος <strong>Economy Light</strong> περιλαμβάνει <strong>χειραποσκευή 8 kg</strong> και προσωπικό αντικείμενο. Προσοχή όμως: από τον Μάιο του 2026 ο όμιλος Lufthansa δοκιμάζει σε κάποιες διαδρομές έναν ακόμα φθηνότερο ναύλο, τον <strong>Economy Basic</strong>, που δίνει <strong>μόνο προσωπικό αντικείμενο</strong>. Ελέγξτε ποιον ναύλο διαλέγετε πριν πληρώσετε.
                    </p>
                </div>

                {/* 2027 */}
                <div id="eu2027" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Τι αλλάζει από το 2027
                    </h2>
                    <p className={p}>
                        Η Ευρωπαϊκή Ένωση ετοιμάζει νέους κανόνες. Το καλοκαίρι του 2026 Ευρωκοινοβούλιο και κράτη-μέλη κατέληξαν σε προσωρινή συμφωνία: κάθε επιβάτης θα δικαιούται <strong>δωρεάν προσωπικό αντικείμενο</strong> και, με τον κανονικό ναύλο, μία μεγαλύτερη <strong>χειραποσκευή έως 7 kg</strong> (συνολικές διαστάσεις έως 100 cm). Οι αεροπορικές θα μπορούν πάντως να πουλάνε και φθηνότερους ναύλους χωρίς χειραποσκευή, και δεν είναι ακόμα σαφές πώς θα λειτουργήσει η τιμολόγηση.
                    </p>
                    <p className={p}>
                        Οι κανόνες δεν ισχύουν ακόμα. Η νωρίτερη ημερομηνία που συζητιέται είναι ο <strong>Οκτώβριος του 2027</strong>. Μέχρι τότε ισχύουν οι κανόνες κάθε εταιρείας, όπως τους περιγράφουμε παραπάνω.
                    </p>
                </div>

                {/* Tips */}
                <div id="tips" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Tips για να μην πληρώσετε παραπάνω
                    </h2>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Ένα σακίδιο 40×30×15 cm χωράει σχεδόν παντού.</strong> Αυτές οι διαστάσεις είναι μέσα στα όρια σχεδόν όλων των εταιρειών της λίστας. Αν ταξιδεύετε συχνά με διαφορετικές αεροπορικές, αξίζει να αγοράσετε ένα. Διαφορετικά, μια απλή τσάντα πλάτης περνάει όλους τους ελέγχους.</li>
                        <li><strong>Πληρώστε την αποσκευή μαζί με το εισιτήριο.</strong> Οι low cost χρεώνουν πολύ ακριβότερα στο αεροδρόμιο και στην πύλη, συχνά πάνω από 60 €.</li>
                        <li><strong>Συγκρίνετε την τελική τιμή.</strong> Ένα εισιτήριο SKY express στα 60 € με βαλιτσάκι μπορεί να βγει φθηνότερο από ένα Ryanair στα 35 € συν Priority.</li>
                        <li><strong>Μετρήστε το σακίδιο γεμάτο.</strong> Στην πύλη ελέγχουν το σακίδιο όπως είναι, δηλαδή μαζί με τα εξωτερικά τσεπάκια και τα ρούχα που φουσκώνουν.</li>
                        <li><strong>Φορέστε τα βαριά.</strong> Μπουφάν, μπότες και φούτερ στο σώμα, όχι στη βαλίτσα. Ειδικά τον χειμώνα έτσι γλιτώνετε πολύ χώρο.</li>
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

                {/* Επόμενο βήμα */}
                <div className="mt-8 pt-10 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Σχεδιάζετε το επόμενο ταξίδι;
                    </h2>
                    <p className={p}>
                        Δείτε τους <Link href="/destinations" className="text-blue-600 underline font-bold">οδηγούς πόλεων</Link> μας για το επόμενο city break, ή τις{' '}
                        <Link href="/blog/fthines-poleis-xristougenna-evropi" className="text-blue-600 underline font-bold">πιο φθηνές πόλεις για Χριστούγεννα στην Ευρώπη</Link>.
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

export default CabinBaggage
