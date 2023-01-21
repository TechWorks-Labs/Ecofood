import React from "react";
import PasswordConditions from "./PasswordCondition";
import {withFormik} from "formik";
import * as Yup from 'yup';

function AccountIdentifiersForm (props){

return(
        <form className="w-full">
            <div className="w-full">
                <label htmlFor="form-control">Email address * </label>
                <input type='email' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md" id='email' 
                name ='email'
                onChange={props.handleChange}
                value={props.values.email}
                onBlur = {props.handleBlur}
                />
                {props.touched.email && props.errors.email && <span className="text-red-400">{props.errors.email}</span>}
            </div>

            <div className="w-full">
                <label htmlFor="form-control">Mot de passe * </label>
                <input type='password' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md" id='password' 
                name ='password'
                onChange={props.handleChange}
                value={props.values.password}
                onBlur = {props.handleBlur}
                />
                {props.touched.password && props.errors.password && <span className="text-red-400">{props.errors.password}</span>}
            </div>

            <div className="w-full">
                <label htmlFor="form-control">Confirmez votre mot de passe * </label>
                <input type='password' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md" id='passwordConfirmation' 
                name ='passwordConfirmation'
                onChange={props.handleChange}
                value={props.values.passwordConfirmation}
                onBlur = {props.handleBlur}
                />
                {props.touched.passwordConfirmation && props.errors.passwordConfirmation && <span className="text-red-400">{props.errors.passwordConfirmation}</span>}
            </div>

            <PasswordConditions />

            <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-3">
                <span>* Champs obligatoires</span>
                <button type='submit' onClick={props.handleSubmit} className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[90px] sm:h-[35px] flex justify-center items-center bg-slate-800 p-1 rounded-md text-white font-medium">suivant</button>
            </div>
        </form>  
    )      
};

export default withFormik({
    mapPropsToValues : () => ({
        email: "",
        password: "", 
        passwordConfirmation : ""
    }),
    validationSchema : Yup.object().shape({
        email: Yup.string()
        .email("L'email n'a pas le bon format'")
        .required("L'email est obligatoire"),
        password: Yup.string()
        .min(8, "Le mot de passe doit comporter 8 caractères")
        .matches(/[A-Z]/, "Le mot de passe doit comporter au moins une majuscule")
        .matches(/[a-z]/, "Le mot de passe doit comporter au moins une minuscule")
        .matches(/[0-9]/, "Le mot de passe doit comporter au moins un chiffre")
        .matches(/[@!&]/, "Le mot de passe doit comporter au moins un caractère spécial (@,!,&)")
        .required('Le mot de passe est obligatoire'),
        passwordConfirmation : Yup.string()
        .oneOf([Yup.ref('password')],"Le mot de passe n'est pas identique")
        .required("Vous devez confirmer votre mot de passe"),
    }),
    handleSubmit : (values, {props}) => {
        const AccountIdentifiers = {
            email : values.email,
            password : values.password,
            passwordConfirmation : values.passwordConfirmation
        }
        props.submit(AccountIdentifiers);
    }
})(AccountIdentifiersForm);