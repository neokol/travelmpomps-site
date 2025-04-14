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
        <div className="w-full py-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="aspect-square relative">
                            <Image
                                src={item.image}
                                alt={item.header || `Gallery image ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                            />
                        </div>
                        {item.header && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                                <h3 className="text-white text-sm font-semibold truncate">
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