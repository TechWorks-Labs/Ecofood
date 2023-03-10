import React, { createContext } from 'react';
import { useState } from 'react';
import authService from '../services/auth.service';
import { useEffect } from 'react';
import MyContextProvider from './MyApiContextProvider';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { AES } from 'crypto-js';
import CryptoJS from 'crypto-js';
import update from '../services/update.account';

export const myUserContext = createContext();

function MyUserContextProvider(props) {

  const hostname = 'http://localhost:9000';
  const [profil, setProfil] = useState({
    // civility: "",
    // name: "",
    // lastname: "",
    // day: "",
    // month: "",
    // year: "",
    // email: "",
    // emaiConfirmation: "",
    // password: "",
    // passwordConfirmation: ""
  });

  const [user, setUser] = useState({
    id_user: "",
    email: "",
    exp: "",
    name: "",
    valid: false,
  });


  const setUserIsTokenAuth = () => {
    authService.validateTokenSignature();

    if (authService.TokenUserIsExist()) {
      const token = authService.getTokenInSessionStorage();
      const tokenDecoded = jwt_decode(token);
      setUser({
        ...user,
        id_user: tokenDecoded.id_user,
        email: tokenDecoded.email,
        exp: tokenDecoded.exp,
        lastname: tokenDecoded.lastname,
        valid: tokenDecoded.valid,
      });
    } else {
      console.log('le token n\'existe pas');
    }
  }

  const getUserDatas = (email) => {
    axios.get(`${hostname}/account/profil/${email}`)
      .then(response => {
        const profil = response.data[0];
        localStorageSetEncryptAESItem('profil', profil);
      })
      .catch(error => { console.log(error) });
  }
  
  const localStorageSetEncryptAESItem = ( key, value ) => {
    const hasEncrypt = JSON.stringify(value);
    console.log(hasEncrypt);
    const secretKey = (import.meta.env.VITE_REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY);
    const encrypt = AES.encrypt(hasEncrypt, secretKey).toString();
    localStorage.setItem(key, encrypt);
  }

  const localStorageGetEncryptAESItem = (key) => {
    const toDecrypt = localStorage.getItem(key);
    if (toDecrypt){
      const bytes = AES.decrypt(toDecrypt, import.meta.env.VITE_REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY);
      const decrypt = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decrypt;
    }
  }

  useEffect(() => {
    // setUser(localStorageGetEncryptAESItem('user'));
    // setProfil(localStorageGetEncryptAESItem('profil'));
  }, []);

  useEffect(() => {
    setUserIsTokenAuth();
  }, [])

  return (
    <myUserContext.Provider value={{ user, setUser, profil, setProfil, getUserDatas, setUserIsTokenAuth, localStorageSetEncryptAESItem}}>
      <MyContextProvider>
        {props.children}
      </MyContextProvider>
    </myUserContext.Provider>
  );
}


export default MyUserContextProvider;