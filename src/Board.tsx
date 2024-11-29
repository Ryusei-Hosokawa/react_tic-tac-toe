import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (index: number) => {
        const newSquares = squares.slice();
        if (squares[index]) {
            return;
        }
        newSquares[index] = xIsNext ? "✕" : "○";
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    return (
        <div className="flex flex-wrap w-[80vw] max-w-[400px] h-[80vw] max-h-[400px] border-[5px] rounded-[5px] border-[#555]">
            {squares.map((value, index) => (
                <Square
                    key={index}
                    value={value}
                    onSquareClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
}
