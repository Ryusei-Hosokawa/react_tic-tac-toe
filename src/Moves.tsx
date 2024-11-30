import React from "react";
import { SquareTypes } from "./SquareTypes.ts";

type MovesProps = {
    history: SquareTypes[][];
    onClickJump: (moveIndex: number) => void;
};

export default function Moves({ history, onClickJump }: MovesProps) {
    return (
        <>
            {history.map((_: SquareTypes[], moveIndex: number) => {
                let description;
                moveIndex > 0
                    ? (description = "Go to move #" + moveIndex)
                    : (description = "Go to game start");
                return (
                    <li key={moveIndex} className="">
                        <button
                            className=""
                            onClick={() => onClickJump(moveIndex)}
                        >
                            {description}
                        </button>
                    </li>
                );
            })}
        </>
    );
}
