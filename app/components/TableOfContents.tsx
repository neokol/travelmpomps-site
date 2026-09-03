'use client';

import { useState, ReactNode } from 'react';

export type TocItem = {
    icon: ReactNode;
    label: string;
    targetId: string;
};

type Props = {
    items: TocItem[];
};

export function TableOfContents({ items }: Props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            {/* Desktop card */}
            <div className="hidden md:block rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8 my-8">
                <h2 className="text-lg font-bold text-[#2E2E2F] mb-2">Περιεχόμενα Οδηγού</h2>
                <div className="grid grid-cols-2 gap-x-8">
                    {items.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => scrollToSection(item.targetId)}
                            className="flex items-center gap-4 py-3 text-left border-b border-gray-100 last:border-b-0 group"
                        >
                            <span className="shrink-0 w-10 h-10 rounded-full bg-[#F5F1ED] text-[#2E2E2F] flex items-center justify-center text-lg">
                                {item.icon}
                            </span>
                            <span className="font-bold text-[#2E2E2F] group-hover:text-[#F76808] transition-colors">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile floating button */}
            <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-white shadow-lg border border-gray-200 rounded-full px-5 py-3 flex items-center gap-2 font-bold text-[#2E2E2F]"
            >
                Περιεχόμενα
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>

            {/* Mobile modal */}
            {mobileOpen && (
                <div
                    className="md:hidden fixed inset-0 z-50 bg-black/50 flex items-end"
                    onClick={() => setMobileOpen(false)}
                >
                    <div
                        className="bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-[#2E2E2F]">Περιεχόμενα</h3>
                            <button
                                onClick={() => setMobileOpen(false)}
                                aria-label="Κλείσιμο"
                                className="text-[#2E2E2F] p-2"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            {items.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.targetId)}
                                    className="w-full flex items-center gap-4 py-3 text-left border-b border-gray-100 last:border-b-0"
                                >
                                    <span className="shrink-0 w-10 h-10 rounded-full bg-[#F5F1ED] text-[#2E2E2F] flex items-center justify-center text-lg">
                                        {item.icon}
                                    </span>
                                    <span className="font-bold text-[#2E2E2F]">{item.label}</span>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="w-full mt-4 bg-[#F5F1ED] text-[#2E2E2F] font-bold rounded-full py-3"
                        >
                            Επιστροφή στην Κορυφή
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
