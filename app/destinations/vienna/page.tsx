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
        image: '/barcelona/sagrada-familia.webp',
        header: 'Sagrada Familia',
        text: 'Gaudí’s awe-inspiring basilica, an emblem of Barcelona with towering spires and intricate facades.'
    },
    {
        image: '/barcelona/casa-batllo.webp',
        header: 'Casa Batllo',
        text: 'A vibrant Modernist masterpiece by Gaudí, famous for its striking, nature-inspired design.'
    },
    {
        image: '/barcelona/mercat-de-la-boqueria.webp',
        header: 'Mercat de la Boqueria',
        text: 'A lively, historic market brimming with local flavors, fresh produce, and Catalan specialties.'
    },
    {
        image: '/barcelona/gothic-quarter.webp',
        header: 'Gothic Quarter',
        text: 'Barcelona’s medieval core, where narrow cobblestone streets and hidden plazas reveal centuries of history.'
    },
    {
        image: '/barcelona/fc-barcelona-museum.webp',
        header: 'FC Barcelona Museum',
        text: 'Immerse yourself in the rich legacy of one of the world’s greatest football clubs, showcasing trophies and memorabilia.'
    }
];


const firstDayImages = [
    {
        image: '/barcelona/cathedral-barcelona.webp',
        header: 'Καθεδρικός'
    },
    {
        image: '/barcelona/la-rambla.webp',
        header: 'La Rambla'
    },
    {
        image: '/barcelona/placa-reial.webp',
        header: 'Placa Reial'
    },
    {
        image: '/barcelona/world-kiss.webp',
        header: 'The World Comes To Life With Each Kiss'
    }
];

const secondDayImages = [
    {
        image: '/barcelona/palau-musica.webp',
        header: 'Palau de la Musica'
    },
    {
        image: '/barcelona/barceloneta.webp',
        header: 'Barceloneta'
    },
    {
        image: '/barcelona/ciutadella-park.webp',
        header: 'Ciutadella Park'
    },
    {
        image: '/barcelona/Santa-Maria-del-Mar.webp',
        header: 'Santa Maria del Mar'
    }
];

const thirdDayImages = [
    {
        image: '/barcelona/in-casa-batllo.webp',
        header: 'Casa Batllo'
    },
    {
        image: '/barcelona/casa-milas.webp',
        header: 'Casa Milas'
    },
    {
        image: '/barcelona/mercat.webp',
        header: 'Mercat de la Boqueria'
    },
    {
        image: '/barcelona/sant-pau.webp',
        header: 'Sant Pau'
    }
];

const fourthDayImages = [
    {
        image: '/barcelona/park-guell.webp',
        header: 'Park Guell'
    },
    {
        image: '/barcelona/casa-vicens.webp',
        header: 'Casa Vicens'
    },
    {
        image: '/barcelona/bellesguard.webp',
        header: 'Torre Bellesguard'
    },
    {
        image: '/barcelona/cosmo-caixa.webp',
        header: 'CosmoCaixa'
    }
];

const fifthDayImages = [
    {
        image: '/barcelona/barcelona-art.webp',
        header: 'Art Museum'
    },
    {
        image: '/barcelona/fc-barca.webp',
        header: 'FC Barcelona'
    },
    {
        image: '/barcelona/poble.webp',
        header: 'Poble Espanyol'
    },
    {
        image: '/barcelona/monjuic.webp',
        header: 'Montjuïc Castle'
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
                        <strong>Wieden:</strong> Βρίσκεται στην 4η συνοικία, είναι πολύ κοντά στο κέντρο και εκεί θα βρείτε και κάποιο από τα αξιοθέατα της πόλης. Όπως, η αγορά Naschmarkt, η εκκλησία St. Charles's Church και το μουσείο της Βιέννης.
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
                <div className="mt-8">
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
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        6. Οδηγός για 4 ημερών για την Βιέννη
                    </h2>
                </div>
                <div className="mt-8">

                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Αφού αφήσουμε τα πράγματα στο ξενοδοχείο, θα κατευθυνθούμε προς την πόλη ξεκινώντας από τα πιο κοντινά αξιοθέατα. Πρώτος μας σταθμός είναι το <strong>Palais Liechtenstein</strong> και το <strong>Liechtensteinpark</strong>. Αν υπάρχει κάποια δωρεάν έκθεση, αξίζει σίγουρα να την επισκεφθούμε και να δούμε το εσωτερικό του παλατιού.
                    </p>

                    <p className="mb-4 text-justify">
                        Στη συνέχεια, θα κατευθυνθούμε προς την <strong>Votive Church</strong>, μια καθολική εκκλησία νεογοτθικού ρυθμού, χτισμένη το 1879. Μπορούμε επίσης να επισκεφθούμε την <strong>Catholic Church Maria am Gestade</strong>, μια χαρακτηριστική γοτθική εκκλησία με εντυπωσιακή αρχιτεκτονική.
                    </p>

                    <p className="mb-4 text-justify">
                        Περίπου δύο χιλιόμετρα πιο μακριά, βρίσκεται το <strong>Hundertwasserhaus</strong>, τα πολύχρωμα και πρωτότυπα σπίτια που σχεδίασε ο Αυστριακός καλλιτέχνης Hundertwasser. Κοντά εκεί είναι και το <strong>Café Friedlich</strong> στο <strong>KunstHausWien Museum Hundertwasser</strong>, ιδανικό για ένα διάλειμμα με καφέ.
                    </p>

                    <p className="mb-4 text-justify">
                        Κατευθυνόμενοι προς το κέντρο της πόλης, μπορούμε να περάσουμε από το <strong>Wien Mitte The Mall</strong>, για λίγο shopping ή καφέ. Συνεχίζοντας, φτάνουμε στην πλατεία <strong>Hoher Markt</strong>, όπου βρίσκεται το <strong>Ankeruhr (Anker clock)</strong>. Κάθε ώρα εμφανίζεται μια διαφορετική φιγούρα, ενώ στις 12 το μεσημέρι όλες οι φιγούρες παρελαύνουν συνοδευόμενες από μουσική.
                    </p>

                    <p className="mb-4 text-justify">
                        Πριν προχωρήσουμε, αξίζει να περάσουμε από το <strong>PARÉMI</strong> για κάποιο φρέσκο κρουασάν και να δούμε την <strong>Jesuit Church</strong> και την <strong>Holy Trinity Greek Orthodox Church</strong>, που βρίσκεται στην ελληνική συνοικία της Βιέννης.
                    </p>

                    <p className="mb-4 text-justify">
                        Τέλος, στην <strong>Stephansplatz</strong>, θα επισκεφθούμε τον εντυπωσιακό <strong>Καθεδρικό Ναό του Αγίου Στεφάνου</strong>. Χτισμένος το 1147, ο ναός σχεδόν καταστράφηκε στον Β' Παγκόσμιο Πόλεμο και ανοικοδομήθηκε το 1952. Το ύψος του φτάνει τα 107 μέτρα, ενώ ο ψηλότερος πύργος φτάνει τα 137 μέτρα. Στον ναό φιλοξενείται και η διάσημη καμπάνα <strong>Pummerin</strong>, μία από τις μεγαλύτερες στην Ευρώπη.
                    </p>

                    <p className="mb-4 text-justify">
                        Στην ίδια περιοχή, θα βρούμε τη <strong>Στήλη της Πανώλης (Column of Pest)</strong>, που ανεγέρθηκε προς τιμήν όσων έχασαν τη ζωή τους από την πανώλη, καθώς και τον όμορφο <strong>ναό του Αγίου Πέτρου</strong> δίπλα.
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

export default Vienna