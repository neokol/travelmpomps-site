import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { FaCoins, FaPlane, FaBed, FaBus, FaTicketAlt, FaUtensils, FaSun, FaMapMarkedAlt, FaLandmark } from 'react-icons/fa';
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
    title: "Βερόνα: Τι να Δεις και τι να Κάνεις σε 2 Ημέρες (Οδηγός 2026)",
    description: "Οδηγός 2 ημερών για τη Βερόνα: Αρένα ντι Βερόνα, το σπίτι της Ιουλιέτας, Ponte Pietra, Castel San Pietro και τα καλύτερα σημεία για φαγητό στην πόλη του Ρωμαίου και της Ιουλιέτας.",
    alternates: {
        canonical: '/destinations/verona',
    },
    openGraph: {
        title: 'Βερόνα: Ο απόλυτος οδηγός για 2 ημέρες στην πόλη του Ρωμαίου και της Ιουλιέτας',
        description: 'Αρένα ντι Βερόνα, το σπίτι της Ιουλιέτας, γέφυρες πάνω στον Adige και το φημισμένο ηλιοβασίλεμα από το Castel San Pietro.',
        url: '/destinations/verona',
        type: 'article',
        images: [
            {
                url: '/hero/verona-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Βερόνα: Ταξιδιωτικός Οδηγός 2026',
            },
        ],
    },
}

const veronaQuickFacts = [
    {
        icon: <FaCoins className="w-5 h-5" />,
        label: 'Νόμισμα',
        value: 'Το νόμισμα που χρησιμοποιούν είναι το ευρώ.',
    },
    {
        icon: <VscRadioTower className="w-5 h-5" />,
        label: 'Roaming',
        value: 'Η Ιταλία ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας.',
    },
    {
        icon: <GiPassport className="w-5 h-5" />,
        label: 'Έγγραφα',
        value: 'Ταυτότητα ή διαβατήριο.',
    },
    {
        icon: <FaLanguage className="w-5 h-5" />,
        label: 'Γλώσσα',
        value: 'Φυσικά μιλάνε Ιταλικά, αλλά στα τουριστικά μέρη θα βρείτε αρκετούς που μιλάνε Αγγλικά.',
    },
];

const veronaTocItems = [
    { icon: <FaPlane className="w-5 h-5" />, label: 'Μεταφορά προς τη Βερόνα', targetId: 'metafora' },
    { icon: <FaBed className="w-5 h-5" />, label: 'Πού να Μείνεις', targetId: 'pou-na-mineis' },
    { icon: <FaBus className="w-5 h-5" />, label: 'Μετακινήσεις', targetId: 'metakiniseis' },
    { icon: <FaSun className="w-5 h-5" />, label: 'Πότε να Επισκεφτείτε', targetId: 'pote' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: '1η Ημέρα', targetId: 'imera-1' },
    { icon: <FaMapMarkedAlt className="w-5 h-5" />, label: '2η Ημέρα', targetId: 'imera-2' },
    { icon: <FaLandmark className="w-5 h-5" />, label: 'Επιπλέον Δραστηριότητες', targetId: 'epipleon' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Φαγητό', targetId: 'fagito' },
    { icon: <FaCoins className="w-5 h-5" />, label: 'Πόσο Κοστίζει', targetId: 'kostos' },
];

const veronaTripCosts = [
    { icon: <FaPlane className="w-5 h-5" />, label: 'Αεροπορικά', range: '150€ – 300€' },
    { icon: <FaBed className="w-5 h-5" />, label: 'Ξενοδοχεία', range: '80€ – 120€' },
    { icon: <FaBus className="w-5 h-5" />, label: 'Μεταφορές', range: '10€ – 20€' },
    { icon: <FaTicketAlt className="w-5 h-5" />, label: 'Δραστηριότητες', range: '20€ – 50€' },
    { icon: <FaUtensils className="w-5 h-5" />, label: 'Φαγητό', range: '35€ – 60€' },
];

function Verona() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Προορισμοί', item: 'https://travelmpomps.gr/destinations' },
            { '@type': 'ListItem', position: 3, name: 'Βερόνα', item: 'https://travelmpomps.gr/destinations/verona' },
        ],
    };

    return (
        <div className="min-h-screen">
            <Script
                id="json-ld-breadcrumb-verona"
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
                    src="/hero/verona-hero.jpg"
                    alt="Ταξιδιωτικός οδηγός για τη Βερόνα"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="font-display text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Βερόνα: Τι να Κάνεις και Τι να Δεις σε 2 Ημέρες
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η Βερόνα είναι μια από εκείνες τις πόλεις που σε εκπλήσσουν — ούτε πολύ μεγάλη, ούτε πολύ τουριστική, και ξεχειλίζει από γοητεία. Βρίσκεται ακριβώς στο κέντρο της περιοχής του Βένετο, περιτριγυρισμένη από μερικά από τα πιο όμορφα μέρη της βόρειας Ιταλίας.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Μέσα σε λίγες ώρες έγινε η αγαπημένη μας ιταλική πόλη. Η Βερόνα ήταν η δεύτερη πόλη που επισκεφτήκαμε στο ταξίδι μας στη Βόρεια Ιταλία, μετά το <Link href="/destinations/milan" className="text-blue-600 underline">Μιλάνο</Link>.
                </p>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Επειδή είναι πολύ μικρή πόλη, είναι εύκολο να την εξερευνήσετε και σε μία ημέρα — εμείς επιλέξαμε να μείνουμε ένα βράδυ και να φύγουμε την επόμενη για τον επόμενο μας προορισμό, τη <Link href="/destinations/venice" className="text-blue-600 underline">Βενετία</Link>. Η Βερόνα έχει άλλωστε το μεγάλο πλεονέκτημα ότι βρίσκεται πολύ κοντά και στη Λίμνη Γκάρντα και στη Βενετία, οπότε μπορείτε εύκολα να συνδυάσετε και τα δύο.
                </p>

                <TableOfContents items={veronaTocItems} />

                <div className="my-8">
                    <QuickFacts items={veronaQuickFacts} />
                </div>

                {/* 1. Μεταφορά */}
                <div id="metafora" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά προς τη Βερόνα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Δεν χρειάστηκε να μεταφερθούμε καθόλου από το αεροδρόμιο της Βερόνα στο κέντρο, καθώς η μετάβασή μας από το Μιλάνο έγινε με τρένο.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν όμως φτάσετε από το αεροδρόμιο, θα χρειαστεί να πάρετε το <strong>Aerobus 199</strong>, που σας μεταφέρει απευθείας στον σταθμό <strong>Porta Nuova</strong> της Βερόνα. Μπορείτε να αγοράσετε το εισιτήριο είτε στα αυτόματα μηχανήματα εντός του αεροδρομίου είτε μέσα στο λεωφορείο, ρωτώντας τον οδηγό. Το κόστος είναι €7. Το λεωφορείο αναχωρεί κάθε 20 λεπτά και η διαδρομή διαρκεί περίπου δεκαπέντε λεπτά — τα πρώτα δρομολόγια ξεκινούν στις 5:35, 6:30 και 6:50 το πρωί, ενώ το τελευταίο είναι γύρω στις 23:00.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify italic">
                        💡 Ο πιο οικονομικός τρόπος είναι να πετάξετε προς τη <Link href="/destinations/venice" className="text-blue-600 underline">Βενετία</Link>, που εξυπηρετείται από low-cost εταιρείες, και από εκεί να πάρετε το τρένο για τη Βερόνα — η διαδρομή διαρκεί περίπου 1 ώρα.
                    </p>
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        Από τον σιδηροδρομικό σταθμό
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για να φτάσετε στο κέντρο της πόλης από τον σταθμό έχετε δύο επιλογές: να περπατήσετε 15-20 λεπτά ή να πάρετε ένα από τα πολλά λεωφορεία που θα σας μεταφέρουν στην Αρένα ή στο Καστελβέκιο. Γραμμές: 11, 12, 51, 52 και 21, 22, 23, 24, 31, 32, 33, 41, 61, 62, 91, 93, 94, 95.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Επειδή είχε πολύ καλό καιρό, εμείς επιλέξαμε να περπατήσουμε μέχρι το κέντρο — έχει ελαφριά κατηφόρα, οπότε ήταν μια αρκετά εύκολη διαδρομή.
                    </p>
                </div>

                {/* 2. Που να μείνεις */}
                <div id="pou-na-mineis" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Πού να Μείνεις στη Βερόνα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν επιλέξετε να μείνετε ένα βράδυ στη Βερόνα, το κέντρο είναι μονόδρομος. Η πόλη είναι πολύ μικρή και περπατιέται πολύ εύκολα. Εμείς μείναμε σε ένα μικρό Airbnb ακριβώς απέναντι από τη γέφυρα Castelvecchio και δεν το μετανιώσαμε λεπτό.
                    </p>
                </div>

                {/* 3. Μετακινήσεις */}
                <div id="metakiniseis" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Μετακινήσεις στη Βερόνα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Εντός της παλιάς πόλης δεν χρειάζεται κάποιο μεταφορικό μέσο. Όλα τα αξιοθέατα βρίσκονται σε κοντινή απόσταση και μπορείτε να τα επισκεφτείτε όλα με τα πόδια.
                    </p>
                </div>

                {/* 4. Πότε να επισκεφτείτε */}
                <div id="pote" className="mt-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Πότε να Επισκεφτείτε τη Βερόνα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η Βερόνα έχει ζεστά καλοκαίρια και ήπιους χειμώνες, γεγονός που την καθιστά εξαιρετικό προορισμό οποιαδήποτε εποχή του χρόνου. Η πιο δημοφιλής περίοδος είναι οι καλοκαιρινοί μήνες, ειδικά όταν μπορείτε να παρακολουθήσετε μία από τις πολλές παραστάσεις όπερας στην Αρένα της Βερόνα — ωστόσο τότε θα είναι και πολύ ζεστά, με μεγάλες ουρές σε αρκετά αξιοθέατα και ακριβότερα ξενοδοχεία απ&apos; ό,τι σε άλλες εποχές.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Προσωπικά πιστεύουμε ότι η καλύτερη εποχή για να επισκεφτείτε τη Βερόνα είναι η άνοιξη και το φθινόπωρο, όταν οι θερμοκρασίες είναι πιο άνετες, οι τιμές των ξενοδοχείων πιο λογικές και ο κόσμος λιγότερος — κάτι που κάνει την εξερεύνηση της πόλης πολύ πιο ευχάριστη εμπειρία. Εμείς επισκεφτήκαμε την πόλη τον Απρίλιο και είχε εξαιρετικό καιρό.
                    </p>
                    <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="389" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>
                </div>

                {/* 5. Πρόγραμμα */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        5. Πρόγραμμα 2 Ημερών
                    </h2>
                </div>

                {/* Ημέρα 1 */}
                <div id="imera-1" className="mt-8 scroll-mt-24">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 1η Ημέρα
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η περιήγησή σας στο κέντρο πρέπει να ξεκινήσει από την κεντρική πλατεία, την <strong>Piazza Bra</strong>.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στην είσοδό της θα δείτε το <strong>Portoni della Bra</strong>, την ιστορική πύλη της Βερόνα που χρονολογείται από το 1257. Το κεντρικό χαρακτηριστικό της πύλης, το ρολόι, έχει μια πολύχρωμη ιστορία — βρήκε τη θέση του εκεί μετά από πολλές καθυστερήσεις το 1871, χάρη στη γενναιόδωρη δωρεά του Κόμη Αντόνιο Νογκαρόλα. Σήμερα οι επισκέπτες μπορούν να θαυμάσουν την ακρίβεια του ρολογιού, που βελτιώθηκε το 1879, και τη μεγαλοπρεπή παρουσία της καμπάνας Scaliger, που αντηχεί το πέρασμα του χρόνου από τον κοντινό Πύργο του Πενταγώνου.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η πλατεία φιλοξενεί επίσης πολλά άλλα ιστορικά κτίρια, όπως το <strong>Palazzo della Gran Guardia</strong>, το <strong>Palazzo Malfatti</strong>, το <strong>Palazzo Barbieri</strong>, καθώς και ένα άγαλμα του <strong>Vittorio Emanuele II</strong>. Υπάρχει επίσης ένας μικρός κήπος στο κέντρο, ιδανικό σημείο για να καθίσετε σε ένα παγκάκι και να παρακολουθήσετε τον κόσμο να περνάει.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Φυσικά, το στολίδι της πλατείας δεν είναι άλλο από την <strong>Arena di Verona</strong>. Μοιάζει πάρα πολύ στο Κολοσσαίο της <Link href="/destinations/rome" className="text-blue-600 underline">Ρώμης</Link>, όμως είναι πολύ καλύτερα διατηρημένη.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/verona/verona-piazza-bra.jpeg', alt: 'Η Piazza Bra και το Portoni della Bra στη Βερόνα' }}
                        right={{ src: '/images/verona/verona-arena.jpeg', alt: 'Η Arena di Verona, το ρωμαϊκό αμφιθέατρο της πόλης' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η επίσκεψη στην Αρένα της Βερόνα είναι σαν να μπαίνεις σε μια ζωντανή χρονοκάψουλα. Χτισμένο γύρω στο 30 μ.Χ., αυτό το ρωμαϊκό αμφιθέατρο χωρούσε κάποτε 30.000 θεατές και χρησιμοποιούνταν ως αρένα μονομαχιών. Είναι η καλύτερα διατηρημένη αρένα από την αρχαιότητα, επειδή κατά τον Μεσαίωνα, αντί να αποσυναρμολογηθεί όπως το Κολοσσαίο, συνέχισε να χρησιμοποιείται για δημόσιες εκδηλώσεις. Σήμερα εξακολουθεί να φιλοξενεί όπερες και συναυλίες, ως μια αδιάσπαστη κληρονομιά 2.000 ετών.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η είσοδος στην Αρένα κοστίζει €12 ή είναι δωρεάν με την <strong>Verona Card</strong>. Μπορείτε να αγοράσετε την Verona Card <a href="https://gyg.me/RI73A4ix" className="text-blue-600 underline">από εδώ</a>.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Προχωρώντας προς την παλιά πόλη, μπορείτε να πάτε στην <strong>Porta Borsari</strong>. Η Πόρτα Μπορσάρι είναι μια ακόμα εντυπωσιακή ρωμαϊκή πύλη, που χρονολογείται από τον 1ο αιώνα μ.Χ. Κάποτε ήταν η κύρια είσοδος της πόλης — διαθέτει μια όμορφα διατηρημένη πρόσοψη με κορινθιακούς κίονες και λατινικές επιγραφές.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Από εκεί μπορείτε να συνεχίσετε μέχρι τη γέφυρα <strong>Castelvecchio</strong>, μία από τις ομορφότερες γέφυρες της Ιταλίας. Χτισμένη τον 14ο αιώνα από τον Cangrande II della Scala, η γέφυρα σχεδιάστηκε ως οχυρωμένη διαδρομή διαφυγής από το φρούριο Castelvecchio. Σήμερα, αποκλειστικά για πεζούς, προσφέρει εκπληκτική θέα στον ποταμό Adige, με την έντονη κόκκινη τοιχοποιία της και τους εντυπωσιακούς πύργους της.
                    </p>

                    <PhotoFull src="/images/verona/verona-castelvecchio-bridge.jpg" alt="Η γέφυρα Castelvecchio πάνω στον ποταμό Adige στη Βερόνα" />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Περπατήστε τη γέφυρα και συνεχίστε απέναντι, παραλιακά, για καλύτερες φωτογραφίες με τη γέφυρα στο φόντο. Συνεχίζοντας στον παραλιακό δρόμο θα βρεθείτε στην <strong>Ponte della Vittoria</strong>, μια νεοκλασική γέφυρα με μοντερνιστικό σχεδιασμό. Χτισμένη για να τιμήσει τη νίκη της Ιταλίας στον Α&apos; Παγκόσμιο Πόλεμο, εκτείνεται κατά μήκος του ποταμού Adige με κομψές πέτρινες καμάρες και συμβολικά αγάλματα.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν προχωρήσετε στο εσωτερικό της περιοχής <strong>Borgo Trento</strong>, θα βρείτε ένα πολύ ωραίο μαγαζί με foccacia, το <strong>Cruncheria</strong>.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Συνεχίζοντας παραλιακά τη βόλτα σας, θα αρχίσετε να βλέπετε την πιο φωτογραφημένη γέφυρα της Βερόνα, την <strong>Ponte Pietra</strong>. Χτισμένη αρχικά από τους Ρωμαίους το 100 π.Χ., είναι η παλαιότερη γέφυρα της Βερόνα και διασχίζει τον ποταμό Adige από την Città Antica προς το Castel San Pietro. Έχει συνολικά πέντε καμάρες και έχει ξαναχτιστεί αρκετές φορές μέσα στα χρόνια, είτε λόγω ζημιών από πλημμύρες είτε λόγω καταστροφών κατά τη διάρκεια πολέμων.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το highlight της ημέρας όμως δεν μπορεί να είναι άλλο από το <strong>Castel San Pietro</strong> — ειδικά αν το επισκεφτείτε την ώρα του ηλιοβασιλέματος. Για να ανεβείτε, βρείτε τα σκαλάκια <strong>Scalinata Castel San Pietro</strong> και ξεκινήστε την ανάβαση — δεν είναι ιδιαίτερα κουραστική, δεν θα σας πάρει περισσότερο από 10 λεπτά. Μόλις φτάσετε στην κορυφή θα δείτε τη συγκλονιστική θέα της πόλης, τη γέφυρα Ponte Pietra και όλα τα εντυπωσιακά κτήρια από ψηλά.
                    </p>

                    <PhotoFull src="/images/verona/verona-castel-san-pietro.jpg" alt="Η θέα στο ηλιοβασίλεμα από το Castel San Pietro στη Βερόνα" />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στην κορυφή θα βρείτε και ένα μαγαζί — συνήθως έχει πολύ κόσμο, οπότε εμείς πήραμε από ένα Aperol στο χέρι για να το απολαύσουμε με τη συγκλονιστική αυτή θέα.
                    </p>
                </div>

                {/* Ημέρα 2 */}
                <div id="imera-2" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 2η Ημέρα
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η αλήθεια είναι ότι μπορείτε να δείτε όλα τα αξιοθέατα σε μία μέρα, αν ξεκινήσετε νωρίς — εμείς όμως τα χωρίσαμε σε δύο, ώστε να έχουμε περισσότερο χρόνο να απολαύσουμε την πόλη.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ξεκινήστε από τη <strong>Via Giuseppe Mazzini</strong>, όπου βρίσκεται και η αγορά της Βερόνα με όλα τα μαγαζιά της. Στο τέλος του δρόμου θα φτάσετε στη <strong>Via Cappello</strong>. Εκεί μπροστά σας θα βρείτε το <strong>Minuto Bauli</strong>, όπου μπορείτε να πάρετε ένα γλυκό Bauli — πρακτικά ένα γλυκό ψωμάκι με γέμιση.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Δεξιά σας θα βρείτε το ίσως διασημότερο αξιοθέατο της Βερόνα, το <strong>σπίτι της Ιουλιέτας</strong>. Προσοχή: η είσοδος δεν γίνεται από τη Via Cappello, αλλά από το πλάι, στη Vicolo Crocioni — το πρώτο στενό αριστερά μετά το Minuto Bauli.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/verona/verona-casa-giulietta.jpg', alt: 'Το σπίτι της Ιουλιέτας με το διάσημο μπαλκόνι στη Βερόνα' }}
                        right={{ src: '/images/verona/verona-piazza-erbe.jpg', alt: 'Η Piazza delle Erbe, η παλαιότερη πλατεία της Βερόνας' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Υπάρχουν 2 διαφορετικά εισιτήρια: ένα των 5€ που σας δίνει πρόσβαση στο θέατρο και στην αυλή όπου βρίσκεται το άγαλμα της Ιουλιέτας, και ένα δεύτερο των 12€ που δίνει επιπλέον πρόσβαση στο σπίτι της Ιουλιέτας, όπου μπορείτε να ανεβείτε στο μπαλκόνι.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Λέγεται ότι θα έχετε καλή τύχη θωπεύοντας το στήθος του αγάλματος της Ιουλιέτας, ή στέλνοντας ραβασάκια σε ανεκπλήρωτους έρωτες — όπως καταλαβαίνετε, δημιουργείται μεγάλη ουρά κόσμου που περιμένει να βγάλει την κλασική φωτογραφία με το άγαλμα. Το μπαλκόνι προστέθηκε τη δεκαετία του &apos;30 για τουριστικούς λόγους, όμως το κτίριο παραμένει ένα πανέμορφο δείγμα γοτθικής αρχιτεκτονικής. Μπορείτε να κλείσετε εισιτήρια <a href="https://gyg.me/dx3FNCYz" className="text-blue-600 underline">από εδώ</a>.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Επόμενη στη λίστα είναι μια πανέμορφη πλατεία, η <strong>Piazza delle Erbe</strong>. Η παλαιότερη πλατεία της Βερόνας, χτισμένη πάνω στην αρχαία ρωμαϊκή αγορά. Περιβάλλεται από ιστορικά κτίρια με τοιχογραφίες και στο κέντρο της δεσπόζει το σιντριβάνι της <strong>Madonna Verona</strong>.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Εκεί βρίσκεται κι ένα ακόμα αξιοθέατο, ο <strong>Torre dei Lamberti</strong>, ο ψηλότερος πύργος της πόλης (84 μέτρα) που προσφέρει πανοραμική θέα 360 μοιρών. Υπάρχουν δύο τρόποι να ανέβετε: είτε τα 368 σκαλιά, είτε το ασανσέρ που θα σας ανεβάσει στην κορυφή. Η θέα είναι εξαιρετική — θα δείτε από ψηλά τις στέγες, τα δρομάκια της πόλης, και οι γύρω λόφοι δημιουργούν ένα εκπληκτικό σκηνικό.
                    </p>

                    <PhotoFull src="/images/verona/verona-torre-lamberti.jpg" alt="Η θέα από τον πύργο Torre dei Lamberti στη Βερόνα" />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ακριβώς από πίσω βρίσκονται οι <strong>Τάφοι Scaliger</strong> ή <strong>Arche Scaligere</strong>, που μπορείτε να δείτε εξωτερικά. Δίπλα στην εκκλησία της Santa Maria Antica, αυτά τα περίτεχνα γοτθικά ταφικά μνημεία τιμούν την ισχυρή οικογένεια Scaliger, η οποία κυβέρνησε τη Βερόνα κατά τον 13ο και 14ο αιώνα. Είναι διακοσμημένοι με λεπτά πέτρινα στέγαστρα, αιχμηρούς πυργίσκους και περίπλοκα γλυπτά, και κάθε τάφος στεφανώνεται με ένα έφιππο άγαλμα, σύμβολο της δύναμης και της ηγεσίας της οικογένειας.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ακριβώς απέναντι βρίσκεται και μια μικρή πλατεία, η <strong>Piazza dei Signori</strong>, ή αλλιώς η πλατεία του Δάντη — εκεί θα βρείτε ένα άγαλμα του Δάντη που στέκεται σκεπτικός.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Λίγο παρακάτω βρίσκεται η εκκλησία <strong>Basilica of Santa Anastasia</strong>, με την είσοδο να κοστίζει 4€. Εμείς επιλέξαμε να μην μπούμε, όμως πρόκειται για ένα παράδειγμα γοτθικής αρχιτεκτονικής. Ακριβώς απέναντι από την εκκλησία θα βρείτε το <strong>La Bottega della Gina XXL</strong>, ένα μαγαζί με χειροποίητα φρέσκα ζυμαρικά που αξίζει την προσοχή σας. Εναλλακτικά, για κάτι από φούρνο, θα το βρείτε στο <strong>Antico Panificio Forti</strong>, λίγα μέτρα παρακάτω πάνω στη <strong>Via Duomo</strong>.
                    </p>

                    <PhotoPair
                        left={{ src: '/images/verona/verona-duomo.jpeg', alt: 'Ο καθεδρικός ναός (Duomo) της Βερόνα' }}
                        right={{ src: '/images/verona/verona-san-fermo.jpeg', alt: 'Η εκκλησία Church of San Fermo Maggiore στη Βερόνα' }}
                    />

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Συνεχίζοντας στη Via Duomo, θα βρεθείτε φυσικά στον <strong>Duomo της Βερόνα</strong>. Αν έχετε πάει σε άλλα Duomo, όπως του Μιλάνου ή της Σιένα, και περιμένετε κάτι αντίστοιχο, θα απογοητευτείτε. Παρόλα αυτά αξίζει μια είσοδος στον ναό — το κόστος είναι επίσης 4€, ή δωρεάν με την Verona Card. Ήταν η πρώτη εκκλησία που χτίστηκε στην πόλη, τον 4ο αιώνα μ.Χ. Στη σημερινή της μορφή είναι μια συγχώνευση γοτθικού και ρομανικού ρυθμού, χρονολογείται από τον 16ο αιώνα, ενώ το καμπαναριό, χτισμένο πάνω σε μια παλαιότερη ρομανική κατασκευή, ανυψώθηκε σε περίπου 30 μέτρα από τον Michele Sanmicheli και έφτασε στο σημερινό του ύψος στις αρχές του 20ού αιώνα, παραμένοντας ωστόσο ημιτελές — σύμφωνα με έναν θρύλο, αυτό έγινε ώστε να μην ξεπερνάει το ύψος του Torre dei Lamberti, του ψηλότερου κτιρίου της πόλης.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν θέλετε καφέ ή κάποιο ποτό, επισκεφτείτε το <strong>Terrazza Bar al Ponte</strong> — στον εξωτερικό χώρο του μαγαζιού θα κάτσετε δίπλα από το ποτάμι, με θέα την Ponte Pietra και το κάστρο San Pietro.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν έχετε χρόνο, μια ακόμα εκκλησία που αξίζει είναι η <strong>Church of San Fermo Maggiore</strong>. Παράδειγμα του γοτθικού ρυθμού που διαδόθηκε σε όλη την Ιταλία από το Τάγμα των Μικρών Αδελφών, με αναφορές στη γαλλική αρχιτεκτονική που παρατηρούνται ιδιαίτερα στο ψηλότερο μέρος του κτιρίου, με πυργίσκους και στολίδια αρκετά ασυνήθιστα για την πόλη. Στο εσωτερικό, σαν σεντούκι θησαυρού, βρίσκεται η κάτω εκκλησία των Βενεδικτίνων, κόσμημα της τοπικής ρομανικής αρχιτεκτονικής. Και εδώ η είσοδος κοστίζει 4€.
                    </p>
                </div>

                {/* Επιπλέον Δραστηριότητες */}
                <div id="epipleon" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Επιπλέον Δραστηριότητες στη Βερόνα
                    </h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        <strong>Giardino Giusti:</strong> Λίγο έξω από την παλιά πόλη βρίσκεται αυτός ο αναγεννησιακός κήπος. Αν θέλετε να ξεφύγετε από τα πλήθη της πόλης, είναι το ιδανικό σημείο για μια βόλτα στον λαβύρινθο και πανοραμική θέα από την κορυφή του λόφου.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν έχετε περισσότερες ημέρες στη Βερόνα, η καλύτερη επιλογή είναι να τις περάσετε με μονοήμερες εκδρομές στις γύρω περιοχές.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το πιο βασικό είναι η <strong>Λίμνη Γκάρντα</strong>. Από τον σταθμό Verona Porta Nuova φεύγουν κάθε ώρα λεωφορεία που σας πάνε απευθείας στο <strong>Sirmione</strong>, ένα από τα ομορφότερα χωριά της λίμνης.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Επίσης σε πολύ κοντινή απόσταση βρίσκεται, πάλι στη Λίμνη Γκάρντα αλλά σε διαφορετικό σημείο, το <strong>Gardaland</strong>, το διασημότερο ψυχαγωγικό πάρκο της Ιταλίας. Μπορείτε να φτάσετε παίρνοντας το λεωφορείο 164 από την Piazza Bra — σε 50 λεπτά θα είστε στον προορισμό σας. Το κόστος εισόδου για έναν ενήλικα είναι 48€, με πακέτα και για οικογένειες.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Μέσα στο πάρκο μπορείτε να δείτε πάνω από 40 αξιοθέατα, χωρισμένα σε τρεις κύριες κατηγορίες: Περιπέτεια, Αδρεναλίνη και Φαντασία. Τα αξιοθέατα Φαντασίας είναι σχεδιασμένα για παιδιά και περιλαμβάνουν περιοχές όπως το Fantasy Kingdom, με παιχνίδια όπως το Prezzemolo&apos;s House και το Prezzemolo Magic Village, καθώς και τη νέα Peppa Pig Land. Τα αξιοθέατα Περιπέτειας περιλαμβάνουν το πρόσφατο Jumanji, μαζί με κλασικά όπως Fuga da Atlantide, Mammut, Jungle Rapids και Colorado Boat. Τέλος, τα Adrenaline περιλαμβάνουν εμβληματικά παιχνίδια όπως το Blue Tornado, το Oblivion, το Raptor και το roller coaster Shaman.
                    </p>
                    <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="2" data-gyg-partner-id="0OAQQKO" data-gyg-tour-ids="225588,93765"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/garda-l145126/">GetYourGuide</a></span></div>
                </div>
                

                {/* Φαγητό */}
                <div id="fagito" className="mt-8 pt-10 border-t border-gray-200 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Φαγητό στη Βερόνα
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Coffee &amp; Bar</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li><strong>Terrazza Bar al Ponte</strong></li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Bakery</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li><strong>Forno50 Verona</strong></li>
                                <li><strong>Impasti 4.1</strong></li>
                                <li><strong>Antico Panificio Forti</strong></li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Γλυκό</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li><strong>Gelateria Savoia Verona</strong></li>
                                <li><strong>Minuto Bauli - Verona</strong></li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Εστιατόρια</h3>
                            <ul className="text-[#2E2E2F] text-justify list-disc list-inside space-y-2">
                                <li><strong>Pino&apos;s Potatoes</strong></li>
                                <li><strong>Focacceria La Figaccia</strong></li>
                                <li><strong>Pizzeria da Vincenzo</strong></li>
                                <li><strong>La Bottega della Gina XXL</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Πόσο κοστίζει */}
                <div id="kostos" className="mt-8 pt-10 border-t border-gray-200 mb-8 scroll-mt-24">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        Πόσο Κοστίζει το Ταξίδι στη Βερόνα
                    </h2>
                    <TripCosts items={veronaTripCosts} />
                </div>
            </div>

            <RelatedDestinations currentSlug="verona" country="Ιταλία" />
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>
    )
}

export default Verona
