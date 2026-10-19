import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaTable, FaStar, FaUtensils, FaLightbulb, FaRoute, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ResponsiveTable } from '@/app/components/ResponsiveTable';


const PAGE_URL = 'https://travelmpomps.gr/blog/xristougenniatikes-agores-verolino';
const HERO_IMAGE = '/blog_images/berlin-xmas-1.jpg';

export const metadata: Metadata = {
    title: "Χριστουγεννιάτικες Αγορές Βερολίνο 2026: Οι Καλύτερες",
    description: "Οι καλύτερες χριστουγεννιάτικες αγορές του Βερολίνου για το 2026: ημερομηνίες, είσοδος, τι να φάτε, Pfand και διαδρομή για ένα βράδυ.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Χριστουγεννιάτικες Αγορές στο Βερολίνο 2026: Οι Καλύτερες',
        description: 'Gendarmenmarkt, Rotes Rathaus, Charlottenburg και η διαδρομή μιας βραδιάς. Ημερομηνίες, είσοδος και tips.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Χριστουγεννιάτικες αγορές στο Βερολίνο 2026',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaTable className="w-5 h-5" />, label: 'Οι αγορές με μια ματιά', targetId: 'agores' },
    { icon: <FaStar className="w-5 h-5" />, label: 'Οι 6 αγορές που αξίζουν', targetId: 'top' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Τι να φάτε και πόσο κοστίζει', targetId: 'fagito' },
    { icon: <FaLightbulb className="w-5 h-5" />, label: 'Tips που πρέπει να ξέρετε', targetId: 'tips' },
    { icon: <FaRoute className="w-5 h-5" />, label: 'Διαδρομή μιας βραδιάς', targetId: 'diadromi' },
    { icon: <FaCalendarAlt className="w-5 h-5" />, label: 'Τι είναι ανοιχτό μετά τα Χριστούγεννα', targetId: 'meta' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const marketColumns = [
    { key: 'market', label: 'Αγορά' },
    { key: 'dates', label: 'Ημερομηνίες 2026' },
    { key: 'entry', label: 'Είσοδος' },
    { key: 'stop', label: 'Πλησιέστερη στάση' },
];

const markets = [
    { market: 'Gendarmenmarkt (WeihnachtsZauber)', dates: '23/11 – 31/12', entry: '2 € (δωρεάν Δευ–Παρ 11:00–14:00)', stop: 'Hausvogteiplatz (U2) ή Stadtmitte' },
    { market: 'Rotes Rathaus', dates: '23/11 – 3/1/2027', entry: 'Δωρεάν', stop: 'Rotes Rathaus (U5) ή Alexanderplatz' },
    { market: 'Humboldt Forum', dates: '18/11 – 3/1/2027', entry: 'Δωρεάν', stop: 'Museumsinsel (U5)' },
    { market: 'Schloss Charlottenburg', dates: '23/11 – 27/12 (αναμένεται)', entry: 'Δωρεάν', stop: 'Richard-Wagner-Platz (U7) ή λεωφορείο M45' },
    { market: 'Breitscheidplatz', dates: '23/11 – 3/1/2027 (αναμένεται)', entry: 'Δωρεάν', stop: 'Zoologischer Garten' },
    { market: 'Kulturbrauerei (Lucia)', dates: '23/11 – 22/12 (αναμένεται)', entry: 'Δωρεάν', stop: 'Eberswalder Straße (U2)' },
    { market: 'RAW-Gelände (μεσαιωνική)', dates: '12/11 – 22/12 (αναμένεται)', entry: 'Δωρεάν Δευ–Τετ, 3 € Πεμ–Κυρ', stop: 'Warschauer Straße' },
    { market: 'Alexanderplatz', dates: '23/11 – 26/12 (αναμένεται)', entry: 'Δωρεάν', stop: 'Alexanderplatz' },
];

const topMarkets: { title: string; body: React.ReactNode }[] = [
    {
        title: 'Gendarmenmarkt: η πιο όμορφη',
        body: (
            <>
                Φέτος η αγορά επιστρέφει στην ανακαινισμένη πλατεία Gendarmenmarkt, ανάμεσα στους δύο δίδυμους ναούς και το Konzerthaus, μετά από μερικά χρόνια στην Bebelplatz λόγω έργων. Λευκές σκηνές, τεχνίτες που φυσάνε γυαλί και σκαλίζουν ξύλο, και ζεστές σκηνές για φαγητό. Είναι η μόνη από τις μεγάλες με εισιτήριο, 2 €, αλλά <strong>Δευτέρα με Παρασκευή 11:00–14:00 η είσοδος είναι δωρεάν</strong> (εκτός από 24, 25, 26 και 31/12). Τα παιδιά κάτω των 12 μπαίνουν δωρεάν. Το Σαββατοκύριακο το βράδυ έχει τεράστιο κόσμο.
            </>
        ),
    },
    {
        title: 'Rotes Rathaus: για οικογένειες',
        body: (
            <>
                Μπροστά στο Κόκκινο Δημαρχείο, με στυλ παλιού Βερολίνου. Το highlight είναι το <strong>παγοδρόμιο γύρω από το σιντριβάνι του Ποσειδώνα (Neptunbrunnen)</strong> και μια ρόδα 50 μέτρων με θέα στην πόλη. Είναι πιο τουριστική, αλλά μένει ανοιχτή μέχρι τις 3 Ιανουαρίου, οπότε είναι καλή επιλογή αν πάτε μετά τα Χριστούγεννα.
            </>
        ),
    },
    {
        title: 'Schloss Charlottenburg: το σκηνικό',
        body: 'Ξύλινα σπιτάκια μπροστά στο παλάτι του 17ου αιώνα, που το βράδυ φωτίζεται με προβολές. Είναι πιο ήσυχη από τις αγορές του κέντρου και ίσως η πιο φωτογενής της πόλης. Θέλει μια μικρή διαδρομή με μετρό ή με το λεωφορείο M45 προς τα δυτικά. Μένει κλειστή στις 24/12.',
    },
    {
        title: 'Humboldt Forum: δίπλα στο Νησί των Μουσείων',
        body: 'Στις αυλές του ανακατασκευασμένου Βασιλικού Παλατιού, με μοντέρνες εγκαταστάσεις φωτός πάνω σε μπαρόκ αρχιτεκτονική. Ευρύχωρη, καθαρή και ανοίγει νωρίτερα από τις άλλες, στις 18 Νοεμβρίου. Συνδυάστε τη με τη βόλτα στο Νησί των Μουσείων.',
    },
    {
        title: 'Kulturbrauerei (Lucia): σκανδιναβική',
        body: 'Μέσα στις αυλές μιας παλιάς ζυθοποιίας από κόκκινο τούβλο, στο Prenzlauer Berg. Έχει θέμα τα σκανδιναβικά Χριστούγεννα: σουηδικό Glögg με σταφίδες και αμύγδαλα, κεφτεδάκια από ελάφι και φινλανδικές βάφλες. Υπάρχουν ξυλόσομπες στην αυλή για να ζεσταθείτε. Είναι η αγαπημένη των ντόπιων.',
    },
    {
        title: 'RAW-Gelände: μεσαιωνική',
        body: 'Σε ένα παλιό βιομηχανικό συγκρότημα στο Friedrichshain, γεμάτο γκράφιτι. Δεν υπάρχουν ηλεκτρικά φώτα, μόνο πυρσοί και φωτιές. Οι πωλητές φοράνε μεσαιωνικά ρούχα, πίνετε υδρόμελο (Met) σε πήλινες κούπες και βλέπετε σιδηρουργούς στη δουλειά. Τα βράδια έχει fire shows. Ανοίγει νωρίς, στις 12 Νοεμβρίου.',
    },
];

const foods = [
    { name: 'Glühwein', text: 'ζεστό κρασί, γύρω στα 5 €. Αν θέλετε πιο δυνατό, ζητήστε «mit Schuss» (με ρούμι ή αμαρέτο).' },
    { name: 'Kinderpunsch', text: 'η εκδοχή χωρίς αλκοόλ.' },
    { name: 'Bratwurst', text: 'το κλασικό ψητό λουκάνικο σε ψωμάκι.' },
    { name: 'Handbrot', text: 'ζεστό ψωμί γεμιστό με τυρί και ζαμπόν ή μανιτάρια, με ξινή κρέμα από πάνω. Φθηνό και χορταστικό.' },
    { name: 'Gebrannte Mandeln', text: 'καραμελωμένα ψητά αμύγδαλα, η μυρωδιά που θα σας ακολουθεί παντού.' },
    { name: 'Lángos', text: 'η ουγγρική τηγανητή πίτα υπάρχει και εδώ σχεδόν σε κάθε αγορά.' },
];

const route = [
    { name: 'Gendarmenmarkt', text: 'ξεκινήστε εδώ γύρω στις 16:00, πριν γεμίσει' },
    { name: 'Humboldt Forum', text: 'περίπου 12 λεπτά με τα πόδια μέσω της Unter den Linden, που είναι φωτισμένη για τα Χριστούγεννα' },
    { name: 'Rotes Rathaus', text: 'περίπου 10 λεπτά. Εδώ το παγοδρόμιο και η ρόδα' },
    { name: 'Alexanderplatz', text: '5 λεπτά, για τελευταίο Glühwein κάτω από την πυραμίδα' },
];

const faq = [
    {
        q: 'Πότε ανοίγουν οι χριστουγεννιάτικες αγορές στο Βερολίνο το 2026;',
        a: 'Οι περισσότερες μεγάλες ανοίγουν στις 23 Νοεμβρίου 2026. Το Humboldt Forum ανοίγει στις 18 Νοεμβρίου και η μεσαιωνική αγορά στο RAW-Gelände στις 12 Νοεμβρίου.',
    },
    {
        q: 'Θέλει εισιτήριο;',
        a: 'Στις περισσότερες όχι. Το Gendarmenmarkt κοστίζει 2 €, αλλά είναι δωρεάν τις καθημερινές 11:00–14:00. Η RAW-Gelände έχει 3 € από Πέμπτη έως Κυριακή.',
    },
    {
        q: 'Ποια αγορά να διαλέξω αν έχω χρόνο για μία;',
        a: 'Το Gendarmenmarkt. Αν πάτε με παιδιά, το Rotes Rathaus για το παγοδρόμιο και τη ρόδα.',
    },
    {
        q: 'Δέχονται κάρτα;',
        a: 'Όχι παντού. Έχετε πάντα μετρητά, ειδικά για φαγητό και ποτό.',
    },
];

const sources = [
    { label: 'Berlin.de, Weihnachtsmärkte in Mitte', href: 'https://www.berlin.de/weihnachtsmarkt/mitte/' },
    { label: 'Walk of Berlin, Best Christmas Markets in Berlin 2026', href: 'https://www.walkofberlin.com/post/best-christmas-markets-berlin-2026' },
    { label: "London Southend Airport, Berlin's 2026 Christmas Markets", href: 'https://londonsouthendairport.com/travel-guides/your-guide-to-berlins-christmas-markets/' },
];

function BerlinChristmasMarkets() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Χριστουγεννιάτικες αγορές στο Βερολίνο 2026', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Χριστουγεννιάτικες αγορές στο Βερολίνο 2026: Οι καλύτερες',
        description: 'Οι καλύτερες χριστουγεννιάτικες αγορές του Βερολίνου για το 2026: ημερομηνίες, είσοδος, τι να φάτε, Pfand και διαδρομή για ένα βράδυ.',
        image: `https://travelmpomps.gr${HERO_IMAGE}`,
        datePublished: '2026-10-13',
        dateModified: '2026-10-19',
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
                id="json-ld-breadcrumb-berlin-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-berlin-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-berlin-xmas"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Χριστουγεννιάτικη αγορά στο Βερολίνο"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Χριστουγεννιάτικες Αγορές στο Βερολίνο 2026: Οι Καλύτερες
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Πατινάζ γύρω από ένα σιντριβάνι κάτω από τον Πύργο της Τηλεόρασης, υδρόμελο σε πήλινες κούπες μέσα σε ένα παλιό εργοστάσιο, και ένα παλάτι φωτισμένο σαν καρτ ποστάλ. Αυτά είναι τα Χριστούγεννα στο Βερολίνο.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Οι περισσότερες μεγάλες αγορές ανοίγουν στις <strong>23 Νοεμβρίου 2026</strong>. Αν έχετε χρόνο για λίγες, πηγαίνετε στο <strong>Gendarmenmarkt</strong> για την πιο όμορφη αγορά του Βερολίνου, στο <strong>Rotes Rathaus</strong> για παγοδρόμιο και ρόδα, και στο <strong>Charlottenburg</strong> για το σκηνικό με το παλάτι. Η είσοδος είναι σχεδόν παντού δωρεάν.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Το Βερολίνο έχει πάνω από 80 αγορές τα Χριστούγεννα και δεν αξίζουν όλες. Παρακάτω θα βρείτε αυτές που ξεχωρίζουν, πόσο κοστίζουν και πώς να δείτε τις κεντρικές σε ένα βράδυ.
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F] font-semibold">
                    Το πιο εντυπωσιακό με το Βερολίνο είναι ότι θα βρείτε αγορές σε απόσταση λεπτών η μία από την άλλη: από την Alexanderplatz, στην αγορά μπροστά από το Κόκκινο Δημαρχείο με τον Άγιο Βασίλη να περνάει με το έλκηθρό του, και στη Gendarmenmarkt με τις πολλές επιλογές. Επιπλέον, θα δείτε στολισμένο έναν από τους ωραιότερους δρόμους του Βερολίνου, την Unter den Linden.
                </div>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Πίνακας */}
                <div id="agores" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι αγορές με μια ματιά
                    </h2>
                    <ResponsiveTable columns={marketColumns} rows={markets} />
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Οι ημερομηνίες που σημειώνονται ως «αναμένεται» δεν έχουν ανακοινωθεί ακόμα επίσημα. Ελέγξτε το{' '}
                        <a href="https://www.berlin.de/weihnachtsmarkt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">berlin.de</a>{' '}
                        λίγο πριν ταξιδέψετε.
                    </p>
                </div>

                {/* Οι 6 αγορές */}
                <div id="top" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Οι 6 αγορές που αξίζουν
                    </h2>
                    {topMarkets.map((market, index) => (
                        <React.Fragment key={market.title}>
                            <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">
                                {index + 1}. {market.title}
                            </h3>
                            <p className="text-[#2E2E2F] mb-4 text-justify">{market.body}</p>
                        </React.Fragment>
                    ))}
                    <p className="text-[#2E2E2F] mt-6 mb-4 text-justify">
                        <strong>Και η Alexanderplatz;</strong> Θα την περάσετε σίγουρα, αφού είναι δίπλα στον κεντρικό σταθμό. Έχει τη μεγαλύτερη χριστουγεννιάτικη πυραμίδα της Ευρώπης, αλλά θυμίζει περισσότερο λούνα παρκ. Σταθείτε για ένα Glühwein και συνεχίστε.
                    </p>
                    <p className="text-[#2E2E2F] mt-6 mb-4 text-justify">
                        <strong>Potsdamer Platz: </strong>Αξίζει να περάσετε μια βόλτα από αυτή την μικρή Χριστουγεννιάτικη αγορά. Το ιδιαίτερο εδώ είναι ότι μπορείτε να κάνετε πατινάζ σε ένα μιρκό παγοδρόμιο, όπως και να κάνετε έλκηθρο σε μια πλατφόρμα που έχει στηθεί στο κέντρο της πλατείας.
                    </p>
                    <p className="text-[#2E2E2F] mt-6 mb-4 text-justify">
                        <strong>Kaiser Wilhelm Memorial Church: </strong>Αν έχετε χρόνο μπορείτε να περάσετε και από αυτή την μικρή αγορά που βρίσκεται μπροστά από την εκκλησία Kaiser Wilhelm. Το ιδιαίτερο είναι ότι βρίσκεται μπορστά από το εμπορικό κέντρο KaDeWe.
                    </p>
                </div>

                {/* Φαγητό */}
                <div id="fagito" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Τι να φάτε και πόσο κοστίζει
                    </h2>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        {foods.map((f) => (
                            <li key={f.name}><strong>{f.name}:</strong> {f.text}</li>
                        ))}
                    </ul>
                </div>

                {/* Tips */}
                <div id="tips" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Tips που πρέπει να ξέρετε
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        <strong>Pfand (εγγύηση για την κούπα):</strong> όταν παίρνετε ζεστό ρόφημα, πληρώνετε επιπλέον 3–5 € για την κούπα. Αν την επιστρέψετε, παίρνετε τα χρήματα πίσω. Αν την κρατήσετε, έχετε ένα φθηνό σουβενίρ, αφού κάθε αγορά έχει δικό της σχέδιο με τη χρονιά.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        <strong>Έχετε μετρητά:</strong> πολλοί πάγκοι, ειδικά για φαγητό και ποτό, δέχονται μόνο μετρητά. Πάρτε μαζί σας κέρματα και μικρά χαρτονομίσματα.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        <strong>Ντυθείτε ζεστά:</strong> ο χειμώνας στο Βερολίνο είναι κρύος, υγρός και φυσάει. Θα στέκεστε ώρες σε πλακόστρωτα, οπότε πάρτε σκουφί, γάντια, ζεστά παπούτσια και ισοθερμικά.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        <strong>Budget tip:</strong> πηγαίνετε στο Gendarmenmarkt καθημερινή μεσημέρι για δωρεάν είσοδο και λιγότερο κόσμο. Για κανονικό φαγητό, στον{' '}
                        <Link href="/destinations/berlin" className="text-blue-600 underline">οδηγό μας για το Βερολίνο</Link>{' '}
                        θα βρείτε μαγαζιά στο Hackescher Markt και το Curry 61 για currywurst.
                    </p>
                </div>

                {/* Διαδρομή */}
                <div id="diadromi" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Διαδρομή μιας βραδιάς με τα πόδια
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Οι τέσσερις κεντρικές αγορές είναι στην ίδια ευθεία, από το Gendarmenmarkt μέχρι την Alexanderplatz:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-[#2E2E2F]">
                        {route.map((r) => (
                            <li key={r.name}><strong>{r.name}</strong>, {r.text}</li>
                        ))}
                    </ol>
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Για δεύτερο βράδυ, πάρτε το λεωφορείο M45 και συνδυάστε το <strong>Charlottenburg</strong> με το <strong>Breitscheidplatz</strong>, δίπλα στην εκκλησία Kaiser Wilhelm.
                    </p>
                </div>

                {/* Μετά τα Χριστούγεννα */}
                <div id="meta" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Τι είναι ανοιχτό μετά τα Χριστούγεννα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Οι περισσότερες μικρές αγορές κλείνουν πριν τις 24 Δεκεμβρίου και αρκετές είναι κλειστές την Παραμονή. Αν πάτε ανάμεσα σε Χριστούγεννα και Πρωτοχρονιά, μένουν ανοιχτά το Gendarmenmarkt (μέχρι 31/12), το Rotes Rathaus, το Humboldt Forum και το Breitscheidplatz (μέχρι 3/1/2027).
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
                        Για μετακινήσεις, εισιτήρια, διαμονή και πρόγραμμα 5 ημερών δείτε τον{' '}
                        <Link href="/destinations/berlin" className="text-blue-600 underline font-bold">αναλυτικό οδηγό μας για το Βερολίνο</Link>.
                        Αν ακόμα διαλέγετε πόλη, δείτε και τα{' '}
                        <Link href="/blog/xristougenna-voudapesti" className="text-blue-600 underline font-bold">Χριστούγεννα στη Βουδαπέστη</Link>{' '}
                        και τις{' '}
                        <Link href="/blog/christougenniatikes-agores-vienni" className="text-blue-600 underline font-bold">χριστουγεννιάτικες αγορές στη Βιέννη</Link>.
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

export default BerlinChristmasMarkets
