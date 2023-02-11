<?php

use Autoload\Autoloader;
use Router\Router;

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('DS', DIRECTORY_SEPARATOR);

require('Autoload/Autoloader.php');
Autoloader::register();

$router = new Router($_GET['url']);

// INDEX
$router->get('/', function() {echo 'index';});

// FILTRES
$router->get('/products/type/:type/count/:count', 'api.getProductsByTypeAndCount')
    ->with('type', '[0-9]')
    ->with('count', '[0-9]')
    ->prefix('api');

$router->get('/products/origin', 'api.getOriginNames');
$router->get('/products/brand', 'api.getBrandNames');

$router->get('/products/:id', 'product.getProductFromId')
    ->with('id', '[0-9]');

$router->get('/products', 'api.getAllProduct')
    ->prefix('api');

$router->get('/products/type/:type', 'api.getProductByType')
    ->prefix('api')
    ->with('type', '[0-9]');

$router->get('/products/brands', 'api.getAllBrands')
    ->prefix('api');

$router->post('/products/filter', 'api.getProductsByFilter')
    ->prefix('api');

// BACK-OFFICE
$router->post('/product', 'product.create');

// ACCOUNT
$router->post('/account/register', 'user.setUserIdentifiers');
$router->post('/account/login', 'user.authenticateUser');
$router->post('/account/token/verification', 'user.validateTokenSignature');

$router->run();
