import axios from "axios";
const hostname = 'http://localhost:9000';


const validCart = (user_id, value) => {
    const cart = {
        user_id: user_id,
        products: value
    }
    axios.post(`${hostname}/order/new`, cart)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

const paymentService = {
    validCart
}

export default paymentService;