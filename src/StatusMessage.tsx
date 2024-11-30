import React from "react";

type StatusMessageProps = {
    winner: string | null;
    xIsNext: boolean;
};

export default function StatusMessage({ winner, xIsNext }: StatusMessageProps) {
    let status: string;
    winner ? status = "Winner:" + winner : status = "Next player: " + (xIsNext ? "✕" : "○");
    return (
        <div className="w-[80vw] max-w-[400px] mb-[20px]">
            <p className="
                inline-block
                p-[7px_15px_8px]
                rounded-[50px]
                text-[clamp(18px,4vw,30px)]
                text-[#efefef]
                bg-[#2b2f36]
                font-[700]
                leading-[1em]
            ">
                {status}
            </p>
        </div>
    );
}