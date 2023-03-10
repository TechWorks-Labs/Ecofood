<?php

namespace Controllers;

class StripeController
{
    function createPrice()
    {
        $stripe = new \Stripe\StripeClient("sk_test_51MbrU0IPtrTy84mIcr7X73LNpW8qB6usGbEIsoA3OTfrSq6znhFCV2r7ma9ha14OcB7HrS7lbybfcLTmlNyBxqh200RQYfoNzR");
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
}