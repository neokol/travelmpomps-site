// components/DestinationsSection.tsx
import Image from 'next/image';

export default function DestinationsSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] mx-auto max-w-6xl">
                <Image
                    src="/images/1.jpg"
                    alt="Travel Quote"
                    fill
                    className="object-cover rounded-2xl md:rounded-3xl shadow-xl"
                    priority
                />
            </div>
        </section>
    );
}