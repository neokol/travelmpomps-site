import { ReactNode } from 'react';

export type TripCostItem = {
    icon: ReactNode;
    label: string;
    range: string;
    actionText?: string;
    actionHref?: string;
};

type Props = {
    items: TripCostItem[];
    caption?: string;
};

// Reusable "how much does it cost" widget, styled after the
// saltinourhair.com cost-breakdown box. Each line can optionally link out
// (e.g. a Booking.com / GetYourGuide affiliate link) once one is available —
// omit actionHref to show the line as plain text.
export function TripCosts({ items, caption = '* Μέσο κόστος ανά άτομο' }: Props) {
    return (
        <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
            <p className="text-right text-xs text-gray-400 italic mb-4 sm:absolute sm:top-6 sm:right-8 sm:mb-0">
                {caption}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sm:mt-2">
                {items.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#F5F1ED] text-[#2E2E2F] flex items-center justify-center text-xl">
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-[#2E2E2F]">
                                <span className="font-bold">{item.label}:</span> {item.range}
                            </p>
                            {item.actionText && (
                                item.actionHref ? (
                                    <a
                                        href={item.actionHref}
                                        className="text-sm text-[#F76808] hover:underline inline-flex items-center gap-1 mt-0.5"
                                    >
                                        {item.actionText} →
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-400 inline-flex items-center gap-1 mt-0.5">
                                        {item.actionText} →
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
