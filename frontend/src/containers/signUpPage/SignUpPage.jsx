import { Component } from 'react'
import HeaderSignUp from '../../components/signup/header/HeaderSignup';
import AccountIdentifiers from '../../components/signup/accountIdentifiers/AccountIdentifiers';
import UserInformation from '../../components/signup/userInformations/UserInformations';
import { createContext } from 'react';
import { useState } from 'react';
export const myFormContext = createContext();

export default function SignUpPage() {
    const [page, setPage] = useState("signupPage");
    const [accountIdentifiers, setAccountIdentifiers] = useState([]);
    const [userInformations, setUserInformations] = useState([]);

    const handleUserInformationsSubmit = (value) => {
        setUserInformations(value);
        setPage("address");
    }

        return (
            <myFormContext.Provider  value={{page, setPage, setAccountIdentifiers, setUserInformations}}> 
                <HeaderSignUp step={page} />
                <span>{userInformations.name}</span>
                {page === 'signupPage' && <AccountIdentifiers />}
                {page === 'userInformations' && <UserInformation submit={handleUserInformationsSubmit}/>}
            </myFormContext.Provider> 
        )
}
