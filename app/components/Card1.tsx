'use client';
import Image from "next/image";

import React from 'react';
import { IoClose } from 'react-icons/io5';
import { MdReadMore } from 'react-icons/md';
import './style.css';

const cards = [
    {
        name: 'Ταξίδια',
        icon: <Image
                                        className="rounded-lg shadow-xl"
                                        src="/travel.png"
                                        width={150}
                                        height={150}
                                        alt="travel"
                                    />, 
        more: 'Αναλυτικό πρόγραμμα σε διάφορους προορισμούς',
    },
    {
        name: 'Φαγητό',
        icon: <Image
        className="rounded-lg shadow-xl"
        src="/food.png"
        width={150}
        height={150}
        alt="travel"
    />, // Larger size
        more: 'Προτάσεις για εστιατόρια, street food, γλυκά, παγωτά από την Ελλάδα και το εξωτερικό',
    },
    {
        name: 'Εκδρομές',
        icon: <Image
        className="rounded-lg shadow-xl"
        src="/explore.png"
        width={150}
        height={150}
        alt="travel"
    />, // Larger size
        more: 'Ιδέες για εκδρομές σε κοντινούς και μακρινούς προορισμούς τόσο στην Ελλάδα όσο και στο εξωτερικό',
    },
];

export const Card1 = () => {
    return (
        <section className="page card-1-page">
            <div className="cards">
                {cards.map((card) => (
                    <label key={card.name} id={card.name}>
                        <input type="checkbox" />
                        <div className="card">
                            {/* Front Side */}
                            <div className="front">
                                <header>
                                    <h2>{card.name}</h2>
                                    <MdReadMore />
                                </header>
                                {/* Centered Icon */}
                                <div className="flex justify-center items-center h-[calc(100%-80px)] mt-8">
                                    {card.icon}
                                </div>
                            </div>

                            {/* Back Side */}
                            <div className="back">
                                <header>
                                    <h2>{card.name}</h2>
                                    <IoClose />
                                </header>
                                <p>{card.more}</p>
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </section>
    );
};