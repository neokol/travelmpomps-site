// components/JourneySection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function JourneySection() {
    const highlights = [
        {
            title: "Βερολίνο",
            description: "Berlin Cathedral",
            image: "/images/1.jpg" // Update with your image path
        },
        {
            title: "Βαρκελώνη",
            description: "Sagrada Familia",
            image: "/images/sagrada.png"
        },
        {
            title: "Βιέννη",
            description: "Schönbrunn Palace",
            image: "/images/vienna.jpg"
        },
        {
            title: "Ρώμη",
            description: "Fontana di Trevi",
            image: "/images/fontana.jpg"
        },
        {
            title: "Λονδίνο",
            description: "London Bridge",
            image: "/images/5.png"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Main heading and description */}
                <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
                    {/* Left side - Heading */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Μοιραζόμαστε τις εμπειρίες μας
                        </h2>
                    </div>

                    {/* Right side - Paragraph and buttons */}
                    <div className="lg:w-1/2 flex flex-col">
                        <p className="text-lg md:text-xl text-gray-600 mb-6">
                            Δημιουργούμε τους πιο αναλυτικούς οδηγούς ταξιδιού για να σας βοηθήσουμε να εξερευνήσετε τον κόσμο.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/destinations">
                                <button className="bg-[#F76808] hover:bg-[#E55D07] text-white px-6 py-3 rounded-full font-medium transition-colors">
                                    Προορισμοί
                                </button>

                            </Link>
                        </div>
                    </div>
                </div>
                {/* Highlights grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {/* First highlight - spans two columns */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="relative h-64 md:h-80">
                            <Image
                                src={highlights[0].image}
                                alt={highlights[0].title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0  bg-opacity-30 group-hover:bg-opacity-20 transition-all" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-xl md:text-2xl font-bold">{highlights[0].title}</h3>
                            <p className="text-base opacity-90">{highlights[0].description}</p>
                        </div>
                    </div>

                    {/* Second highlight - normal size */}
                    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="relative h-64  md:h-80">
                            <Image
                                src={highlights[1].image}
                                alt={highlights[1].title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                style={{ objectPosition: 'center center' }} 
                            />
                            <div className="absolute inset-0  bg-opacity-30 group-hover:bg-opacity-20 transition-all" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-lg font-bold">{highlights[1].title}</h3>
                            <p className="text-sm opacity-90">{highlights[1].description}</p>
                        </div>
                    </div>

                    {/* Remaining highlights (3-5) */}
                    {highlights.slice(2).map((highlight, index) => (
                        <div key={index + 2} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="relative h-48">
                                <Image
                                    src={highlight.image}
                                    alt={highlight.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0  bg-opacity-30 group-hover:bg-opacity-20 transition-all" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-lg font-bold">{highlight.title}</h3>
                                <p className="text-sm opacity-90">{highlight.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}