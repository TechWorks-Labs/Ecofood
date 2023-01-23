import Header from '../../components/header/Header';
import SignInForm from '../../components/signin/SignInForm';
import Footer from '../../components/footer/footer';
import { useState, useEffect } from 'react';
import { object } from 'yup';
import axios from 'axios';
import authService from '../../services/auth.service';
import jwt_decode from "jwt-decode";
import { myUserContext } from '../../context/MyUserContextProvider';
import { useContext } from 'react';

export default function SignInPage (){
const {user, setUser} = useContext(myUserContext);

const [token, setToken] = useState();

const signIn = {

}
    const [login, setLogin] = useState(signIn);


    // const decodeTokenForSendUserContext = (token) => {
    //     console.log(token);
    //     tokenSendToLocalStorage(token.data);
    //     const decodeToken = jwt_decode(token.data);

    // }

    const handleLoginForm = (values) => {
        setLogin({
            ...login, 
            email : values.email,
            password : values.password,
         });
         authService.login(login);
    }


    useEffect(()=>{
        setUser(authService.getUser);
    },[login, token])

    return(
            <>
                <Header />
                { user ? <div>Utilisateur connecté</div> 
                :
                <SignInForm submit={handleLoginForm} />
                }
                <Footer css="absolute bottom-0" />
            </>
    )
}