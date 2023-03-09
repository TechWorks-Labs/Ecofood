<?php

use Autoload\Autoloader;
use Router\Router;

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('DS', DIRECTORY_SEPARATOR);

require('Autoload/Autoloader.php');
Autoloader::register();
// var_dump($_SERVER);
// die();

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: OPTIONS, DELETE, UPDATE");
    header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    die();
}

$router = new Router($_GET['url']);

// INDEX
$router->get('/', function() {echo 'index';});

// FILTRES
$router->get('/products/type/:type/count/:count', 'api.getProductsByTypeAndCount')
    ->with('type', '[0-9]')
    ->with('count', '[0-9]')
    ->prefix('api');

$router->post('/products/filter', 'api.getProductsByFilter')
    ->prefix('api');

$router->get('/products', 'api.getAllProduct')
    ->prefix('api');

$router->get('/products/type/:type', 'api.getProductByType')
    ->prefix('api')
    ->with('type', '[0-9]');

$router->get('/products/origin', 'api.getOriginNames')
    ->prefix('api');

$router->get('/products/brands', 'api.getBrandNames')
    ->prefix('api');

$router->get('/products/:id', 'product.getProductFromId')
    ->with('id', '[0-9]');

// BACK-OFFICE
$router->post('/product/create', 'product.create');
$router->update('/product/:id', 'product.update')
    ->with('id', '[0-9]');
$router->delete('/products/:id', 'product.delete')
    ->with('id', '[0-9]');

// ACCOUNT
$router->get('/account/profil/:email','user.getUserDatasFromEmail')
    ->with('email', '^[^\s@]+@[^\s@]+\.[^\s@]+$');
$router->post('/account/register', 'user.setUserIdentifiers');
$router->post('/account/login', 'user.authenticateUser');
$router->post('/account/token/verification', 'user.validateTokenSignature');
$router->post('/account/profil','user.setUserProfil');
$router->post('/account/address','user.setUserAddress');
$router->run();
