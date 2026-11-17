import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaTrain, FaMapMarkedAlt, FaUtensils, FaClock, FaGifts, FaBalanceScale, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ResponsiveTable } from '@/app/components/ResponsiveTable';
import { PhotoPair } from '@/app/components/PhotoPair';
import { PhotoFull } from '@/app/components/PhotoFull';

const PAGE_URL = 'https://travelmpomps.gr/blog/monoimeri-bratislava-apo-vienni';
const HERO_IMAGE = '/blog_images/bratislava-day-1.jpg';

export const metadata: Metadata = {
    title: "Μονοήμερη στη Μπρατισλάβα από τη Βιέννη: Πώς θα Πάτε και Αξίζει;",
    description: "Πώς θα πάτε από τη Βιέννη στη Μπρατισλάβα με τρένο ή καράβι, πόσο κοστίζει το εισιτήριο, τι να δείτε σε μία μέρα και αν τελικά αξίζει η μονοήμερη.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Μονοήμερη στη Μπρατισλάβα από τη Βιέννη: Πώς θα Πάτε και Αξίζει;',
        description: 'Τρένο, εισιτήριο 19 €, τι να δείτε και πρόγραμμα για μία μέρα στη Μπρατισλάβα.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Το κάστρο της Μπρατισλάβας πάνω από τον Δούναβη',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaTrain className="w-5 h-5" />, label: 'Πώς θα πάτε', targetId: 'pos' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: 'Τι να δείτε σε μία μέρα', targetId: 'dite' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Τι να φάτε', targetId: 'fagito' },
    { icon: <FaClock className="w-5 h-5" />, label: 'Πρόγραμμα για μία μέρα', targetId: 'programma' },
    { icon: <FaGifts className="w-5 h-5" />, label: 'Τα Χριστούγεννα', targetId: 'christougenna' },
    { icon: <FaBalanceScale className="w-5 h-5" />, label: 'Αξίζει τελικά;', targetId: 'axizei' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const transportColumns = [
    { key: 'way', label: 'Τρόπος' },
    { key: 'duration', label: 'Διάρκεια' },
    { key: 'cost', label: 'Κόστος' },
    { key: 'frequency', label: 'Συχνότητα' },
];

const transport = [
    { way: 'Τρένο REX8 (Wien Hbf → Bratislava hl. st.)', duration: 'περίπου 56 λεπτά', cost: '12,70 € η διαδρομή ή 19 € μετ\' επιστροφής', frequency: 'Κάθε ώρα' },
    { way: 'Τρένο REX6 (Wien Hbf → Bratislava Petržalka)', duration: 'περίπου 1 ώρα', cost: 'Ακριβότερο', frequency: 'Κάθε ώρα' },
    { way: 'Καράβι Twin City Liner', duration: 'περίπου 80 λεπτά', cost: 'Ακριβότερο από το τρένο', frequency: 'Έως 5 φορές τη μέρα το καλοκαίρι, λιγότερες τον χειμώνα' },
];

type Spot = { title: string; body: React.ReactNode };

const spots: Spot[] = [
    {
        title: 'Κάστρο της Μπρατισλάβας',
        body: (
            <>
                Το τετράγωνο λευκό κάστρο με τους τέσσερις πύργους στέκεται πάνω από την πόλη και τον Δούναβη. <strong>Οι κήποι και ο εξωτερικός χώρος είναι δωρεάν</strong>, ανοιχτοί κάθε μέρα 08:00–22:00, με θέα σε όλη την πόλη και μέχρι την Αυστρία και την Ουγγαρία. Το μουσείο μέσα κοστίζει 14 € και είναι κλειστό την Τρίτη. Για μονοήμερη, οι κήποι και η θέα αρκούν.
            </>
        ),
    },
    {
        title: 'Καθεδρικός του Αγίου Μαρτίνου',
        body: 'Εδώ στέφθηκαν 11 βασιλιάδες της Ουγγαρίας, όταν η Μπρατισλάβα ήταν η πρωτεύουσά της. Η είσοδος στον κυρίως ναό είναι δωρεάν, ενώ ο θησαυρός και τα παρεκκλήσια κοστίζουν 5 €. Βρίσκεται στο κάτω μέρος του δρόμου που ανεβαίνει στο κάστρο.',
    },
    {
        title: 'Παλιά Πόλη',
        body: (
            <>
                Πλακόστρωτα στενά, παστέλ σπίτια και καφέ σε κάθε γωνιά. Το κέντρο είναι η <strong>Hlavné námestie</strong>, η κεντρική πλατεία, με το Παλιό Δημαρχείο. Ανεβείτε στην <strong>Πύλη του Μιχαήλ</strong>, τη μοναδική πύλη που σώζεται από τα μεσαιωνικά τείχη, για θέα από ψηλά (6 €, κλειστή την Τρίτη).
                <br /><br />
                Ψάξτε και τα <strong>αγάλματα της πόλης</strong>: τον <strong>Čumil</strong>, έναν εργάτη που ξεπροβάλλει από ένα φρεάτιο, τον στρατιώτη του Ναπολέοντα που ακουμπάει σε ένα παγκάκι και τον κύριο με το καπέλο στη γωνία. Ο Čumil είναι η πιο φωτογραφημένη «φιγούρα» της Μπρατισλάβας.
            </>
        ),
    },
    {
        title: 'Η Μπλε Εκκλησία',
        body: 'Η εκκλησία της Αγίας Ελισάβετ είναι βαμμένη ολόκληρη σε γαλάζιο παστέλ, από τους τοίχους μέχρι την οροφή. Είναι λίγο έξω από την Παλιά Πόλη, περίπου 10 λεπτά με τα πόδια, και μοιάζει με κάτι βγαλμένο από παραμύθι.',
    },
    {
        title: 'UFO: θέα από τη γέφυρα',
        body: (
            <>
                Στην κορυφή της γέφυρας SNP, στα 95 μέτρα, βρίσκεται ένας «ιπτάμενος δίσκος» με παρατηρητήριο, εστιατόριο και μπαρ. Το εισιτήριο για το παρατηρητήριο κοστίζει περίπου <strong>10–12 €</strong>, ανάλογα με την ημέρα και την ώρα. Αν φάτε κυρίως πιάτο στο εστιατόριο, η είσοδος στο παρατηρητήριο είναι δωρεάν. Τα πιάτα όμως κοστίζουν 40–50 €. Η καλύτερη ώρα είναι το ηλιοβασίλεμα.
            </>
        ),
    },
    {
        title: 'Κάστρο Devín: αν έχετε χρόνο',
        body: 'Ερείπια κάστρου πάνω σε βράχο, εκεί που ο ποταμός Μοράβας ενώνεται με τον Δούναβη, περίπου 20 λεπτά με λεωφορείο από το κέντρο. Η είσοδος κοστίζει 6 € τον χειμώνα και 8 € από τον Απρίλιο έως τον Οκτώβριο, και είναι κλειστό τη Δευτέρα. Θέλει μισή μέρα, οπότε ταιριάζει μόνο αν διανυκτερεύσετε.',
    },
];

const schedule = [
    { time: '09:00', text: 'τρένο REX8 από το Wien Hauptbahnhof.' },
    { time: '10:00', text: 'άφιξη στη Bratislava hlavná stanica και τραμ ή λεωφορείο για το κέντρο, με το ίδιο εισιτήριο.' },
    { time: '10:30', text: 'ανάβαση στο κάστρο για θέα, με το πρωινό φως.' },
    { time: '12:00', text: 'Καθεδρικός του Αγίου Μαρτίνου και κατέβασμα στην Παλιά Πόλη.' },
    { time: '13:00', text: 'μεσημεριανό με denné menu ή bryndzové halušky.' },
    { time: '14:30', text: 'Hlavné námestie, Πύλη του Μιχαήλ και κυνήγι αγαλμάτων.' },
    { time: '15:30', text: 'Μπλε Εκκλησία.' },
    { time: '16:30', text: 'UFO για το ηλιοβασίλεμα (τον χειμώνα νυχτώνει γύρω στις 16:00, οπότε πηγαίνετε νωρίτερα).' },
    { time: '18:30', text: 'τρένο της επιστροφής για τη Βιέννη.' },
];

const yes = [
    'Μένετε στη Βιέννη 4 μέρες ή περισσότερες και θέλετε μια αλλαγή.',
    'Θέλετε να «μαζέψετε» άλλη μία χώρα και πρωτεύουσα με ελάχιστο κόστος.',
    'Σας αρέσουν οι μικρές, χαλαρές πόλεις χωρίς πολύ κόσμο.',
];

const no = [
    'Έχετε μόνο 2–3 μέρες στη Βιέννη. Η Βιέννη έχει αρκετά για να γεμίσετε κάθε λεπτό.',
    'Περιμένετε μια «μικρή Πράγα». Η Μπρατισλάβα είναι όμορφη αλλά πολύ πιο μικρή, και έξω από την Παλιά Πόλη κυριαρχούν οι πολυκατοικίες της κομμουνιστικής εποχής.',
];

const faq = [
    {
        q: 'Πόσο κοστίζει το τρένο από τη Βιέννη στη Μπρατισλάβα;',
        a: '12,70 € η απλή διαδρομή ή 19 € μετ\' επιστροφής με το Bratislava Ticket, που περιλαμβάνει και τα μέσα μεταφοράς στη Μπρατισλάβα για την πρώτη μέρα.',
    },
    {
        q: 'Πόση ώρα κάνει το τρένο;',
        a: 'Περίπου 1 ώρα με το REX8 από το Wien Hauptbahnhof.',
    },
    {
        q: 'Χρειάζεται διαβατήριο;',
        a: 'Όχι, και οι δύο χώρες είναι στη ζώνη Σένγκεν και δεν υπάρχει κανένας έλεγχος. Έχετε όμως μαζί σας ταυτότητα ή διαβατήριο, όπως σε κάθε ταξίδι στο εξωτερικό.',
    },
    {
        q: 'Τι νόμισμα έχει η Σλοβακία;',
        a: 'Ευρώ, όπως και η Αυστρία.',
    },
    {
        q: 'Μπορώ να τη δω σε μισή μέρα;',
        a: 'Την Παλιά Πόλη και το κάστρο ναι. Για να δείτε και το UFO ή το Devín, χρειάζεστε ολόκληρη μέρα.',
    },
];

const sources = [
    { label: 'Seat61, Vienna to Bratislava by train', href: 'https://seat61.com/trains-and-routes/vienna-to-bratislava-by-train.htm' },
    { label: 'ÖBB, Bratislava Ticket', href: 'https://oebb.at/en/regionale-angebote/ueberregionale-angebote/bratislava-ticket.html' },
    { label: 'Itimaker, Bratislava sightseeing costs', href: 'https://www.itimaker.com/blog/bratislava-sightseeing-costs-2025' },
    { label: 'Third Eye Traveller, Bratislava UFO Tower (2026 Guide)', href: 'https://thirdeyetraveller.com/bratislava-ufo-tower/' },
    { label: 'UFO, Observation deck', href: 'https://u-f-o.sk/observation-deck' },
];

const h2 = 'text-2xl font-bold text-[#2E2E2F] mb-4';
const h3 = 'text-xl font-bold text-[#2E2E2F] mt-6 mb-2';
const p = 'text-[#2E2E2F] mb-4 text-justify';

function BratislavaDayTrip() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Μονοήμερη στη Μπρατισλάβα από τη Βιέννη', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Μονοήμερη στη Μπρατισλάβα από τη Βιέννη: Πώς θα πάτε και αξίζει;',
        description: 'Πώς θα πάτε από τη Βιέννη στη Μπρατισλάβα με τρένο ή καράβι, πόσο κοστίζει το εισιτήριο, τι να δείτε σε μία μέρα και αν τελικά αξίζει η μονοήμερη.',
        image: `https://travelmpomps.gr${HERO_IMAGE}`,
        datePublished: '2026-11-17',
        dateModified: '2026-11-17',
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
                id="json-ld-breadcrumb-bratislava-day"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-bratislava-day"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-bratislava-day"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Το κάστρο της Μπρατισλάβας πάνω από τον Δούναβη"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Μονοήμερη στη Μπρατισλάβα από τη Βιέννη: Πώς θα Πάτε και Αξίζει;
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className={p}>
                    Δύο πρωτεύουσες σε απόσταση μίας ώρας με τρένο, με εισιτήριο που κοστίζει λιγότερο από ένα γεύμα στη Βιέννη. Πρωινός καφές δίπλα στον Καθεδρικό του Αγίου Στεφάνου, μεσημεριανό με θέα τον Δούναβη από το κάστρο της Μπρατισλάβας, και το βράδυ πίσω στο ξενοδοχείο σας στη Βιέννη.
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                    <strong>Αξίζει; Ναι, αν μένετε στη Βιέννη 4 μέρες ή περισσότερες.</strong> Η Μπρατισλάβα είναι μικρή και το κέντρο της βλέπεται άνετα σε μία μέρα με τα πόδια. Το τρένο κάνει περίπου <strong>1 ώρα</strong> και το εισιτήριο μετ&apos; επιστροφής κοστίζει <strong>19 €</strong>, μαζί με δωρεάν μετακινήσεις μέσα στην πόλη. Η Σλοβακία έχει ευρώ, οπότε δεν χρειάζεται να αλλάξετε χρήματα.
                </div>
                <p className={p}>
                    Είναι μια μικρή πόλη με πολύ όμορφο ιστορικό κέντρο, και γι&apos; αυτό, κατά τη γνώμη μας, δεν χρειάζεται να μείνετε εκεί το βράδυ. Τα αγαπημένα μας σημεία ήταν η βόλτα στα πλακόστρωτα σοκάκια του κέντρου, η Μπλε Εκκλησία και η ανάβαση μέχρι το κάστρο.
                </p>
                <p className={p}>
                    Αυτό που μας έκανε μεγαλύτερη εντύπωση ήταν πόσο διαφορετική είναι από τη Βιέννη. Μόλις βγείτε λίγο από το κέντρο, νιώθετε ακόμα το κλίμα της κομμουνιστικής εποχής, με τις γκρίζες πολυκατοικίες και τα φαρδιά δρομάκια. Θα το δείτε, για παράδειγμα, στη διαδρομή προς τη Μπλε Εκκλησία.
                </p>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Πώς θα πάτε */}
                <div id="pos" className="mt-8 scroll-mt-24">
                    <h2 className={h2}>Πώς θα πάτε</h2>
                    <ResponsiveTable columns={transportColumns} rows={transport} />
                    <p className="text-sm text-[#2E2E2F]/70 mt-3 mb-4">
                        Οι τιμές είναι ενδεικτικές του 2026 και αλλάζουν. Ελέγξτε δρομολόγια και τιμές στο oebb.at πριν κλείσετε.
                    </p>

                    <h3 className={h3}>Με τρένο: η καλύτερη επιλογή</h3>
                    <p className={p}>
                        Πάρτε το <strong>REX8</strong> από τον κεντρικό σταθμό της Βιέννης (Wien Hauptbahnhof) προς τον κεντρικό σταθμό της Μπρατισλάβας (<strong>Bratislava hlavná stanica</strong>). Η διαδρομή κάνει περίπου 56 λεπτά, γιατί η γραμμή ηλεκτροδοτήθηκε τον Οκτώβριο του 2025. Δεν χρειάζεται κράτηση θέσης.
                    </p>
                    <p className={`${p} mb-2`}>Το καλύτερο εισιτήριο είναι το <strong>Bratislava Ticket</strong> (EuRegio) της ÖBB:</p>
                    <ul className="list-disc pl-6 space-y-2 text-[#2E2E2F] mb-4">
                        <li>Κοστίζει <strong>19 €</strong> μετ&apos; επιστροφής.</li>
                        <li>Την επιστροφή μπορείτε να την κάνετε την ίδια μέρα ή μέσα στις επόμενες τρεις μέρες.</li>
                        <li>Την πρώτη μέρα ισχύει και ως <strong>ημερήσιο εισιτήριο για λεωφορεία και τραμ στη Μπρατισλάβα</strong>.</li>
                    </ul>
                    <p className={p}>
                        Θα το βρείτε στα αυτόματα μηχανήματα του σταθμού, στα ταμεία ή στο oebb.at, στο μενού «Tickets for our neighbouring countries». Δεν εξαντλείται ποτέ, οπότε δεν χρειάζεται να το κλείσετε από πριν.
                    </p>
                    <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                        <strong>Προσοχή:</strong> μην πάρετε το REX6 προς <strong>Petržalka</strong>. Είναι ακριβότερο και φτάνει στη νότια πλευρά του Δούναβη, μακριά από το ιστορικό κέντρο.
                    </div>

                    <h3 className={h3}>Με καράβι: για το καλοκαίρι</h3>
                    <p className={p}>
                        Το <strong>Twin City Liner</strong> κάνει τη διαδρομή στον Δούναβη σε περίπου 80 λεπτά και σας αφήνει ακριβώς κάτω από την Παλιά Πόλη. Είναι πιο ακριβό και αραιό τον χειμώνα, αλλά η διαδρομή στο ποτάμι είναι εμπειρία από μόνη της. Μια καλή ιδέα είναι να πάτε με καράβι και να γυρίσετε με τρένο.
                    </p>
                </div>

                {/* Τι να δείτε */}
                <div id="dite" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Τι να δείτε σε μία μέρα</h2>
                    {spots.map((spot, index) => (
                        <React.Fragment key={spot.title}>
                            <h3 className={h3}>{spot.title}</h3>
                            <p className={p}>{spot.body}</p>
                            {index === 0 && (
                                <PhotoFull src="/blog_images/bratislava-day-2.jpg" alt="Το κάστρο της Μπρατισλάβας με τους τέσσερις πύργους" />
                            )}
                            {index === 3 && (
                                <PhotoPair
                                    left={{ src: '/blog_images/bratislava-day-3.jpg', alt: 'Ο Čumil, το διάσημο άγαλμα της Μπρατισλάβας' }}
                                    right={{ src: '/blog_images/bratislava-day-4.jpg', alt: 'Η Μπλε Εκκλησία της Αγίας Ελισάβετ στη Μπρατισλάβα' }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Τι να φάτε */}
                <div id="fagito" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Τι να φάτε</h2>
                    <p className={p}>
                        Δοκιμάστε <strong>bryndzové halušky</strong>, το εθνικό φαγητό της Σλοβακίας: μικρά νιόκι πατάτας με μαλακό τυρί πρόβειο και μπέικον. Για φθηνό μεσημεριανό, ψάξτε για <strong>denné menu</strong>, το ημερήσιο μενού με σούπα και κυρίως πιάτο που σερβίρουν τα περισσότερα εστιατόρια τις καθημερινές το μεσημέρι. Γενικά, το φαγητό και η μπίρα είναι φθηνότερα από τη Βιέννη.
                    </p>
                    <p className={p}>
                        Τις συγκεκριμένες προτάσεις μας για καφέ, γλυκό και εστιατόρια θα τις βρείτε στον{' '}
                        <Link href="/destinations/bratislava" className="text-blue-600 underline">οδηγό μας για τη Μπρατισλάβα</Link>.
                    </p>
                </div>

                {/* Πρόγραμμα */}
                <div id="programma" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Πρόγραμμα για μία μέρα</h2>
                    <ul className="space-y-2 text-[#2E2E2F]">
                        {schedule.map((s) => (
                            <li key={s.time} className="flex gap-3">
                                <span className="font-bold text-[#F76808] shrink-0 w-14">{s.time}</span>
                                <span>{s.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Χριστούγεννα */}
                <div id="christougenna" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Τα Χριστούγεννα</h2>
                    <p className={p}>
                        Η χριστουγεννιάτικη αγορά της Μπρατισλάβας στήνεται στην <strong>Hlavné námestie</strong> και σε δύο γειτονικές πλατείες, από τις <strong>27 Νοεμβρίου 2026 έως τις 3 Ιανουαρίου 2027</strong>. Είναι μικρή, αλλά είναι από τις πιο φθηνές της Ευρώπης: ένα ζεστό κρασί κοστίζει περίπου 3 €, όταν στη Βιέννη κοστίζει 5–7 €.
                    </p>
                    <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                        <strong>Το κόλπο:</strong> αν ταξιδεύετε Χριστούγεννα, μείνετε στη Μπρατισλάβα, όπου τα ξενοδοχεία είναι πολύ φθηνότερα, και πηγαίνετε για μία μέρα στη Βιέννη για τις αγορές της. Το εισιτήριο Vienna Special (19 € μετ&apos; επιστροφής) κάνει ακριβώς αυτή τη δουλειά ανάποδα.
                    </div>
                </div>

                {/* Αξίζει τελικά */}
                <div id="axizei" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Αξίζει τελικά;</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-[#2E2E2F] mb-3">Ναι, αν:</h3>
                            <ul className="list-disc list-inside space-y-2 text-[#2E2E2F]">
                                {yes.map((item) => (<li key={item}>{item}</li>))}
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold text-[#2E2E2F] mb-3">Όχι, αν:</h3>
                            <ul className="list-disc list-inside space-y-2 text-[#2E2E2F]">
                                {no.map((item) => (<li key={item}>{item}</li>))}
                            </ul>
                        </div>
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

                {/* Οργανώστε το ταξίδι */}
                <div className="mt-8 pt-10 border-t border-gray-200">
                    <h2 className={h2}>Οργανώστε όλο το ταξίδι</h2>
                    <p className={p}>
                        Για το υπόλοιπο ταξίδι δείτε τον{' '}
                        <Link href="/destinations/vienna" className="text-blue-600 underline font-bold">αναλυτικό οδηγό μας για τη Βιέννη</Link> και τον{' '}
                        <Link href="/destinations/bratislava" className="text-blue-600 underline font-bold">οδηγό μας για τη Μπρατισλάβα</Link>.
                        Αν πάτε τον Δεκέμβριο, δείτε και τις{' '}
                        <Link href="/blog/christougenniatikes-agores-vienni" className="text-blue-600 underline font-bold">χριστουγεννιάτικες αγορές της Βιέννης</Link>.
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

export default BratislavaDayTrip
