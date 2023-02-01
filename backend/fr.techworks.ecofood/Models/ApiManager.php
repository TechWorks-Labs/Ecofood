<?php

namespace Models;

class ApiManager extends Model
{
    public function getAllProduct()
    {
        $req = " SELECT * from product ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $all_product = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $all_product;
    }

    public function getProductByType($value)
    {
        $req = "SELECT * FROM product WHERE type = :idType";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idType", $value, \PDO::PARAM_INT);
        $stmt->execute();
        $product = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $product;
    }

    public function getBrandNames()
    {
        $req = "SELECT * FROM brand";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $brand = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $brand;
    }
}