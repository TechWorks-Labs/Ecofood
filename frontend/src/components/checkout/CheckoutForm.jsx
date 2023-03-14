import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return (
      <form>
        <PaymentElement />
        <button className=''>Payer</button>
      </form>
  );
};

export default CheckoutForm;