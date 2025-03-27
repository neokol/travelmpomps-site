import React from 'react';
import Navbar from '../components/Navbar';
import { PageFooter } from "../components/Footer";
import Image from 'next/image'; // Import the Image component from Next.js

function About() {
    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            <Navbar />

            {/* About Content Section with background image */}
            <div className="relative w-full h-[80vh]">
                {/* Using Next.js Image for background */}
                <div className="absolute inset-0">
                    <Image
                        src="/travel_the_world.jpg"  // Make sure to replace with your actual image path
                        alt="Travel the World"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#F8F6FE]/80"></div>

                {/* Content */}
                <div className="absolute inset-0 flex justify-center  items-center text-[#010C14] px-4">
                    <div className="text-center max-w-3xl p-8 rounded-lg">
                        <h1 className="text-4xl font-semibold mb-4">Λίγα λόγια για μάς...</h1>
                        <p className="mb-4 text-lg">Το travelmpomps ξεκίνησε από το πάθος μας για τα ταξίδια. Η αρχή έγινε με ένα ταξίδι στην Ρώμη, όπου αποφασίσαμε να μοιραστούμε την αγάπη μας για τις νέες εμπειρίες δημιουργώντας μικρά βίντεο στο TikTok. Στόχος μας ήταν να δείξουμε στον κόσμο τα αξιοθέατα, τα κρυφά σημεία και τις μοναδικές τοποθεσίες που ανακαλύπταμε σε κάθε προορισμό.</p>
                        <p className="mb-4 text-lg">Με τον καιρό, η επιθυμία μας να μοιραστούμε τις εμπειρίες μας επεκτάθηκε, και έτσι ξεκινήσαμε να δημιουργούμε περιεχόμενο όχι μόνο για τα ταξίδια μας στο εξωτερικό, αλλά και για τις εκδρομές μας στην Ελλάδα. Εστιάσαμε σε αγαπημένα μέρη, από παραδοσιακά εστιατόρια και street food μέχρι μοναδικά σημεία και αξιοθέατα που επισκεπτόμαστε κατά τη διάρκεια των περιηγήσεών μας.</p>
                        <p className="mb-4 text-lg">Σκοπός μας είναι να εμπνέουμε και να βοηθάμε άλλους να ανακαλύπτουν και να εξερευνούν τον κόσμο, είτε πρόκειται για την Ελλάδα, είτε για άλλους προορισμούς, με χρήσιμες πληροφορίες, συμβουλές και γνήσιες ιστορίες από τα ταξίδια μας.</p>
                    </div>
                </div>
            </div>

            <div className="py-8">
                <PageFooter />
            </div>
        </div>
    );
}

export default About;
