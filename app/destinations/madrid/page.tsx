import React from 'react';
// import Navbar from '../components/Navbar';
// import { PageFooter } from "../components/Footer";
import Image from 'next/image'; // Import the Image component from Next.js
// import Head from 'next/head';
import { Metadata } from 'next';
// import Link from "next/link";
import Navbar from '@/app/components/Navbar';
import { PageFooter } from '@/app/components/Footer';
import Script from 'next/script'

export const metadata: Metadata = {
    // Ο τίτλος που θα φαίνεται στη Google
    title: "Μαδρίτη: Τι να δω και πού να φάω (Οδηγός 2026) | Travelmpomps",

    // Η περιγραφή που θα φέρει το κλικ
    description: "Ανακαλύψτε τη Μαδρίτη, την αριστοκρατική πρωτεύουσα της Ισπανίας. Πλήρης οδηγός με κορυφαία παλάτια, γραφικές γειτονιές, tapas, διαμονή και χρήσιμα tips.",

    alternates: {
        canonical: 'https://travelmpomps.gr/destinations/madrid',
    },

    openGraph: {
        title: 'Μαδρίτη: Ο απόλυτος οδηγός για αξιοθέατα, tapas και διασκέδαση',
        description: 'Μάθετε τα πάντα για τη Μαδρίτη: Γειτονιές, παλάτια, μουσεία και τα καλύτερα μέρη για αυθεντικές τορτίγιες και σανγκρία.',
        url: 'https://travelmpomps.gr/destinations/madrid',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                // Άλλαξε το path στο φάκελο που έχεις τις φωτογραφίες της Μαδρίτης
                url: '/images/madrid-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Μαδρίτη 2026: Ταξιδιωτικός Οδηγός',
            },
        ],
    },
}


function Madrid() {
    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            <Script
                async
                defer
                src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
                data-gyg-partner-id="0OAQQKO"
            />
            <Navbar />

            <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 space-y-20 pt-24">
                {/* Section 1 — text left, image right */}
                <h1 className="text-3xl font-bold text-[#2E2E2F] mb-4">Μαδρίτη: Τι να δω και τι να κάνω – Ο Πλήρης Οδηγός</h1>
                <div className="relative w-full aspect-[5/2] md:aspect-[5/2] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/madrid-hero.jpg"
                        alt="Το κτήριο Metropolis στην Gran Via της Μαδρίτης"
                        fill
                        priority
                        className="object-cover"
                        // sizes="100vw"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        quality={80}
                    />
                </div>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η Μαδρίτη η πρωτεύουσα της Ισπανίας, αριστοκρατική, όμορφη, οποιαδήποτε εποχή την επισκεφτείς δώσε της αρκετό χρόνο να ανακαλύψεις τι έχει να σου προσφέρει. Γειτονιές, παλάτια, αρχιτεκτονική, αγορές - mercados, tapas, τορτίγιες και σανγκρία.
                </p>

                {/* --- ΜΕΤΑΦΟΡΕΣ --- */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">Μεταφορά από το Αεροδρόμιο της Μαδρίτης</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Για να φτάσετε στο κέντρο της πόλης από το αεροδρόμιο της Μαδρίτης ο πιο οικονομικός τρόπος είναι το τρένο το οποίο κοστίζει 2.6€. Αυτό φεύγει από το τερματικό Τ4 (επίπεδο -1, ακολουθώντας τις πινακίδες Renfe). Εναλλακτικά υπάρχει και το μετρό το οποίο κοστίζει λίγο παραπάνω όμως βρίσκεται αμέσως στα δεξιά σας με το που βγείτε από τον χώρο παραλαβής αποσκευών (στον πρώτο όροφο του τερματικού Τ2). To κόστος του εισιτηρίου είναι 4.50€-5€ και θα χρειαστεί να αλλάξετε επιπλέον γραμμή για να φτάσετε στο κέντρο. Εμείς επιλέξαμε το δεύτερο λόγω ευκολίας.
                    </p>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed italic">
                        💡 Tip: Για τα εισιτήρια που θα εκδώσετε στη Μαδρίτη, θα υπάρξει μια μικρή επιπλέον χρέωση την πρώτη φορά για την αγορά της κάρτας. Κρατήστε την κάρτα μαζί σας για το υπόλοιπο σας ταξίδι.
                    </p>
                </section>
                <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-q="Madrid"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/madrid-l46/">GetYourGuide</a></span></div>
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">Που να μείνετε στην Μαδρίτη</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Ίσως το μεγαλύτερο challenge που θα συναντήσετε στην οργάνωση για το ταξίδι σας στην Μαδρίτη είναι το που θα μείνετε. Τα ξενοδοχεία είναι αρκετά ακριβά ιδιαίτερα στο ιστορικό κέντρο, το οποίο για προφανείς λόγους είναι το καλύτερο σημείο. Το κατάλυμα που επιλέξαμε εμείς βρισκόταν στο Chamberi. Αν θέλετε να βρείτε κάποιο κατάλυμα το οποίο είναι οικονομικότερο θα επικεντρωνόμουν στις παρακάτω γειτονιές:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Malasana:</strong> Μια από τις πιο όμορφες γειτονιές της Μαδρίτης, ουσιαστικά βρίσκεται ακριβώς πάνω από την Gran Via. Βρίσκεται πολύ κοντά στο κέντρο, έχει πολύ ωραία vibes και είναι γεμάτη με μαγαζιά, bar, εστιατόρια και αρκετά ασφαλής το βράδυ. Είναι γραφική περιοχή με πολύχρωμα σπίτια και μικρά σοκάκια</li>
                        <li><strong>Chueca:</strong>  H LGBTQ+ γειτονιά της Μαδρίτης είναι σύμβολο της διαφορετικότητας και, φυσικά, της διασκέδασης. Είναι επίσης, ακριβώς πάνω από την Gran Via και προσφέρει ακριβώς ότι και η Malasana. </li>
                        <li><strong>Chamberi:</strong> Σε αυτή την λιγότερη τουριστική περιοχή, διαλέξαμε να μείνουμε εμείς. Εδώ θα πάρετε μια αίσθηση για το πως ζουν οι ντόπιοι καθώς είναι πιο οικιστική περιοχή όμως έχει αρκετά καφέ, εστιατόρια και σούπερ μάρκετ.  Βρίσκεται πολύ κοντά σε Malasana και Chueca, δεν είναι τόσο γραφική. Αν σας αρέσει το περπάτημα μπορείτε να φτάσετε μέχρι το κέντρο με τα πόδια (περίπου 35 λεπτά). Διαφορετικά με το μετρό μπορείτε να φτάσετε παντού.</li>
                        <li><strong>Moncloa:</strong> Μια ακόμα ασφαλής επιλογή εκεί βρίσκεται το Πανεπιστήμιο και είναι κοντά σε ορισμένα αξιοθέατα όπως τον ναό Debod, επίσης έχει καλή πρόσβαση με τα μέσα. </li>
                    </ul>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Υπάρχουν φυσικά και κάποιες περιοχές που θα απέφευγα. Μια από αυτές είναι η Lavapies, είναι μια περιοχή με έντονο το πολυπολιτισμικό στοιχείο ιδιαίτερα το βράδυ. Ακόμα, περιοχές που είναι αρκετά πιο μακριά από το κέντρο όπως το Carabanchel. Αρκετά οικιστική περιοχή, με λίγα μαγαζιά και εστιατόρια και πολύ μακριά από το κέντρο.                    </p>
                </section>

                <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="46" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>

                {/* Section 3 — image left, text right */}
                <section className="space-y-6 pt-10">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">Πρόγραμμα 4 ημερών στην Μαδρίτη</h2>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Τα περισσότερα αξιοθέατα της Μαδρίτης βρίσκονται στην παλιά πόλη σε κοντινή σχετικά απόσταση. Όπως επίσης να σπάσουμε τις επισκέψεις στα μουσεία σε 3 διαφορετικές ημέρες. Γενικά καλό θα ήταν να υπάρχει αρκετός χρόνος ώστε να γίνεται η εξερεύνηση της κάθε γειτονιάς της Μαδρίτης.
                    </p>

                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 1η Ημέρα – Gran Via, Prado, Chueca και Barrio de Las Letras
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στο πρόγραμμα της πρώτης ημέρας θα εξερευνήσουμε τις περιοχές δίπλα και πάνω στην <strong>Gran Via</strong>. H πιο σημαντική λεωφόρος της πόλης, γεμάτη θέατρα, κινηματογράφους, καταστήματα, εστιατόρια. Γεμάτος με εντυπωσιακά μπαρόκ κτήρια. Ο συγκεκριμένος δρόμος λέγεται και Broadway ή West End της Μαδρίτης.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Θα ξεκινήσουμε από την καρδιά της <strong>Gran Vía</strong> και την <strong>πλατεία Callao</strong>, την οποία σίγουρα έχετε δει σε αρκετές ταινίες, διάσημη για το τηλεφωνικό κτίριο, το οποίο χτίστηκε το 1926 και έγινε ο πρώτος ουρανοξύστης που κατασκευάστηκε στην Ευρώπη. Μετά, ακριβώς πίσω από τα Primark, ξεκινάει μια όμορφη γειτονιά η <strong>Chueca</strong>. Από τις πιο γραφικές περιοχές της Μαδρίτης με πολλά bar, μαγαζιά και εστιατόρια.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Βρείτε την <strong>Calle de Fuencarral</strong> για να εξερευνήσετε την περιοχή και περπατήστε μέχρι την <strong>Plaza Chueca</strong>. Ως αξιοθέατα υπάρχει το <strong>Μουσείο του Ρομαντισμού</strong> και το <strong>Palazzo Longoria</strong>. Ακόμα μπορείτε να επισκεφτείτε την <strong>Mercado San Antón</strong>. Μια πολύ λιγότερο τουριστική αγορά, με αυθεντικές μαδριλένικες γεύσεις. Εκεί βρήκαμε και την παραδοσιακή τορτίγια με πατάτα.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Επόμενη στάση είναι το διάσημο <strong>Metropolis Building</strong>. Κάθε φωτογραφία της Μαδρίτης συνήθως απεικονίζει το συγκεκριμένο κτήριο. Είναι ένα εντυπωσιακό κτήριο, χτισμένο το 1907 και τώρα χρησιμοποιείται ως γραφεία. Οι περισσότερες φωτογραφίες που βλέπετε έρχονται από το απέναντι κτήριο, το <strong>Círculo de Bellas Artes</strong>.
                    </p>

                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">

                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/cibeles-fountain.jpeg" // Βάλε την κάθετη φώτο σου
                                alt="Cibeles Fountain"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/puerta_alcala.jpg" // Βάλε την κάθετη φώτο σου
                                alt="Η Puerta de Alcala, η Αψίδα του Θριάμβου της Μαδρίτης"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                    </div>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Λίγα μέτρα πιο κάτω υπάρχει η <strong>Plaza de Cibeles / Cibeles Fountain</strong>, εμβληματικό σημείο της πόλης εδώ μαζεύονται οι οπαδοί της Ρεάλ Μαδρίτης μετά από μεγάλες νίκες της ομάδας. Στολίζεται από υπέροχα κτήρια, όπως το <strong>παλάτι της Κυβέλης (Palacio Linares)</strong>. Το <strong>Palacio Linares</strong> πρόκειται για το πιο πλούσιο σπίτι που φτιάχτηκε στην Ισπανία το 19ο αιώνα, ένας τραπεζίτης έγινε μαρκήσιος και έδωσε όλα του τα χρήματα για να φτιάξει ένα παλάτι δίπλα από αυτό της Κυβέλης. Τέλος, η <strong>Banco de Espania</strong>, είναι ένα τεράστιο κτήριο τράπεζας.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ακόμα πιο κάτω θα βρούμε την <strong>Puerta de Alcala</strong> ουσιαστικά είναι η <strong>Αψίδα του θριάμβου</strong> της Μαδρίτης, δημιουργήθηκε από τον Sabatini το 1756 για να περάσει από κάτω η σύζυγος του Φίλιππου. Κατά μήκος της κορυφής της πύλης υπάρχουν φιγούρες τεσσάρων παιδιών, πρόκειται για αλληγορία των τεσσάρων cardinal αρετών: την ανδρεία, τη δικαιοσύνη, τη σωφροσύνη και τη φρόνηση.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Θα προχωρήσουμε προς το <strong>Paseo Del Prado</strong>, έναν διάσημο πεζόδρομο πριν φτάσουμε στο <strong>μουσείο Prado</strong>. Τις 2 τελευταίες ώρες (6μμ – 8μμ) είσοδος για το μουσείο Prado είναι δωρεάν οπότε μπορούμε να πάμε στις 6μμ στο μουσείο (λίγο νωρίτερα καθώς θα έχει ουρά) για να δούμε το πρώτο μουσείο από το <strong>Τρίγωνο της τέχνης</strong>. Εναλλακτικά μπορείτε να κλείσετε τα εισητήρια σας από <a className="text-blue-600 underline" href='https://gyg.me/dR3nRa9e'>εδώ</a>. Έχει διάφορους διάσημους πίνακες από Goya, Velásquez και Caravaggio. Τα πιο διάσημα έργα εδώ είναι το Las Meninas του Velázquez, The Third of May 1808 του Francisco de Goya, και The Garden of Earthly Delights του Hieronymus Bosch.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για βραδινή βόλτα στο <strong>Barrio de Las Letras</strong> (λογοτεχνική συνοικία) μια γραφική γειτονιά στο κέντρο της Μαδρίτης που κάποτε έζησαν συγγραφείς της Ισπανικής Χρυσής Εποχής, όπως ο Lope de Vega, ο Cervantes και ο Calderón. Εδώ θα βρείτε διάφορα μαγαζιά φαγητό, fast food, tapas bar για το βράδυ.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify italic">
                        💡Tip: Το <strong>τρίγωνο της τέχνης</strong> ή αλλιώς τα τρία μουσεία της Μαδρίτης είναι αρκετά μεγάλα είναι προτιμότερο να τα σπάσετε σε ξεχωριστές ημέρες. Μπορείτε να εκμεταλλευτείτε τις δωρεάν ώρες εισόδου τόσο στο Prado όσο και στο <strong>Reina Sofia</strong>. H ουρά είναι συνήθως μεγάλη αλλά η είσοδος γίνεται γρήγορα και δε θα χάσετε πολύ χρόνο.
                    </p>



                    {/* ΕΙΚΟΝΑ 4: Οι δύο πύργοι (Asinelli) */}
                    <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/gran_via.jpg"
                            alt="Gran Via, η κεντρική λεωφόρος της Μαδρίτης"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div>
                </section>

                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 2η Ημέρα – Μαδρίτη των Αψβούργων
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Σήμερα θα πάρουμε μια γεύση από την Μαδρίτη των Αψβούργων. Το πρώτο αξιοθέατο της ημέρας βρίσκεται στην <strong>Plaza de España</strong>, ένα σταυροδρόμι ιστορίας και σύγχρονης ζωής, με το μνημείο του Cervantes. Πάνω στο άλογο είναι ο Δον Κιχώτης με τον υπηρέτη του Σάντσο Πάντσα.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Λίγο πιο κάτω θα βρούμε το <strong>Βασιλικό Ανάκτορο</strong>, χτισμένο κατά τον 18ο αιώνα σε ένα λοφώδες σημείο, όπου βρισκόταν το παλιό Αλκάθαρ που κάηκε το 1734, ήταν το όνειρο του Φιλίππου Ε να γίνει το ισπανικό Βασιλικό Παλάτι. Είναι το μεγαλύτερο παλάτι της Δυτικής Ευρώπης, με 135.000 τετραγωνικά μέτρα και πάνω από 3.400 δωμάτια. Η αρχιτεκτονική του βασίζεται σε σκίτσα του Bernini. Η είσοδος κοστίζει 18 ευρώ, όμως προσοχή αυτά εξαντλούνται γρήγορα και καλό θα είναι να έχετε κλείσει αρκετές μέρες πριν από <a className="text-blue-600 underline" href='https://gyg.me/Wm6ONO8j'>εδώ</a>.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Απέναντι ακριβώς υπάρχει ο καθεδρικός της Ισπανίας <strong>Santa María la Real de la Almudena</strong>. Ο καθεδρικός ναός της Μαδρίτης είναι το μόνο ισπανικό επισκοπικό κτίριο που καθαγιάστηκε από Πάπα (Ιωάννης Παύλος Β, το 1993). Άνοιξε τις πύλες του μόλις το 1999 και είναι ένα από τα νεότερα κτίρια της Μαδρίτης. Ο ναός σχεδιάστηκε από τον Francisco de Cubas σε νεογοτθικό στυλ, αλλά το κλασικιστικό εξωτερικό του τον κάνει να ταιριάζει με το Βασιλικό Παλάτι που βρίσκεται ακριβώς απέναντι. Η είσοδος κοστίζει 7 ευρώ και μπορείτε να ανεβείτε μέχρι τον θόλο για μια πανοραμική θέα της πόλης. Στο εσωτερικό υπάρχει και η Παναγία της Αλμουδένα, άγαλμα σε σκαλιστό ξύλο πεύκου και είναι η προστάτιδα της πόλης της Μαδρίτης.
                    </p>
                    {/* ΕΙΚΟΝΑ: Finestrella (Το παραθυράκι) */}
                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">

                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/madid_4seasons.jpeg"
                                alt="Η θέα από μπροστά από το ξενοδοχείο 4 seasons"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/almudena.webp"
                                alt="Ο καθεδρικός της Μαδρίτης, Santa María la Real de la Almudena"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                    </div>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Περιμετρικά από το Παλάτι υπάρχουν μερικά ακόμα αξιοθέατα που μπορούμε να δούμε. Πρώτα από όλα τα <strong>Arab Walls</strong>, απομεινάρι των παλιών τειχών της πόλης. Οι <strong>Κήποι Σαμπατίνι (Sabatini Gardens)</strong>, με τους θάμνους κουνούκλα, βρίσκονται στη βόρεια πλευρά από το παλάτι. Στη δυτική πλευρά θα βρείτε το <strong>Πάρκο Κάμπο ντελ Μόρο (Campo del Moro)</strong>, στο οποίο υπάρχει πρόσβαση από το <strong>Πάσιο δε λα Βιρχέν δελ Πουέρτο (Paseo de la Virgen del Puerto)</strong>.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Κάθε Τετάρτη και Σάββατο – από τις 11π.μ. έως τις 2μ.μ. το χειμώνα και από τις 10π.μ. έως τις 12μ.μ. το καλοκαίρι – γίνεται η <strong>Αλλαγή της Φρουράς</strong> στην <strong>Πύλη του Πρίγκιπα (Puerta del Príncipe)</strong>. Σε κοντινή απόσταση από την αντίθετη κατεύθυνση έχουμε το <strong>Church of Saint Nicholas</strong>, Τόπος λατρείας για την ιταλόφωνη κοινότητα και τόπος ανάπαυσης του Χουάν δε Ερρέρα (Juan de Herrera).
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Συνεχίζουμε στην <strong>Plaza de la Villa</strong>, μια ατμοσφαιρική μικρή πλατεία η οποία στολίζεται, από διάφορα κτήρια προαναγεννησιακής περιόδου, στεγάζει τρία από τα πιο σημαντικά κτήρια εκείνης της περιόδου: την <strong>Casa y Torre de los Lujanes</strong> (Πύργος των Λουχάνες), ένα παλάτι του 15ου αιώνα που ανήκε κάποτε στην οικογένεια Λουχάν και έχει το προνόμιο να είναι ένα από τα παλαιότερα κτίρια πολιτικής αρχιτεκτονικής της Μαδρίτης, την <strong>Casa de Cisneros</strong> (Οίκος των Σισνέρος), και την <strong>Casa de la Villa</strong> (Παλαιό Δημαρχείο), το πρώην αρχηγείο του Δημοτικού Συμβουλίου της Μαδρίτης.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αξίζει μια επίσκεψη στο <strong>Convento de las Carboneras del Corpus Christi</strong>, εκεί μοναχές φτιάχνουν μοναδικά μπισκότα και έχουν γίνει viral μέσα από το TikTok (θα χρειαστείτε μετρητά).
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Φτάνουμε επιτέλους στην <strong>Plaza Mayor</strong>, δημιουργήθηκε για φιέστες, ταυρομαχίες, δίκες και διάφορες γιορτές. Το παλαιότερο κτήριο εκεί είναι το <strong>Casa de la Panaderia</strong>, στο παρελθόν ήταν η έδρα των αρτοποιών, εδώ καθοριζόταν η τιμή του ψωμιού για όλη τη Μαδρίτη. Εκεί βρίσκεται και το διάσημο σάντουιτς της Μαδρίτης, στο <strong>Bar La Campana</strong>, με καλαμαράκια. Μην χάσετε την διάσημη <strong>Chocolatería San Ginés</strong>, είναι το πιο γνωστό μαγαζί για churros και ζεστή σοκολάτα.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Εκεί βρίσκεται και η διασημότερη αγορά της Μαδρίτης, η <strong>Mercado de San Miguel</strong>. Είναι η πιο ακριβή και τουριστική αγορά, καλό είναι να περάσετε μια βόλτα αν και σίγουρα θα βρείτε καλύτερα μέρη για φαγητό. Ακόμα μια εκκλησία είναι η <strong>Church of Saint Genesius</strong>, διαθέτει έργα μεγάλης αξίας, όπως ο πίνακας «Ο Καθαρισμός του Ναού» (The Purification of the Temple) του Ελ Γκρέκο.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το απόγευμα το δεύτερο μουσείο που μπορούμε να επισκεφτούμε είναι το <strong>Reina Sofia</strong> το οποίο έχει δωρεάν είσοδο κάθε μέρα από τις 7 μέχρι τις 9 ή μπορείτε να κλείσετε τα εισητήρια σας από <a className="text-blue-600 underline" href='https://gyg.me/17xpGAnT'>εδώ</a>. Μέσα θα βρείτε έργα πιο σύγχρονης τέχνης με έργα του Πικάσο και του Νταλί και φυσικά την Guernica. Κλείστε τα εισιτήρια σας online και απλά φροντίστε να είστε εκεί λίγο νωρίτερα.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για βράδυ περάστε οπωσδήποτε από την <strong>Calle de la Cava Baja</strong>, είναι ένας δρόμος γεμάτος με tapas bar και εστιατόρια.
                    </p>
                    {/* ΕΙΚΟΝΑ 6: San Luca / Στοές */}
                    <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/plaza_mayor.jpg"
                            alt="Η Plaza Mayor, η κεντρική πλατεία της Μαδρίτης, γεμάτη ιστορία και ζωή"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div>
                </section>


                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 3η Ημέρα – El Rastro, El Retiro και Santiago Bernabeu
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν κάποια από τις μέρες που βρίσκεστε στην Μαδρίτη είναι Κυριακή τότε είναι μεγάλη ευκαιρία να περάσετε από την μεγάλη υπαίθριά αγορά <strong>El Rastro</strong>. H μεγαλύτερη και η διασημότερη ανοιχτή αγορά της Μαδρίτης, ένα παζάρι από τον μεσαίωνα που κρατάει μέχρι και σήμερα. Ανοίγει στις 9 το πρωί και είναι ευκαιρία να ξεκινήσουμε από εκεί. Βρίσκεται στην περιοχή <strong>La Latina</strong>, μεταξύ των <strong>Plaza de Cascorro</strong> και της <strong>Ribera de Curtidores</strong>. Είναι μεγάλη ευκαιρία να περπατήσετε και να χαθείτε μέσα στα στενά της γραφικής αυτής γειτονιάς της Μαδρίτης.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στην συνέχεια περπατήστε μέχρι την <strong>Puerta de Sol</strong> (η πύλη του ήλιου), εκεί θα δούμε το άγαλμα του Κάρλου του 3ου, οι ντόπιοι λένε ότι ήταν ο καλύτερος δήμαρχος της Μαδρίτης. Ακόμα, εκεί βρίσκεται το χιλιομετρικό σημείο 0, από το οποίο ξεκινάει να μετριέται ακτινωτά κάθε απόσταση. Τέλος, εδώ υπάρχει και το έμβλημα της πόλης, η αρκούδα με το φραουλόδεντρο. Το έθιμο είναι την πρωτοχρονιά οι ντόπιοι τρώνε μια ρόγα σταφύλι σε κάθε χτύπο του ρολογιού. Στο <strong>Casa de Diego</strong>, θα βρείτε αυθεντικές βεντάλιες και βρίσκεται εκεί από το 1858.
                    </p>
                    {/* ΕΙΚΟΝΑ: Finestrella (Το παραθυράκι) */}
                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">

                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/puerta_de_sol.JPG"
                                alt="Η Puerta de Sol, με το έμβλημα της Μαδρίτης, η αρκούδα με το φραουλόδεντρο"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/santiago-bernabeu.jpg"
                                alt="Το στάδιο Santiago Bernabeu, το σπίτι της Ρεάλ Μαδρίτης, ένα από τα πιο εμβληματικά στάδια ποδοσφαίρου στον κόσμο"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                    </div>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Συνεχίζοντας την περιήγηση μπορούμε να προχωρήσουμε στο μεγαλύτερο πάρκο της Μαδρίτης, το <strong>El Retiro</strong>, είναι μια όαση πράσινου στο κέντρο της πόλης και πρώην βασιλικοί κήποι. Στο κέντρο υπάρχει μια τεχνητή λίμνη που έχετε την ευκαιρία να κάνετε βαρκάδα. Στην καρδιά του πάρκου υπάρχει το <strong>Crystal Palace</strong>, ένα παλάτι φτιαγμένο εξολοκλήρου από γυαλί. Ακόμα θα βρείτε το παλαιότερο δέντρο της Μαδρίτης, το μνημείο του <strong>King Alfonso XII</strong> μπροστά από την τεχνητή λίμνη, το άγαλμα <strong>Fallen Angel</strong> και τον <strong>Rose garden</strong> δίπλα από το άγαλμα.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το τελευταίο από τα μουσεία του τριγώνου της τέχνης είναι το <strong>Thyssen-Bornemisza</strong>, το οποίο ουσιαστικά συμπληρώνει τα κενά από τα άλλα δύο μουσεία. Με 1600 περίπου πίνακες έχει μια εντυπωσιακή συλλογή με έργα του Van Caravaggio, van Gogh, Dali, Picasso και Goya. Εναλλακτικά, υπάρχει φυσικά η επιλογή του να επισκεφτείτε το <strong>Santiago Bernabeu</strong>, φροντίστε να έχετε κλείσει τα εισητήρια σας από νωρίς από <a className="text-blue-600 underline" href='https://gyg.me/bCLckKxp'>εδώ</a>. Ακόμα και αν δεν θέλετε να πληρώσετε εισιτήριο για να δείτε το μουσείο και το εσωτερικό του σταδίου (πάνω από τα VIP), μπορείτε να πάτε στα Starbucks και έχετε θέα μέσα στο γήπεδο, χωρίς κανένα επιπλέον κόστος. Όπως και να περάσετε μια βόλτα από την τεράστια μπουτίκ της <strong>Ρεάλ Μαδρίτης</strong>. Μπορείτε εύκολα να φτάσετε εκεί με το μετρό, στάση <strong>Santiago Bernabeu</strong>.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Μη χάσετε τέλος το ηλιοβασίλεμα στο <strong>Templo de Debod</strong>. Αυτός είναι ο νουβικός θησαυρός της Μαδρίτης και ο μόνος αιγυπτιακός ναός στην Ισπανία που έχει διατηρηθεί πλήρως. Μεταφέρθηκε πέτρα-πέτρα από την Αίγυπτο και προσεκτικά ανακατασκευασμένος με σεβασμό στον αρχικό του προσανατολισμό, αυτό το μνημείο ήταν ένα δώρο από την Αίγυπτο και την UNESCO για τη συμβολή της Ισπανίας στη διάσωση των ναών του Αμπού Σιμπέλ, οι οποίοι διαφορετικά θα είχαν βυθιστεί κάτω από το νερό μετά την κατασκευή του φράγματος του Ασουάν.
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Τέλος, για βράδυ κατευθυνθείτε στην περιοχή <strong>Malasaña</strong>, είναι μια περιοχή γεμάτη ζωή. Εδώ μπορείτε να βρείτε bar, φαγητό όπως και τα μαγαζιά με τα διάσημα <strong>Flamenco shows</strong>.
                    </p>
                    {/* ΕΙΚΟΝΑ 6: San Luca / Στοές */}
                    <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/la_latina.jpg"
                            alt="Η γειτονιά La Latina, με τα στενά της δρομάκια και την ατμόσφαιρα της παλιάς Μαδρίτης"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div>
                </section>

                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 4η Ημέρα – Μονοήμερη εκδρομή στο Τολέδο
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για την τελευταία ημέρα προτείνουμε μια εκδρομή για να δείτε και την επαρχία της Μαδρίτης. Αρχικά έχουμε το διάσημο <strong>Τολέδο</strong> την πρώην πρωτεύουσα της Ισπανίας και βρίσκεται στους βράχους πάνω από τον ποταμό Τάχο, μπορείτε επίσης να επιλέξετε την <strong>Segovia</strong> με το Υδραγωγείο που θεωρείται ένα από τα σημαντικότερα μνημεία της Ρωμαϊκής Αυτοκρατορίας στην Ισπανία, ή το <strong>Ávila</strong>. Σε όλα μπορείτε να φτάσετε εύκολα μέσω τρένου, το οποίο φεύγει από τον σταθμό <strong>Atocha</strong>. Αν θέλετε να τα δείτε όλα σε μια ημέρα, μπορείτε να κλείσετε μια εκδρομή που θα τα συνδυάζει όλα.
                    </p>
                    <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-tour-ids="412133,408853,410819"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/segovia-l1694/">GetYourGuide</a></span></div>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Εμείς επιλέξαμε το <strong>Τολέδο</strong> ως μονοήμερη εκδρομή. Για να φτάσετε στο <strong>Τολέδο</strong> θα πρέπει να πάρετε το τρένο από τον σταθμό <strong>Atocha</strong>. Χρειάζεται περίπου 30 λεπτά και είναι πολύ εύκολο να κλείσετε online το εισιτήριό σας. Οι τιμές είναι περίπου 10 με 11 ευρώ (ανάλογα με την ώρα και τη διαθεσιμότητα).
                    </p>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Τι μπορείτε να δείτε στο <strong>Τολέδο</strong>:
                    </p>
                    {/* ΕΙΚΟΝΑ: Finestrella (Το παραθυράκι) */}
                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">

                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/toledo_view.jpg"
                                alt="Το κάστρο του Τολέδο, με θέα την παλιά πόλη και τον ποταμό Τάχο"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/toledo-cathedral.jpg"
                                alt="Ο Καθεδρικός Ναός του Τολέδο, ένα αριστούργημα μεσαιωνικής γοτθικής αρχιτεκτονικής, με τον εντυπωσιακό του εξωτερικό να ξεχωρίζει στον ορίζοντα της πόλης"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                    </div>
                    <ul className="text-[#2E2E2F] mb-4 text-justify list-disc list-inside space-y-2">
                        <li>
                            <strong>Περιήγηση στην παλιά πόλη:</strong> Η <strong>Παλιά Πόλη του Τολέδο</strong>, Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO, είναι ένας λαβύρινθος από στενά πλακόστρωτα δρομάκια. Θα συναντήσετε εκπληκτικά παραδείγματα μεσαιωνικής, αναγεννησιακής και μουδέχαρ αρχιτεκτονικής σε κάθε στροφή.
                        </li>
                        <li>
                            <strong>Catedral Primada de Toledo</strong> (12€): Ο <strong>Καθεδρικός Ναός του Τολέδο</strong> είναι το πιο σημαντικό αξιοθέατο της πόλης. Πρόκειται για ένα αριστούργημα μεσαιωνικής γοτθικής αρχιτεκτονικής, του οποίου η ολοκλήρωση χρειάστηκε πάνω από 200 χρόνια. Είναι πολύ εντυπωσιακός εξωτερικά.
                        </li>
                        <li>
                            <strong>Synagogue of El Tránsito</strong> (3€): Χτισμένη το 1355, είναι η πιο μεγαλοπρεπής συναγωγή του <strong>Τολέδο</strong>. Σήμερα στεγάζει και το αντίστοιχο μουσείο. Στο εσωτερικό του θα δείτε την αίθουσα προσευχής.
                        </li>
                        <li>
                            <strong>Alcázar de Toledo</strong> (5€): Χτισμένο στο ψηλότερο σημείο, το φρούριο <strong>Αλκάθαρ</strong>, είναι ένα αποτύπωμα του στρατιωτικού παρελθόντος της πόλης. Σήμερα φιλοξενεί το μουσείο <strong>Museo del Ejército</strong>
                        </li>
                        <li>
                            <strong>Museo de El Greco</strong> (3€): Όλη η πόλη συνδέεται με τον Έλληνα καλλιτέχνη, εδώ θα βρείτε την μεγαλύτερη συλλογή από τα έργα του
                        </li>
                        <li>
                            <strong>Monasterio de San Juan de los Reyes</strong> (4€): Στην καρδιά της εβραϊκής συνοικίας θα βρείτε αυτό το μοναστήρι που χτίστηκε κατά τη διάρκεια της βασιλείας της Ισαβέλλας Α΄ της Καστίλης, μιας από τις πιο επιδραστικές βασίλισσες της Ισπανίας.
                        </li>
                        <li>
                            <strong>Museo de los Concilios y la Cultura Visigoda</strong> (2€): Μπορείτε να μάθετε περισσότερα για τον πολιτισμό των Βησιγότθων και τον χρόνο που πέρασαν στο <strong>Τολέδο</strong>.
                        </li>
                        <li>
                            <strong>Iglesia de Santo Tomé</strong> (14€): Ιστορική εκκλησία που στεγάζει έναν από τους πιο διάσημους πίνακες του <strong>El Greco</strong>, την Ταφή του Κόμη του Οργκάθ.
                        </li>
                        <li>
                            <strong>Puente de San Martín</strong>: Mια μεσαιωνική γέφυρα που εκτείνεται πάνω από τον ποταμό Τάγο και αποτελεί ένα ωραίο σημείο για μια βόλτα.
                        </li>
                        <li>
                            <strong>Convento de Santo Domingo El Antiguo</strong>: Ένα ακόμα μοναστήρι που φιλοξενεί έναν από τα πρώτα έργα του <strong>El Greco</strong>, την Κοίμηση της Θεοτόκου.
                        </li>
                        <li>
                            <strong>Mirador del Valle</strong>: Το καλύτερο σημείο για να δείτε το <strong>Τολέδο</strong> από ψηλά Θα χρειαστεί να περπατήσετε περίπου 30 λεπτά μέχρι το <strong>Mirador del Valle</strong> για να φτάσετε στην κορυφή.
                        </li>
                    </ul>
                    {/* ΕΙΚΟΝΑ 6: San Luca / Στοές */}
                    <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/toledo_1.jpg"
                            alt="Η πανοραμική θέα του Τολέδο, με τον ποταμό Τάγο να αγκαλιάζει την πόλη και τα ιστορικά κτίρια να ξεχωρίζουν στον ορίζοντα"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div>
                </section>

                {/* --- ΦΑΓΗΤΟ --- */}
                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">Φαγητό στην Μαδρίτη</h2>

                    
                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">

                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/tortilla.jpeg"
                                alt="Η παραδοσιακή ισπανική tortilla, ένα πιάτο από πατάτες και αυγά, συχνά σερβιρισμένο ως τάπας ή σάντουιτς στην Μαδρίτη"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/tacos.jpeg"
                                alt="Τα τάκος στην Μαδρίτη, ένα πιάτο από τοπικά κρεατά και με την παραδοσιακή ισπανική μπουφέτα"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                    </div>

                    <p className="text-[#2E2E2F] leading-relaxed text-justify">
                        Μερικές από τις προτάσεις μας για φαγητό στην Μαδρίτη:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Χρησιμοποιούμε Grid εδώ ΜΟΝΟ για τη λίστα για να είναι πιο ευανάγνωστη, όχι για εικόνα δίπλα σε κείμενο */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4 mt-8">Tortilla – Street Food </h3>
                            <ul className="text-[#2E2E2F] mb-6 text-justify list-disc list-inside space-y-2">
                                <li>
                                    <strong>Pez Tortilla</strong>: Για αυθεντική tortilla με πατάτα το οποίο έχει σε διάφορα σημεία στην πόλη.
                                </li>
                                <li>
                                    <strong>DIVORARE l Focaccia Madrid</strong>: Σάντουιτς με focaccia και αλλαντικά.
                                </li>
                                <li>
                                    <strong>Bar La Campana</strong> ή <strong>Bar La Ideal</strong>: Για το τοπικό σάντουιτς με καλαμαράκια.
                                </li>
                                <li>
                                    <strong>Empanadas Malvón</strong>: Αυθεντικά αργεντίνικα empanadas.
                                </li>
                                <li>
                                    <strong>Takos Al Pastor</strong>: Οικονομικά τάκος.
                                </li>
                                <li>
                                    <strong>Cervecería 100 Montaditos</strong>: Τάκος με 1 ευρώ.
                                </li>
                                <li>
                                    <strong>Tiki Taco</strong>: Οικονομικά τάκος.
                                </li>
                                <li>
                                    <strong>Chocolat</strong>: Από τις καλύτερες ζεστές σοκολάτες που ήπιαμε.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4 mt-8">Φούρνοι</h3>
                            <ul className="text-[#2E2E2F] mb-6 text-justify list-disc list-inside space-y-2">
                                <li>
                                    <strong>Panadería Novo Mundo</strong>
                                </li>
                                <li>
                                    <strong>Mazál Bagels & Café</strong>
                                </li>
                                <li>
                                    <strong>Si Si Bagels</strong>
                                </li>
                                <li>
                                    <strong>CUADRA</strong>
                                </li>
                                <li>
                                    <strong>Alma Nomad Bakery</strong>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4 mt-8">Γλυκά</h3>
                            <ul className="text-[#2E2E2F] mb-6 text-justify list-disc list-inside space-y-2">
                                <li>
                                    <strong>The Cookie Lab - American Bakery & Coffee</strong>: Αμερικάνικου τύπου cookies.
                                </li>
                                <li>
                                    <strong>Demasie Madrid</strong>: Διάφορα γλυκά όπως cinnamon rolls & cookies.
                                </li>
                                <li>
                                    <strong>99 Cheesecake</strong>: Κομμάτι cheesecake με 1 ευρώ.
                                </li>
                                <li>
                                    <strong>MadRolls Cinnamon Rolls</strong>: Διάφορες γεύσεις cinnamon rolls.
                                </li>
                                <li>
                                    <strong>La Mallorquina</strong>: Διάφορα τοπικά γλυκά.
                                </li>
                                <li>
                                    <strong>Obrar Madrid</strong>: Έχει πολύ νόστιμα cinnamon rolls.
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4 mt-8">
                        Άλλες δραστηριότητες στην Μαδρίτη
                    </h2>
                    <ul className="text-[#2E2E2F] mb-6 text-justify list-disc list-inside space-y-2">
                        <li>
                            <strong>Frontón Beti Jai</strong>: Ένα γήπεδο pelota, ηλικίας 130 ετών, το οποίο φιλοξένησε για πρώτη φορά διαγωνισμούς pelota vasca (ένας βασκικός αγώνας μπάλας) το 1894. Η είσοδος είναι δωρεάν.
                        </li>
                        <li>
                            <strong>Αρχαιολογικό Μουσείο της Μαδρίτης</strong>: Μουσείο για την ιστορία της Μαδρίτης (είσοδος 3 ευρώ).
                        </li>
                        <li>
                            <strong>Nomad Museo</strong>: Ένα πολύ ιδιαίτερο μουσείο με φώτα, ΑΙ και ψηφιακή τέχνη. Έχει έργα του Μονε. Υπάρχει ένα promo κάποιες μέρες με είσοδο στα 12,5 ευρώ. Link: <a href="https://www.nomadmuseo.es/en/home-3/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.nomadmuseo.es/en/home-3/</a>.
                        </li>
                    </ul>
                </section>
                



            </main>

            {/* Footer Section */}
            <div className="pt-70">
                <PageFooter />
            </div>
        </div>
    )

};

export default Madrid;