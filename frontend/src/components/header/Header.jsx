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
import { myContext } from "../../context/MyApiContextProvider";
import Panier from "../panier/Panier";
import ProfilSidebar from "./profilSidebar/ProfilSideBar";

function Header(props){
    const {setParameterFilter, parameterFilter} = useContext(myContext);

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
        // if(!panierSlideRef.current.contains(event.target) && !panierIconRef.current.contains(event.target)) {
        //     setPanierIsToggle(false);
        //     document.body.style.overflow = "scroll";
        // }
    }
    
    const handleOutProfilIcon = event => {
        // if(!profilRef.current.contains(event.target)) {        
        //     setProfilIsToggle(false);
        //     document.body.style.overflow = "scroll";
        // }
    }

    const panierToggle = (event) => {
        if(panierIconRef.current.contains(event.target)){
            setPanierIsToggle(!panierIsToggle);
            document.body.style.overflow = "hidden";
        }
    }

    function HamburgerToggle(){
        setHamburgerIsToggle(!hamburgerIsToggle);
        console.log(hamburgerIsToggle);
    }

    function ProfilToggle(){
        if(user.valid){
            if(profilIsToggle && !panierIsToggle){
                // document.body.style.overflow = "scroll";
            } else {
                // document.body.style.overflow = "hidden";
            }
            setProfilIsToggle(!profilIsToggle);
        } else {
            setUser({...user,
            valid : false});
        };
    } 

    const handleLogout = () => {
        authService.logout();
        // window.location.reload();
    }

    return(
        <div className="w-full h-full sticky top-0 z-50">
            <Panier panierSlideRef = {panierSlideRef} panierIsToggle = {panierIsToggle} panierToggle={panierToggle}/>

            <div className="z-20 bg-slate-800 shadow-lg w-full h-[67px] min-w-[300px]">
                    <div className="min-w-[300px] max-w-6xl h-full mx-auto flex flex-row justify-between items-center p-2 relative">
                    {/* vertical toolbar user detail */}
                    <ProfilSidebar profilIsToggle={profilIsToggle} setProfilIsToggle={setProfilIsToggle} user={user} handleLogout={handleLogout}/> 

                        <div className="flex flex-row items-center justify-center gap-x-4">
                            <button onClick={handleRayonIsToggle} className="bg-white w-[110px] h-[40px] p-1 rounded-2xl font-semibold text-md flex flex-row justify-center items-center gap-x-1">
                            <img src={rayon} className="w-[25px] border border-[1.3px] bg-slate-800 border-white rounded-full p-1"/> 
                                Boutique
                            </button>
                            <Link to="/">
                                <h1 className="text-white font-semibold text-xl">ECOFOOD</h1>
                            </Link>
                        </div>

                        <ul className="hidden md:inline-block md:flex md:flex-row md:gap-x-6 text-white">
                            <li onClick={()=>setParameterFilter({... parameterFilter, type : "1"})}>
                                <Link to="/boutique">FRUITS</Link>
                            </li>
                            <li onClick={()=>setParameterFilter({... parameterFilter, type : "2"})}>
                                <Link to="/boutique">LEGUMES</Link>
                            </li>
                            <li onClick={()=>setParameterFilter({... parameterFilter, type : "3"})}>
                                <Link to="/boutique">VIANDES</Link>
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
                 <div className="transition-all duration-1000 ease-in-out absolute top-0 z-10 w-full h-screen bg-black opacity-80"></div>
                :
                <div className="transition-all duration-1000 ease-in-out  absolute top-0 z-10 w-full h-screen bg-black opacity-0 hidden"></div>
                }
        </div>
   
)};

export default Header;