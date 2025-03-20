import React from 'react'
import Navbar from '@/app/components/Navbar'
import { Widget2 } from '@/app/components/Widget2'
import { FaCoins } from "react-icons/fa";
import { VscRadioTower } from "react-icons/vsc";
import { GiPassport } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";

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

function Berlin() {
    return (
        <div className="min-h-screen">
            <div><Navbar /></div>
            {/* Content with Padding to Account for Navbar */}
            <div className="pt-24 container mx-auto px-4">
                <h1 className="text-3xl font-bold text-[#2E2E2F] mb-4">
                    Βερολίνο: Τι να κάνω και τι να δω
                </h1>
                <p className="text-[#2E2E2F]">
                    Εξερευνήστε το Βερολίνο, μια πόλη γεμάτη ιστορία, πολιτισμό και νέες
                    εμπειρίες.
                </p>
                {/* Widget */}
                <div className="mt-8">
                    <Widget2 items={berlinItems} />
                </div>
                {/* Main sector */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                    1. Μεταφορά από το αεροδρόμιο
                    </h2>
                    <p>Όλες οι αεροπορικές εξυπηρετούν από το αεροδρόμιο του Βρανδεμβούργου (BER). Η μεταφορά γίνεται με το τρένο είτε την γραμμή S9 (συχνότερα δρομολόγια) είτε το τρένο FEX (γρηγορότερο). Το πιο σημαντικό είναι ότι για την μεταφορά θα πρέπει να βγάλετε το εισιτήριο σας προτού επιβιβαστείτε στο τρένο. Θα επιλέξετε αυτό που ανήκει και στις τρεις ζώνες ABC και έχει κόστος 4,40 ευρώ.  </p>
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
                    <h2 className="text-2xl font-bold text-[#2E2E2F] mb-4">
                    4. Πρόγραμμα
                    </h2>
                    <p>Τα αξιοθέατα στο Βερολίνο έχουν αρκετά μεγάλη απόσταση μεταξύ τους οπότε ένας καλός προγραμματισμός είναι απαραίτητος αν θέλουμε να δούμε όσο τα περισσότερα γίνεται. </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-1xl font-bold text-[#2E2E2F] mb-4">
                    1η Ημέρα
                    </h3>
                    <p>Τα αξιοθέατα στο Βερολίνο έχουν αρκετά μεγάλη απόσταση μεταξύ τους οπότε ένας καλός προγραμματισμός είναι απαραίτητος αν θέλουμε να δούμε όσο τα περισσότερα γίνεται. </p>
                </div>

            </div>
        </div>



    )
}

export default Berlin