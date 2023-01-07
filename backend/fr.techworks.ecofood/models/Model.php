<?php
abstract class Model {
    private static $pdo;

    private static function setBdd(){
        $user = $_ENV["DB_USER"];
        $password = $_ENV["DB_PASSWORD"];
        $host = $_ENV["DB_HOST"];
        $database = $_ENV["DB_DATABASE"];

        self::$pdo = new PDO("mysql:host=$host;port=9501;dbname=$database;charset=utf8",$user,$password);
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    protected function getBdd(){
        if( self::$pdo === null ){
            self::setBdd();
        }
        return self::$pdo;
    }

    public static function sendJSON($info){
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
        echo json_encode($info);
    }
}