import React, { useState } from "react";
import { CalculateWinner } from "./CalculateWinner.ts";
import StatusMessage from "./StatusMessage";
import Square from "./Square";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill({value: null, bgColor: "", textColor: ""}));
    const winner: string | null = CalculateWinner(squares.map((square) => square.value));

    const handleClick = (index: number) => {
        if (squares[index].value || winner) {
            return;
        }
        const newSquares = squares.slice();
        newSquares[index] = { 
            value: xIsNext ? "✕" : "○", 
            bgColor: xIsNext ? "bg-[#ff5e5e]" : "bg-[#5e9eff]",
            textColor: xIsNext ? "text-[#ffbebe]" : "text-[#bbd6ff]"
        };
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    return (
        <div>
            <StatusMessage winner={winner} xIsNext={xIsNext} />
            <div
                className="
                    flex
                    flex-wrap
                    w-[40vw]
                    max-w-[400px]
                    h-[40vw]
                    max-h-[400px]
                    border-[5px]
                    rounded-[5px]
                    border-[#555]"
            >
                {squares.map((square, index) => (
                    <Square
                        key={index}
                        value={square.value}
                        bgColorClass={square.bgColor}
                        textColorClass={square.textColor}
                        onSquareClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}
