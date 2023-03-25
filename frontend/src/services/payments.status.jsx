import React, { useState, useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import valid from './../assets/animated/36107-validation.json';
import invalid from './../assets/animated/91846-invalid.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ButtonCustom from '../components/button/ButtonCustom';
import { useContext } from 'react';
import { cartContext } from '../context/CartProvider';

const PaymentStatus = () => {
  const { setShoppingList } = useContext(cartContext);
  const stripe = useStripe();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // Retrieve the PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case 'succeeded':
            setMessage('Succès ! Paiement reçu.');
            break;

          case 'processing':
            setMessage("Paiement en cours de traitement. Nous vous informerons dès que le paiement sera reçu.");
            break;

          case 'requires_payment_method':
            // Redirigez votre utilisateur vers votre page de paiement pour tenter de collecter
            // le paiement à nouveau
            setMessage('Échec du paiement. Veuillez essayer une autre méthode de paiement.');
            break;

          default:
            setMessage('Quelque chose s\'est mal passé.');
            break;
        }

      });
  }, [stripe]);

  useEffect(() => {
    if (message === 'Succès ! Paiement reçu.') {
      setShoppingList({ priceCart: 0, numberProducts: 0, products: [] });
    }
  }, [message])

  return (
    <>
      {message && (
        message === 'Succès ! Paiement reçu.' ? (
          <div className='flex flex-col items-center justify-center gap-y-3'>
            <Player
              autoplay
              speed={1}
              loop={false}
              keepLastFrame
              src={valid}
              style={{ width: "80px" }}
            >
            </Player>
            <span className='font-bold text-xl'>{message}</span>
            <ButtonCustom title='retourner à la boutique' link={'/boutique'} />
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <Player
              autoplay
              speed={1}
              loop={false}
              keepLastFrame
              src={invalid}
              style={{ width: "80px" }}
            >
            </Player>
            <span className='font-bold text-xl'>{message}</span>
            <ButtonCustom title='retourner à la boutique' link={'/boutique'} />
          </div>
        )
      )}
    </>
  );
}

export default PaymentStatus;