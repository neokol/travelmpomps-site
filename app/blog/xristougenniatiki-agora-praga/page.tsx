import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaTable, FaStar, FaUtensils, FaExclamationTriangle, FaLightbulb, FaRoute, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ResponsiveTable } from '@/app/components/ResponsiveTable';
import { PhotoPair } from '@/app/components/PhotoPair';

const PAGE_URL = 'https://travelmpomps.gr/blog/xristougenniatiki-agora-praga';
const HERO_IMAGE = '/blog_images/prague-xmas-1.jpg';

export const metadata: Metadata = {
    title: "Χριστουγεννιάτικη Αγορά στην Πράγα 2026: Τι να Δείτε και Τι Κοστίζει",
    description: "Οι χριστουγεννιάτικες αγορές της Πράγας για το 2026: ημερομηνίες, ώρες, τιμές για svařák, trdelník και λουκάνικο, η «παγίδα» με το ζαμπόν και μια διαδρομή για ένα βράδυ.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Χριστουγεννιάτικη Αγορά στην Πράγα 2026: Τι να Δείτε και Τι Κοστίζει',
        description: 'Ημερομηνίες, τιμές, η παγίδα με το ζαμπόν και μια διαδρομή με τα πόδια για ένα βράδυ στις αγορές της Πράγας.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Χριστουγεννιάτικη αγορά στην Παλιά Πλατεία της Πράγας',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaTable className="w-5 h-5" />, label: 'Οι αγορές με μια ματιά', targetId: 'agores' },
    { icon: <FaStar className="w-5 h-5" />, label: 'Οι αγορές που αξίζουν', targetId: 'top' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Τι να φάτε και πόσο κοστίζει', targetId: 'fagito' },
    { icon: <FaExclamationTriangle className="w-5 h-5" />, label: 'Προσοχή στο ζαμπόν', targetId: 'zambon' },
    { icon: <FaLightbulb className="w-5 h-5" />, label: 'Tips που πρέπει να ξέρετε', targetId: 'tips' },
    { icon: <FaRoute className="w-5 h-5" />, label: 'Διαδρομή μιας βραδιάς', targetId: 'diadromi' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const marketColumns = [
    { key: 'market', label: 'Αγορά' },
    { key: 'dates', label: 'Ημερομηνίες 2026' },
    { key: 'hours', label: 'Ώρες' },
    { key: 'best', label: 'Ιδανική για' },
];

const markets = [
    { market: 'Παλιά Πλατεία (Staroměstské náměstí)', dates: '28/11 – 6/1/2027', hours: 'Καθημερινά 10:00–22:00', best: 'Το έλατο και την ατμόσφαιρα' },
    { market: 'Πλατεία Βάτσλαβ (Václavské náměstí)', dates: '28/11 – 6/1/2027', hours: 'Καθημερινά 10:00–22:00', best: 'Φαγητό με λιγότερο κόσμο' },
    { market: 'Πλατεία Δημοκρατίας (Náměstí Republiky)', dates: '25/11 – 24/12', hours: 'Καθημερινά 10:00–20:00', best: 'Μια γρήγορη στάση στην αρχή της βόλτας' },
    { market: 'Πλατεία Ειρήνης (Náměstí Míru)', dates: '20/11 – 24/12', hours: 'Καθημερινά 10:00–20:00', best: 'Τοπική ατμόσφαιρα, λιγότεροι τουρίστες' },
    { market: 'Kampa', dates: '3/12 – 4/1/2027', hours: 'Καθημερινά 10:00–20:00', best: 'Ήσυχη βόλτα κάτω από τη Γέφυρα του Καρόλου' },
];

const foodColumns = [
    { key: 'item', label: 'Τι' },
    { key: 'what', label: 'Τι είναι' },
    { key: 'price', label: 'Τιμή' },
];

const foods = [
    { item: 'Svařák', what: 'Ζεστό κρασί', price: 'περίπου 100 CZK (4 €)' },
    { item: 'Medovina', what: 'Ζεστό υδρόμελο', price: 'περίπου 100 CZK (4 €)' },
    { item: 'Horké jablko', what: 'Ζεστός χυμός μήλου, χωρίς αλκοόλ', price: 'περίπου 70 CZK (3 €)' },
    { item: 'Trdelník', what: 'Γλυκό σε σχήμα «καμινάδας»', price: 'από 100 CZK (4 €)' },
    { item: 'Klobása', what: 'Ψητό λουκάνικο με ψωμί και μουστάρδα', price: 'περίπου 160 CZK (6,50 €)' },
    { item: 'Langoš', what: 'Τηγανητή πίτα με σκόρδο, κέτσαπ και τυρί', price: '200–240 CZK (8–10 €)' },
    { item: 'Pražská šunka', what: 'Ψητό ζαμπόν Πράγας, πωλείται με το βάρος', price: 'περίπου 100 CZK το 100άρι (4 €)' },
];

const topMarkets: { title: string; body: React.ReactNode }[] = [
    {
        title: 'Παλιά Πλατεία: η πιο όμορφη',
        body: (
            <>
                Η πιο διάσημη χριστουγεννιάτικη αγορά της Πράγας και μία από τις ωραιότερες της Ευρώπης. Στο κέντρο της στέκεται ένα <strong>έλατο περίπου 25 μέτρων</strong>, που κάθε χρόνο έρχεται από διαφορετική περιοχή της Τσεχίας. Ανάβει για πρώτη φορά στα εγκαίνια, στις 28 Νοεμβρίου γύρω στις 16:30. Μετά, κάθε βράδυ από τις 16:30 έως τις 21:30, κάνει μικρό show με φώτα και μουσική στην αρχή κάθε ώρας.
                <br /><br />
                Υπάρχει και μια υπερυψωμένη εξέδρα για να δείτε την πλατεία από ψηλά. Συνδυάστε την αγορά με το <strong>Αστρονομικό Ρολόι</strong>, που «παίζει» επίσης κάθε ώρα.
            </>
        ),
    },
    {
        title: 'Πλατεία Βάτσλαβ: για φαγητό',
        body: 'Η πλατεία είναι στην ουσία μια μεγάλη λεωφόρος, οπότε η αγορά απλώνεται σε μήκος και έχει λίγο λιγότερο στρίμωγμα. Εδώ θα βρείτε τους περισσότερους πάγκους φαγητού. Είναι 5 λεπτά με τα πόδια από την Παλιά Πλατεία.',
    },
    {
        title: 'Πλατεία Ειρήνης: εκεί που πάνε οι ντόπιοι',
        body: 'Στη γειτονιά Vinohrady, μπροστά στον νεογοτθικό ναό της Αγίας Λουδμίλας. Ανοίγει πρώτη από όλες, στις 20 Νοεμβρίου. Έχει περισσότερα χειροποίητα, λιγότερα τουριστικά σουβενίρ και πιο ήρεμη ατμόσφαιρα. Πάρτε το μετρό (γραμμή A) μέχρι τη στάση Náměstí Míru.',
    },
    {
        title: 'Kampa: για ήσυχη βόλτα',
        body: 'Μικρή αγορά στο νησάκι Kampa, ακριβώς κάτω από τη Γέφυρα του Καρόλου, στη Μάλα Στράνα. Ιδανική για να κλείσετε τη βραδιά, αφού διασχίσετε τη γέφυρα.',
    },
];

const route = [
    { name: 'Πλατεία Δημοκρατίας', text: 'δίπλα στο Δημοτικό Μέγαρο (Obecní dům). Ξεκινήστε γύρω στις 16:00.' },
    { name: 'Πλατεία Βάτσλαβ', text: 'περίπου 7 λεπτά μέσω του πεζόδρομου Na Příkopě. Εδώ το φαγητό.' },
    { name: 'Παλιά Πλατεία', text: 'περίπου 5 λεπτά. Φτάστε λίγο πριν την ώρα για να δείτε το show με το έλατο.' },
    { name: 'Γέφυρα του Καρόλου και Kampa', text: 'περίπου 10 λεπτά. Η γέφυρα φωτισμένη το βράδυ και ένα τελευταίο ζεστό κρασί στην Kampa.' },
];

const faq = [
    {
        q: 'Πότε ανοίγει η χριστουγεννιάτικη αγορά στην Πράγα το 2026;',
        a: 'Οι μεγάλες αγορές στην Παλιά Πλατεία και στην πλατεία Βάτσλαβ ανοίγουν στις 28 Νοεμβρίου 2026 και κλείνουν στις 6 Ιανουαρίου 2027. Η πρώτη που ανοίγει είναι στην Πλατεία Ειρήνης, στις 20 Νοεμβρίου.',
    },
    {
        q: 'Είναι ανοιχτές τα Χριστούγεννα;',
        a: 'Ναι, οι δύο μεγάλες αγορές είναι ανοιχτές κάθε μέρα, και την Παραμονή, και ανήμερα, και την Πρωτοχρονιά. Η Πλατεία Δημοκρατίας και η Πλατεία Ειρήνης κλείνουν στις 24 Δεκεμβρίου, ενώ η Kampa μένει ανοιχτή μέχρι τις 4 Ιανουαρίου.',
    },
    {
        q: 'Πόσο κοστίζει ένα ζεστό κρασί;',
        a: 'Περίπου 100 κορώνες, δηλαδή γύρω στα 4 €.',
    },
    {
        q: 'Είναι ακριβή η αγορά της Πράγας;',
        a: 'Η Πράγα είναι από τις πιο οικονομικές πόλεις της Ευρώπης για φαγητό και ποτό τα Χριστούγεννα. Τα ξενοδοχεία όμως ακριβαίνουν πολύ τον Δεκέμβριο, οπότε κλείστε νωρίς.',
    },
];

const sources = [
    { label: 'Prague Experience, Christmas Markets 2026–27', href: 'https://www.pragueexperience.com/events/christmas-markets.asp' },
    { label: 'Novinky.cz, Τιμές στις χριστουγεννιάτικες αγορές 2025', href: 'https://www.novinky.cz/clanek/domaci-vanocni-trhy-pod-lupou-kolik-letos-stoji-svarak-punc-a-langos-napric-mesty-40552207' },
    { label: 'Living Prague, Prague Christmas markets: eight things to know', href: 'https://livingprague.com/festivals-holidays/prague-christmas-markets-eight-things-know/' },
    { label: 'Expats.cz, Old Town Square ham stand', href: 'https://expats.cz/czech-news/article/prague-is-finally-looking-to-stick-it-to-old-town-square-ham-stand' },
];

const h3 = 'text-xl font-bold text-[#2E2E2F] mt-6 mb-2';
const p = 'text-[#2E2E2F] mb-4 text-justify';

function PragueChristmasMarkets() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Χριστουγεννιάτικη αγορά στην Πράγα 2026', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Χριστουγεννιάτικη αγορά στην Πράγα 2026: Τι να δείτε και τι κοστίζει',
        description: 'Οι χριστουγεννιάτικες αγορές της Πράγας για το 2026: ημερομηνίες, ώρες, τιμές για svařák, trdelník και λουκάνικο, η «παγίδα» με το ζαμπόν και μια διαδρομή για ένα βράδυ.',
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
                id="json-ld-breadcrumb-prague-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-prague-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-prague-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Το χριστουγεννιάτικο έλατο και η αγορά στην Παλιά Πλατεία της Πράγας"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Χριστουγεννιάτικη Αγορά στην Πράγα 2026: Τι να Δείτε και Τι Κοστίζει
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className={p}>
                    Ένα έλατο 25 μέτρων στην Παλιά Πλατεία, που ανάβει με μουσική κάθε μία ώρα, το Αστρονομικό Ρολόι λίγα μέτρα πιο πέρα και η μυρωδιά από ζεστό κρασί και ψητό ζαμπόν παντού. Αν υπάρχει πόλη που μοιάζει με χριστουγεννιάτικη καρτ ποστάλ, τότε αυτή είναι η Πράγα.
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                    Οι δύο μεγάλες αγορές, στην <strong>Παλιά Πλατεία</strong> και στην <strong>πλατεία Βάτσλαβ</strong>, ανοίγουν στις <strong>28 Νοεμβρίου 2026</strong> και μένουν ανοιχτές μέχρι τις <strong>6 Ιανουαρίου 2027</strong>, κάθε μέρα 10:00–22:00. Ένα ζεστό κρασί κοστίζει περίπου <strong>100 κορώνες (4 €)</strong>. Το μόνο που θέλει προσοχή είναι το ζαμπόν, και θα σας εξηγήσουμε παρακάτω γιατί.
                </div>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Αγορές με μια ματιά */}
                <div id="agores" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι αγορές με μια ματιά
                    </h2>
                    <ResponsiveTable columns={marketColumns} rows={markets} />
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Η είσοδος είναι δωρεάν παντού. Οι δύο μεγάλες αγορές μένουν ανοιχτές ακόμα και Παραμονή Χριστουγέννων, ανήμερα και Πρωτοχρονιά.
                    </p>
                </div>

                {/* Οι αγορές που αξίζουν */}
                <div id="top" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι αγορές που αξίζουν
                    </h2>
                    {topMarkets.map((market) => (
                        <React.Fragment key={market.title}>
                            <h3 className={h3}>{market.title}</h3>
                            <p className={p}>{market.body}</p>
                        </React.Fragment>
                    ))}
                </div>

                {/* Φαγητό */}
                <div id="fagito" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Τι να φάτε και πόσο κοστίζει
                    </h2>
                    <ResponsiveTable columns={foodColumns} rows={foods} />
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Τιμές από την Παλιά Πλατεία και την πλατεία Βάτσλαβ τον Δεκέμβριο του 2025, με ισοτιμία περίπου 1 € = 24 CZK. Φέτος αναμένονται παρόμοιες.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        <strong>Δοκιμάστε επίσης</strong> halušky (τσέχικα νιόκι με τυρί και μπέικον), bramborák (τηγανιτή πίτα πατάτας) και ψαρόσουπα, που είναι το παραδοσιακό χριστουγεννιάτικο φαγητό της Τσεχίας.
                    </p>
                    <PhotoPair
                        left={{ src: '/blog_images/prague-xmas-3.jpg', alt: 'Πάγκος με ψητό ζαμπόν και λουκάνικα στην αγορά της Πράγας' }}
                        right={{ src: '/blog_images/prague-xmas-4.jpg', alt: 'Η Γέφυρα του Καρόλου και το Kampa το βράδυ' }}
                    />
                </div>

                {/* Ζαμπόν */}
                <div id="zambon" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Προσοχή στο ζαμπόν
                    </h2>
                    <p className={p}>
                        Το ψητό ζαμπόν που γυρίζει στη σούβλα είναι από τα πιο γνωστά φαγητά της αγοράς, αλλά είναι και η πιο γνωστή «παγίδα». Η τιμή που βλέπετε στην ταμπέλα είναι <strong>για 100 γραμμάρια</strong>. Αν ζητήσετε απλώς «μία μερίδα», ο πωλητής μπορεί να κόψει 400–500 γραμμάρια, και ο λογαριασμός να φτάσει τα 20 € ή παραπάνω. Το θέμα έχει γίνει viral, με ένα βίντεο στο YouTube που έχουν δει σχεδόν 3 εκατομμύρια άνθρωποι.
                    </p>
                    <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                        <strong>Πώς να το αποφύγετε:</strong> ζητήστε συγκεκριμένο βάρος, π.χ. «100 grams, please». 100 γραμμάρια φτάνουν για σνακ, 200 για ελαφρύ γεύμα. Κοιτάξτε τη ζυγαριά πριν πληρώσετε.
                    </div>

                    <h3 className={h3}>Αξίζει το trdelník;</h3>
                    <p className={p}>
                        Θα το δείτε παντού, αλλά δεν είναι παραδοσιακό τσέχικο γλυκό. Είναι τουριστικό φαινόμενο των τελευταίων χρόνων. Είναι νόστιμο, αλλά αν θέλετε κάτι πραγματικά τοπικό, προτιμήστε ένα κομμάτι vánočka (χριστουγεννιάτικο τσουρέκι) από κάποιο φούρνο.
                    </p>
                </div>

                {/* Tips */}
                <div id="tips" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Tips που πρέπει να ξέρετε
                    </h2>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Έχετε μαζί σας κορώνες σε μετρητά.</strong> Η Τσεχία δεν έχει ευρώ. Πολλοί πάγκοι δέχονται κάρτα, αλλά όχι όλοι. Τα χαρτονομίσματα των 200 CZK είναι τα πιο βολικά.</li>
                        <li><strong>Μην αλλάζετε χρήματα σε ανταλλακτήρια της Παλιάς Πόλης.</strong> Πολλά έχουν πολύ κακές ισοτιμίες. Βγάλτε από ATM τράπεζας και, αν σας ρωτήσει, διαλέξτε πάντα χρέωση σε κορώνες και όχι σε ευρώ.</li>
                        <li><strong>Πάρτε πρώτα ποτό, μετά φαγητό.</strong> Ποτά και φαγητό πουλιούνται σε διαφορετικούς πάγκους. Κρατήστε το ζεστό κρασί στο χέρι όσο περιμένετε στην ουρά για φαγητό.</li>
                        <li><strong>Αποφύγετε Σάββατο βράδυ.</strong> Η Παλιά Πλατεία γεμίζει τόσο που δύσκολα κινείστε. Μια καθημερινή μετά τις 17:00 είναι ιδανική.</li>
                        <li><strong>Ντυθείτε ζεστά.</strong> Τον Δεκέμβριο η θερμοκρασία στην Πράγα πέφτει συχνά κάτω από το μηδέν το βράδυ.</li>
                    </ul>
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        <strong>Budget tip:</strong> για κανονικό φαγητό, απομακρυνθείτε λίγα στενά από την Παλιά Πλατεία. Σε μια τσέχικη ταβέρνα (hospoda) θα φάτε γκούλας με knedlíky και μπίρα με λιγότερα από όσα θα πληρώνατε σε δύο πάγκους της αγοράς. Δείτε τις προτάσεις στον{' '}
                        <Link href="/destinations/prague" className="text-blue-600 underline">οδηγό μας για την Πράγα</Link>.
                    </p>
                </div>

                {/* Διαδρομή */}
                <div id="diadromi" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Διαδρομή μιας βραδιάς με τα πόδια
                    </h2>
                    <p className={p}>
                        Οι τέσσερις κεντρικές αγορές είναι σε σειρά, οπότε τις βλέπετε όλες σε ένα βράδυ:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-[#2E2E2F]">
                        {route.map((r) => (
                            <li key={r.name}><strong>{r.name}</strong>, {r.text}</li>
                        ))}
                    </ol>
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Αν έχετε δεύτερο βράδυ, πάρτε το μετρό για την Πλατεία Ειρήνης.
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
                    <p className={p}>
                        Για μεταφορά από το αεροδρόμιο, μετακινήσεις και πρόγραμμα ημερών δείτε τον{' '}
                        <Link href="/destinations/prague" className="text-blue-600 underline font-bold">αναλυτικό οδηγό μας για την Πράγα</Link>.
                        Αν ακόμα διαλέγετε πόλη, δείτε και τις{' '}
                        <Link href="/blog/fthines-poleis-xristougenna-evropi" className="text-blue-600 underline font-bold">7 φθηνές πόλεις για Χριστούγεννα στην Ευρώπη</Link>{' '}
                        και τα{' '}
                        <Link href="/blog/xristougenna-voudapesti" className="text-blue-600 underline font-bold">Χριστούγεννα στη Βουδαπέστη</Link>.
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

export default PragueChristmasMarkets
