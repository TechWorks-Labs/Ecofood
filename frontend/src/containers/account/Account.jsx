import profilSVG from "/src/assets/images/icons/user-search.svg";
import mapFilled from "/src/assets/images/icons/map-pin-filled.svg";
import brand from "/src/assets/images/icons/brand-mastercard.svg";
import shopping from "/src/assets/images/icons/shopping-bag-black.svg";
import receipt from "/src/assets/images/icons/receipt.svg";
import ProfilCard from "../../components/profil/profilCard/ProfilCard";
import { useContext } from "react";
import { AllContext } from "../../context/AllProviders";

export default function Account() {

    return (
        <div className={`grow max-w-7xl w-full min-w-[300px] mx-auto bg-slate-100 p-10`}>
            <h2 className="font-bold text-4xl text-slate-600">Mon espace personnel</h2>
            <div className="w-full mx-auto">
                <div className="grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11 mt-10">
                    <ProfilCard image={profilSVG} name="Mon profil" path="/account/myprofil"/>
                    <ProfilCard image={mapFilled} name="Mon addresse" path="/account/myaddress"/>
                    <ProfilCard image={brand} name="Stripe"/>
                    <ProfilCard image={shopping} name="Mon panier" path="/account/myCart"/>
                    <ProfilCard image={receipt} name="Mes commandes" path="/account/myorders"/>
                </div>
            </div>
        </div>
    )
}