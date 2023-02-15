import { Link } from 'react-router-dom';

export default function ProfilSidebar(props){

    const HandleLinkTo = (route, text) => {
        return (<Link to={route} onClick={HandleToggle} className="font-semibold text-xl text-black">{text}</Link>) 
    }

    const HandleToggle = () => {
        props.setProfilIsToggle(!props.profilIsToggle);
    }

    return(
        <div className={props.profilIsToggle ? 
            "transition-all duration-300 ease-in-out absolute z-20 min-w-[300px] w-[300px] h-[350px] top-[300px] right-[50%] translate-x-[50%] rounded-lg md:absolute md:top-[67px] md:right-0 md:translate-x-0 md:w-[280px] md:h-[300px] md:rounded-b-xl md:rounded-t-none bg-white border border-1 border-slate-300 shadow-md  flex flex-col justify-around items-center pt-3 pb-2 overflow-hidden"
            : 
            "transition-all duration-200 ease-in absolute z-20 top-[67px] border border-1 border-slate-300 shadow-md w-[280px] h-[0px] right-0 rounded-b-xl flex flex-col justify-around items-center p-0 overflow-hidden"
            }>
                <p className="font-bold text-xl text-black underline underline-offset-4">Bonjour {props.user.lastname}</p>
            
                <div className="flex flex-col justify-around w-full">
                    <div className="flex items-center justify-center border border-t-0 border-l-0 border-r-0 border-b-[1.4px] border-slate-200 w-full p-5  hover:bg-slate-400">
                        {HandleLinkTo("/profil", "Mes commandes")}
                    </div>

                    <div className="flex items-center justify-center border border-t-0 border-l-0 border-r-0 border-b-[1.4px] border-slate-200 w-full p-5 hover:bg-slate-400">
                        {HandleLinkTo("/profil", "Mes informations")}
                    </div>
                </div>

                <button onClick={props.handleLogout} className="flex justify-center items-center bg-[#EC3434] w-[140px] h-[40px] text-[0.9rem] p-2 rounded-lg text-white mt-5 text-lg">Déconnexion</button>
            </div>
    )
}