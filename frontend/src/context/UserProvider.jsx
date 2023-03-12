import React, { createContext } from 'react';
import { useState } from 'react';
import authService from '../services/auth.service';
import { useEffect } from 'react';
import ProductsProvider from './ProductsProvider';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { AES } from 'crypto-js';
import CryptoJS from 'crypto-js';

export const userContext = createContext();

function UserProvider(props) {

  const hostname = 'http://localhost:9000';
  const [profil, setProfil] = useState({});

  const [user, setUser] = useState({});


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

  const IsNotEmpty = (key) => {
    const storage = localStorageGetEncryptAESItem(key);
    if (storage !== undefined){
      return true;
    }
    return false;
  }

  const getUserLocalStorageInUseState = (key) => {
    if(IsNotEmpty(key)){
      setUser(localStorageGetEncryptAESItem('user'));
    }
  }
  const getProfilLocalStorageInUseState = (key) => {
    if(IsNotEmpty(key)){
      setProfil(localStorageGetEncryptAESItem('profil'));
    }
  }

  useEffect(() => {
    getUserLocalStorageInUseState('user');
    getProfilLocalStorageInUseState('profil');
  }, []);

  useEffect(() => {
    setUserIsTokenAuth();
  }, [])

  return (
    <userContext.Provider value={{ user, setUser, profil, setProfil, getUserDatas, setUserIsTokenAuth, localStorageSetEncryptAESItem}}>
      <ProductsProvider>
        {props.children}
      </ProductsProvider>
    </userContext.Provider>
  );
}


export default UserProvider;