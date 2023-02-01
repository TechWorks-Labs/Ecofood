<?php

namespace Controllers\Api;

use Models\ApiManager;
use Models\Model;

class ApiController 
{
    private $api_manager;

    public function __construct()
    {
        $this->api_manager = new ApiManager();
    }

    public function getAllProduct()
    {
        $all_products = $this->api_manager->getAllProduct();
        Model::sendJSON($all_products);
    }

    public function getProductByType($value)
    {
        $product = $this->api_manager->getProductByType($value);
        Model::sendJSON($product);
    }
    
    public function getAllBrand()
    {
        $brand = $this->api_manager->getBrandNames();
        Model::sendJSON($brand);
    }
}