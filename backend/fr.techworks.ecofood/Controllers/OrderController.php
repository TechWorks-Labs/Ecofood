<?php

namespace Controllers;

use Models\OrderModel;

class OrderController
{
    private int $id_order;
    private $model;

    public function __construct()
    {
        $this->model = new OrderModel();
    }

    public function newOrder()
    {
        $cart = json_decode(file_get_contents('php://input'));
        $products = $cart->products;
        
        $data = ['id_user' => $cart->user_id];
        $filters = ['id_user' => FILTER_SANITIZE_NUMBER_INT];
        $id_user = filter_var_array($data, $filters);

        $this->id_order = $this->model->create('order', $id_user);

        foreach($products as $product) {
            $new_order_product = $this->sanitizeInputData($product);
            $this->model->create('order_product', $new_order_product);
        }

        $amount = $this->getOrderAmount();

        $this->model->sendJSON($amount);
    }

    private function sanitizeInputData($product)
    {
        $data = [
            'id_order'   => $this->id_order,
            'id_product' => $product->id_product,
            'quantity'   => $product->quantity,
        ];

        $filters = [
            'id_order'   => FILTER_SANITIZE_NUMBER_INT,
            'id_product' => FILTER_SANITIZE_NUMBER_INT,
            'quantity'   => FILTER_SANITIZE_NUMBER_INT,
        ];

        return filter_var_array($data, $filters);
    }

    private function getOrderAmount()
    {
        $products = $this->model->getOrderProducts($this->id_order);
        $amount = 0;
        foreach($products as $product) {
            $amount += $product->quantity * $product->price;
        }
        return (int)$amount;
    }

    public function checkout($amount)
    {
        \Stripe\Stripe::setApiKey($_ENV["STRIPE_API_KEY"]);
        $amount = $this->getOrderAmount();
        header('Content-Type: application/json');
        
        try {
            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'eur',
                'automatic_payment_methods' => [
                    'enabled' => true,
                ],
            ]);

            $output = [
                'clientSecret' => $paymentIntent->client_secret,
            ];

            echo json_encode($output);
        } catch (\Error $error) {
            http_response_code(500);
            echo json_encode(['error' => $error->getMessage()]);
        }
    }
}