import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import { PageFooter } from '@/app/components/Footer';
import Script from 'next/script'

export const metadata: Metadata = {
    // Ο τίτλος που θα φαίνεται στη Google
    title: "Μιλάνο: Τι να δω και πού να φάω (Οδηγός 2026)",

    // Η περιγραφή που θα φέρει το κλικ
    description: "Ανακαλύψτε το Μιλάνο, το κέντρο της μόδας στη Βόρεια Ιταλία. Πλήρης οδηγός με τον Duomo, τη Galleria, τη Navigli, μονοήμερες εκδρομές και τα καλύτερα μέρη για φαγητό.",

    alternates: {
        canonical: 'https://travelmpomps.gr/destinations/milan',
    },

    openGraph: {
        title: 'Μιλάνο: Ο απόλυτος οδηγός για αξιοθέατα, μονοήμερες εκδρομές και φαγητό',
        description: 'Μάθετε τα πάντα για το Μιλάνο: Duomo, Galleria Vittorio Emanuele, Navigli, Castello Sforzesco και μονοήμερες εκδρομές σε Κόμο, Μπέργκαμο, Λουγκάνο, Βερόνα, Λίμνη Γκάρντα και Τορίνο.',
        url: 'https://travelmpomps.gr/destinations/milan',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'article',
        images: [
            {
                // Άλλαξε το path στο φάκελο που έχεις τις φωτογραφίες του Μιλάνου
                url: '/images/milan-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Μιλάνο 2026: Ταξιδιωτικός Οδηγός',
            },
        ],
    },
}


function Milan() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://travelmpomps.gr/' },
            { '@type': 'ListItem', position: 2, name: 'Προορισμοί', item: 'https://travelmpomps.gr/destinations' },
            { '@type': 'ListItem', position: 3, name: 'Μιλάνο', item: 'https://travelmpomps.gr/destinations/milan' },
        ],
    };
    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            <Script
                id="json-ld-breadcrumb-milan"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Script
                async
                defer
                src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
                data-gyg-partner-id="0OAQQKO"
            />
            <Navbar />

            <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 space-y-20 pt-24">
                {/* Section 1 — hero */}
                <h1 className="text-3xl font-bold text-[#2E2E2F] mb-4">Μιλάνο: Τι να δεις και τι να κάνεις – Ο Πλήρης Οδηγός</h1>
                <div className="relative w-full aspect-[5/2] md:aspect-[5/2] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/milan-hero.jpg"
                        alt="Ο Καθεδρικός Ναός Duomo στο κέντρο του Μιλάνου"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        quality={80}
                    />
                </div>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Το Μιλάνο, το κέντρο της μόδας, είναι μια ιδιαίτερη πόλη στη Βόρεια Ιταλία. Είναι αρκετά μικρή για να τη γυρίσεις σε δύο μέρες βλέποντας τα βασικά αξιοθέατα, όμως έχει ένα μεγάλο προτέρημα: βρίσκεται πολύ κοντά σε πολλά όμορφα μέρη, όπως η λίμνη Κόμο, το Μπέργκαμο, το Τορίνο, η Βερόνα, η λίμνη Γκάρντα και το Λουγκάνο της Ελβετίας.
                </p>

                {/* --- ΜΕΤΑΦΟΡΕΣ --- */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">Μεταφορά από το Αεροδρόμιο του Μιλάνου</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Υπάρχουν δύο αεροδρόμια που εξυπηρετούν πτήσεις από την Ελλάδα. Το <strong>Malpensa (MXP)</strong> βρίσκεται περίπου 50 χλμ. από την πόλη. Ο πιο εύκολος και γρήγορος τρόπος είναι το τρένο <strong>Malpensa Express</strong>, που φτάνει στο κέντρο σε περίπου μισή ώρα και κοστίζει 13€. Ακολουθήστε απλά τις πινακίδες του τρένου μέσα στο αεροδρόμιο.
                    </p>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Στο αεροδρόμιο <strong>Bergamo (Orio al Serio)</strong> προσγειώνονται οι low cost εταιρείες, όπως η Ryanair. Από εκεί για το Μιλάνο έχετε δύο επιλογές: το <strong>λεωφορείο</strong> (π.χ. Terravision) απευθείας για το κέντρο, με αναχωρήσεις από τις πλατφόρμες 2–5, κόστος περίπου 8–10€ και διαδρομή γύρω στην 1 ώρα, ή το <strong>τρένο</strong> — πρώτα τοπικό λεωφορείο μέχρι τον σταθμό του Μπέργκαμο (περίπου 15 λεπτά, κόστος ~2,60€) και μετά τρένο για το Milano Centrale (περίπου 50 λεπτά, κόστος ~5–6€). Είναι πιο φθηνό συνολικά, αλλά με μια αλλαγή παραπάνω.
                    </p>
                </section>

                <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-q="Milan"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/milan-l63/">GetYourGuide</a></span></div>

                {/* Section 2 — Πρόγραμμα */}
                <section className="space-y-6 pt-10">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">Πρόγραμμα 2 ημερών στο Μιλάνο</h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το Μιλάνο είναι μια σχετικά μικρή πόλη με λίγα, αλλά αξιόλογα αξιοθέατα. Μέσα σε δύο μέρες μπορείτε να τη γυρίσετε όλη, για αυτό πολύς κόσμος το συνδυάζει με μονοήμερες εκδρομές στα γύρω μέρη.
                    </p>

                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 1η Ημέρα – Κέντρο
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ξεκινάμε από το πιο διάσημο αξιοθέατο της πόλης, τον <strong>Καθεδρικό Ναό Duomo</strong>. Καλό είναι να πάτε νωρίς το πρωί ώστε να έχει λιγότερο κόσμο. Υπάρχουν διαφορετικά εισιτήρια ανάλογα με την πρόσβαση που θέλετε (μόνο εσωτερικό, μόνο ταράτσα, ή συνδυαστικό με μουσείο). Εμείς επιλέξαμε μόνο την ταράτσα (19€), από όπου έχετε υπέροχη θέα σε όλο το Μιλάνο και βλέπετε από κοντά τα γλυπτά της οροφής.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Χρειάστηκαν 500 χρόνια για να ολοκληρωθεί ο ναός. Χαρακτηριστικό του είναι το χρυσό άγαλμα της Παναγίας στην κορυφή — η <strong>Μαντονίνα</strong> — στην οποία είναι αφιερωμένος ολόκληρος ο ναός. Είναι ένας από τους μεγαλύτερους ναούς της Ευρώπης, με περίπου 3.500 αγάλματα. Στο εσωτερικό το ύψος φτάνει τα 45 μέτρα, και τα βιτρό χρονολογούνται από το 1470.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify italic">
                        💡 Tip: Ελέγξτε τις ώρες λειτουργίας πριν πάτε, γιατί αλλάζουν ανάλογα με τη σεζόν και τυχόν εκδηλώσεις.
                    </p>

                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">
                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/duomo-roof.jpg"
                                alt="Η ταράτσα του Duomo του Μιλάνου με θέα στην πόλη"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>
                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/galleria-vittorio-emanuele.jpg"
                                alt="Η Galleria Vittorio Emanuele II, η ιστορική στοά του Μιλάνου"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>
                    </div>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ακριβώς πίσω από τον ναό θα βρείτε ένα από τα πιο διάσημα μαγαζιά του Μιλάνου, το <strong>Luini</strong>, με πεντανόστιμα παντσερότι σε μεγάλη ποικιλία. Μην τα προσπεράσετε.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Πριν συνεχίσετε, υπάρχουν δύο αξιοθέατα με δωρεάν είσοδο λίγο πιο μακριά, στην <strong>Piazza Santo Stefano</strong>: το <strong>San Bernardino alle Ossa</strong>, μια εκκλησία με οστεοφυλάκιο όπου οι τοίχοι είναι διακοσμημένοι αποκλειστικά με ανθρώπινα κρανία και οστά — η ίδια η εκκλησία δεν είναι κάτι ιδιαίτερο, αλλά το οστεοφυλάκιο είναι πραγματικά εντυπωσιακό — και δίπλα ακριβώς η <strong>Basilica di Santo Stefano Maggiore</strong>.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Επιστρέφοντας στην πλατεία του Duomo, θα βρείτε τη <strong>Galleria Vittorio Emanuele II</strong>, μια τεράστια στοά που χτίστηκε για να ενώνει τον Καθεδρικό με τη Σκάλα του Μιλάνου — ουσιαστικά ένα από τα πρώτα εμπορικά κέντρα στον κόσμο. Στο κέντρο της δεσπόζει ο επιβλητικός θόλος της, εκεί βρίσκεται ο διάσημος ταύρος με το έθιμο των περιστροφών για γούρι, καθώς και το ιστορικό ζαχαροπλαστείο <strong>Marchesi</strong>. Το πρωί έχει συνήθως μεγάλη ουρά για τον ταύρο· αν πάτε το βράδυ θα βρείτε πολύ λιγότερο κόσμο.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Διασχίζοντας τη στοά βγαίνετε στη <strong>Σκάλα του Μιλάνου</strong>, τη διασημότερη όπερα στον κόσμο. Το όνομά της προέρχεται από την εκκλησία Santa Maria della Scala που βρισκόταν παλιότερα εκεί. Η επίσκεψη στο εσωτερικό (θέατρο και μουσείο) είναι προαιρετική.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Για διάλειμμα και καφέ, το <strong>Starbucks Reserve Roastery</strong> είναι μια καλή —και ιδιαίτερη— επιλογή, ένα από τα πιο εντυπωσιακά Starbucks στον κόσμο μέσα σε ένα ανακαινισμένο ιστορικό κτίριο. Σε κοντινή απόσταση περάστε από την <strong>Piazza Mercanti</strong>, και δοκιμάστε ένα από τα πιο διάσημα τιραμισού της πόλης στο <strong>Spun</strong>.
                    </p>

                    <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/brera.jpg"
                            alt="Η μποεμ γειτονιά Brera στο Μιλάνο με τα στενά δρομάκια και τις γκαλερί"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Στη συνέχεια κατευθυνθείτε προς μία από τις παλαιότερες εκκλησίες της πόλης, τη <strong>Βασιλική του Αγίου Αμβροσίου</strong> (471 μ.Χ.). Δεν είναι ιδιαίτερα τουριστική, αλλά αξίζει τη στάση. Ακριβώς έξω από αυτήν λέγεται πως βρίσκεται η «πύλη της κόλασης», σε έναν παλιό κορμό δέντρου με δύο τρύπες — τα «κέρατα του διαβόλου». Η παράδοση λέει ότι αν βάλετε το αυτί σας εκεί, ακούτε φωνές από την κόλαση. Πολύ κοντά βρίσκεται και η <strong>Chiesa di San Maurizio al Monastero Maggiore</strong>, που αξίζει να δείτε.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Γυρνώντας προς τη <strong>Via Dante</strong>, έναν από τους πιο διάσημους εμπορικούς δρόμους του Μιλάνου, φτάνετε μέχρι το κάστρο (πρώτη στάση της 2ης μέρας). Για το βράδυ, κάντε τη βόλτα σας στη <strong>Μπρέρα</strong>, την πιο μποέμ γειτονιά του Μιλάνου, με στενά δρομάκια, γκαλερί και μπαρ. Εκεί βρίσκεται και η διάσημη πινακοθήκη <strong>Pinacoteca di Brera</strong>.
                    </p>
                </section>

                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">
                        🗓️ 2η Ημέρα – Κάστρο, Porta Garibaldi και Navigli
                    </h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ξεκινάμε από το <strong>Castello Sforzesco</strong>, ένα μεγαλοπρεπές αναγεννησιακό κάστρο, χτισμένο από τους Σφόρτσα του Μιλάνου για την προστασία της πόλης. Ο κεντρικός προμαχώνας καταστράφηκε στον Β Παγκόσμιο Πόλεμο, αλλά ξαναχτίστηκε πιστά με βάση τα αρχικά σχέδια. Μέσα στο κάστρο στεγάζονται και μερικά μουσεία, ανάμεσά τους η τελευταία, ημιτελής Pietà του Μιχαήλ Άγγελου.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Πίσω από το κάστρο βρίσκεται το μεγαλύτερο πάρκο του Μιλάνου, το <strong>Parco Sempione</strong>, ο «πνεύμονας» της πόλης. Περπατώντας μέσα από το πάρκο (περίπου 10 λεπτά) φτάνετε στην <strong>Arco della Pace</strong> (Αψίδα της Ειρήνης), στην απέναντι άκρη. Δεξιά από την αψίδα βρίσκεται η «Chinatown» του Μιλάνου, με αρκετά μαγαζιά για να δοκιμάσετε ασιατικές γεύσεις.
                    </p>

                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">
                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/Arco-della-Pace.jpg"
                                alt="Η Αψίδα της Ειρήνης στο Μιλάνο"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>
                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/bosco-verticale.jpg"
                                alt="Οι πύργοι Bosco Verticale στην Porta Garibaldi"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>
                    </div>

                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Συνεχίζετε (με τα πόδια ή με κάποιο μέσο) προς την περιοχή <strong>Porta Garibaldi</strong>, τη σύγχρονη πλευρά του Μιλάνου. Ξεκινήστε από την <strong>Piazza Gae Aulenti</strong>, όπου δεσπόζει ο πύργος της UniCredit — έχει πολλά μαγαζιά και είναι καλή στάση για ξεκούραση. Ακριβώς πίσω από την πλατεία βρίσκονται οι διάσημοι πύργοι <strong>Bosco Verticale</strong>, δύο πολυκατοικίες γεμάτες δέντρα και φυτά που έχουν κερδίσει αρχιτεκτονικά βραβεία και είναι μοναδικές στο είδος τους.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Καθώς πλησιάζει το ηλιοβασίλεμα, κατευθυνθείτε προς την περιοχή <strong>Navigli</strong>, την πιο ζωντανή πλευρά του Μιλάνου, με τα κανάλια στη μέση και δεκάδες μαγαζιά για φαγητό και ποτό εκατέρωθεν. Εκεί δοκιμάσαμε την πιτσαρία <strong>Pizza e Mozzarella</strong>, μια επιλογή που προτιμούν αρκετοί ντόπιοι, με πολύ καλή και φθηνή πίτσα (περίπου 5€).
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify italic">
                        💡 Tip: Ένα αξιοθέατο που παραλείψαμε στο δικό μας πρόγραμμα είναι ο <strong>Μυστικός Δείπνος</strong> (The Last Supper) του Λεονάρντο Ντα Βίντσι, στη Santa Maria delle Grazie. Τα εισιτήρια εξαντλούνται πολύ γρήγορα (οι κρατήσεις συνήθως ανοίγουν μήνες πριν), οπότε αν σας ενδιαφέρει, κλείστε το νωρίς.
                    </p>

                    <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/navigli.jpg"
                            alt="Η γειτονιά Navigli στο Μιλάνο το ηλιοβασίλεμα"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1000px"
                        />
                    </div>
                </section>

                {/* --- ΜΟΝΟΗΜΕΡΕΣ ΕΚΔΡΟΜΕΣ --- */}
                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">Μονοήμερες εκδρομές από το Μιλάνο</h2>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Το Μιλάνο είναι ιδανική βάση για μονοήμερες εκδρομές, αφού βρίσκεται σε μικρή απόσταση από πολλά αξιόλογα μέρη. Παρακάτω τα βασικά για το καθένα.
                    </p>

                    <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="el-GR" data-gyg-widget="activities" data-gyg-number-of-items="3" data-gyg-partner-id="0OAQQKO" data-gyg-q="Lake Como"><span>Powered by <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/lake-como-l2217/">GetYourGuide</a></span></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Λίμνη Κόμο</h3>
                            <p className="text-[#2E2E2F] text-justify">
                                Μία από τις πιο διάσημες λίμνες της Ιταλίας, μόλις 35–50 λεπτά από το Μιλάνο με τρένο από το <strong>Milano Centrale</strong> (από 4€). Δύο συνηθισμένες διαδρομές: κατεβαίνετε στο <strong>Como San Giovanni</strong> και βλέπετε την πόλη του Κόμο, συνεχίζοντας με καραβάκι στα υπόλοιπα χωριά, ή πηγαίνετε κατευθείαν στο πιο φωτογενές χωριό <strong>Varenna</strong>, από όπου συνεχίζετε με βαρκάκι σε Bellagio και Menaggio.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Λουγκάνο (Ελβετία)</h3>
                            <p className="text-[#2E2E2F] text-justify">
                                Απευθείας τρένο από το Milano Centrale, περίπου 1 ώρα και 15 λεπτά, κόστος από 14€. Καθώς πρόκειται για την Ελβετία, να έχετε μαζί σας ταυτότητα ή διαβατήριο. Αξίζει μια βόλτα στην παραλίμνια προμενάδα και στην παλιά πόλη, και —αν έχετε χρόνο— μια ανάβαση με τελεφερίκ στο <strong>Monte San Salvatore</strong> ή στο <strong>Monte Brè</strong> για πανοραμική θέα στη λίμνη.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Μπέργκαμο</h3>
                            <p className="text-[#2E2E2F] text-justify">
                                Ένα από τα πιο κοντινά και εύκολα ταξίδια, μόλις 50 λεπτά με τρένο (από 5–6€). Το κύριο αξιοθέατο είναι η <strong>Città Alta</strong>, η μεσαιωνική άνω πόλη, στην οποία ανεβαίνετε με το γραφικό funicolare. Εκεί θα βρείτε την Piazza Vecchia, τον καθεδρικό, και τα ενετικά τείχη με πανοραμική θέα στην πεδιάδα. Αξίζει μισή έως μία ολόκληρη μέρα.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Λίμνη Γκάρντα (Sirmione)</h3>
                            <p className="text-[#2E2E2F] text-justify">
                                Η μεγαλύτερη λίμνη της Ιταλίας. Τρένο από το Milano Centrale μέχρι τον σταθμό <strong>Desenzano del Garda–Sirmione</strong> (περίπου 1 ώρα, από 10€), και μετά λεωφορείο (~20 λεπτά) μέχρι το γραφικό <strong>Sirmione</strong>, με το μεσαιωνικό κάστρο Scaligero, τα ρωμαϊκά ερείπια Grotte di Catullo και θερμές πηγές. Ιδανικό για μια πιο χαλαρή μέρα.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Βερόνα</h3>
                            <p className="text-[#2E2E2F] text-justify">
                                Η πόλη του Ρωμαίου και της Ιουλιέτας. Γρήγορο τρένο (Frecciarossa/Italo) περίπου 1 ώρα και 15 λεπτά (από 20€), ή regional σε ~2 ώρες αλλά πολύ πιο φθηνά (από 4–10€). Μη χάσετε τη ρωμαϊκή <strong>Arena</strong>, το σπίτι της Ιουλιέτας με το διάσημο μπαλκόνι, και την κεντρική πλατεία <strong>Piazza delle Erbe</strong>.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4">Τορίνο</h3>
                            <p className="text-[#2E2E2F] text-justify">
                                Η πρώην πρωτεύουσα της Ιταλίας, με πιο κομψό, γαλλικό αέρα. Γρήγορο τρένο μόλις 45 λεπτά–1 ώρα (από 15€). Δείτε τη <strong>Mole Antonelliana</strong> (και το Εθνικό Μουσείο Κινηματογράφου μέσα σε αυτή), την <strong>Piazza Castello</strong>, και το φημισμένο <strong>Museo Egizio</strong>, ένα από τα σημαντικότερα μουσεία αιγυπτιολογίας στον κόσμο εκτός Καΐρου.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- ΦΑΓΗΤΟ --- */}
                <section className="space-y-8 pt-10 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">Φαγητό στο Μιλάνο</h2>

                    <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">
                        {/* ΑΡΙΣΤΕΡΗ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/panzerotti.jpg"
                                alt="Παντσερότι, ένα από τα πιο διάσημα street food του Μιλάνου"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>
                        {/* ΔΕΞΙΑ ΕΙΚΟΝΑ */}
                        <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/tiramisu.jpg"
                                alt="Τιραμισού, το κλασικό ιταλικό γλυκό"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 600px"
                            />
                        </div>
                    </div>

                    <p className="text-[#2E2E2F] leading-relaxed text-justify">
                        Μερικές από τις προτάσεις μας για φαγητό στο Μιλάνο:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4 mt-8">Αλμυρό</h3>
                            <ul className="text-[#2E2E2F] mb-6 text-justify list-disc list-inside space-y-2">
                                <li><strong>Panzerotti Luini</strong>: Για τα διάσημα παντσερότι, ακριβώς πίσω από τον Duomo.</li>
                                <li><strong>Cesarino</strong>: Για σάντουιτς.</li>
                                <li><strong>All Antico Vinaio</strong>: Γεμιστά σάντουιτς με φοκάτσια.</li>
                                <li><strong>Trapizzino Milano</strong></li>
                                <li><strong>Pizza e Mozzarella</strong>: Στη Navigli, καλή και φθηνή πίτσα.</li>
                                <li><strong>La Magolfa</strong> – Navigli</li>
                                <li><strong>FONZOS NYC</strong></li>
                                <li><strong>miscusi</strong></li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4 mt-8">Γλυκό</h3>
                            <ul className="text-[#2E2E2F] mb-6 text-justify list-disc list-inside space-y-2">
                                <li><strong>Spun</strong>: Για τιραμισού.</li>
                                <li><strong>Cioccolatitaliani</strong>: Για παγωτό.</li>
                                <li><strong>Ciacco</strong>: Για παγωτό.</li>
                                <li><strong>Marchesi 1824</strong>: Ιστορικό ζαχαροπλαστείο μέσα στη Galleria.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#2E2E2F] mb-4 mt-8">Καφέ</h3>
                            <ul className="text-[#2E2E2F] mb-6 text-justify list-disc list-inside space-y-2">
                                <li><strong>NOWHERE</strong></li>
                                <li><strong>SISU</strong></li>
                            </ul>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer Section */}
            <div className="pt-70">
                <PageFooter />
            </div>
        </div>
    )

};

export default Milan;
