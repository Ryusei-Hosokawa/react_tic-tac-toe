import React, { useState } from "react";
import Board from "./Board";

// const [xIsNext, setXIsNext] = useState(true);
// const [history, setHistory] = useState(Array(9).fill(null));
// const currentSquares = history[history.length - 1];

// const handlePlay = (newSquares: string[]) => {
    
// };

export default function Game() {
    return (
        <div className="flex w-[100%] px-[5%]">
            <Board />
            <ol className=""></ol>
        </div>
    );
}
