<?php

use Autoload\Autoloader;
use Router\Router;

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('DS', DIRECTORY_SEPARATOR);

require('Autoload/Autoloader.php');
Autoloader::register();

$route = new Router();
$route->get('/product/:fruit', 'ApiController.getProductByType');

var_dump($route);