import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaCoins, FaPlane, FaBed, FaBus, FaGifts, FaUtensils, FaSun, FaMapMarkedAlt } from 'react-icons/fa';
import { VscRadioTower } from 'react-icons/vsc';
import { GiPassport } from 'react-icons/gi';
import { FaLanguage } from 'react-icons/fa6';
import SiteNavbar from '@/app/components/SiteNavbar';
import { PageFooter } from '@/app/components/Footer';
import RelatedDestinations from '@/app/components/RelatedDestinations';
import { QuickFacts } from '@/app/components/QuickFacts';
import { TripCosts } from '@/app/components/TripCosts';
import { PhotoPair } from '@/app/components/PhotoPair';
// import { PhotoFull } from '@/app/components/PhotoFull';
import { TableOfContents } from '@/app/components/TableOfContents';

export const metadata: Metadata = {
    title: "Μπρατισλάβα: Τι να Δεις και τι να Κάνεις σε Μία Ημέρα (Οδηγός 2026)",
    description: "Οδηγός για μονοήμερη εκδρομή στη Μπρατισλάβα από τη Βιέννη ή τη Βουδαπέστη: Παλιά Πόλη, το άγαλμα Τσούμιλ, το κάστρο, το UFO Tower και τα καλύτερα σημεία για φαγητό.",
    alternates: {
        canonical: '/destinations/bratislava',
    },
    openGraph: {
        title: 'Μπρατισλάβα: Ο απόλυτος οδηγός για μια μονοήμερη εκδρομή από τη Βιέννη',
        description: 'Παλιά Πόλη, το κάστρο της Μπρατισλάβας, το διάσημο άγαλμα Τσούμιλ και θέα από το UFO Tower πάνω από τον Δούναβη.',
        url: '/destinations/bratislava',
        type: 'article',
        images: [
            {
                url: '/hero/bratislava-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Μπρατισλάβα: Ταξιδιωτικός Οδηγός 2026',
            },
        ],
    },
}

const bratislavaQuickFacts = [
    {
        icon: <FaCoins className="w-5 h-5" />,
        label: 'Νόμισμα',
        value: 'Το νόμισμα που χρησιμοποιούν είναι το ευρώ.',
    },
    {
        icon: <VscRadioTower className="w-5 h-5" />,
        label: 'Roaming',
        value: 'Η Σλοβακία ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας.',
    },
    {
        icon: <GiPassport className="w-5 h-5" />,
        label: 'Έγγραφα',
        value: 'Ταυτότητα ή διαβατήριο.',
    },
    {
        icon: <FaLanguage className="w-5 h-5" />,
        label: 'Γλώσσα',
        value: 'Μιλάνε Σλοβακικά, αλλά στα τουριστικά μέρη θα βρείτε αρκετούς που μιλάνε Αγγλικά.',
    },
];

const bratislavaTocItems = [
    { icon: <FaPlane className="w-5 h-5" />, label: 'Μεταφορά προς τη Μπρατισλάβα', targetId: 'metafora' },
    { icon: <FaBed className="w-5 h-5" />, label: 'Πού να Μείνεις', targetId: 'pou-na-mineis' },
    { icon: <FaBus className="w-5 h-5" />, label: 'Μετακινήσεις', targetId: 'metakiniseis' },
    { icon: <FaSun className="w-5 h-5" />, label: 'Πότε να Επισκεφτείτε', targetId: 'pote' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: 'Το Πρόγραμμά μας', targetId: 'programma' },
    { icon: <FaGifts className="w-5 h-5" />, label: 'Χριστούγεννα στη Μπρατισλάβα', targetId: 'christougenna' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Φαγητό', targetId: 'fagito' },
    { icon: <FaCoins className="w-5 h-5" />, label: 'Πόσο Κοστίζει', targetId: 'kostos' },
];

const bratislavaTripCosts = [
    { icon: <FaPlane className="w-5 h-5" />, label: 'Αεροπορικά', range: '120€ – 300€' },
    { icon: <FaBed className="w-5 h-5" />, label: 'Ξενοδοχεία', range: '50€ – 120€' },
    { icon: <FaBus className="w-5 h-5" />, label: 'Μεταφορές', range: '10€ – 20€' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: 'Δραστηριότητες', range: '20€ – 50€' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Φαγητό', range: '25€ – 50€' },
];

function Bratislava() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Προορισμοί', item: 'https://travelmpomps.gr/destinations' },
            { '@type': 'ListItem', position: 3, name: 'Μπρατισλάβα', item: 'https://travelmpomps.gr/destinations/bratislava' },
        ],
    };

    return (
        <div className="min-h-screen">
            <Script
                id="json-ld-breadcrumb-bratislava"
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
                    src="/hero/bratislava-hero.jpg"
                    alt="Ταξιδιωτικός οδηγός για τη Μπρατισλάβα"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="font-display text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Μπρατισλάβα: Τι να Κάνεις και Τι να Δεις
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Ας είμαστε ειλικρινείς: την Μπρατισλάβα οι περισσότεροι τη συνδυάζουν με ένα ταξίδι στη <Link href="/destinations/vienna" className="text-blue-600 underline">Βιέννη</Link> (1 ώρα) ή στη <Link href="/destinations/budapest" className="text-blue-600 underline">Βουδαπέστη</Link> (2 ώρες). Έτσι κι εμείς δεν αποτελούμε εξαίρεση — κατά το ταξίδι μας στη Βιέννη επιλέξαμε να κάνουμε μια μονοήμερη εκδρομή στην πρωτεύουσα της Σλοβακίας, τη Μπρατισλάβα. Επειδή είναι αρκετά μικρή πόλη και δεν έχει πολλά αξιοθέατα, είναι πολύ εύκολο να τα δείτε όλα μέσα σε μια ημέρα. Εναλλακτικά, κάποιος θα μπορούσε να μείνει εκεί ένα βράδυ για να έχει περισσότερο χρόνο και να απολαύσει την πόλη.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η Μπρατισλάβα (πληθυσμός περίπου 430.000), πρωτεύουσα της Σλοβακίας, είναι χτισμένη στον ποταμό Δούναβη, στο σημείο όπου συναντώνται η Αυστρία και η Ουγγαρία. Είναι ένα μέρος όπου η σοβιετική αρχιτεκτονική του μπρουταλισμού ορθώνεται ακριβώς απέναντι από μια υπέροχα αναπαλαιωμένη μεσαιωνική Παλιά Πόλη.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Είναι μια πρωτεύουσα όπου μπορείτε να την περπατήσετε από την Παλιά Πόλη μέχρι το κάστρο στην κορυφή του λόφου το πρωί, και στη συνέχεια να απολαύσετε μια χορταστική μερίδα halušky (τοπικά παραδοσιακά ζυμαρικά πατάτας).
                </p>

                <TableOfContents items={bratislavaTocItems} />

                <div className="my-8">
                    <QuickFacts items={bratislavaQuickFacts} />
                </div>

                {/* 1. Μεταφορά */}
                <div id="metafora" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά προς τη Μπρατισλάβα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για να φτάσετε στο κέντρο της πόλης από το αεροδρόμιο της Μπρατισλάβας, μπορείτε να πάρετε το λεωφορείο 61. Συνδέει απευθείας το αεροδρόμιο με τον Κεντρικό Σιδηροδρομικό Σταθμό της Μπρατισλάβα (Hlavná stanica). Τα εισιτήρια κοστίζουν περίπου 2€ και μπορούν να αγοραστούν είτε από τα κίτρινα μηχανήματα έκδοσης εισιτηρίων, είτε μέσα στο λεωφορείο με χρήση κάρτας ανέπαφων συναλλαγών.
                    </p>
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        Από τον σιδηροδρομικό σταθμό
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η Μπρατισλάβα έχει δύο σταθμούς τρένων.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li>
                            <strong>Κεντρικός Σιδηροδρομικός Σταθμός (Hlavná stanica):</strong> Αν έχετε φτάσει εδώ από το αεροδρόμιο, από κάποια άλλη πόλη ή με τρένο, μπορείτε να πάρετε το τραμ, λεωφορείο, ή ακόμα και να περπατήσετε για να φτάσετε στο κέντρο της πόλης.
                        </li>
                        <li>
                            <strong>Bratislava-Petržalka:</strong> Ο δεύτερος σταθμός, κοντά στην πόλη. Αν πηγαίνετε μονοήμερη από τη <Link href="/destinations/vienna" className="text-blue-600 underline">Βιέννη</Link> στη Μπρατισλάβα, μπορείτε να πάρετε το Bratislava Ticket από την εταιρεία ÖBB. Αυτό θα σας αφήσει σε αυτόν τον σταθμό, όπου θα πρέπει να πάρετε το λεωφορείο 93 για να φτάσετε στο κέντρο. Με αυτό το εισιτήριο δεν θα χρειαστεί να βγάλετε κάποιο επιπλέον, αφού οι μετακινήσεις σας καλύπτονται ήδη από το εισιτήριο του τρένου. Το κόστος για τη μεταφορά πήγαινε-έλα είναι 19€, και μπορείτε να κλείσετε το εισιτήριό σας απευθείας από τα μηχανήματα της ÖBB.
                        </li>
                    </ul>
                </div>

                {/* 2. Που να μείνεις */}
                <div id="pou-na-mineis" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Πού να Μείνεις στη Μπρατισλάβα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν αναζητάτε κατάλυμα στη Μπρατισλάβα, η διαδικασία είναι απλή. Η πόλη είναι μικρή και εύκολη στην περιήγηση, οπότε δύσκολα θα κάνετε λάθος επιλογή αν διαλέξετε κάτι κοντά στην Παλιά Πόλη.
                    </p>
                </div>

                {/* 3. Μετακινήσεις */}
                <div id="metakiniseis" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Μετακινήσεις στη Μπρατισλάβα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η πόλη δεν διαθέτει μετρό, όμως έχει ένα αρκετά καλό δίκτυο τραμ και λεωφορείων. Η αλήθεια είναι ότι, πέρα από τη μετακίνηση από και προς τον σταθμό των τρένων, δεν χρειαστήκαμε να πάρουμε το λεωφορείο για κάποιο άλλο λόγο — όλες οι υπόλοιπες μετακινήσεις μας έγιναν με τα πόδια.
                    </p>
                </div>

                {/* 4. Πότε να επισκεφτείτε */}
                <div id="pote" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Πότε να Επισκεφτείτε τη Μπρατισλάβα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η δική μας επίσκεψη έγινε τον Απρίλιο — δυστυχώς είχε βροχή εκείνη τη μέρα και δεν μας άφησε να απολαύσουμε πλήρως την πόλη. Αντίστοιχα με τις υπόλοιπες χώρες της κεντρικής Ευρώπης, από τον Απρίλιο μέχρι τον Ιούνιο είναι η καλύτερη περίοδος, αφού ο καιρός είναι αρκετά καλός και η μέρα πολύ μεγαλύτερη.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Επίσης πολύ όμορφη περίοδος είναι τα Χριστούγεννα, αφού η πόλη φοράει τα γιορτινά της και θα βρείτε μια χριστουγεννιάτικη αγορά στο κέντρο της Παλιάς Πόλης.
                    </p>
                    <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-q="bratislava"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/bratislava-l765/">GetYourGuide</a></span></div>
                </div>

                {/* 5. Πρόγραμμα */}
                <div id="programma" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        5. Το Πρόγραμμά μας
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Σε αντίθεση με τους υπόλοιπους <Link href="/destinations" className="text-blue-600 underline">οδηγούς</Link>, όπου έχουμε χωρίσει τα αξιοθέατα σε ημέρες, εδώ θα σας δείξουμε το δικό μας πρόγραμμα μαζί με κάποια επιπλέον αξιοθέατα που εμείς δεν προλάβαμε να δούμε στην εκδρομή μας.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify italic">
                        💡 Μπορείτε να ξεκινήσετε τη διαδρομή από πάνω προς τα κάτω ή αντίστροφα, ανάλογα με τον σταθμό από τον οποίο θα ξεκινήσετε, ώστε να μην κάνετε κύκλους.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ξεκινήσαμε πολύ πρωί από τη <Link href="/destinations/vienna" className="text-blue-600 underline">Βιέννη</Link>, όπου πρέπει πρώτα να πάτε στο Vienna Hauptbahnhof, ώστε να πάρετε το τρένο για τη Μπρατισλάβα.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ξεκινώντας την περιήγηση από το <strong>Building of Slovak Radio</strong>, ένα από τα πιο ιδιαίτερα κτήρια της Ευρώπης. Η ανεστραμμένη πυραμίδα, κατασκευασμένη στο ύφος του σοσιαλιστικού ρεαλισμού, θεωρείται ένα από τα πιο άσχημα κτίρια στον κόσμο, μαζί με την Εθνική Βιβλιοθήκη του Κοσσυφοπεδίου στην Πρίστινα. Το παράξενο σχήμα του δεν επιλέχθηκε μόνο για αισθητικούς λόγους, αλλά και για πρακτικούς — τα στούντιο ηχογράφησης και ραδιοφωνικής μετάδοσης στο εσωτερικό του κτιρίου είναι πλήρως απομονωμένοι ακουστικοί θάλαμοι, που προστατεύουν από τις δονήσεις και τους θορύβους της πόλης.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/bratislava/bratislava-slovak-radio.jpg', alt: 'Το κτήριο του Slovak Radio στη Μπρατισλάβα' }}
                        right={{ src: '/images/bratislava/bratislava-garden.jpeg', alt: 'Η Fontana Druzby στην πλατεία Namestie Slobody' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Σε κοντινή απόσταση υπάρχει η πλατεία της Ελευθερίας, η <strong>Namestie Slobody</strong>, όπου θα δείτε το μεγαλύτερο σιντριβάνι της χώρας, τη <strong>Fontana Druzby</strong>. Στο κέντρο της υψώνεται ένα τεράστιο γλυπτό από ανοξείδωτο ατσάλι, βάρους 12 τόνων — το σχήμα του αναπαριστά ένα μισάνοιχτο άνθος φλαμουριάς, το παραδοσιακό σύμβολο όλων των σλαβικών λαών.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η συγκεκριμένη πλατεία βρίσκεται λίγο πιο δίπλα από το <strong>Προεδρικό Μέγαρο</strong> και τους κήπους του. Κάθε καθημερινή στις 12:00 το μεσημέρι πραγματοποιείται η επίσημη τελετή αλλαγής της φρουράς, την οποία μπορείτε να παρακολουθήσετε δωρεάν. Πίσω από το παλάτι βρίσκεται ένας εντυπωσιακός γαλλικός κήπος, γνωστός και ως «Σοκάκι των Προέδρων» (Aleja prezidentov) — παράδοση θέλει οι ξένοι αρχηγοί κρατών που επισκέπτονται επίσημα τη Σλοβακία να φυτεύουν εκεί από μια μικρή βελανιδιά. Ακριβώς μπροστά από την κεντρική πύλη του μεγάρου, στην πλατεία Hodžovo, βρίσκεται ένα εμβληματικό σύγχρονο σιντριβάνι σε σχήμα πλανήτη Γη, το Fontána Zem.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Πριν μπείτε στην Παλιά Πόλη, μπορείτε να περάσετε από δύο εκκλησίες, το <strong>Old Cathedral of Saint John of Matha</strong> και τη <strong>Church of St. Stephan</strong>.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Συνεχίζοντας, μπαίνουμε στο ιστορικό κέντρο από την <strong>Michael&apos;s Gate</strong>, ουσιαστικά την είσοδο της Παλιάς Πόλης. Ήταν μία από τις τέσσερις πύλες της αρχικής μεσαιωνικής οχύρωσης της πόλης. Λέγεται ότι οι φοιτητές που περνούν από κάτω δεν πρέπει να μιλήσουν καθώς διασχίζουν την αψίδα της πύλης κατά την περίοδο των εξετάσεων — αν μιλήσουν, θα κοπούν σίγουρα σε όλα τα μαθήματα.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ακριβώς κάτω από την πύλη, ενσωματωμένος στο πλακόστρωτο, υπάρχει ένας μπρούτζινος δίσκος, το <strong>Σημείο Μηδέν</strong> της Μπρατισλάβας. Δείχνει τις ακριβείς χιλιομετρικές αποστάσεις από τη σλοβακική πρωτεύουσα προς 29 άλλες μεγάλες πόλεις του κόσμου, όπως η Αθήνα, η Νέα Υόρκη και το Τόκιο.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Λίγα μέτρα παρακάτω θα βρεθείτε στην πλατεία <strong>Hlavne Namestie</strong> (κεντρική πλατεία). Στο κέντρο της βρίσκεται το παλαιότερο σιντριβάνι της πόλης, το Σιντριβάνι του Μαξιμιλιανού. Στην κορυφή του βρίσκεται το άγαλμα ενός ιππότη και, σύμφωνα με τον μύθο, τα μεσάνυχτα της Παραμονής της Πρωτοχρονιάς το άγαλμα ζωντανεύει, γυρίζει και υποκλίνεται προς το Παλιό Δημαρχείο.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/bratislava/bratislava-hlavne-namestie.jpg', alt: 'Η κεντρική πλατεία Hlavne Namestie στη Μπρατισλάβα' }}
                        right={{ src: '/images/bratislava/bratislava-cumil.jpeg', alt: 'Το άγαλμα του Κουμίλ της Μπρατισλάβας' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το <strong>Stará radnica</strong> (Παλιό Δημαρχείο) είναι το παλαιότερο δημαρχείο στη Σλοβακία και στεγάζει πλέον το Μουσείο Ιστορίας της Πόλης — μπορείτε να μπείτε με εισιτήριο 8€. Αν το παρατηρήσετε απ&apos; έξω, το κτίριο μοιάζει κάπως «ασύμμετρο», κι αυτό γιατί δεν χτίστηκε με τη μία: ξεκίνησε τον 14ο αιώνα ως το ιδιωτικό πέτρινο σπίτι του Δημάρχου και με τα χρόνια η πόλη αγόραζε τα διπλανά σπίτια και τα ένωνε. Είναι κυριολεκτικά ένα αρχιτεκτονικό «κολάζ» από γοτθικά, αναγεννησιακά και μπαρόκ στοιχεία.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Λίγα μέτρα πιο κάτω, με κατεύθυνση προς το Εθνικό Θέατρο, θα βρείτε το άγαλμα του <strong>Schöner Náci</strong>. Τιμά έναν πραγματικό, απλό άνθρωπο της πόλης — θα δείτε πολλούς να βγάζουν φωτογραφίες κάτω από το καπέλο του.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το επόμενο στη λίστα μας είναι ίσως το διασημότερο άγαλμα της Μπρατισλάβας, ο <strong>Τσούμιλ</strong> (Man at Work). Τοποθετήθηκε το 1997 σε μια προσπάθεια να ζωντανέψει το ιστορικό κέντρο μετά την πτώση του κομμουνισμού.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Άλλο ένα κτήριο που μπορείτε να δείτε εξωτερικά είναι το <strong>Slovak National Theatre</strong>, η σλοβακική εκδοχή της Όπερας.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Σε απόσταση περίπου 10 λεπτών με τα πόδια θα βρείτε ένα χαρακτηριστικό αξιοθέατο, τη <strong>μπλε εκκλησία</strong>, το πιο εντυπωσιακό δείγμα Art Nouveau αρχιτεκτονικής στη Μπρατισλάβα. Τα πάντα εδώ είναι μπλε — η πρόσοψη, τα ψηφιδωτά, η στέγη, αλλά και ολόκληρο το εσωτερικό της, βαμμένα σε έντονες παστέλ γαλάζιες αποχρώσεις. Η εκκλησία είναι αφιερωμένη στην Αγία Ελισάβετ της Ουγγαρίας, η οποία λέγεται πως γεννήθηκε στο Κάστρο της Μπρατισλάβας το 1207.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/bratislava/bratislava-blue-church.jpg', alt: 'Η κεντρική πλατεία Hlavne Namestie στη Μπρατισλάβα' }}
                        right={{ src: '/images/bratislava/bratislava-michaels-gate.jpg', alt: 'Η πύλη Michael&apos;s Gate της Μπρατισλάβας' }}
                    />
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Προαιρετικά, μόλις 6 λεπτά μακριά βρίσκεται ένα εμπορικό κέντρο, το <strong>Eurovea</strong>, στεγασμένο σε ένα σύγχρονο εντυπωσιακό κτήριο, με πολλά καταστήματα ανάμεσά τους και το Primark.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Επιστρέφοντας στην Παλιά Πόλη, πριν αρχίσετε να ανεβαίνετε στο κάστρο, μπορείτε να περάσετε από το <strong>St. Martin&apos;s Cathedral</strong>, μια όμορφη γοτθική ρωμαιοκαθολική εκκλησία.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το βασικότερο αξιοθέατο της Μπρατισλάβας δεν είναι άλλο από το <strong>κάστρο</strong> της. Η είσοδος κοστίζει 14€, όμως μπορείτε να ανεβείτε μέχρι πάνω, να δείτε τη θέα και να θαυμάσετε το εξωτερικό και τους κήπους του εντελώς δωρεάν — είναι μάλιστα μια βόλτα που είδαμε να κάνουν και αρκετοί ντόπιοι.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/bratislava/bratislava-castle.jpg', alt: 'Το κάστρο της Μπρατισλάβας με θέα στον Δούναβη' }}
                        right={{ src: '/images/bratislava/bratislava-castle2.jpeg', alt: 'Το εσωτερικό του κάστρου της Μπρατισλάβας' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η περίοδος ακμής του κάστρου ήταν τον 18ο αιώνα, όταν η Αυτοκράτειρα Μαρία Θηρεσία το μετέτρεψε σε μια πολυτελή, εκθαμβωτική μπαρόκ κατοικία. Στην κεντρική αυλή υπάρχει επίσης ένα πηγάδι, σκαμμένο σε βάθος 80 μέτρων, που βοηθούσε το κάστρο να αντέχει σε μακροχρόνιες πολιορκίες χωρίς να στερείται νερό. Η θέα στον Δούναβη από ψηλά είναι εξαιρετική και αξίζει σίγουρα την ανάβαση.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αφού κατεβείτε από το κάστρο, μπορείτε να διασχίσετε τη New Bridge, η οποία οδηγεί στο <strong>UFO Tower</strong>. Μοιάζει με έναν ιπτάμενο δίσκο καρφωμένο πάνω στη γέφυρα. Βρίσκεται σε ύψος 96 μέτρων και προσφέρει τρομερή θέα. Για να ανέβετε στο παρατηρητήριο, το εισιτήριο κοστίζει από 11,50€ έως 12,50€. Θα βρείτε επίσης εστιατόριο πάνω, κάτι σαν τον πύργο του ΟΤΕ στη Θεσσαλονίκη — όπως καταλαβαίνετε πρόκειται για ακριβό εστιατόριο, όμως αν έχετε κλείσει τραπέζι εκεί, δεν χρειάζεται να πληρώσετε ξανά για να ανέβετε στο παρατηρητήριο.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Με αυτό, ουσιαστικά έχετε ολοκληρώσει όλα τα βασικά αξιοθέατα της πόλης.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify italic">
                        💡 Αν έχετε περισσότερο χρόνο και θέλετε να δείτε κάτι ακόμα, μπορείτε να περάσετε από το <strong>Slavin</strong>, το μεγαλύτερο νεκροταφείο σοβιετικών στρατιωτών του Β&apos; Παγκοσμίου Πολέμου — δημιουργήθηκε για να τιμήσει τους νεκρούς του Κόκκινου Στρατού ενάντια στον ναζισμό.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για φαγητό έχουμε να προτείνουμε ένα εξαιρετικό εστιατόριο με πολύ καλές τιμές, το <strong>Divný Janko</strong>. Είναι πολύ ωραίος χώρος με πολύ καλή τοπική κουζίνα, και βρίσκεται ακριβώς πίσω από το Προεδρικό Μέγαρο.
                    </p>
                </div>

                {/* Χριστούγεννα */}
                <div id="christougenna" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Χριστούγεννα στη Μπρατισλάβα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Τα Χριστούγεννα η Μπρατισλάβα φοράει τα γιορτινά της και φωτίζεται όλη η πόλη. Μερικές επιπλέον δραστηριότητες που μπορείτε να κάνετε τότε:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Hlavné námestie:</strong> Στην κεντρική πλατεία θα βρείτε τη μεγαλύτερη χριστουγεννιάτικη αγορά της πόλης, γεμάτη με πάγκους που πουλάνε παραδοσιακά σλοβακικά προϊόντα.</li>
                        <li><strong>Hviezdoslavovo námestie:</strong> Στην πλατεία Χβιεζντοσλάβ υπάρχει μια μικρότερη αγορά, με λιγότερο κόσμο. Φιλοξενεί συχνά ένα υπαίθριο παγοδρόμιο κάτω από τα χριστουγεννιάτικα φώτα, δίπλα στο ιστορικό κτήριο του Εθνικού Θεάτρου της Σλοβακίας.</li>
                        <li><strong>Κάστρο της Μπρατισλάβας:</strong> Φωταγωγείται εντυπωσιακά και φιλοξενεί μια μικρότερη παραδοσιακή αγορά (συνήθως ανοιχτή μόνο τα Σαββατοκύριακα), με πανοραμική θέα στη χιονισμένη πόλη και τον Δούναβη.</li>
                    </ul>
                    <p className="text-[#2E2E2F] mt-4 text-justify">
                        Η κεντρική χριστουγεννιάτικη αγορά ανοίγει στις 26 Νοεμβρίου και κλείνει στις 3 Ιανουαρίου.
                    </p>

                    
                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="765" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>
                {/* Φαγητό */}
                <div id="fagito" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Φαγητό στη Μπρατισλάβα
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Coffee &amp; Bar</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li><strong>Edison Filmhub</strong></li>
                                <li><strong>Emil</strong></li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Γλυκό</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li><strong>Doris cookies</strong></li>
                                <li><strong>Subo bakery</strong></li>
                                <li><strong>Pán Cakes</strong></li>
                                <li><strong>Luculus Ice Saloon</strong></li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Εστιατόρια</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li><strong>Divný Janko</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Πόσο κοστίζει */}
                <div id="kostos" className="mt-8 pt-10 border-t border-gray-200 mb-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Πόσο Κοστίζει το Ταξίδι στη Μπρατισλάβα
                    </h2>
                    <TripCosts items={bratislavaTripCosts} />
                </div>
            </div>

            <RelatedDestinations currentSlug="bratislava" country="Σλοβακία" />
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>
    )
}

export default Bratislava
