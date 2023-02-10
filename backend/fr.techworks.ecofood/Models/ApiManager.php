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

    public function getProductsByTypeAndCount($type, $count)
    {
        $req = "SELECT * FROM product WHERE type = :idType LIMIT $count";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idType", $type, \PDO::PARAM_INT);
        $stmt->execute();
        $products = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $products;
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

    public function getOriginNames()
    {
        $req = 'SELECT * FROM origin_product';
        $stmt= $this->getBdd()->prepare($req);
        $stmt->execute();
        $origins = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $origins;
    }

    public function getProductsByFilter($type, $brand, $origin, $maxProduct)
    {
        $req = 'SELECT * FROM product WHERE 1=1 ';

        if (!empty($type)) {
            $req .= 'AND type = :type ';
        } else {
            $req .= 'AND type = "1"';
        }
    
        if (!empty($brand)) {
            $req .= 'AND brand_id IN ('.implode(',', $brand).') ';
        }
        
        if (!empty($origin)){
            $req .= 'AND origin_id IN ('.implode(',', $origin).')';
        }

        $stmt = $this->getBdd()->prepare($req);
        if (!empty($type)) {
            $stmt->bindValue(':type', $type[0], \PDO::PARAM_INT);
        }

        $stmt->execute();
        $products = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $products;
    }
    
    
}