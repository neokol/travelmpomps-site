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
import Head from 'next/head';
import { Metadata } from 'next';

const barcelonaItems = [
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
    title: "Κρακοβία, τι να δω και τι να κάνω  | Travelmpomps",
    description: "Ταξιδωτικός Οδηγός για την Κρακοβία - Τι να δω και τι να κάνω στην Κρακοβία",
    keywords: "Κρακοβία, Πολωνία, ταξιδιωτικός οδηγός, αξιοθέατα, μεταφορές, διαμονή, δραστηριότητες, Κρακοβία αξιοθέατα, Κρακοβία ταξίδια, Κρακοβία διαμονή, Κρακοβία μεταφορές",
}

function Krakow() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Κρακοβία Αξιοθέατα</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/destinations/krakow"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Ταξιδωτικός Οδηγός για τη Κρακοβία | Τι να δω και τι να κάνω στην Κρακοβία"
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
                    Κρακοβία τι να δω και τι να κάνω
                </h1>

                {/* Main picture */}
                <div className="flex justify-center my-8"> {/* Center the image */}
                    <Image
                        src="/images/krakow-hero.jpg"
                        width={1200} // Increase width for a wider image
                        height={600} // Adjust height proportionally
                        alt="krakow-center"
                        className="rounded-lg shadow-lg w-full max-w-4xl" // Make it responsive and add styling
                        priority // Optimize loading for above-the-fold images
                    />
                </div>

                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η Κρακοβία, η παλιά πρωτεύουσα της Πολωνίας, θεωρείται μία από τις πιο καλοδιατηρημένες και όμορφες πόλεις της Ευρώπης. Με την επιβλητική Παλιά Πόλη (Stare Miasto), το εντυπωσιακό κάστρο Wawel και τα ιστορικά μνημεία της, η πόλη συνδυάζει μεσαιωνική ατμόσφαιρα με ζωντανή σύγχρονη κουλτούρα.                 </p>
                <p className="mb-4 text-justify">
                    Το ταξίδι μας έγινε τα Χριστούγεννα σε συνδυασμό με την Βαρσοβία. Ήταν μια ευχάριστη έκπληξη για εμάς καθώς είναι ένας οικονομικός προορισμός για τα Χριστούγεννα σε σχέση με άλλες πόλεις της Ευρώπης. Έχει πολύ ενδιαφέρον πράγματα να δεις ειδικά το Άουτσβιτς και τα αλατωρυχεία είναι μια εμπειρία που μένει αξέχαστη                </p>

                {/* Widget */}

                <div className="mt-8">
                    <Widget2 items={barcelonaItems} />
                </div>
                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το Αεροδρόμιο της Κρακοβίας
                    </h2>
                    <p className="mb-4 text-justify">
                        Το ταξίδι για εμάς ξεκίνησε από την Βαρσοβία και μεταφερθήκαμε με τρένο στην Κρακοβία. Οπότε δεν κάναμε την διαδρομή από την Κρακοβία στο κέντρο της πόλης. Όμως το αεροδρόμιο της Κρακοβίας είναι αρκετά κοντά στο κέντρο.                    </p>

                    <p className="mb-4 text-justify">
                        Το αεροδρόμιο John Paul II της Κρακοβίας (KRK) απέχει περίπου 12 χλμ. από το κέντρο. Για να φτάσετε στο κέντρο μπορείτε να πάρετε τρένο (Koleje Małopolskie), το οποίο κοστίζει περίπου 4€ και φτάνει σε 20 λεπτά στον σταθμό Kraków Główny. Εναλλακτικά, υπάρχουν λεωφορεία (208, 252, 902 νυχτερινό).
                    </p>

                    <p className="mb-4 text-justify">
                        Από τον σταθμό Kraków Główny μπορείτε ακόμα να μεταφερθείτε και με τα πόδια στο κέντρο καθώς είναι αρκετά κοντά. Εναλλακτικά μπορείτε να πάρετε ένα λεωφορείο.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Μετακινήσεις στην Κρακοβία
                    </h2>
                    <p className="mb-4 text-justify">
                        Η Κρακοβία διαθέτει καλό δίκτυο τραμ και λεωφορείων, όμως τα περισσότερα αξιοθέατα βρίσκονται στην Παλιά Πόλη και το Kazimierz, οπότε θα τα εξερευνήσετε εύκολα με τα πόδια. Το απλό εισιτήριο κοστίζει περίπου 1€, ενώ υπάρχουν και ημερήσια εισιτήρια (περίπου 3,50€). Για τρεις μέρες μπορείτε να προμηθευτείτε εισιτήριο 72 ωρών (περίπου 7€).
                    </p>

                    <p className="mb-4 text-justify">
                        Δεν χρειάστηκε να πάρουμε κάποιο μέσο γιατί ο καιρός ήταν καλός και μετακινηθήκαμε από το κέντρο προς τη πλατεία Ghetto Heroes Square με τα πόδια.
                    </p>

                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-q="krakow"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/krakow-l40/">GetYourGuide</a></span></div>                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Διαμονή στην Κρακοβία
                    </h2>
                    <p className="mb-4 text-justify">
                        Η καλύτερη περιοχή για διαμονή είναι γύρω από την Παλιά Πόλη (Stare Miasto) και κοντά στην κεντρική πλατεία Rynek Główny, ώστε να είστε σε κοντινή απόσταση από τα περισσότερα αξιοθέατα. Μια άλλη εξαιρετική επιλογή είναι η εβραϊκή συνοικία Kazimierz και έχει πολύ καλύτερα καφέ και εστιατόρια.
                    </p>

                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Ταξιδωτικός Οδηγός 3 ημερών για την Κρακοβία
                    </h2>
                </div>
                <div className="mt-8">

                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Την πρώτη ημέρα θα γνωρίσουμε στην παλιά πόλη της Κρακοβίας.
                    </p>
                    <p className="mb-4 text-justify">
                        Αρχικά ξεκινήσαμε με ένα πρωινό στο Charlotte με τα νόστιμα κρουασάν που τα φέρνουν σε δίσκο μαζί με διάφορες μαρμελάδες.
                    </p>
                    <p className="mb-4 text-justify">
                        Μετά ξεκινήσαμε την περιήγηση μας στο κέντρο:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Krakow Barbican</strong>: Ένα γοτθικό οχυρό χτίστηκε το 1499 ως απάντηση στην Οθωμανική κατοχή της Κρακοβίας. Η είσοδος στο εσωτερικό του κοστίζει περίπου <strong>5€</strong>.
                        </li>

                        <li>
                            <strong>St. Florians Gate</strong>: Η Πύλη του Αγίου Φλοριάν, χτισμένη τον 14ο αιώνα, είναι μία από τις πιο γνωστές γοτθικές πύλες στην Πολωνία. Αποτελεί το μόνο απομεινάρι των παλιών οχυρώσεων της Κρακοβίας και συνδέεται με το Μπαρμπικάν.
                        </li>

                        <li>
                            <strong>Θέατρο Juliusz Słowacki (Juliusz Słowacki Theatre)</strong>: Χτισμένο το 1893, αυτό το θέατρο αποτελεί ένα δείγμα εκλεκτικιστικής αρχιτεκτονικής, εμπνευσμένο από την Όπερα Garnier του Παρισιού.
                        </li>

                        <li>
                            <strong>Οδός Floriańska</strong>: Μια από τις πιο διάσημες και πολυσύχναστες πεζοδρομημένες οδούς της Κρακοβίας, που ενώνει την Πύλη του Αγίου Φλοριάν με την Κεντρική Πλατεία. Είναι γεμάτος με καταστήματα, καφέ και εμπορικά μαγαζιά.
                            Στην Πολωνία είναι πολύ διάσημα τα donuts, έχουν παράδοση πριν από το Πάσχα τρώνε όσα περισσότερα donuts μπορούν. Ένα εξαιρετικό τοπικό μαγαζί με donuts είναι το <strong>Dobra Pączkarnia</strong>.
                        </li>

                        <li>
                            <strong>Rynek Główny (κεντρική πλατεία)</strong>:
                            Μία από τις μεγαλύτερες μεσαιωνικές πλατείες της Ευρώπης, η Rynek Główny έχει χρησιμοποιηθεί από τον 13ο αιώνα ως εμπορικό κέντρο.
                            Τα Χριστούγεννα στην κεντρική πλατεία θα βρείτε την αγορά της πόλης.
                            Μπορείτε να επισκεφθείτε το υπόγειο μουσείο <strong>Rynek Underground</strong> (κόστος περίπου <strong>10€</strong>), όπου θα δείτε τα απομεινάρια των μεσαιωνικών δρόμων της πόλης.
                        </li>

                        <li>
                            <strong>St. Marys Basilica</strong>: Το σήμα κατατεθέν της πόλης, ο καθεδρικός ναός της Παρθένου Μαρίας, εκκλησία του 14ου αιώνα παράδειγμα της πολωνικής γοτθικής αρχιτεκτονικής. Στο εσωτερικό της, μπορείτε να δείτε το ξυλόγλυπτο τέμπλο, του Veit Stoss, το οποίο θεωρείται το μεγαλύτερο γοτθικό τέμπλο στον κόσμο. Κάθε μέρα στις 12 γίνεται η τελετή όπου το τέμπλο ανοίγει, μια διαδικασία που συμβαίνει από το μεσαίωνα. Από τον ψηλότερο πύργο της εκκλησίας, ακούγεται κάθε ώρα ο ήχος της τρομπέτας, γνωστός ως Hejnał Mariacki.
                        </li>

                        <li>
                            <strong>Sukiennice (Κλειστή αγορά – Museum)</strong>: Στον κεντρικό όροφο της ιστορικής κλειστής αγοράς υφασμάτων θα βρείτε δεκάδες πάγκους με χειροτεχνήματα, σουβενίρ και κεχριμπάρι. Μπορείτε να περάσετε μέσα για να ψωνίσετε, στο πρώτο όροφο υπάρχει και ένα αντίστοιχο μουσείο.
                        </li>

                        <li>
                            <strong>Town Hall Tower</strong>: Ο Πύργος του Δημαρχείου είναι ό,τι απέμεινε από το παλιό Δημαρχείο της Κρακοβίας, το οποίο κατεδαφίστηκε το 1820. Στο εσωτερικό του, μπορείτε να δείτε τα μπουντρούμια και να ανεβείτε στην κορυφή για μια πανοραμική θέα της πόλης και της κεντρικής πλατείας, το κόστος είναι περίπου <strong>5€</strong>.
                        </li>
                    </ul>

                    <p className="mb-4 text-justify">
                        Φεύγοντας από την κεντρική πλατεία μπορείτε να δείτε μερικές εκκλησίες που βρίσκονται σε κοντινή απόσταση:
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Εκκλησία Αγίας Τριάδας (Holy Trinity Church)</strong>: Γοτθική εκκλησία που ιδρύθηκε από το τάγμα των Δομινικανών τον 13ο αιώνα.
                            Ένα ακόμα μαγαζί που αξίζει να επισκεφτείτε είναι το <strong>Karmello Chocolatier</strong>, είναι μια σοκολατερί με υπέροχη ζεστή σοκολάτα και διάφορα γλυκά.
                        </li>

                        <li>
                            <strong>Βασιλική του Αγίου Φραγκίσκου της Ασίζης (Basilica of St. Francis of Assisi)</strong>: Ιδρύθηκε τον 13ο αιώνα και είναι μια από τις παλαιότερες εκκλησίες της Κρακοβίας. Ξεχωρίζει για τους πολύχρωμους τοίχους και τα βιτρό παράθυρα που σχεδίασε ο διάσημος καλλιτέχνης Stanisław Wyspiański.
                        </li>

                        <li>
                            <strong>Εκκλησία Αγίων Πέτρου και Παύλου (Saints Peter and Paul Church)</strong>: Η πρώτη μπαρόκ εκκλησία της Πολωνίας, χτισμένη στις αρχές του 17ου αιώνα για τους Ιησουίτες. Κάθε Πέμπτη, στις 20:00, μπορείτε να παρακολουθήσετε μια επίδειξη του εκκρεμούς του Φουκώ στο εσωτερικό της.
                        </li>

                        <li>
                            <strong>Εκκλησία Αγίου Ανδρέα (St. Andrews Church)</strong>: Εκκλησία ρωμανικής αρχιτεκτονική χτισμένη τον 11ο αιώνα και χρησιμοποιήθηκε ως φρούριο, προστατεύοντας τους κατοίκους από επιθέσεις.
                        </li>
                    </ul>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Plac Szczepański</strong>: Μια πλατεία που βρίσκεται κοντά στην Κεντρική Πλατεία της Κρακοβίας, η οποία δημιουργήθηκε στις αρχές του 19ου αιώνα, μετά την κατεδάφιση μιας μεσαιωνικής εκκλησίας. Είναι γνωστή για την Art Nouveau αρχιτεκτονική της και φιλοξενεί το Bunkier Sztuki, μια γκαλερί σύγχρονης τέχνης.
                        </li>

                        <li>
                            <strong>Be Happy Museum Kraków</strong>: Είναι ένα διαδραστικό μουσείο το οποίο έχει διάφορα εκθέματα που βγάζεις φωτογραφίες. Μοιάζει αρκετά με το μουσείο of Illusions.
                        </li>

                        <li>
                            <strong>Planty Park</strong>: Το πάρκο Planty, με μήκος περίπου 4 χιλιόμετρα, περιβάλλει την Παλιά Πόλη.
                        </li>
                    </ul>

                    <p className="mb-4 text-justify">
                        Ακόμα επισκεφτήκαμε το <strong>Mr Pancake</strong>, ένα πολύ viral μαγαζί γνωστό για το ιδιαίτερο design του. Δοκιμάσαμε το burger και τα pancakes του.
                    </p>


                    {/* <ImageGallery images={firstDayImages} /> */}
                </div>

                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα
                    </h3>
                

                    <div className="mb-6">
                        <p className="mb-4 text-justify">
                            Η δεύτερη μέρα είναι αφιερωμένη σε εκδρομή εκτός πόλης. Κλείσαμε μια οργανωμένη εκδρομή ώστε να μας μεταφέρει αρχικά στο Άουσβιτς και στην συνέχεια στα αλατωρυχείο με ξεναγό. Έπρεπε να ξεκινήσουμε στις 6 το πρωί και γυρίσαμε περίπου στις 5 το απόγευμα. Οπότε είναι μια αρκετά κουραστική εκδρομή. Πάρτε μαζί σας προμήθειες από την προηγούμενη ημέρα καθώς δεν υπήρχε ιδιαίτερα χρόνος για να σταματήσουμε σε κάποιο εστιατόριο.
                        </p>

                        <ul className="list-disc pl-6 mb-4 space-y-3">
                            <li>
                                <strong>Auschwitz-Birkenau Memorial and Museum</strong>: Όλοι γνωρίζουμε τι έχει συμβεί σε αυτό το μέρος. Είναι μια ανατριχιαστική εμπειρία να κυκλοφορείς στο εσωτερικό, θα δείτε μέχρι και τα μαλλιά που κούρευαν από τις γυναίκες ή τις βαλίτσες με τα πράγματα τους. Είναι μια υπενθύμιση για το πόσο χαμηλά μπορεί να φτάσει ο άνθρωπος και ένα μάθημα να μην ξανασυμβεί ποτέ αυτό.
                                Η ξενάγηση ξεκινάει από το στρατόπεδο του Auschwitz και εν συνεχεία θα δείτε το Birkenau εκεί που βρίσκεται το τρένο που έφτανε εντός του στρατόπεδού. Αν έχετε κλείσει ένα οργανωμένο tour το λεωφορείο θα σας πάει από το ένα στο άλλο, είναι μια απόσταση 5 λεπτών.
                            </li>

                            <li>
                                <strong>Wieliczka Salt Mine</strong>: Ένα από τα πιο όμορφα αλατωρυχεία του κόσμου. Έχει αναγνωριστεί ένα μνημείο παγκόσμιας κληρονομιάς από την UNESCO. Όλα ξεκινάνε με μια κατάβαση 800 σκαλιών ώστε να βρεθείτε στα πιο κάτω επίπεδα. Από τον 13ο αιώνα έβγαζαν αλάτι μέχρι και το 1996. Θα βρείτε γλυπτά και αγάλματα όλα φτιαγμένα από αλάτι. Η πιο εντυπωσιακή αίθουσα του αλατωρυχείου είναι, χωρίς αμφιβολία , ο καθεδρικός της Αγίας Κίνγκας. Ότι θα δείτε στο εσωτερικό αγάλματα, τοιχογραφίες ακόμα και οι πολυέλεοι είναι από αλάτι. Το εντυπωσιακό είναι ότι γίνονται ακόμα και σήμερα λειτουργίες μέχρι και γάμοι. Η αίθουσα χωράει 600 άτομα. Είναι απόλυτα ασφαλής και η θερμοκρασία μέσα στα ορυχεία είναι περίπου 14 βαθμοί οπότε με μια ζακέτα θα είστε εντάξει.
                            </li>
                        </ul>

                        <p className="mb-4 text-justify">
                            Αν το βράδυ έχετε ακόμα δύναμη μπορείτε να επισκεφτείτε το πάρκο Jordana, είναι το μεγαλύτερο πάρκο της πόλης. Τον χειμώνα εκεί θα βρείτε ένα πολύ μεγάλο παγοδρόμιο. Επίσης εκεί βρίσκεται και το γήπεδο τοπικής ομάδας, Βίσλα Κρακοβίας.                        </p>
                    </div>

                    {/* <ImageGallery images={secondDayImages} /> */}
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        3η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Την τελευταία μέρα θα δούμε το κάστρο της Βαβέλ, την παλιά εβραϊκή συνοικία και την περιοχή της Podgórze.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Κάστρο Βαβέλ</strong>: Είναι ένα επιβλητικό σύμβολο της πολωνικής ιστορίας. Πάνω από το κάστρο θα μπορείτε να απολαύσετε τον ποταμό Βιστούλα από ψηλά. Μέσα θα βρείτε ένα καθεδρικό (Wawel Cathedral). Αξίζει μια επίσκεψη στο εσωτερικό για να δείτε την διακόσμηση και τους τάφους των πολωνών βασιλιάδων. Ακόμα αξίζει να ανεβείτε στην κορυφή του καμπαναριού για να δείτε τόσο τη θέα όσο και την τεράστια καμπάνα. Ακουμπήστε την γλώσσα της καμπάνας για να πραγματοποιηθούν τα όνειρα σας.
                        Κατεβαίνοντας από τον λόφο θα δείτε και τον δράκο της Κρακοβίας όπου κάθε λίγα λεπτά βγάζει φωτιά από το στόμα.
                    </p>

                    <p className="mb-4 text-justify">
                        Στην συνέχεια, θα περάσουμε απέναντι για να δούμε την εβραϊκή συνοικία:
                        Αρχικά ξεκινήσαμε από το <strong>Muhabbet</strong> ένα ιδιαίτερο τούρκικο brunch με πολύ νόστιμα πιάτα και μετά να ξεκινήσει η βόλτα μας στο <strong>Kazimierz</strong> (εβραϊκή συνοικία):
                        Η παλιά εβραϊκή συνοικία της πόλης, που κάποτε αποτελούσε ανεξάρτητη πόλη, σήμερα ένα από τα πιο ζωντανά σημεία της Κρακοβίας. Αξίζει να επισκεφθείτε την <strong>Παλιά Συναγωγή (Old Synagogue)</strong> – κόστος περίπου 5€, την πλατεία <strong>plac Wolnica</strong> και την πλατεία <strong>Plac Nowy</strong>, γεμάτη με πάγκους με φαγητό. Ακόμα, στην οδό Beera Meiselsa, μπορείτε να μπείτε στην αυλή του Σιντλερ, εκεί γυρίστηκε όπου η σκηνή που μπαίνουν μέσα οι Ναζί και πετάνε τις βαλίτσες από τα μπαλκόνια.
                    </p>

                    <p className="mb-4 text-justify">
                        Μέσα στην πλατεία <strong>Plac Nowy</strong> (Νέα Πλατεία) θα βρείτε το διάσημο παραδοσιακό street food της Κρακοβίας το <strong>Zapiekanki στο Zapiekanki Piecyk</strong>. Ουσιαστικά ένα σάντουιτς το οποίο έχει πάνω τυρί και διάφορα άλλα υλικά της επιλογής σας.
                        Ακόμα, λίγο πιο κάτω επισκεφτήκαμε το <strong>Wódka Café Bar</strong>, ένα bar γεμάτο με βότκες με διαφορετικές γεύσεις, πήραμε να δοκιμάσουμε 6 σφηνάκια με 6 διαφορετικές γεύσεις βότκας (καραμέλα, σοκολάτα κτλ.)
                        Πριν φύγετε από αυτή την περιοχή μπορείτε να περάσετε από την <strong>Basilica of St. Michael the Archangel</strong>.
                        Περάστε απέναντι από την πεζογέφυρα Μπέρνατεκ για να περάσετε τον ποταμό και να συνεχίσετε την περιήγηση σας προς την <strong>Rynek Podgórski</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>St. Josephs Church</strong>: Η Εκκλησία των Μεταρρυθμισμένων Φραγκισκανών, γνωστή για την υπόγεια κρύπτη της. Είναι μια εντυπωσιακή εκκλησία στο εξωτερικό της αξίζει σίγουρα την επίσκεψη σας. Δίπλα θα βρείτε κάτι σκαλάκια που οδηγούν σε ένα όμορφο πάρκο.
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Ghetto Heroes Square</strong>: Πλατεία που βρίσκεται στην περιοχή Podgórze, όπου κατά τη διάρκεια του Β Παγκοσμίου Πολέμου δημιουργήθηκε το εβραϊκό γκέτο της Κρακοβίας. Εδώ οι Ναζί μάζεψαν όλοι τους εβραίους της πόλης και τους μετέφεραν στα στρατόπεδα συγκέντρωσης. Μέσα στα τρένα δεν υπήρχαν κάπου να κάτσουνε έτσι φέρανε κάποιες καρέκλες, όμως οι Ναζί δεν τους άφησαν και οι καρέκλες έμειναν στην πλατεία. Αυτό είναι που συμβολίζει η συγκεκριμένη πλατεία, και συμβολίζει πως έμεινε η πλατεία.
                        </li>

                        <li>
                            <strong>Remains of the Ghetto wall</strong>: Τα απομεινάρια του Ghetto που είχαν δημιουργήσει οι Ναζί για τους εβραίους.
                        </li>

                        <li>
                            <strong>Oskar Schindlers Factory</strong> (Μουσείο, κόστος ~7€): Αν έχετε δει την ταινία τότε αξίζει η επίσκεψη σε αυτό το μουσείο. Θα μάθετε περισσότερα γύρω από την ιστορία του ανθρώπου που έσωσε 1000 ανθρώπους από τους ναζί.
                        </li>

                        <li>
                            <strong>Museum of Contemporary Art (MOCAK)</strong>: Το MOCAK άνοιξε τις πόρτες του το 2011 στο κτίριο του πρώην εργοστασίου του Σίντλερ. Το μουσείο διαθέτει μια μόνιμη συλλογή έργων Πολωνών και ξένων καλλιτεχνών.
                        </li>
                    </ul>
                </div>
                <div className="mt-8 mb-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        Επιπλέον δραστηριότητες & φαγητό στην Κρακοβία
                    </h3>
                    <h4 className="font-bold mb-3 mt-8">Επιπλέον αξιοθέατα στην Κρακοβία:</h4>
                    <p className="mb-4 text-justify">
                        Αν έχετε περισσότερο χρόνο, ή θέλετε μια εναλλακτική εκδρομή από την Κρακοβία μπορείτε να επισκεφτείτε το Zakopane. Το Zakopane είναι ένα χειμερινό θέρετρο το χειμώνα και η πύλη προς το Εθνικό Πάρκο Τάτρα, αποτελεί βάση για καλοκαιρινές πεζοπορίες. Η πιο δημοφιλής είναι η ημερήσια πεζοπορία προς το Morskie Oko, ή «Μάτι της Θάλασσας» – μια βαθιά, αλπική λίμνη που βρίσκεται στο οροπέδιο του Mięguszowiecki.

                    </p>

                    <h4 className="font-bold mb-3  mt-8">Φαγητό στην Κρακοβία:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Gossip Café</strong>
                        </li>
                        <li>
                            <strong>Cytat Café</strong>
                        </li>
                        <li>
                            <strong>Mr Pancake</strong>
                        </li>
                        <li>
                            <strong>Muhabbet</strong>
                        </li>
                        <li>
                            <strong>Boccanera </strong>
                        </li>
                        <li>
                            <strong>Czarna Kaczka </strong>
                        </li>
                        <li>
                            <strong>Moo Moo </strong>
                        </li>
                        <li>
                            <strong>Judah Food Market </strong>
                        </li>
                        <li>
                            <strong>Mr Beef</strong>
                        </li>
                        <li>
                            <strong>Alchemia </strong>
                        </li>
                    </ul>
                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="40" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>
            </div>
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>



    )
}

export default Krakow