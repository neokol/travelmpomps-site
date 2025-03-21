'use client';

import React from 'react';
import { IoClose, IoFastFoodSharp } from 'react-icons/io5';
import { MdReadMore } from 'react-icons/md';
import { PiAirplaneTakeoffFill } from 'react-icons/pi';
import { TbRoadSign } from 'react-icons/tb';
import './style.css';

const cards = [
    {
        name: 'Ταξίδια',
        icon: <PiAirplaneTakeoffFill className="text-blue-500 w-30 h-30" />, // Larger size
        more: 'Αναλυτικό πρόγραμμα σε διάφορους προορισμούς',
    },
    {
        name: 'Φαγητό',
        icon: <IoFastFoodSharp className="text-red-500 w-30 h-30" />, // Larger size
        more: 'Προτάσεις για εστιατόρια, street food, γλυκά, παγωτά από την Ελλάδα και το εξωτερικό',
    },
    {
        name: 'Εκδρομές',
        icon: <TbRoadSign className="text-green-500 w-30 h-30" />, // Larger size
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