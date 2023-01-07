import React from "react";
import { useState } from "react";

function Header(props){
    const [hamburgerIsToggle, setHamburgerIsToggle] = useState(false);

    function HamburgerToggle(){
        setHamburgerIsToggle(!hamburgerIsToggle);
        console.log(hamburgerIsToggle);
    }

    return(
    <div className="w-full h-[90px] shadow-lg">
        <div className="min-w-[400px] max-w-6xl h-full mx-auto bg-red-400 flex flex-row justify-between items-center p-2">
            <h1>ECOFOOD</h1>
            <ul className="flex flex-row gap-x-6 invisible md:visible">
                <li><a href='#'>FRUITS</a></li>
                <li><a href='#'>LEGUMES</a></li>
                <li><a href='#'>VIANDES</a></li>
            </ul>
            <button onClick={HamburgerToggle} className="bg-blue-400 p-2 rounded-lg md:invisible">
                <svg width="32" height="32" viewBox="0 0 32 32">
                    <rect x="6" y="8" width="20" height="2"/>
                    <rect x="6" y="16" width="20" height="2"/>
                    <rect x="6" y="24" width="20" height="2"/>
                </svg>
            </button>
        </div>

        <div className={hamburgerIsToggle ? "transition-all transform ease-linear duration-300 w-full mx-auto h-[200px] border border-1 border-slate-400 shadow-md overflow-hidden md:hidden" : "transition-all transform ease-linear duration-300 h-0 overflow-hidden  shadow-md md-hidden"}>
            <ul className="flex flex-col items-center gap-y-10 p-2">
                <li><a href='#'>FRUITS</a></li>
                <li><a href='#'>LEGUMES</a></li>
                <li><a href='#'>VIANDES</a></li>
            </ul>            
        </div>
    </div>
)};

export default Header;
