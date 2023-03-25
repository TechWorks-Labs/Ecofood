import React, { useState, useEffect } from 'react';
import PaymentStatus from '../../../services/payments.status';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import animationData from './../../../assets/animated/36107-validation.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const stripePromise = loadStripe('pk_test_51MbrU0IPtrTy84mI2qsmkNWQFu7vNxckq5SpWyM7176iu2UCKsGRmf8cSA3BODai54Q747gsoPAkQEmI7HDwZhIP000HspM04k');

export default function PaymentPage() {

  return (
    <div className='max-w-3xl shadow-xl mx-auto mt-[50px] h-[250px] flex items-center justify-center border border-1 border-slate-200'>
      <Elements stripe={stripePromise}>
          <PaymentStatus />          
      </Elements>
    </div>
  )
}

