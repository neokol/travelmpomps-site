import { ReactNode } from 'react';

export type QuickFactItem = {
    icon: ReactNode;
    label: string;
    value: string;
};

type Props = {
    items: QuickFactItem[];
};

// Always-visible replacement for the old Widget2 accordion — no clicking
// needed to see every fact, and it's fully responsive (Widget2 used fixed
// pixel widths/heights that clipped text on mobile).
export function QuickFacts({ items }: Props) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {items.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#FAE5CB] text-[#F76808] flex items-center justify-center text-xl">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-[#2E2E2F] mb-1">{item.label}</h3>
                            <p className="text-sm text-[#2E2E2F]/70 leading-relaxed">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
