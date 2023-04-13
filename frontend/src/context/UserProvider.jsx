import React, { createContext } from 'react';
import { useState } from 'react';
import authService from '../services/auth.token';
import { useEffect } from 'react';
import ProductsProvider from './ProductsProvider';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AESEncrypt from '../services/AESEncrypt';

export const userContext = createContext();

function UserProvider(props) {
  const navigate = useNavigate();
  const hostname = 'http://localhost:9000';
  const [userDatas, setUserDatas] = useState({});
  const [userToken, setUserToken] = useState({});

  const userTokenJWTUpdate = async () => {
    if (authService.TokenUserIsExist()) {
      await authService.extendJwtExpiration(navigate);
      const token = authService.getTokenInSessionStorage();
      updateUserStateFromToken(token);
    } else {
      //toast mauvais identifiants
    }
  }

  const setUserFromLoginToken = () => {
    const token = authService.getTokenInSessionStorage();
    updateUserStateFromToken(token);
  }

  const updateUserStateFromToken = (token) => {
    const tokenDecoded = decodeToken(token);
    setUserToken({
      ...userToken,
      id_user: tokenDecoded.id_user,
      email: tokenDecoded.email,
      exp: tokenDecoded.exp,
      lastname: tokenDecoded.lastname,
      valid: tokenDecoded.valid,
    });
  }

  const decodeToken = (token) => {
    const tokenDecoded = jwt_decode(token);
    return tokenDecoded;
  }

  
  const getUserOrdersByUserId = async (user_id) => {
    if(user_id != undefined){
      await axios.get(`${hostname}/order/${user_id}`)
      .then(response => {
        localStorage.setItem('ordersUser', JSON.stringify(response.data))
      })
      .catch(error => console.log('error userOrders'));
    }
  }

  // update state userDatas 
  const UpdateUserDatas = (email) => {
    if (Boolean(email)) {
      axios.get(`${hostname}/account/userDatas/${email}`)
        .then(response => {
          const userDatas = response.data[0];
          // set userDatas storage
          AESEncrypt.localStorageSetEncryptAESItem('userDatas', userDatas);
          // set userDatas in useState
          setUserDatasFromLocalStorage('userDatas');
        })
        .catch(error => { console.error(error) });
    }
  }



  // is userDatas storage is not empty
  const IsUserDatasLocalStorageNotEmpty = (key) => {
    const storage = AESEncrypt.localStorageGetEncryptAESItem(key);
    if (storage !== undefined) {
      return true;
    }
    return false;
  }

  // set userDatas from localStorage
  const setUserDatasFromLocalStorage = (key) => {
    if (IsUserDatasLocalStorageNotEmpty(key)) {
      setUserDatas(AESEncrypt.localStorageGetEncryptAESItem('userDatas'));
    }
  }

  


  useEffect(() => {
    // update userDatas
    UpdateUserDatas(userToken.email);
    getUserOrdersByUserId(userToken.id_user);
  }, [userToken]);

  useEffect(() => {
    // update token JWT
    userTokenJWTUpdate();
  }, [])

  return (
    <userContext.Provider value={{ userToken, setUserToken, userDatas, setUserDatas, UpdateUserDatas, setUserFromLoginToken }}>
      <ProductsProvider>
        {props.children}
      </ProductsProvider>
    </userContext.Provider>
  );
}


export default UserProvider;