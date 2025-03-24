import React from 'react'
import Navbar from '@/app/components/Navbar'
import { Widget2 } from '@/app/components/Widget2'
import { FaCoins } from "react-icons/fa";
import { VscRadioTower } from "react-icons/vsc";
import { GiPassport } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import Image from 'next/image';
import { ImageAccordion } from '@/app/components/ImageAccordion';

const berlinItems = [
    {
        name: 'Νόμισμα',
        icon: <FaCoins className="w-5 h-5" />,
        content: 'Το νόμισμα που χρησιμοποιούν είναι το ευρώ. Στα περισσότερα μαγαζιά δέχονται κάρτα αλλά είναι καλό να έχετε μαζί σας μερικά μετρητά',
    },
    {
        name: 'Roaming',
        icon: <VscRadioTower className="w-5 h-5" />,
        content: 'Η Γερμανία ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας',
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


const berlinImages = [
    {
        image: '/images/island.png',
        header: 'Museum Island',
        text: '5 world-class museums on this UNESCO-listed island in the Spree River'
    },
    {
        image: '/images/eastside.png',
        header: 'East Side Gallery',
        text: 'The longest open-air gallery in the world'
    },
    {
        image: '/images/reichstag.png',
        header: 'Reichstag Building',
        text: 'Iconic parliament with its stunning glass dome offering panoramic city views'
    },
    {
        image: '/images/zoo.png',
        header: 'Berlin Zoological Garden',
        text: 'Meet over 20,000 animals at the oldest zoo in Europe'
    },
    {
        image: '/images/vertel.png',
        header: 'Nikolaiviertel',
        text: 'Medieval quarter with cobblestone streets and traditional German taverns'
    }
];


function Berlin() {
    return (
        <div className="min-h-screen">
            <div><Navbar /></div>
            {/* Content with Padding to Account for Navbar */}
            <div className="pt-24 container mx-auto px-8 md:px-20 lg:px-40">
                <h1 className="text-3xl font-bold text-[#2E2E2F] mb-4">
                    Βερολίνο: Τι να κάνω και τι να δω
                </h1>
                <p className="text-[#2E2E2F]">
                    Εξερευνήστε το Βερολίνο, μια πόλη γεμάτη ιστορία, πολιτισμό και νέες
                    εμπειρίες.
                </p>
                {/* Main picture */}
                <div className="flex justify-center my-8"> {/* Center the image */}
                    <Image
                        src="/images/4.jpeg"
                        width={1200} // Increase width for a wider image
                        height={600} // Adjust height proportionally
                        alt="Berlin"
                        className="rounded-lg shadow-lg w-full max-w-4xl" // Make it responsive and add styling
                        priority // Optimize loading for above-the-fold images
                    />
                </div>
                {/* Widget */}

                <div className="mt-8">
                    <Widget2 items={berlinItems} />
                </div>
                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το αεροδρόμιο
                    </h2>
                    <p>Όλες οι αεροπορικές εξυπηρετούν από το αεροδρόμιο του Βρανδεμβούργου BER. Η μεταφορά γίνεται με το τρένο είτε την γραμμή S9 (συχνότερα δρομολόγια) είτε το τρένο FEX (γρηγορότερο). Το πιο σημαντικό είναι ότι για την μεταφορά θα πρέπει να βγάλετε το εισιτήριο σας προτού επιβιβαστείτε στο τρένο. Θα επιλέξετε αυτό που ανήκει και στις τρεις ζώνες ABC και έχει κόστος 4,40 ευρώ.  </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Μετακινήσεις εντός της πόλης
                    </h2>
                    <p>Το Βερολίνο είναι μια μεγάλη πόλη όπου θα χρησιμοποιήσετε αρκετά τα μέσα για τις μετακινήσεις σας εντός πόλης. Χωρίζεται σε 3 ζώνες όπου οι A και Β ανήκουν εντός του κέντρου της πόλης, ενώ στην C ανήκει το αεροδρόμιο ή το Potsdam.  Έτσι, θα πρέπει να επιλέξτε ανάμεσα στην επιλογή μεμονωμένων εισιτηρίων, ημερήσιων εισιτηρίων ή την επιλογή της Berlin Welcome Card ανάλογα με τις μέρες που θα διαθέσετε στην πόλη. Η Berlin Welcome Card παρέχει και διάφορες εκπτώσεις σε διάφορα αξιοθέατα.
                        Οι τιμές που κυμαίνονται στα μέσα είναι οι παρακάτω:
                        <li>Μεμονωμένο εισιτήριο (short trip ticket: έως 3 στάσεις μετρό ή 6 στάσεις τραμ ή λεωφορείο): 2,60 €</li>
                        <li>Μεμονωμένο εισιτήριο (2 ωρών): 3,80 €</li>
                        <li>Ημερήσιο εισιτήριο: 10,60 €</li>
                        <li>Berlin Welcome Card (3 ημέρες): 42.90 €</li>
                        <li>Berlin Welcome Card + Museum Islands (3 ημέρες): 62.50 €</li>
                        Στην Berlin Welcome Card υπάρχει η δυνατότητα της έκδοσης κάρτας για από 2 έως 6 ημέρες.
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Διαμονή
                    </h2>
                    <p>Για την διαμονή σας στο Βερολίνο προτιμήστε κάποιο ξενοδοχείο που βρίσκεται πολύ κοντά σε κάποια στάση του μετρό, για την ευκολότερη σας μετακίνηση. Η πιο δημοφιλής περιοχή είναι το Mitte, όπου βρίσκεται στο κέντρο της πόλης και έχετε πρόσβαση έτσι στα περισσότερα αξιοθέατα. </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">4. Top 5 Αξιοθέατα</h2>
                    <div className="flex justify-center">
                        <ImageAccordion items={berlinImages} />
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        5. Οδηγός για Βερολίνο
                    </h2>
                    <p>Τα αξιοθέατα στο Βερολίνο έχουν αρκετά μεγάλη απόσταση μεταξύ τους οπότε ένας καλός προγραμματισμός είναι απαραίτητος αν θέλουμε να δούμε όσο τα περισσότερα γίνεται. </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>
                    <p className="mb-4">Θα ξεκινήσουμε την περιήγηση μας από <strong>Alexanderplatz</strong> την πιο κεντρική πλατεία του Βερολίνου. Θα βρείτε διάφορα εμπορικά μαγαζιά, εστιατόρια, fast food και πολυκαταστήματα. Εμείς θα ξεκινήσουμε με το Παγκόσμιο Ρολόι, όπου αναφέρεται η ώρα από διάφορες ώρες το κόσμου. Το επόμενο κοντινό αξιοθέατο είναι ο Πύργος της Τηλεόρασης, το ψηλότερο κτήριο του Βερολίνου με ύψος 368 μέτρα. Το κόστος για την είσοδο είναι 23,50 ευρώ. Λίγα μέτρα δίπλα από το παγκόσμιο ρολόι θα παρατηρήσετε ένα μαγαζί με συνήθως αρκετά μεγάλη ουρά, το CURRY61 που μπορείτε να δοκιμάσετε το παραδοσιακό curry wurst.</p>

                    <p className="mb-4">Σε κοντινή απόσταση από την Alexanderplatz βρίσκεται το η Hackescher Markt μια συνοικία που διατηρεί ακόμη τις χρωματιστές art Nuovo προσόψεις. Έχει τα καλύτερα cafe, εστιατόρια και φούρνους. Ενδεικτικά εμείς επισκεφτήκαμε το SOFI για branch, το LAP coffee, το ChickenBuzz, AERA για κρουασάν και το Cinnamood για cinnamon rolls. Σε κοντινή απόσταση υπάρχει και το κτήριο της Νέας Συναγωγής με έναν εντυπωσιακό τρούλο.</p>

                    <p className="mb-4">Επόμενο στην λίστα μας είναι το Rotes Rathaus ή αλλιώς το κόκκινο δημαρχείο. Η είσοδος είναι δωρεάν όμως πρώτα ελέγξτε τις ώρες λειτουργίας του.</p>

                    <p className="mb-4">Τέλος, ακριβώς απέναντι από το δημαρχείο υπάρχει η περιοχή Nikolaiviertel. Είναι η πιο γραφική περιοχή στο Βερολίνο με τα πολύχρωμα σπιτάκια και την art Nuovo αρχιτεκτονική. Μέσα σε αυτή την περιοχή υπάρχει και η St. Nicholas Church Museum μια από τις παλαιότερες εκκλησίες της πόλης. Το κόστος για την είσοδο στην εκκλησία είναι 7 ευρώ.</p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα
                    </h3>
                    <p className="mb-4">Το βασικό αξιοθέατο της ημέρας είναι το Νησί των Μουσείων. Είναι ένα εντυπωσιακό τεχνητό νησί πάνω στον ποταμό Spree όπου έχει μαζεμένα μουσεία και τον καθεδρικό ναό του Βερολίνου. Ξεκινήστε με τον  Berliner Dom  το εισιτήριο κοστίζει 10 ευρώ και μπορείτε να θαυμάσετε το εσωτερικό του ναού και να ανεβείτε μέχρι τον τρούλο ώστε να θαυμάσετε και την θέα από ψηλά. Το πιο διάσημο μουσείο αυτό της Περγάμου, το οποίο ήταν κλειστό για ανακαίνιση όταν το επισκεφτήκαμε εμείς. Τα υπόλοιπα μουσεία είναι τα: Παλαιό Μουσείο (Altes Museum), Νέο Μουσείο (Neues Museum), Παλαιά Εθνική Πινακοθήκη (Alte Nationalgalerie) και το Μουσείο Μπόντε (Bode-Museum), γνωστό ως Μουσείο Κάιζερ-Φρίντριχ (Kaiser-Friedrich-Museum). Αν έχετε την Berlin Welcome Card που σας δίνει πρόσβαση σε όλα τα μουσεία. </p>
                    <p className="mb-4">Συνεχίστε στην Unter den Linden τον μεγαλύτερο δρόμο του Βερολίνου, ιδιαίτερα τα Χριστούγεννα είναι πραγματικά εντυπωσιακός. Αν είστε λάτρης των μπισκότων μην παραλείψετε το New Yorker Cookies. Συνεχίζοντας στην Babelplatz, πρόκειται για μια όμορφη πλατεία όπου Χριστούγεννα διοργανώνεται αγορά. Τέλος, ένα δωρεάν μουσείο που αξίζει να αφιερώσετε λίγο χρόνο είναι το Tränenpalast, ένα παλιό σημείο διέλευσης των συνόρων, που τώρα στεγάζει μια μόνιμη έκθεση για την καθημερινή ζωή στην τότε διαιρεμένη Γερμανία.</p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        3η Ημέρα
                    </h3>
                    <p className="mb-4">
                        Θα συνεχίσουμε την περιήγηση στο κέντρο της πόλης και την πλατεία <strong>Gendarmenmarkt</strong>. Εκεί υπάρχουν δύο πανομοιότυπες εκκλησίες στις οποίες η είσοδος είναι <strong>δωρεάν</strong>. Ανεβαίνοντας πάλι στην <strong>Unter den Linden</strong> στρίβουμε αριστερά ώστε να βρεθούμε στο σύμβολο της πόλης την <strong>Πύλη του Βρανδεμβούργου</strong>.
                    </p>

                    <p className="mb-4">
                        Συνεχίζοντας δεξιά από την Πύλη του Βρανδεμβούργου θα βρεθούμε στο <strong>Γερμανικό Κοινοβούλιο</strong>, η είσοδος είναι <strong>δωρεάν</strong> αλλά θα πρέπει να έχετε κάνει εκ των προτέρων την κράτηση σας από το <strong>επίσημο site</strong>.
                    </p>

                    <p className="mb-4">
                        Έπειτα θα κατευθυνθούμε στο <strong>Μνημείο Ολοκαυτώματος (Memorial to the Murdered Jews of Europe)</strong>. Αποτελείται από 2711 πέτρινους πλίνθους και είναι αφιερωμένα στα θύματα των Εβραίων από τους Ναζί. Η είσοδος είναι <strong>δωρεάν</strong>.
                    </p>

                    <p className="mb-4">
                        Συνεχίζοντας στην Gertrud-Kolmar θα βρεθούμε στο <strong>Mall of Berlin</strong>. Είναι μια καλή ευκαιρία για ξεκούραση και φαγητό καθώς στον τελευταίο όροφο μπορείτε να βρείτε πολλά fast food και εστιατόρια. Βγαίνοντας από το εμπορικό θα βρεθείτε στην <strong>Potsdamer Platz</strong>. Τα Χριστούγεννα διοργανώνεται και εδώ <strong>αγορά</strong>.
                    </p>

                    <p className="mb-4">
                        Επόμενο στην λίστα μας είναι το <strong>Topography of Terror</strong>. Είναι ένα πρώην αρχηγείο της Γκεστάπο, καταγράφοντας τη φρίκη του ναζισμού. Συνεχίζοντας θα αναζητήσουμε το <strong>Checkpoint Charlie</strong>, σημείο ελέγχου για την είσοδο και έξοδο στο <strong>Ανατολικό Βερολίνο</strong>.
                    </p>

                    <p className="mb-4">
                        Ένα ακόμα <strong>δωρεάν μουσείο</strong> που αξίζει να αφιερώσετε λίγο χρόνο είναι το <strong>Jewish Museum Berlin</strong> είναι το μεγαλύτερο εβραϊκό μουσείο στην Ευρώπη και δίνει στον επισκέπτη μια εικόνα των 1700 χρόνων γερμανοεβραϊκής ιστορίας.
                    </p>

                    <p className="mb-4">
                        Τέλος, θα χρειαστεί να πάρουμε το μετρό από το Hallesches Tor (γραμμές <strong>U1</strong> ή <strong>U3</strong>) προς τον σταθμό Warschauer. Εκεί υπάρχει το διάσημο <strong>East Side Gallery</strong>, η γέφυρα <strong>Oberbaumbrücke</strong> και η <strong>Uber Arena</strong>.
                    </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        4η Ημέρα
                    </h3>
                    <p className="mb-4">
                        Από την <strong>Alexanderplatz</strong> θα πάρουμε το λεωφορείο <strong>100</strong> και κατεβένουμε στην στάση <strong>Großer Stern</strong>, ώστε να φτάσουμε στο <strong>Victory Column</strong>. Είναι μια εντυπωσιακή στήλη που στην κορυφή της βρίσκεται το άγαλμα της θεάς Νίκης. Μπορούμε να ανέβουμε μέχρι πάνω (4 ευρώ). Αν το επιτρέπει ο καιρός, μετά μπορούμε να περιηγηθούμε εντός του <strong>Tiergarten</strong>, το μεγαλύτερο πάρκο του Βερολίνου.
                    </p>

                    <p className="mb-4">
                        Επόμενος σταθμός είναι ο <strong>Ζωολογικός Κήπος του Βερολίνου</strong>. Το κόστος της εισόδου είναι στα 17 ευρώ. Θα σας πάρει αρκετές ώρες να περιηγηθείτε σε όλο το πάρκο. Βγαίνοντας από την κεντρική πύλη του ζωολογικού, σίγουρα θα έχετε προσέξει το <strong>Kaiser Wilhelm Memorial Church</strong>. Ακόμα μπορούμε να πάμε στο <strong>KaDeWe</strong>, το δεύτερο μεγαλύτερο εμπορικό κέντρο της Ευρώπης. Όμως, μέσα έχει τα ακριβότερα brands του κόσμου. Αφού είστε εκεί, αξίζει μια επίσκεψη στο <strong>AERA</strong> για καφέ ή πρωινό και στο <strong>San Sebastian Café the Original</strong> για ένα cheesecake.
                    </p>

                    <p className="mb-4">
                        Τελευταίο αξιοθέατο στην σημερινή ημέρα είναι το <strong>Charlottenburg Palace</strong>. Για να φτάσουμε εκεί, θα χρειαστεί να πάρουμε το λεωφορείο <strong>M45</strong>. Κατασκευασμένο το 1699 ως θερινή κατοικία της Σοφίας Σάρλοτ, συζύγου του βασιλιά Φρειδερίκου Α. Η είσοδος στο παλάτι κοστίζει 12 ευρώ.
                    </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        5η Ημέρα
                    </h3>
                    <p className="mb-4">
                        Σε ένα πολύ συμπιεσμένο πρόγραμμα, μπορείτε να δείτε σχεδόν τα βασικά αξιοθέατα του Βερολίνου. Αν έχετε κάποια ακόμα μέρα και θέλετε να δείτε κάτι διαφορετικό, τότε μπορείτε να επισκεφτείτε μια κοντινή πόλη, το <strong>Potsdam</strong>.
                    </p>

                    <p className="mb-4">
                        Αρχικά, η πρόσβαση στο <strong>Potsdam</strong> γίνεται εύκολα μέσω τρένου της γραμμής <strong>S7</strong>. Υπενθυμίζω ότι το εισιτήριο θα πρέπει να είναι για την γραμμή <strong>C</strong>. Το τρένο κάνει περίπου 40 λεπτά να φτάσει στο <strong>Potsdam</strong>. Το Google Maps θα προτείνει να πάρετε το τραμ για να φτάσετε στο κέντρο της πόλης. Αντίθετα, προτείνουμε να βγείτε έξω και να αρχίσετε να περπατάτε μέχρι το κέντρο της πόλης.
                    </p>

                    <p className="mb-4">
                        Το πρώτο που θα δούμε είναι η πλατεία με την εκκλησία <strong>St. Nicholas Church</strong> (η είσοδος είναι δωρεάν). Σε εκείνη την πλατεία θα βρούμε ακόμα το <strong>Potsdam Museum</strong> (εμείς δεν το επισκεφτήκαμε). Αν συνεχίσουμε ευθεία, θα περάσουμε την πλατεία <strong>Platz der Einheit</strong> και θα φτάσουμε στο πλακόστρωτο, πιο γραφικό σημείο της πόλης, με διάφορα <strong>café</strong> και εμπορικά μαγαζιά. Αν θέλετε να πιείτε καφέ ή να φάτε κάτι, μπορείτε να επιλέξτε το <strong>Cafe Kaiserwetter</strong> ή το <strong>Café Miss Green Bean</strong>.
                    </p>

                    <p className="mb-4">
                        Μετά, μπορείτε να συνεχίσετε στην <strong>Ολλανδική συνοικία</strong> με τα ομοιόμορφα σπίτια με το χαρακτηριστικό κόκκινο τούβλο, όπως και την <strong>Nauener Tor</strong>. Το <strong>Potsdam</strong> έχει ακόμα και μια μικρότερη <strong>Ρωσική συνοικία</strong> με τα χαρακτηριστικά σπίτια από ξύλο. Επίσης, διαθέτει και την δική του, μικρότερη <strong>Πύλη του Βρανδεμβούργου</strong>. Ακριβώς δίπλα από την πύλη υπάρχει το <strong>Spieluhr - Gottfried Höfe</strong>, μια χρυσή μπάλα από πορσελάνη που χτυπάει κάθε ώρα. Πρόκειται για ένα <strong>music box</strong> σχεδιασμένο από τον <strong>Gottfried Hörer</strong> το 1977.
                    </p>

                    <p className="mb-4">
                        Τέλος, ένα από τα πιο διάσημα αξιοθέατα του <strong>Potsdam</strong> είναι το πάρκο <strong>Schlosspark Sanssouci</strong> με το εντυπωσιακό <strong>ανάκτορο Sanssouci</strong>, έχοντας ως πρότυπο τις Βερσαλλίες. Η είσοδος στο παλάτι κοστίζει <strong>14 ευρώ</strong>. Βέβαια, η περιήγηση στο εσωτερικό του παλατιού δεν έχει τεράστιο ενδιαφέρον και θα μπορούσατε να την παραλείψετε.
                    </p>
                </div>

            </div>
        </div>



    )
}

export default Berlin