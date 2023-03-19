<?php

namespace Models;

use PDOException;

abstract class Model 
{
    private static $pdo = null;

    private static function setBdd()
    {
        $user = $_ENV["DB_USER"];
        $password = $_ENV["DB_PASSWORD"];
        $host = $_ENV["DB_HOST"];
        $database = $_ENV["DB_DATABASE"];

        self::$pdo = new \PDO("mysql:host=$host;port=9501;dbname=$database;charset=utf8",$user,$password);
        self::$pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_WARNING);
    }

    public static function getBdd()
    {
        if( self::$pdo === null ){
            self::setBdd();
        }
        return self::$pdo;
    }

    public static function create(string $table, array $data)
    {
        try {
            $keys = implode(', ', array_keys($data));
            $placeholders = implode(', ', array_map(function ($key) {
                return ':' . $key;
            }, array_keys($data)));

            $bdd = self::getBdd();

            $req = "INSERT INTO `$table` ($keys) VALUES ($placeholders)";
            $stmt = $bdd->prepare($req);

            foreach ($data as $key => $value) {
                $stmt->bindValue(':' . $key, $value);
            }
            $stmt->execute();
            
            return $bdd->lastInsertId();
        } catch (\PDOException $error) {
            echo $error->getMessage();
        }
    }

    public static function delete(string $table, int $id)
    {
        try {
            $bdd = self::getBdd();
            $bdd->beginTransaction();
            $req = "DELETE FROM $table WHERE id_product = $id;";
            $stmt = $bdd->prepare($req);
            $stmt->execute();
            $bdd->commit();
        } catch (\PDOException $error) {
            echo $error->getMessage();
        }
    }

    public function update(string $table, array $params, array $id_params)
    {
        try {
            $fields = [];
            $id = $id_params[0];
            $id_value = $id_params[1];

            foreach ($params as $key => $value) {
                $field = $key . " = '" . $value . "'";
                array_push($fields, $field);
            }

            $values = implode(', ', $fields);
            
            $bdd = self::getBdd();
            $bdd->beginTransaction();

            $sql = "UPDATE `$table` SET $values WHERE $id = $id_value";
            $stmt = $bdd->prepare($sql);
            
            $stmt->execute();
            $bdd->commit();

        } catch (\PDOException $error) {
            echo $error->getMessage();
        }
    }

    public static function sendJSON($info)
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
        echo json_encode($info);
    }
}