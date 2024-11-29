import React from "react";

type SquareProps = {
    value: string | null;
    onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button
            className="
            grid 
            place-items-center 
            w-[calc(100%/3)] 
            h-[calc(100%/3)] 
            border-[1px] 
            border-[#555] 
            text-[min(14vw,100px)] 
            font-[900] 
            leading-[1em]"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}
