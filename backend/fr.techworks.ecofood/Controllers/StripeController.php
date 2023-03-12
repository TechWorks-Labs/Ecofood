<?php

namespace Controllers;

use Controllers\OrderController;

class StripeController
{
    public function createPrice()
    {
        $stripe = new \Stripe\StripeClient($_ENV["STRIPE_API_KEY"]);
        $product = $stripe->products->create([
            'name' => 'Starter Subscription',
            'description' => '$12/Month subscription',
        ]);
        echo "Success! Here is your starter subscription product id: " . $product->id . "\n";

        $price = $stripe->prices->create([
            'unit_amount' => 1200,
            'currency' => 'usd',
            'recurring' => ['interval' => 'month'],
            'product' => $product['id'],
        ]);
        echo "Success! Here is your premium subscription price id: " . $price->id . "\n";
    }

    public function checkout()
    {
        \Stripe\Stripe::setApiKey($_ENV["STRIPE_API_KEY"]);
        header('Content-Type: application/json');

        $checkout_session = \Stripe\Checkout\Session::create([
            'line_items' => [[
              # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
              'price' => '{{PRICE_ID}}',
              'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => DOMAIN . '?success=true',
            'cancel_url' => DOMAIN . '?canceled=true',
          ]);
          
          header("HTTP/1.1 303 See Other");
          header("Location: " . $checkout_session->url);
    }

    public function paymentIntent()
    {
        
    }
}
