import Link from "next/link";
import Navbar from "./components/Navbar";
import { PageFooter } from "./components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#F8F6FE] flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
                <div className="text-center max-w-xl">
                    <p className="text-6xl font-bold text-[#F76808] mb-4">404</p>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#2E2E2F] mb-4">
                        Η σελίδα δεν βρέθηκε
                    </h1>
                    <p className="text-[#2E2E2F] mb-8">
                        Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί. Ρίξτε μια ματιά στους ταξιδιωτικούς μας οδηγούς.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-block bg-[#F76808] hover:bg-[#E55D07] text-white px-6 py-3 rounded-full font-medium transition-colors"
                        >
                            Αρχική Σελίδα
                        </Link>
                        <Link
                            href="/destinations"
                            className="inline-block bg-white border border-[#F76808] text-[#F76808] hover:bg-[#F76808] hover:text-white px-6 py-3 rounded-full font-medium transition-colors"
                        >
                            Δείτε τους Προορισμούς
                        </Link>
                    </div>
                </div>
            </main>
            <PageFooter />
        </div>
    );
}
