<?php

namespace Models;

class ProductModel extends Model
{
    public function create($product)
    {
        $req = "INSERT INTO 
        product (type, brand, image, name, weight, composition, nutrition, price, sku, origin, status)
        VALUES (:type, :brand, :image, :name, :weight, :composition, :nutrition, :price, :sku, :origin, :status);";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindParam(':type', $product->type, \PDO::PARAM_INT);
        $stmt->bindParam(':brand', $product->brand, \PDO::PARAM_STR);
        $stmt->bindParam(':image', $product->image, \PDO::PARAM_STR);
        $stmt->bindParam(':weight', $product->weight, \PDO::PARAM_INT);
        $stmt->bindParam(':composition', $product->composition, \PDO::PARAM_STR);
        $stmt->bindParam(':nutrition', $product->nutrition, \PDO::PARAM_STR);
        $stmt->bindParam(':price', $product->price, \PDO::PARAM_INT);
        $stmt->bindParam(':sku', $product->sku, \PDO::PARAM_STR);
        $stmt->bindParam(':origin', $product->origin, \PDO::PARAM_STR);
        $stmt->bindParam(':status', 0, \PDO::PARAM_INT);
        $stmt->execute();
        $stmt->closeCursor();
        return $product;
    }
}