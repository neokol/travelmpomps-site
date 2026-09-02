import React from 'react'
import SiteNavbar from '@/app/components/SiteNavbar'
import RelatedDestinations from '@/app/components/RelatedDestinations'
import { Widget2 } from '@/app/components/Widget2'
import { FaCoins } from "react-icons/fa";
import { VscRadioTower } from "react-icons/vsc";
import { GiPassport } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import Image from 'next/image';
import { PageFooter } from "@/app/components/Footer"
import Script from 'next/script'
import { Metadata } from 'next';

const wroclawItems = [
    {
        name: 'Νόμισμα',
        icon: <FaCoins className="w-5 h-5" />,
        content: 'Το νόμισμα που χρησιμοποιούν είναι το Ζλότι (PLN). Η αναλογία μεταξύ του ευρώ είναι περίπου 1 EUR = 235 PLN',
    },
    {
        name: 'Roaming',
        icon: <VscRadioTower className="w-5 h-5" />,
        content: 'Η Πολωνία ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας',
    },
    {
        name: 'Έγγραφα',
        icon: <GiPassport className="w-5 h-5" />,
        content: 'Ταυτότητα ή διαβατήριο',
    },
    {
        name: 'Γλώσσα',
        icon: <FaLanguage className="w-5 h-5" />,
        content: 'Φυσικά μιλάνε Πολωνικά, αλλά στα τουριστικά μέρη θα βρείτε αρκετούς που μιλάνε Αγγλικά',
    },
];

export const metadata: Metadata = {
    // Τίτλος: Κλασικός και δυνατός για SEO
    title: "Βρότσλαβ: Τι να δω και τι να κάνω σε 2 Ημέρες (Οδηγός 2026)",

    // Περιγραφή: Λέξεις-κλειδιά "Βενετία της Πολωνίας", νάνοι, Rynek, γέφυρες
    description: "Ανακαλύψτε το Βρότσλαβ, τη \"Βενετία\" της Πολωνίας. Πλήρης οδηγός 2 ημερών: Κεντρική Πλατεία, κυνήγι νάνων, Bridge of Penitents, φαγητό και χρήσιμα tips.",

    // Canonical URL
    alternates: {
        canonical: '/destinations/wroclaw',
    },

    // Open Graph (Social Media)
    openGraph: {
        title: 'Βρότσλαβ: Η "Βενετία" της Πολωνίας σε 2 ημέρες',
        description: 'Κεντρική πλατεία, κυνήγι νάνων και οι πιο όμορφες γέφυρες της Πολωνίας. Ο απόλυτος οδηγός για το Βρότσλαβ.',
        url: '/destinations/wroclaw',
        type: 'article',
        images: [
            {
                url: '/images/wroclaw-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Βρότσλαβ: Ταξιδιωτικός Οδηγός 2026',
            },
        ],
    },
}

function Wroclaw() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Προορισμοί', item: 'https://travelmpomps.gr/destinations' },
            { '@type': 'ListItem', position: 3, name: 'Βρότσλαβ', item: 'https://travelmpomps.gr/destinations/wroclaw' },
        ],
    };
    return (
        <div className="min-h-screen">
            <Script
                id="json-ld-breadcrumb-wroclaw"
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
                    src="/hero/wroclaw.jpg"
                    alt="Ταξιδιωτικός οδηγός για το Βρότσλαβ"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <SiteNavbar variant="transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 flex items-center justify-center text-center px-4">
                    <h1 className="font-display text-white text-3xl md:text-5xl font-bold max-w-3xl">
                        Ταξίδι στο Βρότσλαβ: Τι να δεις και τι να κάνεις σε 2 Ημέρες
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="pt-12 container mx-auto px-8 md:px-20 lg:px-60">

                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η πόλη του Βρότσλαβ λέγεται συχνά και η &quot;Βενετία&quot; της Πολωνίας. Ο λόγος είναι ότι έχει 120 γέφυρες και είναι χτισμένη πάνω σε 12 νησιά πάνω στον ποταμό Oder. Επίσης, είναι γνωστή και ως η πόλη των νάνων. Εντός της πόλης θα βρείτε διασκορπισμένα διάφορα μικρά αγαλματίδια από νάνους.
                </p>
                <p className="mb-4 text-justify">
                    Μια πολύ μικρή αλλά πανέμορφη πόλη, πραγματικά μας εντυπωσίασε από την πρώτη στιγμή. Μπορείτε να συνδυάσετε το ταξίδι σας με την επίσκεψη σας στην Κρακοβία που βρίσκεται περίπου 3 ώρες μακριά ή με την Πράγα που βρίσκεται περίπου 4 ώρες μακριά με το τρένο.
                </p>

                {/* Widget */}
                <div className="mt-8">
                    <Widget2 items={wroclawItems} />
                </div>

                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το Αεροδρόμιο του Βρότσλαβ
                    </h2>
                    <p className="mb-4 text-justify">
                        Η πιο οικονομική και δημοφιλής μέθοδος για τη μεταφορά από το Αεροδρόμιο Copernicus του Βρότσλαβ (WRO) προς το κέντρο της πόλης είναι το λεωφορείο (Γραμμή 106). Το εισιτήριο κοστίζει περίπου 4,60 PLN (περίπου 1€). Μπορείτε να πληρώσετε απευθείας tap in με την κάρτα σας μέσα στο λεωφορείο, η στάση του βρίσκεται λίγα μέτρα δεξιά από την έξοδο σας από το αεροδρόμιο.
                    </p>
                </div>

                <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-q="Wroclaw"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/">GetYourGuide</a></span></div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Οδηγός 2 Ημερών για το Βρότσλαβ
                    </h2>
                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="2036" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 1η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η περιήγηση στην πόλη του Βρότσλαβ δεν μπορεί να μην ξεκινήσει σε μία από τις ομορφότερες πλατείες της Ευρώπης. Η Κεντρική Πλατεία (Rynek), το κέντρο της πόλης, όπου εκεί φιλοξενούνται εκπληκτικά αρχιτεκτονικά μνημεία, όπως το δημαρχείο, το οποίο χρονολογείται από τον 13ο αιώνα, αλλά και η γραφική πλατεία της αγοράς. Το 90% των κτιρίων είναι όμως ανακατασκευασμένα. Όταν έφυγαν οι Γερμανοί στον δεύτερο παγκόσμιο πόλεμο, η πόλη ήταν κυριολεκτικά ισοπεδωμένη, έτσι χτίστηκε από την αρχή.
                    </p>
                    <p className="mb-4 text-justify">
                        Εκεί θα βρείτε:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Παλιό Δημαρχείο</strong>: Ένα αρχιτεκτονικό αριστούργημα στην καρδιά της Rynek, που σήμερα στεγάζει το Μουσείο Αστικής Τέχνης. Πρόκειται για κτήριο του 13ου αιώνα. Όλα τα αγάλματα στην πρόσοψη του δημαρχείου είναι κανονικοί άνθρωποι που τους έκαναν οι καλλιτέχνες εκείνη την εποχή και που αντιπροσωπεύουν τις κοινωνικές τάξεις του Βρότσλαβ.
                        </li>
                        <li>
                            <strong>Σπίτια των εμπόρων (Hansel and Gretel)</strong>: Μερικά από τα εντυπωσιακά παστέλ σπίτια που βρίσκονται στην κεντρική πλατεία.
                        </li>
                        <li>
                            <strong>House of the Seven Electors</strong>: Ένα ακόμα εντυπωσιακό κτήριο. Λίγο διαφορετικό από τα υπόλοιπα.
                        </li>
                        <li>
                            <strong>St. Elisabeth&apos;s Church (Bazylika Św. Elżbiety)</strong>: Η είσοδος στον ναό είναι δωρεάν. Η ανάβαση στον πύργο (πάνω από 300 σκαλιά) κοστίζει περίπου 15 PLN (~3,5€). Δεν ανεβήκαμε μέχρι πάνω καθώς επιλέξαμε να ανέβουμε μέχρι στο Bridge of Penitents για να δούμε την θέα από ψηλά.
                        </li>
                        <li>
                            <strong>Plac Solny</strong>: Πλατεία του Αλατιού, διαθέτει μια υπαίθρια, πολύχρωμη αγορά λουλουδιών που είναι ανοιχτή όλο το 24ωρο.
                        </li>
                    </ul>

                    <p className="mb-4 text-justify">
                        <strong>Κυνήγι νάνων</strong>: Το Βρότσλαβ είναι η πόλη των νάνων, η πόλη είναι γεμάτη με μικρά τέτοια αγαλματίδια. Αυτά ξεκίνησαν ως μια μορφή διαμαρτυρίας τη δεκαετία του 1980. Μια ομάδα που ονομάζεται Orange Alternative χρησιμοποίησε γκράφιτι gnome για να κοροϊδέψει την κομμουνιστική κυβέρνηση. Ήταν ο τρόπος τους να στέκονται όρθιοι χωρίς να μπαίνουν σε μπελάδες. Από τότε, η πόλη το έχει μετατρέψει σε μια διασκεδαστική παράδοση. Άρχισε να γίνεται εμπορικό πράγμα για να προσελκύει περισσότερους τουρίστες. Και τώρα υπάρχουν εκατοντάδες μικρά χάλκινα αγαλματίδια καλικάντζαρους διάσπαρτα στην πόλη. Μέσα στα μαγαζιά για τουριστικές πληροφορίες μπορείτε να αγοράσετε και έναν χάρτη με τους νάνους που υπάρχουν στην πόλη.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Bridge of Penitents – Cathedral of St. Mary Magdalene</strong>: Το Bridge of Penitents έχει μια από τις πιο μοναδικές ιστορίες της πόλης. Αυτή η γέφυρα είναι στην πραγματικότητα γνωστή ως Γέφυρα των Μαγισσών. Είναι μια κρεμαστή γέφυρα με την καλύτερη θέα στην πόλη και συνδέει δύο πύργους του καθεδρικού ναού της Αγίας Μαρίας Μαγδαληνής. Δεν απέχει πολύ από την πλατεία της αγοράς, αλλά θα χρειαστεί να ανεβείτε 247 σκαλοπάτια για να φτάσετε στην κορυφή, σε κάποια σημεία τα σκαλοπάτια είναι λίγο απότομα οπότε υπομονή. Η καλύτερη στιγμή να ανέβετε είναι το ηλιοβασίλεμα. Στην κορυφή θα βρείτε ένα αγαλματάκι. Σύμφωνα με τον μύθο, ο καλικάντζαρος αντιπροσωπεύει το φάντασμα μιας νεαρής γυναίκας που τιμωρήθηκε για τις αμαρτίες της. Καταδικάστηκε να σκουπίζει και να καθαρίζει την ξύλινη γέφυρα για πάντα ως μετάνοια. Το κόστος για να ανεβείτε είναι περίπου 15 PLN (~4,5€).
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Bastion Sakwowy</strong>: Ανακαινισμένος προμαχώνας, αξίζει να περάσετε μια βόλτα αν βρείτε χρόνο και αν έχει καλό καιρό.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Four Denominations District</strong>: Η περιοχή των τεσσάρων ομολογιών είναι ένα από τα μόνα μέρη που θα βρείτε Καθολική Εκκλησία, Ευαγγελική Εκκλησία, Ορθόδοξη Εκκλησία και Συναγωγή όλα σε μια γειτονιά. Στην πραγματικότητα, όλες αυτές οι θρησκείες και οι τόποι λατρείας ενώνονται για να εκπαιδεύσουν η μία την άλλη. Η περιοχή έχει αρκετό νέο κόσμο και πολλά μαγαζιά για καφέ, φαγητό και ποτό.
                    </p>

                    <p className="mb-4 text-justify">
                        Για το βράδυ πρέπει να επισκεφτείτε οπωσδήποτε το <strong>Ruska 46c – Galeria Neon Side</strong>. Μια κρυφή εσωτερική αυλή γεμάτη με παλιά, φωτεινά νέον που διασώθηκαν από τους δρόμους της πόλης. Το σημείο μεταμορφώνεται σε ένα φαντασμαγορικό open-air μουσείο μόλις νυχτώσει. Εκεί έχει δύο μαγαζιά για να πιείτε το ποτό σας.
                    </p>
                </div>

                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 2η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Ξεκινήστε την δεύτερη ημέρα από το νησί του καθεδρικού, το παλαιότερο τμήμα της πόλης. Μια άκρως ρομαντική περιοχή με τον επιβλητικό Καθεδρικό Ναό του Αγίου Ιωάννη του Βαπτιστή.
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Καθεδρικός Ναός του Αγίου Ιωάννη του Βαπτιστή</strong>: Η είσοδος στον ναό είναι δωρεάν. Η πρόσβαση στον Πύργο κοστίζει 25 PLN (~5,8€).
                        </li>
                        <li>
                            <strong>Γέφυρα Tumsky</strong>
                        </li>
                        <li>
                            <strong>Φανάρια με Φως από Λυχναψία</strong>: Το πιο εντυπωσιακό κομμάτι του καθεδρικού είναι το άναμα των φαναριών. Κάθε βράδυ, το σούρουπο (30 λεπτά πριν από τη δύση του ηλίου), θα βρείτε έναν άνθρωπο, τον Φανοκόρο, να ανάβει χειροκίνητα, με τον παραδοσιακό τρόπο που τα άναβαν πριν από τουλάχιστον 100 τόσα χρόνια, σχεδόν 200 λάμπες. Είναι μια παλιά παράδοση η οποία συνεχίζεται καθημερινά μέχρι και σήμερα. Επειδή δεν υπάρχει συγκεκριμένο πρόγραμμα από πού ξεκινάει και πού τελειώνει, περίπου μισή ώρα πριν από το σούρουπο, πηγαίνετε έξω από τον Καθεδρικό Ναό του Αγίου Ιωάννη του Βαπτιστή. Σίγουρα θα βρείτε κι άλλο κόσμο να περιμένει. Εκεί θα έρθει ο Φανοκόρος, με την παραδοσιακή φορεσιά, που θα αρχίσει το άναμα των λαμπών.
                        </li>
                    </ul>

                    <p className="mb-4 text-justify">
                        <strong>Πανεπιστήμιο του Βρότσλαβ</strong>: Το πανεπιστήμιο είναι από τα παλαιότερα και πιο αναγνωρίσιμα πανεπιστήμια της Πολωνίας. Η εντυπωσιακή αρχιτεκτονική του το έχει κάνει τουριστική attraction. Τα νεοκλασικά μαζί με τα μπαρόκ στοιχεία κάνουν τους ταξιδιώτες να μένουν άφωνοι μπροστά στο θέαμα. Το combo εισιτήριο για τις αίθουσες και τον πύργο κοστίζει περίπου 28 PLN (~6,5€). Στην είσοδο έχει διάφορα εισιτήρια ανάλογα με τις αίθουσες που θέλετε να επισκεφτείτε. Η αίθουσα που αξίζει περισσότερο είναι η Αίθουσα Leopoldina. Έτσι επιλέξαμε τα παρακάτω:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Πύργος Matematyczny</strong>: Θα σας δώσει πρόσβαση και στην ταράτσα του πύργου. Εκεί, εκτός από την υπέροχη θέα, θα βρείτε και 4 αγάλματα να κρατάνε διαφορετικά αντικείμενα, που συμβολίζουν την δικαιοσύνη.
                        </li>
                        <li>
                            <strong>Αίθουσα Leopoldina</strong>
                        </li>
                    </ul>

                    <p className="mb-4 text-justify">
                        <strong>Ossolineum (Zakład Narodowy im. Ossolińskich)</strong>: Ένα ιστορικό ίδρυμα που στεγάζεται σε ένα πρώην μοναστήρι. Διαθέτει μια από τις πιο όμορφες, γαλήνιες και συμμετρικές εσωτερικές αυλές της πόλης, με περιποιημένους κήπους.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Hala Targowa – Market Hall</strong>: Η αίθουσα της αγοράς χτίστηκε μεταξύ 1905 και 1908 στη θέση που βρισκόταν το πρώην οπλοστάσιο (δύο πύργοι είναι τα απομεινάρια του). Ήταν ένα πολύ καινοτόμο έργο για την εποχή του, από τα πρώτα με χρήση σκυροδέματος. Στο εσωτερικό θα δείτε έναν μεγάλο ανοιχτό χώρο με ογκώδεις και μνημειώδεις τσιμεντένιες καμάρες.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Γέφυρα Grunwaldzki</strong>: Η κρεμαστή γέφυρα πάνω από τον ποταμό Όντερ, που σε οδηγεί στην ανατολική πλευρά.
                    </p>
                </div>

                <div className="mt-8 mb-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        Επιπλέον δραστηριότητες
                    </h3>
                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Hala Stulecia (Εκατονταετής Αίθουσα) – Multimedia Fountain</strong>: Εντυπωσιακό κτήριο το οποίο είναι και μνημείο της UNESCO. Το εισιτήριο για την έκθεση (Visitor Centre) και το εσωτερικό του θόλου κοστίζει 30 PLN (~7€). Το Multimedia Fountain βρίσκεται έξω από τη Hala Stulecia. Οι παραστάσεις με νερό και μουσική είναι δωρεάν και συνήθως γίνονται κάθε μία ώρα (το βράδυ φωτίζεται εντυπωσιακά από τις 6 το απόγευμα μέχρι τις 10). Σε αυτό το κτήριο γυρίστηκε και το prequel του Hunger Games.
                        </li>
                        <li>
                            <strong>Πάρκο Szczytnicki και Ιαπωνικός Κήπος</strong>: Βρίσκεται ακριβώς δίπλα στο συντριβάνι. Προσφέρει αυθεντική ιαπωνική αρχιτεκτονική τοπίου.
                        </li>
                        <li>
                            <strong>Hydropolis</strong>: Ένα υπερσύγχρονο, διαδραστικό μουσείο αφιερωμένο στο νερό. Στεγάζεται σε μια υπόγεια δεξαμενή καθαρού νερού του 19ου αιώνα και εξηγεί τον ρόλο του νερού στον πλανήτη, την ιστορία της ναυτιλίας και των ωκεανών (~10€). Μπορείτε να αγοράσετε εισιτήρια online για να αποφύγετε την αναμονή από <a href="https://gyg.me/40GK8Zkf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">εδώ</a>.
                        </li>
                        <li>
                            <strong>Συνοικία Nadodrze</strong>: Η εναλλακτική πλευρά του Βρότσλαβ. Γεμάτη με industrial αισθητική, street art, καλλιτεχνικά εργαστήρια και εσωτερικές αυλές με τοιχογραφίες (όπως στην οδό Roosvelta), όπου οι ντόπιοι έχουν ζωγραφίσει τους εαυτούς τους και τα κατοικίδιά τους στους τοίχους.
                        </li>
                    </ul>
                </div>

                <div className="mt-8 mb-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        Φαγητό στο Βρότσλαβ
                    </h3>

                    <h4 className="font-bold mb-3 mt-8">Γλυκό:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Chleboteka</strong></li>
                        <li><strong>NANAN</strong></li>
                    </ul>

                    <h4 className="font-bold mb-3 mt-8">Αλμυρό:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Ze Smakiem</strong>: Τα καλύτερα pierogi</li>
                        <li><strong>Bar mleczny Miś</strong></li>
                        <li><strong>PLUTO</strong>: Πολύ νόστιμα burgers σε εξαιρετική τιμή</li>
                    </ul>

                    <h4 className="font-bold mb-3 mt-8">Καφέ:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>OTO Coffee Bar</strong></li>
                        <li><strong>Oki Doki</strong></li>
                        <li><strong>Poko Bakery &amp; Cafe | Szewska</strong></li>
                        <li><strong>Chmiel kawę</strong></li>
                        <li><strong>FC Caffe</strong></li>
                        <li><strong>Atelier Cafe</strong></li>
                    </ul>

                    <h4 className="font-bold mb-3 mt-8">Bakeries:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Piekarnia-cukiernia Monkeys</strong></li>
                        <li><strong>Chleboteka</strong></li>
                        <li><strong>PURI Georgian bakery</strong></li>
                    </ul>
                </div>
            </div>
            <RelatedDestinations currentSlug="wroclaw" country="Πολωνία" />
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>
    )
}

export default Wroclaw
