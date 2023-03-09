import { useContext, useEffect, useState } from "react"
import { myUserContext } from "../../../context/MyUserContextProvider"

export default function AddressForm(){
    const { profil, user } = useContext(myUserContext)
    const [ profilIsLoading, setProfilIsLoading ] = useState(false);

    useEffect(()=>{
        if (Object.keys(profil).length !== 0){
            setProfilIsLoading(true);
        }
    },[profil])
    return(
        <div>
            <div className="p-10">
                    { profilIsLoading ?
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col">
                            <span className="font-bold text-lg">Adresse :</span> 
                            <span>{(profil.address).toUpperCase()}</span>
                            <span>{profil.postal} {(profil.city).toUpperCase()}</span>                           
                        </div> 
                        <div className="flex flex-col">
                            <span className="font-bold text-lg">Pays :</span> 
                            <span> {(profil.state).toUpperCase()}</span>
                        </div> 
                    </div>
                     : 
                     <span>Chargement des données</span>}
                </div>
            <form className="p-10">

            </form>
        </div>
    )
}