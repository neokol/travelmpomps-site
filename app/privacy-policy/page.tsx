import React from 'react';
import Navbar from '../components/Navbar';
import { PageFooter } from "../components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Πολιτική Απορρήτου",
    description: "Πολιτική Απορρήτου του Travelmpomps: ποια δεδομένα συλλέγουμε, πώς χρησιμοποιούμε cookies και συνεργασίες affiliate, και ποια είναι τα δικαιώματά σας.",
    alternates: {
        canonical: '/privacy-policy',
    },
    openGraph: {
        title: 'Πολιτική Απορρήτου | Travelmpomps',
        description: 'Ποια δεδομένα συλλέγουμε, πώς χρησιμοποιούμε cookies και συνεργασίες affiliate στο Travelmpomps.',
        url: '/privacy-policy',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'website',
    },
}

function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            <Navbar />

            <main className="max-w-3xl mx-auto px-4 sm:px-8 py-16 pt-28 space-y-10">
                <div>
                    <h1 className="text-3xl font-bold text-[#2E2E2F] mb-4">Πολιτική Απορρήτου</h1>
                    <p className="text-[#2E2E2F] text-justify">
                        Τελευταία ενημέρωση: 25 Αυγούστου 2026
                    </p>
                </div>

                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">1. Εισαγωγή</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Το Travelmpomps (travelmpomps.gr) είναι ένα προσωπικό blog ταξιδιωτικών οδηγών. Σεβόμαστε την ιδιωτικότητά σας και η παρούσα σελίδα εξηγεί με απλά λόγια τι δεδομένα ενδέχεται να συλλέγονται όταν επισκέπτεστε τον ιστότοπό μας, πώς χρησιμοποιούνται τα cookies και ποιες είναι οι συνεργασίες μας με τρίτους παρόχους.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">2. Ποια δεδομένα συλλέγουμε</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Ο ιστότοπος δεν διαθέτει φόρμες εγγραφής, λογαριασμούς χρηστών ή newsletter, οπότε δεν σας ζητάμε άμεσα προσωπικά στοιχεία όπως όνομα ή email. Ο ιστότοπος φιλοξενείται στο Netlify, το οποίο, όπως κάθε πάροχος φιλοξενίας, καταγράφει αυτόματα βασικά τεχνικά στοιχεία (π.χ. διεύθυνση IP, τύπος browser, σελίδες που επισκεφθήκατε) για λόγους ασφάλειας και σταθερότητας της υπηρεσίας.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">3. Cookies &amp; τρίτοι πάροχοι</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Σε ορισμένες σελίδες προορισμών ενσωματώνουμε widgets της πλατφόρμας <strong>GetYourGuide</strong> για δραστηριότητες και εισιτήρια. Το GetYourGuide ενδέχεται να τοποθετήσει δικά του cookies στη συσκευή σας για να λειτουργήσει το widget και να καταγράψει τυχόν κράτηση που προήλθε από τον ιστότοπό μας. Δεν ελέγχουμε εμείς αυτά τα cookies — ισχύει η δική τους πολιτική απορρήτου.
                    </p>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Αυτή τη στιγμή δεν χρησιμοποιούμε εργαλεία analytics (π.χ. Google Analytics) στον ιστότοπο. Αν αυτό αλλάξει στο μέλλον, θα ενημερώσουμε αναλόγως αυτή τη σελίδα.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">4. Συνεργασίες &amp; Affiliate links</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Ορισμένοι σύνδεσμοι στους οδηγούς μας (όπως αυτοί προς το GetYourGuide) είναι affiliate links. Αν κάνετε μια κράτηση μέσω αυτών των συνδέσμων, ενδέχεται να λάβουμε μια μικρή προμήθεια, χωρίς καμία επιπλέον χρέωση για εσάς. Αυτό μας βοηθάει να συνεχίζουμε να δημιουργούμε δωρεάν περιεχόμενο.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">5. Τα δικαιώματά σας</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Εφόσον δεν συλλέγουμε ούτε αποθηκεύουμε εμείς οι ίδιοι προσωπικά σας δεδομένα, δεν τηρούμε δική μας βάση δεδομένων χρηστών. Για οποιοδήποτε ερώτημα σχετικά με δεδομένα που τηρεί το Netlify ή το GetYourGuide, μπορείτε να απευθυνθείτε απευθείας σε αυτούς. Έχετε πάντα το δικαίωμα να μας ρωτήσετε οτιδήποτε σχετικό μέσω των social media μας.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">6. Ασφάλεια</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Ο ιστότοπος εξυπηρετείται αποκλειστικά μέσω ασφαλούς σύνδεσης HTTPS.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">7. Αλλαγές στην παρούσα πολιτική</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Ενδέχεται να ενημερώνουμε κατά καιρούς αυτή τη σελίδα, για παράδειγμα αν προσθέσουμε νέα εργαλεία ή συνεργασίες. Η ημερομηνία τελευταίας ενημέρωσης αναγράφεται στην κορυφή της σελίδας.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#2E2E2F]">8. Επικοινωνία</h2>
                    <p className="text-[#2E2E2F] text-justify leading-relaxed">
                        Για οποιαδήποτε ερώτηση σχετικά με αυτή την πολιτική απορρήτου, μπορείτε να επικοινωνήσετε μαζί μας μέσω Instagram ή TikTok, στους συνδέσμους που θα βρείτε στο footer της σελίδας.
                    </p>
                </section>
            </main>

            <PageFooter />
        </div>
    );
}

export default PrivacyPolicy;
