import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
};

// One full-width "big moment" photo — the single-image half of the
// Madrid guide's photo rhythm.
export function PhotoFull({ src, alt }: Props) {
    return (
        <div className="my-10 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1000px"
            />
        </div>
    );
}
