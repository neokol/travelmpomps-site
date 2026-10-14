import React from 'react';

type Column = {
    key: string;
    label: string;
    /** Keep the cell on one line (dates, prices …). */
    nowrap?: boolean;
};

type Props = {
    columns: Column[];
    rows: Record<string, React.ReactNode>[];
};

// Real table from md up, stacked cards below it — a 3–4 column table is
// unreadable on a phone. The first column acts as the row title.
export function ResponsiveTable({ columns, rows }: Props) {
    const [first, ...rest] = columns;

    return (
        <>
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm text-[#2E2E2F]">
                    <thead className="bg-[#F5F1ED]">
                        <tr>
                            {columns.map((col) => (
                                <th key={col.key} scope="col" className="px-4 py-3 font-bold">
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i} className="border-t border-gray-100 align-top">
                                <th scope="row" className="px-4 py-3 font-bold">{row[first.key]}</th>
                                {rest.map((col) => (
                                    <td key={col.key} className={`px-4 py-3 ${col.nowrap ? 'whitespace-nowrap' : ''}`}>
                                        {row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden space-y-3">
                {rows.map((row, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-[#2E2E2F]">
                        <p className="font-bold mb-1">{row[first.key]}</p>
                        {rest.map((col) => (
                            <p key={col.key} className="text-sm">
                                <span className="font-semibold">{col.label}:</span> {row[col.key]}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
