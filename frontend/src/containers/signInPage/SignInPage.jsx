import Header from '../../components/header/Header';
import SignInForm from '../../components/signin/SignInForm';
import Footer from '../../components/footer/footer';
import { useState, useEffect } from 'react';
import { object } from 'yup';
import axios from 'axios';
import auth from '../../services/auth.token';
import jwt_decode from "jwt-decode";
import { userContext } from '../../context/UserProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
    const navigate = useNavigate();
    const { userToken, setUserFromLoginToken } = useContext(userContext);

    const handleLoginForm = async(credentials) => {
        if (await auth.login(credentials)){
            setUserFromLoginToken();
            navigate('/');
        } else {
            console.log("connexion échouée")
        }
    }

    return (
        <div className='w-full h-screen'>
            <SignInForm submit={handleLoginForm} />
        </div>
    )
}