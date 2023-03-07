import React, { useContext } from "react";
import { useState } from "react";
import ProfilForm from "../../../components/profil/form/ProfilForm";
import { useEffect } from "react";
import update from "../../../services/update.account";
import { myUserContext } from "../../../context/MyUserContextProvider";

export default function MyProfil(props){
    const { user, getUserDatas, profil, setProfil }  = useContext(myUserContext)

    const handleProfilSubmit = (value) => {
        setProfil({
        ...setProfil, 
        userId: user.id_user,
        civility: value.civility,
        name: value.name,
        lastname : value.lastname,
        day : value.day,
        month : value.month, 
        year : value.year,
        email : value.email,
        emailConfirmation : value.emailConfirmation,
        password : value.password,
        passwordConfirmation : value.passwordConfirmation,
        isemailrequired: value.isemailrequired,
        ispasswordrequired: value.ispasswordrequired
        });
    }

    useEffect(()=>{
        update.profil(profil);
        getUserDatas(user.email)
    },[user.email]);

    useEffect(()=>{
        update.profil(profil);
    });

    
    return(
        <div className="max-w-4xl h-screen mx-auto bg-slate-100 p-10">
            <div className="w-full  bg-white border border-1 border-slate-200 shadow-lg">
                <ProfilForm submit={handleProfilSubmit} profil={profil}/>
            </div>
        </div>
    )
};
