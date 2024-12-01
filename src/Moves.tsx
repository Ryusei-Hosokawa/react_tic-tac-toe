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
                            className="inline-block p-[5px_10px_7px] rounded-[6px] text-[clamp(12px,3vw,20px)] text-[#efefef] bg-[#2b2f36] font-[500] leading-[1em]"
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
