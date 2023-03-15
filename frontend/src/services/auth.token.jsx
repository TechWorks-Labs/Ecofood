import axios from "axios";
import { Navigate } from 'react-router-dom';
// const hostname = 'https://ecofood.techworks.fr/api';
const hostname = 'http://localhost:9000';

const login = async (credentials) => {
    try {
        if (!Boolean(credentials)) {
            throw new Error("Credentials not provided");
        }
        const token = await axios.post(`${hostname}/account/login`, credentials);
        if (token.data === "Invalid password") {
            throw new Error("Invalid password");
        }
        sessionStorage.setItem("userToken", token.data);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};


const logout = (navigate) => {
    sessionStorage.removeItem("userToken");
}

const signup = (value) => {
    if (value.postal_code !== "" && value.postal_code !== undefined) {
        axios.post(`${hostname}/account/register`, value)
            .then(reponse => {
                console.log(reponse)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const TokenUserIsExist = () => {
    if (Boolean(sessionStorage.getItem("userToken"))) {
        return true;
    }
    return false;
}

export const RequireAuth = ({ children }) => {
    if (TokenUserIsExist()) {
      return children;
    } else {
      return <Navigate to="/signin" replace />
    }
  };
  

const getTokenInSessionStorage = () => {
    return sessionStorage.getItem("userToken");
}

const extendJwtExpiration = async (navigate) => {
    const token = getTokenInSessionStorage();
    return axios.post(`${hostname}/account/token/expiration`, { user: token })
        .then(response => {
            sessionStorage.clear();
            sessionStorage.setItem("userToken", response.data);
        })
        .catch(error => {
            navigate('/');
            if (error.response.status == 400) {
                sessionStorage.clear();
            }
        });
}

const token = {
    login,
    signup,
    getTokenInSessionStorage,
    extendJwtExpiration,
    TokenUserIsExist,
    logout,
    RequireAuth
};

export default token;