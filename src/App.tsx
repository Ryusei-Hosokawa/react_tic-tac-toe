import React from "react";
import Game from "./Game";

export default function App() {
    return (
        <>
            <div className="bg-[#e5e5e5] h-[100vh] sm:grid sm:place-items-center sm:p-0 pt-[10vw] flex">
                <Game />
            </div>
        </>
    );
}
