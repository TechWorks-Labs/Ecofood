import Header from '../../components/header/Header';
import SignInForm from '../../components/signin/SignInForm';
import Footer from '../../components/footer/footer';
import { useState, useEffect } from 'react';
import { object } from 'yup';
import axios from 'axios';
import authService from '../../services/auth.service';
import jwt_decode from "jwt-decode";
import { userContext } from '../../context/UserProvider';
import { useContext } from 'react';

export default function SignInPage (){
    
const {user, setUser, getUserDatas, localStorageSetEncryptAESItem} = useContext(userContext);

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
            id_user : tokenDecoded.id_user,
            email : tokenDecoded.email,
            exp : tokenDecoded.exp,
            valid : true,
          });
          localStorageSetEncryptAESItem('user', user);
          getUserDatas(tokenDecoded.email);
        } else {
            console.log('le token n\'existe pas');
        }
    }

    useEffect(()=>{
        setUserIsTokenAuth();
    },[])

    return(
            <>
                {user.valid ?
                <div>
                    <span>{user.email}</span> 
                    <span>{user.lastname}</span> 
                    <span>{user.exp}</span> 
                </div>
                 :
                 <SignInForm submit={handleLoginForm} />}
               
                <Footer css="absolute bottom-0" />
            </>
    )
}