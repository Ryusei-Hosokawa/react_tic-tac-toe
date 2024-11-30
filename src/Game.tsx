import React, { useState } from "react";
import Board from "./Board";
import Moves from "./Moves";
import { SquareTypes } from "./SquareTypes.ts";

export default function Game() {
    const initialSquares:SquareTypes[] = Array(9).fill({
        value: null,
        bgColorClass: "",
        textColorClass: "",
    });

    const [currentMove, setCurrentMove] = useState(0);
    const [history, setHistory] = useState<SquareTypes[][]>([initialSquares]);
    const currentSquares = history[currentMove] || initialSquares;
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(newSquares: SquareTypes[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    return (
        <div className="flex gap-x-[10vw] w-[100%] px-[5vw]">
            <Board
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
            />
            <ol className="w-[clamp(100px,30vw,250px)] flex flex-col gap-y-[5px]">
                <Moves  history={history} onClickJump={jumpTo} />
            </ol>
        </div>
    );
}
