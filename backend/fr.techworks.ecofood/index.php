<?php

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('DS', DIRECTORY_SEPARATOR);

require_once "./models/Model.php";
require_once "controllers/api/ApiController.php";

$api_controller = new ApiController();

$url = explode('?', $_SERVER['REQUEST_URI'])[0];
$data = explode('/', $url);
$page = $data[1];

switch ($page) {
    case 'product': $api_controller->getAllProduct();
        break;
}