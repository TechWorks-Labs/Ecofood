<?php

use Autoload\Autoloader;
use Router\Router;

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('DS', DIRECTORY_SEPARATOR);

require('Autoload/Autoloader.php');
Autoloader::register();
$router = new Router($_GET['url']);

$router->get('/', function() {include '';});

$router->get('/products/:id', 'product.getProductFromId')
    ->with('id', '[0-9]');
$router->get('/products', 'api.getAllProduct')
    ->prefix('api');
$router->get('/product/type/:type', 'api.getProductByType')
    ->with('type', '[0-9]')
    ->prefix('api');
$router->post('/product', 'product.create');
$router->delete('/products/:id', 'product.delete')
    ->with('id', '[0-9]');

$router->get('/brands', 'api.getAllBrand')
    ->prefix('api');

$router->post('/account/sendUserIdentifiers', 'user.setUserIdentifiers');
$router->post('/account/loginAuthentification', 'user.authenticateUser');

$router->run();