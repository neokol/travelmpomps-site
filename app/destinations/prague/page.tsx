import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaCoins, FaPlane, FaBed, FaBus, FaUtensils, FaSun, FaMapMarkedAlt, FaLandmark, FaGifts } from 'react-icons/fa';
import { VscRadioTower } from 'react-icons/vsc';
import { GiPassport } from 'react-icons/gi';
import { FaLanguage } from 'react-icons/fa6';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import RelatedDestinations from '@/app/components/RelatedDestinations';
import { QuickFacts } from '@/app/components/QuickFacts';
import { TripCosts } from '@/app/components/TripCosts';
import { PhotoPair } from '@/app/components/PhotoPair';
import { PhotoFull } from '@/app/components/PhotoFull';
import { TableOfContents } from '@/app/components/TableOfContents';

export const metadata: Metadata = {
    title: "Πράγα: Τι να δεις και τι να κάνεις σε 3 Ημέρες (Οδηγός 2026)",
    description: "Ανακαλύψτε την Πράγα, την πόλη των εκατό πυργίσκων. Πλήρης οδηγός 3 ημερών: Αστρονομικό Ρολόι, Κάστρο της Πράγας, Charles Bridge και τα καλύτερα σημεία για φαγητό.",
    alternates: {
        canonical: '/destinations/prague',
    },
    openGraph: {
        title: 'Πράγα: Ο απόλυτος οδηγός για 3 ημέρες στην πόλη των εκατό πυργίσκων',
        description: 'Αστρονομικό Ρολόι, Κάστρο της Πράγας, Charles Bridge και η πιο cool γειτονιά της πόλης. Όλα όσα χρειάζεστε για το ταξίδι σας στην Πράγα.',
        url: '/destinations/prague',
        type: 'article',
        images: [
            {
                url: '/hero/prague-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Πράγα: Ταξιδιωτικός Οδηγός 2026',
            },
        ],
    },
}

const pragueQuickFacts = [
    {
        icon: <FaCoins className="w-5 h-5" />,
        label: 'Νόμισμα',
        value: 'Το επίσημο νόμισμα είναι η τσέχικη κορώνα (CZK) — καλό είναι να έχετε πάντα λίγα μετρητά μαζί σας.',
    },
    {
        icon: <VscRadioTower className="w-5 h-5" />,
        label: 'Roaming',
        value: 'Η Τσεχία ανήκει στην Ευρωπαϊκή Ένωση, συνεπώς ισχύει το δωρεάν roaming και μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας.',
    },
    {
        icon: <GiPassport className="w-5 h-5" />,
        label: 'Έγγραφα',
        value: 'Ταυτότητα ή διαβατήριο.',
    },
    {
        icon: <FaLanguage className="w-5 h-5" />,
        label: 'Γλώσσα',
        value: 'Μιλάνε Τσέχικα, αλλά στα τουριστικά μέρη θα βρείτε αρκετούς που μιλάνε Αγγλικά.',
    },
];

const pragueTocItems = [
    { icon: <FaPlane className="w-5 h-5" />, label: 'Μεταφορά από το Αεροδρόμιο', targetId: 'metafora' },
    { icon: <FaBed className="w-5 h-5" />, label: 'Πού να Μείνεις', targetId: 'pou-na-mineis' },
    { icon: <FaBus className="w-5 h-5" />, label: 'Μετακινήσεις', targetId: 'metakiniseis' },
    { icon: <FaSun className="w-5 h-5" />, label: 'Πότε να Επισκεφτείτε', targetId: 'pote' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: '1η Ημέρα', targetId: 'imera-1' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: '2η Ημέρα', targetId: 'imera-2' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: '3η Ημέρα', targetId: 'imera-3' },
    { icon: <FaLandmark className="w-5 h-5" />, label: 'Επιπλέον Δραστηριότητες', targetId: 'epipleon' },
    { icon: <FaGifts className="w-5 h-5" />, label: 'Χριστούγεννα στην Πράγα', targetId: 'christougenna' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Φαγητό', targetId: 'fagito' },
    { icon: <FaCoins className="w-5 h-5" />, label: 'Πόσο Κοστίζει', targetId: 'kostos' },
];

const pragueTripCosts = [
    { icon: <FaPlane className="w-5 h-5" />, label: 'Αεροπορικά', range: '250€ – 500€' },
    { icon: <FaBed className="w-5 h-5" />, label: 'Ξενοδοχεία', range: '80€ – 120€' },
    { icon: <FaBus className="w-5 h-5" />, label: 'Μεταφορές', range: '10€ – 20€' },
    { icon: <FaLandmark className="w-5 h-5" />, label: 'Δραστηριότητες', range: '30€ – 80€' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Φαγητό', range: '35€ – 60€' },
];

function Prague() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Προορισμοί', item: 'https://travelmpomps.gr/destinations' },
            { '@type': 'ListItem', position: 3, name: 'Πράγα', item: 'https://travelmpomps.gr/destinations/prague' },
        ],
    };

    return (
        <div className="min-h-screen">
            <Script
                id="json-ld-breadcrumb-prague"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                async
                defer
                src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
                data-gyg-partner-id="0OAQQKO"
            />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
                <Image
                    src="/hero/prague-hero.jpg"
                    alt="Ταξιδιωτικός οδηγός για την Πράγα"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="font-display text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Πράγα: Τι να Κάνεις και Τι να Δεις σε 3 Ημέρες
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Καλώς ορίσατε στην Πράγα, την πρωτεύουσα της Τσεχίας και πατρίδα ενός από τα μεγαλύτερα κάστρα στον κόσμο! Με το παρατσούκλι «πόλη των εκατό πυργίσκων», αν και στην πραγματικότητα ο ορίζοντας έχει χιλιάδες, χαρακτηριστικό της γοτθικής αρχιτεκτονικής της πόλης.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Υπάρχουν τόσα πολλά πράγματα να κάνετε στην Πράγα, που μπορείτε να περάσετε τουλάχιστον 3 ημέρες εδώ ανακαλύπτοντας την ιστορία της, περιπλανώμενοι στα γοητευτικά πλακόστρωτα δρομάκια, τρώγοντας νόστιμο φαγητό και θαυμάζοντας την παραμυθένια αρχιτεκτονική. Το ταξίδι μας έγινε την περίοδο του καλοκαιριού και η πόλη μας άφησε τις καλύτερες εντυπώσεις — πανέμορφη αρχιτεκτονική, αρκετά πράγματα να δεις και να κάνεις και πραγματικά καλό φαγητό.
                </p>

                <TableOfContents items={pragueTocItems} />

                <div className="my-8">
                    <QuickFacts items={pragueQuickFacts} />
                </div>

                {/* 1. Μεταφορά */}
                <div id="metafora" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το Αεροδρόμιο της Πράγας
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το μόνο αρνητικό της Πράγας είναι ότι δεν καλύπτεται από κάποια low-cost εταιρεία. Ως εκ τούτου, οι τιμές στις πτήσεις είναι αρκετά πιο τσιμπημένες από αντίστοιχες πόλης της κεντρικής Ευρώπης, όπως η Βουδαπέστη και η Βιέννη.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το αεροδρόμιο της Πράγας, Václav Havel Airport, βρίσκεται περίπου 17 χλμ από το κέντρο της πόλης. Οι οικονομικότεροι τρόποι να φτάσετε στο κέντρο είναι οι εξής:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li>
                            <strong>Μέσα μαζικής μεταφοράς:</strong> Αυτή είναι η διαδρομή που χρησιμοποιούν οι ντόπιοι, και για καλό λόγο. Το τρόλεϊ 59 αναχωρεί ακριβώς έξω από τον τερματικό σταθμό 1 και τον τερματικό σταθμό 2. Πραγματοποιεί δρομολόγια προς τον σταθμό του μετρό Nádraží Veleslavín και σε περίπου 15 λεπτά κατεβαίνετε και περπατάτε κατευθείαν στη γραμμή Α του μετρό (την πράσινη γραμμή). Επτά στάσεις αργότερα βρίσκεστε στη Staroměstská — την καρδιά της Παλιάς Πόλης. Ο συνολικός χρόνος διαδρομής είναι περίπου 45 λεπτά και ένα εισιτήριο 90 λεπτών κοστίζει 50 CZK (περίπου 2€).
                        </li>
                        <li>
                            <strong>Λεωφορείο Express:</strong> Εναλλακτικά υπάρχει και η επιλογή του λεωφορείου express, το οποίο πηγαίνει στον κεντρικό σταθμό τρένου Praha hlavní nádraží σε περίπου 35 λεπτά χωρίς μετεπιβιβάσεις. Το AE κοστίζει 200 CZK για ενήλικες ή 100 CZK για παιδιά 6-15 ετών. Το AE δεν καλύπτεται από τα τυπικά εισιτήρια μεταφοράς της Πράγας — πρέπει να αγοράσετε ξεχωριστό εισιτήριο από τον οδηγό ή online.
                        </li>
                    </ul>
                    <p className="text-[#2E2E2F] mt-4 text-justify italic">
                        💡 Αν η πτήση σας φτάνει μετά τα μεσάνυχτα, το μετρό κλείνει περίπου τα μεσάνυχτα και το τρόλεϊ 59 κάνει την τελευταία του αναχώρηση γύρω στις 23:30. Μετά από αυτό, το νυχτερινό λεωφορείο 907 αναχωρεί από το αεροδρόμιο περίπου κάθε 30 λεπτά. Εναλλακτικά, μετά τα μεσάνυχτα οι δρόμοι της Πράγας είναι άδειοι, οπότε ένα Bolt είναι συχνά και φθηνότερο απ&apos; ό,τι την ημέρα, αφού δεν υπάρχει κίνηση.
                    </p>
                </div>

                {/* 2. Που να μείνεις */}
                <div id="pou-na-mineis" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Πού να Μείνεις στην Πράγα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν είναι η πρώτη φορά που επισκέπτεστε την Πράγα, καλύτερα να μείνετε κοντά ή μέσα στην Παλιά Πόλη ή εναλλακτικά στη Μικρή Πόλη, που βρίσκεται στην αντίπερα όχθη του ποταμού Μολδάβα. Αυτή η περιοχή είναι ζωντανή και σε κοντινή απόσταση με τα πόδια από τα περισσότερα αξιοθέατα.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Οι καλύτερες περιοχές της Πράγας για να μείνετε είναι:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Παλιά Πόλη (Staré Město):</strong> Έχει τα περισσότερα αξιοθέατα, θα μπορείτε να μετακινηθείτε εύκολα με τα πόδια και θα έχετε πάρα πολλές επιλογές από φαγητό/ποτό, καθώς θα είναι όλα στα πόδια σας. Όμως έχει αμέτρητο κόσμο και πολύ φασαρία.</li>
                        <li><strong>Μικρή Πόλη (Malá Strana):</strong> Βρίσκεται από την άλλη πλευρά του ποταμού, εκεί βρίσκεται και το κάστρο της Πράγας. Είναι πολύ κοντά στην παλιά πόλη και εύκολο να τη μετακινηθείτε με τα πόδια. Το βράδυ είναι πολύ πιο ήσυχα.</li>
                        <li><strong>Νέα Πόλη (Nové Město):</strong> Ιδανική αν είστε διατεθειμένοι να βγείτε έξω από την Παλιά Πόλη και τη Μικρή Πόλη, αλλά παράλληλα να είστε πιο κοντά στα αξιοθέατα. Ένα μείγμα ιστορικών και σύγχρονων επιρροών, με πιο οικονομικά καταλύματα.</li>
                        <li><strong>Holešovice:</strong> Μια από τις πιο cool γειτονιές της Πράγας και προσωπική μας αγαπημένη. Έχει πολύ λιγότερα τουριστικά μέρη για φαγητό και ποτό, βρίσκεται ακριβώς πίσω από το κάστρο και εκεί βρίσκεται και το πάρκο Letná. Αν επισκεπτόμασταν την Πράγα για δεύτερη φορά, σίγουρα θα επιλέγαμε αυτή την περιοχή.</li>
                        <li><strong>Vinohrady:</strong> Ήταν κάποτε γεμάτη αμπελώνες, γι&apos; αυτό έχει αρκετά wine bar. Βρίσκεται πιο μακριά από το ιστορικό κέντρο, οπότε θα χρειαστείτε πιο συχνά τα μέσα μεταφοράς. Εκεί βρίσκεται και το κάστρο Vyšehrad.</li>
                    </ul>
                </div>

                {/* 3. Μετακινήσεις */}
                <div id="metakiniseis" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Μετακινήσεις στην Πράγα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η Πράγα διαθέτει ένα ολοκληρωμένο σύστημα δημόσιων συγκοινωνιών που αποτελείται από τρεις γραμμές μετρό, 26 γραμμές τραμ και πάνω από 100 γραμμές λεωφορείων που μπορούν να σας μεταφέρουν σχεδόν οπουδήποτε μέσα στην πόλη, καθώς και λίγο έξω από αυτήν.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η αλήθεια είναι ότι δεν χρησιμοποιήσαμε τα μέσα, επειδή μέναμε στο κέντρο της Παλιάς Πόλης και μετακινηθήκαμε με τα πόδια. Ένα εισιτήριο 90 λεπτών κοστίζει περίπου 2€ και ένα εισιτήριο 30 λεπτών κοστίζει 1,6€.
                    </p>
                </div>

                {/* 4. Πότε να επισκεφτείτε */}
                <div id="pote" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Πότε να Επισκεφτείτε την Πράγα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Μπορείτε να επισκεφτείτε την Πράγα οποιαδήποτε εποχή του χρόνου και δεν θα σας απογοητεύσει. Εμείς την επισκεφτήκαμε το καλοκαίρι — αν έχει καύσωνα, η ζέστη θα κάνει πολύ δύσκολο να περπατήσετε όλη την πόλη, όμως η μέρα είναι πολύ μεγάλη και θα έχετε αρκετό χρόνο. Φυσικά η περίοδος των Χριστουγέννων είναι η πιο δημοφιλής, αφού όλη η πόλη φοράει τα γιορτινά της και ανοίγουν οι χριστουγεννιάτικες αγορές.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ο Μάιος, ο Σεπτέμβριος και οι αρχές Οκτωβρίου είναι όμως οι καλύτεροι μήνες. Η άνοιξη και το φθινόπωρο προσφέρουν ήπιο καιρό, διαχειρίσιμα πλήθη, καλό φως για φωτογραφίες και μια πόλη που δίνει την αίσθηση της ζωής χωρίς να νιώθεις ότι έχει κατακλυστεί από τουρίστες. Κάθε μήνας όμως είναι διαφορετική περίπτωση και η κατάλληλη στιγμή εξαρτάται από το τι σας ενδιαφέρει περισσότερο.
                    </p>
                </div>

                <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-location-id="10" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/prague-l10/">GetYourGuide</a></span></div>

                {/* 5. Πρόγραμμα */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        5. Πρόγραμμα 3 Ημερών
                    </h2>
                </div>

                {/* Ημέρα 1 */}
                <div id="imera-1" className="mt-8 scroll-mt-24">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 1η Ημέρα
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ξεκινήστε την περιήγησή σας στην πόλη από την καρδιά της Παλιάς Πόλης, τη διάσημη πλατεία της Παλιάς Πόλης — περιτριγυρισμένη από πολύχρωμα κτήρια, γοτθικές εκκλησίες, μνημεία, αγάλματα και φυσικά το διάσημο αστρονομικό ρολόι. Είναι το πιο τουριστικό σημείο της Πράγας, όπου θα δείτε αμέτρητο κόσμο.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το <strong>Αστρονομικό Ρολόι</strong> είναι μεσαιωνικό αριστούργημα του 15ου αιώνα στον πύργο του Παλιού Δημαρχείου. Κάθε αλλαγή της ώρας (09:00-23:00) συνοδεύεται από την «Παρέλαση των Αποστόλων», έναν μηχανισμό με κινούμενες φιγούρες. Ο θρύλος λέει ότι οι δημοτικοί σύμβουλοι της Πράγας ήταν τόσο περήφανοι για αυτό το ρολόι που έκαψαν τα μάτια του ωρολογοποιού για να αποτρέψουν τη δημιουργία ενός άλλου αλλού — σήμερα πάντως υπάρχει ένα ακριβές αντίγραφο στη Σεούλ. Μπορείτε να ανεβείτε και στον πύργο για να δείτε τη θέα από ψηλά, κλείνοντας εισιτήρια <a href="https://gyg.me/4KpOKZYq" className="text-blue-600 underline">εδώ</a>. Το ρολόι αποτελείται από τρία κύρια εξαρτήματα: τον αστρονομικό δίσκο, που αντιπροσωπεύει τη θέση του ήλιου και της σελήνης, το «Περίπατο» των Αποστόλων και έναν ημερολογιακό δίσκο με μετάλλια που αντιπροσωπεύουν τους μήνες.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/prague/prague-astronomical-clock.jpeg', alt: 'Το Αστρονομικό Ρολόι στην πλατεία της Παλιάς Πόλης της Πράγας' }}
                        right={{ src: '/images/prague/prague-tyn-church.jpeg', alt: 'Η εκκλησία Our Lady Before Týn στην Πράγα' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Δίπλα βρίσκεται η <strong>Our Lady Before Týn</strong> (δωρεάν), το εμβληματικό γοτθικό κτίριο με τους δύο ασύμμετρους, μαύρους πύργους που δεσπόζουν στην πλατεία. Η είσοδος είναι διακοσμημένη με σκηνές από τα Πάθη του Χριστού και στο βόρειο τοίχο υπάρχει μια τεράστια ροκοκό Αγία Τράπεζα. Δεξιά της βρίσκεται ο τάφος του Δανού αστρονόμου Τύχο ντε Μπράχε. Η είσοδος γίνεται μέσω του περάσματος από την Πλατεία της Παλιάς Πόλης αρ. 14.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στην πλατεία θα βρείτε επίσης τη <strong>St. Nicholas&apos; Church</strong> (δωρεάν), με εντυπωσιακό μπαρόκ εσωτερικό και έναν τεράστιο κρυστάλλινο πολυέλαιο σε σχήμα στέμματος, το <strong>Jan Hus Monument</strong> στο κέντρο της πλατείας, το σπίτι <strong>«At the Minute»</strong> με τα ασπρόμαυρα σχέδια στην πρόσοψη — τα παιδικά χρόνια του Φραντς Κάφκα — και το <strong>Stone Bell House</strong>, ίσως το πιο ελκυστικό κτίριο της πλατείας, που σήμερα φιλοξενεί εκθέσεις σύγχρονης τέχνης.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν θέλετε να ξεκουραστείτε για έναν καφέ, προτείνουμε δύο μαγαζιά: το πολύ cute <strong>Coffee Room Celetná</strong>, με φανταστικό freddo espresso, και το πολύ περίεργο <strong>Scout Institute</strong> — βρίσκεται ουσιαστικά μέσα σε μια πολυκατοικία με τραπεζάκια σε διάφορους ορόφους και είναι self-service.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Συνεχίστε στη <strong>Celetná Street</strong>, έναν από τους παλαιότερους δρόμους της πόλης, τμήμα της Βασιλικής Οδού, με ιστορικά κτίρια όπως το Three Kings, το White Lion, το Black Sun και το φημισμένο House of the Black Madonna, το παλαιότερο κυβιστικό κτίριο της πόλης. Θα φτάσετε στο <strong>Powder Tower</strong>, γοτθική πύλη που διαχωρίζει την Παλιά από τη Νέα Πόλη, και δίπλα του το <strong>Municipal House</strong>, το πιο σημαντικό αρτ νουβό κτίριο της πόλης, όπου κηρύχθηκε η ανεξαρτησία της Τσεχοσλοβακίας το 1918. Σχεδόν απέναντι θα βρείτε το μεγαλύτερο εμπορικό κέντρο της Πράγας, το <strong>Palladium</strong>, με πάνω από 175 καταστήματα, εστιατόρια και καφέ.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για φαγητό προτείνουμε το εστιατόριο <strong>Bredovský Dvůr</strong>, ένα από τα καλύτερα εστιατόρια που έχουμε φάει στο εξωτερικό, με πολύ καλές τιμές — είναι αρκετά μεγάλο, αλλά καλό είναι να κάνετε κράτηση online.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Τέλος, φυσικά μπορείτε να δείτε το σήμα κατατεθέν της Πράγας, την <strong>Charles Bridge</strong> (Karlův most). Η αρχική ιδέα ήταν να κατασκευαστεί μια γέφυρα για το τουρνουά ιπποδρομιών, και για πολλά χρόνια η μόνη διακόσμηση ήταν ένας απλός σταυρός. Αργότερα η επιθυμία των Καθολικών για διακόσμηση οδήγησε στην κατασκευή 30 αγαλμάτων μεταξύ 1600 και 1800 — τα περισσότερα σήμερα είναι αντίγραφα, λόγω ζημιών από πλημμύρες κατά τη διάρκεια των αιώνων. Ίσως το πιο ενδιαφέρον και παλαιότερο άγαλμα είναι αυτό του Αγίου Ιωάννη Νέπομουκ (νούμερο οκτώ από δεξιά καθώς διασχίζετε προς το κάστρο). Η γέφυρα έχει μήκος 516 μέτρα, με 16 πυλώνες και τρεις πύργους.
                    </p>

                    <PhotoFull src="/images/prague/prague-charles-bridge.jpg" alt="Η γέφυρα Charles Bridge στην Πράγα" />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για τους περισσότερους το πιο γνωστό σημείο της γέφυρας είναι αυτό όπου έβγαλαν τη θρυλική φωτογραφία οι <strong>Depeche Mode</strong> το 1988, δίπλα από το άγαλμα Pietà. Θα το καταλάβετε από τον κόσμο που περιμένει να βγάλει φωτογραφία — για να την πετύχετε χωρίς πολύ κόσμο, θα πρέπει να πάτε πολύ νωρίς το πρωί.
                    </p>
                </div>

                {/* Ημέρα 2 */}
                <div id="imera-2" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 2η Ημέρα
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το μεγαλύτερο μέρος της ημέρας μπορείτε να το περάσετε στην αντίπερα όχθη του ποταμού Μολδάβα, στη Malá Strana και το κάστρο της Πράγας.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Δεν είναι απαραίτητο να έχετε κλείσει εισιτήρια για το κάστρο της Πράγας — μπορείτε να δείτε και να περπατήσετε στα αξιοθέατα και τον προαύλιο χώρο δωρεάν. Αν θέλετε να κλείσετε εισιτήριο, καλό είναι να το έχετε κάνει online από πριν <a href="https://gyg.me/ajq7rjbp" className="text-blue-600 underline">εδώ</a>. Το εισιτήριο δίνει πρόσβαση στο Old Royal Palace, στο εσωτερικό του Καθεδρικού, τη Βασιλική του Αγίου Γεωργίου και τη Golden Lane.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Προτείνουμε να ξεκινήσετε νωρίς με το <strong>Κάστρο της Πράγας</strong>, καθώς θα σας πάρει αρκετή ώρα. Μοιάζει σχεδόν με μια μικρή πόλη από μόνο του — είναι το μεγαλύτερο αρχαίο συγκρότημα κάστρων στον κόσμο, με μήκος 570 μέτρα και μέσο πλάτος 128 μέτρα. Εδώ οι Τσέχοι βασιλιάδες, οι Ρωμαίοι αυτοκράτορες και οι πρόεδροι της Τσεχικής Δημοκρατίας είχαν τα γραφεία τους — μαζί με την πλατεία της Παλιάς Πόλης, είναι το πιο σημαντικό αξιοθέατο της Πράγας.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/prague/prague-castle.jpeg', alt: 'Το κάστρο της Πράγας' }}
                        right={{ src: '/images/prague/prague-st-vitus.jpeg', alt: 'Ο καθεδρικός ναός του Αγίου Βίτου στην Πράγα' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ο <strong>Gothic St. Vitus Cathedral</strong> είναι ίσως από τους πιο εντυπωσιακούς ναούς που έχουμε δει — ένας επιβλητικός γοτθικός ναός του 14ου αιώνα, διακοσμημένος με συναρπαστικά γαργκόιλ που φαίνονται εύκολα από το επίπεδο του εδάφους. Στο εσωτερικό υπάρχουν πολύ περίτεχνοι τάφοι που θυμίζουν την τσεχική ιστορία — αξίζει να ανέβει κανείς στην κορυφή του καμπαναριού, απ&apos; όπου υπάρχει υπέροχη θέα στο κάστρο και την παλιά πόλη. Η <strong>St. George&apos;s Basilica</strong> είναι η παλαιότερη σωζόμενη εκκλησία μέσα στο κάστρο, με εντυπωσιακή ρωμανική αρχιτεκτονική στο εσωτερικό και χαρακτηριστική κόκκινη μπαρόκ πρόσοψη — το εσωτερικό της, ωστόσο, δεν είναι κάτι ιδιαίτερο.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η <strong>Golden Lane</strong> πήρε το όνομά της από τους χρυσοχόους που ζούσαν εδώ τον 17ο αιώνα — μια πολύ γραφική περιοχή με πολύ μικρά σπιτάκια. Προτιμήστε να πάτε πρωί ή πολύ αργά το απόγευμα ώστε να την πετύχετε με όσο το λιγότερο κόσμο γίνεται. Η περιοχή περιβάλλεται από πολλούς μύθους γύρω από αλχημιστές που προσπαθούσαν να φτιάξουν την πέτρα της σοφίας — αργότερα προσέλκυε τους φτωχούς της πόλης, ενώ τον 19ο αιώνα ανακαινίστηκε και αρκετοί διάσημοι συγγραφείς έζησαν εδώ, ανάμεσά τους ο Φραντς Κάφκα και ο βραβευμένος με Νόμπελ ποιητής Γιάροσλαβ Σάιφερτ.
                    </p>

                    <PhotoFull src="/images/prague/prague-golden-lane.jpg" alt="Η Golden Lane μέσα στο κάστρο της Πράγας" />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Καθώς κατεβαίνετε από το κάστρο αξίζει να περάσετε από το <strong>Waldstein Garden</strong>, έναν εντυπωσιακό γεωμετρικό μπαρόκ κήπο της Γερουσίας, με ελεύθερα παγώνια, λιμνούλα με ψάρια Koi και έναν αλλόκοτο τεχνητό τοίχο από σταλακτίτες. Η είσοδος είναι δωρεάν και δίνει μια εντελώς διαφορετική εικόνα του κέντρου της Πράγας.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ακριβώς κάτω από το κάστρο, στη <strong>Lesser Town</strong>, προτείνουμε το παραδοσιακό εστιατόριο <strong>U Glaubiců</strong>, με κλασική τσέχικη κουζίνα — παρόλο που βρίσκεται σε τουριστική περιοχή, είναι αρκετά τίμιο και με καλές τιμές. Σε ώρα αιχμής καλύτερα να κλείσετε τραπέζι online.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ακριβώς απέναντι από το εστιατόριο βρίσκεται η <strong>St. Nicholas&apos; Church</strong> με τον χαρακτηριστικό πράσινο τρούλο της, στην Malostranské Square — το πιο χαρακτηριστικό μπαρόκ κτίριο της Πράγας, όπου ο Μότσαρτ έχει παίξει στο εκκλησιαστικό όργανο (είσοδος 130 CZK). Συνεχίστε προς το πιο στενό δρομάκι της Πράγας, το <strong>Prague&apos;s narrowest alley</strong>, με ένα φανάρι σε κάθε πλευρά, και πίσω από το Gingerbread Man θα βρείτε ένα διάσημο έργο του David Černý, το <strong>Peeing Characters Sculpture</strong> — δύο αγάλματα που κατουράνε. Αν κατεβείτε στις όχθες του ποταμού από εκεί, μπορεί να δείτε και τους διάσημους πλέον κάστορες της πόλης.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/prague/prague-lennon-wall.jpeg', alt: 'Ο τοίχος του Λένον στην Πράγα' }}
                        right={{ src: '/images/prague/prague-kampa.jpeg', alt: 'Το νησί Kampa και τα διάσημα μωρά του David Černý' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Επόμενο στη λίστα μας είναι ο <strong>τοίχος του Λένον</strong> (Lennon Wall) — ένας τοίχος με γκράφιτι που απεικονίζει τον Τζον Λένον, καλυμμένος πλέον από άλλα σχέδια, με μεγάλη ιστορική σημασία για την περιοχή, καθώς αποτελούσε σύμβολο αντίστασης κατά του κομμουνιστικού καθεστώτος. Στο νησί <strong>Kampa</strong> θα βρείτε ακόμα ένα έργο του David Černý, τα διάσημα μωρά του, και ένα μικρό τεχνητό κανάλι, το Čertovka, που διαχωρίζει το νησάκι από τη Malá Strana, με κάποιους αναπαλαιωμένους νερόμυλους.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν έχετε χρόνο και αντοχές (ειδικά αν επισκέπτεστε την πόλη άνοιξη ή καλοκαίρι, με μεγάλη μέρα μπροστά σας), μπορείτε να συνεχίσετε μέχρι την περιοχή Holešovice, την πιο cool γειτονιά της Πράγας. Περάστε πρώτα από το <strong>Letná Park</strong> για να δείτε τον μετρονόμο και να βγάλετε φωτογραφίες από ψηλά με φόντο τη Charles Bridge — στη θέση του κάποτε βρισκόταν ένα γιγάντιο άγαλμα του Στάλιν. Εκεί βρίσκεται και ένα από τα πιο διάσημα beer gardens της πόλης, με πανοραμική θέα στις γέφυρες. Συνεχίστε προς την όμορφη εκκλησία <strong>Church of St. Anthony of Padua</strong> και κάντε μια στάση στο <strong>Mr. HotDoG</strong> για ένα hot dog όπως κάνουν οι ντόπιοι.
                    </p>
                </div>

                {/* Ημέρα 3 */}
                <div id="imera-3" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 3η Ημέρα
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η τρίτη ημέρα στην Πράγα μπορεί να αξιοποιηθεί για να δείτε μέρη εκτός κέντρου ή μέρη που έχετε αφήσει από τις προηγούμενες ημέρες.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ξεκινήστε από το περιστρεφόμενο <strong>κεφάλι του Franz Kafka</strong>, ίσως το γνωστότερο έργο του καλλιτέχνη David Černý. Κάθε 15 λεπτά το κεφάλι αρχίζει να περιστρέφεται — έχει ύψος 11 μέτρων και αποτελείται από 42 περιστρεφόμενα μεταλλικά στρώματα που ανασχηματίζουν το πρόσωπο του συγγραφέα. Βρίσκεται μπροστά από ένα πολύ όμορφο εμπορικό κέντρο, όπου στους κάτω ορόφους θα βρείτε σούπερ μάρκετ (BILLA) και καταστήματα με οικονομικά προϊόντα ομορφιάς (DM). Αφού βγάλετε τα απαραίτητα βίντεο, πολύ κοντά βρίσκεται το <strong>Knedlín</strong>, ένα μαγαζί με τσέχικα dumplings, γλυκά και αλμυρά, που αξίζει να δοκιμάσετε.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/prague/prague-kafka-head.jpeg', alt: 'Το περιστρεφόμενο κεφάλι του Franz Kafka στην Πράγα' }}
                        right={{ src: '/images/prague/prague-dancing-house.jpeg', alt: 'Το Dancing House στην Πράγα' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στη συνέχεια προχωρήστε στο επίσης διάσημο <strong>Dancing House</strong>. Με το παρατσούκλι «Φρεντ και Τζίντζερ», είναι ένα πολυλειτουργικό κτίριο με γραφεία, ξενοδοχείο, γκαλερί και το εστιατόριο Ginger &amp; Fred. Σχεδιασμένο από τους αρχιτέκτονες Βλάντο Μιλούνιτς και Φρανκ Γκέρι, ολοκληρώθηκε το 1996, δίπλα σε ένα κτίριο που κάποτε ανήκε στον Τσέχο θεατρικό συγγραφέα και πρώην πρόεδρο Βάτσλαβ Χάβελ, ο οποίος υποστήριζε αυτό το πρωτοποριακό σχέδιο. Λέγεται ότι μοιάζει με ζευγάρι χορευτών — η αρχιτεκτονική έρχεται σε πλήρη αντίθεση με τη γύρω νεομπαρόκ, νεογοτθική και αρ νουβό αρχιτεκτονική. Στον 7ο όροφο βρίσκεται ένα εστιατόριο με θέα στον ποταμό Μολδάβα και το κάστρο της Πράγας.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Σχεδόν από κάτω, στις αποβάθρες, βρίσκεται το διάσημο καφέ <strong>(A)void cafe</strong>, που εντυπωσιάζει με το τεράστιο στρογγυλό παράθυρό του — μια καλή στάση για καφέ.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν προχωρήσετε παραλιακά, σε περίπου 16 λεπτά θα φτάσετε στο κάστρο <strong>Vyšehrad</strong>, «το δεύτερο κάστρο της Πράγας». Χτίστηκε τον 10ο αιώνα σε έναν λόφο πάνω από τον ποταμό Μολδάβα, και μέσα στον χώρο του βρίσκεται η Εκκλησία του Αγίου Παύλου και του Αγίου Πέτρου, καθώς και το Νεκροταφείο του Βίσεχραντ, που περιέχει τα λείψανα πολλών διάσημων προσώπων της τσεχικής ιστορίας. Οι κήποι, τα πάρκα και τα τείχη του φρουρίου είναι δωρεάν — η είσοδος στην εκκλησία και στις «Casemates» (κατακόμβες) κοστίζει περίπου 130 CZK το καθένα. Είναι μια πολύ ωραία επιλογή αν έχει καλό καιρό, καθώς έχει πολύ λιγότερο κόσμο σε σχέση με τα υπόλοιπα αξιοθέατα.
                    </p>

                    <PhotoFull src="/images/prague/prague-vysehrad.jpg" alt="Το κάστρο Vyšehrad στην Πράγα" />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν έχει καλό καιρό, για να απολαύσετε το ηλιοβασίλεμα προτείνουμε δύο διαφορετικές επιλογές. Η μια, λιγότερο τουριστική, είναι να πάτε στον λόφο <strong>Riegrovy Sady</strong> για τη θέα. Εναλλακτικά, μπορείτε να νοικιάσετε μια βάρκα στον ποταμό και να κάνετε βόλτα την golden hour, ή να κατεβείτε στα νησάκια του ποταμού — πηγαίνετε στη γέφυρα <strong>Legion Bridge</strong> και από εκεί θα βρείτε τις σκάλες για να κατεβείτε στο νησάκι Střelecký ostrov.
                    </p>
                </div>

                {/* Επιπλέον Δραστηριότητες */}
                <div id="epipleon" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Επιπλέον Δραστηριότητες στην Πράγα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν έχετε περισσότερες ημέρες στην Πράγα, μπορείτε να δείτε και τα παρακάτω μέρη που δεν χώρεσαν στο πρόγραμμά μας:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Petrin Tower:</strong> Ένας μικρός πύργος του Άιφελ. Βρίσκεται στον λόφο Petřín και μπορείτε να ανεβείτε για να δείτε τη θέα.</li>
                        <li><strong>Strahov Library – Strahov Monastery:</strong> Λίγο πιο πίσω από τον πύργο Petřín βρίσκεται το μοναστήρι Strahov, με το πιο διάσημο αξιοθέατό του, την εντυπωσιακή βιβλιοθήκη — δεν μπορείτε όμως να μπείτε μέσα, μόνο να τη δείτε από την πόρτα.</li>
                        <li><strong>Žižkov Television Tower:</strong> Ακόμα ένας πύργος για θέα από ψηλά, ύψους 216 μέτρων, σε επιβλητικό μεταμοντέρνο στυλ με τα διάσημα γιγάντια αγαλμάτα μωρών που ανεβαίνουν στις πλευρές του, έργο του David Černý.</li>
                        <li><strong>Grébovka (Havlíčkovy sady):</strong> Ένα πάρκο με ιταλικό αναγεννησιακό στιλ στο κέντρο του, με λίμνη, σιντριβάνι, αγάλματα και μια γοητευτική τεχνητή σπηλιά.</li>
                        <li>Μουσείο David Černý</li>
                        <li>Μουσείο Franz Kafka</li>
                        <li>Εθνικό Μουσείο της Πράγας</li>
                    </ul>
                    <p className="text-[#2E2E2F] mt-4 mb-4 text-justify">
                        Αν έχετε περισσότερες ημέρες στην Πράγα θα μπορούσατε να επισκεφτείτε τις παρακάτω πόλεις ως μονοήμερη εκδρομή:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Český Krumlov:</strong> Περιτριγυρισμένο από βουνά και το ποτάμι του, το Český Krumlov είναι η δεύτερη πιο δημοφιλής πόλη της Τσεχίας. Το εκπληκτικό κάστρο της είναι δεύτερο μόνο μετά το Κάστρο της Πράγας από άποψη επιβλητικότητας, και η πόλη είναι αρκετά μικρή ώστε να τη δείτε εύκολα σε μια μέρα.</li>
                        <li><strong>Karlovy Vary:</strong> Ονομασμένη από τον Κάρολο Δ&apos;, η πιο πολυσύχναστη λουτρόπολη της Τσεχίας ιδρύθηκε το 1370. Σήμερα υπάρχουν 12 θερμές μεταλλικές πηγές — η πιο γνωστή είναι η Vřídlo, που φτάνει τα 12 μέτρα.</li>
                        <li><strong>Kutná Hora:</strong> Σε κοντινή απόσταση, περίπου 1 ώρα, βρίσκεται αυτή η μικρή Βοημική πόλη με ένα συναρπαστικό παρεκκλήσι χτισμένο από οστά — το Οστεοφυλάκιο της Εκκλησίας των Αγίων Πάντων, με διακόσμηση φτιαγμένη από έναν ντόπιο ξυλογλύπτη χρησιμοποιώντας τα οστά 40.000 ανθρώπων.</li>
                    </ul>
                    <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-tour-ids="76420,1292358,1400596"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/prague-l10/">GetYourGuide</a></span></div>
                </div>

                {/* Χριστούγεννα */}
                <div id="christougenna" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Χριστούγεννα στην Πράγα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ο Δεκέμβριος είναι ο πιο ατμοσφαιρικός μήνας της Πράγας. Οι κύριες αγορές στην Πλατεία της Παλιάς Πόλης και στην Πλατεία Βέντσεσλας λειτουργούν από τα τέλη Νοεμβρίου έως τις αρχές Ιανουαρίου. Ξύλινοι πάγκοι πουλάνε χειροποίητα στολίδια, τσέχικα κρύσταλλα, ξύλινα παιχνίδια, κεριά και παραδοσιακά χειροτεχνήματα, ενώ οι πάγκοι με φαγητό σερβίρουν svařák (ζεστό κρασί), medovina (μελόμελο), trdelník, ψητά κάστανα, ψητά λουκάνικα και pražská šunka (ζαμπόν ψημένο στη σούβλα).
                    </p>
                </div>

                {/* Φαγητό */}
                <div id="fagito" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Φαγητό στην Πράγα
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Καφέ &amp; Bar</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li>(A)void cafe</li>
                                <li>The Miners Coffee Old Town</li>
                                <li>Coffee Cube</li>
                                <li>Coffee Room Celetná</li>
                                <li>Alma Café</li>
                                <li>Café Club Míšeňská</li>
                                <li>Cafe Letka</li>
                                <li>Pilot Cafe Letná</li>
                                <li>Muna Myslíkova</li>
                                <li>Scout Institute</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Αρτοποιείο &amp; Γλυκό</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li><strong>Arte Bianca Bakery &amp; Caffè</strong></li>
                                <li><strong>Artic Bakehouse</strong></li>
                                <li><strong>55 Bakery</strong></li>
                                <li><strong>Knedlín:</strong> Τσέχικα dumplings, γλυκά και αλμυρά</li>
                                <li><strong>Taiyaki Bar</strong></li>
                                <li><strong>Gingerbread Man</strong></li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Εστιατόρια</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li><strong>Havelská Koruna</strong></li>
                                <li><strong>Kantýna</strong></li>
                                <li><strong>Bredovský Dvůr:</strong> Πολύ καλό φαγητό με καλές τιμές</li>
                                <li><strong>U Glaubiců:</strong> Παραδοσιακή τσέχικη κουζίνα</li>
                                <li><strong>Mr. HotDoG</strong></li>
                                <li><strong>FAT CAT Old Town</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Πόσο κοστίζει */}
                <div id="kostos" className="mt-8 pt-10 border-t border-gray-200 mb-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Πόσο Κοστίζει το Ταξίδι στην Πράγα
                    </h2>
                    <TripCosts items={pragueTripCosts} />
                </div>
            </div>

            <RelatedDestinations currentSlug="prague" country="Τσεχία" />
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>
    )
}

export default Prague
