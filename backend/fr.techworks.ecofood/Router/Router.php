<?php

namespace Router;

use Controllers\Api\ApiController;
use Router\Route;

class Router
{
    private array $routes = [];
    private string $url;
    private string $page;
    private array $data = [];

    public function __construct()
    {
        $this->url = explode('?', $_SERVER['REQUEST_URI'])[0];
        $this->data = explode('/', $this->url);
        $this->page = $this->data[1];
    }

    public function get(string $url, string $callback) {
        $route = new Route($url, $callback);
        $routes['GET'][] = $route;
    }

    public function run()
    {
        try {

        } catch (\Exception $e) {

        }
    }
}


// $api_controller = new ApiController();


// try{
//     if(empty($_GET['page'])) {
//         throw new \Exception ("url doesn't exist");
//     } else {
//         $url = explode("/", filter_var($_GET['page'], FILTER_SANITIZE_URL));
//         switch($url[0]){
//             case "product" :
//                 switch($url[1]){
//                     case "fruit": $api_controller->getProductByType(1);
//                     break;
//                     case "vegetable": $api_controller->getProductByType(2);
//                     break;
//                     case "meat": $api_controller->getProductByType(3);
//                     break;
//                     default: throw new \Exception ("url doesn't exist"); 
//                 }
//         }
//     }
// } catch (\Exception $e) {

// }