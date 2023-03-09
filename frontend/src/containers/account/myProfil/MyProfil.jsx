import React, { useContext } from "react";
import { useState } from "react";
import ProfilForm from "../../../components/profil/form/ProfilForm";
import { useEffect } from "react";
import update from "../../../services/update.account";
import { myUserContext } from "../../../context/MyUserContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyProfil(props){
    const { user, getUserDatas, profil, setProfil }  = useContext(myUserContext)

    const handleProfilSubmit = async (value) => {
        const updatedProfil = {
          userId: user.id_user,
          civility: value.civility,
          name: value.name,
          lastname: value.lastname,
          day: value.day,
          month: value.month,
          year: value.year,
          email: value.email,
          emailConfirmation: value.emailConfirmation,
          password: value.password,
          passwordConfirmation: value.passwordConfirmation,
          isemailrequired: value.isemailrequired,
          ispasswordrequired: value.ispasswordrequired,
        };
      
        try {
          await update.profil(updatedProfil);
          setProfil(updatedProfil);
          toast("Le formulaire est valide !");
        } catch (error) {
          console.log(error);
          toast("Une erreur est survenue lors de la mise à jour du profil.");
        }
      };

    
    return(
        <div className="max-w-4xl h-screen mx-auto bg-slate-100 p-10">
            <div className="w-full  bg-white border border-1 border-slate-200 shadow-lg">
                <ProfilForm submit={handleProfilSubmit} profil={profil}/>

                <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                theme="colored"
                />
                
            </div>
        </div>
    )
};
