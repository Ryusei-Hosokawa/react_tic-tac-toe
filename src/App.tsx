import React from "react";
import Game from "./Game";

export default function App() {
    (function bodyAddClass() {
        document.body.classList.add('bg-[#e5e5e5]');
    })();
    
    return (
        <>
            <div className="h-[100vh] sm:grid sm:place-items-center sm:p-0 pt-[10vw] flex">
                <Game />
            </div>
        </>
    );
}
