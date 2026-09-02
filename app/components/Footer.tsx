import React from 'react';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTikTok } from 'react-icons/ai';
import { SiYoutubeshorts } from 'react-icons/si';
import Image from 'next/image';

const popularDestinations = [
    { name: 'Ρώμη', slug: 'rome' },
    { name: 'Βαρκελώνη', slug: 'barcelona' },
    { name: 'Βιέννη', slug: 'vienna' },
    { name: 'Μαδρίτη', slug: 'madrid' },
    { name: 'Κρακοβία', slug: 'krakow' },
];

export const PageFooter = () => {
    return (
        <footer className="w-full bg-[#F5F1ED]">
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/travelmpomps.png"
                                alt="Travelmpomps Logo"
                                width={56}
                                height={56}
                            />
                        </Link>
                        <p className="text-sm text-gray-600 mb-5 max-w-xs">
                            Ολοκληρωμένοι ταξιδιωτικοί οδηγοί για προορισμούς στην Ευρώπη, γραμμένοι από εμάς, για εσάς.
                        </p>
                        <div className="flex gap-5">
                            <a href="https://instagram.com/travelmpomps/" target="_blank" rel="noopener noreferrer">
                                <BsInstagram className="text-2xl text-[#22333B] hover:text-[#E101A7] transition-all duration-300" />
                            </a>
                            <a href="https://tiktok.com/@travelmpomps" target="_blank" rel="noopener noreferrer">
                                <AiFillTikTok className="text-2xl text-[#22333B] hover:text-black transition-all duration-300" />
                            </a>
                            <a href="https://youtube.com/@Travelmpomps" target="_blank" rel="noopener noreferrer">
                                <SiYoutubeshorts className="text-2xl text-[#22333B] hover:text-[#FE0032] transition-all duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-bold text-[#22333B] mb-4">Πλοήγηση</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-[#F76808] transition-colors">
                                    Αρχική
                                </Link>
                            </li>
                            <li>
                                <Link href="/destinations" className="text-gray-600 hover:text-[#F76808] transition-colors">
                                    Προορισμοί
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-[#F76808] transition-colors">
                                    Σχετικά με εμάς
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-600 hover:text-[#F76808] transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular destinations */}
                    <div>
                        <h3 className="font-bold text-[#22333B] mb-4">Δημοφιλείς Προορισμοί</h3>
                        <ul className="space-y-2 text-sm">
                            {popularDestinations.map((dest) => (
                                <li key={dest.slug}>
                                    <Link
                                        href={`/destinations/${dest.slug}`}
                                        className="text-gray-600 hover:text-[#F76808] transition-colors"
                                    >
                                        {dest.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600 text-center sm:text-left">
                    <p>© {new Date().getFullYear()} travelmpomps.gr – All rights reserved – Republishing the content of this page is strictly forbidden</p>
                    <Link href="/privacy-policy" className="shrink-0 hover:text-[#F76808] hover:underline transition-colors">
                        Πολιτική Απορρήτου
                    </Link>
                </div>
            </div>
        </footer>
    );
};
