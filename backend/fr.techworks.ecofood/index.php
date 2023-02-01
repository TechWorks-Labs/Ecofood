<?php

use Autoload\Autoloader;
use Controllers\Api\ApiController;
use Controllers\ProductController;
use Controllers\UserController;

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('DS', DIRECTORY_SEPARATOR);

require('Autoload/Autoloader.php');
Autoloader::register();

$api_controller = new ApiController();
$product_controller = new ProductController();
$user_controller = new UserController();

$url = explode('?', $_SERVER['REQUEST_URI'])[0];
$data = explode('/', $url);
$page = $data[1];

try {
    if (empty($_GET['page'])) {
        throw new Exception("url doesn't exist");
    } else {
        $url = explode("/", filter_var($_GET['page'], FILTER_SANITIZE_URL));
        switch ($url[0]) {
            case "product":
                switch ($url[1]) {
                    case "fruit":
                        $api_controller->getProductByType(1);
                        break;
                    case "vegetable":
                        $api_controller->getProductByType(2);
                        break;
                    case "meat":
                        $api_controller->getProductByType(3);
                        break;
                    case "brand":
                        $api_controller->getAllBrand();
                        break;
                    case "create":
                        $product_controller->create();
                        break;
                    default:
                        throw new Exception("url doesn't exist");
                }
            case "account":
                switch ($url[1]) {
                    case "sendUserIdentifiers":
                        $user_controller->setUserIdentifiers();
                        break;
                    case "loginAuthentification":
                        $user_controller->authenticateUser();
                        break;
                    default:
                        throw new Exception("url doesn't exist");
                }
            default:
                break;    
        }
    }
} catch (Exception $e) {
}
