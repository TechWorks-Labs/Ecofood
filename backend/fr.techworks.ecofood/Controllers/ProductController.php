<?php

namespace Controllers;

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
            'weight' => FILTER_SANITIZE_ENCODED
        );

        
        print_r($_POST);
    }
}