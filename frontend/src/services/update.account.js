import axios from "axios";

const hostname = 'http://localhost:9000';

const profil = (value) => {
    axios.post(`${hostname}/account/profil`, value)
    .then(response => console.log(response))
    .catch(error => console.log(error));    
} 

const address = (value) => {
    axios.post(`${hostname}/account/address`, value)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

const update = {
    profil,
    address
}
export default update;