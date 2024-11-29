import React from "react";
import Board from "./Board";

export default function App() {
    return (
        <>
            <div className="bg-[#e5e5e5] h-[100vh] grid place-items-center">
                <div>
                    <Board />
                </div>
            </div>
        </>
    );
}
