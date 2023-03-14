import axios from "axios";

const hostname = 'http://localhost:9000';

const userDatas = (value) => {
    axios.post(`${hostname}/account/userDatas`, value)
    .then(response => console.log(response))
    .catch(error => console.log(error));    
} 

const address = (value) => {
    axios.post(`${hostname}/account/address`, value)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

const update = {
    userDatas,
    address
}
export default update;