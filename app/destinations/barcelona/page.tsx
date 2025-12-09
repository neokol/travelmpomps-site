import React from 'react'
import Navbar from '@/app/components/Navbar'
import { ImageGallery } from '@/app/components/ImageGallery'
import { Widget2 } from '@/app/components/Widget2'
import { FaCoins } from "react-icons/fa";
import { VscRadioTower } from "react-icons/vsc";
import { GiPassport } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import Image from 'next/image';
import { ImageAccordion } from '@/app/components/ImageAccordion';
import { PageFooter } from "@/app/components/Footer"
import Script from 'next/script'
// import Head from 'next/head';
import { Metadata } from 'next';

const barcelonaItems = [
    {
        name: 'Νόμισμα',
        icon: <FaCoins className="w-5 h-5" />,
        content: 'Το νόμισμα που χρησιμοποιούν είναι το ευρώ. Στα περισσότερα μαγαζιά δέχονται κάρτα αλλά είναι καλό να έχετε μαζί σας μερικά μετρητά',
    },
    {
        name: 'Roaming',
        icon: <VscRadioTower className="w-5 h-5" />,
        content: 'Η Ισπανία ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας',
    },
    {
        name: 'Έγγραφα',
        icon: <GiPassport className="w-5 h-5" />,
        content: 'Ταυτότητα/Διαβατήριο',
    },
    {
        name: 'Γλώσσα',
        icon: <FaLanguage className="w-5 h-5" />,
        content: 'Φυσικά μιλάνε Ισπανικά/Καταλανικά, όμως στα περισσότερα μαγαζία μπορούσαν να μιλήσουν αγγλικά και ήταν αρκετά εύκολο να συννενοηθούμε',
    },
];




const barcelonaImages = [
    {
        image: '/barcelona/sagrada-familia.png',
        header: 'Sagrada Familia',
        text: 'Gaudí’s awe-inspiring basilica, an emblem of Barcelona with towering spires and intricate facades.'
    },
    {
        image: '/barcelona/casa-batllo.png',
        header: 'Casa Batllo',
        text: 'A vibrant Modernist masterpiece by Gaudí, famous for its striking, nature-inspired design.'
    },
    {
        image: '/barcelona/mercat-de-la-boqueria.png',
        header: 'Mercat de la Boqueria',
        text: 'A lively, historic market brimming with local flavors, fresh produce, and Catalan specialties.'
    },
    {
        image: '/barcelona/gothic-quarter.png',
        header: 'Gothic Quarter',
        text: 'Barcelona’s medieval core, where narrow cobblestone streets and hidden plazas reveal centuries of history.'
    },
    {
        image: '/barcelona/fc-barcelona-museum.png',
        header: 'FC Barcelona Museum',
        text: 'Immerse yourself in the rich legacy of one of the world’s greatest football clubs, showcasing trophies and memorabilia.'
    }
];


const firstDayImages = [
    {
        image: '/barcelona/cathedral-barcelona.png',
        header: 'Καθεδρικός'
    },
    {
        image: '/barcelona/la-rambla.png',
        header: 'La Rambla'
    },
    {
        image: '/barcelona/placa-reial.png',
        header: 'Placa Reial'
    },
    {
        image: '/barcelona/world-kiss.png',
        header: 'The World Comes To Life With Each Kiss'
    }
];

const secondDayImages = [
    {
        image: '/barcelona/palau-musica.jpg',
        header: 'Palau de la Musica'
    },
    {
        image: '/barcelona/barceloneta.png',
        header: 'Barceloneta'
    },
    {
        image: '/barcelona/ciutadella-park.jpg',
        header: 'Ciutadella Park'
    },
    {
        image: '/barcelona/Santa-Maria-del-Mar.png',
        header: 'Santa Maria del Mar'
    }
];

const thirdDayImages = [
    {
        image: '/barcelona/in-casa-batllo.png',
        header: 'Casa Batllo'
    },
    {
        image: '/barcelona/casa-milas.png',
        header: 'Casa Milas'
    },
    {
        image: '/barcelona/mercat.png',
        header: 'Mercat de la Boqueria'
    },
    {
        image: '/barcelona/sant-pau.png',
        header: 'Sant Pau'
    }
];

const fourthDayImages = [
    {
        image: '/barcelona/park-guell.png',
        header: 'Park Guell'
    },
    {
        image: '/barcelona/casa-vicens.png',
        header: 'Casa Vicens'
    },
    {
        image: '/barcelona/bellesguard.png',
        header: 'Torre Bellesguard'
    },
    {
        image: '/barcelona/cosmo-caixa.png',
        header: 'CosmoCaixa'
    }
];

const fifthDayImages = [
    {
        image: '/barcelona/barcelona-art.png',
        header: 'Art Museum'
    },
    {
        image: '/barcelona/fc-barca.png',
        header: 'FC Barcelona'
    },
    {
        image: '/barcelona/poble.png',
        header: 'Poble Espanyol'
    },
    {
        image: '/barcelona/monjuic.png',
        header: 'Montjuïc Castle'
    }
];

export const metadata: Metadata = {
    // Τίτλος: Πλήρης και ενημερωμένος
    title: "Βαρκελώνη: Τι να δω και τι να κάνω (Πλήρης Οδηγός 2025) | Travelmpomps",

    // Περιγραφή: Εστιάζουμε στον Γκαουντί (που ψάχνουν όλοι), στη Sagrada Família 
    // και στο φαγητό (tapas), που είναι η ψυχή της πόλης.
    description: "Ταξίδι στην καρδιά της Καταλονίας. Ο απόλυτος οδηγός για τη Βαρκελώνη: Sagrada Família, Park Güell, Γοτθική Συνοικία και τα καλύτερα tapas bars.",

    // Canonical URL
    alternates: {
        canonical: 'https://travelmpomps.gr/destinations/barcelona',
    },

    // Open Graph (Social Media)
    openGraph: {
        title: 'Βαρκελώνη: Γκαουντί, Παραλίες και Tapas',
        description: 'Ολα όσα πρέπει να δείτε στη Βαρκελώνη. Πλήρης οδηγός για αξιοθέατα, φαγητό και διαμονή στην πρωτεύουσα της Καταλονίας.',
        url: 'https://travelmpomps.gr/destinations/barcelona',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
    },
}

function Barcelona() {
    return (
        <div className="min-h-screen">
            {/* <Head>
                <title>Βαρκελώνη Αξιοθέατα</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/destinations/barcelona"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Ταξιδωτικός Οδηγός για την Βαρκελώνη | Τι να δω και τι να κάνω στην Βαρκελώνη"
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
                    Ταξίδι στη Βαρκελώνη: Η Πόλη του Γκαουντί και της Μεσογειακής Ζωής
                </h1>
                <p className="text-[#2E2E2F]">
                    Ανακαλύψτε την Βαρκελώνη μέσα από τον αναλυτικό οδηγό για 5 ημέρες στην πρωτεύουσα της Καταλονίας. Από την Sagrada Familia, την Γοτθική συνοικία έως την Barceloneta και την La Ramblas η Βαρκελώνη συνδυάζει την ιστορία με την νυχτερινή ζωή και την καλό φαγητό.
                </p>
                {/* Main picture */}
                <div className="flex justify-center my-8"> {/* Center the image */}
                    <Image
                        src="/barcelona/barcelona-hero.jpg"
                        width={1200} // Increase width for a wider image
                        height={600} // Adjust height proportionally
                        alt="Barcelona-arc-de-triumph"
                        className="rounded-lg shadow-lg w-full max-w-4xl" // Make it responsive and add styling
                        priority // Optimize loading for above-the-fold images
                    />
                </div>
                {/* Widget */}

                <div className="mt-8">
                    <Widget2 items={barcelonaItems} />
                </div>
                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το αεροδρόμιο στη Βαρκελώνη
                    </h2>
                    <p className='text-justify'>Όλες οι αεροπορικές εξυπηρετούν από το αεροδρόμιο Josep Tarradellas Barcelona-El Prat Airport (BCN). O ευκολότερος τρόπος για την μετακίνηση σας από το αεροδρόμιο προς το κέντρο της πόλης είναι το Aerobus. Το κόστος είναι 7.50 EUR για μια διαδρομή και 12.50 EUR με επιστροφή. Εναλλακτικά, υπάρχει και η επιλογή του λεωφορείου το οποίο το κόστος του εισιτηρίου είναι 5,70, όμως κάνει πολύ περισσότερη ώρα καθώς κάνει συχνές στάσεις.  Εισιτήρια για το πρώτο μπορείτε είτε να βγάλετε online είτε με το που βγείτε από το αεροδρόμιο θα βρείτε να μπλε μηχανήματα κοντά στην στάση.  </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Μετακινήσεις εντός της πόλης
                    </h2>
                    <p className='text-justify'>Η Βαρκελώνη είναι μια αρκετά μεγάλη πόλη. Υπάρχουν αρκετά αξιοθέατα τα οποία είναι σε πολύ μακρινή απόσταση από το κέντρο. Για παράδειγμα το γήπεδο και το μουσείο της ποδοσφαιρικής ομάδας της Barcelona, βρίσκεται εκτός κέντρου της πόλης και μπορείτε να φτάσετε εύκολα χρησιμοποιώντας το μετρό. Κατά κύριο λόγο χρησιμοποιήσαμε το μετρό για τις μετακινήσεις μας και το λεωφορείο για την ανάβαση στο Montjuïc.
                        <li>Μεμονωμένο εισιτήριο: 2,65 €</li>
                        <li>Μεμονωμένο εισιτήριο (10 διαδρομών): 12.55 €</li>
                        <li>Hola BCN Card: 2 μέρες / 48 ώρες:  18.10 €</li>
                        <li>Hola BCN Card: 3 μέρες / 72 ώρες: 26.30 €</li>
                        <li>Hola BCN Card: 4 μέρες / 96 ώρες: 34.40 €</li>
                        <li>Hola BCN Card: 5 μέρες / 120 ώρες: 42.10 €</li>
                        <li>Barcelona Card (3 ημέρες): 57 €</li>
                        <li>Barcelona Card (4 ημέρες): 67 €</li>
                        <li>Barcelona Card (5 ημέρες): 79 €</li>
                        H Barcelona Card προσφέρει πρόσβαση σε πολλά αξιόλογα μουσεία και έκπτωση σε αρκετά διάσημα αξιοθέατα. Τα διάσημα δημιουργήματα του Gaudi και η Sagrada Familia δεν περιλαμβάνονται μέσα στα δωρεάν μουσεία. Μπορείτε να βρείτε την λίστα με αυτά που προσφέρει εδώ
                    </p>
                </div>
                <div className='mt-8'><div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-cmp="Barcelona-post" data-gyg-partner-id="0OAQQKO" data-gyg-tour-ids="50027,398519,155979"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/sagrada-familia-l2699/">GetYourGuide</a></span></div></div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Διαμονή στην Βαρκελώνη
                    </h2>
                    <p className='text-justify'>Η Βαρκελώνη χωρίζεται σε συνοικίες. Τα καταλύματα στην γοτθική συνοικία και την  Eixample βρίσκονται στο κέντρο και δίνουν πρόσβαση στα περισσότερα αξιοθέατα. Φυσικά αυτά είναι και τα ακριβότερα καταλύματα. Εναλλακτικά, η συνοικία Gracia, έχει μεγαλύτερη απόσταση από το κέντρο όμως είναι λιγότερο τουριστική, έχει οικονομικότερες επιλογές και είναι ωραία ευκαιρία να εξερευνήσετε και αυτή την γειτονία. Ακόμα μια επιλογή είναι η Sarrià-Sant Gervasi είναι λιγότερο γραφική σε σχέση με την Gracia όμως παραμένει μια πολύ καλή επιλογή αφού έχετε πρόσβαση στο μετρό. Γενικά, αν σε κοντινή απόσταση από το κατάλυμα που επιλέξετε υπάρχει μετρό, η μετακινήσεις θα είναι εύκολες. </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">4. Top Αξιοθέατα στην Βαρκελώνη</h2>
                    <div className="flex justify-center">
                        <ImageAccordion items={barcelonaImages} />
                    </div>
                    <p className="mb-4 text-justify">
                        <strong>Sagrada Familia:</strong> Το διασημότερο έργο του Gaudi, η Sagrada Familia. Το αρχικό σχέδιο του Gaudí αποτελούταν από  συνολικά δεκαοκτώ κωδωνοστάσια, που αντιπροσωπεύουν σε αύξουσα σειρά ύψους τους Δώδεκα Αποστόλους, τους τέσσερις Ευαγγελιστές, την Παναγία και, ψηλότερο από όλους, τον Ιησού Χριστό. Το τελευταίο κωδωνοστάσιο θα έχει συνολικό ύψος του 172,5 και θα είναι λίγο μικρότερο από αυτό του λόφου Montjuïc (177 μέτρα) καθώς ο Γκαουντί πίστευε ότι η δημιουργία του δεν έπρεπε να ξεπερνά τη δημιουργία του Θεού. Το πίσω μέρος του ναού, πρόσοψη της Γέννησης, έχει σχεδιαστεί από τον Gaudi. Το μπροστά μέρος του ναού, πρόσοψη των παθών, σχεδιάστηκε μετά τον θάνατο του Gaudi και φαίνεται να έχει αρκετά μεταμοντέρνες επιρροές. Αξίζει να μπει φυσικά κανείς και στο εσωτερικού του ναού. Οι κολώνες του ναού συμβολίζουν τα δέντρα και μοιάζουν με ένα δάσος. Τα πολύχρωμα βιτρό δίνουν μια απίστευτη αίσθηση στο εσωτερικό του ναού. Αριστερά από την είσοδο θα βρείτε και το μουσείο του ναού, το οποίο περιλαμβάνετε στο εισιτήριο.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Casa Batlo:</strong> Ένα από τα διασημότερα δημιουργήματα του Gaudi. Βρίσκεται στον διάσημο δρόμο  Passeig de Gràcia, για εμάς είναι το ομορφότερο ανάμεσα από τα 3 σπίτια του Gaudi (Casa Vicens, La Pedrera). Στόχος του Gaudi ήταν να αποφύγει εντελώς τις ευθείες γραμμές, καθώς δεν είναι μέρος της φύσης. Μεγάλο μέρος της πρόσοψης είναι διακοσμημένο με ένα μωσαϊκό από σπασμένα κεραμικά πλακίδια που ξεκινά στις αποχρώσεις του χρυσού πορτοκαλί και μετατρέπεται σε πρασινωπό μπλε. Η οροφή είναι τοξωτή και μοιάζει με το πίσω μέρος ενός δράκου. Στο εσωτερικό αυτό που μας έκανε εντύπωση ήταν το Atrium (φωταγωγός) που βρίσκεται στο κεντρικό μέρος του σπιτιού και παρέχει αέρα και φωτισμό σε όλες τις γωνίες του σπιτιού. Διαθέτει παράθυρα με ξύλινα σχίσματα για να μπορούν να ανοίγουν και να κλείνουν για αερισμό, παρόμοια με τα βράγχια των ψαριών.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Mercat de la Boqueria:</strong>Η φημισμένη υπαίθρια αγορά της Βαρκελώνης. Είναι ένα μοναδικό μέρος – μίξης παράδοσης και τουρισμού. Ολόκληρο το μέρος είναι ένα παράθυρο στις ρίζες της υπέροχης γαστρονομίας της Καταλονίας. Μπορείτε να βρείτε να πάντα, αξίζει όμως να δοκιμάσετε τους φρέσκους χυμούς, τα empanadas, paella και πατάτες bravas.Όσες φορές περάσαμε ήταν γεμάτο κόσμο που δοκίμαζε διάφορες λιχουδιές.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Γοτθική συνοικία:</strong> Για πολλούς το αγαπημένο τους μέρος της πόλης. Εκεί θα βρείτε τα παλαιότερα μέρη της Βαρκελώνης, συμπεριλαμβανομένων των αρχαίων ρωμαϊκών τειχών και των μεσαιωνικών κτιρίων που συνδέονται όλα με στενά δρομάκια. Σήμερα, η γειτονιά είναι γεμάτη με μπαρ, κλαμπ και εστιατόρια.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>FC Barcelona Museum:</strong> Αν κάνετε ένα ταξίδι στην Βαρκελώνη αξίζει να επισκεφτείτε το μουσείο για το καμάρι της πόλης. Το μουσείο βρίσκεται δίπλα από το γήπεδο της μπασκετικής ομάδας και την μπουτίκ της ομάδας. Όλη η ιστορία της Barcelona μέσα από τρόπαια, στιγμές, πρόσωπα θα περάσουν από μπροστά σας. Από τον Messi και τον Puyol, τα τρόπαια του Champions League έως τον Cruyff και τον Laudrup.
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        5. Αξιοθέατα στην Βαρκελώνη - Οδηγός για Βαρκελώνη
                    </h2>
                    <p className='text-justify'>Τα αξιοθέατα στην Βαρκελώνη έχουν αρκετά μεγάλη απόσταση μεταξύ τους οπότε ένας καλός προγραμματισμός είναι απαραίτητος αν θέλουμε να δούμε όσο τα περισσότερα γίνεται. Ο παρακάτω οδηγός καλύπτει 5 μέρες στη Βαρκελώνη. Μπορείτε να προσαρμόσετε το δικό σας πρόγραμμα σύμφωνα με τα δικά σας ενδιαφέροντα </p>
                </div>
                <div className="mt-8">
                    <p className="mb-4 text-justify">
                        Το πρόγραμμα που ακολουθήσαμε εμείς ήταν 5 ημερών. Τα περισσότερα αξιοθέατα στην Βαρκελώνη είναι κοντά στο κέντρο. Όμως υπάρχουν και αρκετά τα οποία είναι εκτός κέντρου, όπως το Πάρκο Güell, το μουσείο της Barcelona και το CosmoCaixa. Μπορείτε να το προσαρμόσετε πάνω στα δικά σας γούστα.
                    </p>
                    <p className="mb-4 text-justify">
                        Αν τύχει να βρεθείτε στην Βαρκελώνη την πρώτη Κυριακή του μήνα θα έχετε την ευκαιρία να δείτε αρκετά αξιοθέατα δωρεάν όπως το μουσείο του Πικάσο και το Palau Güell. Όμως φροντίστε να έχετε κλείσει το εισιτήριο σας από νωρίς ηλεκτρονικά καθώς αυτά εξαντλούνται αμέσως. Μπορείτε να δείτε αναλυτικά εδώ ποια είναι αυτά τα μουσεία.
                    </p>
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η περιήγηση μας στην Βαρκελώνη δεν μπορεί να ξεκινήσει αλλού εκτός από το κέντρο της πόλης. Ένα από τα πιο κεντρικά σημεία είναι η <strong>Playa de Catalunya</strong> (πλατεία της Καταλονίας). Στην συγκεκριμένη πλατεία γίνεται η σύνδεση μεταξύ των δυο πιο διάσημων δρόμων στην Βαρκελώνη, την <strong>La Rambla</strong> και την <strong>Passeig de Gràcia</strong>. Θα ξεκινήσουμε από την <strong>La Rambla</strong>, τον πιο τουριστικό δρόμο της Βαρκελώνης, εδώ θα βρείτε αρκετά αξιοθέατα και πολλά τουριστικά μαγαζιά. Αριστερά, από την <strong>La Rambla</strong> βρίσκεται η <strong>Γοτθική Συνοικία (Gothic Quarter)</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Μέσα στην <strong>Γοτθική Συνοικία</strong> υπάρχουν αρκετά μέρη να εξερευνήσουμε. Ξεκινώντας από την <strong>Placa Reial</strong>, μια όμορφη πλατεία με πολλά εστιατόρια, φοίνικες και το πρώτο έργο του Gaudi, τις διάσημες λάμπες (<strong>Gaudi’s Lanterns</strong>).
                        Στην συνέχεια, μπορείτε να συνεχίσετε προς τα πάνω και την <strong>Basílica de Santa Maria del Pi</strong> πάνω στην <strong>Plaça del Pi</strong>, η είσοδος κοστίζει 8 ευρώ, εμείς επιλέξαμε να μην μπούμε στο εσωτερικό του ναού. Λίγο πριν τον <strong>καθεδρικό της Βαρκελώνης</strong>, υπάρχει ένα από τα πιο φωτογραφισμένα σημεία, το <strong>Carrer del Bisbe</strong>. Μην παραλείψετε να βγάλετε κι εσείς τις δικές σας φωτογραφίες.
                    </p>

                    <p className="mb-4 text-justify">
                        Συνεχίστε στον <strong>καθεδρικό ναό της Βαρκελώνης</strong>, παράδειγμα γοτθικής αρχιτεκτονικής με ψηλά καμπαναριά και λεπτομερή λιθοδομή. Ο καθεδρικός ναός κατασκευάστηκε από τον 13ο έως τον 15ο αιώνα. Τα παρεκκλήσια του καθεδρικού ναού περιέχουν όμορφα γοτθικά τοιχώματα που ζωγράφισαν μεταξύ άλλων οι Guerau Gener, Lluís Borrassà, Gabriel Alemany και Bernat Martorell. Το κόστος της εισόδου είναι 14 ευρώ, εισητήρια διαθέσιμα <a className="text-blue-600 underline" href='https://gyg.me/w82nnlMW'>εδώ</a>
                    </p>

                    <p className="mb-4 text-justify">
                        Μπορείτε να συνεχίσετε με το διάσημο <strong>The World Comes To Life With Each Kiss</strong>, το οποίο είναι ένα ψηφιδωτό δημιουργημένο από πραγματικές φωτογραφίες που σχηματίζουν ένα φιλί. Άλλα σημεία ενδιαφέροντος είναι το <strong>Μουσείο Ιστορίας της Βαρκελώνης (MUHBA)</strong>, η <strong>Plaça Sant Jaume</strong> όπου βρίσκεται το δημαρχείο της πόλης, και η πλατεία <strong>Plaça de Sant Felip Neri</strong> που βρίσκεται στην καρδιά της εβραϊκής γειτονιάς. Εκεί θα δείτε την εκκλησία του Αγίου Φιλίππου Νέρι που εξακολουθεί να φέρει σημάδια βομβαρδισμού από το 1938, κατά τη διάρκεια του Ισπανικού Εμφυλίου Πολέμου. Τέλος, μην ξεχάσετε να δοκιμάσετε ένα από τα sandwich από το <strong>Bo de B</strong>, ειδικά αν ψάχνετε κάτι οικονομικό, και να επισκεφτείτε το <strong>El Bosc de Les Fades</strong> για ένα ποτό.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Extra:</strong> Ένα ακόμα αξιοθέατο που αξίζει την προσοχή σας είναι το <strong>Palau Güell</strong>. Το κόστος είναι 12 ευρώ (δωρεάν με την <strong>Barcelona Card</strong>) και αποτελεί ένα από τα πρώτα έργα του Αντόνι Γκαουντί στη Βαρκελώνη. Βρίσκεται στην περιοχή Raval, λίγα μέτρα από τη <strong>La Rambla</strong>. Τμήματα της πρόσοψης του <strong>Palau Güell</strong> θυμίζουν βενετσιάνικο παλάτι, με τις δύο μεγάλες οβάλ πύλες στο μπροστινό μέρος να είναι ιδιαίτερα εντυπωσιακές.
                    </p>
                    <ImageGallery images={firstDayImages} />
                </div>

                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η δεύτερη ημέρα θα συνεχιστεί με την εξερεύνηση της υπόλοιπης γοτθικής συνοικίας και της συνοικίας <strong>El Born</strong> που είναι ουσιαστικά η συνέχειά της, με σκοπό να φτάσουμε μέχρι την παραλία και το ενυδρείο της Βαρκελώνης. Αρχικά, αν θέλετε να ξεκινήσετε τη μέρα σας με brunch, μια καλή επιλογή είναι το <strong>Bloome By Sasha</strong> ή το <strong>Gringa All Day</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Το πρώτο μέρος της λίστας μας είναι το <strong>Palau de la Musica</strong>, ένα αρτ νουβό μουσικό παλάτι 2200 θέσεων, διαθέσιμα εισητήρια <a className="text-blue-600 underline" href='https://gyg.me/1ggX2CP8'>εδώ</a>. Πρόκειται για μια έκρηξη χρωμάτων και το μοναδικό θέατρο στην Ευρώπη που φωτίζεται πλήρως από φυσικό φως, με εκπληκτική ακουστική. Σίγουρα μην παραλείψετε να δοκιμάσετε στο <strong>Jon Cake</strong> ένα κομμάτι βασκικό cheesecake ή ένα cinnamon roll από το <strong>Demasié</strong>. Συνεχίζοντας, στο πιο διάσημο αξιοθέατο της περιοχής, το <strong>μουσείο του Πικάσο</strong> (δωρεάν με την <strong>Barcelona Card</strong>), θα βρείτε την πιο εκτεταμένη συλλογή Πικάσο στον κόσμο. Το μουσείο φιλοξενεί πάνω από 4000 κομμάτια που προέρχονται κυρίως από τα χρόνια διαμόρφωσης του Πικάσο, τη Μπλε Περίοδο και τη θητεία του στη Βαρκελώνη. Ένα δωρεάν σημείο ενδιαφέροντος είναι το <strong>El Born Center for Culture and Memory</strong>, όπου μπορείτε να περπατήσετε ανάμεσα στα διατηρημένα ερείπια μιας γειτονιάς του 1700.
                    </p>

                    <p className="mb-4 text-justify">
                        Συνεχίστε στο <strong>Passeig Del Born</strong>, έναν διάσημο δρόμο, γεμάτο δέντρα, ανάμεσα στη <strong>Santa Maria del Mar</strong> και την αγορά, που αποτελεί το επίκεντρο της γειτονιάς <strong>El Born</strong>. Τέλος, η <strong>Basílica de Santa Maria del Mar</strong> είναι μια ακόμα εντυπωσιακή εκκλησία γοτθικού ρυθμού.
                    </p>

                    <p className="mb-4 text-justify">
                        Επόμενο σημείο είναι η <strong>αψίδα του θριάμβου της Βαρκελώνης</strong>, παρόμοια με αυτή του Παρισιού. Παίρνοντας τον δρόμο προς την παραλία από την αψίδα, θα βρεθείτε στο <strong>Ciutadella Park</strong>, ένα καταπράσινο πάρκο μέσα στην πόλη. Αξίζει να περάσετε να δείτε το σιντριβάνι του Gaudi, ένα έργο από την εποχή που ήταν ακόμα φοιτητής, το οποίο σχεδιάστηκε ώστε να μοιάζει με τη Φοντάνα ντι Τρέβι της Ρώμης. Αν έχει καλό καιρό, μην χάσετε την ευκαιρία για μια βαρκάδα στη λίμνη. Το κόστος είναι 7 ευρώ για μισή ώρα.
                    </p>

                    <p className="mb-4 text-justify">
                        Σε κοντινή απόσταση βρίσκεται η παραλία της Βαρκελώνης, η <strong>La Barceloneta</strong>, η διάσημη γειτονιά της πόλης με την παραλία. Μπορείτε να κατεβείτε στην παραλία και να περπατήσετε με στόχο να φτάσετε προς το διάσημο <strong>ξενοδοχείο W</strong>, που θα ξεχωρίζει από μακριά. Μπορείτε επίσης να περάσετε μέσα από τα στενά δρομάκια της γειτονιάς ώστε να φτάσετε στη <strong>Mercat de la Barceloneta</strong>, την υπαίθρια αγορά της περιοχής.
                    </p>

                    <p className="mb-4 text-justify">
                        Στην προκυμαία μπορείτε να δείτε το εμπορικό κέντρο <strong>Maremagnum</strong> και, αν θέλετε, να επισκεφτείτε το <strong>Ενυδρείο της Βαρκελώνης</strong>. Το κόστος είναι στα 27 ευρώ και θεωρείται το μεγαλύτερο και σημαντικότερο Μουσείο Θαλάσσιας Επιστήμης της Μεσογείου, με πάνω από 11.000 θαλάσσια ζώα από 450 είδη και μια υποβρύχια σήραγγα μήκους 80 μέτρων. Προμηθευτείτε τα εισητήρια σας από <a className="text-blue-600 underline" href='https://gyg.me/xD8BKuqz'>εδώ</a>.
                    </p>

                    <p className="mb-4 text-justify">
                        Τέλος, βγαίνοντας και με κατεύθυνση προς τη <strong>La Rambla</strong>, σε έναν κυκλικό κόμβο θα δείτε το <strong>μνημείο του Κολόμβου</strong>. Δίνεται η δυνατότητα να ανεβείτε και να δείτε τη θέα από ψηλά, με κόστος 8 ευρώ.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Extra:</strong> Δύο ακόμα μουσεία που μπορείτε να βρείτε στην περιοχή είναι το <strong>Moco Museum</strong>, με έργα μοντέρνας τέχνης (ιδανικό για τους λάτρεις των Banksy, Hirst, Warhol, Kaws και Kusama), καθώς και το <strong>Μουσείο Σοκολάτας</strong>, το όνειρο κάθε chocoholic. Θα δείτε την τέχνη της παρασκευής σοκολάτας και εκπληκτικά γλυπτά φτιαγμένα από σοκολάτα.
                    </p>
                    <ImageGallery images={secondDayImages} />
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        3η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η Τρίτη ημέρα μπορεί να ξεκινήσει από την <strong>Mercat de la Boqueria</strong>, τη διάσημη υπαίθρια αγορά της Βαρκελώνης. Είναι ένας εκπληκτικός συνδυασμός τουρισμού και ντόπιας κουλτούρας. Θα βρείτε φρούτα, λαχανικά, κρέατα, ψαρικά, αλλαντικά και οτιδήποτε σχετίζεται με το φαγητό. Αξίζει να έρθετε από νωρίς ώστε να αποφύγετε την πολυκοσμία.
                    </p>

                    <p className="mb-4 text-justify">
                        Στη συνέχεια, αφού ανεβείτε τη <strong>La Ramblas</strong> και φτάσετε στην <strong>Placa de Catalunya</strong>, συνεχίστε στην <strong>Passeig de Gràcia</strong>. Πρόκειται για τον δρόμο με πολλά εμπορικά μαγαζιά, συμπεριλαμβανομένων ακριβών οίκων μόδας, όπως Gucci και Prada. Το σημαντικότερο, όμως, είναι ότι εδώ θα συναντήσετε τα δύο διάσημα έργα του Gaudi, το <strong>Casa Batlló</strong> και τη <strong>La Pedrera (Casa Milà)</strong>. Εμείς επιλέξαμε να επισκεφτούμε μόνο το πρώτο, καθώς το θεωρούμε το πιο εντυπωσιακό από τα τρία σπίτια του Gaudi (μαζί με το <strong>Casa Vicens</strong>). Το κόστος εισόδου είναι 35 ευρώ (29 για το <strong>Casa Milà</strong>). Κλείστε το εισιτήριο νωρίς <a className="text-blue-600 underline" href='https://gyg.me/oqm4cvh2'>online</a>, καθώς υπάρχουν συγκεκριμένα slots. Το κτήριο είναι εντυπωσιακό, χωρίς καμία ευθεία γραμμή, και τα μπαλκόνια μοιάζουν να είναι φτιαγμένα από κόκαλα. Η οροφή θυμίζει πλάτη δράκου. Στο τέλος της περιήγησης, θα μπείτε σε ένα δωμάτιο γεμάτο οθόνες, όπου θα «βυθιστείτε» στο μυαλό του Gaudi.
                    </p>

                    <p className="mb-4 text-justify">
                        Λίγα μέτρα μακριά, θα βρείτε την <strong>Basílica de la Puríssima Concepció</strong>. Η είσοδος είναι δωρεάν και αξίζει να επισκεφτείτε τον κήπο της εκκλησίας. Ακριβώς απέναντι θα βρείτε το <strong>ONIS Coffee</strong>, μια εξαιρετική επιλογή αν θέλετε έναν καφέ πριν συνεχίσετε.
                    </p>

                    <p className="mb-4 text-justify">
                        Ο δρόμος μπροστά από το καφέ, αν θέλετε να συνεχίσετε με τα πόδια, θα σας οδηγήσει στο επόμενο αξιοθέατο, το <strong>Monumental</strong>, μια παλιά αρένα ταυρομαχίας η οποία πλέον χρησιμοποιείται για συναυλίες. Εμείς τη θαυμάσαμε εξωτερικά και συνεχίσαμε προς τα πάνω (στην αντίθετη πλευρά της παραλίας) για να φτάσουμε στη <strong>Sagrada Familia</strong>, το πιο σημαντικό αξιοθέατο και σήμα κατατεθέν της πόλης. Καλό είναι να προμηθευτείτε το εισιτήριό σας <a className="text-blue-600 underline" href='https://gyg.me/o9AKaDIX'>online</a> ώστε να μην περιμένετε στην ουρά (η είσοδος γίνεται από την πίσω πλευρά). Ένα ιδανικό σημείο για φωτογραφίες είναι το πάρκο ακριβώς πίσω από το μνημείο. Το κόστος εισόδου είναι 26 ευρώ. Έξω από τη <strong>Sagrada Familia</strong> θα βρείτε το <strong>BO&amp;MIE</strong>, έναν φούρνο με διάφορα αρτοσκευάσματα.
                    </p>

                    <p className="mb-4 text-justify">
                        Αν έχετε ακόμα αντοχές, συνεχίστε μέσω της <strong>Av. De Gaudi</strong> για να βρεθείτε μπροστά από το <strong>Recinte Modernista de Sant Pau</strong>. Χρησιμοποιήθηκε ως νοσοκομείο για έναν αιώνα και θεωρείται το κορυφαίο art-nouveau συγκρότημα της Ευρώπης. Το 1997 βραβεύτηκε ως Μνημείο Παγκόσμιας Κληρονομιάς από την UNESCO. Το κόστος εισόδου είναι 17 ευρώ.
                    </p>
                    <ImageGallery images={thirdDayImages} />
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        4η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Σε αυτή την ημέρα επιλέξαμε να εξερευνήσουμε την περιοχή <strong>Garcia</strong>. Αν θέλετε πρώτα ένα brunch, μπορείτε να επιλέξετε το <strong>EatMyTrip Brunch &amp; Coffee</strong>. Έπειτα, λίγα μέτρα μακριά θα βρείτε το <strong>Casa Vicens</strong>, ένα ακόμα σπίτι του <strong>Gaudi</strong>. Το κόστος εισόδου είναι 18 ευρώ. Το <strong>Casa Vicens</strong> είναι ένα από τα σημαντικά πρώιμα έργα του Αντόνι Γκαουντί που κατασκευάστηκε από το 1883 έως το 1889. Χτίστηκε ως η οικογενειακή κατοικία για τον Manuel Vicens, ο οποίος είχε επιχείρηση πλακιδίων στη Βαρκελώνη.
                    </p>

                    <p className="mb-4 text-justify">
                        Από εδώ είναι μια καλή ευκαιρία να εξερευνήσετε περαιτέρω την <strong>Garcia</strong> και να επισκεφθείτε την κεντρική πλατεία <strong>Plaça de la Vila de Gràcia</strong> καθώς και την <strong>Plaça de la Virreina</strong> με την εκκλησία <strong>San Joan Parish</strong>. Εδώ θα βρείτε αρκετά μαγαζιά για να δοκιμάσετε τα τοπικά tapas, μακριά από τις τουριστικές παγίδες.
                    </p>

                    <p className="mb-4 text-justify">
                        Επόμενο μέρος της λίστας μας είναι το <strong>Park Güell</strong>. Η απόσταση με τα πόδια είναι περίπου μισή ώρα, αλλά μπορείτε και να πάρετε λεωφορείο. Η είσοδος στο πάρκο είναι 18 ευρώ. Φροντίστε να έχετε κλείσει από νωρίς τα εισιτήρια <a className="text-blue-600 underline" href='https://gyg.me/18Wz5w0c'>online</a>, καθώς εξαντλούνται γρήγορα. Ο τοπικός επιχειρηματίας και κόμης Eusebi Güell ανέθεσε στον Antoni Gaudí να σχεδιάσει μια κατοικημένη περιοχή για πλούσιες οικογένειες. Η ιδέα του Güell ήταν να αναδημιουργήσει τις δημοφιλείς βρετανικές κατοικίες, γι’ αυτό το ονόμασε <strong>Park Güell</strong> αντί για <em>Parc Güell</em>. Το πρώτο που θα συναντήσει κάποιος είναι τα δύο μοντερνιστικά κτίρια, το <strong>Casa del Guarda</strong> (όπου κοιμόντουσαν οι θυρωροί), που σήμερα είναι μουσείο, και το <strong>Pabelló de Aministració</strong>, το οποίο στεγάζει κατάστημα με σουβενίρ. Συνεχίζοντας, θα δείτε το πιο διάσημο στοιχείο στο <strong>Park Güell</strong>, τον δράκο μήκους 2,4 μέτρων, ένα σιντριβάνι καλυμμένο με την τεχνική <em>trencadís</em> του Γκαουντί. Το πάρκο είναι αρκετά μεγάλο και αξίζει να περιηγηθείτε σε όλη την έκτασή του.
                    </p>

                    <p className="mb-4 text-justify">
                        Μόλις φύγετε από το πάρκο, σε κοντινή απόσταση θα βρείτε άλλα δύο ιδιαίτερα σημεία. Το μουσείο επιστημών <strong>CosmoCaixa</strong>, με είσοδο 8 ευρώ, το οποίο διαθέτει ένα εντυπωσιακό «τεχνητό δάσος», καθώς και το <strong>Bellesguard</strong>. Αρχικά, για να φτάσετε στο μουσείο, μπορείτε να πάρετε λεωφορείο από το <strong>Park Güell</strong>. Από εκεί, σε περίπου 10 λεπτά με τα πόδια, φτάνετε στο <strong>Torre Bellesguard</strong>, που σχεδιάστηκε από τον Γκαουντί μεταξύ 1900 και 1909 στην περιοχή Sarrià-Sant Gervasi. Βρίσκεται στη θέση ενός κάστρου που έχτισε ο βασιλιάς Martin the Humane, με θέα που προσφέρει υπέροχη πανοραμική εικόνα της πόλης.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Extra:</strong> Αν έχετε χρόνο, μπορείτε να επισκεφτείτε το <strong>Tidibao</strong>. Εκεί βρίσκεται το πάρκο αναψυχής, με ρόδα και τρενάκι λούνα παρκ, καθώς και το <strong>Museu Automates del Tibidabo</strong> (μουσείο μηχανημάτων αυτόματης πώλησης) στον χώρο του λούνα παρκ. Σε κοντινή απόσταση, θα βρείτε την εκκλησία <strong>Sagrada Corazón</strong>, που βασίστηκε στην <strong>Sacre Coeur</strong> του Παρισιού.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Πώς να φτάσετε:</strong> Πάρτε το τοπικό τρένο <strong>L7</strong> από την <strong>Plaça Catalunya</strong> προς τον τερματικό σταθμό <strong>Avinguda del Tibidabo</strong>. Από εκεί, περπατήστε περίπου 200 μέτρα ανηφορικά κατά μήκος της Λεωφ. del Tibidabo, όπου θα βρείτε αρκετές στάσεις λεωφορείων στα δεξιά σας. Πάρτε το λεωφορείο <strong>196</strong>, το οποίο σας μεταφέρει στον σταθμό της κοιλάδας του <strong>τελεφερίκ del Tibidabo</strong>. Στη συνέχεια, πάρτε το τελεφερίκ για να φτάσετε στο λούνα παρκ και τα αξιοθέατα.
                    </p>
                    <ImageGallery images={fourthDayImages} />
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        5η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Αυτή την ημέρα θα εξερευνήσουμε το μουσείο της ποδοσφαιρικής ομάδας της <strong>Barcelona</strong> και τα αξιοθέατα γύρω από το <strong>Montjuïc</strong>. Το πρώτο μέρος που επισκεφτήκαμε είναι το <strong>Μουσείο της Barcelona</strong>. Για να φτάσουμε εκεί, πήραμε το μετρό <strong>L5</strong> και κατεβήκαμε στη στάση <strong>Collblanc</strong>. Δυστυχώς, όταν το επισκεφτήκαμε, το γήπεδο της Barcelona, το <strong>Camp Nou</strong>, ήταν υπό ανακατασκευή, οπότε δεν υπήρχε η δυνατότητα να το δούμε από κοντά. Αφού ολοκληρώσαμε την περιήγηση στο μουσείο, συνεχίσαμε στην επίσημη μπουτίκ της ομάδας για τα απαραίτητα ψώνια και προχωρήσαμε στον επόμενο προορισμό.
                    </p>

                    <p className="mb-4 text-justify">
                        Επιβιβαστήκαμε ξανά στο μετρό <strong>L3</strong> από τη στάση <strong>Palau Reial</strong> και κατεβήκαμε στην <strong>Placa Espanya</strong>. Εκεί θα δείτε ένα εντυπωσιακό κτήριο που μοιάζει με γήπεδο, το <strong>Arenas de Barcelona</strong>, το οποίο λειτουργεί ως εμπορικό κέντρο. Από την άλλη πλευρά βρίσκεται το σιντριβάνι του <strong>Montjuïc</strong> και το <strong>Μουσείο Τέχνης της Καταλονίας</strong>. Η θέα από το κτήριο είναι υπέροχη και αξίζει να ανεβείτε μέχρι επάνω. Το εσωτερικό του μουσείου δεν μας εντυπωσίασε, οπότε δεν θα χάσετε πολλά αν δεν μπείτε.
                    </p>

                    <p className="mb-4 text-justify">
                        Επόμενο στη λίστα μας είναι το <strong>Ισπανικό χωριό (Poble Espanyol)</strong> με κόστος εισόδου 15 ευρώ. Πρόκειται για ένα υπαίθριο μουσείο με αντίγραφα 117 κτιρίων πραγματικής κλίμακας από διαφορετικές ισπανικές περιοχές. Θα βρείτε μια τυπική ανδαλουσιανή συνοικία, ένα τμήμα της Οδού του Αγίου Ιακώβου και παραδείγματα ρωμανικής μοναστικής αρχιτεκτονικής. Επίσης, έχει έναν χαρακτηριστικό δρόμο με πολύχρωμες ομπρέλες που κρέμονται στον ουρανό, αριστερά από την είσοδο.
                    </p>

                    <p className="mb-4 text-justify">
                        Αφού τελειώσετε την περιήγηση, βγείτε και αναζητήστε το λεωφορείο <strong>150</strong>, το οποίο θα σας μεταφέρει στο <strong>κάστρο του Montjuïc</strong>. Το κάστρο είναι εντυπωσιακό και καλοδιατηρημένο και προσφέρει πανοραμική θέα σε όλη τη Βαρκελώνη. Υπάρχει και η επιλογή του <strong>teleferic</strong>, αλλά εμείς δεν το προτιμήσαμε. Καθώς το λεωφορείο ανεβαίνει ή κατεβαίνει, κάνει στάση ακριβώς μπροστά από το <strong>Ολυμπιακό Στάδιο της Βαρκελώνης</strong>. Η είσοδος εκεί είναι ελεύθερη και χρησιμοποιείται προσωρινά ως έδρα της <strong>Barcelona</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Extra:</strong> Κοντά στην <strong>Placa Espanya</strong> θα βρείτε το <strong>Joan Miró Foundation</strong>. Το εισιτήριο κοστίζει 9 ευρώ και περιλαμβάνει πάνω από 10.000 πίνακες, σχέδια, γλυπτά, σκηνικά και χαλιά του Joan Miró — με τα πρώτα σχέδια να χρονολογούνται από το 1901. Στη βεράντα του τελευταίου ορόφου, μπορείτε να θαυμάσετε τα πολύχρωμα γλυπτά του Miró μαζί με μια εκπληκτική θέα της Βαρκελώνης.
                    </p>
                    <ImageGallery images={fifthDayImages} />
                </div>
                <div className='mt-8'><div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="45" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div></div>

            </div>
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>



    )
}

export default Barcelona