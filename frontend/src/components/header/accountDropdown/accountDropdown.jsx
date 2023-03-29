import { Link } from 'react-router-dom';
import ButtonCustom from '../../button/ButtonCustom';
import DropdownMenuItem from './DropdownMenuItem';

export default function AccountDropdown(props) {

    const HandleLinkTo = (route, text) => {
        return (<Link to={'/homepage'} onClick={HandleToggle} className="font-semibold text-xl text-black">{text}</Link>)
    }

    const HandleToggle = () => {
        props.setProfilIsToggle(!props.profilIsToggle);
    }

    return (
        <div ref={props.profilSidebarRef} className={props.profilIsToggle ?
            "transition-all duration-100 ease-in-out absolute z-20 min-w-[350px] w-[400px] h-[435px] flex flex-col items-center gap-y-3 top-[300px] right-[50%] translate-x-[50%]  md:absolute md:top-[67px] md:right-0 md:translate-x-0 md:w-[280px] bg-white border border-1 border-slate-300 shadow-md pt-3 pb-3 overflow-hidden"
            :
            "transition-all duration-400 ease-in-out absolute z-20 min-w-[350px] w-[400px] h-[0px] flex flex-col items-center gap-y-3 top-[300px] right-[50%] translate-x-[50%]  md:absolute md:top-[67px] md:right-0 md:translate-x-0 md:w-[280px] shadow-md pt-0 pb-0 overflow-hidden"
        }>
            <div className='flex flex-col justify-center items-center'>
                <p className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">BIENVENUE</p>
                <p className="font-semibold text-xl text-slate-800">( {props.user.lastname} )</p>
            </div>

            <div className="flex flex-col gap-y-1 w-full">

                <DropdownMenuItem route={'/account/'} text={'Espace personnel'} HandleToggle={HandleToggle} />
                <DropdownMenuItem route={'/account/myprofil'} text={'Mon profil'} HandleToggle={HandleToggle} />
                <DropdownMenuItem route={'/account/myaddress'} text={'Mon addresse'} HandleToggle={HandleToggle} />
                <DropdownMenuItem route={'/account/mycart'} text={'Mon panier'} HandleToggle={HandleToggle} />
                <DropdownMenuItem route={'/account/myorders'} text={'Mes commandes'} HandleToggle={HandleToggle} />
                <div onClick={props.handleLogout} className="flex items-center justify-center border border-t-0 border-l-0 border-r-0 border-b-[1.4px] border-slate-200 w-full p-3 duration-5000 hover:bg-slate-800 group">
                    <span className='font-semibold text-xl text-black group-hover:text-white'>Déconnexion</span>
                </div>
            </div>
        </div>
    )
}