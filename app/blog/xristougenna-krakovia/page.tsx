import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaInfoCircle, FaEye, FaGifts, FaUtensils, FaExclamationTriangle, FaLightbulb, FaMapMarkedAlt, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ResponsiveTable } from '@/app/components/ResponsiveTable';
import { PhotoPair } from '@/app/components/PhotoPair';

const PAGE_URL = 'https://travelmpomps.gr/blog/xristougenna-krakovia';
const HERO_IMAGE = '/blog_images/krakow-xmas-1.jpg';

export const metadata: Metadata = {
    title: "Χριστούγεννα στην Κρακοβία 2026: Η Αγορά στην Κεντρική Πλατεία",
    description: "Η χριστουγεννιάτικη αγορά στη Rynek Główny της Κρακοβίας για το 2026: ημερομηνίες, τι να φάτε, πόσο κοστίζει, ο διαγωνισμός με τις φάτνες και tips για να μην πληρώσετε παραπάνω.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Χριστούγεννα στην Κρακοβία 2026: Η Αγορά στην Κεντρική Πλατεία',
        description: 'Rynek Główny, ο διαγωνισμός με τις szopki, τι να φάτε και πώς να μην πληρώσετε παραπάνω στους πάγκους.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Η χριστουγεννιάτικη αγορά στη Rynek Główny της Κρακοβίας',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaInfoCircle className="w-5 h-5" />, label: 'Η αγορά με μια ματιά', targetId: 'agora' },
    { icon: <FaEye className="w-5 h-5" />, label: 'Τι θα δείτε', targetId: 'thea' },
    { icon: <FaGifts className="w-5 h-5" />, label: 'Ο διαγωνισμός με τις φάτνες', targetId: 'szopki' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Τι να φάτε και πόσο κοστίζει', targetId: 'fagito' },
    { icon: <FaExclamationTriangle className="w-5 h-5" />, label: 'Προσοχή στα κρέατα με το βάρος', targetId: 'kreata' },
    { icon: <FaLightbulb className="w-5 h-5" />, label: 'Tips που πρέπει να ξέρετε', targetId: 'tips' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: 'Τι άλλο να κάνετε', targetId: 'alla' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const facts = [
    { label: 'Πού', value: 'Rynek Główny, γύρω από το Cloth Hall (Sukiennice) και τον Πύργο του Δημαρχείου' },
    { label: 'Πότε', value: '27/11/2026 – αρχές Ιανουαρίου 2027 (η ακριβής ημερομηνία λήξης δεν έχει ανακοινωθεί)' },
    { label: 'Ώρες', value: 'Συνήθως 10:00–21:00, Παρασκευή και Σάββατο μέχρι τις 22:00 (οι ώρες του 2026 δεν έχουν ανακοινωθεί ακόμα)' },
    { label: 'Είσοδος', value: 'Δωρεάν' },
    { label: 'Πάγκοι', value: 'Πάνω από 100 (πέρσι 105)' },
    { label: 'Μικρότερη αγορά', value: 'Mały Rynek, 2 λεπτά πίσω από την εκκλησία της Παναγίας' },
];

const foodColumns = [
    { key: 'item', label: 'Τι' },
    { key: 'what', label: 'Τι είναι' },
    { key: 'price', label: 'Τιμή' },
];

const foods = [
    { item: 'Grzaniec galicyjski', what: 'Ζεστό κρασί με μπαχαρικά (μικρό ποτήρι)', price: 'περίπου 18–35 PLN (4–8 €)' },
    { item: 'Oscypek', what: 'Καπνιστό τυρί από τα βουνά Tatra, ψητό με μαρμελάδα cranberry', price: 'περίπου 17 PLN (4 €)' },
    { item: 'Zapiekanka', what: 'Μισή μπαγκέτα στον φούρνο με μανιτάρια και τυρί', price: '30–38 PLN (7–9 €)' },
    { item: 'Żurek', what: 'Ξινή σούπα σίκαλης με λουκάνικο και αυγό', price: 'περίπου 35 PLN (8 €)' },
    { item: 'Kwaśnica', what: 'Σούπα με ξινολάχανο', price: 'περίπου 40 PLN (9,50 €)' },
    { item: 'Maczanka po krakowsku', what: 'Σάντουιτς με χοιρινό, η κρακοβιανή «σπεσιαλιτέ»', price: 'περίπου 45 PLN (10,50 €)' },
    { item: 'Σουβλάκι από τη σχάρα', what: 'Μεγάλο σουβλάκι με κρέας και λουκάνικο', price: 'περίπου 45 PLN (10,50 €)' },
];

const faq = [
    {
        q: 'Πότε ανοίγει η χριστουγεννιάτικη αγορά της Κρακοβίας το 2026;',
        a: 'Την Παρασκευή 27 Νοεμβρίου 2026, στη Rynek Główny. Μένει ανοιχτή μέχρι αρχές Ιανουαρίου 2027.',
    },
    {
        q: 'Είναι ακριβή η αγορά;',
        a: 'Για τα πολωνικά δεδομένα, ναι. Ένα ζεστό κρασί κοστίζει 4–8 € και ένα πιάτο γύρω στα 8–10 €. Η Κρακοβία όμως παραμένει πολύ φθηνότερη από τη Βιέννη ή το Μόναχο, ειδικά για διαμονή.',
    },
    {
        q: 'Πότε γίνεται ο διαγωνισμός με τις φάτνες;',
        a: 'Την πρώτη Πέμπτη του Δεκεμβρίου, φέτος στις 3 Δεκεμβρίου 2026, στο άγαλμα του Μιτσκέβιτς στην κεντρική πλατεία.',
    },
    {
        q: 'Είναι ανοιχτή η αγορά τα Χριστούγεννα;',
        a: 'Στις 24 Δεκεμβρίου οι περισσότεροι πάγκοι κλείνουν νωρίς. Μετά τις 26 Δεκεμβρίου η αγορά λειτουργεί με λιγότερους πάγκους, οπότε προτιμήστε να πάτε πριν τα Χριστούγεννα.',
    },
];

const sources = [
    { label: 'Radio Kraków, Krakowski jarmark bożonarodzeniowy już otwarty (2025)', href: 'https://www.radiokrakow.pl/aktualnosci/krakow/krakowski-jarmark-bozonarodzeniowy-juz-otwarty-105-kramow-na-rynku-glownym' },
    { label: 'Loudavymkrokem, Jarmark Bożonarodzeniowy Kraków 2026', href: 'https://loudavymkrokem.cz/pl/?p=89866' },
    { label: 'Super Biznes, Kosmiczne ceny na świątecznym jarmarku w Krakowie (2024)', href: 'https://superbiz.se.pl/wiadomosci/oburzeni-turysci-protestuja-kosmiczne-ceny-na-swiatecznym-jarmarku-aa-bYVY-Qquy-tv1S.html' },
];

const h2 = 'text-2xl font-bold text-[#2E2E2F] mb-4';
const p = 'text-[#2E2E2F] mb-4 text-justify';

function KrakowChristmas() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Χριστούγεννα στην Κρακοβία 2026', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Χριστούγεννα στην Κρακοβία 2026: Η αγορά στην κεντρική πλατεία',
        description: 'Η χριστουγεννιάτικη αγορά στη Rynek Główny της Κρακοβίας για το 2026: ημερομηνίες, τι να φάτε, πόσο κοστίζει, ο διαγωνισμός με τις φάτνες και tips για να μην πληρώσετε παραπάνω.',
        image: `https://travelmpomps.gr${HERO_IMAGE}`,
        datePublished: '2026-11-09',
        dateModified: '2026-11-09',
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
                id="json-ld-breadcrumb-krakow-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-krakow-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-krakow-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Η χριστουγεννιάτικη αγορά στη Rynek Główny της Κρακοβίας"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Χριστούγεννα στην Κρακοβία 2026: Η Αγορά στην Κεντρική Πλατεία
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className={p}>
                    Τα Χριστούγεννα στην Κρακοβία μοιάζουν με σκηνή από παραμύθι, και όλα γίνονται στη μεγαλύτερη μεσαιωνική πλατεία της Ευρώπης.
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                    Η χριστουγεννιάτικη αγορά στη <strong>Rynek Główny</strong> ανοίγει την <strong>Παρασκευή 27 Νοεμβρίου 2026</strong> και μένει ανοιχτή μέχρι αρχές Ιανουαρίου. Η είσοδος είναι δωρεάν. Το φαγητό όμως δεν είναι τόσο φθηνό όσο θα περιμένατε για Πολωνία, οπότε παρακάτω θα σας πούμε τι αξίζει και πού να προσέξετε.
                </div>
                <p className={p}>
                    Το φαγητό στην Πολωνία είναι γενικά φθηνό. Επειδή όμως πληρώνετε σε ζλότι, είναι εύκολο να χάσετε την αίσθηση του πόσο ξοδεύετε και να πληρώσετε πολύ περισσότερα από όσα νομίζετε. Αυτό πάθαμε κι εμείς σε έναν πάγκο με ψητό κρέας. Πήραμε μία μερίδα χωρίς να το πολυσκεφτούμε, και μόνο όταν είδαμε τη χρέωση στη Revolut καταλάβαμε πόσα είχαμε δώσει.
                </p>
                <p className={p}>
                    Η συμβουλή μας: προτιμήστε μια σούπα ή μια μερίδα pierogi, που έχουν σταθερή τιμή, και αφήστε τα κρέατα με το βάρος για κάποιο εστιατόριο.
                </p>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Η αγορά με μια ματιά */}
                <div id="agora" className="mt-8 scroll-mt-24">
                    <h2 className={h2}>Η αγορά με μια ματιά</h2>
                    <dl className="rounded-2xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-100 text-[#2E2E2F]">
                        {facts.map((f) => (
                            <div key={f.label} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-4 px-4 py-3">
                                <dt className="font-bold">{f.label}</dt>
                                <dd>{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Στις 24 Δεκεμβρίου οι περισσότεροι πάγκοι κλείνουν νωρίς ή δεν ανοίγουν καθόλου, αλλά η πλατεία μένει στολισμένη και φωτισμένη.
                    </p>
                </div>

                {/* Τι θα δείτε */}
                <div id="thea" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Τι θα δείτε</h2>
                    <p className={p}>
                        Πέρσι η κεντρική πλατεία στολίστηκε με <strong>πάνω από 600 ζωντανά έλατα</strong>, λευκά φωτάκια, γιρλάντες και φωτισμένα αστέρια. Η αγορά στήνεται ακριβώς δίπλα στο Cloth Hall, με φόντο τη Βασιλική της Παναγίας. Οι πάγκοι έρχονται από όλη την Πολωνία, αλλά και από Λιθουανία, Ουκρανία, Σλοβακία και Ουγγαρία.
                    </p>
                    <p className={p}>
                        Θα βρείτε κεραμικά, χειροποίητα ξύλινα στολίδια, μάλλινα, δερμάτινα, κοσμήματα από κεχριμπάρι και τοπικά προϊόντα: αλλαντικά, τυριά, γλυκά και ψωμί. Μπροστά στη σκηνή στήνεται μια μεγάλη ξύλινη φάτνη, και σχεδόν κάθε μέρα υπάρχουν συναυλίες με κάλαντα και παραδοσιακά συγκροτήματα από τη γύρω περιοχή.
                    </p>
                    <p className={p}>
                        <strong>Μην χάσετε το σάλπισμα (Hejnał):</strong> κάθε ώρα ένας σαλπιγκτής παίζει μια σύντομη μελωδία από τον ψηλότερο πύργο της Βασιλικής της Παναγίας. Η μελωδία σταματάει απότομα στη μέση, σε ανάμνηση του σαλπιγκτή που, σύμφωνα με τον θρύλο, χτυπήθηκε από βέλος τον 13ο αιώνα. Χαιρετήστε τον όταν τελειώσει, συνήθως σας χαιρετάει πίσω.
                    </p>
                </div>

                {/* Szopki */}
                <div id="szopki" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Ο διαγωνισμός με τις φάτνες της Κρακοβίας</h2>
                    <p className={p}>
                        Αν βρεθείτε στην Κρακοβία την <strong>Πέμπτη 3 Δεκεμβρίου 2026</strong>, θα δείτε κάτι μοναδικό. Κάθε χρόνο, την πρώτη Πέμπτη του Δεκεμβρίου, οι τεχνίτες της πόλης φέρνουν στο άγαλμα του Μιτσκέβιτς, στην κεντρική πλατεία, τις <strong>szopki</strong>: πολύχρωμες φάτνες με πύργους, τρούλους και αστραφτερό χαρτί, εμπνευσμένες από τα κτίρια της Κρακοβίας. Ο διαγωνισμός γίνεται από το 1937 και είναι μέρος της άυλης πολιτιστικής κληρονομιάς της UNESCO.
                    </p>
                    <p className={p}>
                        Αν δεν προλάβετε την παρουσίαση, οι καλύτερες φάτνες εκτίθενται μετά για αρκετές εβδομάδες στο Μουσείο της Κρακοβίας, και πολλές μικρότερες στις βιτρίνες των μαγαζιών γύρω από την πλατεία.
                    </p>
                </div>

                {/* Φαγητό */}
                <div id="fagito" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Τι να φάτε και πόσο κοστίζει</h2>
                    <ResponsiveTable columns={foodColumns} rows={foods} />
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Τιμές από την αγορά της Rynek Główny το 2024 και το 2025, με ισοτιμία περίπου 1 € = 4,2 PLN.
                    </p>
                    <p className={p}>
                        Αξίζει να δοκιμάσετε επίσης <strong>pierogi</strong> (πολωνικά πιροσκί) και <strong>placki ziemniaczane</strong> (τηγανίτες πατάτας). Για γλυκό, πάρτε <strong>pierniki</strong>, τα πολωνικά μελομακάρονα με μπαχαρικά, που κάνουν και ωραίο δώρο.
                    </p>
                    <PhotoPair
                        left={{ src: '/blog_images/krakow-xmas-3.jpg', alt: 'Οι szopki, οι φάτνες της Κρακοβίας, στο άγαλμα του Μιτσκέβιτς' }}
                        right={{ src: '/blog_images/krakow-xmas-4.jpg', alt: 'Πάγκος με oscypek και ζεστό κρασί στην αγορά της Κρακοβίας' }}
                    />
                </div>

                {/* Κρέατα */}
                <div id="kreata" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Προσοχή στα κρέατα με το βάρος</h2>
                    <p className={p}>
                        Όπως και στην Πράγα, κάποια κρέατα, ειδικά το <strong>golonka</strong> (ψητό κότσι) και τα ψητά της σχάρας, πουλιούνται <strong>με το βάρος</strong>. Η τιμή στην ταμπέλα είναι συχνά για 100 γραμμάρια. Τον Δεκέμβριο του 2024 μια τουρίστρια από τη Μάλτα πλήρωσε 354,90 ζλότι, περίπου 83 €, για ένα γεύμα με σουβλάκι, golonka και συνοδευτικά, και η ιστορία έγινε viral στον πολωνικό Τύπο.
                    </p>
                    <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                        <strong>Πώς να το αποφύγετε:</strong> ρωτήστε πριν παραγγείλετε πόσο κοστίζει η μερίδα και πόσο ζυγίζει. Αν η τιμή είναι για 100 γραμμάρια, ζητήστε συγκεκριμένο βάρος και κοιτάξτε τη ζυγαριά.
                    </div>
                </div>

                {/* Tips */}
                <div id="tips" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Tips που πρέπει να ξέρετε</h2>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Πληρώστε σε ζλότι.</strong> Η Πολωνία δεν έχει ευρώ. Οι περισσότεροι πάγκοι δέχονται κάρτα, αλλά έχετε και λίγα μετρητά. Αν το POS σας ρωτήσει, διαλέξτε πάντα χρέωση σε ζλότι και όχι σε ευρώ.</li>
                        <li><strong>Για φαγητό, ένα στενό πιο πέρα.</strong> Ένα πιάτο στην πλατεία κοστίζει όσο ένα ολόκληρο γεύμα σε milk bar (bar mleczny), τα παραδοσιακά πολωνικά εστιατόρια όπου τρώτε pierogi και σούπα για λίγα ευρώ.</li>
                        <li><strong>Πηγαίνετε καθημερινή μετά τις 16:00.</strong> Νυχτώνει νωρίς, γύρω στις 15:30, και τα φώτα ανάβουν. Το Σαββατοκύριακο το βράδυ η πλατεία γεμίζει πολύ.</li>
                        <li><strong>Ντυθείτε πολύ ζεστά.</strong> Τον Δεκέμβριο η θερμοκρασία πέφτει συχνά κάτω από το μηδέν, και θα στέκεστε ώρες στο πλακόστρωτο.</li>
                        <li><strong>Πηγαίνετε πριν τα Χριστούγεννα.</strong> Μετά τις 26 Δεκεμβρίου αρκετοί πάγκοι κλείνουν και η αγορά αδειάζει.</li>
                    </ul>
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        <strong>Budget tip:</strong> στον{' '}
                        <Link href="/destinations/krakow" className="text-blue-600 underline">οδηγό μας για την Κρακοβία</Link>{' '}
                        θα βρείτε μαγαζιά για φθηνό και καλό πολωνικό φαγητό, μακριά από τις τιμές της πλατείας.
                    </p>
                </div>

                {/* Τι άλλο */}
                <div id="alla" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className={h2}>Τι άλλο να κάνετε τα Χριστούγεννα στην Κρακοβία</h2>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Kazimierz:</strong> η παλιά εβραϊκή συνοικία, με μικρότερη αγορά, ατμοσφαιρικά καφέ και μπαρ. Δοκιμάστε μια zapiekanka στην πλατεία Nowy, εκεί που τη φτιάχνουν καλύτερα και φθηνότερα από την αγορά.</li>
                        <li><strong>Wawel:</strong> το κάστρο και ο καθεδρικός πάνω από τον Βιστούλα. Τον χειμώνα η βόλτα γύρω από τα τείχη, με θέα στο ποτάμι, είναι από τις πιο όμορφες της πόλης.</li>
                        <li><strong>Ορυχείο αλατιού Wieliczka:</strong> μισή ώρα από το κέντρο. Η τεράστια υπόγεια εκκλησία από αλάτι είναι ακόμα πιο εντυπωσιακή τα Χριστούγεννα.</li>
                    </ul>
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
                        Για μεταφορά από το αεροδρόμιο, μετακινήσεις, διαμονή και πρόγραμμα ημερών δείτε τον{' '}
                        <Link href="/destinations/krakow" className="text-blue-600 underline font-bold">αναλυτικό οδηγό μας για την Κρακοβία</Link>.
                        Αν ακόμα διαλέγετε πόλη, δείτε και τις{' '}
                        <Link href="/blog/fthines-poleis-xristougenna-evropi" className="text-blue-600 underline font-bold">7 φθηνές πόλεις για Χριστούγεννα στην Ευρώπη</Link>{' '}
                        και τη{' '}
                        <Link href="/blog/xristougenniatiki-agora-praga" className="text-blue-600 underline font-bold">χριστουγεννιάτικη αγορά στην Πράγα</Link>.
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

export default KrakowChristmas
