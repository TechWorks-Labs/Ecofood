import {withFormik} from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
function SignInForm (props){
    return(
        <div className="max-w-xl min-w-[300px] mx-auto bg-gradient-to-r from-slate-800 to-cyan-900 mt-[100px] rounded-lg p-8 shadow-lg ">
            <form className="flex flex-col w-full h-[350px] justify-around">
                <span className="font-bold text-3xl text-center mb-5 text-white">Sign in</span>
                <label className="text-white font-semibold text-xl mb-2 underline underline-offset-4">Email : </label>
                <input type="text" placeholder="email" className="h-[45px] rounded-lg p-2" 
                name='email'
                onChange={props.handleChange}
                value={props.values.email}
                onBlur={props.handleBlur}
                />
                {props.touched.email && props.errors.email && <span className="text-white">{props.errors.email}</span>}
                <label className="text-white font-semibold text-xl mb-2 underline underline-offset-4">password : </label>
                <input type='password' placeholder="password" className="h-[45px] rounded-lg p-2" 
                name='password'
                onChange={props.handleChange}
                value={props.values.password}
                onBlur={props.handleBlur}
                />
                 {props.touched.password && props.errors.password && <span className="text-white">{props.errors.password}</span>}
                 <div className="flex flex-row justify-between">
                 <Link to ="/mon-compte/creer-mon-compte">
                    <span className="text-white">Vous n'avez pas encore de compte ?</span>
                 </Link>
                    <button type="submit" onClick={props.handleSubmit} className="text-slate-800 font-bold bg-white w-[80px] rounded-lg h-[35px] self-end">Log in</button>
                 </div>
            </form>
        </div>
    )
}

export default withFormik({
    mapPropsToValues : () => ({
        email: "",
        password: ""
    }),
    validationSchema : Yup.object().shape({
        email: Yup.string()
        .email('email invalide')
        .required('L\'email est obligatoire'),
        password: Yup.string()
        .required('Le mot de passe est obligatoire'),
    }),
    handleSubmit : (values,{props}) => {
        const signInForm = {
            email : values.email,
            password : values.password,
        }
        props.submit(signInForm);
    }
})(SignInForm);