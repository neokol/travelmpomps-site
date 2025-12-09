import React from 'react'
import Navbar from '@/app/components/Navbar'
// import { ImageGallery } from '@/app/components/ImageGallery'
import { Widget2 } from '@/app/components/Widget2'
import { FaCoins } from "react-icons/fa";
import { VscRadioTower } from "react-icons/vsc";
import { GiPassport } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import Image from 'next/image';
// import { ImageAccordion } from '@/app/components/ImageAccordion';
import { PageFooter } from "@/app/components/Footer"
import Script from 'next/script'
// import Head from 'next/head';
import { Metadata } from 'next';

const barcelonaItems = [
    {
        name: 'Νόμισμα',
        icon: <FaCoins className="w-5 h-5" />,
        content: 'Το νόμισμα που χρησιμοποιούν είναι το Ευρώ.',
    },
    {
        name: 'Roaming',
        icon: <VscRadioTower className="w-5 h-5" />,
        content: 'Η Ιταλία ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας',
    },
    {
        name: 'Έγγραφα',
        icon: <GiPassport className="w-5 h-5" />,
        content: 'Ταυτότητα ή διαβατήριο',
    },
    {
        name: 'Γλώσσα',
        icon: <FaLanguage className="w-5 h-5" />,
        content: 'Φυσικά μιλάνε Ιταλικά, αλλά στα τουριστικά μέρη θα βρείτε αρκετούς που μιλάνε Αγγλικά',
    },
];

// const firstDayImages = [
//     {
//         image: '/bucharest/river.jpg',
//         header: 'Dambovita River'
//     },
//     {
//         image: '/bucharest/curturesti.jpg',
//         header: 'Cărturești Carusel'
//     },
//     {
//         image: '/bucharest/museum.jpg',
//         header: 'National Museum'
//     },
//     {
//         image: '/bucharest/monastery.jpg',
//         header: 'Stavropoleos Monastery'
//     }
// ];

// const secondDayImages = [
//     {
//         image: '/bucharest/athenium.jpg',
//         header: 'Romanian Athenaeum'
//     },
//     {
//         image: '/bucharest/village.jpg',
//         header: 'Village Museum'
//     },
//     {
//         image: '/bucharest/arc.jpg',
//         header: 'Arcul de Triumf'
//     },
//     {
//         image: '/bucharest/biblioteca.jpg',
//         header: 'University Library'
//     }
// ];

export const metadata: Metadata = {
    // Τίτλος: Κλασικός, περιεκτικός και με χρονολογία
    title: "Ρώμη: Τι να δω και τι να κάνω (Πλήρης Οδηγός 2025) | Travelmpomps",

    // Περιγραφή: Πρέπει να χωρέσουμε τα "βαριά χαρτιά" της Ρώμης.
    // Αναφέρουμε Κολοσσαίο, Βατικανό (Μουσεία), Fontana di Trevi και φυσικά πίτσα/pasta.
    description: "Ταξίδι στην Αιώνια Πόλη. Ο απόλυτος οδηγός για τη Ρώμη: Κολοσσαίο, Βατικανό, Fontana di Trevi, τα καλύτερα μέρη για αυθεντική Carbonara και tips διαμονής.",

    // Canonical URL
    alternates: {
        canonical: 'https://travelmpomps.gr/destinations/rome',
    },

    // Open Graph (Social Media)
    openGraph: {
        title: 'Ρώμη: Αξιοθέατα, Βατικανό και Φαγητό',
        description: 'Ολα όσα πρέπει να δείτε στη Ρώμη. Πλήρης οδηγός για 3 ή 4 ημέρες γεμάτες ιστορία και ιταλικές γεύσεις.',
        url: 'https://travelmpomps.gr/destinations/rome',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
    },
}

function Rome() {
    return (
        <div className="min-h-screen">
            {/* <Head>
                <title>Ρώμη Αξιοθέατα - Ρώμη τι να δω</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/destinations/rome"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Ρώμη Αξιοθέατα | Ταξιδωτικός Οδηγός για τη Ρώμη | Τι να δω και τι να κάνω στην Ρώμη"
                    key="desc"
                />
            </Head> */}
            <div><Navbar /></div>
            <Script
                async
                defer
                src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
                data-gyg-partner-id="0OAQQKO"
            />
            {/* Content with Padding to Account for Navbar */}
            <div className="pt-24 container mx-auto px-8 md:px-20 lg:px-60">

                <h1 className="text-3xl font-bold text-[#2E2E2F] mb-4">
                    Ταξίδι στη Ρώμη: Αξιοθέατα, Βατικανό και Γαστρονομία στην Αιώνια Πόλη
                </h1>

                {/* Main picture */}
                <div className="flex justify-center my-8"> {/* Center the image */}
                    <Image
                        src="/images/rome-hero.png"
                        width={1200} // Increase width for a wider image
                        height={600} // Adjust height proportionally
                        alt="warsaw-old-town"
                        className="rounded-lg shadow-lg w-full max-w-4xl" // Make it responsive and add styling
                        priority // Optimize loading for above-the-fold images
                    />
                </div>

                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η Ρώμη είναι από εκείνα τα ταξίδια που μπορείς εύκολα να οργανώσεις μόνος σου. Η μετακίνηση είναι απλή και το ιστορικό κέντρο προσφέρεται για περπάτημα, οπότε από το ένα σημείο βρίσκεσαι στο άλλο χωρίς ιδιαίτερο κόπο.                     </p>
                <p className="mb-4 text-justify">
                    Το κέντρο της πόλης χωρίζεται ουσιαστικά σε τρία βασικά μέρη:
                </p>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>το <strong>Ιστορικό Κέντρο</strong>, με τα εμβληματικά μνημεία όπως η Φοντάνα ντι Τρέβι και το Κολοσσαίο,</li>
                    <li>το <strong>Βατικανό</strong>,</li>
                    <li>και το <strong>Trastevere</strong>, η πιο αυθεντική και μποέμ γειτονιά της Ρώμης.</li>
                </ul>

                <p className="mb-4 text-justify">
                    Για να καλύψεις τα βασικά αξιοθέατα, χρειάζεσαι τουλάχιστον τρεις γεμάτες μέρες.
                </p>

                {/* Widget */}

                <div className="mt-8">
                    <Widget2 items={barcelonaItems} />
                </div>
                {/* Main sector */}

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το αεροδρόμιο της Ρώμης στο κέντρο
                    </h2>
                    <p className="mb-4 text-justify">
                        Η Ρώμη έχει δύο αεροδρόμια:
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>
                            <strong>Φιουμιτσίνο (Fiumicino):</strong>  εξυπηρετεί τις περισσότερες αεροπορικές. Ο πιο γρήγορος τρόπος είναι το τρένο <strong>Leonardo Express (14€)</strong>, που σε αφήνει απευθείας στο Termini. Εναλλακτικά, υπάρχει το πιο οικονομικό <strong>FL1 (8€)</strong> ή λεωφορείο <strong>(~5€)</strong>.
                        </li>
                        <li>
                            <strong>Τσιαμπίνο (Ciampino):</strong>  κυρίως για low-cost εταιρείες. Από εκεί έχει μόνο λεωφορεία, τα οποία κοστίζουν περίπου <strong>5€</strong> και χρειάζονται μία ώρα για το κέντρο Termini.
                        </li>
                    </ul>

                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-q="Rome"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/rome-l33/">GetYourGuide</a></span></div>                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Μετακινήσεις στην Ρώμη
                    </h2>
                    <p className="mb-4 text-justify">
                        Η Ρώμη είναι πόλη για περπάτημα! Τα περισσότερα αξιοθέατα βρίσκονται σε κοντινή απόσταση το ένα από το άλλο. Μόνο σε λίγες περιπτώσεις (π.χ. πρωί για το Βατικανό ή αργά το βράδυ) χρειαστήκαμε λεωφορείο. Ένα απλό εισιτήριο διάρκειας 100 λεπτών κοστίζει 1,50€. Μπορείτε να δείτε τις τιμές τους εδώ: https://www.atac.roma.it/en/tickets-and-passes
                    </p>

                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Ρώμη Αξιοθέατα – Πρόγραμμα 3 ημερών
                    </h2>
                    <p className="mb-4 text-justify">
                        Το πρόγραμμα που ακολουθήσαμε ήταν 3 ημερών, καθώς την πρώτη ημέρα δεν είχαμε αρκετό χρόνο να δούμε πολλά πράγματα, παρά μόνο να δούμε λίγο το ιστορικό κέντρο φωτισμένο το βράδυ και να πάρουμε μια μικρή γεύση από την πόλη. Χωρίσαμε σε 2 μέρες το ιστορικό κέντρο και την Βίλλα Μποργκέσε και σε μια ημέρα το Βατικανό συνδυαστικά με βόλτα στο Trastevere.                     </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Την πρώτη ημέρα θα ξεκινήσουμε από την περιοχή του <strong>Κολοσσαίου</strong> και να δούμε όλα τα κοντινά αξιοθέατα. Σίγουρα αν θέλετε να επισκεφτείτε το Κολοσσαίο να έχετε αγοράσει το εισιτήριο σας από πριν καθώς υπάρχει πολύς κόσμος και εξαντλούνται. Η αλήθεια είναι ότι δεν μας εντυπωσίασε το εσωτερικό του, έχουμε ακούσει ότι η περιήγηση με ξεναγό μπορεί να σου δώσει άλλη διάσταση στην επίσκεψη.
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            Ξεκινάμε την μέρα από την βασιλική της <strong>Santa Maria Maggiore</strong>, η είσοδος είναι δωρεάν.
                        </li>
                        <li>
                            Επόμενο στην λίστα είναι η <strong>Basilica of San Clemente</strong>, η οποία δεν εντυπωσιάζει ιδιαίτερα εξωτερικά ή εσωτερικά. Αυτό που αξίζει όμως είναι οι κατακόμβες που βρίσκονται από κάτω με αρχαιολογικά στρώματα 2.000 ετών. Θα πρέπει να έχετε κάνει κράτηση online (κόστος 10€). Η είσοδος στην εκκλησία είναι δωρεάν.
                        </li>
                        <li>
                            Και μετά, φυσικά, το <strong>Κολοσσαίο</strong>. Σήμα κατατεθέν της Ρώμης, που κάποτε φιλοξενούσε πάνω από 50.000 θεατές. Λέγεται μάλιστα ότι σε ορισμένες περιπτώσεις το γέμιζαν με νερό για να αναπαραστήσουν ναυμαχίες. Προτείνω οπωσδήποτε να έχετε αγοράσει τα εισιτήρια από πριν (18€, συνδυαστικά με <strong>Παλατίνο Λόφο</strong> & <strong>Ρωμαϊκή Αγορά</strong>).
                        </li>
                        <li>
                            Το εισιτήριό σας είναι συνδυαστικό και περιλαμβάνει και τον <strong>Παλατίνο Λόφο</strong>, καθώς και τη <strong>Ρωμαϊκή Αγορά</strong> που βρίσκονται ακριβώς δίπλα. Η κεντρική είσοδος της αγοράς, δεξιά από την <strong>Αψίδα του Τίτου</strong>, είναι σχεδόν πάντα γεμάτη κόσμο· όμως αν στρίψετε αριστερά και συνεχίσετε ευθεία, θα βρείτε μια δεύτερη είσοδο με πολύ λιγότερη αναμονή. Η περιήγηση στο εσωτερικό θα σας πάρει αρκετή ώρα να το περπατήσετε όλο.
                        </li>
                        <li>
                            Μόλις βγείτε από την αγορά θα βρίσκεται αρκετά κοντά στο <strong>Καπιτώλιο Vittorio Emanuele</strong> – το τεράστιο λευκό νεοκλασικό κτήριο που οι Ρωμαίοι αποκαλούν χαϊδευτικά «η τούρτα του γάμου». Δεξιά από το μνημείο αυτό υπάρχουν μερικά σκαλάκια, ανεβείτε τα για τα δείτε την <strong>Piazzale Caffarelli</strong>, θα βρείτε πάνω διάφορα αγάλματα και νεοκλασικά κτήρια. Αν ψάξετε το <strong>Belvedere Tarpeo</strong> θα βρείτε ένα πολύ καλό spot για φωτογραφίες με την αγορά στο φόντο.
                        </li>
                    </ul>

                    {/* <ImageGallery images={firstDayImages} /> */}
                </div>

                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Συνεχίζοντας στο ιστορικό κέντρο θα δούμε τα υπόλοιπα αξιοθέατα της Ρώμης.
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            Καλό είναι να ξεκινήσουμε από την <strong>Piazza Navona</strong>, μια πλατεία με μπαρόκ σιντριβάνια – εκεί βρίσκεται και το αριστούργημα του Μπερνίνι, το <strong>Σιντριβάνι των Τεσσάρων Ποταμών</strong>.
                        </li>
                        <li>
                            Σε κοντινή απόσταση σε ένα από τα πολλά στενά, βρίσκεται το <strong>Arco degli Acetari</strong>, ωραίο spot για φωτογραφίες.
                        </li>
                        <li>
                            Επόμενο μέρος της λίστας μας είναι το <strong>Πάνθεον</strong>. Ο τεράστιος θόλος του παραμένει μέχρι σήμερα ο μεγαλύτερος μη-οπλισμένος τσιμεντένιος θόλος στον κόσμο. Όταν είχαμε επισκεφτεί εμείς την πόλη η είσοδος ήταν δωρεάν, αλλά πλέον έχει είσοδο 5 EUR για να δείτε το εσωτερικό.
                        </li>
                        <li>
                            Δεξιά, όπως βγείτε από το <strong>Pantheon</strong>, αν πάρετε την Via del Seminario, θα βρείτε την εκκλησία με τον καθρέφτη στο εσωτερικό, <strong>Chiesa di Sant Ignazio di Loyola</strong>, η είσοδος είναι ελεύθερη. Απλά έχει πολύ κόσμο που περιμένουν να βγάλουν φωτογραφία με τον καθρέφτη.
                        </li>
                        <li>
                            Μόλις τελειώσετε, μπορείτε να δείτε και το <strong>Hadrian Temple</strong>, εκεί έχει ένα εσωτερικό χώρο με εκθέματα, ο οποίος είναι δωρεάν. Εκεί το βράδυ είναι πολύ ωραία να πιείτε το ποτό σας.
                        </li>
                        <li>
                            Φυσικά ήρθε η ώρα για την ιστορική <strong>Trevi Fountain</strong>, <strong>Φοντάνα ντι Τρέβι</strong>. Σύμφωνα με την παράδοση, αν ρίξεις ένα κέρμα, θα ξαναγυρίσεις στη Ρώμη, δύο κέρματα σημαίνουν ότι θα βρεις τον έρωτα και τρία ότι θα παντρευτείς. Δυστυχώς όποια ώρα και να περάσαμε είχε πάρα πολύ κόσμο για να το απολαύσεις αλλά σίγουρα πρόκειται για ένα από το πιο όμορφα μνημεία που έχουμε δει ποτέ. Από εδώ σίγουρα πρέπει να έρθετε και βράδυ για να την δείτε φωτισμένη.
                        </li>
                        <li>
                            Αφού κάνετε κάποιο διάλλειμα συνεχίστε προς τα <strong>Piazza di Spagna</strong> με τα ιστορικά <strong>Ισπανικά σκαλιά</strong>. Εκεί θα βρείτε και τη διάσημη κρήνη που ονομάζεται <strong>Barcaccia</strong>, γλυπτό του Μπερνίνι. Αν ανεβείτε τα σκαλιά στην κορυφή θα δείτε και μια εκκλησία <strong>Trinità dei Monti</strong>.
                        </li>
                        <li>
                            Συνεχίζοντας ευθεία θα βρείτε τη <strong>Villa Borghese</strong>, το μεγαλύτερο πάρκο της Ρώμης. Η είσοδος είναι δωρεάν. Μπορείτε να νοικιάστε να κάνετε βαρκάδα στην λίμνη.
                        </li>
                        <li>
                            Τέλος, έχουμε την <strong>Piazza del Popolo</strong> με τους εντυπωσιακούς <strong>Οβελίσκους</strong> και δυο «δίδυμες» εκκλησίες να βρίσκονται πάνω και κάτω, την <strong>Basilica Parrocchiale Santa Maria del Popolo</strong> και την <strong>Santa Maria in Montesanto Basilica</strong>.
                        </li>
                    </ul>

                    <div className="mb-6">
                    </div>

                    {/* <ImageGallery images={secondDayImages} /> */}
                </div>


                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        3η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η τελευταία ημέρα είναι αφιερωμένη στο <strong>Βατικανό</strong> και θα συνδυαστεί με βόλτα στο <strong>Τραστεβέρε</strong>. Το πιο σημαντικό είναι να έχετε κλείσει από πολύ νωρίς τα εισιτήριά σας για το <strong>Μουσείο του Βατικανού</strong>, καθώς αυτά είναι ανάρπαστα. Οι ουρές που δημιουργούνται από έξω είναι τεράστιες και θα χάσετε πάρα πολύ χρόνο. Το κόστος του εισιτηρίου είναι 25 EUR.
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            Ξεκινάμε λοιπόν από το <strong>Μουσείο του Βατικανού</strong>. Μπορείτε να φτάσετε και με το μετρό, κατεβαίνετε στην στάση <strong>Ottaviano</strong>. Είναι σημαντικό να πάτε ακριβώς στην ώρα που αναγράφεται στο εισιτήριο γιατί δεν θα σας βάλουν νωρίτερα. Αποκορύφωμα είναι η <strong>Καπέλα Σιξτίνα</strong> με τις τοιχογραφίες του <strong>Μιχαήλ Αγγέλου</strong>, το μόνο σημείο που απαγορεύονται οι φωτογραφίες. Πρόκειται για ένα πολύ μεγάλο μουσείο και θα χρειαστείτε τουλάχιστον 3 ώρες για να το γυρίσετε όλο.
                        </li>
                        <li>
                            Μετά συνεχίστε με την εκκλησία του <strong>Αγίου Πέτρου</strong>, η είσοδος είναι δωρεάν όμως η ουρά που δημιουργείται είναι τεράστια λόγω του ελέγχου κατά την είσοδο. Αφού περάσετε τον έλεγχο δίπλα από την εκκλησία υπάρχει ένα ταμείο που βγάζει εισιτήρια για την κορυφή της εκκλησίας. Το κόστος είναι 6 EUR. Από εκεί θα έχετε θέα όλη την <strong>πλατεία του Αγίου Πέτρου</strong>.
                        </li>
                        <li>
                            Πολύ κοντά από την πλατεία, φεύγοντας θα βρείτε το κάστρο <strong>Sant Angelo</strong>, που ξεκίνησε ως μαυσωλείο του αυτοκράτορα <strong>Αδριανού</strong>. Το κάστρο είναι πολύ εντυπωσιακό εξωτερικά, βγάλτε φωτογραφία στην <strong>St. Angelo Bridge</strong>. Μπορείτε να μπείτε στο εσωτερικό και να δείτε το εσωτερικό. Το πιο εντυπωσιακό είναι η κορυφή με θέα όλη την Ρώμη. Το κόστος είναι 16 EUR.
                        </li>
                    </ul>

                    <p className="mb-4 text-justify">
                        Φεύγοντας μπορείτε να είτε να περπατήσετε παραλιακά τον <strong>Τίβερη</strong> (περίπου μισή ώρα περπάτημα) είτε να πάρετε ένα λεωφορείο για να φτάσετε στο <strong>Trastevere</strong>. Είναι μια πολύ γραφική περιοχή με πολλά γραφικά σοκάκια και γεμάτη με εστιατόρια και μαγαζιά. Μπορείτε να περάσετε από την <strong>Basilica of Santa Maria in Trastevere</strong>.
                    </p>
                    <div className="mb-6">
                    </div>

                    {/* <ImageGallery images={secondDayImages} /> */}
                </div>

                <div className="mt-8 mb-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Φαγητό στην Ρώμη
                    </h2>
                    <p className="mb-4 text-justify">
                        Για πρωινό επισκεφτήκαμε το <strong>Antico Forno Roscioli</strong>, έναν φούρνο γεμάτο με εκπληκτικά πράγματα, ολόφρεσκα γλυκά και αλμυρά. Ωραίες επιλογές είναι επίσης το <strong>Forno Campo de Fiori</strong> και το <strong>L Antico Forno Di Fontana Di Trevi</strong>. Όπως και το <strong>Homebaked Porta Cavalleggeri</strong> που βρίσκεται κοντά στο Βατικανό.
                    </p>

                    <p className="mb-4 text-justify">
                        Για πανίνι δοκιμάσαμε το viral <strong>All Antico Vinaio</strong> με πολλές επιλογές όπως και το <strong>Pane e Salame</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Από τα εστιατόρια επισκεφτήκαμε το διάσημο <strong>Osteria de Fortunata</strong> το οποίο είναι πολύ ακριβό, το <strong>Mariuccia</strong> με πολύ τίμια πιάτα. Μερικές ακόμα οικονομικές επιλογές που βρήκαμε είναι το <strong>Escosazio</strong>, <strong>Maccheroni</strong>, <strong>Trattoria Da Enzo al 29</strong>, <strong>Cantina & Cusina</strong> και το <strong>Nannarella</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Ειδική αναφορά πρέπει να γίνει στο <strong>Tonnarello</strong>, στο οποίο δεν μπορέσαμε να κάτσουμε γιατί είχε πάρα πολύ μεγάλη ουρά και θεωρείτε από τα καλύτερα και βρίσκετε στο <strong>Trastevere</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Για παγωτό επισκεφτήκαμε το <strong>Frigidarium</strong> (αυτό μας άρεσε περισσότερο από όλα), το <strong>Günther</strong> & το <strong>Gioliti</strong> και για τιραμισού το <strong>Mr. 100</strong> και το <strong>Two Sizes</strong>.
                    </p>

                </div>
                <div className="mt-8 mb-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        5. Επιπλέον δραστηριότητες στην Ρώμη
                    </h2>
                    <p className="mb-4 text-justify">
                        Επιπλέον αξιοθέατα στην Ρώμη τα οποία δεν χώρεσαν στο πρόγραμμα μας είναι τα εξής:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Μονοήμερη στο Τίβολη</strong>: Αν έχετε περισσότερες μέρες στην Ρώμη, μπορείτε να κάνετε μια μονοήμερη εκδρομή στο Τίβολη, που βρίσκεται περίπου 30 χιλιόμετρα ανατολικά της Ρώμης. Εκεί θα βρείτε την <strong>Villa d Este</strong>, γνωστή για τους εντυπωσιακούς κήπους και τα σιντριβάνια της, και την <strong>Villa Adriana</strong>, ένα αρχαίο ρωμαϊκό συγκρότημα που ήταν η εξοχική κατοικία του αυτοκράτορα Αδριανού.
                        </li>

                    </ul>
                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="33" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>
            </div>
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>



    )
}

export default Rome