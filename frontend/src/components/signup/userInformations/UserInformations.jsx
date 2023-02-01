import React from "react";
import {withFormik} from "formik";
import * as Yup from 'yup';

 function UserInformation(props){

    return(
        <div className="max-w-xl min-w-[300px] mt-[80px] mx-auto p-8 flex flex-col gap-y-5 justify-center items-center p-10"> 
            <span className='text-2xl sm:text-3xl font-black mb-5 underline underline-offset-4'>Mes informations personelles</span>
           
                <form className="w-full h-[450px] flex flex-col justify-around items-center p-3">    
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
                        <input type='text' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md"
                         name = 'name'
                         onChange = {props.handleChange}
                         value = {props.values.name}
                         onBlur = {props.handleBlur} />        
                          {props.touched.name && props.errors.name && <span className="text-red-400">{props.errors.name}</span>}
                    </div>            
                    <div className="w-full flex-col">
                        <label htmlFor="lastname">Prénom * </label>
                        <input type='text' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md" 
                        name = 'lastname'
                        onChange = {props.handleChange}
                        value = {props.values.lastname}
                        onBlur = {props.handleBlur} />   
                        {props.touched.lastname && props.errors.lastname && <span className="text-red-400">{props.errors.lastname}</span>} 
                    </div>            
                    <div className="w-full flex flex-col">
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
                        <span className="mt-1">La création de compte est réservée aux personnes majeures.</span>
                    </div>   
                    <div className="w-full flex flex-row justify-between items-center p-3">
                        <span>* Champs obligatoires</span>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <button type='submit' className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[90px] sm:h-[35px] flex justify-center items-center bg-white p-1 rounded-md text-black font-medium">Retour</button>
                            <button type='submit' onClick={props.handleSubmit} className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[90px] sm:h-[35px] flex justify-center items-center bg-slate-800 p-1 rounded-md text-white font-medium">Suivant</button>
                        </div>
                    </div>         
                </form>
        </div>
       )
    };

export default withFormik({
    mapPropsToValues : () => ({
        civility : "",
        name: "",
        lastname : "",
        day : "",
        month : "", 
        year : "",
    }),
    validationSchema : Yup.object().shape({
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
    }),
    handleSubmit : (values,{props}) => {
        const userInformations = {
            civility : values.civility, 
            name : values.name, 
            lastname : values.lastname, 
            day : values.day, 
            month : values.month, 
            year : values.year
        }
        props.submit(userInformations);
    }
})(UserInformation);