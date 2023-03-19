import axios from "axios";
const hostname = 'http://localhost:9000';

export const validCart = (user_id, value, navigate) => {
    const cart = {
        user_id: user_id,
        products: value
    }

    axios.post(`${hostname}/order/new`, cart)
        .then(response => {
            console.log(response);
            navigate('/checkout', { state: { amount: response.data.amount, client_secret: response.data.client_secret } });
        })
        .catch(error => console.log(error));
}

const paymentService = {
    validCart
}

export default paymentService;