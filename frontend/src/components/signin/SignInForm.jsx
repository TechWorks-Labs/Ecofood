import {withFormik} from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { useRef } from "react";

function SignInForm (props){

    const emailLabelRef = useRef();
    const passwordRef = useRef();

    const handleInputEmail = () => {
        emailLabelRef.current.style.transform = "translateY(-30px)";
    }
    const handleInputPassword = () => {
        passwordRef.current.style.transform = "translateY(-30px)";
    }

    return(
        <div className="max-w-2xl w-full min-w-[300px] mx-auto my-auto flex flex-col relative">
            <form className=" rounded-2xl w-full p-8 shadow-lg bg-gradient-to-r from-slate-800 to-cyan-900  flex flex-col gap-y-[65px] justify-around">
                <span className="font-bold text-3xl text-center mb-5 text-white">Sign in</span>
                <div className="flex flex-col relative">
                    <label ref={emailLabelRef} htmlFor='email' className=" absolute bottom-0 transition-all duration-1000 ease-in-out text-white font-medium text-xl mb-2 pointer-events-none">Email</label>
                    <input onClick={handleInputEmail} type="text" placeholder="" className="caret-transparent text-cyan-800 font-bold  tracking-widesth-[45px] rounded-lg p-2 bg-transparent outline-none cursor-pointer" 
                    name='email'
                    onChange={props.handleChange}
                    value={props.values.email}
                    onBlur={props.handleBlur}
                    />
                    <div className="w-full h-[2px] bg-white"></div>
                </div>

                {props.touched.email && props.errors.email && <span className="text-white">{props.errors.email}</span>}
                <div className="flex flex-col relative">
                    <label ref={passwordRef} htmlFor="password" className=" absolute bottom-0 transition-all duration-1000 ease-in-out text-white font-medium text-xl mb-2 pointer-events-none">password</label>
                    <input onClick={handleInputPassword} type='password' className="caret-transparent text-cyan-800 h-[45px] rounded-lg p-2 bg-transparent outline-none cursor-pointer" 
                    name='password'
                    onChange={props.handleChange}
                    value={props.values.password}
                    onBlur={props.handleBlur}
                    />
                    <div className="w-full h-[2px] bg-white"></div>
                </div>

                 {props.touched.password && props.errors.password && <span className="text-white">{props.errors.password}</span>}
                 <div className="flex flex-col gap-y-5 justify-center items-center sm:flex sm:flex-row sm:justify-between sm:gap-y-0">
                 <Link to ="/mon-compte/creer-mon-compte">
                    <span className="text-white">Vous n'avez pas encore de compte ?</span>
                 </Link>
                    <button type="submit" onClick={props.handleSubmit} className="text-slate-800 font-bold bg-white w-[80px] rounded-lg h-[35px] sm:self-end">Log in</button>
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