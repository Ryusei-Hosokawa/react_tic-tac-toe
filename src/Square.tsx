import React from "react";

type SquareProps = {
    value: string | null;
    bgColorClass: string;
    textColorClass: string;
    onSquareClick: () => void;
};

export default function Square({ value, bgColorClass, textColorClass, onSquareClick }: SquareProps) {
    return (
        <button
            className={`
                grid 
                place-items-center
                w-[calc(100%/3)]
                h-[calc(100%/3)]
                border-[1px]
                border-[#555]
                text-[#fefefe]
                text-[min(10vw,100px)]
                font-[900]
                leading-[1em]
                transition-all
                duration-250
                ease-in-out
                ${bgColorClass}
                ${textColorClass}
            `}
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}
