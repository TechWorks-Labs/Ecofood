import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import CheckoutForm from '../../../components/checkout/checkoutForm';

// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MbrU0IPtrTy84mI2qsmkNWQFu7vNxckq5SpWyM7176iu2UCKsGRmf8cSA3BODai54Q747gsoPAkQEmI7HDwZhIP000HspM04k');

export default function Checkout() {
  const location = useLocation();
  const payment = location.state;

  const options = {
    // passing the client secret obtained from the server
    clientSecret: payment.client_secret,
  };
  console.log(options);


  return (
    <div className='flex flex-col gap-y-5 max-w-3xl mx-auto mt-[100px] border border-1 border-slate-200 p-8 shadow-lg'>
      <h1 className='font-bold text-2xl underline underline-offset-1'>Moyen de paiement :</h1>
      <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
      </Elements>
    </div>
  );
};