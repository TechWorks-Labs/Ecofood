import Header from '../../components/header/Header';
import SignInForm from '../../components/signin/SignInForm';
import Footer from '../../components/footer/footer';
import { useState, useEffect } from 'react';
import { object } from 'yup';
import axios from 'axios';

export default function SignInPage (){
const signIn = {

}
    const [login, setLogin] = useState(signIn);

    const handleLoginForm = (values) => {
        setLogin({
            ...login, 
            email : values.email,
            password : values.password,
         });
    }

    const postLogintoBackend = (login) => {
        if(Object.keys(login).length !== 0){
            axios.post("http://localhost:9000/account/loginAuthentification",login)
            .then(response => {
                console.log(response)
            })
            .catch(error=>{console.log(error)})
        }
    }



    useEffect(()=>{
        postLogintoBackend(login);
    },[login])

    return(
            <>
                <Header />
                <SignInForm submit={handleLoginForm} />
                <Footer css="absolute bottom-0" />
            </>
    )
}