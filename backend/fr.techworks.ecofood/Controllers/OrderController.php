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

    private function setHeaders() 
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }

    public function newOrder()
    {
        $this->setHeaders();
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
        $client_secret = $this->checkout($amount);

        $order = [
            'amount' => $amount,
            'client_secret' => $client_secret
        ];
        $this->model->update('order', ['total_price' => $amount], ['id_order', $this->id_order]);
        $this->model->sendJSON($order, $client_secret);
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
        return $amount;
    }

    public function checkout($amount)
    {
        \Stripe\Stripe::setApiKey($_ENV["STRIPE_API_KEY"]);
        $amount = $this->getOrderAmount();
        header('Content-Type: application/json');

        // Amount must be in cents
        $amount = $amount * 100;
        
        try {
            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'eur',
                'automatic_payment_methods' => [
                    'enabled' => true,
                ],
            ]);

            $output = $paymentIntent->client_secret;

            return $output;
            // echo json_encode($output);
        } catch (\Error $error) {
            http_response_code(500);
            echo json_encode(['error' => $error->getMessage()]);
        }
    }
}