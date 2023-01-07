<?php
require_once "models/Model.php";

class ApiManager extends Model
{
    public function getAllProduct()
    {
        $req = " SELECT * from product ";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $all_product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $all_product;
    }
}