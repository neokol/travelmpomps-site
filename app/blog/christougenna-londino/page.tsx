import React from 'react';
// import Navbar from '../components/Navbar';
// import { PageFooter } from "../components/Footer";
import Image from 'next/image'; // Import the Image component from Next.js
import Head from 'next/head';
import { Metadata } from 'next';
import Link from "next/link";
import Navbar from '@/app/components/Navbar';
import { PageFooter } from '@/app/components/Footer';

export const metadata: Metadata = {
    title: "Χριστούγεννα στο Λονδίνο",
    description: "Τι να κάνετε και να δείτε στο Λονδίνο τα Χριστούγεννα. Οδηγός για τις καλύτερες χριστουγεννιάτικες αγορές, φωτισμούς και διαδρομές στην πόλη.",
    keywords: "Λονδίνο, Χριστούγεννα, Χριστουγεννιάτικες αγορές, Χριστουγεννιάτικος στολισμός, Χριστουγεννιάτικες διαδρομές, Οδηγός Λονδίνου, Travelmpomps, Ταξίδια, Αγγλία, Ευρώπη",
}


function ChristmasLondon() {
    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            <Head>
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
            </Head>
            {/* Navbar */}
            <Navbar />

            <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 space-y-20 pt-24">
                {/* Section 1 — text left, image right */}
                <h1 className="text-3xl font-bold text-[#2E2E2F] mb-4">Χριστούγεννα στο Λονδίνο</h1>
                <div className="relative w-full aspect-[5/2] md:aspect-[5/2] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/blog_images/london-xmas-1.jpg"
                            alt="χριστούγεννα στο λονδινο"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                <p className="text-[#2E2E2F] mb-4 text-justify">
                    Το Λονδίνο αποτελεί ένα από τους πιο δημοφιλείς προορισμούς για τα Χριστούγεννα, και όχι άδικα αφού είναι γεμάτο στολισμούς, αγορές και εντυπωσιακά events.
                </p>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <div className="prose prose-lg max-w-none h-full flex flex-col">
                        <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">Χριστουγεννιάτικες Αγορές</h3>
                        <p className="text-[#2E2E2F] mb-4 text-justify">
                            Μερικές από τις μεγαλύτερες Χριστουγεννιάτικες αγορές είναι:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-3">
                            <li>
                                <strong>Southbank Centre Winter Market (3/11 – 26/12):</strong> Βρίσκεται
                                στο Southbank και στις όχθες του Τάμεση θα βρείτε πολλές ξύλινες
                                καλύβες. Η είσοδος είναι δωρεάν.
                            </li>
                            <li>
                                <strong>Leicester Square (5/11 – 5/1):</strong> Αγορά πάνω στην
                                διάσημη πλατεία, η είσοδος είναι δωρεάν.
                            </li>
                            <li>
                                <strong>Trafalgar Square (9/12 – 3/1):</strong> Πάνω στην εμβληματική
                                πλατεία θα βρείτε μια ακόμα αγορά. Συνήθως, μπορείτε να βρείτε
                                τραγουδιστές των καλάντων να ερμηνεύουν εορταστικές μελωδίες δίπλα στο
                                χριστουγεννιάτικο δέντρο της πλατείας.
                            </li>
                            <li>
                                <strong>Convent Garden (12/11 – 3/1):</strong> Το Convent Garden
                                μεταμορφώνεται για τα Χριστούγεννα και θα βρείτε πολλά μαγαζιά στην
                                αγορά του.
                            </li>
                            <li>
                                <strong>Kingston Market (13/11 – 28/12):</strong> Βρίσκεται στο
                                νοτιοδυτικό Λονδίνο, σε μικρή απόσταση με τα πόδια από τη γέφυρα
                                Kingston και το Riverside Walk. Η είσοδος είναι δωρεάν.
                            </li>
                            <li>
                                <strong>Winter Wonderland (14/11 - 1/1):</strong> Βρίσκεται μέσα στο
                                Hyde Park και είναι μια από τις μεγαλύτερες αγορές του Λονδίνου. Η
                                είσοδος κοστίζει 5 λίρες.
                            </li>
                            <li><strong>Buckingham Palace (14/11 – 5/1): </strong>Είναι η νέα προσθήκη στις Χριστουγεννιάτικες αγορές του Λονδίνου. </li>
                            <li>
                                <strong>London Bridge (14/11 – 5/1):</strong> Το Winter by the River
                                στο London Bridge City προσφέρει εκπληκτική θέα στη Γέφυρα του Πύργου
                                και τον Πύργο του Λονδίνου, συνήθως με ξύλινες καλύβες γεμάτες με
                                δώρα, χειροποίητα χειροτεχνήματα και πολλά νόστιμα σνακ.
                            </li>
                            <li>
                                <strong>Greenwich (19/11 – 23/1):</strong> Σε λίγο μεγαλύτερη απόσταση
                                σε σχέση με τις υπόλοιπες αγορές που βρίσκονται κεντρικά. Μην χάσετε
                                επίσης την ευκαιρία να περιπλανηθείτε στην ιστορική παραθαλάσσια
                                γειτονιά του Greenwich, η οποία είναι στολισμένη με φώτα και ένα
                                χριστουγεννιάτικο δέντρο με ναυτική έμπνευση.
                            </li>
                            <li>
                                <strong>Borough Market (1/12 – 6/12):</strong> Η διάσημη αγορά φοράει
                                τα γιορτινά της.
                            </li>
                            <li>
                                <strong>Christmas at Old Spitalfields Market (29/11 – 24/12):</strong>{' '}
                                Η κλειστή αγορά του Spitalfields φοράει τα γιορτινά της για να
                                υποδεχθεί τα Χριστούγεννα.
                            </li>
                            <li>
                                <strong>Kings Cross Christmas market (28/11 – 22/12):</strong> Η
                                Αγορά στο Coal Drops Yard.
                            </li>
                        </ul>
                    </div>

                    <div className="relative md:pl-6 h-full">
                        <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/blog_images/london-xmas-2.jpg"
                                alt="Χριστουγεννιάτικες αγορές στο Λονδίνο"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 40vw, 100vw"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 2 — image left, text right */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <div className="relative md:order-1 h-full">
                        <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/blog_images/london-xmas-3.jpg"
                                alt="Χριστουγεννιάτικα φώτα στο Λονδίνο"
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 40vw, 100vw"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none md:order-2 h-full flex flex-col">
                        <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">Χριστουγεννιάτικος στολισμός</h3>
                        <p className="text-[#2E2E2F] mb-4 text-justify" >
                            Επίσης μερικά
                            από τα σημεία στην πόλη που μπορείτε να δείτε τους εντυπωσιακούς
                            Χριστουγεννιάτικους φωτισμούς είναι:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-3">
                            <li>
                                <strong>Oxford Street:</strong> Ο μακρύτερος εμπορικός δρόμος στην
                                Ευρώπη θα διαθέτει 5.000 αστέρια που αποτελούνται από 300.000
                                λαμπτήρες LED.
                            </li>
                            <li>
                                <strong>Bond Street:</strong> Οι βιτρίνες μεταμορφώνονται. Η έκθεση
                                θα περιλαμβάνει 93.000 LED εμπνευσμένα από τα κοσμήματα του στέμματος.
                            </li>
                            <li><strong>The Churchill Arms: </strong>Η διάσημη παμπ στο Kensington που κάθε χρόνο «βουλιάζει» στα φώτα και τα στολίδια</li>
                            <li><strong>Regent Street: </strong>Aπό τους πιο εμβληματικούς δρόμους του Λονδίνου, με θεαματικά χριστουγεννιάτικα φώτα κατά μήκος ολόκληρης της λεωφόρου.</li>
                            <li><strong>Ever After Garden: </strong>Ατμοσφαιρική εγκατάσταση στο Grosvenor Square (Mayfair) με χιλιάδες φωτισμένα λευκά τριαντάφυλλα που δημιουργούν ένα «κήπο» μνήμης. Η είσοδος είναι δωρεάν, με προαιρετική δωρεά υπέρ φιλανθρωπικού σκοπού.</li>
                            <li>
                                <strong>Carnaby Street: </strong> Η Carnaby Street παρουσιάζει το νέο χριστουγεννιάτικο θέμα «All is Bright», με εντυπωσιακές, πολύχρωμες εγκαταστάσεις που λούζουν τον δρόμο στο φως. Ιδανικό σκηνικό για γιορτινή βόλτα, ψώνια μέχρι αργά και ζεστές συναντήσεις στην καρδιά του Σόχο, όλη τη διάρκεια των εορτών.
                            </li>
                            <li>
                                <strong>Covent Garden:</strong> 300.000 φώτα θα φωτίσουν την πλατεία
                                και τους γύρω δρόμους.
                            </li>
                            <li>
                                <strong>West End:</strong> Piccadilly, Leicester Square, St Martins
                                Lane θα τα δείτε όλα φωτεισμένα μέχρι τις 6 Ιανουαρίου.
                            </li>
                            <li><strong>Marylebone Village:</strong>Η κομψή γειτονιά του Marylebone με ατμοσφαιρικό στολισμό γύρω από τη Marylebone High Street</li>
                            <li>
                                <strong>Leadenhall Market:</strong> Από τα πιο ατμοσφαιρικά και
                                όμορφα εορταστικά αξιοθέατα του Λονδίνου.
                            </li>
                        </ul>
                    </div>
                </section>


                <section className="space-y-6">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">Χριστουγεννιάτικες διαδρομές</h3>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Διαδρομές που μπορείτε να περπατήσετε μέσα στο Λονδίνο για να δείτε τους εντυπωσιακούς στολισμούς:
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Ξεκινήστε από την <strong>Bond Street</strong> και στη συνέχεια βγείτε στην <strong>Davies Street</strong> για να φτάσετε στο <strong>Annabels</strong> με τον εντυπωσιακό του στολισμό. Μετά περάστε από την <strong>Berkeley Square</strong>, που βρίσκεται ακριβώς από πίσω σας, και κατευθυνθείτε στην <strong>Bruton Street</strong> που οδηγεί στη <strong>Νέα Bond Street</strong>. Εκεί βρίσκονται τα διάσημα καταστήματα της Chanel, Dior, Cartier και Ralph Lauren. Στη συνέχεια στρίψτε αριστερά στην <strong>Burlington Gardens</strong> και περπατήστε μέσα από την στοά (<strong>Burlington Arcade</strong>) που οδηγεί στο <strong>Ritz</strong> που βρίσκεται στο <strong>Piccadilly</strong>, όπου θα βρείτε επίσης το <strong>Fortnum & Mason</strong> και τέλος στη <strong>Regent Street</strong> για τους διάσημους αγγέλους.
                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Μια ακόμα διαδρομή είναι να ξεκινήστε από το <strong>Covent Garden</strong>, μετά συνεχίστε στην <strong>Leicester Square</strong>, όπου βρίσκεται το παγοδρόμιο, και μετά κατεβείτε προς την <strong>Trafalgar Square</strong> και από εκεί στο <strong>Buckingham Palace</strong> που φέτος διοργανώνει την πρώτη Χριστουγεννιάτικη αγορά. Μη παραλείψετε το πολυκατάστημα <strong>Selfridges</strong> που φέτος έχει ένα εντυπωσιακό Disney display.                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Μια ακόμα μικρή διαδρομή που μπορείτε να πάρετε είναι να ξεκινήσετε από την <strong>Oxford Street</strong>, να συνεχίσετε προς τη <strong>Regent Street</strong>, μετά την <strong>Carnaby Street</strong>, ένα πέρασμα από τη <strong>New Bond Street</strong> και να φτάσετε στο <strong>Covent Garden</strong>.                    </p>
                    <p className="text-[#2E2E2F] mb-4 text-justify">
                        Διαβάστε <Link href={`/destinations/london`} className="text-blue-600 hover:text-blue-700 hover:underline">εδώ</Link> τον αναλυτικό μας οδηγό για τον Λονδίνο.
                    </p>
                    <div className="relative w-full aspect-[5/2] md:aspect-[5/2] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/blog_images/london-xmas-4.jpg"
                            alt="Χριστουγεννιάτικος στολισμός στο Λονδίνο"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
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

export default ChristmasLondon;