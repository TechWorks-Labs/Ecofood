import axios from "axios";

const hostname = 'http://localhost:9000';

const profil = (value) => {
    axios.post(`${hostname}/account/update/profil`, value)
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)});    
} 

const update = {
    profil,
}
export default update;