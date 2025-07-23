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
        content: 'Το νόμισμα που χρησιμοποιούν είναι το Lei (RON). Η αναλογία μεταξύ ευρώ και Lei είναι περίπου 1 EUR = 4.9 RON',
    },
    {
        name: 'Roaming',
        icon: <VscRadioTower className="w-5 h-5" />,
        content: 'Η Ρουμανία ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας',
    },
    {
        name: 'Έγγραφα',
        icon: <GiPassport className="w-5 h-5" />,
        content: 'Ταυτότητα/Διαβατήριο',
    },
    {
        name: 'Γλώσσα',
        icon: <FaLanguage className="w-5 h-5" />,
        content: 'Φυσικά μιλάνε Ρουμανικά, όμως στα περισσότερα μαγαζία μπορούσαν να μιλήσουν αγγλικά και ήταν αρκετά εύκολο να συννενοηθούμε',
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
        image: '/bucharest/river.jpg',
        header: 'Dambovita River'
    },
    {
        image: '/bucharest/curturesti.jpg',
        header: 'Cărturești Carusel'
    },
    {
        image: '/bucharest/museum.jpg',
        header: 'National Museum'
    },
    {
        image: '/bucharest/monastery.jpg',
        header: 'Stavropoleos Monastery'
    }
];

const secondDayImages = [
    {
        image: '/bucharest/athenium.jpg',
        header: 'Romanian Athenaeum'
    },
    {
        image: '/bucharest/village.jpg',
        header: 'Village Museum'
    },
    {
        image: '/bucharest/arc.jpg',
        header: 'Arcul de Triumf'
    },
    {
        image: '/bucharest/biblioteca.jpg',
        header: 'University Library'
    }
];


function Bucharest() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Βουκουρέστι Αξιοθέατα</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/destinations/bucharest"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Ταξιδωτικός Οδηγός για το Βουκουρέστι | Τι να δω και τι να κάνω στο Βουκουρέστι"
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
                    Βουκουρέστι, τι να δω και τι να κάνω
                </h1>

                {/* Main picture */}
                <div className="flex justify-center my-8"> {/* Center the image */}
                    <Image
                        src="/bucharest/bucharest-hero.jpg"
                        width={1200} // Increase width for a wider image
                        height={600} // Adjust height proportionally
                        alt="vienna-palace"
                        className="rounded-lg shadow-lg w-full max-w-4xl" // Make it responsive and add styling
                        priority // Optimize loading for above-the-fold images
                    />
                </div>

                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Ετοιμαστείτε να ανακαλύψετε μια πόλη που θα σας εκπλήξει σε κάθε της γωνιά!</p>
                <p className="mb-4 text-justify">
                    Το Βουκουρέστι, η πρωτεύουσα της Ρουμανίας, είναι ένας ζωντανός καμβάς όπου η μεγαλοπρέπεια της Belle Époque συναντά την κληρονομιά του κομμουνισμού και τη δυναμική ενέργεια μιας σύγχρονης ευρωπαϊκής πρωτεύουσας.</p>


                {/* Widget */}

                <div className="mt-8">
                    <Widget2 items={barcelonaItems} />
                </div>
                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το Αεροδρόμιο Henri Coandă στο Βουκουρέστι
                    </h2>
                    <p className='text-justify'>Φτάσατε λοιπόν στο Διεθνές Αεροδρόμιο Henri Coandă (OTP), γνωστό και ως αεροδρόμιο του Οτοπένι, το κύριο αεροδρόμιο της Ρουμανίας που βρίσκεται περίπου 16,5 χιλιόμετρα βόρεια του κέντρου του Βουκουρεστίου</p>

                    <p className='text-justify mt-8'>
                        Η πιο δημοφιλής και οικονομική λύση είναι το λεωφορείο 783 Express. Αυτή η γραμμή συνδέει απευθείας το αεροδρόμιο με το κέντρο της πόλης, την Piata Unirii. Το εισιτήριο κοστίζει  1 ευρώ (ή περίπου 5 lei Ρουμανίας). Για την πληρωμή έχετε δύο επιλογές: Tap and Pay (Απλά χρησιμοποιήστε την κάρτα σας απευθείας στο μηχάνημα μέσα στο λεωφορείο). Εναλλακτικά, μπορείτε να αγοράσετε το εισιτήριό σας από τα ειδικά εκδοτήρια που βρίσκονται εντός του αεροδρομίου.                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Μετακινήσεις εντός της πόλης
                    </h2>
                    <p className='text-justify'>
                        Το Βουκουρέστι, παρόλο που είναι μια πρωτεύουσα, έχει ένα αρκετά συμπαγές κέντρο, πράγμα που σημαίνει ότι τα περισσότερα από τα κύρια αξιοθέατα βρίσκονται εντός ή σε κοντινή απόσταση από την Παλιά Πόλη. Το πιο εκτεταμένο και εύχρηστο μέσο μαζικής μεταφοράς είναι τα λεωφορεία, αν και η πόλη διαθέτει επίσης ένα δίκτυο τραμ και μετρό. Το κόστος του εισιτηρίου για μία διαδρομή είναι περίπου 0,60€ (ή 3 lei Ρουμανίας).
                    </p>
                    <p className='text-justify mt-8'>
                        Για τις μετακινήσεις, ειδικά τις βραδινές, όταν ίσως θέλετε να αποφύγετε τα μέσα μαζικής μεταφοράς ή να καλύψετε μεγαλύτερες αποστάσεις, χρησιμοποιείστε την Bolt. Λειτουργεί παρόμοια με το Uber και είναι εξαιρετικά οικονομική στο Βουκουρέστι.
                    </p>
                </div>
                <div className='mt-8'><div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-tour-ids="444964,492833,982185"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/bucharest-l111/">GetYourGuide</a></span></div></div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Διαμονή
                    </h2>
                    <p className="mb-4 text-justify">
                        Η Παλιά Πόλη του Βουκουρεστίου είναι η ιδανική περιοχή για διαμονή, ειδικά αν επισκέπτεστε την πόλη για πρώτη φορά.
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Οδηγός 3 ημερών για το Βουκουρέστι
                    </h2>
                </div>
                <div className="mt-8">

                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>

                    <p className="mb-4 text-justify">
                        Η πρώτη σας ημέρα είναι αφιερωμένη στην καρδιά του Βουκουρεστίου, την <strong>Παλιά Πόλη</strong>, και το εμβληματικό της κτίριο, το <strong>Παλάτι του Κοινοβουλίου</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Ξεκινήστε την ημέρα σας με έναν καφέ και ένα παραδοσιακό ρουμανικό <strong>covrigi</strong> (είδος κουλουριού) σε ένα από τα πολλά καφέ της Παλιάς Πόλης. Αυτό που μας εντυπωσίασε ήταν το <strong>Scovergăria Micăi</strong> με πολλούς ντόπιους να το προτιμούν.
                    </p>

                    <p className="mb-4 text-justify">
                        Ξεκινήστε με το <strong>Palace of Parliament</strong> ή το <strong>παλάτι του λαού</strong>, το <strong>βαρύτερο κτήριο στον κόσμο</strong>. Ένα από τα μεγαλύτερα και πιο εντυπωσιακά διοικητικά κτίρια στον κόσμο. Προτείνουμε να κάνετε την ξενάγηση στο εσωτερικό του παλατιού. Θα σας δώσει μια εντελώς διαφορετική οπτική για το μέγεθος και την ιστορία αυτού του γιγάντιου οικοδομήματος. Είναι φτιαγμένο <strong>εξ ολοκλήρου με υλικά από τη Ρουμανία</strong>, γεγονός που το καθιστά ακόμα πιο μοναδικό. Να θυμάστε ότι οι ντόπιοι έχουν ανάμεικτα συναισθήματα για αυτό, καθώς αποτελεί <strong>σύμβολο τόσο της μεγαλοπρέπειας όσο και της καταπίεσης</strong> της κομμουνιστικής περιόδου.
                    </p>

                    <p className="mb-4 text-justify">
                        Επιστρέφοντας προς την Παλιά Πόλη, περάστε από την <strong>Piața Unirii</strong>, μια από τις μεγαλύτερες πλατείες του Βουκουρεστίου, με τα εντυπωσιακά σιντριβάνια της.
                    </p>

                    <p className="mb-4 text-justify">
                        Αφιερώστε το υπόλοιπο στην εξερεύνηση της Παλιάς Πόλης:
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Manucs Inn</strong>: Ένα από τα παλαιότερα και πιο ιστορικά πανδοχεία της πόλης, ιδανικό για έναν καφέ ή ένα ποτό.</li>
                        <li><strong>St. Anthonys Church</strong>: Μια από τις παλαιότερες εκκλησίες του Βουκουρεστίου, με ενδιαφέρουσα ιστορία.</li>
                        <li><strong>Cărturești Carusel</strong>: Ένα από τα ομορφότερα βιβλιοπωλεία του κόσμου, με εντυπωσιακή αρχιτεκτονική και τεράστια ποικιλία βιβλίων. Μπορείτε να το επισκεφτείτε πρωινές ώρες ώστε να αποφύγετε την πολυκοσμία.</li>
                        <li><strong>The Church of the Stavropoleos Monastery</strong>: Ένα μικρό αλλά εκπληκτικό παράδειγμα ρουμανικής αρχιτεκτονικής, γνωστό για τις περίτεχνες τοιχογραφίες του.</li>
                        <li><strong>Art Safari</strong></li>
                        <li><strong>National Museum of Romanian History</strong>: Βρίσκεται σε ένα ιστορικό κτίριο και φιλοξενεί μια εντυπωσιακή συλλογή που καλύπτει την ιστορία της Ρουμανίας από τους προϊστορικούς χρόνους μέχρι σήμερα.</li>
                        <li><strong>Macca - Vilacrosse Passage</strong>: Μια όμορφη στοά με καφέ και εστιατόρια.</li>
                        <li><strong>St Nicholas Russian Church</strong>: Μια εντυπωσιακή ρωσική ορθόδοξη εκκλησία με χρυσούς τρούλους, που ξεχωρίζει στην καρδιά της πόλης.</li>
                        <li><strong>The New Saint George Church</strong>: Μια σημαντική εκκλησία με πλούσια ιστορία, που συνδέεται με τη ρουμανική μοναρχία.</li>
                    </ul>

                    <p className="mb-4 text-justify">
                        Μπορείτε να κλείσετε τη βραδιά σας με ένα ποτό στο <strong>Nomad Skybar</strong>.
                    </p>


                    <ImageGallery images={firstDayImages} />
                </div>

                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Τη δεύτερη αυτή μέρα, εκτός από την Παλιά Πόλη, θα φτάσουμε βορειότερα ώστε να επισκεφτούμε το <strong>Arcul de Triumf</strong> και το πάρκο <strong>King Michael I</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Ξεκινήστε την περιήγησή σας από την περιοχή της <strong>Πλατείας Επανάστασης</strong>. Εδώ μπορείτε να δείτε την εντυπωσιακή <strong>Central University Library Carol I</strong>. Ακριβώς δίπλα βρίσκεται το <strong>Romanian Athenaeum</strong>, ένα εκπληκτικό κτίριο που στεγάζει τη Φιλαρμονική <strong>George Enescu</strong> και φιλοξενεί πολλές συναυλίες. Η είσοδος κοστίζει <strong>10 lei</strong> (μόνο μετρητά) για να δείτε το εσωτερικό του.
                    </p>

                    <p className="mb-4 text-justify">
                        Σε κοντινή απόσταση βρίσκεται το λιγότερο τουριστικό <strong>Cărturești Verona</strong>, ένα βιβλιοπωλείο με όμορφο κήπο και χαλαρή ατμόσφαιρα.
                    </p>

                    <p className="mb-4 text-justify">
                        Από εκεί, περπατήστε προς τους <strong>Cismigiu Gardens</strong>, τον παλαιότερο και έναν από τους πιο όμορφους δημόσιους κήπους της πόλης. Με καλό καιρό, μπορείτε να απολαύσετε βαρκάδα στη λίμνη τους.
                    </p>

                    <p className="mb-4 text-justify">
                        Συνεχίζοντας βορειότερα (με τα πόδια ή μέσο μεταφοράς), θα φτάσετε στο <strong>Arcul de Triumf</strong> - την αψίδα του θριάμβου του Βουκουρεστίου. Κοντά βρίσκεται το <strong>Dimitrie Gusti National Village Museum</strong>, ένα μοναδικό υπαίθριο μουσείο με παραδοσιακά ρουμανικά σπίτια, εκκλησίες και αγροκτήματα από όλη τη χώρα.
                    </p>

                    <p className="mb-4 text-justify">
                        Τέλος, μπορείτε να χαλαρώσετε στο <strong>King Michael I Park</strong> (ή <strong>Herăstrău Park</strong>), ένα τεράστιο πάρκο με λίμνη, μονοπάτια και πολλές δραστηριότητες - από τα πιο όμορφα πάρκα της πόλης.
                    </p>
                    <ImageGallery images={secondDayImages} />
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        3η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η βασική δραστηριότητα για αυτήν την ημέρα είναι η επίσκεψη στα <strong>Therme București</strong>, τα μεγαλύτερα λουτρά της Ευρώπης. Αξιοσημείωτη είναι η καθαριότητα και η οργάνωση του χώρου. Κατά την είσοδο, θα λάβετε ένα <strong>ηλεκτρονικό βραχιόλι</strong> που λειτουργεί ως κλειδί για το ντουλαπάκι σας και επιτρέπει την πρόσβαση στις διαφορετικές ζώνες, καθώς και αγορές εντός των λουτρών (πληρωμή κατά την έξοδο). <span className="font-semibold">Σημείωση:</span> Οι πετσέτες και οι παντόφλες χρεώνονται επιπλέον.
                    </p>

                    <div className="mb-6">
                        <h4 className="font-bold mb-2">Οι 3 ζώνες των λουτρών:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Galaxy:</strong> Χώρος με νεροτσουλήθρες, ιδανικός για οικογένειες με παιδιά</li>
                            <li><strong>The Palm:</strong> Κύριος χώρος με πισίνες (εσωτερικές & εξωτερικές), για επισκέπτες άνω των 14 ετών. Περιλαμβάνει πρόσβαση και στο Galaxy.</li>
                            <li><strong>Elysium:</strong> Exclusive ζώνη με σάουνες, εγκαταστάσεις spa,ντους calla, κρεβάτια υπέρυθρης ακτινοβολίας, pool bar και εστιατόριο με δέντρο μάνγκο. Πρόσβαση σε όλες τις ζώνες.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">Πρακτικές Πληροφορίες:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Τιμές (The Palm):</strong> 20€ (3 ώρες), 26€ (4.5 ώρες), 33€ (ολόκληρη ημέρα)</li>
                            <li><strong>Κράτηση:</strong> <a href="https://www.therme.ro/shop/wizard" className="text-blue-600 hover:underline">Online κράτηση</a></li>
                            <li><strong>Μετακίνηση:</strong> Λεωφορείο 442 από την Piata Presei</li>
                            <li><strong>Τοποθεσία:</strong> Κοντά στο αεροδρόμιο Henri Coandă (OTP), μπορεί να συνδιαστεί η επίσκεψη σας πριν την αναχώρηση</li>
                        </ul>
                    </div>

                    <div className="border-t-2 border-gray-200 pt-4 mb-6">
                        <h3 className="text-xl font-bold mb-4">Επιλογή Β: Μονοήμερη Εκδρομή στην Τρανσυλβανία</h3>
                        <p className="mb-4 text-justify">
                            Εναλλακτική λύση για όσους επιθυμούν να δουν την Τρανσυλβανία. Οι οργανωμένες εκδρομές συνήθως περιλαμβάνουν:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Κάστρο Peleș:</strong> Εντυπωσιακό νεο-αναγεννησιακό κάστρο</li>
                            <li><strong>Μπρασόβ (Brașov):</strong> Μια μικρή μεσαιωνική πόλη με τη Μαύρη Εκκλησία</li>
                            <li><strong>Κάστρο Μπραν (Bran Castle):</strong> Το θρυλικό Κάστρο του Δράκουλα, συνδεδεμένο με τον θρύλο του Βλαντ Τέπες.</li>
                        </ul>
                    </div>
                    <div className='mt-8'><div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="2" data-gyg-partner-id="0OAQQKO" data-gyg-tour-ids="151028,135264"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/bucharest-l111/">GetYourGuide</a></span></div></div>
                </div>
            </div>
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>



    )
}

export default Bucharest