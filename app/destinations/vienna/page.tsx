import React from 'react'
import Navbar from '@/app/components/Navbar'
import { ImageGallery } from '@/app/components/ImageGallery'
import { Widget2 } from '@/app/components/Widget2'
import { FaCoins } from "react-icons/fa";
import { VscRadioTower } from "react-icons/vsc";
import { GiPassport } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import Image from 'next/image';
// import { ImageAccordion } from '@/app/components/ImageAccordion';
import { PageFooter } from "@/app/components/Footer"
import Script from 'next/script'
import Head from 'next/head';

const barcelonaItems = [
    {
        name: 'Νόμισμα',
        icon: <FaCoins className="w-5 h-5" />,
        content: 'Το νόμισμα που χρησιμοποιούν είναι το ευρώ. Στα περισσότερα μαγαζιά δέχονται κάρτα αλλά είναι καλό να έχετε μαζί σας μερικά μετρητά',
    },
    {
        name: 'Roaming',
        icon: <VscRadioTower className="w-5 h-5" />,
        content: 'Η Βιέννη ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας',
    },
    {
        name: 'Έγγραφα',
        icon: <GiPassport className="w-5 h-5" />,
        content: 'Ταυτότητα/Διαβατήριο',
    },
    {
        name: 'Γλώσσα',
        icon: <FaLanguage className="w-5 h-5" />,
        content: 'Φυσικά μιλάνε Γερμανικά, όμως στα περισσότερα μαγαζία μπορούσαν να μιλήσουν αγγλικά και ήταν αρκετά εύκολο να συννενοηθούμε',
    },
];




// const barcelonaImages = [
//     {
//         image: '/barcelona/sagrada-familia.webp',
//         header: 'Sagrada Familia',
//         text: 'Gaudí’s awe-inspiring basilica, an emblem of Barcelona with towering spires and intricate facades.'
//     },
//     {
//         image: '/barcelona/casa-batllo.webp',
//         header: 'Casa Batllo',
//         text: 'A vibrant Modernist masterpiece by Gaudí, famous for its striking, nature-inspired design.'
//     },
//     {
//         image: '/barcelona/mercat-de-la-boqueria.webp',
//         header: 'Mercat de la Boqueria',
//         text: 'A lively, historic market brimming with local flavors, fresh produce, and Catalan specialties.'
//     },
//     {
//         image: '/barcelona/gothic-quarter.webp',
//         header: 'Gothic Quarter',
//         text: 'Barcelona’s medieval core, where narrow cobblestone streets and hidden plazas reveal centuries of history.'
//     },
//     {
//         image: '/barcelona/fc-barcelona-museum.webp',
//         header: 'FC Barcelona Museum',
//         text: 'Immerse yourself in the rich legacy of one of the world’s greatest football clubs, showcasing trophies and memorabilia.'
//     }
// ];


const firstDayImages = [
    {
        image: '/vienna/Stephansplatz.jpg',
        header: 'Stephansplatz'
    },
    {
        image: '/vienna/demel.jpg',
        header: 'Demel'
    },
    {
        image: '/vienna/Votive_Church.png',
        header: 'Votive Church'
    },
    {
        image: '/vienna/MuseumsQuartier.png',
        header: 'MuseumsQuartier'
    }
];

const secondDayImages = [
    {
        image: '/vienna/Karlskirche.jpg',
        header: 'Karlskirche'
    },
    {
        image: '/vienna/Palais_Daun-Kinsky.png',
        header: 'Palais Daun-Kinsky'
    },
    {
        image: '/vienna/Albertina.png',
        header: 'Albertina'
    },
    {
        image: '/vienna/Belvedere.png',
        header: 'Belvedere'
    }
];

const thirdDayImages = [
    {
        image: '/vienna/Karlskirche.jpg',
        header: 'Karlskirche'
    },
    {
        image: '/vienna/Hofburg.jpg',
        header: 'Hofburg'
    },
    {
        image: '/vienna/Austrian_Parliament.jpg',
        header: 'Austrian Parliament'
    },
    {
        image: '/vienna/Sisi_museum.png',
        header: 'Sisi Museum'
    }
];

const fourthDayImages = [
    {
        image: '/vienna/Gloriette.jpg',
        header: 'Gloriette'
    },
    {
        image: '/vienna/Stadtpark.png',
        header: 'Stadtpark'
    },
    {
        image: '/vienna/Hundertwasser.png',
        header: 'Hundertwasser'
    },
    {
        image: '/vienna/Schonbrunn_Inside.png',
        header: 'Schonbrunn'
    }
];



function Vienna() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Βιέννη Αξιοθέατα</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/destinations/vienna"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Ταξιδωτικός Οδηγός για την Βιέννη | Τι να δω και τι να κάνω στην Βιέννη"
                    key="desc"
                />
            </Head>
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
                    Βιέννη τι να δω και τι να κάνω
                </h1>

                {/* Main picture */}
                <div className="flex justify-center my-8"> {/* Center the image */}
                    <Image
                        src="/vienna/vienna-hero.jpg"
                        width={1200} // Increase width for a wider image
                        height={600} // Adjust height proportionally
                        alt="vienna-palace"
                        className="rounded-lg shadow-lg w-full max-w-4xl" // Make it responsive and add styling
                        priority // Optimize loading for above-the-fold images
                    />
                </div>

                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Ανακαλύψτε την Βιέννη μέσα από τον αναλυτικό οδηγό για 4 ημέρες στην πρωτεύουσα της Αυστρίας. Το σπίτι των σνίτσελ, του Φρόιντ, του Μότσαρτ, των Αψβούργων, της όπερας, της τέχνης και πολλών ακόμα.
                </p>
                <p className="mb-4 text-justify">
                    Η Βιέννη έχει αμέτρητα μουσεία, παλάτια, αγορές, εστιατόρια, ιδιόμορφες εκθέσεις τέχνης, και γειτονεύει μια υπέροχη πόλη που είναι μόλις μια ώρα μακριά την Μπρατισλάβα.
                </p>
                <p className="mb-4 text-justify">
                    Υπάρχουν πολλά να κάνετε στη Βιέννη και μπορείτε εύκολα να περάσετε εβδομάδες προσπαθώντας να τα δείτε όλα. Στην πραγματικότητα, υπάρχουν πολλά που μπορείτε να κάνετε στην πόλη που είναι καλό να περάσετε μια επιπλέον μέρα εδώ. Αν νομίζετε ότι τρεις μέρες είναι αρκετές, περάστε τέσσερις. Αν είστε εδώ για τέσσερις, περάστε πέντε.
                </p>
                <p className="mb-4 text-justify">
                    Ανεξάρτητα από το πόσο καιρό σκοπεύετε να μείνετε στην πόλη, αυτός ο ταξιδιωτικός οδηγός για τη Βιέννη μπορεί να σας βοηθήσει να σχεδιάσετε το τέλειο ταξίδι στην πρωτεύουσα της Αυστρίας και να εξοικονομήσετε και μερικά χρήματα για μια αρκετά ακριβή πόλη.
                </p>

                {/* Widget */}

                <div className="mt-8">
                    <Widget2 items={barcelonaItems} />
                </div>
                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το αεροδρόμιο
                    </h2>
                    <p className='text-justify'>Μόλις φτάσετε στο αεροδρόμιο ΜΗΝ κάνετε το λάθος και πάρετε το CAT (cityairporttrain). Το οποίο κοστίζει 12 ευρώ. Αντιθέτως πάρτε τον απλό προαστιακό Schnellbahn (S-Bahn), γραμμή S7, με κατεύθυνση προς Floridsdorf και κατεβείτε στη στάση WienMitteLandstrabe (ή σε όποια άλλη στάση σας βολεύει) που είναι κέντρο της πόλης, και από εκεί πάρτε όποια γραμμή U (μετρό) ή τραμ θέλετε. Η διαφορά είναι μόνο 15 λεπτά παραπάνω από το CAT και το κόστος είναι μόνο 4.40 το άτομο, ενώ στην τιμή συμπεριλαμβάνεται και το μετρό (ή όποιο άλλο μέσο) στη συνέχεια πάρετε. Εισιτήρια θα βγάλετε από τα μηχανήματα στο S-Bahn (κόκκινα μηχανήματα OBB)</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Μετακινήσεις εντός της πόλης
                    </h2>
                    <p className='text-justify'>
                        Ο οικονομικότερος τρόπος μετακίνησης εντός της πόλης είναι οι δημόσιες συγκοινωνίες. Όλα τα μέσα στην Βιέννη είναι ασφαλή, γρήγορα και θεωρούνται από τα καλύτερα της Ευρώπης και όχι άδικα. Δεν βρήκαμε κάποιο μέρος που δεν εξυπηρετούν οι συγκοινωνίες. Υπάρχουν τέσσερις κύριες μορφές δημόσιων συγκοινωνιών: λεωφορείο (Autobus), τοπικό τρένο (S-Bahn), τραμ (Straßenbahn) και μετρό (U-Bahn).
                    </p>
                    <p className='text-justify mt-8'>
                        Ένα απλό εισιτήριο κοστίζει 2,40 EUR (ζώνη 1), μια κάρτα 24 ωρών κοστίζει 8 EUR, μια κάρτα 48 ωρών κοστίζει 14,10 EUR και μια κάρτα 72 ωρών κοστίζει 17,10 EUR.
                    </p>
                    <p className='text-justify mt-8'>
                        Εκτός από τα Vienna Tickets, υπάρχει και τη Vienna Card. Αυτή η κάρτα δεν παρέχει μόνο απεριόριστες μετακινήσεις με τα μέσα μεταφοράς, αλλά και εκπτώσεις σε πολλά αξιοθέατα και μουσεία.
                    </p>
                    <p className='text-justify mt-8'>
                        Η Vienna City Card είναι διαθέσιμη σε 4 διαφορετικές διάρκειες: € 17 (24 ώρες) / € 25 (48 ώρες) / € 29 (72 ώρες) / € 35 (7 ημερών).
                    </p>
                </div>
                <div className='mt-8'><div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-cmp="Barcelona-post" data-gyg-partner-id="0OAQQKO" data-gyg-tour-ids="50027,398519,155979"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/sagrada-familia-l2699/">GetYourGuide</a></span></div></div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Διαμονή
                    </h2>
                    <p className="mb-4 text-justify">
                        Η πόλη της Βιέννης χωρίζεται σε 23 συνοικίες (τα λεγόμενα districts). Ξεκινώντας με την πρώτη συνοικία στο κέντρο, είναι αριθμημένες από το 1-23, αλλά έχουν επίσης συγκεκριμένα ονόματα και ταχυδρομικούς κώδικες, όπου η περιοχή μπορεί να αναγνωριστεί από τους δύο αριθμούς στη μέση (για παράδειγμα η 8η συνοικία είναι το 1080).
                        Τα περισσότερα αξιοθέατα βρίσκονται εντός της 1ης συνοικίας όπου βρίσκεται το ιστορικό κέντρο αλλά και γύρω από αυτό σε μια κυκλική λεωφόρο που ονομάζεται Ringstrasse. Στην ουσία πρόκειται για τον εξωτερικό δακτύλιο που εσωκλείει το ιστορικό κέντρο της πόλης.

                    </p>
                    <p className="mb-4 text-justify">
                        Οπότε η εντός του ιστορικού κέντρου (Innere Stadt) είναι η καλύτερη περιοχή διαμονή στην Βιέννη, είναι όμως και η ακριβότερη. Οπότε, καλές εναλλακτικές είναι:                     </p>
                    <p className="mb-4 text-justify">
                        <strong>Neubau:</strong> Βρίσκεται στην 7η συνοικία και πρόκειται για μια νεανική και ζωντανή γειτονιά. Εδώ θα βρίσκεται μεγάλη πληθώρα από καφέ, εστιατόρια και bar τα οποία είναι λιγότερα τουριστικά και οικονομικότερα. Ένα από αυτά είναι το Schnitzel Wirt που έχει τα διάσημα βιενέζικα σνίτσελ και διάφορα πιάτα από την τοπική κουζίνα.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Karmeliterviertel:</strong> Βρίσκεται στην 2η συνοικία και είναι μια πιο ήσυχη συνοικία. Βρίσκεται στην αντίθετη πλευρά του καναλιού και έχει αρκετά εστιατόρια και bar σε κοντινή απόσταση, όπως είναι το Pizza Mari για αυθεντική ναπολιτάνικη πίτσα.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Wieden:</strong> Βρίσκεται στην 4η συνοικία, είναι πολύ κοντά στο κέντρο και εκεί θα βρείτε και κάποιο από τα αξιοθέατα της πόλης. Όπως, η αγορά Naschmarkt, η εκκλησία St. Charles Church και το μουσείο της Βιέννης.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Landstrasse:</strong> Στην 3η συνοικία, είναι μια μεγάλη περιοχή και θα βρείτε ένα μείγμα από πολυτελή εστιατόρια και ξενοδοχεία, καθώς και το πολυτελές μπαρόκ παλάτι Μπελβεντέρε. Το παλάτι περιβάλλεται από καταπράσινα πάρκα και πλούσια βλάστηση, καθιστώντας το ιδανικό σημείο για χαλάρωση τους καλοκαιρινούς μήνες.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Rossau:</strong>Τέλος το Rossau, που βρίσκεται στην 9η συνοικία είναι η οικονομικότερη επιλογή για κατάλυμα στην Βιέννη. Είναι μια πολύ ήσυχη περιοχή και βρίσκεται περίπου 20 λεπτά με τα πόδια μακριά από το ιστορικό κέντρο. Αυτήν ακριβώς την περιοχή επιλέξαμε για να μείνουμε. Όπως επίσης μπορείτε εύκολα να χρησιμοποιήσετε το τραμ ώστε να σας αφήσει στο κέντρο της πόλης. Η περιοχή είναι ήσυχη και πολύ ασφαλής καθώς ακόμα και το βράδυ δεν αντιμετωπίσαμε κανένα πρόβλημα.
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Budget Tips για το ταξίδι σας στην Βιέννη
                    </h2>

                    <p className="mb-4 text-justify">
                        <strong>Νερό:</strong> Το εμφιαλωμένο νερό στην Βιέννη είναι ακριβό, οπότε το καλύτερο είναι να αγοράζετε από τα super market. Τα νερά που αναγράφουν Ohne είναι χωρίς ανθρακικό και το γράφουν κυρίως επάνω στο καπάκι. Επίσης, μπορείτε να γεμίσετε το μπουκάλι σας από τις δωρεάν βρύσες που υπάρχουν μέσα στην πόλη.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Σουβενίρ:</strong> Τα σουβενίρ είναι αρκετά ακριβά στην Βιέννη, το μέρος με τα φθηνότερα που βρήκαμε είναι σε ένα μαγαζάκι στο Naschmarkt.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Πρωινό:</strong> Για να εξοικονομήσετε χρήματα, σε περίπτωση που το κατάλυμα σας δεν έχει πρωινό, μπορείτε να αγοράζετε διάφορα είδη φούρνου από το BILLA (super market) σε πολύ καλή τιμή.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Καφές:</strong> Ο καφές είναι αρκετά ακριβώς και κοστίζει περίπου 4 ευρώ είτε τον πάρεις στο χέρι είτε τον πιείς σε μαγαζί. Μπορείτε να πάρετε τον καφέ σας από τα McDonald’s καθώς είναι πολύ οικονομικότερος.
                    </p>
                    <p className="mb-4 text-justify">
                        <strong>Σνίτσελ:</strong>Αντί να πάτε στο τουριστικό και πολύ ακριβότερο, Figlmüller για το παραδοσιακό σνίτσελ μπορείτε να επιλέξετε το Schnitzel Wirt που κοστίζει μόνο 12,5 ευρώ και μπορούν άνετα να φάνε δύο άτομα.
                    </p>
                </div>
                {/* <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">5. Top Αξιοθέατα στην Βιέννη</h2>
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
                </div> */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        5. Οδηγός 4 ημερών για την Βιέννη
                    </h2>
                </div>
                <div className="mt-8">

                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η περιήγηση μας θα ξεκινήσει από το <strong>Palais Liechtenstein</strong> και το <strong>Liechtensteinpark</strong>. Αν υπάρχει κάποιο δωρεάν exhibition αξίζει να δούμε την έκθεση και το εσωτερικό του.
                    </p>

                    <p className="mb-4 text-justify">
                        Στη συνέχεια θα πάμε στην εντυπωσιακή <strong>Votive Church</strong>, μια καθολική εκκλησία νέο γοτθικού ρυθμού χτισμένη το 1879, η είσοδος είναι δωρεάν. Μπορούμε επίσης να δούμε την <strong>Catholic Church Maria am Gestade</strong>, μια εκκλησία γοτθικού ρυθμού.
                    </p>

                    <p className="mb-4 text-justify">
                        Μετά θα συνεχίσουμε την περιήγηση στο κέντρο του ιστορικού κέντρου με την πλατεία <strong>Hoher Markt</strong> και το <strong>Ankeruhr (Anker clock)</strong>. Κάθε ώρα εμφανίζεται μια διαφορετική φιγούρα (στις 12 εμφανίζονται όλες μαζί με μουσική συνοδεία). Ένα όμορφο καφέ με πολύ ωραία γλυκά είναι το <strong>PARÉMI</strong>. Επίσης σε κοντινή απόσταση βρίσκεται και η εκκλησία <strong>Jesuit Church</strong> και η <strong>Holy Trinity Greek Orthodox Church</strong>, που βρίσκεται στην ελληνική συνοικία της Βιέννης.
                    </p>

                    <p className="mb-4 text-justify">
                        Τέλος, συνεχίζοντας στην <strong>Stephansplatz</strong> θα δούμε τον Καθεδρικό Ναό του <strong>Αγ. Στεφάνου</strong>. Η εκκλησία αυτή χτίστηκε το 1147, κατά τον δεύτερο παγκόσμιο πόλεμο σχεδόν καταστράφηκε και χρειάστηκε ανοικοδόμηση το 1952. Το ύψος της είναι 107 μέτρα, ο ψηλότερος πύργος της είναι 137 μέτρα. Η είσοδος είναι δωρεάν αλλά υπάρχει εισιτήριο ώστε να ανεβείτε στους πύργους. Ακόμα, λίγα μέτρα μακριά υπάρχει η στήλη της πανώλης <strong>Column of Pest</strong>, μια στήλη που δημιουργήθηκε στην μνήμη όσων χάθηκαν από την πανώλη. Μια ακόμα εκκλησία που μπορείτε να εξερευνήσετε είναι αυτή του <strong>Αγ. Πέτρου (Peterskirche)</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Ακριβώς απέναντι από τον καθεδρικό υπάρχει ένα υποκατάστημα του <strong>Demel</strong> που δίνει σε πακέτο το διάσημο γλυκό <strong>Kaiserschmarrn</strong> και είναι ανοιχτό αρκετά πιο αργά από το κεντρικό κατάστημα.
                    </p>

                    <p className="mb-4 text-justify">
                        Η μέρα μπορεί να κλείσει με το <strong>MuseumsQuartier</strong>. Η πλατεία των μουσείων αποτελεί ένα από τα πιο δημοφιλή μέρη στην πόλη. Αν δεν θέλετε να δείτε όλα τα μουσεία που υπάρχουν εκεί, μπορείτε να απολαύσετε το ποτό σας στον εξωτερικό χώρο, είτε στα πανέμορφα παγκάκια που έχουν δημιουργηθεί είτε στα μαγαζιά. Ακόμα μπορείτε να ανεβείτε δωρεάν στο <strong>MQ Libelle</strong> ακριβώς πάνω από το <strong>Leopold Museum</strong>. Το ασανσέρ βρίσκεται αριστερά από το μουσείο.
                    </p>

                    <ImageGallery images={firstDayImages} />
                </div>

                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Θα ξεκινήσουμε από το <strong>Belvedere</strong>, μνημείο της <strong>UNESCO</strong>, και αποτελείται από δύο κτήρια το <strong>Upper</strong> και το <strong>Lower Belvedere</strong>, αξίζει περισσότερο η επίσκεψη στο <strong>Upper Belvedere</strong>. Φιλοξενεί την έκθεση του <strong>Gustav Klimt</strong>, με το διάσημο πίνακα του <strong>«The Kiss»</strong>. Θα συνεχίσουμε με μία βόλτα στους κήπους με κατεύθυνση προς το <strong>Lower Belvedere</strong>. (Ακόμα πιο πάνω από το Upper Belvedere υπάρχει και το <strong>Belvedere 21</strong>). Στη συνέχεια θα προχωρήσουμε στο <strong>Σοβιετικό Πολεμικό Μνημείο</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Θα συνεχίσουμε με κατεύθυνση στην πλατεία <strong>Karlskirche</strong>. Αν χρειαστούμε ένα διάλλειμα για καφέ μπορούμε να κάνουμε μια στάση στο <strong>«No Panic Coffee»</strong>. Εκεί, θα βρούμε την εκκλησία <strong>Ναό του Αγίου Καρόλου</strong>, ο ναός διαθέτει έναν εντυπωσιακό τρούλο και πλευρικές ανάγλυφες στήλες. Η εκκλησία είναι αφιερωμένη στον <strong>Άγιο Κάρολο Μπορομέο</strong>, τον προστάτη του αυτοκράτορα, ο οποίος φρόντιζε να θεραπεύει όσους ήταν άρρωστοι από πανώλη. Στην ίδια πλατεία βρίσκεται και το <strong>Μουσείο της Βιέννης</strong>, ένα μουσείο για την Ιστορία της Βιέννης με δωρεάν είσοδο.
                    </p>

                    <p className="mb-4 text-justify">
                        Επόμενος σταθμός είναι το <strong>Naschmarkt</strong>, την υπαίθρια αγορά της Βιέννης. Εδώ θα βρείτε λίγο οικονομικότερα souvenirs σε σχέση με την υπόλοιπη πόλη.
                    </p>

                    <p className="mb-4 text-justify">
                        Τέλος, το μουσείο <strong>Albertina</strong>, είναι ανοιχτό μέχρι τις 9 το βράδυ. Οπότε το απόγευμα μπορούμε να το επισκεφτούμε (είσοδος 20 ευρώ). Το μουσείο στεγάζεται σε ένα επιβλητικό παλάτι των <strong>Αψβούργων</strong> και περιλαμβάνει αριστουργήματα σύγχρονης τέχνης του ιμπρεσιονισμού και του μετα-ιμπρεσιονισμού, όπως ο <strong>Βαν Γκογκ</strong>, ο <strong>Μονέ</strong>, ο <strong>Τουλούζ-Λωτρέκ</strong>, ο <strong>Πικάσο</strong> και πολλών άλλων ακόμα. Ακόμα και αν δεν μπείτε στο μουσείο, το εξωτερικό του θα βρείτε πολύ κόσμο να κάθεται στα παγκάκια με την υπέροχη θέα της όπερας της Βιέννης. Ακριβώς από κάτω, υπάρχει η διάσημη καντίνα <strong>«Bitzinger Sausage Stand»</strong> με τα διάσημα hot-dog.
                    </p>
                    <ImageGallery images={secondDayImages} />
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        3η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η μέρα θα ξεκινήσει με το <strong>Austrian Parliament</strong> όπου δίνεται η δυνατότητα δωρεάν <strong>guided tour</strong>. Κλείστε από <a href="https://www.parlament.gv.at/erleben/fuehrungen/einzelpersonen/index.html?TERMIN_01TERMINART=F%C3%BChrung&TERMIN_01DATERANGE=2025-05-30T22%3A00%3A00.000Z&TERMIN_01DATERANGE=2025-05-31T23%3A59%3A59.999Z" className="text-blue-600 hover:underline">εδώ</a> το δωρεάν tour, σας δίνεται η δυνατότητα να δείτε το εσωτερικό και να σας μιλήσουν για το πολιτικό σύστημα της Αυστρίας. Το tour κλείνει με την αίθουσα που γίνονται οι συνελεύσεις της δικής τους Βουλής. Σχετικά με το εξωτερικό, έχει δημιουργηθεί ως αντίγραφο της <strong>Ακαδημίας των Αθηνών</strong>, με το άγαλμα της θεάς <strong>Αθηνάς</strong> στην είσοδο.
                    </p>

                    <p className="mb-4 text-justify">
                        Από εκεί, θα συνεχίσουμε με το <strong>Rathauspark</strong>, το πάρκο μπροστά στο Δημαρχείο της Βιέννης, με τριανταφυλλιές που αφιερώνουν οι Βιεννέζοι σε αγαπημένα τους πρόσωπα. Εκεί βρίσκεται φυσικά το δημαρχείο <strong>«Rathaus»</strong>, ένα νέο-γοτθικό κτήριο. Ακριβώς απέναντι από το δημαρχείο υπάρχει ένα τεράστιο κτίριο που είναι το <strong>Burgtheater</strong> (Εθνικό Θέατρο Βιέννης).
                    </p>

                    <p className="mb-4 text-justify">
                        Συνεχίζουμε στο <strong>Wiener Minoritenkirche</strong>, ένα κρυφό διαμάντι· στο εσωτερικό του θα δείτε ένα αντίγραφο του <strong>Μυστικού Δείπνου</strong> του Da Vinci. Συνεχίζουμε στο <strong>Palais Daun-Kinsky</strong>, ένα ακόμα δωρεάν αξιοθέατο, ιδανικό για φωτογραφίες. Δίπλα θα βρούμε το <strong>Ferstel Passage</strong>, πρόκειται για μια αγορά της Βιέννης, με πολλά μαγαζιά, καφέ και εστιατόρια.
                    </p>

                    <p className="mb-4 text-justify">
                        Από εκεί θα συνεχίσουμε στην πλατεία <strong>Am Hof</strong>. Μια ιστορική πλατεία της Βιέννης. Εκεί το Πάσχα ή τα Χριστούγεννα στήνονται οι αντίστοιχες αγορές.
                    </p>

                    <p className="mb-4 text-justify">
                        Το <strong>must-see</strong> αξιοθέατο εδώ είναι το παλάτι <strong>Hofburg</strong> και το <strong>Sisi Museum</strong>. Μέχρι το 1918, το Hofburg ήταν το αυτοκρατορικό παλάτι των <strong>Αψβούργων</strong>, σήμερα είναι η έδρα του Ομοσπονδιακού Προέδρου της Αυστρίας. Πρώτα όμως θα περάσουμε από την <strong>Heldenplatz</strong> και το <strong>Neue Burg</strong>· στο παρελθόν από αυτό το μπαλκόνι ο <strong>Hitler</strong> βγήκε για να ανακοινώσει την προσάρτηση της χώρας στο Γερμανικό Ράιχ. Μετά θα επισκεφτούμε το μουσείο <strong>Sisi Museum</strong> (περιλαμβάνεται στο <strong>Sissy ticket</strong> εισιτήριο). Πρόκειται για την χειμερινή κατοικία της βασιλικής οικογένειας των Hofburg. Βασική φιγούρα γύρω από την οποία περιστρέφεται η περιήγηση είναι φυσικά η πριγκίπισσα <strong>Σίσσυ</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Από εκεί θα προχωρήσουμε προς το πάρκο του λαού <strong>Volksgarten</strong>. Στο κέντρο του πάρκου βρίσκεται το πιο ωραίο κτίσμα, ο νεοκλασικός ναός του <strong>Θησέα</strong>. Δημιουργήθηκε το 1821 και αποτελεί μικρής κλίμακας αντίγραφο του Ναού του Ηφαίστου. Ακόμα ένα πάρκο που θα επισκεφτούμε είναι το <strong>Burggarten</strong>, εκεί θα βρίσκεται και το <strong>Μνημείο του Μότσαρτ</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Τέλος, σε κοντινή απόσταση βρίσκεται και το <strong>Wien Mitte The Mall</strong> για ψώνια σε ένα μεγάλο εμπορικό κέντρο.
                    </p>
                    <ImageGallery images={thirdDayImages} />
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        4η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Το <strong>σημαντικότερο αξιοθέατο</strong> εδώ θα είναι το <strong>παλάτι Schönbrunn</strong>. Πρόκειται για το παλάτι της <strong>Σίσσυ</strong>, <strong>Νο1 αξιοθέατο στη Βιέννη</strong>. Για να φτάσουμε εκεί θα πρέπει να πάρουμε το μετρό <strong>U4</strong> και να κατέβουμε στην ομώνυμη στάση.
                    </p>

                    <p className="mb-4 text-justify">
                        Το Παλάτι έχει σχεδόν <strong>απίστευτο αριθμό δωματίων</strong> - χτίστηκαν <strong>1.441 δωμάτια</strong> για τη θερινή κατοικία των αυτοκρατόρων. Σήμερα, μόνο <strong>45 είναι ανοιχτά στο κοινό</strong>, αλλά ακόμα κι έτσι, είναι εύκολο να φανταστείτε τη χλιδή του. Λόγω της ιστορίας, της αρχιτεκτονικής και του <strong>ροκοκό εσωτερικού</strong> σχεδιασμού, το <strong>Schönbrunn έχει ανακηρυχθεί Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Στο εξωτερικό, οι <strong>κήποι είναι πανέμορφοι</strong> και μπορείτε να περιηγηθείτε <strong>χωρίς εισιτήριο</strong>. Μέσα στους κήπους υπάρχουν αρκετά μονοπάτια για να εξερευνήσετε το δάσος. Στην πίσω πλευρά του παλατιού, σε ένα λόφο, υπάρχει το <strong>Gloriette</strong> - ένα εξαιρετικό κτήριο του 1775 που σήμερα λειτουργεί ως καφέ και προσφέρει <strong>πανοραμική θέα στη Βιέννη</strong>. Εκεί βρίσκεται επίσης και ο <strong>Ζωολογικός Κήπος της Βιέννης</strong>, ένας από τους παλαιότερους στην Ευρώπη.
                    </p>

                    <p className="mb-4 text-justify">
                        Προτού επιστρέψουμε στο κέντρο, θα κατευθυνθούμε προς το <strong>Stadtpark</strong>, που περιλαμβάνει πολλά αγάλματα διάσημων καλλιτεχνών, συνθετών και συγγραφέων - όπως το <strong>επιχρυσωμένο μπρούντζινο μνημείο του Γιόχαν Στράους ΙΙ</strong>. Για να φτάσουμε εκεί θα πάρουμε πάλι το <strong>U4</strong> και θα κατέβουμε στη στάση <strong>Stadtpark</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Θα πάρουμε ξανά το μετρό <strong>U4</strong>, θα αλλάξουμε στη γραμμή <strong>U1</strong> και θα κατέβουμε στο <strong>Vorgartenstraße</strong> για να επισκεφτούμε την εκκλησία <strong>St. Francis of Assisi</strong>. Από εκεί μπορούμε να ακολουθήσουμε τον δρόμο προς τη γέφυρα και τον <strong>Δούναβη</strong>, όπου θα έχετε την καλύτερη θέα της εκκλησίας.
                    </p>

                    <p className="mb-4 text-justify">
                        Από εκεί θα συνεχίσουμε προς το <strong>Prater</strong>, το μεγαλύτερο λούνα παρκ της πόλης και ένα από τα μεγαλύτερα στον κόσμο. Εκεί βρίσκεται η <strong>Riesenrad</strong>, η διάσημη ρόδα με ύψος <strong>200 μέτρων</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Τέλος, θα επισκεφτούμε το <strong>Hundertwasserhaus</strong>, τα εντυπωσιακά πολύχρωμα σπίτια του Αυστριακού <strong>Hundertwasser</strong>. Σε κοντινή απόσταση βρίσκεται και το <strong>Café Friedlich im KunstHausWien Museum Hundertwasser</strong>, το καφέ του μουσείου.
                    </p>
                    <ImageGallery images={fourthDayImages} />
                </div>
            </div>
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>



    )
}

export default Vienna