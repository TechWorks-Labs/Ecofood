import axios from "axios";
import jwt_decode from "jwt-decode";

const login = (value) => {
    if(Object.keys(value).length !== 0){
        axios.post("http://localhost:9000/account/loginAuthentification",value)
        .then(token => {
            if(Boolean(token.data)){
                localStorage.setItem("user",token.data)
                window.location.reload();
            }
            
        })
        .catch(error=>{console.log(error)})
    }
}

const logout = () => {
    localStorage.removeItem("user");
}

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

const getUser = () => {
    if(Boolean(localStorage.getItem("user"))){
        const user = localStorage.getItem("user");
        const decode = jwt_decode(user);
        return decode;
    }
}

const authService = {
    login,
    signup,
    getUser
  };

export default authService;