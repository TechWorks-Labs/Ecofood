import React, { createContext } from 'react';
import { useState } from 'react';
import authService from '../services/auth.service';
import { useEffect } from 'react';
import MyContextProvider from './MyApiContextProvider';
import jwt_decode from "jwt-decode";
import axios from 'axios';

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
        setProfil({
          ...profil,
          civility: response.data[0].civility,
          name: response.data[0].name,
          lastname: response.data[0].lastname,
          day: response.data[0].birth_day,
          month: response.data[0].birth_month,
          year: response.data[0].birth_year,
          email: response.data[0].email
        })
        console.log(response)
      })
      .catch(error => { console.log(error) });
  }

  useEffect(() => {
    setUserIsTokenAuth();
  }, [])

  return (
    <myUserContext.Provider value={{ user, setUser, profil, setProfil, getUserDatas }}>
      <MyContextProvider>
        {props.children}
      </MyContextProvider>
    </myUserContext.Provider>
  );
}


export default MyUserContextProvider;