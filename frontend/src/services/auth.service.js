import axios from "axios";
import jwt_decode from "jwt-decode";

const login = (value) => {
    if(Object.keys(value).length !== 0){
        axios.post("http://localhost:9000/account/loginAuthentification",value)
        .then(token => {
            if(Boolean(token.data)){
                sessionStorage.setItem("user",token.data)
                window.location.reload();
            }
            
        })
        .catch(error=>{console.log(error)})
    }
}

// const logout = () => {
//     localStorage.removeItem("user");
// }

const signup = (value) => {
    if(value.postal_code !== "" && value.postal_code !== undefined){
        axios.post("http://localhost:9000/account/sendUserIdentifiers", value)
            .then(reponse => {
            console.log(reponse)
        })
            .catch(error => {console.log(error)
        })
    }
}

// const getUserTokenDecode = () => {
//     if(Boolean(localStorage.getItem("user"))){
//         const user = localStorage.getItem("user");
//         const decode = jwt_decode(user);
//         return decode;
//     }
// }


const TokenUserIsExist = () => {
    if(Boolean(sessionStorage.getItem("user"))){
       return true;
    }
    return false;
}

const getTokenInSessionStorage = () => {
    return sessionStorage.getItem("user");
}

const validateTokenSignature = async() => {
    const token = getTokenInSessionStorage();
    if(Boolean(token)){
        return axios.post("http://localhost:9000/account/validateTokenSignature", {user: token})
        .then(response => {
            //delete old session token;
            sessionStorage.clear();
            sessionStorage.setItem("user", response.data);
        })
        .catch(error => {
            if(error.response.status == 400){
                sessionStorage.clear();
            }
        });          
    }
    return false;
}

const authService = {
    login,
    signup,
    getTokenInSessionStorage,
    validateTokenSignature,
    TokenUserIsExist
  };

export default authService;