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

    public function setHeaders()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }
    

    public function getAllProduct()
    {
        $all_products = $this->api_manager->getAllProduct();
        Model::sendJSON($all_products);
    }

    public function getProductByType($type)
    {
        $product = $this->api_manager->getProductByType($type);
        Model::sendJSON($product);
    }

    public function getProductsByTypeAndCount($type, $count)
    {
        $products = $this->api_manager->getProductsByTypeAndCount($type, $count);
        Model::sendJSON($products);
    }

    public function getBrandNames()
    {
        $brand = $this->api_manager->getBrandNames();
        Model::sendJSON($brand);
    }
    
    public function getOriginNames()
    {
        $origins = $this->api_manager->getOriginNames();
        Model::sendJson($origins);
    }

    public function getProductsByFilter()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
        $filter = json_decode(file_get_contents('php://input'), true);
        $type = $filter['type'][0] ?? [];
        $brand = $filter['brand'] ?? [];
        $origin = $filter['origin'] ?? [];
        $maxProduct = $filter['maxProduct'] ?? [];
        $products = $this->api_manager->getProductsByFilter($type, $brand, $origin, $maxProduct);
        Model::sendJSON($products);
    }
    
}