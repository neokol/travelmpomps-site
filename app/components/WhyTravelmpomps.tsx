import Link from 'next/link';
import { FaMapMarkedAlt, FaRoute, FaPiggyBank } from 'react-icons/fa';

const pillars = [
    {
        icon: <FaMapMarkedAlt className="w-7 h-7" />,
        title: "Αυθεντικές Εμπειρίες",
        description: "Ό,τι προτείνουμε το έχουμε ζήσει οι ίδιοι, στα δικά μας ταξίδια.",
    },
    {
        icon: <FaRoute className="w-7 h-7" />,
        title: "Αναλυτικά Προγράμματα",
        description: "Οδηγοί ημέρα-ημέρα με ώρες, κόστη και πρακτικές συμβουλές.",
    },
    {
        icon: <FaPiggyBank className="w-7 h-7" />,
        title: "Οικονομικά Tips",
        description: "Ιδέες και κόλπα για να ταξιδέψεις περισσότερο, ξοδεύοντας λιγότερα.",
    },
];

export default function WhyTravelmpomps() {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F1ED]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                    {pillars.map((pillar) => (
                        <div key={pillar.title} className="text-center md:text-left">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#F76808] shadow-sm mb-4">
                                {pillar.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#2E2E2F] mb-2">{pillar.title}</h3>
                            <p className="text-[#2E2E2F]/70 leading-relaxed">{pillar.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#2E2E2F] rounded-3xl px-8 py-12 md:py-16 text-center">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        Έτοιμοι για το επόμενο ταξίδι σας;
                    </h2>
                    <p className="text-white/70 max-w-xl mx-auto mb-8">
                        Δείτε όλους τους αναλυτικούς οδηγούς μας και βρείτε τον επόμενο προορισμό σας.
                    </p>
                    <Link
                        href="/destinations"
                        className="inline-block bg-[#F76808] hover:bg-[#E55D07] text-white px-8 py-3 rounded-full font-medium transition-colors"
                    >
                        Δες όλους τους Προορισμούς
                    </Link>
                </div>
            </div>
        </section>
    );
}
