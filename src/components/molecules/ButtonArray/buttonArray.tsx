import React from "react";

interface ButtonArrayProps {
    name: string[];
    handleNameClick: (index: number) => void;
    selectedName: boolean[];
    cols: number;
    w: number;
    h: number;
}

export default function ButtonArray({ name, handleNameClick, selectedName, cols, w, h }: ButtonArrayProps) {
    return (
        <div className={`grid grid-cols-${cols} gap-3`}>
            {name.map((service, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => handleNameClick(index)}
                    className={`w-[${w}rem] h-[${h}rem] rounded-lg bg-inpu ${
                        selectedName[index] ? "bg-[#FFD6AD] text-[#FF6734]" : "bg-input text-[#616161]"
                    }`}
                >
                    {service}
                </button>
            ))}
        </div>
    );
}