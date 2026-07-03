"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface Destination {
    name: string;
    slug: string;
    image: string;
    alt: string;
    country: string;
    teaser: string;
    budget: boolean;
    featured?: boolean;
}

interface Props {
    destinations: Destination[];
}

export default function DestinationsGrid({ destinations }: Props) {
    const [budgetOnly, setBudgetOnly] = useState(false);
    const [country, setCountry] = useState("all");

    const countries = useMemo(
        () => Array.from(new Set(destinations.map((d) => d.country))).sort(),
        [destinations]
    );

    const filtered = destinations.filter((d) => {
        if (budgetOnly && !d.budget) return false;
        if (country !== "all" && d.country !== country) return false;
        return true;
    });

    return (
        <>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
                <button
                    onClick={() => setBudgetOnly(false)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                        !budgetOnly
                            ? "bg-[#F76808] text-white"
                            : "bg-[#F5F1ED] text-[#2E2E2F] hover:bg-[#eee8e0]"
                    }`}
                >
                    Όλα
                </button>
                <button
                    onClick={() => setBudgetOnly(true)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                        budgetOnly
                            ? "bg-[#F76808] text-white"
                            : "bg-[#F5F1ED] text-[#2E2E2F] hover:bg-[#eee8e0]"
                    }`}
                >
                    Οικονομικά
                </button>

                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="ml-auto px-4 py-2 rounded-full text-sm font-bold bg-[#F5F1ED] text-[#2E2E2F] border-none focus:outline-none focus:ring-2 focus:ring-[#F76808] cursor-pointer"
                >
                    <option value="all">Όλες οι χώρες</option>
                    {countries.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
                <p className="text-center text-gray-500 py-12">
                    Δεν βρέθηκαν προορισμοί με αυτά τα φίλτρα.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filtered.map((destination, index) => (
                        <Link
                            key={destination.slug}
                            href={`/destinations/${destination.slug}`}
                            className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                                index === 0 ? "sm:col-span-2" : ""
                            }`}
                        >
                            <div
                                className={`relative w-full ${
                                    index === 0 ? "aspect-[8/5] sm:aspect-[16/10]" : "aspect-[4/5]"
                                }`}
                            >
                                <Image
                                    src={destination.image}
                                    alt={destination.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h3
                                    className={`font-bold ${
                                        index === 0 ? "text-2xl" : "text-lg"
                                    }`}
                                >
                                    {destination.name}
                                </h3>
                                <p className="text-sm opacity-90">{destination.teaser}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
