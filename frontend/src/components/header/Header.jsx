import React from "react";
import { useState } from "react";
import background from "/src/assets/images/background/backgroundEcofood.png";
import profil from "/src/assets/images/icons/profil.svg";
import shop from "/src/assets/images/icons/shopping-bag-header.svg";
import close from "/src/assets/images/icons/close.svg";
import emptypanier from "/src/assets/images/icons/emptypanier.png";
import rayon from "/src/assets/images/icons/hamburger.svg";
import authService from "../../services/auth.service";
import { useContext } from "react";
import { myUserContext } from "../../context/MyUserContextProvider";
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { useEffect } from "react";
import SidebarRayons from "./sidebar/SidebarRayons";

function Header(props){
    useEffect(()=>{
 
        document.addEventListener("mousedown", handleOutPanierSlide);
        document.addEventListener("mousedown", handleOutProfilIcon);
    })

    const [hamburgerIsToggle, setHamburgerIsToggle] = useState(false);
    const [profilIsToggle, setProfilIsToggle] = useState(false);
    const [panierIsToggle, setPanierIsToggle] = useState(false);
    const [rayonsIsToggle, setRayonIsToggle] = useState(false);
    const {user, setUser} = useContext(myUserContext);

    const panierSlideRef = useRef();
    const panierIconRef = useRef();
    const profilRef = useRef();

    const handleRayonIsToggle = () => {
        setRayonIsToggle(!rayonsIsToggle);
        console.log(rayonsIsToggle)
    }


    const handleOutPanierSlide = event => {
        if(!panierSlideRef.current.contains(event.target) && !panierIconRef.current.contains(event.target)) {
            setPanierIsToggle(false);
            document.body.style.overflow = "scroll";
        }
    }
    
    const handleOutProfilIcon = event => {
        if(!profilRef.current.contains(event.target)) {        
            setProfilIsToggle(false);
            document.body.style.overflow = "scroll";
        }
    }

    const panierToggle = (event) => {
        if(panierIconRef.current.contains(event.target)){
            setPanierIsToggle(!panierIsToggle);
        }
    }

    function HamburgerToggle(){
        setHamburgerIsToggle(!hamburgerIsToggle);
        console.log(hamburgerIsToggle);
    }

    function ProfilToggle(){
        if(user.valid){
            if(profilIsToggle){
                document.body.style.overflow = "scroll";
            } else {
                document.body.style.overflow = "hidden";
            }
            setProfilIsToggle(!profilIsToggle);
        } else {
            setUser({...user,
            valid : false});
        };
    } 

    const handleLogout = () => {
        authService.logout();
        window.location.reload();
    }

    return(
        <div className="w-full h-full sticky top-0 z-50">
            {/* sidebar rayons in left side */}
            <SidebarRayons isToggle={rayonsIsToggle}/>

            {/* sidebar panier in right side */}
        <div className="w-full h-full">
            // panier menu latéral
            
            <div ref={panierSlideRef} className={panierIsToggle ?
             "transition-all duration-300 ease-in-out z-50 absolute top-0 right-0 h-screen bg-slate-200 w-[300px] p-2 flex flex-col items-center"
            :
            "transition-all duration-300 ease-in-out z-50 absolute top-0 right-0 translate-x-[100%] h-screen bg-slate-200 w-[300px] p-2 flex flex-col items-center"
            }>
                <a href="" className="absolute right-0" onClick={panierToggle}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                         <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="black"/>
                    </svg>
                </a>
                <img src={emptypanier} className="w-[180px] mt-[80px]"/>
                <p className="text-2xl font-bold mt-4">Votre panier est vide</p>
            </div>

            <div className="z-20 bg-slate-800 shadow-lg w-full h-[67px] min-w-[300px]">
                    <div className="min-w-[300px] max-w-6xl h-full mx-auto flex flex-row justify-between items-center p-2 relative">
                    {/* vertical toolbar user detail */}

            <div className="z-20 absolute top-0 bg-slate-800 shadow-lg w-full h-[67px] min-w-[300px]">
                    <div className="min-w-[300px] max-w-6xl h-full mx-auto flex flex-row justify-between items-center p-2 relative">
                    
                    // profil menu

                    <div className={profilIsToggle ? 
                    "transition-all duration-300 ease-in-out absolute z-20 min-w-[300px] w-[300px] h-[350px] top-[300px] right-[50%] translate-x-[50%] rounded-lg md:absolute md:top-[67px] md:right-0 md:translate-x-0 md:w-[280px] md:h-[300px] md:rounded-b-xl md:rounded-t-none bg-white border border-1 border-slate-300 shadow-md  flex flex-col justify-around items-center pt-3 pb-2 overflow-hidden"
                    : 
                    "transition-all duration-200 ease-in absolute z-20 top-[67px] border border-1 border-slate-300 shadow-md w-[280px] h-[0px] right-0 rounded-b-xl flex flex-col justify-around items-center p-0 overflow-hidden"
                    }>

                        <p className="font-bold text-xl text-black underline underline-offset-4">Bonjour {user.lastname}</p>
                    
                        <div className="flex flex-col justify-around w-full">
                            <div className="flex items-center justify-center border border-t-0 border-l-0 border-r-0 border-b-[1.4px] border-slate-200 w-full p-5  hover:bg-slate-400">
                                <a href="" className="font-semibold text-xl text-black">Mes commandes</a>
                            </div>

                            <div className="flex items-center justify-center border border-t-0 border-l-0 border-r-0 border-b-[1.4px] border-slate-200 w-full p-5 hover:bg-slate-400">
                                <a href="" className="font-semibold text-xl text-black">Mes informations</a>
                            </div>
                        </div>

                        <button onClick={handleLogout} className="flex justify-center items-center bg-[#EC3434] w-[140px] h-[40px] text-[0.9rem] p-2 rounded-lg text-white mt-5 text-lg">Déconnexion</button>
                    </div>
                        <div className="flex flex-row items-center justify-center gap-x-4">
                            <button onClick={handleRayonIsToggle} className="bg-white w-[100px] h-[40px] p-1 rounded-2xl font-semibold text-md flex flex-row justify-center items-center gap-x-1">
                            <img src={rayon} className="w-[25px] border border-[1.3px] bg-slate-800 border-white rounded-full p-1"/> 
                                Rayons
                            </button>
                            <h1 className="text-white font-semibold text-xl">ECOFOOD</h1>
                        </div>

                        <ul className="hidden md:inline-block md:flex md:flex-row md:gap-x-6 text-white">
                            <li>
                                <Link to="/rayon">FRUITS</Link>
                            </li>
                            <li>
                                <Link to="/rayon">LEGUMES</Link>
                            </li>
                            <li>
                                <Link to="/rayon">VIANDES</Link>
                            </li>
                        </ul>

                        <div  className="flex flex-row items-center justify-center ">
                            <div  className="flex flex-row justify-around items-center min-w-[180px] p-2 md:min-w-[110px]">
                                {!user.valid ? <Link to ="/signin">
                                    <img ref={profilRef} src={profil} className="w-[35px]"  onClick={ProfilToggle}></img>
                                </Link> 
                                :
                                <img ref={profilRef} src={profil} className="w-[35px]" onClick={ProfilToggle}></img>}
                                <img src={shop} onClick={panierToggle} ref={panierIconRef} className="w-[35px]"></img>
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


                {profilIsToggle || panierIsToggle?

                {profilIsToggle || panierIsToggle ?

                 <div className="transition-all duration-1000 ease-in-out absolute top-0 z-10 w-full h-screen bg-black opacity-80"></div>
                :
                <div className="transition-all duration-1000 ease-in-out  absolute top-0 z-10 w-full h-screen bg-black opacity-0 hidden"></div>
                }
        </div>
   
)};

export default Header;