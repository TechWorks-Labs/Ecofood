import React, { createContext } from 'react';
import { useState } from 'react';

export const myUserContext = createContext();

function MyUserContextProvider(props) {

    const [user, setUser] = useState({
        id_user : "",
        email : "",
        exp : ""
    });

      return (
        <myUserContext.Provider value={{user, setUser}}>
          {props.children}
        </myUserContext.Provider>
      );
    }
  
  
  export default MyUserContextProvider;