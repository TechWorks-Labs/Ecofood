import React, { createContext } from 'react';
import { useState } from 'react';
import authService from '../services/auth.service';
import { useEffect } from 'react';
import MyContextProvider from './MyApiContextProvider';
import jwt_decode from "jwt-decode";

export const myUserContext = createContext();

function MyUserContextProvider(props) {

    const [user, setUser] = useState({
        id_user : "",
        email : "",
        exp : "",
        name : "",
        valid : false,
    });

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
          lastname : tokenDecoded.lastname,
          valid : tokenDecoded.valid,
        });
      } else {
          console.log('le token n\'existe pas');
      }
  }

  useEffect(()=>{
      setUserIsTokenAuth();
      console.log(user.lastname);   
  },[])

      return (
        <myUserContext.Provider value={{user, setUser}}>
          <MyContextProvider>
            {props.children}  
          </MyContextProvider>
        </myUserContext.Provider>
      );
    }
  
  
  export default MyUserContextProvider;