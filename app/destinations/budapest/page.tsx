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
        content: 'Το νόμισμα που χρησιμοποιούν είναι το Φιορίνι (HUF). Η αναλογία μεταξύ του ευρώ είναι περίπου 1 EUR = 396 HUF',
    },
    {
        name: 'Roaming',
        icon: <VscRadioTower className="w-5 h-5" />,
        content: 'Η Ουγγαρία ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας',
    },
    {
        name: 'Έγγραφα',
        icon: <GiPassport className="w-5 h-5" />,
        content: 'Ταυτήτηα ή διαβατήριο',
    },
    {
        name: 'Γλώσσα',
        icon: <FaLanguage className="w-5 h-5" />,
        content: 'Φυσικά μιλάνε Ουγγρικά, αλλά στα τουριστικά μέρη θα βρείτε αρκετούς που μιλάνε Αγγλικά',
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
    title: "Βουδαπέστη, τι να δω και τι να κάνω  | Travelmpomps",
    description: "Ταξιδωτικός Οδηγός για την Βουδαπέστη - Τι να δω και τι να κάνω στην Βουδαπέστη",
    keywords: "Βουδαπέστη, Ουγγαρία, ταξιδιωτικός οδηγός, αξιοθέατα, μεταφορές, διαμονή, δραστηριότητες, Βουδαπέστη αξιοθέατα, Βουδαπέστη ταξίδια, Βουδαπέστη διαμονή, Βουδαπέστη μεταφορές",
}

function Budapest() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Βουδαπέστη Αξιοθέατα</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/destinations/budapest"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Ταξιδωτικός Οδηγός για τη Βουδαπέστη | Τι να δω και τι να κάνω στην Βουδαπέστη"
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
                    Βουδαπέστη τι να δω και τι να κάνω
                </h1>

                {/* Main picture */}
                <div className="flex justify-center my-8"> {/* Center the image */}
                    <Image
                        src="/images/budapesthero.jpg"
                        width={1200} // Increase width for a wider image
                        height={600} // Adjust height proportionally
                        alt="budapest-city"
                        className="rounded-lg shadow-lg w-full max-w-4xl" // Make it responsive and add styling
                        priority // Optimize loading for above-the-fold images
                    />
                </div>

                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η Βουδαπέστη, η πρωτεύουσα της Ουγγαρίας, είναι μια από τις ομορφότερες πόλεις της Ευρώπης, χτισμένη στις όχθες του Δούναβη. Η πόλη χωρίζεται στη Βούδα και στην Πέστη, με τον ποταμό να λειτουργεί σαν φυσικό σύνορο. Από τη μία πλευρά η επιβλητική Βούδα με το κάστρο και τα μεσαιωνικά σοκάκια, και από την άλλη η κοσμοπολίτικη Πέστη με τις λεωφόρους, τα καφέ και τη νυχτερινή ζωή.
                </p>
                <p className="mb-4 text-justify">
                    Κατά την γνώμη μας πρόκειται για μια από τις καλύτερες επιλογή για το πρώτο ταξίδι στο εξωτερικό. Μπορεί εύκολα να οργώσει κάποιος μόνος του αφού είναι μια μικρή πόλη και μπορείς εύκολα να κινηθείς με τα πόδια από το ένα αξιοθέατο στο άλλο.
                </p>

                {/* Widget */}

                <div className="mt-8">
                    <Widget2 items={barcelonaItems} />
                </div>
                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το Αεροδρόμιο της Βουδαπέστης
                    </h2>
                    <p className="mb-4 text-justify">
                        Το αεροδρόμιο της Βουδαπέστης απέχει περίπου 20 χλμ. από το κέντρο.
                    </p>

                    <p className="mb-4 text-justify">
                        Για να φτάσετε στο κέντρο:
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Παίρνετε το λεωφορείο <strong>200E</strong> (το συγκεκριμένο κοστίζει όσο το κοινό εισιτήριο) από το αεροδρόμιο, θα το βρείτε μπροστά σας στην στάση.</li>
                        <li>Κατεβαίνετε στον σταθμό <strong>Kőbánya-Kispest</strong> (αφετηρία της μπλε γραμμής μετρό).</li>
                        <li>Από εκεί συνεχίζετε με το μετρό μέχρι <strong>Deák Ferenc tér</strong>, το κεντρικότερο σημείο της πόλης.</li>
                    </ul>

                    <p className="mb-4 text-justify">
                        Αν φεύγετε Κυριακή, σημειώστε ότι η μπλε γραμμή του μετρό δεν λειτουργεί και στη θέση της υπάρχει λεωφορείο από τη Deák Ferenc.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Μετακινήσεις στην Βουδαπέστη
                    </h2>
                    <p className="mb-4 text-justify">
                        Η Βουδαπέστη διαθέτει εξαιρετικά δίκτυα μετρό, τραμ και λεωφορείων. Το κέντρο όλων των γραμμών είναι η <strong>Deák Ferenc tér</strong>.
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Κόκκινη γραμμή</strong>: σας πάει στο Κοινοβούλιο και στη Βούδα.</li>
                        <li><strong>Κίτρινη γραμμή</strong>: οδηγεί στη Λεωφόρο Αντράσσυ, την Όπερα και την Πλατεία Ηρώων.</li>
                        <li><strong>Πράσινη γραμμή</strong>: χρήσιμη για το Άγαλμα της Ελευθερίας (Citadella).</li>
                        <li><strong>Τραμ 2</strong>: περνάει κατά μήκος του Δούναβη με υπέροχη θέα.</li>
                    </ul>

                    <p className="mb-4 text-justify">
                        Το κόστος του απλού εισιτηρίου κοστίζει <strong>1.10€</strong>, ενώ το ημερήσιο εισιτήριο κοστίζει <strong>6.50€</strong>. Μπορείτε επίσης να αγοράσετε ένα εισιτήριο <strong>72 ωρών</strong> το οποίο κοστίζει <strong>13.50€</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>Budapest Card</strong>: Υπάρχει και η επιλογή αυτή όπου εκτός από απεριόριστες διαδρομές προσφέρει δωρεάν εισόδους και εκπτώσεις σε διάφορα αξιοθέατα. Μπορείτε να τα δείτε εδώ: <a href="https://www.budapestcard.org/discounts/" className="text-blue-600 hover:underline">https://www.budapestcard.org/discounts/</a>. Για 3 ημέρες κοστίζει <strong>79.20€</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Αν έχει καλό καιρό, μπορείτε να περπατήσετε εύκολα όλη την πόλη, οπότε φορέστε καλά παπούτσια ώστε να απολαύσετε κάθε σημείο της πόλης.
                    </p>
                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-q="budapest"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/budapest-l29/">GetYourGuide</a></span></div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Διαμονή στην Βουδαπέστη
                    </h2>
                    <p className="mb-4 text-justify">
                        Η ιδανική περιοχή για να μείνετε είναι γύρω από τη Deák Ferenc tér – είστε κοντά στο μετρό, στη νυχτερινή ζωή και στα περισσότερα αξιοθέατα. Εναλλακτικά, προσέξτε το κατάλυμα να έχει πρόσβαση σε κάποιο μέσο μεταφοράς. Ιδανικά, επιλέξτε την Πέστη όπου εκεί βρίσκονται τα περισσότερα μαγαζιά και αξιοθέατα.                    </p>

                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Ταξιδωτικός Οδηγός 3 ημερών για την Βουδαπέστη
                    </h2>
                </div>
                <div className="mt-8">

                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Την πρώτη μέρα θα δείτε την Πέστη και τα πιο κεντρικά αξιοθέατα της πόλης.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Ξεκινήστε με βόλτα στον Δούναβη</strong>, από το άγαλμα της Πριγκίπισσας και συνεχίστε παραλιακά μέχρι τα <strong>“Παπούτσια στον Δούναβη”</strong>. Εκεί έστηναν οι ναζί τους εβραίους και τους ζητούσαν να βγάλουν τα παπούτσια τους πριν τους πυροβολήσουν.
                        </li>

                        <li>
                            Το επόμενο στην λίστα είναι το <strong>Κοινοβούλιο</strong>. Μπορείτε να το επισκεφθείτε και να θαυμάσετε το εσωτερικό του, καλό θα ήταν να αγοράσετε το εισιτήριο σας εκ των προτέρων (κόστος <strong>16.35€</strong>).
                        </li>

                        <li>
                            Πίσω από το Κοινοβούλιο, στο πάρκο <strong>Szabadság tér</strong>, θα βρείτε αγάλματα και μνημεία, όπως το άγαλμα του <strong>Imre Nagy</strong>.
                        </li>

                        <li>
                            Συνεχίστε στη πιο δημοφιλής εκκλησία της Βουδαπέστης, την <strong>Βασιλική του Αγίου Στεφάνου</strong>. Αξίζει να ανεβείτε μέχρι πάνω και δείτε την πόλη από ψηλά.
                        </li>

                        <li>
                            Ένα σημαντικό κτήριο που μπορείτε να δείτε είναι η <strong>Ουγγρική Κρατική Όπερα</strong>. Υπάρχει η δυνατότητα να κάνετε ένα tour, αν είστε λάτρης, μιας ώρας στο εσωτερικό, το κόστος είναι <strong>26.50€</strong>.
                        </li>

                        <li>
                            Στην συνέχεια δείτε την κεντρικότερη πλατεία της Βουδαπέστης που είναι το πάρκο <strong>Erzsevet ter</strong>. Εκεί βρίσκεται και το <strong>Budapest Eye</strong>, μια ρόδα που μπορείτε να δείτε την πόλη από ψηλά. Θα ήταν καλύτερα να ανεβείτε το βράδυ για να δείτε την πόλη φωτισμένη από ψηλά. Το κόστος είναι <strong>12.50€</strong>.
                        </li>

                        <li>
                            Λίγο πιο κάτω βρίσκεται η πλατεία <strong>Vorosmarty</strong>, με τον πεζόδρομο <strong>Váci utca</strong> που οδηγεί στην Κλειστή Αγορά <strong>«Nagycsarnok»</strong> – ιδανικό σημείο για να αγοράσετε αναμνηστικά και να δοκιμάσετε street food.
                        </li>

                        <li>
                            Σε κοντινή απόσταση υπάρχει ακόμα η <strong>Metropolitan Ervin Szabó Library</strong>. Η είσοδος κοστίζει <strong>4€</strong> και θα δείτε μια βιβλιοθήκη μέσα σε ένα παλιό παλάτι σε νέο-μπαρόκ αρχιτεκτονική.
                        </li>

                        <li>
                            Ένα ακόμα σημαντικό αξιοθέατο είναι η <strong>Μεγάλη Συναγωγή</strong>, δεύτερη μεγαλύτερη συναγωγή στον κόσμο. Το αντίτιμο είναι αρκετά μεγάλο, <strong>32€</strong>, οπότε επιλέξαμε να μην δούμε το εσωτερικό.
                        </li>

                        <li>
                            Πίσω από την Συναγωγή, στην εβραϊκή συνοικία θα βρείτε το <strong>Street Food Karavan</strong>. Είναι γεμάτο από καντίνες με τοπικό και όχι μόνο street food που αξίζει να δοκιμάσετε. Δίπλα, υπάρχει και το <strong>Szimpla Kert</strong> το οποίο είναι το αντίστοιχο απλά με διάφορα bars.
                        </li>
                    </ul>


                    {/* <ImageGallery images={firstDayImages} /> */}
                </div>

                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Την δεύτερη μέρα θα δείτε την Βούδα και το Κάστρο της Βούδας.
                    </p>

                    <div className="mb-6">
                        <ul className="list-disc pl-6 mb-4 space-y-3">
                            <li>
                                <strong>Ξεκινήστε από την Elizabeth Bridge</strong> ώστε να φτάσετε στον λόφο <strong>Gellert</strong>. Είναι ένας λόφος που προσφέρει πολύ όμορφη θέα σε όλη την πόλη. Εκεί ανεβείτε τον λόφο και φτάστε μέχρι το <strong>Citadella</strong> (άγαλμα της ελευθερίας)
                            </li>

                            <li>
                                Όταν κατεβείτε τον λόφο υπάρχει μια πολύ ιδιαίτερη εκκλησία το <strong>Gellért Hill Cave</strong>. Είναι μια εκκλησία χτισμένη μέσα στον λόφο. Η είσοδος κοστίζει <strong>3€</strong>.
                            </li>

                            <li>
                                Συνεχίστε με το <strong>κάστρο της Βούδας</strong>, το οποίο είναι στην ουσία ένα συγκρότημα παλατιών. Περιηγηθείτε στο εξωτερικό, εκεί βρήκαμε και ένα stand που είχε καφέ, κρασί και διάφορα παραδοσιακά φαγητά. Μέσα στο κάστρο υπάρχουν διάφορα μουσεία που μπορείτε να επισκεφτείτε όπως η <strong>Εθνική Πινακοθήκη της Ουγγαρίας</strong>. Μια άλλη ενδιαφέρον δραστηριότητα είναι να εξερευνήσετε τον <strong>λαβύρινθο κάτω από το κάστρο</strong>. Το κόστος είναι <strong>15€</strong> και εξαντλούνται πολύ γρήγορα τα εισιτήρια.
                            </li>

                            <li>
                                Σε κοντινή απόσταση με τα πόδια θα βρείτε την <strong>Εκκλησία του Ματίας</strong> και το πιο «ινσταγραμικό» μέρος της Βουδαπέστης τον <strong>Προμαχώνα των Ψαράδων</strong> (δωρεάν).
                                Αρχικά μπήκαμε στην Εκκλησία το κόστος είναι περίπου <strong>8€</strong> και θα δείτε μια πολύ όμορφη εκκλησία τόσο εξωτερικά όσο και εσωτερικά. Μετά δείτε την θέα και βγάλτε πολλές φωτογραφίες στον Προμαχώνα των Ψαράδων.
                            </li>

                            <li>
                                Τέλος, αν έχετε δυνάμεις ανεβείτε μέχρι το <strong>Church of Saint Mary Magdalene</strong>, θα δείτε έναν πολύ όμορφο πύργο και θα δείτε για ακόμα μια φορά την θέα από ψηλά.
                            </li>
                        </ul>
                    </div>

                    {/* <ImageGallery images={secondDayImages} /> */}
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        3η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η Τρίτη μέρα θα περπατήσουμε την Λεωφόρο Αντράσσυ και θα επισκεφτούμε τα Λουτρά
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-3">
                        <li>
                            <strong>Περπατήστε τη Λεωφόρο Αντράσσυ</strong>: Ξεκινάτε με τα πόδια από την <strong>Deak Ferenc</strong> και παίρνετε με τα πόδια όλη την ευθεία της Λεωφόρου Αντράσσυ. Μπορείτε να κάνετε μια στάση στην πλατεία <strong>Liszt Ferenc</strong> για καφέ ή φαγητό.
                        </li>

                        <li>
                            Το πρώτο αξιοθέατο της λίστας είναι το <strong>House of Terror</strong>. Πρόκειται για ένα κτήριο το οποίο έχει γίνει το αρχηγείο των Ναζί κατά τον δεύτερο παγκόσμιο πόλεμο και στην συνέχεια έγινε το κέντρο του κομμουνιστικού καθεστώτος. Σήμερα είναι ένα πολύ ξεχωριστό μουσείο το οποίο αξίζει να επισκεφτείτε. Το κόστος είναι <strong>10€</strong> και το μουσείο ανοίγει στις 10 το πρωί. Καλό είναι να έρθετε νωρίς καθώς δεν γίνονται κρατήσεις online.
                        </li>

                        <li>
                            Στο τέλος του δρόμου θα βρεθείτε στην εντυπωσιακή <strong>Πλατεία Ηρώων</strong>. Στο κέντρο της θα δείτε το <strong>Μνημείο της Χιλιετίας</strong> και τα αγάλματα των Ούγγρων βασιλιάδων.
                        </li>

                        <li>
                            Πίσω από την πλατεία υπάρχει ένα πολύ μεγάλο πάρκο. Επισκεφθείτε το πολύ όμορφο <strong>Κάστρο Vajdahunyad</strong>. Επίσης τον χειμώνα η λίμνη μπροστά από το κάστρο γίνεται ένα μεγάλο παγοδρόμιο.
                        </li>

                        <li>
                            Τέλος, ένα από τα βασικότερα αξιοθέατα είναι τα <strong>λουτρά Σέτσενι (Szechenyi Baths)</strong>. Διαθέτουν εξωτερικές και εσωτερικές πισίνες. Οι εξωτερικές πισίνες λειτουργούν μέχρι αργά και το νερό είναι ζεστό γύρω στις 28 βαθμούς. Αν θέλετε να γλιτώσετε χρήματα μπορείτε να πάρετε από πριν πετσέτα και παντόφλες γιατί χρεώνονται επιπλέον. Από Δευτέρα έως και Πέμπτη το κόστος είναι <strong>32€</strong> ενώ το ΠΣΚ είναι <strong>35€</strong>. Σημαντικό να αναφέρουμε ότι τα παιδιά κάτω των 14 ετών δεν επιτρέπεται να εισέλθουν στα λουτρά.
                        </li>
                    </ul>
                </div>
                <div className="mt-8 mb-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        Επιπλέον δραστηριότητες & φαγητό στην Βουδαπέστη
                    </h3>
                    <h4 className="font-bold mb-3 mt-8">Επιπλέον αξιοθέατα στην Βουδαπέστη:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Το νησί της Μαργαρίτας (δωρεάν)</strong>: Πρόκειται για ένα νησί στον Δούναβη το οποίο είναι ένα μεγάλο πάρκο, μπορείτε να πάτε με το μετρό/λεωφορείο.
                        </li>
                        <li>
                            <strong>Κρουαζιέρα στον Δούναβη με καράβι</strong>: Ιδανική δραστηριότητα για το βράδυ ώστε να δείτε τα αξιοθέατα φωτισμένα.
                        </li>
                        <li>
                            <strong>Λουτρά Gellert</strong>: Εναλλακτική επιλογή λουτρών. Το κόστος είναι ίδιο, όμως έχει πολύ λιγότερο κόσμο.
                        </li>
                        <li>
                            <strong>Rudas Thermal Bath</strong>: Επιπλέον λουτρά, είναι τα παλαιότερα λουτρά της Βουδαπέστης και τα επιλέγουν αρκετοί ντόπιοι.
                        </li>
                    </ul>

                    <h4 className="font-bold mb-3 mt-8">Χριστουγεννιάτικές αγορές στην Βουδαπέστη:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>St. Stephen Basilica</strong>: Έξω από τον ναό του Αγίου Στεφάνου υπάρχει μια μεγάλη Χριστουγεννιάτικη αγορά.
                        </li>
                        <li>
                            <strong>Vörösmarty Square</strong>: Στην πλατεία Vörösmarty μια μεγάλη αγορά γεμάτη με φαγητό και διάφορα άλλα τοπικά προϊόντα.
                        </li>
                        <li>
                            <strong>Erzsébet Square</strong>: Μικρότερη αγορά γύρω από το Ferris Wheel.
                        </li>
                    </ul>

                    <h4 className="font-bold mb-3  mt-8">Φαγητό στην Βουδαπέστη:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Cookie Beacon Brunch</strong>: Το καλύτερο Brunch της πόλης με τα καλύτερα μπισκότα.
                        </li>
                        <li>
                            <strong>Honey</strong>: Ωραία επιλογή για brunch, σε περίπτωση που δεν βρείτε στο Cookie Beacon Brunch
                        </li>
                        <li>
                            <strong>TwentySix</strong>: Υπέροχο καφέ και brunch σε έναν εσωτερικό κήπο.
                        </li>
                        <li>
                            <strong>Freyja - the croissant story</strong>: Ωραίο μαγαζάκι με πολύ νόστιμα κρουασάν.
                        </li>
                        <li>
                            <strong>Cinnamon</strong>: Brunch το οποίο βρίσκεται στην Βούδα.
                        </li>
                        <li>
                            <strong>smashy burger</strong>: Τα καλύτερα smash burgers της πόλης.
                        </li>
                        <li>
                            <strong>Budapest Bagels</strong>: Τέλεια γεμιστά bagels, με επιλογή σε γλυκά και αλμυρά.
                        </li>
                        <li>
                            <strong>Retro Lángos Budapest</strong>: Διάφορες παραλλαγές των παραδοσιακών langos.
                        </li>
                        <li>
                            <strong>Fatal Etterem</strong>: τεράστιες μερίδες σε προσιτές τιμές.
                        </li>
                        <li>
                            <strong>Paprika</strong>: must επιλογή για ουγγρικό φαγητό.
                        </li>
                        <li>
                            <strong>Bors GasztroBar</strong>: street food με μπαγκέτες και σούπες.
                        </li>
                        <li>
                            <strong>Zoo Café</strong>: Για τους λάτρεις των ζώων, ένα καφέ γεμάτο με διάφορα ζωάκια. Πρέπει να κάνετε κράτηση από πριν.
                        </li>
                    </ul>
                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="29" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>
            </div>
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>



    )
}

export default Budapest