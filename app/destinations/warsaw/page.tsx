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
    // Τίτλος: Δυνατός, με χρονολογία
    title: "Βαρσοβία: Τι να δω και τι να κάνω (Πλήρης Οδηγός 2025)",

    // Περιγραφή: Εδώ συνδυάζουμε το ιστορικό με το μοντέρνο στοιχείο.
    // Αναφέρουμε το Παλάτι του Πολιτισμού (το σήμα κατατεθέν) και την Παλιά Πόλη.
    description: "Ταξίδι στη Βαρσοβία, την πόλη των αντιθέσεων. Ο απόλυτος οδηγός: Παλιά Πόλη, Παλάτι Πολιτισμού, Μουσείο Εξέγερσης και τα καλύτερα μέρη για φαγητό.",

    // Canonical URL
    alternates: {
        canonical: '/destinations/warsaw',
    },

    // Open Graph (Social Media)
    openGraph: {
        title: 'Βαρσοβία: Η πόλη που αναγεννήθηκε - Αξιοθέατα και Tips',
        description: 'Ουρανοξύστες, ιστορία και pierogi. Πλήρης οδηγός για ένα αξέχαστο και οικονομικό ταξίδι στη Βαρσοβία.',
        url: '/destinations/warsaw',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                url: '/images/warsaw-hero.jpeg', 
                width: 1200,
                height: 630,
                alt: 'Βαρσοβία: Ταξιδιωτικός Οδηγός 2025',
            },
        ],
    },
}

function Warsaw() {
    return (
        <div className="min-h-screen">
            {/* <Head>
                <title>Βαρσοβία Αξιοθέατα</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/destinations/warsaw"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Βαρσοβία Αξιοθέατα | Ταξιδωτικός Οδηγός για τη Βαρσοβία | Τι να δω και τι να κάνω στην Βαρσοβία"
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
                    Ταξίδι στη Βαρσοβία: Η «Πόλη του Φοίνικα» και των Αντιθέσεων
                </h1>

                {/* Main picture */}
                <div className="flex justify-center my-8"> {/* Center the image */}
                    <Image
                        src="/images/warsaw-hero.jpeg"
                        width={1200} // Increase width for a wider image
                        height={600} // Adjust height proportionally
                        alt="warsaw-old-town"
                        className="rounded-lg shadow-lg w-full max-w-4xl" // Make it responsive and add styling
                        priority // Optimize loading for above-the-fold images
                    />
                </div>

                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η Βαρσοβία, πρωτεύουσα της Πολωνίας, είναι μια πόλη που συνδυάζει την ιστορία με τη σύγχρονη αρχιτεκτονική. Μετά τον Β Παγκόσμιο Πόλεμο, η πόλη ξαναχτίστηκε σχεδόν από την αρχή και σήμερα σφύζει από ζωή με πάρκα, μουσεία, μνημεία και μοντέρνα κτίρια. Είναι μια πόλη που συνδυάζει το παλιό με το νέο, τους ουρανοξύστες με την παλιά πόλη. </p>
                <p className="mb-4 text-justify">
                    Το ταξίδι μας έγινε τα Χριστούγεννα σε συνδυασμό με την Κρακοβία. Ήταν μια ευχάριστη έκπληξη για εμάς καθώς είναι ένας οικονομικός προορισμός για τα Χριστούγεννα σε σχέση με άλλες πόλεις της Ευρώπης.</p>

                {/* Widget */}

                <div className="mt-8">
                    <Widget2 items={barcelonaItems} />
                </div>
                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το Αεροδρόμιο της Βαρσοβίας στο Κέντρο της Πόλης
                    </h2>
                    <p className="mb-4 text-justify">
                        Το Διεθνές Αεροδρόμιο Φρεντερίκ Σοπέν της Βαρσοβίας απέχει περίπου 10 χμλ. από το κέντρο της πόλης. Για να φτάσετε στο κέντρο η πιο οικονομική λύση είναι το λεωφορείο. Δύο γραμμές εξυπηρετούν από το αεροδρόμιο προς το κέντρο της πόλης, η 175 και η 188. Η διαδρομή διαρκεί περίπου 40 λεπτά, ανάλογα την κίνηση, και το κόστος του εισιτηρίου είναι 4.4 PLN.  Τα δρομολόγια αναχωρούν περίπου κάθε 15-20 λεπτά.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Μεταφορά από την Κρακοβία στην Βαρσοβία
                    </h2>
                    <p className="mb-4 text-justify">
                        Το ταξίδι μας στην Βαρσοβία συνδυάστηκε με την Κρακοβία. Για την μετακίνηση μας από την μια πόλη στην άλλη επιλέξαμε το τρένο. Τα τρένα από την Βαρσοβία αναχωρούν από το σταθμό Warszawa Centralna με προορισμό το Krakow Glowny, κεντρικός σταθμός της Κρακοβίας.  Η διαδρομή διαρκεί περίπου 2:30 ώρες. Το κόστος του εισιτηρίου είναι περίπου 20 ευρώ το άτομο, μπορείτε είτε να κλείσετε online είτε να αγοράσετε από τα booth που εξυπηρετούν. Τα τρένα αυτά έχουν δύο ειδών εισιτήρια class 1 και class 2. Το class 2, που είναι φθηνότερο έχει μια στάνταρ θέση μέσα στα booth με άλλο κόσμο.                     </p>

                    <p className="mb-4 text-justify">
                        Το ταξίδι μας ήταν για 7 ημέρες (6 νύχτες), τις χωρίσαμε 3 ημέρες στην Βαρσοβία και 3 στην Κρακοβία. Όμως στην Βαρσοβία μείναμε 2 γεμάτες ημέρες. Γενικά η Κρακοβία αξίζει λίγο περισσότερες ημέρες, δεδομένου ότι μπορείτε να δείτε περισσότερα μέρη όπως το Άουσβιτς, τα αλατωρυχεία ή το Ζακοπάνε.
                    </p>
                    <p className="mb-4 text-justify">
                        Δείτε τον αναλυτικό οδηγό για την Κρακοβία <a className="text-blue-600 underline" href='https://travelmpomps.gr/destinations/krakow'>εδώ</a>.
                    </p>

                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-q="warsaw"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/warsaw-l41/">GetYourGuide</a></span></div>                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Διαμονή στην Βαρσοβία
                    </h2>
                    <p className="mb-4 text-justify">
                        Η καλύτερη περιοχή για διαμονή είναι γύρω από την Παλιά Πόλη (Stare Miasto), ώστε να είστε σε κοντινή απόσταση από τα περισσότερα αξιοθέατα. Άλλες περιοχές είναι το Śródmieście Północne που βρίσκεται κοντά σε πολλά αξιοθέατα, το Muranów διαθέτει εύκολη πρόσβαση σε ιστορικούς χώρους, το Powiśle είναι μια μοντέρνα περιοχή κατά μήκος του ποταμού, το Mirów προσφέρει ένα εξαιρετικό μείγμα τοπικής ζωής και πολιτιστικών αξιοθέατων.
                    </p>
                    <p className="mb-4 text-justify">
                        Το Praga-Północ είναι η μόνη γειτονιά που προτείνουμε που βρίσκεται στην άλλη πλευρά του ποταμού Βιστούλα, με μια μοναδική, καλλιτεχνική ατμόσφαιρα και πολλά μοντέρνα μπαρ και γκαλερί τέχνης.
                    </p>

                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Ταξιδωτικός Οδηγός 3 ημερών για την Βαρσοβία
                    </h2>
                    <p className="mb-4 text-justify">
                        Θα χωρίσουμε την πόλη σε δύο μέρες, την πρώτη μέρα θα δούμε όσα περισσότερα σημεία γίνεται εκτός του ιστορικού κέντρο και την δεύτερη να δούμε όσα περισσότερα γίνεται στην παλιά πόλη και τον βασιλικό δρόμο.
                    </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>
                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Η περιήγηση ξεκινάει από το Łazienki Królewskie (Βασιλικό Πάρκο Γουαζιένκι)</strong>. Το πιο όμορφο και το μεγαλύτερο πάρκο της πόλης, γεμάτο παλάτια, λίμνες και κήπους. Μερικά από τα αξιοθέατα που μπορείτε να δείτε είναι <strong>Παλάτι πάνω στο Νερό (Pałac na Wyspie)</strong> το οποίο έχει είσοδο <strong>14€</strong>, το <strong>Αμφιθέατρο</strong> και το <strong>άγαλμα του Σοπέν</strong>. Η είσοδος στο πάρκο είναι φυσικά δωρεάν. Τα Χριστούγεννα μπορείτε να δείτε επίσης το εντυπωσιακό <strong>Wystawa MagicznyBotaniczny | Ogród Botaniczny U</strong>, ένα θεματικό πάρκο γεμάτο φώτα και χριστουγεννιάτικα διακόσμηση (κόστος <strong>7.5€</strong>). Ακόμα μέσα στο πάρκο υπάρχει το γήπεδο της τοπικής ομάδας, <strong>Legia</strong>, το παλάτι <strong>Belweder Palace</strong> και το <strong>Ujazdów Castle</strong>, ένα μπαρόκ κάστρο που φιλοξενεί το Κέντρο Σύγχρονης Τέχνης (είσοδος <strong>3.5€</strong>).
                        </li>

                        <li>
                            <strong>Αν είστε φαν των κήπων άλλη μια στάση μπορείτε να κάνετε στο Warsaw University Library Garden</strong>, είναι μια βιβλιοθήκη με εντυπωσιακή πράσινη σκεπή–κήπο με πανοραμική θέα.
                        </li>

                        <li>
                            <strong>Palace of Culture and Science (Pałac Kultury i Nauki)</strong>: Το σημαντικότερο αξιοθέατο της Βαρσοβίας. Το δεύτερο ψηλότερο κτίριο της Πολωνίας (237 μ.), με παρατηρητήριο στον 30ό όροφο (<strong>~6.5€</strong>) για την καλύτερη θέα της Βαρσοβίας. Κλείστε να εισιτήριά σας από εδώ (<a href="https://www.bilety.pkin.pl/?culture=en" className="text-blue-600 hover:underline">https://www.bilety.pkin.pl/?culture=en</a>).  Οι ντόπιοι τον θεωρούν πολύ σημαντικό για την πόλη τους, η θέα από τον πύργο είναι πανοραμική και βλέπεις όλη την πόλη από ψηλά. Πίσω από το κτήριο αυτό θα βρείτε και ένα μεγάλο mall το <strong>Złote Tarasy</strong> για να κάνετε τα ψώνια σας.
                        </li>

                        <li>
                            <strong>Μια επίσκεψη αξίζει στο Palace of the Commonwealth</strong>, η είσοδος είναι δωρεάν για να δείτε ένα όμορφο κτίριο, πρώην παλάτι, που χρησιμοποιείται για να εκθέσει μερικά από τα πιο πολύτιμα βιβλία της πολωνικής εθνικής βιβλιοθήκης που επέζησαν του Β Παγκοσμίου Πολέμου. Εδώ θα δείτε το παλαιότερο υπάρχον βιβλίο στην πολωνική ή κυριλλική γλώσσα. Αξίζει να περάσετε μια βόλτα και από τους κήπους έξω από το παλάτι στους <strong>Krasiński Palace Gardens</strong>, ένα ήσυχο πάρκο που προτιμούν οι ντόπιοι.
                        </li>

                        <li>
                            <strong>Warsaw Ghetto & Μνημείο Εξέγερσης</strong>: Το Μουσείο της Εξέγερσης της Βαρσοβίας (μερικές φορές αναφέρεται και ως «Μουσείο Εξέγερσης της Βαρσοβίας») είναι αφιερωμένο στην Εξέγερσης της Βαρσοβίας του 1944. Ήταν ένα καθοριστικό γεγονός του Β Παγκοσμίου Πολέμου, όπου οι Πολωνοί μαχητές της αντίστασης επιχείρησαν να απελευθερώσουν τη Βαρσοβία από τη γερμανική κατοχή. Το κόστος είναι περίπου <strong>8€</strong>. Αν φτάσετε μέχρι εκεί μπορείτε να βγάλετε μια φωτογραφία με την πινακίδα <strong>«I Love Warsaw»</strong> που βρίσκεται στην πλατεία απέναντι.
                        </li>

                        <li>
                            <strong>Αν σας θέλετε να μάθετε περισσότερα για την πολωνική κοινότητα των εβραίων μπορείτε να επισκεφτείτε το POLIN Museum of the History of Polish Jews</strong>.  Το οποίο καλύπτει την ιστορία 1000 χρόνων της εβραϊκής κοινότητα στην Πολωνία. Η είσοδος τις Πέμπτες είναι δωρεάν.
                        </li>

                        <li>
                            Για το βράδυ μπορείτε να επισκεφτείτε την <strong>Nocny Market</strong>, μια υπαίθρια αγορά με street food, μπαρ και μουσική.
                        </li>
                    </ul>

                    {/* <ImageGallery images={firstDayImages} /> */}
                </div>

                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Το ιστορικό κέντρο της όχι και τόσο παλιάς πόλης (Stare Miasto) είναι η καρδιά της Βαρσοβίας, με τα γραφικά σοκάκια και τα πολύχρωμα κτήρια προσφέρει μια μαγική ατμόσφαιρα. Όλα τα κτήρια που θα δείτε είναι σύγχρονα και χτισμένα μετά το 1950, καθώς η Βαρσοβία μετά τον 2ο παγκόσμιο πόλεμο κατά 90% ήταν διαλυμένη. Όλη η παλιά πόλη είναι γεμάτη σοκάκια, πάρτε το χρόνο σας να τα εξερευνήσετε:
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Ξεκινήστε από την Πλατεία του Κάστρου (Plac Zamkowy)</strong> την καρδιά της παλιάς πόλης με τη Στήλη του Βασιλιά Σιγισμούνδου. Ένα από τα σημαντικότερα αξιοθέατα εδώ είναι το <strong>Βασιλικό κάστρο της Βαρσοβίας</strong>, καλό είναι να έχετε κλείσει νωρίτερα το εισιτήριο σας από εδώ. Αν και το αρχικό κάστρο χρονολογείται από το 16ο αιώνα, καταστράφηκε ολοσχερώς το 1944 και ξαναχτίστηκε μετά τον πόλεμο. Ευτυχώς, ορισμένα από τα αρχικά στοιχεία του κάστρου έχουν διατηρηθεί.
                        </li>

                        <li>
                            <strong>Επόμενο στην λίστα, στην καρδιά της Stare Miasto βρίσκεται ο Καθεδρικός ναός Αγίου Ιωάννη</strong>. Είναι η παλαιότερη εκκλησία της Βαρσοβίας του 15ου αιώνα. Η εκκλησία έχει ανακατασκευαστεί. Η είσοδος στην εκκλησία είναι δωρεάν.
                        </li>

                        <li>
                            <strong>Μέσα σε μια πολύ μικρή πλατεία, την Kanonia Square θα βρείτε την καμπάνα της τύχης (Dzwon na Kanonii)</strong>, ένας θρύλος λέει ότι πρέπει να αγγίξετε το κουδούνι και περπατήστε γύρω της τρεις φορές ενώ κάνετε μια ευχή, ώστε να πραγματοποιηθεί.
                        </li>

                        <li>
                            <strong>Στην συνέχεια, θα βρείτε την πλατεία της αγοράς</strong>, η ομορφότερη πλατεία της Βαρσοβίας γεμάτη με πολύχρωμα σπιτάκια. Στο κέντρο της υπάρχει η γοργόνα, σύμβολο της Βαρσοβίας. Τα Χριστούγεννα εδώ θα βρείτε μια αγορά.
                        </li>

                        <li>
                            <strong>Μετά συνεχίστε στο οχυρό Warsaw Barbican</strong>, ένα μεσαιωνικό φρούριο, το οποίο έχει ανακατασκευαστεί πλήρως. Είναι από τα πιο χαρακτηριστικά μέρη για φωτογραφία. Εδώ θα βρείτε κατά μήκος των τειχών να εκτείνεται και μια Χριστουγεννιάτικη αγορά.
                        </li>
                    </ul>

                    <p className="mb-4 text-justify">
                        Φεύγοντας από την παλιά πόλη συνεχίστε στον <strong>Royal Route (Trakt Królewski)</strong>. Το ομορφότερο κομμάτι της πόλης, στον πιο αριστοκρατικό δρόμο της Βαρσοβίας. Εκτείνετε περίπου 11 χιλιόμετρα και θα βρείτε διάφορα αξιοθέατα αριστερά και υπέροχα κτήρια αριστερά και δεξιά.
                        Ένα από αυτά είναι ο <strong>Ναός της Αγίας Άννας</strong>, εξωτερικά δεν είναι ιδιαίτερο, μπορείτε θαυμάσετε το εσωτερικό της εκκλησίας. Το πιο ενδιαφέρον εδώ είναι το παρατηρητήριο το οποίο βρίσκεται ακριβώς δίπλα από την εκκλησία. Το κόστος είναι <strong>10 ζλότι</strong>, δέχονται μετρητά μόνο, και αξίζει να ανεβείτε για τις καλύτερες φωτογραφίες με φόντο την παλιά πόλη. Ένα ακόμα εντυπωσιακό κτήριο είναι το <strong>προεδρικό μέγαρο</strong>, εδώ υπογράφηκε το σύμφωνο της Βαρσοβίας δηλαδή η ένωση κάτω από την σοβιετική κυριαρχία κρατών της κεντρικής Ευρώπης. Ακόμα θα βρείτε τον <strong>Ναός τιμίου σταυρού</strong>, την <strong>Carmelite Church</strong> όπως και το <strong>Belvedere cafe</strong>, το καφέ της βασιλικής οικογένειας. Οι τιμές είναι τσιμπημένες και είναι πάντα γεμάτο.
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Από το μνημείο του Νικόλαου Κοπέρνικου, ο βασιλικός δρόμος γίνεται Nowy Świat</strong>, το πιο σύγχρονο μέρος του ιστορικού κέντρου γεμάτο με καφέ, εστιατόρια και μαγαζιά αριστερά και δεξιά.
                        </li>

                        <li>
                            <strong>Αξίζει να περάσετε απέναντι από την παλιά πόλη στην περιοχή που λέγεται Πράγα</strong>. Είναι μια εναλλακτική – hipster γειτονιά της πόλης. Το κύριο αξιοθέατο εδώ είναι η εκκλησία <strong>St. Michael the Archangel and St. Florian the Martyr</strong>, η οποία μοιάζει αρκετά με αυτή της Κρακοβίας.
                        </li>
                    </ul>

                    <p className="mb-4 text-justify">
                        <strong>Το απόγευμα θα ήταν ιδανικό να κάνετε μια βόλτα στον ποταμό Βιστούλα, Vistula Boulevards</strong>. Έχουν δημιουργηθεί πεζόδρομοι κατά μήκος των δυτικών όχθων του ποταμού Βιστούλα που εκτείνονται σε μήκος 4,5 χιλιομέτρων. Ιδανικά για το ηλιοβασίλεμα.
                    </p>

                    <div className="mb-6">
                    </div>

                    {/* <ImageGallery images={secondDayImages} /> */}
                </div>

                <div className="mt-8 mb-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        5. Φαγητό στην Βαρσοβία
                    </h2>
                    <p className="mb-4 text-justify">
                        Από brunch δοκιμάσαμε το <strong>Byc Moze</strong>, το οποίο βρίσκεται μακριά από το κέντρο, δεν είναι καθόλου τουριστικό όμως είχε πολύ ωραία πιάτα, φοβερή αισθητική και πολύ καλές τιμές.
                    </p>

                    <p className="mb-4 text-justify">
                        Ακόμα ένα είναι το <strong>Bułkę przez Bibułkę</strong>, υπάρχουν 2-3 μέσα στην πόλη, έχει πολύ καλές τιμές και είναι είχε ένα φοβερό πιάτο pumpkin & eggs.
                    </p>

                    <p className="mb-4 text-justify">
                        Κοντά στην παλιά πόλη, βρήκαμε ένα all day bistro με επίσης πολύ καλές τιμές το <strong>mon nom</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Ακόμα, δοκιμάσαμε το <strong>GOŚCINIEC</strong>, υπάρχουν μερικά στο κέντρο της πόλης και έχει παραδοσιακό πολωνικό φαγητό σε καλές τιμές. Δοκιμάστε τα pierogi, και τα pancakes πατάτας.
                    </p>

                    <p className="mb-4 text-justify">
                        Για street food δοκιμάσαμε το <strong>Przystanek Pierogarnia</strong>, που έχει διάφορες παραλλαγές των κλασικών pierogi.
                    </p>

                    <p className="mb-4 text-justify">
                        Άλλες επιλογές:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Charlotte Bouillon</strong>: all day εστιατόριο, με πολύ καλό brunch, μπορείτε να δοκιμάσετε κρουασάν</li>
                    </ul>

                </div>
                <div className="mt-8 mb-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        6. Επιπλέον δραστηριότητες στην Βαρσοβία
                    </h2>
                    <p className="mb-4 text-justify">
                        Επιπλέον αξιοθέατα στην Βαρσοβία τα οποία δεν χώρεσαν στο πρόγραμμα μας είναι τα εξής:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Μουσείο της Μαρί Κιουρί</strong>: Στο σπίτι που γεννήθηκε η νομπελίστρια Μαρί Κιουρί, το μουσείο παρουσιάζει την ιστορία της ζωής και του έργου της, καθώς και την ιστορία της επιστήμης στην Πολωνία.
                        </li>
                        <li>
                            <strong>Copernicus Science Centre</strong>: Διαδραστικό μουσείο επιστήμης (~9€).
                        </li>
                        <li>
                            <strong>Museum of Fryderyk Chopin in Warsaw</strong>: Αφιερωμένο στη ζωή και το έργο του συνθέτη Φρεντερίκ Σοπέν (~6.5€).
                        </li>
                        <li>
                            <strong>National Museum in Warsaw</strong>: Μεγάλη συλλογή πολωνικής και διεθνούς τέχνης.
                        </li>
                        <li>
                            <strong>Polish Vodka Museum</strong>: Ιστορία και γευσιγνωσία βότκας (~16€).
                        </li>
                        <li>
                            <strong>Wilanów Palace</strong>: Βρίσκεται λίγο έξω από το κέντρο της πόλης, αποκαλούμενο «πολωνικές Βερσαλλίες», αυτό το πολυτελές συγκρότημα παλατιών και πάρκων αντανακλά την αριστοκρατική κομψότητα της Πολωνίας (2,5 €)
                        </li>
                        <li>
                            <strong>Westfield Arkadia</strong>: Μοντέρνο εμπορικό κέντρο κοντά στην παλιά πόλη.
                        </li>
                        <li>
                            <strong>Μονοήμερη στο Αουσβιτς ή την Κρακοβία</strong>: Αν πάλι δεν θέλετε να μείνετε το βράδυ στην Κρακοβία, μπορείτε να κλείσετε μια ημερήσια εκδρομή και από την Βαρσοβία εκδρομή στο Άουσβιτς ή την Κρακοβία
                        </li>
                        <li>
                            <strong>Suntago Water Park</strong>: Το μεγαλύτερο υδάτινο πάρκο στην Κεντρική Ευρώπη, περίπου 40 λεπτά από την Βαρσοβία, με πισίνες, νεροτσουλήθρες και σάουνες (~20€).
                        </li>
                    </ul>
                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="41" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>            </div>
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>



    )
}

export default Warsaw