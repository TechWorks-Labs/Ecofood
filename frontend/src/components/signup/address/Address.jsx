import {withFormik} from "formik";
import * as Yup from 'yup';

function Address(props){
return(
         <div className="max-w-xl min-w-[300px] mt-[80px] mx-auto p-8 flex flex-col gap-y-5 justify-center items-center p-10"> 
            <h2 className='text-2xl sm:text-3xl font-black mb-5 underline underline-offset-4'>Coordonnées</h2>
            <form className="w-full flex flex-col justify-center gap-y-2">

                <label htmlFor="form-control">Adresse * </label>
                <input type='text' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md" 
                name = 'address'
                onChange = {props.handleChange}
                value = {props.values.address}
                onBlur = {props.handleBlur} 
                />
               
                <label htmlFor="form-control">Complément d'adresse * </label>
                <input type='text' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md" 
                name = 'addressField'
                onChange = {props.handleChange}
                value = {props.values.addressField}
                onBlur = {props.handleBlur} 
                />
                
                <label htmlFor="form-control">Code postal * </label>
                <input type='number' className="mt-3 border border-1 border-slate-300 w-[200px] h-[35px] rounded-md" 
                name = 'postal'
                onChange = {props.handleChange}
                value = {props.values.postal}
                onBlur = {props.handleBlur} 
                />
              
                <label htmlFor="form-control">Ville * </label>
                <input type='text' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md" 
                name = 'city'
                onChange = {props.handleChange}
                value = {props.values.city}
                onBlur = {props.handleBlur} 
                />
               
                <label htmlFor="form-control">Pays * </label>
                <input type='text' className="mt-3 border border-1 border-slate-300 w-full h-[35px] rounded-md" 
                name = 'state'
                onChange = {props.handleChange}
                value = {props.values.state}
                onBlur = {props.handleBlur} 
                />
                
                <div className="w-full flex flex-row justify-between items-center p-3">
                    <span>* Champs obligatoires</span>
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <button className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[90px] sm:h-[35px] flex justify-center items-center bg-white p-1 rounded-md text-black font-medium">Retour</button>
                        <button type='submit' onClick={props.handleSubmit} className="w-full h-[45px] mt-3 sm:mt-0 sm:w-[90px] sm:h-[35px] flex justify-center items-center bg-slate-800 p-1 rounded-md text-white font-medium">Suivant</button>
                    </div>
                 </div>   
             </form>  
        </div>
    )
}

export default withFormik({
    mapPropsToValues : () => ({
        address : "",
        addressField : "",
        postal : "",
        city  : "",
        state : ""
    }),
    validationSchema : Yup.object().shape({
        address : Yup.string()
        .required("L'adresse est obligatoire"),
        postal : Yup.string()
        .min(5,"Vous devez mettre 5 chiffres pour le code postal")
        .max(5,"Vous devez mettre 5 chiffres pour le code postal")
        .required("Le code postal est obligatoire"),
        city : Yup.string()
        .required("La ville est obligatoire"),
        state : Yup.string()
        .required("Le pays est obligatoire"),

        
    }),
    handleSubmit : (values,{props}) => {
        const userAddress = {
            address : values.address,
            addressField : values.addressField,
            postal : values.postal,
            city : values.city, 
            state : values.state
        }
        props.submit(userAddress);
    }
})(Address);