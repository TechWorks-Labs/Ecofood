import React, { useContext } from "react";
import { useState } from "react";
import ProfilForm from "../../../components/profil/form/ProfilForm";
import { useEffect } from "react";
import update from "../../../services/update.account";
import { userContext } from "../../../context/UserProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonAccount from "../../../components/button/ButtonAccount";
import { AllContext } from "../../../context/AllProviders";
export default function MyProfil(props) {

  const { userToken, getUserDatas, userDatas, setUserDatas } = useContext(userContext)
  const handleProfilSubmit = async (value) => {
    const updatedUserDatas = {
      userId: userToken.id_user,
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
      await update.userDatas(updatedUserDatas);
      setUserDatas(updatedUserDatas);
      toast('Profil mis à jour !', {
        position: 'top-right', hideProgressBar: true, autoClose: 1500
      });
    } catch (error) {
      console.log(error);
      toast.warn("Une erreur est survenue lors de la mise à jour du profil.", { position: "bottom-center", autoClose: 5000 });
    }
  };


  return (
    <div className="container max-w-4xl min-w-[300px] w-full bg-slate-100 p-8">
      <div className="w-full mx-auto bg-white border border-1 border-slate-200 shadow-lg p-3">
        <h2 className="text-slate-600 text-3xl font-semibold mb-5">Mon profil</h2>
        <ProfilForm submit={handleProfilSubmit} profil={userDatas} />
      </div>
    </div>
  )
};
