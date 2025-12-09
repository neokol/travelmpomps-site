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
    // Τίτλος: Πρόσθεσα το "Φαγητό" γιατί στη Μπολόνια αυτό ψάχνουν όλοι!
    title: "Μπολόνια: Τι να δω και πού να φάω (Οδηγός 2025) | Travelmpomps",

    // Περιγραφή: Χτυπάμε στο συναίσθημα (γεύσεις) και την πληροφορία (αξιοθέατα)
    description: "Ανακαλύψτε την Μπολόνια, την πρωτεύουσα του φαγητού. Πλήρης οδηγός με τα κορυφαία αξιοθέατα, αυθεντικές γεύσεις, διαμονή και tips για ένα αξέχαστο ταξίδι στην Ιταλία.",

    // Προσοχή: Υπέθεσα ότι το url σου θα είναι /bologna (με λατινικά).
    // Αν το έχεις /mpolonia, άλλαξέ το εδώ.
    alternates: {
        canonical: 'https://travelmpomps.gr/destinations/bologna',
    },

    // Για Facebook, Viber, WhatsApp κλπ.
    openGraph: {
        title: 'Μπολόνια: Ο απόλυτος οδηγός για φαγητό και αξιοθέατα',
        description: 'Μάθετε τα πάντα για την Μπολόνια: Πύργοι, στοές και τα καλύτερα μέρη για αυθεντική ιταλική κουζίνα.',
        url: 'https://travelmpomps.gr/destinations/bologna',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        // Προαιρετικά: Εδώ μπορείς να βάλεις και μια εικόνα για να φαίνεται στα social media
        // images: [
        //   {
        //     url: 'https://travelmpomps.gr/images/bologna-cover.jpg',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Θέα της Μπολόνια',
        //   },
        // ],
    },
}


function Bologna() {
    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            {/* <Head>
                <title>Χριστούγεννα στο Λονδίνο</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/blog/christougenna-londino"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Christmas in London"
                    key="desc"
                />
            </Head> */}
            {/* Navbar */}
            <Script
                async
                defer
                src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
                data-gyg-partner-id="0OAQQKO"
            />
            <Navbar />

            <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 space-y-20 pt-24">
                {/* Section 1 — text left, image right */}
                <h1 className="text-3xl font-bold text-[#2E2E2F] mb-4">Μπολόνια: Τι να δω και τι να κάνω – Ο Πλήρης Οδηγός</h1>
                <div className="relative w-full aspect-[5/2] md:aspect-[5/2] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/bologna-main.jpg"
                        alt="Πανοραμική θέα της Μπολόνια με τους δύο πύργους και τις κόκκινες στέγες"
                        fill
                        priority
                        className="object-cover"
                        // sizes="100vw"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        quality={80}
                    />
                </div>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Η Μπολόνια είναι μια μικρή αλλά ζωντανή πόλη της Ιταλίας, γνωστή για το ιστορικό της πανεπιστήμιο, την πλούσια κουζίνα της και την ιδιαίτερη αρχιτεκτονική με τις χαρακτηριστικές στοές της. Τέλεια επιλογή για ένα οικονομικό city break και σύνδεση για ένα ταξίδι στην Τοσκάνη.
                </p>

                {/* --- ΜΕΤΑΦΟΡΕΣ --- */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">Μεταφορά από το Αεροδρόμιο της Μπολόνια</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Το αεροδρόμιο Guglielmo Marconi βρίσκεται μόλις 6 χλμ. από το κέντρο της πόλης. Για να φτάσετε στο κέντρο της Μπολόνια:
                    </p>

                    {/* ΕΙΚΟΝΑ 1: Ιδανικά μια φώτο από τον σταθμό ή ένα δρόμο της πόλης κατά την άφιξη */}
                    {/* <div className="my-8 relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/blog_images/bologna-transport.jpg" // Βάλε δική σου εικόνα
                            alt="Κεντρικός σταθμός Μπολόνια ή Αστικό τοπίο"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div> */}

                    <ul className="list-disc pl-6 space-y-3 text-[#2E2E2F]">
                        <li><strong>Marconi Express:</strong> Ο πιο γρήγορος τρόπος να φτάσετε στο κέντρο είναι με το Marconi Express, ένα αυτόματο τρένο που συνδέει το αεροδρόμιο με τον κεντρικό σταθμό (Stazione Centrale). Η διαδρομή διαρκεί 7-8 λεπτά και το εισιτήριο κοστίζει περίπου 12,80€.</li>
                        <li><strong>Ταξί:</strong>  Αν είστε πάνω από  2 άτομα συμφέρει πολύ περισσότερο να πάρετε ένα ταξί καθώς θα σας βγει πολύ φθηνότερα σε σχέση με το τρένο(περίπου 20-25€).</li>
                        <li><strong>Λεωφορείο 81 ή 91:</strong> Ο οικονομικότερος τρόπος για να φτάσετε στο κέντρο της πόλης είναι το λεωφορείο:
                            Μια επιλογή είναι να πάρετε τη γραμμή 81 ή 91. Μπορείτε να πάρετε αυτό το λεωφορείο από την Birra, που απέχει περίπου 15-20 λεπτά με τα πόδια από το αεροδρόμιο, επομένως δεν υπάρχει άμεση πρόσβαση από το αεροδρόμιο σε αυτή τη διαδρομή. Το κόστος είναι 1,50€.</li>
                        <li><strong>Λεωφορείο 944:</strong> Μια εναλλακτική διαδρομή είναι να πάρετε τη γραμμή 944 από το αεροδρόμιο. Αυτή η διαδρομή εκτελείται συχνά και κάνει 5 στάσεις πριν επιστρέψει στο αεροδρόμιο. Θα χρειαστεί να αλλάξετε με άλλο λεωφορείο για να φτάσετε στο κέντρο της Μπολόνια.</li>
                    </ul>
                </section>


                {/* Section 3 — image left, text right */}
                <section className="space-y-6 pt-10">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">Πρόγραμμα 2 ημερών στην Μπολόνια</h2>
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        1η Ημέρα - Ιστορικό Κέντρο
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Η πρώτη ημέρα είναι αφιερωμένη στο ιστορικό κέντρο της πόλης, που είναι σχετικά μικρό και μπορεί εύκολα να εξερευνηθεί με τα πόδια.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ξεκινήστε από την Piazza Maggiore, την κεντρική πλατεία της Μπολόνια, γύρω της θα βρείτε διάφορα ιστορικά κτίρια όπως το Palazzo Accursio, το Palazzo del Podestà και τη μεγαλοπρεπή Βασιλική του San Petronio — την 5η μεγαλύτερη εκκλησία στον κόσμο. Στο εσωτερικό της θα δείτε το εντυπωσιακό ηλιακό ρολόι.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στην πλατεία θα βρείτε το εντυπωσιακό σιντριβάνι του Ποσειδώνα (Neptune Fountain), είναι διάσημο όχι μόνο για την ομορφιά του, αλλά και για ένα περίεργο οπτικό φαινόμενο: αν σταθείτε κοντά στην είσοδο της βιβλιοθήκης Salaborsa θα δείτε το δάχτυλο του Ποσειδώνα να μετατρέπεται μαγικά σε φαλλό. Λέγεται ότι αυτό έγινε σκόπιμα από τον δημιουργό του, τον Τζιαμπολόνια, ως ένδειξη διαμαρτυρίας για τη λογοκρισία που του επιβλήθηκε.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ακριβώς δίπλα, αξίζει μια στάση στη Biblioteca Salaborsa, τη δημόσια βιβλιοθήκη της πόλης, όπου μέσα από το γυάλινο δάπεδο μπορείτε να δείτε ρωμαϊκά ερείπια. Η είσοδος κοστίζει περίπου 3 €.
                    </p>

                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">

                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/Piazza-Maggiore-Bologna.jpg" // Βάλε την κάθετη φώτο σου
                                alt="Ο Πύργος του Ρολογιού"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/Neptune-bologna.jpg" // Βάλε την κάθετη φώτο σου
                                alt="Το άγαλμα του Ποσειδώνα"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                    </div>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Προχωρήστε προς την Piazza Galvani, όπου βρίσκεται το Archiginnasio, το πρώτο πανεπιστήμιο του δυτικού κόσμου. Στο εσωτερικό του θα δείτε το διάσημο Anatomical Theatre, έναν ξύλινο χώρο του 17ου αιώνα όπου γίνονταν τα πρώτα μαθήματα ανατομίας.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στη συνέχεια, περπατήστε προς την Αγορά Quadrilatero, μια παραδοσιακή αγορά γεμάτη με delicatessen, φρέσκα ζυμαρικά και αλλαντικά. Είναι το ιδανικό μέρος για να δοκιμάσετε tagliatelle al ragù (η γνωστή “μπολονέζ”) ή tortellini in brodo.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-3">Για μεσημεριανό φαγητό:
                        <li className="mt-2">🍝 Osteria dell’Orsa – γνωστή για το αυθεντικό ragù</li>
                        <li>🍷 Trattoria dal Biassanot – παραδοσιακή τρατορία με αυθεντικά πιάτα της τοπικής κουζίνας</li>
                        <li>🥪 MÒ! MORTADELLA LAB – τα καλύτερα focaccia με διάφορα αλλαντικά.</li>
                    </ul>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Μετά το φαγητό, κατευθυνθείτε στους Δύο Πύργους (Torri degli Asinelli & Garisenda) — το πιο χαρακτηριστικό σημείο της Μπολόνια. Αν ο ψηλότερος πύργος είναι ανοιχτός, δυστυχώς όταν επισκεφτήκαμε εμείς ήταν κλειστός λόγω εργασιών, αξίζει να ανεβείτε για τη θέα στην πόλη (498 σκαλοπάτια!).
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στην οδό Strada Maggiore βρίσκεται η στοά Corte Isolani, με τρία μυστηριώδη μεσαιωνικά βέλη είναι σφηνωμένα στην ξύλινη στοά του συγκροτήματος. Ο θρύλος λέει ότι τα έριξαν τρεις ληστές που ήθελαν να σκοτώσουν έναν αριστοκράτη. Ευτυχώς για αυτόν, όταν μια γυμνή γυναίκα εμφανίστηκε από το παράθυρο, οι ληστές αφαιρέθηκαν και αστόχησαν. Έτσι, τα βέλη τους έχουν παραμείνει κολλημένα εκεί. Αν περάσετε από εκεί μπορεί να δείτε κάποιους να ψάχνουν να βρουν τα 3 βέλη.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Από εκεί περπατήστε προς την Piazza Santo Stefano, μια γοητευτική πλατεία με μικρά bar και καφέ. Εκεί βρίσκεται το Santo Stefano (γνωστό και ως Sette Chiese), ένα σύμπλεγμα επτά εκκλησιών που αποτελούν ένα από τα πιο ιδιαίτερα μνημεία της πόλης.
                    </p>



                    {/* ΕΙΚΟΝΑ 4: Οι δύο πύργοι (Asinelli) */}
                    <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/Skyline-of-Bologna-Italy.jpg"
                            alt="Οι δύο πύργοι της Μπολόνια"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div>
                </section>

                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        2η Ημέρα - Περπάτημα μέχρι τον San Luca
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify leading-relaxed">
                        Ξεκινήστε τη δεύτερη μέρα με έναν καφέ στο Caffè Terzi, ένα από τα καλύτερα καφέ της πόλης.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify leading-relaxed">
                        Στη συνέχεια, κάντε μια βόλτα στη Via Piella, για να δείτε τη διάσημη Finestrella di Bologna — ένα μικρό παράθυρο που αποκαλύπτει ένα κρυφό κανάλι. Αν θέλετε να αποφύγετε τα πλήθη, περπατήστε λίγο πιο πέρα στη Via Malcontenti, όπου μπορείτε να απολαύσετε τη θέα στο κανάλι πιο ήσυχα με λιγότερο κόσμο.
                    </p>
                    {/* ΕΙΚΟΝΑ: Finestrella (Το παραθυράκι) */}
                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">

                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/window-bologna.jpg" 
                                alt="Το κρυφό παράθυρο Finestrella στο κανάλι της Μπολόνια"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/stoa-bologna.jpg"
                                alt="Οι χαρακτηριστικές στοές της Μπολόνια"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>

                    </div>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Αν έχετε χρόνο, μπορείτε να επισκεφθείτε και τις αγορές Mercato di Elbe και Mercato di Bolognina, για να δείτε την καθημερινή ζωή των ντόπιων και να δοκιμάσετε street food.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το απόγευμα, περπατήστε (ή πάρτε λεωφορείο) προς το Santuario della Madonna di San Luca, έναν επιβλητικό ναό στην κορυφή ενός λόφου. Η διαδρομή γίνεται κάτω από μια συνεχή στοά μήκους 3,7 χλμ., τη μεγαλύτερη στον κόσμο. Ακόμη κι αν δεν περπατήσετε όλη τη διαδρομή, αξίζει να κάνετε ένα μέρος της για την εμπειρία.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Κλείστε τη μέρα σας χαλαρώνοντας στους Giardini Margherita, το πιο όμορφο πάρκο της πόλης, ιδανικό για πικνίκ ή για να δείτε το ηλιοβασίλεμα.</p>
                    {/* ΕΙΚΟΝΑ 6: San Luca / Στοές */}
                    <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/bologna-towers.jpg"
                            alt="Οι ατελείωτες στοές προς τον San Luca"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div>
                </section>


                {/* --- ΦΑΓΗΤΟ --- */}
                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">Φαγητό στην Μπολόνια</h2>

                    {/* ΕΙΚΟΝΑ 7: Μια πολύ δυνατή φωτογραφία φαγητού (π.χ. μακαρονάδα ή pizza) */}
                    <div className="my-8 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/ragu-bologna.jpg"
                            alt="Αυθεντική μπολονέζ και τοπικά πιάτα"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div>

                    <p className="text-[#2E2E2F] leading-relaxed text-justify">
                        Μερικές από τις προτάσεις μας για φαγητό στην Μπολόνια:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Χρησιμοποιούμε Grid εδώ ΜΟΝΟ για τη λίστα για να είναι πιο ευανάγνωστη, όχι για εικόνα δίπλα σε κείμενο */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-bold text-[#d32f2f] mb-2">Εστιατόρια & Street Food</h4>
                            <ul className="space-y-2 text-[#2E2E2F]">
                                <li>🍝 <strong>Sfoglia Rina:</strong>  Φανταστικές μακαρονάδες, πολύ viral εστιατόριο συνήθως είναι γεμάτο.</li>
                                <li>🥪 <strong>MÒ! MORTADELLA LAB:</strong> Φανταστικές focaccia, ιδανικό για πιο budget επιλογές.</li>
                                <li>🍕 <strong>Antica Pizzeria da Michele:</strong> Εδώ θα βρείτε αυθεντική ναπολιτάνικη πίτσα.</li>
                                <li>🍽️ <strong>Osteria dell Orsa:</strong> Παραδοσιακό ιταλικό φαγητό, το καλύτερο ragu της πόλης.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-bold text-[#795548] mb-2">Καφέ & Πρωινό</h4>
                            <ul className="space-y-2 text-[#2E2E2F]">
                                <li>☕ <strong>Pappare Bologna:</strong> Ωραίο καφέ και brunch, λιγότερο «ιταλικό», πολύ πιο σύγχρονο</li>
                                <li>🥐 <strong>Forno Brisa:</strong> Ακόμα ένας κλασσικός ιταλικός φούρνος για πρωινό.</li>
                                <li>🛶 <strong>Opera Caffè e Tulipani:</strong> Μικρό παραδοσιακό ιταλικό καφέ, πίσω έχει μικρό μπαλκονάκι που βλέπει σε ένα κανάλι. Αν έχει νερό, έχει τέλεια ατμόσφαιρα.</li>
                            </ul>
                        </div>
                    </div>
                    <div data-gyg-href="https://widget.getyourguide.com/default/city.frame" data-gyg-location-id="1431" data-gyg-locale-code="el-GR" data-gyg-widget="city" data-gyg-partner-id="0OAQQKO"></div>
                </section>
                
            </main>

            {/* Footer Section */}
            <div className="pt-70">
                <PageFooter />
            </div>
        </div>
    )

};

export default Bologna;