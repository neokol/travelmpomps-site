import Image from 'next/image';

export type PhotoPairItem = {
    src: string;
    alt: string;
};

type Props = {
    left: PhotoPairItem;
    right: PhotoPairItem;
};

// Two images side by side, rounded only on their outer corners — the
// "one next to the other" pattern from the Madrid guide.
export function PhotoPair({ left, right }: Props) {
    return (
        <div className="grid grid-cols-2 gap-2 my-10 w-full h-[300px] md:h-[450px]">
            <div className="relative w-full h-full rounded-l-2xl overflow-hidden shadow-lg">
                <Image
                    src={left.src}
                    alt={left.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 600px"
                />
            </div>
            <div className="relative w-full h-full rounded-r-2xl overflow-hidden shadow-lg">
                <Image
                    src={right.src}
                    alt={right.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 600px"
                />
            </div>
        </div>
    );
}
