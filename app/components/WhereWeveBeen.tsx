'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { destinations } from '@/app/data/destinations';

function buildCountryCards() {
    const byCountry = new Map<string, typeof destinations>();
    for (const dest of destinations) {
        const list = byCountry.get(dest.country) ?? [];
        list.push(dest);
        byCountry.set(dest.country, list);
    }
    return Array.from(byCountry.entries()).map(([country, guides]) => {
        const cover = guides.find((g) => g.featured) ?? guides[0];
        return {
            country,
            count: guides.length,
            image: cover.image,
            alt: cover.alt,
        };
    });
}

export default function WhereWeveBeen() {
    const cards = buildCountryCards();

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-[#F76808] tracking-[0.2em] uppercase text-sm font-bold mb-3">
                    Προορισμοί
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2F] mb-10">
                    Πού έχουμε πάει στην Ευρώπη
                </h2>

                <Swiper
                    modules={[FreeMode, Mousewheel]}
                    freeMode={true}
                    grabCursor={true}
                    mousewheel={{ forceToAxis: true }}
                    slidesPerView={1.3}
                    spaceBetween={16}
                    breakpoints={{
                        480: { slidesPerView: 1.8, spaceBetween: 16 },
                        640: { slidesPerView: 2.3, spaceBetween: 18 },
                        1024: { slidesPerView: 3.4, spaceBetween: 20 },
                    }}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.country} className="!h-auto">
                            <Link
                                href={`/destinations?country=${encodeURIComponent(card.country)}`}
                                className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
                                    <Image
                                        src={card.image}
                                        alt={card.alt}
                                        fill
                                        draggable={false}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 30vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="text-lg font-bold">{card.country}</h3>
                                    <p className="text-sm opacity-90">
                                        {card.count} {card.count === 1 ? 'οδηγός' : 'οδηγοί'}
                                    </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
