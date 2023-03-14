import React, { useContext } from "react";
import { useState } from "react";
import {Field, withFormik} from "formik";
import * as Yup from 'yup';
import { useEffect } from "react";
import { userContext } from "../../../context/UserProvider";
import { Link } from "react-router-dom";
import ButtonAccount from "../../button/ButtonAccount";

function ProfilForm(props){

    const [isEmailRequired, SetisEmailRequired] = useState(false);
    const [password, setPassword] = useState(false);

    const handleSetEmail = () => {
        SetisEmailRequired(!isEmailRequired);
    }
    const handleSetPassword = () => {
        setPassword(!password);
    }


    return(
            <form className="w-full flex flex-col justify-around items-center p-3 mt-10">    
                    <div className="w-full flex flex-col gap-y-2 items-center">
                        <div className="w-full flex flex-row gap-x-3 items-center">
                            <span>Civilité *</span>
                            <input 
                                type="radio" 
                                name ='civility' 
                                value="madame" 
                                onChange={props.handleChange} 
                                defaultChecked={props.values.civility === "madame"}
                            />
                            <label htmlFor="madame">Madame </label>
                            <input 
                                type = "radio" 
                                name ='civility' 
                                value = "monsieur" 
                                onChange = {props.handleChange} 
                                defaultChecked = {props.values.civility === "monsieur"}
                            /> 
                            <label htmlFor="monsieur">Monsieur </label>
                        </div>
                        
                        <div className="w-full">
                              {props.touched.civility && props.errors.civility && <span className="text-red-400">{props.errors.civility}</span>}
                        </div> 
                    </div>     
                    <div className="w-full flex-col">
                        <label htmlFor="name">Nom * </label>
                        <input type='text' className="pl-2 mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md"
                         name = 'name'
                         onChange = {props.handleChange}
                         value = {props.values.name}
                         onBlur = {props.handleBlur} />        
                          {props.touched.name && props.errors.name && <span className="text-red-400">{props.errors.name}</span>}
                    </div>            
                    <div className="w-full flex-col mt-2">
                        <label htmlFor="lastname">Prénom * </label>
                        <input type='text' className="pl-2 mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md" 
                        name = 'lastname'
                        onChange = {props.handleChange}
                        value = {props.values.lastname}
                        onBlur = {props.handleBlur} />   
                        {props.touched.lastname && props.errors.lastname && <span className="text-red-400">{props.errors.lastname}</span>} 
                    </div>            
                    <div className="w-full flex flex-col mt-2">
                        <span>Date de naissance *</span>
                        <div className="flex flex-row gap-x-8">

                            <input type='number' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md p-3" 
                            placeholder="jj" 
                            name = 'day'
                            onChange = {props.handleChange}
                            value = {props.values.day}
                            onBlur = {props.handleBlur} />   

                            <input type='number' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md p-3" 
                            placeholder="DD" 
                            name = 'month'
                            onChange = {props.handleChange}
                            value = {props.values.month}
                            onBlur = {props.handleBlur} />  

                            <input type='number' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md p-3" 
                            placeholder="AAAA"
                            name = 'year'
                            onChange = {props.handleChange}
                            value = {props.values.year}
                            onBlur = {props.handleBlur} />  

                        </div>       
                        {props.touched.day && props.errors.day && <span className="text-red-400">{props.errors.day}</span>}  
                        {props.touched.month && props.errors.month && <span className="text-red-400">{props.errors.month}</span>}  
                        {props.touched.year && props.errors.year && <span className="text-red-400">{props.errors.year}</span>}  
                       

                        {/* Modifier l'email */}
                        <div className="flex flex-col w-[300px] mt-4">
                            {isEmailRequired ? 
                            <div>
                                <label htmlFor="email">Address email * </label>
                                <input type="email" className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md p-3"
                                name="email"
                                onChange = {props.handleChange}
                                value = {props.values.email}
                                onBlur = {props.handleBlur}/>

                                <label htmlFor="emailConfirmation">Confirmer adresse email * : </label>
                                <input type="email" className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md p-3"
                                name="emailConfirmation"
                                onChange = {props.handleChange}
                                value = {props.values.emailConfirmation}
                                onBlur = {props.handleBlur}/>
                            </div>
                            :
                            <label className="flex justify-center items-center border border-1 border-slate-300 text-sm text-slate-800 rounded-lg w-[200px] p-1 h-[40px] font-semibold mt-2 hover:cursor-pointer hover:duration-300 hover:bg-slate-800 hover:text-white">
                            <Field type="radio" name="isemailrequired" className="hidden" value={!isEmailRequired} onClick={handleSetEmail}/>
                            Changer mon email
                            </label>
                            }
                        </div>

                        {props.touched.email && props.errors.email && <span className="text-red-400">{props.errors.email}</span>}  
                        {props.touched.emailConfirmation && props.errors.emailConfirmation && <span className="text-red-400">{props.errors.emailConfirmation}</span>}  

                        {/* Modifier le mot de passe */}
                        <div className="flex flex-col w-[300px] mt-4">
                            {password ? 
                            <div>
                                <label htmlFor="password">Mot de passe * </label>
                                <input type="password" className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md p-3"
                                name="password"
                                onChange = {props.handleChange}
                                value = {props.values.password}
                                onBlur = {props.handleBlur}/>

                                <label htmlFor="passwordConfirmation">Confirmer le mot de passe * : </label>
                                <input type="password" className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md p-3"
                                name="passwordConfirmation"
                                onChange = {props.handleChange}
                                value = {props.values.passwordConfirmation}
                                onBlur = {props.handleBlur}/>
                            </div>
                            :
                            <label className="flex justify-center items-center border border-1 border-slate-300 text-sm text-slate-800 rounded-lg w-[200px] p-1 h-[40px] font-semibold mt-2 hover:cursor-pointer hover:duration-300 hover:bg-slate-800 hover:text-white">
                            <Field type="radio" name="ispasswordrequired" className="hidden" value={!password} onClick={handleSetPassword}/>
                            Changer mon mot de passe
                            </label>
                            }
                        </div>

                        {props.touched.password && props.errors.password && <span className="text-red-400">{props.errors.password}</span>} 
                        {props.touched.passwordConfirmation && props.errors.passwordConfirmation && <span className="text-red-400">{props.errors.passwordConfirmation}</span>} 
                        
                        {/* Modifier le mot de passe */}

                    <span className="mt-4">La création de compte est réservée aux personnes majeures.</span>
                    </div>   
                    <div className="w-full flex flex-row justify-between items-center p-3">
                        <span>* Champs obligatoires</span>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                        <Link to={'/account'}>
                            <ButtonAccount />
                        </Link>
                            <button type='submit' onClick={props.handleSubmit} className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[90px] sm:h-[35px] flex justify-center items-center bg-white p-1 rounded-md text-slate-800  border border-1 border-slate-400 font-medium hover:duration-300 hover:bg-slate-800 hover:text-white">Suivant</button>
                        </div>
                    </div>    
                </form>  
    )
};

export default withFormik({
    enableReinitialize:true,
    mapPropsToValues: (props) => ({
        civility: props.profil.civility,
        name: props.profil.name,
        lastname : props.profil.lastname,
        day : props.profil.birth_day,
        month : props.profil.birth_month, 
        year : props.profil.birth_year,
        email: "",
        emailConfirmation: "",
        password: "",
        passwordConfirmation: "",
        isemailrequired: "",
        ispasswordrequired: ""
      }),
      validationSchema: Yup.object().shape({
        civility : Yup.string()
        .required('Le champs est obligatoire'),
        name : Yup.string()
        .max(32, "Le mot de passe doit comporter moins de 32 caracères")
        .matches(/^[\w-]+$/)
        .required("Le nom est obligatoire."),
        lastname : Yup.string()
        .max(32, "Le mot de passe doit comporter moins de 32 caracères")
        .matches(/^[\w-]+$/)
        .required("Le prénom est obligatoire."),
        day : Yup.string()
        .max(2, "Vous devez mettre deux chiffres maximum")
        .required('Le jour est obligatoire'),
        month : Yup.string()
        .max(2, "Vous devez mettre deux chiffres maximum")
        .required('Le mois est obligatoire'),
        year : Yup.string()
        .min(4, "Vous devez mettre 4 chiffres à lannée.")
        .max(4, "Vous devez mettre 4 chiffres maximum")
        .required('Le mois est obligatoire'),
        email: Yup.string().when("isemailrequired", {
          is: "true",
          then: Yup.string().email("Format email invalide").required("L'email est obligatoire"),
        }),
        emailConfirmation: Yup.string().when("isemailrequired", {
          is: "true",
          then: Yup.string()
            .email("Format email invalide")
            .required("La confirmation d'email est obligatoire")
            .oneOf([Yup.ref('email')],"Le mail n'est pas identique"),
        }),
        password: Yup.string().when("ispasswordrequired", {
            is: "true",
            then: Yup.string()
            .min(8, "Le mot de passe doit comporter 8 caractères")
            .matches(/[A-Z]/, "Le mot de passe doit comporter au moins une majuscule")
            .matches(/[a-z]/, "Le mot de passe doit comporter au moins une minuscule")
            .matches(/[0-9]/, "Le mot de passe doit comporter au moins un chiffre")
            .matches(/[@!&]/, "Le mot de passe doit comporter au moins un caractère spécial (@,!,&)")
            .required('Le mot de passe est obligatoire'),
        }),
        passwordConfirmation: Yup.string().when("ispasswordrequired", {
            is: "true",
            then: Yup.string()
            .oneOf([Yup.ref('password')],"Le mot de passe n'est pas identique")
            .required('Le mot de passe est obligatoire'),
        })

      }),
      handleSubmit: (values, { props }) => {
        const profilInformations = {
          civility : values.civility,
          name: values.name,
          lastname : values.lastname,
          day : values.day,
          month : values.month, 
          year : values.year,
          email: values.email,
          emailConfirmation: values.emailConfirmation,
          password: values.password,
          passwordConfirmation: values.passwordConfirmation,
          isemailrequired: values.isemailrequired,
          ispasswordrequired: values.ispasswordrequired
        };
        props.submit(profilInformations);
      },
    })(ProfilForm);
  
  
  
  