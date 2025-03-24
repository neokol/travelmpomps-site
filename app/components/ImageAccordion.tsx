'use client';

import { useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';

type AccordionItem = {
    image: string;
    header: string;
    text: string;
};

type ImageAccordionProps = {
    items: AccordionItem[];
    className?: string; 
};

export const ImageAccordion = ({ items, className = '' }: ImageAccordionProps) => {
    const [active, setActive] = useState(0);

    const handleToggle = (index: number) => setActive(index);

    return (
        <div className={`flex gap-2.5 cursor-pointer ${className}`}>
            {items.map((item, index) => {
                const isActive = active === index;
                return (
                    <div
                        key={`${item.image}-${index}`} // Unique key for each item
                        className={`relative overflow-hidden ${isActive ? 'w-[400px] opacity-100' : 'w-16 opacity-50'} h-[500px] rounded-[36px] flex items-end transition-all duration-500 hover:opacity-75`}
                        onClick={() => handleToggle(index)}
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.header}
                            className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] w-full object-cover filter grayscale-[60%]"
                        />

                        {/* Content */}
                        <div className={`absolute bottom-0 left-0 w-[400px] z-10 ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible'} p-[100px_0_20px_20px] flex items-center gap-3.5 bg-gradient-to-b from-transparent to-black/80 transition-all duration-300`}>
                            <div className="grid place-items-center w-[50px] h-[50px] text-black/80 bg-white/70 rounded-full text-[28px]">
                                <MdPhotoCamera />
                            </div>
                            <div>
                                <h2 className="text-2xl font-normal text-white/96 m-0">
                                    {item.header}
                                </h2>
                                <p className="text-white/66 m-0">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};