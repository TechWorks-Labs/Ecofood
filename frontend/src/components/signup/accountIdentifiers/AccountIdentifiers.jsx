import { Component } from 'react'
import AccountIdentifiersForm from './AccountIdentifiersForm';
import account from '/src/assets/images/account/account.svg';
import PasswordConditions from "./PasswordCondition";
import { useContext } from "react";
import { myFormContext } from "../../../containers/signUpPage/SignUpPage";

export default function AccountIdentifiers(props){
    const{ setAccountIdentifiers, setPage, setUserAccount } = useContext(myFormContext);

    const handleAccountIdentifiersSubmit = (value) => {
        setUserAccount({
        ...setUserAccount, 
        email: value.email,
        password: value.password
        });
        setPage("userInformations");
    }
        return (
            <div className="max-w-xl min-w-[300px] mt-[80px] mx-auto p-8 flex flex-col gap-y-5 justify-center items-center p-10"> 
              <div className='w-full text-center sm:text-start'>
                <h2 className='text-2xl sm:text-3xl font-black mb-5 underline underline-offset-4'>Créer mon compte</h2>
              </div>
                <div className='flex flex-row justify-between h-[180px]'>

                    <div className='w-[180px] flex justify-center items-center'>
                        <img src={account} className='w-full'/>
                    </div>

                     <div className='hidden sm:inline-flex w-1/2 flex flex-col justify-around'>
                        <h2 className='font-bold text-xl'>Mes identifiants</h2>
                        <div>
                            <p>Créez votre compte en moins de 2 minutes !</p>
                            <p>Commencez par choisir vos informations de connexion.</p>
                        </div>
                     </div>

                </div>
                
                <AccountIdentifiersForm submit={handleAccountIdentifiersSubmit}/>
            </div>
        )
     }
