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

    const handleLoginForm = (values) => {
         authService.login(values);
    }

    const setUserIsTokenAuth = () => {
        authService.validateTokenSignature();
        
        if(authService.TokenUserIsExist()){  
          const token = authService.getTokenInSessionStorage();
          const tokenDecoded = jwt_decode(token);
          
          setUser({
            ...user,
            id_user : token.id_user,
            email : token.email,
            exp : token.exp,
            valid : true,
          });
        } else {
            console.log('le token n\'existe pas');
        }
    }

    useEffect(()=>{
        // setUserIsTokenAuth();

    },[])

    return(
            <>
                <Header />
                {user.valid ?
                 <span>{user.email}</span> 
                 :
                 <SignInForm submit={handleLoginForm} />}
               
                <Footer css="absolute bottom-0" />
            </>
    )
}