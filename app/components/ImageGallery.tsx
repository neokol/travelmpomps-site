'use client'
import Image from 'next/image';
import React from 'react';

interface GalleryImage {
    image: string;
    header?: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
    return (
        <div className="w-full py-8 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mx-auto w-full max-w-md"
                    >
                        <div className="aspect-square relative">
                            <Image
                                src={item.image}
                                alt={item.header || `Gallery image ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                                priority={index < 4} 
                            />
                        </div>
                        {item.header && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h3 className="text-white text-lg font-semibold text-center">
                                    {item.header}
                                </h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};