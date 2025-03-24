'use client';

import { useState, ReactNode } from "react";
import { MdModeOfTravel, MdFoodBank  } from "react-icons/md";
import { GiMountainRoad } from "react-icons/gi";
type Item = {
    name: string;
    icon?: ReactNode;
    content: string;
};

const items: Item[] = [
    {
        name: "Ταξίδια",
        icon: <MdModeOfTravel className="w-5 h-5" />,
        content:
            "Αναλυτικό πρόγραμμα σε διάφορους προορισμούς στο εξωτερικό",
    },
    {
        name: "Φαγητό",
        icon:  <MdFoodBank className="w-5 h-5" />,
        content:
            "Προτάσεις για εστιατόρια, street food, γλυκά, παγωτά από την Ελλάδα και το εξωτερικό",
    },
    {
        name: "Εκδρομές",
        icon:  <GiMountainRoad className="w-5 h-5" />,
        content:
            "Ιδέες για εκδρομές σε κοντινούς και μακρινούς προορισμούς τόσο στην Ελλάδα όσο και στο εξωτερικό",
    }
];

export const Widget = () => {
    const [activeBlock, setActiveBlock] = useState(0);

    const toggleMenuBlock = (index: number) => setActiveBlock(index);

    return (
        <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#F8F9F8] to-[#F8F9F8] text-gray-100">
            <div className="flex p-5 w-[540px] h-[200px] rounded-lg bg-gray-900 shadow-lg">
                {/* Sidebar Buttons */}
                <div className="w-[130px] pt-5">
                    {items.map((item, index) => (
                        <button
                            key={item.name}
                            className={`w-full h-10 px-3 flex gap-2 items-center text-sm font-normal rounded-md transition-colors ${index === activeBlock
                                    ? "bg-blue-600 text-white"
                                    : "bg-transparent text-gray-100 hover:bg-white/10"
                                }`}
                            onClick={() => toggleMenuBlock(index)}
                        >
                            <span className="text-base">{item.icon}</span>
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="relative flex-1 overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full transition-transform duration-600"
                        style={{ transform: `translateY(-${activeBlock * 200}px)` }}
                    >
                        {items.map((item) => (
                            <div
                                key={item.name}
                                className="h-[200px] p-5 flex flex-col justify-center"
                            >
                                <h2 className="text-lg font-normal mb-2">{item.name}</h2>
                                <p className="text-sm opacity-50 leading-relaxed">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};