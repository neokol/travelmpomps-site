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
        content: 'Το νόμισμα που χρησιμοποιούν είναι η Λίρα (GBP). Η αναλογία μεταξύ ευρώ και Lei είναι περίπου 1 GBP = 1.16 EUR',
    },
    {
        name: 'Roaming',
        icon: <VscRadioTower className="w-5 h-5" />,
        content: 'Η Αγγλία ανήκει στις χώρες που ισχύει το δωρεάν roaming, συνεπώς μπορείτε να χρησιμοποιείτε κανονικά τα λεπτά και τα δεδομένα σας',
    },
    {
        name: 'Έγγραφα',
        icon: <GiPassport className="w-5 h-5" />,
        content: 'Διαβατήριο και βίζα',
    },
    {
        name: 'Γλώσσα',
        icon: <FaLanguage className="w-5 h-5" />,
        content: 'Φυσικά μιλάνε Αγγλικά',
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
    title: "Λονδίνο, τι να δω και τι να κάνω  | Travelmpomps",
    description: "Ταξιδωτικός Οδηγός για το Λονδίνο - Τι να δω και τι να κάνω στο Λονδίνο",
    keywords: "Λονδίνο, Αγγλία, ταξιδιωτικός οδηγός, αξιοθέατα, μεταφορές, διαμονή, δραστηριότητες, Λονδίνο αξιοθέατα, Λονδίνο ταξίδια, Λονδίνο διαμονή, Λονδίνο μεταφορές",
}

function London() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Λονδίνο Αξιοθέατα</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/destinations/london"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Ταξιδωτικός Οδηγός για το Λονδίνο | Τι να δω και τι να κάνω στο Λονδίνο"
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
                    Λονδίνο, τι να δω και τι να κάνω
                </h1>

                {/* Main picture */}
                <div className="flex justify-center my-8"> {/* Center the image */}
                    <Image
                        src="/images/londonguide2.jpg"
                        width={1200} // Increase width for a wider image
                        height={600} // Adjust height proportionally
                        alt="tower-bridge-london"
                        className="rounded-lg shadow-lg w-full max-w-4xl" // Make it responsive and add styling
                        priority // Optimize loading for above-the-fold images
                    />
                </div>

                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Ένα must ταξίδι, στην πιο πολυπολιτισμική πόλη της Ευρώπης. </p>
                <p className="mb-4 text-justify">
                    Επισκέπτεστε το Λονδίνο για πρώτη φορά; Αυτός ο ταξιδιωτικός οδηγός για το Λονδίνο έχει όλα όσα πρέπει να γνωρίζετε πριν από το πρώτο σας ταξίδι σε αυτή την υπέροχη πόλη.</p>
                <p className="mb-4 text-justify">
                    Ο σχεδιασμός ενός ταξιδιού σε μια μεγάλη πόλη για πρώτη φορά μπορεί να είναι κουραστικός. Πρέπει να υπολογίσετε τις δημόσιες συγκοινωνίες και να επιλέξετε προσεκτικά τα μέρη που θα επισκεφτείτε. </p>

                {/* Widget */}

                <div className="mt-8">
                    <Widget2 items={barcelonaItems} />
                </div>
                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        1. Μεταφορά από το Αεροδρόμιο
                    </h2>
                    <p className='text-justify'>Η πτήσεις από την Ελλάδα εξυπηρετούνται από 4 διαφορετικά αεροδρόμια: To Χίθροου, το Γκατγουικ, το Στάντστεντ και το Λούτον. Κάθε ένα έχει διαφορετικά μέσα που εξυπηρετούν. </p>

                    <p className='text-justify mt-8'>
                        Το δικό μας ταξίδι άρχισε από το αεροδρόμιο του Gatwick, για να φτάσουμε στο κέντρο της πόλης, έπρεπε να πάρουμε το τρένο, Thameslink. Το κόστος της μετακίνησης είναι στις 12,45 λίρες (περίπου 14,5 ευρώ). Υπάρχει επίσης και η οικονομικότερη επιλογή του λεωφορείου όμως δεν το προτιμήσαμε καθώς είναι αρκετά πιο αργό.</p>
                    <p className='text-justify mt-8'>
                        Δεν χρειάζεται να κλείσετε κάποιο εισιτήριο νωρίτερα απλά χτυπήστε την ανέπαφη κάρτα σας (προτιμήστε μια Revolut) κατά την είσοδο σας και την έξοδο σας από τον σταθμό.</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        2. Μετακινήσεις εντός της πόλης
                    </h2>
                    <p className='text-justify'>
                        Το Λονδίνο είναι μια πολύ μεγάλη πόλη και θα χρειαστεί να χρησιμοποιήσετε αρκετά τα μέσα για τις μετακινήσεις σας. Εμείς δεν βγάλαμε κάποια κάρτα για την μετακίνηση μας απλά χρησιμοποιούσαμε τις ανέπαφες χρεωστικές κάρτες μας.
                    </p>
                    <p className='text-justify mt-8'>
                        <strong>Λεωφορείο: </strong>Το κλασικά διώροφα κόκκινα λεωφορεία είναι ένα από τους καλύτερους τρόπους μετακίνησης εντός της πόλης. Το κόστος της διαδρομής είναι πάντα 1.75 λίρες και θα χρειαστεί να χτυπήσετε την κάρτα σας κατά της είσοδο σε αυτό. Αν κατά την ημέρα φτάσετε το όριο των 5.25 λιρών τότε δεν θα επιβαρυνθείτε με περαιτέρω κόστος.
                    </p>
                    <p className='text-justify mt-8'>
                        <strong>Μετρό: </strong>Το μετρό (tube) είναι η κλασική επιλογή για μετακινηθείτε γρήγορα εντός της πόλης. Εδώ θα χρειαστεί να κάνετε tap της κάρτα σας (touching in) όταν εισέρχεστε στο σταθμό και να κάνετε πάλι tap την κάρτα σας κατά την έξοδο σας (touching out). Αυτό γίνεται για να υπολογιστεί το κόστος με βάση τις ζώνες που ταξιδέψατε.                     </p>
                    <p className='text-justify mt-8'>
                        Υπενθύμιση: Το χρήματα θα αφαιρεθούν συγκεντρωτικά την επόμενη ημέρα. Οπότε εκείνη τη στιγμή δε θα έχουν αφαιρεθεί χρήματα από το λογαριασμός σας.                     </p>
                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-location-id="57" data-gyg-locale-code="en-US" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/london-l57/">GetYourGuide</a></span></div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        3. Διαμονή
                    </h2>
                    <p className="mb-4 text-justify">
                        Αυτή είναι μια πραγματικά δύσκολη επιλογή για το Λονδίνο. Είναι πραγματικά τεράστιο και η μόνη μας συμβουλή για τώρα είναι να κλείσετε κάπου με εύκολη πρόσβαση στα μέσα. Δηλαδή όσα πιο κοντά γίνεται σε σταθμό του μετρό.
                    </p>
                    <p className="mb-4 text-justify">
                        Από τις οικονομικές επιλογές για διαμονή μπορείτε να επιλέξετε κάποιο από τα πολλά Premier inn ή Travelodge. Είναι πολύ μικρά δωμάτια ξενοδοχείου σε διάφορα σημεία της πόλης.                     </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                        4. Οδηγός 5 ημερών για το Λονδίνο
                    </h2>
                </div>
                <div className="mt-8">

                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα
                    </h3>

                    <>
                        <p className="mb-4 text-justify">
                            Η πρώτη ημέρα για εμάς ξεκίνησε από το <strong>Notting Hill</strong>, στο δυτικό Λονδίνο. Χρησιμοποιήσαμε το μετρό και κατεβήκαμε στον σταθμό <strong>Ladbroke Grove</strong> για να περπατήσουμε όλη την περιοχή από πάνω προς τα κάτω.
                        </p>

                        <p className="mb-4 text-justify">
                            Ο πρώτος δρόμος ενδιαφέροντος είναι το <strong>Golborne Rd</strong> με διάφορα μαγαζιά, όπου θα βρείτε και το <strong>Layla Bakery</strong> για ένα γρήγορο φαγητό. Από εκεί, συνεχίστε στη διάσημη <strong>Portobello Rd</strong> με την παζαράρα της - ιδανική για φθηνά αναμνηστικά (π.χ. 6 μαγνητάκια/μπρελόκ με 5 λίρες). Στους δρόμους γύρω θα ανακαλύψετε τα παστέλ πολύχρωμα σπίτια που έκαναν την περιοχή διάσημη.
                        </p>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">Αξιοθέατα Notting Hill:</h4>
                            <ul className="list-disc pl-6 space-y-1">
                                <li><strong>Lancaster Rd</strong>: Δρόμος με έντονα χρωματιστά σπίτια</li>
                                <li><strong>St Lukes Mews</strong>: Στενό με όμορφο ροζ σπίτι</li>
                                <li><strong>Equivalence Coffee</strong>: Μικρό καφέ για διάλλειμα</li>
                                <li><strong>The Notting Hill Bookshop</strong>: Το βιβλιοπωλείο από την ομώνυμη ταινία</li>
                                <li><strong>Westbourne Grove</strong>: Όμορφος εμπορικός δρόμος</li>
                                <li><strong>Notting Hill Bag</strong>: Μαγαζί με τσάντες και χρωματιστά κτίρια</li>
                                <li><strong>Cheeky Scone</strong>: Viral μαγαζί με σcones διάφορων γεύσεων</li>
                            </ul>
                        </div>

                        <p className="mb-4 text-justify">
                            Σε κοντινή απόσταση με τα πόδια βρίσκεται το <strong>Holland Park</strong>, ένα ήσυχο πάρκο με αξιοθέατο τους <strong>Kyoto Gardens</strong>. Αξίζει μια σύντομη επίσκεψη αν έχετε χρόνο.
                        </p>

                        <p className="mb-4 text-justify">
                            Συνέχισαμε προς το <strong>Kensington Palace</strong> και τους <strong>Kensington Gardens</strong>.Μπορείτε να κλείσετε τα εισητήρια σας από <a className="text-blue-600 underline" href='https://gyg.me/aM37mikL'>εδώ</a>. Επιλέξαμε να μην μπούμε στο παλάτι (κόστος €28) και απολαύσαμε δωρεάν τους κήπους και τον μικρό λαβύρινθο δίπλα.
                        </p>

                        <p className="mb-4 text-justify">
                            Με 20 λεπτά περπάτημα μέσα από την όμορφη γειτονιά του Kensington, φτάσαμε στο <strong>Μουσείο Φυσικής Ιστορίας</strong>. Σας συνιστούμε να κλείσετε από νωρίς τα <strong>δωρεάν εισιτήρια</strong> online (<a href="https://ticketing.nhm.ac.uk/events/GENAD-ADM" className="text-blue-600 hover:underline">https://ticketing.nhm.ac.uk/events/GENAD-ADM</a>) για να αποφύγετε τις ουρές. Το μουσείο κλείνει στις 5:00μμ και χρειάζεται αρκετός χρόνος για την επίσκεψη.
                        </p>

                        <p className="mb-4 text-justify">
                            Τέλος, επισκεφτήκαμε το διάσημο εμπορικό κέντρο <strong>Harrods</strong>. Στον τελευταίο όροφο (-1) θα βρείτε τις ομόνυμες τσάντες και προϊόντα του brand.
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                            <p className="text-yellow-700">
                                <span className="font-semibold">Σημείωση:</span> Αυτή η ημέρα είναι αρκετά φορτωμένη. Μπορείτε να τη σπάσετε σε δύο ημέρες για πιο άνετη εξερεύνηση. Εναλλακτικό αξιοθέατο που δεν προλάβαμε: το <strong>Victoria and Albert Museum</strong> (ελεύθερη είσοδος).
                            </p>
                        </div>
                    </>


                    {/* <ImageGallery images={firstDayImages} /> */}
                </div>

                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Την δεύτερη μέρα θα έχει τα πιο τουριστικά μέρη του Λονδίνου. Θα δούμε τα αξιοθέατα του Λονδίνου τα οποία βρίσκονται στο κέντρο ώστε να μπορέσουμε να περπατήσουμε από το ένα στο άλλο.
                    </p>

                    <div className="mb-6">
                        <h4 className="font-bold mb-3">Διαδρομή Κέντρου Λονδίνου:</h4>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                <strong>Buckingham Palace</strong>: Το ιστορικό παλάτι, εδώ θα δείτε την αλλαγή φρουράς η οποία γίνεται κάθε Δευτέρα, Τετάρτη και Παρασκευή στις 11. Εδώ θα δείτε να περιμένει πάρα πολύς κόσμος οπότε αν θέλετε να δείτε την αλλαγή καλό θα ήταν να έρθετε νωρίτερα ώστε να πιάσετε καλή θέση.
                                Ενναλακτικά, η συμβουλή μας είναι να μην την παρακολουθήσετε εκεί που την παρακολουθούν όλοι οι άλλοι μπροστά από το Παλάτι του Μπάκιγχαμ, καθώς έχει πολύ κόσμο και δεν θα δείτε πολλά. Αντ' αυτού, παρακολουθήστε την στο St. James Palace 15 λεπτά μετά την προγραμματισμένη τελετή.

                            </li>

                            <li>
                                <strong>St James Park</strong>: Πανέμορφο πάρκο για μια χαλαρή βόλτα
                            </li>

                            <li>
                                <strong>Westminster Abbey</strong>: Γοτθικός καθεδρικός ναός, τόπος κηδείας Βασίλισσας Ελισάβετ (2022). Για δείτε το εσωτερικό του θα πρέπει να κλείσετε εισιτήριο από <a className="text-blue-600 underline" href='https://gyg.me/WtboSyPS'>εδώ</a>.
                            </li>

                            <li>
                                <strong>House of Parliament & Big Ben</strong>: Το Μπιγκ Μπεν ίσως είναι το κύριο αξιοθέατο στο Λονδίνο. Η καλύτερα θέα του Μπιγκ Μπεν είναι δίπλα στον κόκκινο τηλεφωνικό θάλαμο που βρίσκεται στην πλατεία του Κοινοβουλίου. Ωστόσο, το καλύτερο σημείο για να φωτογραφίσετε το Μπιγκ Μπεν στο Λονδίνο είναι το «μυστικό σημείο θέασης» που βρίσκεται στην υπόγεια σήραγγα. Μπορείτε να διασχίσετε τη Γέφυρα του Γουέστμινστερ απέναντι από το Μπιγκ Μπεν για να το βρείτε. Μπορείτε επίσης πάρετε και το tour ώστε να δείτε το εσωτερικό του από <a className="text-blue-600 underline" href='https://gyg.me/s3IMmj44'>εδώ</a>.
                            </li>

                            <li>
                                <strong>Dowing Street</strong>
                            </li>

                            <li>
                                <strong>Leicester Square</strong>: Τεράστια καταστήματα <strong>Lego</strong> και <strong>M&Ms</strong>, κιόσκι εισιτηρίων West End
                            </li>

                            <li>
                                <strong>Chinatown</strong>: : Κάποτε φιλοξενούσε Ουγενότους και Μαλτέζους μετανάστες, η σημερινή Τσάιναταουν στο Λονδίνο άρχισε να διαμορφώνεται τη δεκαετία του 1950, όταν άνοιξαν στην περιοχή μερικά κινέζικα εστιατόρια.
                            </li>

                            <li>
                                <strong>Trafalgar Square</strong>: Εδώ μπορείτε να δείτε τη Στήλη του Νέλσον και να θαυμάσετε την εμβληματική αρχιτεκτονική.
                            </li>

                            <li>
                                <strong>Piccadilly Circus</strong>: Η Λονδρέζικη εκδοχή της Times Square.
                            </li>

                            <li>
                                <strong>London Eye</strong>:Προαιρετικά μπορείτε να ανεβείται ώστε να δείτε την θέα από ψηλά. Αν θέλετε να μπείτε θα πρέπει να έχετε κλείσει από νωρίς καθώς έχει μεγάλες ουρές. Το απλό εισιτήριο κοστίζει 37 λίρες. Μπορείτε να κλείσετε το εισητήριο σας από <a className="text-blue-600 underline" href='https://gyg.me/I6xBO5NA'>εδώ</a>.
                            </li>

                            <li>
                                <strong>Soho</strong>: Κέντρο ΛΟΑΤΚΙ+ κοινότητας, <strong>Old Compton Street</strong>, <strong>Carnaby Street</strong>, και <strong>Liberty</strong> department store
                            </li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">British Museum</h4>
                        <p className="mb-2 text-justify">
                            <strong>Δωρεάν είσοδος</strong> αλλά απαιτείται <strong>online κράτηση</strong> εκ των προτέρων από <a className="text-blue-600 underline" href='https://ticketing.britishmuseum.org/events?k=general%20admission'>εδώ</a>. Το τεράστιο μουσείο χρειάζεται αρκετές ώρες για πλήρη επίσκεψη (κλείνει 5:00μμ).
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">Outernet</h4>
                        <p className="mb-2 text-justify">
                            Διαδραστικός χώρος με εντυπωσιακές οθόνες και βίντεο, ιδανικό για όλες τις ηλικίες.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">Βραδινό πρόγραμμα: Covent Garden</h4>
                        <p className="mb-2 text-justify">
                            Τέλος, φυσικά μπορείτε να περάσετε το βράδυ/απόγευμα σας στο Convent Garden. Είναι από τις πιο πολυσύχναστες περιοχές του Λονδίνου γεμάτη με κόσμο, εστιατόρια, καφετέριες και μαγαζιά. Περπατήστε και εξερευνήστε όλη την περιοχή. Ένα από τα μέρη που μας άρεσε πολύ και καλό θα ήταν να μην το παραλείψετε είναι το Neal's Yard.
                        </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                        <p className="text-blue-700 text-sm">
                            💡 <strong>Συμβουλή:</strong> Αυτή η διαδρομή είναι αρκετά πυκνή. Μπορείτε να την προσαρμόσετε ανάλογα με το ενδιαφέρον και τον διαθέσιμο χρόνο σας.
                        </p>
                    </div>
                    {/* <ImageGallery images={secondDayImages} /> */}
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        3η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η Τρίτη μέρα θα έχει αρκετό κεντρικό και ανατολικό Λονδίνο.
                    </p>

                    <p className="mb-4 text-justify">
                        Το πρώτο αξιοθέατο της σημερινής ημέρας είναι το διάσημο <strong>Sky Garden</strong> (ή κάποιος άλλος ουρανοξύστης του Λονδίνου) οι οποίοι βρίσκονται στο <strong>City of London</strong>. Το Sky Garden είναι <a className="text-blue-600 underline" href='https://tickets.skygarden.london/WebStore/shop/viewitems.aspx?cg=SkyGarden&c=Tickets'>δωρεάν</a> και στην κορυφή του θα βρείτε ένα όμορφο κήπο σε εσωτερικό χώρο με θέα όλο το Λονδίνο. Καλό θα ήταν να κλείσετε όσο πιο νωρίς γίνεται τα εισιτήρια σας γιατί εξαφανίζονται αμέσως. Άλλη επιλογή είναι το <strong>Horizon 22</strong>, το οποίο έχει επίσης <a className="text-blue-600 underline" href='https://tickets.horizon22.co.uk/events/d57407ef-05d2-b158-535f-9e6b87880b20?_gl=1%2als6rca%2a_gcl_au%2aMTcwNzc1MzEzMy4xNzM3NDY2MjgzLjE2Mjk2MzA1MS4xNzQxMDEyNzQ1LjE3NDEwMTI3NDU.%2a_ga%2aMTE3MDU3NzY5OC4xNzM3NDY0MTI1%2a_ga_3NJWRLYC3Z%2aMTc0MTM5NDkwNy43NS4xLjE3NDEzOTQ5MDkuNTguMC4yMTM4ODkxOTQz'>δωρεάν</a> είσοδο και θα πρέπει επίσης να κλείσετε από νωρίς τα εισιτήρια σας.
                    </p>

                    <p className="mb-4 text-justify">
                        Από εκεί κατευθυνθείτε στο <strong>καθεδρικό του Αγίου Παύλου</strong>. Είναι ο μεγαλύτερος ναός του Λονδίνου. Το κόστος για να τον επισκεφτείτε είναι 26 λίρες (<a className="text-blue-600 underline" href='https://gyg.me/GAdbNjCZ'>εδώ</a>). Δεν μπήκαμε μέσα απλά τον θαυμάσαμε εξωτερικά. Τα καλύτερα σημεία για να βγάλεις φωτογραφίες είναι το εμπορικό <strong>One New Change</strong> και ο τηλεφωνικός θάλαμος από την πλευρά της <strong>Millenium Bridge</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Συνεχίστε στην <strong>Millenium Bridge</strong> και μπροστά σας θα βρείτε το <strong>Tate Modern</strong>, ένα ακόμα δωρεάν μουσείο μοντέρνας τέχνης. Περιηγηθείτε για λίγο στο εσωτερικό προτού συνεχίσετε στο <strong>Shakespeare's Globe</strong>, αντίγραφο από δρυ και άχυρο του αρχικού ελισαβετιανού θεάτρου, που παρουσιάζει έργα του Σαίξπηρ σε ανοιχτό χώρο.
                    </p>

                    <p className="mb-4 text-justify">
                        Για φαγητό υπάρχουν δύο μέρη που μπορείτε να επισκεφτείτε, την διάσημη <strong>Borough Market</strong> η οποία είναι γεμάτη από πάγκους. Θέλαμε να δοκιμάσουμε τα σάντουιτς από το <strong>Black Pig</strong> όμως η ουρά ήταν τεράστια. Έτσι επιλέξαμε μια μικρότερη, λιγότερο τουριστική αγορά, το <strong>Maltby Street Market</strong>. Με αυτό τον τρόπο είδαμε και την γειτονιά του <strong>Bermondsey</strong> και περπατήσαμε στην <strong>Bermondsey St</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Αφού φάγαμε κουβανέζικα σάντουιτς κατευθυνθήκαμε προς την ομορφότερη γέφυρα του Λονδίνου, την <strong>Tower Bridge</strong>. Αυτή η εμβληματική γέφυρα έχει βικτωριανό γοτθικό σχεδιασμό με δίδυμους πύργους. Μπορεί να ανοίξει για να επιτρέψει τη διέλευση της κυκλοφορίας στο ποτάμι. Ψάξτε το <strong>«Maggie Blake's Cause»</strong> στο Google Maps ώστε να βγάλετε τις καλύτερες φωτογραφίες με την Tower Bridge.
                    </p>

                    <p className="mb-4 text-justify">
                        Τέλος, ένα ακόμα αξιοθέατο που βρίσκεται απέναντι από την γέφυρα είναι το <strong>Tower of London</strong>, είναι κάστρο, φρούριο, βασιλικό παλάτι και κάποτε ήταν ακόμα και φυλακή. Δεν χώρεσε στο πρόγραμμα μας καθώς κοστίζει αρκετά, περίπου 35 λίρες, μπορείτε να κλείσετε εισητήρια από <a className="text-blue-600 underline" href='https://gyg.me/acAmhJ1L'>εδώ</a> και θέλει αρκετό χρόνο για να το εξερευνήσεις όλο.
                    </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        4η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Η τέταρτη ημέρα είναι αφιερωμένη στον <strong>Harry Potter</strong>. Οπότε αυτό σημαίνει επίσκεψη στα studios όπου γυρίστηκαν οι ταινίες. Πολύ σημαντικό να κλείσετε όσο πιο νωρίς γίνεται τα <a className="text-blue-600 underline" href='https://www.wbstudiotour.co.uk/tickets/'>εισητήρια</a> σας καθώς εξαντλούνται συνεχώς. Ειδικά αν θέλετε να επισκεφτείτε πρωί τα studios. Εμείς επιλέξαμε απόγευμα ώστε να εκμεταλλευτούμε την ημέρα και να δούμε κάποια επιπλέον μέρη.
                    </p>

                    <p className="mb-4 text-justify">
                        Οπότε, καλό θα ήταν να ξεκινήσετε από το <strong>Kings Cross Station</strong>. Είναι ο σταθμός που έφευγε το τρένο για το Hogwarts. Εδώ θα βρείτε το μαγαζί <strong>Harry Potter Shop King's Cross</strong> όπου δίπλα του υπάρχει η χαρακτηριστική ταμπέλα με την πλατφόρμα <strong>9 ¾</strong> για να βγάλετε φωτογραφία. Αν έχει κόσμο αγνοήστε το καθώς υπάρχει παρόμοιο έκθεμα στα studios.
                    </p>

                    <p className="mb-4 text-justify">
                        Το επόμενο μέρος που μπορείτε να δείτε είναι το <strong>Granary Square</strong> και το εμπορικό <strong>Coal Drops Yard</strong>. Στο εσωτερικό θα βρείτε πολλά μαγαζιά και εστιατόρια. Εμείς βρήκαμε ένα όμορφο καφέ να κάτσουμε το οποίο είναι λίγο πιο μακριά το <strong>Alma Kings Cross</strong>.
                    </p>

                    <p className="mb-4 text-justify">
                        Για να φτάσετε στα <strong>Warner Bros Studios – Harry Potter</strong>, αρχικά για να φτάσετε εκεί θα πρέπει να πάτε μέχρι το <strong>Euston Station</strong>, είναι περίπου 20 λεπτά με τα πόδια, και να πάρετε ένα από τα τρένα για το <strong>Watford Junction</strong>. Με το που βγείτε υπάρχουν ταμπέλες που θα σας κατευθύνουν προς το λεωφορείο των studios. Το λεωφορείο από εκεί κάνει περίπου 15 λεπτά. Όταν φτάσετε μην ξεχάσετε να πάρετε το <strong>Passport</strong> που δίνουν. Η έκθεση είναι πολύ μεγάλη μπορεί να σας πάρει 3-4 ώρες μέχρι να τα δείτε όλα. Στην μέση περίπου του tour υπάρχει ένα καφέ.
                    </p>

                    <p className="mb-4 text-justify">
                        Αν είστε fun του Harry Potter αξίζει πραγματικά να δείτε το μέρος που γυρίστηκαν οι ταινίες καθώς και να μάθετε και τον τρόπο που γυριζόντουσαν οι ταινίες.
                    </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                        5η Ημέρα
                    </h3>
                    <p className="mb-4 text-justify">
                        Για την τελευταία ημέρα προτείνουμε να συνδυάσετε ορισμένες περιοχές ώστε να μπορέσετε να δείτε κάποια επιπλέον σημεία ενδιαφέροντος στο Λονδίνο.
                    </p>

                    <p className="mb-4 text-justify">
                        Το πρώτο από αυτά είναι η <strong>Oxford Street</strong>. Είναι μια από τις πιο διάσημες εμπορικές οδούς του Λονδίνου με εμπορικά μαγαζιά και κέντρα. Στη συνέχεια ανεβείτε προς την <strong>Marylebone High Street</strong> στο <strong>Marylebone</strong>, μια όμορφη γειτονιά που θα βρείτε να δούμε τον δρόμο το εντυπωσιακό βιβλιοπωλείο <strong>Daunt Books Marylebone</strong>, την <strong>Wallace Collection</strong> η οποία είναι δωρεάν και την <strong>Baker Street</strong> που εκεί «μένει» ο Sherlock Holmes.
                    </p>

                    <p className="mb-4 text-justify">
                        Μετά αξίζει να ανεβείτε μέχρι το <strong>Camden Town</strong>, ένα πολύ ζωντανό εναλλακτικό μέρος του Λονδίνου. Αυτή η περιοχή του Βόρειου Λονδίνου φιλοξενεί καταστήματα, street art και showmen. Το Κάμντεν είναι η πιο εύκολα προσβάσιμη γειτονιά βόρεια του κεντρικού τμήματος της πόλης - και έχει κάτι για όλους.
                    </p>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">Αξιοθέατα Camden Town:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Camden Market</strong>: Η διάσημη αγορά του, μπορείτε να βρείτε τα πάντα σε street food και shopping.</li>
                            <li><strong>Cyber Dog</strong>: Είναι ένα τεράστιο rave μαγαζί σε στιλ δεκαετίας του '90, είναι ένα θέαμα που αξίζει να δείτε. Όλα είναι φωτεινά, υπάρχουν χορευτές στους τοίχους και η μουσική είναι δυνατή.</li>
                            <li><strong>Amy Winehouse</strong>: Η Έιμι Γουάινχαουζ κατάγεται από το Λονδίνο και το αποκαλεί σπίτι της. Ολόκληρη η περιοχή του Κάμντεν έχει μακρά ιστορία στη μουσική και, γι' αυτό, έχει απαθανατιστεί σε ένα άγαλμα της σε φυσικό μέγεθος, όπως και ένα υπέροχο graffiti.</li>
                            <li><strong>Regent's Canal</strong>: Περπατήστε δίπλα από το κανάλι</li>
                            <li><strong>Primrose Hill</strong>: Απολαύστε τη θέα από το λόφο. Μία από τις πιο υποτιμημένες δραστηριότητες στο Camden είναι η βόλτα στο Primrose Hill. Αν έχετε κουραστεί από τα πλήθη του Camden, σίγουρα θα πρέστε να κατευθυνθείτε στο Primrose Hill για μια ανάσα. Είναι μια από τις καλύτερες δωρεάν εικόνες στο Λονδίνο και μόλις το δείτε μια καθαρή μέρα, θα καταλάβετε γιατί.</li>
                        </ul>
                    </div>
                </div>
                <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="57" data-gyg-locale-code="en-US" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>
            </div>
            <div className="pt-10">
                <PageFooter />
            </div>
        </div>



    )
}

export default London