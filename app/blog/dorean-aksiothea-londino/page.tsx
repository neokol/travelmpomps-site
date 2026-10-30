import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaTable, FaLandmark, FaCity, FaTree, FaTicketAlt, FaWalking, FaQuestionCircle } from 'react-icons/fa';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import { TableOfContents } from '@/app/components/TableOfContents';
import { ResponsiveTable } from '@/app/components/ResponsiveTable';
import { PhotoPair } from '@/app/components/PhotoPair';


const PAGE_URL = 'https://travelmpomps.gr/blog/dorean-aksiothea-londino';
const HERO_IMAGE = '/blog_images/london-free-1.jpg';

export const metadata: Metadata = {
    title: "Τα Καλύτερα Δωρεάν Αξιοθέατα στο Λονδίνο (2026)",
    description: "Δωρεάν μουσεία, θέα από ουρανοξύστες χωρίς εισιτήριο, κρυμμένοι κήποι, αλλαγή φρουράς και αγορές: όλα τα δωρεάν αξιοθέατα του Λονδίνου και πώς να τα κλείσετε.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Τα Καλύτερα Δωρεάν Αξιοθέατα στο Λονδίνο (2026)',
        description: 'Δωρεάν μουσεία, θέα από ψηλά, κρυμμένοι κήποι και αλλαγή φρουράς — με tips για να μη χάσετε τις κρατήσεις.',
        url: PAGE_URL,
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: HERO_IMAGE,
                width: 1200,
                height: 630,
                alt: 'Δωρεάν αξιοθέατα στο Λονδίνο',
            },
        ],
    },
}

const tocItems = [
    { icon: <FaTable className="w-5 h-5" />, label: 'Με μια ματιά', targetId: 'matia' },
    { icon: <FaLandmark className="w-5 h-5" />, label: 'Τα δωρεάν μουσεία', targetId: 'mouseia' },
    { icon: <FaCity className="w-5 h-5" />, label: 'Θέα από ψηλά χωρίς εισιτήριο', targetId: 'thea' },
    { icon: <FaTree className="w-5 h-5" />, label: 'Κρυμμένοι κήποι', targetId: 'kipoi' },
    { icon: <FaTicketAlt className="w-5 h-5" />, label: 'Άλλες δωρεάν εμπειρίες', targetId: 'alles' },
    { icon: <FaWalking className="w-5 h-5" />, label: 'Βόλτες, αγορές και πάρκα', targetId: 'voltes' },
    { icon: <FaQuestionCircle className="w-5 h-5" />, label: 'Συχνές ερωτήσεις', targetId: 'faq' },
];

const overviewColumns = [
    { key: 'name', label: 'Αξιοθέατο' },
    { key: 'what', label: 'Τι είναι' },
    { key: 'booking', label: 'Θέλει κράτηση;' },
];

const overview = [
    {
        group: 'Μουσεία',
        rows: [
            { name: 'British Museum', what: 'Το μεγαλύτερο μουσείο της πόλης', booking: 'Συνιστάται (δωρεάν)' },
            { name: 'Natural History Museum', what: 'Δεινόσαυροι και η γαλάζια φάλαινα', booking: 'Συνιστάται (δωρεάν)' },
            { name: 'National Gallery', what: 'Πινακοθήκη στην Trafalgar Square', booking: 'Όχι' },
            { name: 'V&A', what: 'Τέχνη, μόδα και design', booking: 'Όχι' },
            { name: 'Tate Modern', what: 'Μοντέρνα τέχνη και θέα από τον 10ο όροφο', booking: 'Όχι' },
            { name: 'Imperial War Museum', what: "Η ιστορία των πολέμων από τον Α' Παγκόσμιο μέχρι σήμερα", booking: 'Όχι' },
            { name: 'Wallace Collection', what: 'Αρχοντικό με πίνακες και πανοπλίες', booking: 'Όχι' },
            { name: 'London Museum (νέο)', what: 'Η ιστορία του Λονδίνου, ανοίγει 28/11/2026', booking: 'Θα ανακοινωθεί' },
        ],
    },
    {
        group: 'Θέα από ψηλά',
        rows: [
            { name: 'Sky Garden', what: 'Κήπος στην κορυφή ουρανοξύστη', booking: 'Ναι, απαραίτητη' },
            { name: 'Horizon 22', what: 'Η ψηλότερη δωρεάν θέα στην Ευρώπη, στα 254 μέτρα', booking: 'Συνιστάται' },
            { name: 'Garden at 120', what: 'Ταράτσα-κήπος στο City', booking: 'Όχι' },
            { name: 'The Post Building Roof Garden', what: 'Ταράτσα με θέα στον τρούλο του British Museum', booking: 'Όχι' },
            { name: 'One New Change', what: 'Ταράτσα με θέα στον Άγιο Παύλο', booking: 'Όχι' },
        ],
    },
    {
        group: 'Κρυμμένοι κήποι',
        rows: [
            { name: 'Barbican Conservatory', what: 'Τροπικό θερμοκήπιο, κλείνει στις αρχές του 2027', booking: 'Ναι, απαραίτητη' },
            { name: 'Crossrail Place Roof Garden', what: 'Κήπος κάτω από γυάλινη οροφή στο Canary Wharf', booking: 'Όχι' },
        ],
    },
    {
        group: 'Άλλες εμπειρίες',
        rows: [
            { name: 'Αλλαγή φρουράς', what: 'Buckingham Palace', booking: 'Όχι' },
            { name: 'Outernet', what: 'Δωρεάν shows σε τεράστιες οθόνες 360°', booking: 'Όχι' },
        ],
    },
];

type Spot = { title: string; body: React.ReactNode };

const museums: Spot[] = [
    {
        title: 'British Museum',
        body: (
            <>
                Ο Παρθενώνας, η Στήλη της Ροζέτας, οι αιγυπτιακές μούμιες και εκθέματα από πολιτισμούς όλου του κόσμου. Θα χρειαστείτε τουλάχιστον 3 ώρες για να το γυρίσετε. Η είσοδος είναι δωρεάν, αλλά <strong>κλείστε δωρεάν εισιτήριο online</strong> για να μην περιμένετε στην ουρά. Κλείνει στις 17:00.
            </>
        ),
    },
    {
        title: 'Natural History Museum',
        body: 'Η πτέρυγα με τους δεινόσαυρους ήταν το αγαπημένο μας σημείο, όπως και ο σκελετός της γαλάζιας φάλαινας στην κεντρική αίθουσα. Είναι το πιο αγαπημένο μουσείο για όσους έχουν παιδιά. Κλείστε δωρεάν εισιτήριο online, γιατί η ουρά χωρίς κράτηση μπορεί να φτάσει τη μία ώρα.',
    },
    {
        title: 'National Gallery',
        body: (
            <>
                Βαν Γκογκ, Μονέ, Ντα Βίντσι και Τέρνερ, στην Trafalgar Square. Δεν χρειάζεται κράτηση. Αν έχετε λίγο χρόνο, πηγαίνετε κατευθείαν στα «Ηλιοτρόπια» του Βαν Γκογκ, από τους πιο εντυπωσιακούς πίνακες που έχουμε δει από κοντά. Δίπλα βρίσκεται η <strong>National Portrait Gallery</strong>, επίσης δωρεάν.
            </>
        ),
    },
    {
        title: 'V&A και Science Museum',
        body: (
            <>
                Και τα δύο είναι δίπλα στο Natural History Museum, στο South Kensington. Το <strong>V&amp;A</strong> έχει μόδα, κοσμήματα, γλυπτά και ένα από τα ωραιότερα καφέ μουσείου στην Ευρώπη. Το <strong>Science Museum</strong> είναι ιδανικό για παιδιά. Αν μείνετε στο South Kensington, βλέπετε τρία δωρεάν μουσεία σε μία μέρα.
            </>
        ),
    },
    {
        title: 'Tate Modern',
        body: (
            <>
                Μοντέρνα τέχνη σε παλιό εργοστάσιο ηλεκτρισμού, δίπλα στον Τάμεση. Εμάς η συλλογή δεν μας ενθουσίασε, αλλά αξίζει να ανεβείτε στο <strong>viewing level του 10ου ορόφου</strong> στο κτίριο Blavatnik: δωρεάν θέα στον Άγιο Παύλο και στο ποτάμι, χωρίς κράτηση.
            </>
        ),
    },
    {
        title: 'Imperial War Museum',
        body: 'Η ιστορία των πολέμων από τον Α\' Παγκόσμιο Πόλεμο μέχρι σήμερα, με αεροπλάνα, τανκς και προσωπικές ιστορίες ανθρώπων που τους έζησαν. Οι αίθουσες για το Ολοκαύτωμα είναι πολύ συγκλονιστικές, αλλά δεν συνιστώνται για παιδιά κάτω των 14. Δεν χρειάζεται κράτηση. Είναι ανοιχτό κάθε μέρα 10:00–18:00, εκτός από 24–26 Δεκεμβρίου. Πλησιέστερος σταθμός: Lambeth North, 15 λεπτά με τα πόδια από το London Eye.',
    },
    {
        title: 'Wallace Collection',
        body: 'Ένα αρχοντικό στο Marylebone γεμάτο πίνακες, έπιπλα και πανοπλίες. Είναι δωρεάν, έχει πολύ λιγότερο κόσμο από τα μεγάλα μουσεία και βρίσκεται σε μία από τις ομορφότερες γειτονιές του Λονδίνου.',
    },
    {
        title: 'Νέο: London Museum',
        body: (
            <>
                Το πρώην Museum of London ανοίγει ξανά στις <strong>28 Νοεμβρίου 2026</strong> στο νέο του σπίτι, την παλιά βικτοριανή αγορά του Smithfield. Οι μόνιμες αίθουσες θα είναι δωρεάν και θα μένει ανοιχτό μέχρι αργά Παρασκευή και Σάββατο. Είναι το μεγαλύτερο μουσείο πόλης στον κόσμο και η ιστορία του Λονδίνου σε ένα μέρος.
            </>
        ),
    },
];

const views: Spot[] = [
    {
        title: 'Sky Garden',
        body: (
            <>
                Κήπος με φυτά και ταράτσα στην κορυφή του ουρανοξύστη «Walkie-Talkie», με θέα στον Τάμεση και στο Shard. Είναι δωρεάν, αλλά <strong>χωρίς κράτηση δεν μπορείτε να μπείτε</strong>. Τα εισιτήρια βγαίνουν σε παρτίδες και εξαντλούνται γρήγορα, ειδικά για το ηλιοβασίλεμα. Κάθε κράτηση σας δίνει μία ώρα μέσα. Έχετε μαζί σας ταυτότητα ή διαβατήριο.
            </>
        ),
    },
    {
        title: 'Horizon 22',
        body: 'Η ψηλότερη δωρεάν θέα στην Ευρώπη: 254 μέτρα, στον 58ο όροφο του 22 Bishopsgate. Ο ανελκυστήρας ανεβαίνει σε 41 δευτερόλεπτα. Είναι λιγότερο γνωστό από το Sky Garden, οπότε βρίσκετε πιο εύκολα θέση. Λειτουργεί καθημερινές 10:00–18:00, Σάββατο 10:00–17:00 και Κυριακή 10:00–16:00. Κλείστε online. Υπάρχουν και λίγες θέσεις χωρίς κράτηση κάθε μέρα, αλλά δεν είναι εγγυημένες.',
    },
    {
        title: 'Garden at 120',
        body: 'Ταράτσα-κήπος στο 120 Fenchurch Street, δύο λεπτά από το Sky Garden. Δεν είναι τόσο ψηλά, αλλά δεν θέλει κράτηση. Είναι το καλύτερο plan B αν δεν βρείτε εισιτήρια για τα άλλα δύο.',
    },
    {
        title: 'The Post Building Roof Garden',
        body: 'Η μεγαλύτερη ταράτσα του West End, στον 9ο όροφο ενός παλιού ταχυδρομείου, δύο βήματα από το British Museum. Από εδώ βλέπετε τον τρούλο του μουσείου από ψηλά, και μια καθαρή μέρα φτάνετε με το βλέμμα μέχρι τον Άγιο Παύλο. Δεν θέλει κράτηση, και είναι ανοιχτή κάθε μέρα 10:00–19:00 (ή μέχρι να νυχτώσει). Η είσοδος είναι λίγο κρυμμένη: ψάξτε τις γυάλινες πόρτες στο 110 New Oxford Street με την ταμπέλα «Public roof garden». Συνδυάστε το με το British Museum ή το Outernet.',
    },
    {
        title: 'One New Change',
        body: 'Η ταράτσα του εμπορικού κέντρου One New Change, ακριβώς απέναντι από τον Άγιο Παύλο, έχει μία από τις καλύτερες θέες στον τρούλο της εκκλησίας. Είναι δωρεάν, χωρίς κράτηση, και ιδανική για φωτογραφίες το σούρουπο.',
    },
];

const gardens: Spot[] = [
    {
        title: 'Barbican Conservatory',
        body: (
            <>
                Ένα τροπικό θερμοκήπιο με πάνω από 1.500 είδη φυτών, κρυμμένο μέσα στο μπρουταλιστικό συγκρότημα του Barbican. Η αντίθεση του τσιμέντου με τη ζούγκλα είναι από τις πιο ιδιαίτερες εικόνες του Λονδίνου. Είναι δωρεάν, αλλά <strong>θέλει κράτηση online</strong>, και ανοίγει μόνο συγκεκριμένες μέρες, συνήθως Σαββατοκύριακα. Τα εισιτήρια εξαντλούνται γρήγορα.
            </>
        ),
    },
    {
        title: 'Crossrail Place Roof Garden',
        body: 'Ένας κήπος με εξωτικά φυτά κάτω από μια τεράστια ξύλινη και γυάλινη οροφή, πάνω από τον σταθμό του μετρό στο Canary Wharf. Είναι ανοιχτός κάθε μέρα μέχρι τις 21:00 και δεν θέλει κράτηση. Ιδανικός για μέρες με βροχή, και μια καλή αφορμή να δείτε τους ουρανοξύστες του Canary Wharf από κοντά.',
    },
];

type Item = { name: string; text: React.ReactNode };

const walks: Item[] = [
    { name: 'Westminster και Big Ben', text: 'το Κοινοβούλιο, το Big Ben και το Westminster Abbey από έξω. Για την καλύτερη φωτογραφία, περάστε απέναντι στη Westminster Bridge.' },
    { name: 'South Bank', text: "περπατήστε δίπλα στον Τάμεση από το London Eye μέχρι την Tower Bridge. Θα δείτε street performers, το Shakespeare's Globe και το Millennium Bridge." },
    { name: 'Tower Bridge', text: 'η πιο όμορφη γέφυρα της πόλης. Η διάβαση με τα πόδια είναι δωρεάν, πληρώνετε μόνο αν θέλετε να μπείτε στους πύργους.' },
    { name: 'Covent Garden', text: "καλλιτέχνες του δρόμου σχεδόν όλη μέρα, και λίγο πιο πέρα το πολύχρωμο Neal's Yard." },
    { name: 'Leadenhall Market', text: 'βικτοριανή στοά στο City που εμφανίζεται στον Harry Potter.' },
    { name: 'St Dunstan in the East', text: 'ερείπια εκκλησίας που βομβαρδίστηκε στον πόλεμο και έγιναν κήπος. Από τα πιο ατμοσφαιρικά κρυμμένα σημεία της πόλης.' },
];

const markets: Item[] = [
    { name: 'Borough Market', text: 'η πιο διάσημη αγορά φαγητού του Λονδίνου. Η βόλτα είναι δωρεάν και πολλοί πάγκοι δίνουν δοκιμές.' },
    { name: 'Camden Market', text: "street food, vintage, μουσική και το κανάλι Regent's Canal." },
    { name: 'Notting Hill και Portobello Road', text: 'τα πολύχρωμα σπίτια και η παζαροαγορά, πιο ζωντανή το Σάββατο.' },
    { name: 'Chinatown και Soho', text: 'για βόλτα το βράδυ, με τα φώτα αναμμένα.' },
];

const parks: Item[] = [
    { name: "St James's Park", text: 'δίπλα στο Buckingham Palace, με πελεκάνους στη λίμνη.' },
    { name: 'Hyde Park και Kensington Gardens', text: 'τεράστια πάρκα στο κέντρο, ιδανικά για διάλειμμα ανάμεσα στα μουσεία.' },
    { name: 'Holland Park', text: 'κρύβει τον ιαπωνικό κήπο Kyoto Garden, με καταρράκτη και παγώνια.' },
    { name: 'Greenwich Park', text: 'πάρτε το καραβάκι ή το DLR και ανεβείτε στον λόφο για θέα σε όλο το Λονδίνο.' },
];

const faq = [
    {
        q: 'Είναι όντως δωρεάν τα μουσεία στο Λονδίνο;',
        a: 'Ναι, οι μόνιμες συλλογές των μεγάλων μουσείων είναι δωρεάν: British Museum, National Gallery, Natural History Museum, V&A, Science Museum, Tate Modern και Imperial War Museum. Πληρώνετε μόνο τις περιοδικές εκθέσεις.',
    },
    {
        q: 'Χρειάζεται κράτηση για το British Museum;',
        a: 'Δεν είναι υποχρεωτική, αλλά τη συστήνουμε. Είναι δωρεάν και γλιτώνετε την ουρά.',
    },
    {
        q: 'Ποια δωρεάν θέα να διαλέξω;',
        a: 'Το Horizon 22 είναι το πιο ψηλό και βρίσκετε πιο εύκολα θέση. Το Sky Garden έχει κήπο και ανοιχτή ταράτσα, αλλά θέλει κράτηση νωρίς. Αν δεν θέλετε καμία κράτηση, πηγαίνετε στο Garden at 120, στο Post Building ή στο One New Change.',
    },
    {
        q: 'Πότε γίνεται η αλλαγή φρουράς;',
        a: 'Συνήθως Δευτέρα, Τετάρτη και Παρασκευή στις 11:00. Σε κάποιες περιόδους γίνεται και Κυριακή, και το πρόγραμμα αλλάζει συχνά, οπότε ελέγξτε το επίσημο ημερολόγιο πριν πάτε.',
    },
];

const sources = [
    { label: 'Horizon 22, επίσημο site', href: 'https://horizon22.co.uk/' },
    { label: 'Londonist, London Museum reopening date', href: 'https://londonist.com/london/london-museum-announces-reopening-date' },
    { label: 'Household Division, Changing the Guard calendar', href: 'https://www.householddivision.org.uk/changing-the-guard-calendar' },
    { label: 'Visit London, Changing the Guard guide', href: 'https://www.visitlondon.com/blog/changing-of-the-guard-guide' },
    { label: 'Visit London, Imperial War Museum London', href: 'https://www.visitlondon.com/things-to-do/place/142062-iwm-london-imperial-war-museum-london' },
    { label: 'Barbican, Conservatory', href: 'https://www.barbican.org.uk/node/11286' },
    { label: 'Londonist, Barbican Conservatory plant adoption', href: 'https://londonist.com/london/things-to-do/adopt-a-plant-barbican-conservatory' },
    { label: 'Camden Guides, The Post Building', href: 'https://camdenguides.com/camden-at-60-the-post-building/' },
    { label: 'About London Laura, Outernet London', href: 'https://aboutlondonlaura.com/outernet-london-free-immersive-experience' },
];

function SpotList({ spots, photos }: { spots: Spot[]; photos?: Record<number, React.ReactNode> }) {
    return (
        <>
            {spots.map((spot, index) => (
                <React.Fragment key={spot.title}>
                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">{spot.title}</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">{spot.body}</p>
                    {photos?.[index]}
                </React.Fragment>
            ))}
        </>
    );
}

function BulletList({ items }: { items: Item[] }) {
    return (
        <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
            {items.map((item) => (
                <li key={item.name}><strong>{item.name}:</strong> {item.text}</li>
            ))}
        </ul>
    );
}

function LondonFreeAttractions() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://travelmpomps.gr/blog' },
            { '@type': 'ListItem', position: 3, name: 'Δωρεάν αξιοθέατα στο Λονδίνο', item: PAGE_URL },
        ],
    };

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Τα καλύτερα δωρεάν αξιοθέατα στο Λονδίνο (2026)',
        description: 'Δωρεάν μουσεία, θέα από ουρανοξύστες χωρίς εισιτήριο, κρυμμένοι κήποι, αλλαγή φρουράς και αγορές: όλα τα δωρεάν αξιοθέατα του Λονδίνου και πώς να τα κλείσετε.',
        image: `https://travelmpomps.gr${HERO_IMAGE}`,
        datePublished: '2026-10-27',
        dateModified: '2026-10-27',
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
                id="json-ld-breadcrumb-london-free"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                id="json-ld-article-london-free"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <Script
                id="json-ld-faq-london-free"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src={HERO_IMAGE}
                    alt="Θέα στο Λονδίνο από δωρεάν σημείο παρατήρησης"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Τα Καλύτερα Δωρεάν Αξιοθέατα στο Λονδίνο (2026)
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Το Λονδίνο είναι από τις ακριβότερες πόλεις της Ευρώπης. Η διαμονή και το κόστος ζωής είναι πολύ υψηλά, ειδικά για τα ελληνικά δεδομένα, και πολλά αξιοθέατα είναι ακριβά: το London Eye κοστίζει γύρω στις 30 λίρες και ο Πύργος του Λονδίνου γύρω στις 35. Ευτυχώς, υπάρχουν πολλά αξιοθέατα και δραστηριότητες που είναι εντελώς δωρεάν. Αρκεί να έχετε κάνει από πριν τις κρατήσεις σας.
                </p>
                <div className="my-6 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                    Τα μεγάλα μουσεία του Λονδίνου είναι <strong>δωρεάν</strong> και υπάρχουν πάνω από <strong>πέντε σημεία με θέα από ψηλά χωρίς εισιτήριο</strong>. Για τα περισσότερα αρκεί μια δωρεάν κράτηση online, ενώ σε αρκετά απλώς μπαίνετε. Παρακάτω θα βρείτε όλα όσα αξίζουν, με tips για να μη χάσετε τις κρατήσεις.
                </div>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Στο ταξίδι μας στο Λονδίνο είδαμε αρκετά από αυτά. Το Βρετανικό Μουσείο είναι τεράστιο, και η ελληνική και η αιγυπτιακή συλλογή του από μόνες τους θέλουν ώρες. Το Μουσείο Φυσικής Ιστορίας, με τον διάσημο δεινόσαυρο, έχει φανταστικά εκθέματα. Λιγότερο μας εντυπωσίασε το Tate Modern, που αν έχετε λίγο χρόνο μπορείτε να το παραλείψετε. Μια βόλτα στην National Gallery, στην Trafalgar Square, αξίζει αν έχετε λίγο χρόνο να διαθέσετε. Για θέα από ψηλά πήγαμε στο Sky Garden στο City, με τους εντυπωσιακούς εσωτερικούς κήπους του. Και φυσικά δεν χάσαμε μία από τις πιο διάσημες δωρεάν εμπειρίες της πόλης, την αλλαγή φρουράς έξω από το Buckingham Palace.
                </p>

                <TableOfContents items={tocItems} title="Περιεχόμενα Άρθρου" />

                {/* Με μια ματιά */}
                <div id="matia" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Με μια ματιά
                    </h2>
                    {overview.map((group) => (
                        <div key={group.group} className="mb-6">
                            <h3 className="text-lg font-bold text-[#F76808] mb-2">{group.group}</h3>
                            <ResponsiveTable columns={overviewColumns} rows={group.rows} />
                        </div>
                    ))}
                </div>

                {/* Μουσεία */}
                <div id="mouseia" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Τα δωρεάν μουσεία
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στο Λονδίνο οι μόνιμες συλλογές των μεγάλων μουσείων είναι δωρεάν. Πληρώνετε μόνο για τις περιοδικές εκθέσεις. Στην είσοδο θα δείτε κουτιά για δωρεές, αλλά είναι προαιρετικές.
                    </p>
                    <SpotList
                        spots={museums}
                        photos={{
                            1: (
                                <PhotoPair
                                    left={{ src: '/blog_images/london-free-2.jpg', alt: 'Το Natural History Museum στο Λονδίνο' }}
                                    right={{ src: '/blog_images/london-free-3.jpg', alt: 'Ο σκελετός του δεινοσαύρου στο Natural History Museum' }}
                                />
                            ),
                        }}
                    />
                </div>

                {/* Θέα */}
                <div id="thea" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Θέα από ψηλά χωρίς εισιτήριο
                    </h2>
                    <SpotList
                        spots={views}
                    />
                    <p className="text-[#2E2E2F] mt-6 mb-4 text-justify">
                        <strong>Και αν προτιμάτε φύση:</strong> ανεβείτε στο <strong>Primrose Hill</strong>, δίπλα στο Camden, για θέα σε όλη την πόλη από ψηλά.
                    </p>
                </div>

                {/* Κήποι */}
                <div id="kipoi" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Κρυμμένοι κήποι
                    </h2>
                    <SpotList
                        spots={gardens}
                    />
                    <div className="my-4 rounded-xl bg-white border-l-4 border-[#F76808] shadow-sm p-5 text-[#2E2E2F]">
                        <strong>Προσοχή:</strong> το Barbican Conservatory κλείνει στις αρχές του 2027 για ανακαίνιση τριών ετών και θα ανοίξει ξανά το 2030. Αν ταξιδεύετε μέσα στο 2026, προλάβετέ το.
                    </div>
                </div>

                {/* Άλλες εμπειρίες */}
                <div id="alles" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Άλλες δωρεάν εμπειρίες
                    </h2>
                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">Η αλλαγή φρουράς</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Γίνεται στο Buckingham Palace συνήθως <strong>Δευτέρα, Τετάρτη και Παρασκευή στις 11:00</strong>, ενώ σε κάποιες περιόδους γίνεται και Κυριακή. Το πρόγραμμα αλλάζει συχνά και επιβεβαιώνεται περίπου έξι εβδομάδες πριν, οπότε ελέγξτε το επίσημο ημερολόγιο του Household Division την προηγούμενη μέρα.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το tip μας: μην στριμωχτείτε στα κάγκελα του παλατιού, γιατί θα δείτε μόνο πλάτες. Σταθείτε στο The Mall ή στο St James&apos;s Palace, όπου περνάνε οι φρουροί με τη μπάντα, και θα δείτε πολύ περισσότερα.
                    </p>
                    <h3 className="text-xl font-bold text-[#2E2E2F] mt-6 mb-2">Outernet</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στο Now Building, δίπλα στον σταθμό Tottenham Court Road, οι τοίχοι από το πάτωμα μέχρι το ταβάνι είναι τεράστιες οθόνες. Κάθε μέρα προβάλλονται δωρεάν ψηφιακά shows τέχνης, μουσικής και φύσης που σας περιβάλλουν από παντού. Δεν χρειάζεται εισιτήριο, απλώς μπαίνετε. Είναι ανοιχτό από το πρωί μέχρι αργά το βράδυ και αρέσει πολύ στα παιδιά.
                    </p>
                </div>

                {/* Βόλτες, αγορές, πάρκα */}
                <div id="voltes" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Βόλτες που δεν κοστίζουν τίποτα
                    </h2>
                    <BulletList items={walks} />

                    <h2 className="text-2xl font-bold text-[#2E2E2F] mt-10 mb-4">
                        Αγορές και γειτονιές
                    </h2>
                    <BulletList items={markets} />

                    <h2 className="text-2xl font-bold text-[#2E2E2F] mt-10 mb-4">
                        Πάρκα
                    </h2>
                    <BulletList items={parks} />
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
                        Για μεταφορά από το αεροδρόμιο, μετακινήσεις, διαμονή και πρόγραμμα 5 ημερών δείτε τον{' '}
                        <Link href="/destinations/london" className="text-blue-600 underline font-bold">αναλυτικό οδηγό μας για το Λονδίνο</Link>.
                        Αν πάτε τον Δεκέμβριο, δείτε και τα{' '}
                        <Link href="/blog/christougenna-londino" className="text-blue-600 underline font-bold">Χριστούγεννα στο Λονδίνο</Link>.
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

export default LondonFreeAttractions
