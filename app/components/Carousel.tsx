'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides = [
    {
        title: "1 Series",
        image: "/images/1.jpg"
    },
    {
        title: "2 Series",
        image: "/images/2.jpg"
    },
    {
        title: "3 Series",
        image: "/images/3.jpg"
    },
    {
        title: "4 Series",
        image: "/images/5.png"
    }
];

export const Carousel = () => {
    return (
        <section className="relative flex items-center gap-12 px-8 py-16 bg-gradient-to-br bg-[#F8F6FE] text-gray-100">
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2} // Default to 1 slide on small screens
                effect="coverflow"
                loop={true}
                pagination={{ clickable: true }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
                modules={[Pagination, EffectCoverflow]}
                className="w-full max-w-4xl h-[440px] sm:h-[360px] md:h-[400px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.title}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                        className="bg-cover bg-center flex flex-col justify-end items-center grayscale-[60%]">
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end items-center pb-16">
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
