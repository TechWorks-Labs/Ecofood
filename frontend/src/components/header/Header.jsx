import React from "react";
import { useState } from "react";
import background from "/src/assets/images/background/backgroundEcofood.png";
import profil from "/src/assets/images/icons/profil.svg";
import shop from "/src/assets/images/icons/shopping-bag-header.svg";
import { useContext } from "react";
import { myUserContext } from "../../context/MyUserContextProvider";
import { Link } from 'react-router-dom';

function Header(props){
    const [hamburgerIsToggle, setHamburgerIsToggle] = useState(false);
    const [profilIsToggle, setProfilIsToggle] = useState(true);
    const {user} = useContext(myUserContext);

    function HamburgerToggle(){
        setHamburgerIsToggle(!hamburgerIsToggle);
        console.log(hamburgerIsToggle);
    }

    function ProfilToggle(){
        setProfilIsToggle(!profilIsToggle);
    }

    return(
    <div className="bg-slate-800 shadow-lg w-full h-[67px] min-w-[300px]">
        <div className="min-w-[300px] max-w-6xl h-full mx-auto flex flex-row justify-between items-center p-2 relative">
           
        <div className={profilIsToggle ? "absolute top-[67px] bg-white border border-1 border-slate-300 shadow-md w-[280px] h-[300px] right-0 rounded-b-xl flex flex-col justify-around items-center p-5 overflow-hidden"
        : "absolute top-[67px] border border-1 border-slate-300 shadow-md w-[280px] h-[0px] right-0 rounded-b-xl flex flex-col justify-around items-center p-0 overflow-hidden"}>
            <p className="font-bold text-xl text-black">Bonjour {user.lastname}</p>
        
            <div className="flex flex-col justify-around w-full">
                <div className="flex items-center justify-center border border-t-0 border-l-0 border-r-0 border-b-[1.4px] border-slate-200 w-full p-5">
                    <a href="" className="font-semibold text-xl text-black">Mes commandes</a>
                </div>

                <div className="flex items-center justify-center border border-t-0 border-l-0 border-r-0 border-b-[1.4px] border-slate-200 w-full p-5">
                    <a href="" className="font-semibold text-xl text-black">Mes informations</a>
                </div>
            </div>

            <button className="flex justify-center items-center bg-[#EC3434] w-[140px] h-[40px] text-[0.9rem] p-2 rounded-lg text-white mt-5 text-lg">Déconnexion</button>
        </div>
        
        }



            <div>
                <h1 className="text-white font-semibold text-xl">ECOFOOD</h1>
            </div>

            <ul className="hidden md:inline-block md:flex md:flex-row md:gap-x-6 text-white">
                <li><a href='#'>FRUITS</a></li>
                <li><a href='#'>LEGUMES</a></li>
                <li><a href='#'>VIANDES</a></li>
            </ul>
  

            <div className="flex flex-row items-center justify-center ">
                <div className="flex flex-row justify-around items-center min-w-[180px] p-2 md:min-w-[110px]">
                    <Link to ="/signin">
                        <img src={profil} className="w-[35px]" onClick={ProfilToggle}></img>
                    </Link>
                    <img src={shop} className="w-[35px]"></img>
                    <button onClick={HamburgerToggle} className="p-2 rounded-lg md:hidden">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="white">
                            <rect x="6" y="8" width="20" height="2"/>
                            <rect x="6" y="16" width="20" height="2"/>
                            <rect x="6" y="24" width="20" height="2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div className={hamburgerIsToggle ? "transition-all transform ease-linear duration-300 w-full mx-auto h-[200px] bg-white border border-1 border-slate-400 shadow-md overflow-hidden md:hidden" : "transition-all transform ease-linear duration-300 h-0 overflow-hidden  shadow-md md-hidden"}>
            <ul className="flex flex-col items-center gap-y-10 p-2">
                <li><a href='#'>FRUITS</a></li>
                <li><a href='#'>LEGUMES</a></li>
                <li><a href='#'>VIANDES</a></li>
            </ul>            
        </div>
    </div>
)};

export default Header;
