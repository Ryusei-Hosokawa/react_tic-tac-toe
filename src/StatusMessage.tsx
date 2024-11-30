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
            <p className="inline-block p-[7px_10px] rounded-[50px] text-[20px] text-[#fefefe] bg-[#4182de] font-[700] leading-[1em]">
                {status}
            </p>
        </div>
    );
}