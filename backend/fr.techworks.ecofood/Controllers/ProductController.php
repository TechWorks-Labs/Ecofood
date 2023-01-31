<?php

namespace Controllers;

use Models\ProductModel;

class ProductController
{
    public function setHeaders() {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }

    public function create()
    {
        $this->setHeaders();

        $filters = array(
            'productName' => FILTER_SANITIZE_ENCODED,
            'weight' => FILTER_SANITIZE_ENCODED,
            'nutrition' => FILTER_SANITIZE_ENCODED,
            'price' => FILTER_SANITIZE_ENCODED,
            'origin' => FILTER_SANITIZE_ENCODED
        );

        // $new_product = filter_var_array($_POST, $filter

        $Product = new ProductModel();
        $Product->create('product', $_POST);
    }
}