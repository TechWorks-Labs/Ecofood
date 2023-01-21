import { Component } from 'react'
import axios from 'axios';
import HeaderSignUp from '../../components/signup/header/HeaderSignup';
import AccountIdentifiers from '../../components/signup/accountIdentifiers/AccountIdentifiers';
import UserInformation from '../../components/signup/userInformations/UserInformations';
import Address from '../../components/signup/address/Address';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
export const myFormContext = createContext();

export default function SignUpPage() {

    const user = {
        email : "",
        password : "", 
        civility : "", 
        name : "",
        lastname : "",
        birth_day : "",
        birth_month : "", 
        birth_year : "",
        address : "", 
        addressField : "", 
        postal_code : "", 
        city : "",
        state : ""
    }

    const [page, setPage] = useState("signupPage");
    const [userAccount, setUserAccount] = useState(user);

    useEffect(()=>{
        sendUserRegisteringToBdd(userAccount);
    },[userAccount])

    const handleUserInformationsSubmit = (value) => {
        setUserAccount({
            ...userAccount, 
            civility : value.civility, 
            name : value.name,
            lastname : value.lastname,
            birth_day : value.day,
            birth_month : value.month, 
            birth_year : value.year,
            });
        setPage("address");
    }

    const handleAddressSubmit = (value) => {
        setUserAccount({
            ...userAccount, 
            address : value.address, 
            addressField : value.addressField, 
            postal_code : value.postal, 
            city : value.city,
            state : value.state
            });
    };

    const sendUserRegisteringToBdd = (value) => {
        if(value.postal_code !== "" && value.postal_code !== undefined){
            axios.post("http://localhost:9000/account/sendUserIdentifiers", value)
                .then(reponse => {
                console.log(reponse)
            })
                .catch(error => {console.log(error)
            })
        }
    }

        return (
            <myFormContext.Provider  value={{page, setPage, setUserAccount}}> 
                <span>{userAccount.lastname}</span>
                <span>{userAccount.civility}</span>
                <span>{userAccount.state}</span>
                <HeaderSignUp step={page} />
                {page === 'signupPage' && <AccountIdentifiers />}
                {page === 'userInformations' && <UserInformation submit={handleUserInformationsSubmit} />}
                {page === 'address' && <Address submit={handleAddressSubmit} />}
            </myFormContext.Provider> 
        )
}
