<?php

use Autoload\Autoloader;
use Router\Router;

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('DS', DIRECTORY_SEPARATOR);

require('Autoload/Autoloader.php');
Autoloader::register();

$router = new Router($_GET['url']);

$router->get('/', function() {echo 'index';});

$router->get('/products/type/:type/count/:count', 'api.getProductsByTypeAndCount')
    ->with('type', '[0-9]')
    ->with('count', '[0-9]')
    ->prefix('api');

$router->get('/product/origin', 'api.getOriginNames');
$router->get('/product/brand', 'api.getBrandNames');

$router->get('/product/:id', 'product.getProductFromId')
    ->with('id', '[0-9]');
$router->get('/products', 'api.getAllProduct')
    ->prefix('api');

// fruit - 1, vege - 2, meat - 3
$router->get('/product/type/:type', 'api.getProductByType')
    ->with('type', '[0-9]')
    ->prefix('api');

$router->get('/brands', 'api.getAllBrand')
    ->prefix('api');

$router->get('/product/filter', 'api.getProductsByFilter')
    ->prefix('api');

// BACK-OFFICE
$router->post('/product', 'product.create');

// ACCOUNT
$router->post('/account/sendUserIdentifiers', 'user.setUserIdentifiers');
$router->post('/account/loginAuthentification', 'user.authenticateUser');

$router->run();
