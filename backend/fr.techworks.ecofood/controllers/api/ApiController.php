<?php
require_once "models/ApiManager.php";

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

}