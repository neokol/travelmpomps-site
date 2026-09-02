import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/app/data/destinations';

// Greek requires the country name in the accusative with its article after
// "από" (e.g. "από την Ιταλία", not "από Ιταλία") — small lookup instead of
// trying to auto-derive Greek grammar from the nominative country name.
const countryAccusative: Record<string, string> = {
    Ιταλία: 'την Ιταλία',
    Ισπανία: 'την Ισπανία',
    Πολωνία: 'την Πολωνία',
    Γερμανία: 'τη Γερμανία',
    Αυστρία: 'την Αυστρία',
    Ρουμανία: 'τη Ρουμανία',
    'Ηνωμένο Βασίλειο': 'το Ηνωμένο Βασίλειο',
    Ουγγαρία: 'την Ουγγαρία',
};

type Props = {
    currentSlug: string;
    country: string;
};

export default function RelatedDestinations({ currentSlug, country }: Props) {
    const related = destinations.filter((d) => d.country === country && d.slug !== currentSlug);
    if (related.length === 0) return null;

    return (
        <section className="bg-[#F5F1ED] py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                    <div>
                        <p className="text-[#F76808] tracking-[0.2em] uppercase text-sm font-bold mb-2">
                            {country}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2F]">
                            Ακόμα περισσότερα από {countryAccusative[country] ?? country}
                        </h2>
                    </div>
                    <Link
                        href={`/destinations?country=${encodeURIComponent(country)}`}
                        className="inline-flex items-center gap-2 text-[#F76808] font-semibold hover:underline"
                    >
                        Δες όλους τους οδηγούς
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {related.map((dest) => (
                        <Link
                            key={dest.slug}
                            href={`/destinations/${dest.slug}`}
                            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={dest.image}
                                    alt={dest.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-lg font-bold">{dest.name}</h3>
                                <p className="text-sm opacity-90">{dest.teaser}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
