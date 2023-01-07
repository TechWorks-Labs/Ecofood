<?php

require_once "./models/Model.php";

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('DS', DIRECTORY_SEPARATOR);

$url = explode('?', $_SERVER['REQUEST_URI'])[0];
$data = explode('/', $url);
$page = $data[1];

switch ($page) {
    case 'homepage':
        echo "coucou";
        break;
}