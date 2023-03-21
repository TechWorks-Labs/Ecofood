<?php

namespace Models;

class ApiManager extends Model
{

    public function getAllProduct()
    {
        $req = " SELECT
        p.id_product,
        pt.type,
        p.name,
        b.name as brand_name,
        p.image,
        p.weight,
        p.description, 
        p.composition, 
        p.nutrition, 
        p.price, 
        p.sku, 
        op.name as origin_name,
        op.description as origin_description
        from product as p
        INNER JOIN product_type as pt on pt.id_type = p.type
        INNER JOIN brand as b on b.id_brand = p.brand_id
        INNER JOIN origin_product as op on op.id_origin = p.origin_id";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $all_product = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $all_product;
    }

    public function getProductByType($value)
    {
        $req = "SELECT
        p.id_product,
        pt.type,
        p.name,
        b.name as brand_name,
        p.image,
        p.weight,
        p.description, 
        p.composition, 
        p.nutrition, 
        p.price, 
        p.sku, 
        op.name as origin_name,
        op.description as origin_description
        FROM product as p
        INNER JOIN product_type as pt on pt.id_type = p.type
        INNER JOIN brand as b on b.id_brand = p.brand_id
        INNER JOIN origin_product as op on op.id_origin = p.origin_id
        WHERE p.type = :idType";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idType", $value, \PDO::PARAM_INT);
        $stmt->execute();
        $product = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $product;
    }

    public function getProductsByTypeAndCount($type, $count)
    {
        $req = "SELECT
        p.id_product,
        pt.type,
        p.name,
        b.name as brand_name,
        p.image,
        p.weight,
        p.description, 
        p.composition, 
        p.nutrition, 
        p.price, 
        p.sku, 
        op.name as origin_name,
        op.description as origin_description
        FROM product as p
        INNER JOIN product_type as pt on pt.id_type = p.type
        INNER JOIN brand as b on b.id_brand = p.brand_id
        INNER JOIN origin_product as op on op.id_origin = p.origin_id
        WHERE p.type = :idType
        LIMIT $count";

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
        $req = 'SELECT 
        p.id_product,
        pt.type,
        p.name,
        b.name as brand_name,
        p.image,
        p.weight,
        p.description, 
        p.composition, 
        p.nutrition, 
        p.price, 
        p.sku, 
        op.name as origin_name,
        op.description as origin_description
        FROM product as p
        INNER JOIN brand as b on b.id_brand = p.brand_id
        INNER JOIN product_type as pt on pt.id_type = p.type
        INNER JOIN origin_product as op on op.id_origin = p.origin_id
        WHERE 1=1 ';

        if (!empty($type)) {
            $req .= 'AND p.type = :type ';
        } else {
            $req .= 'AND p.type = "1"';
        }
    
        if (!empty($brand)) {
            $req .= 'AND p.brand_id IN ('.implode(',', $brand).') ';
        }
        
        if (!empty($origin)){
            $req .= 'AND p.origin_id IN ('.implode(',', $origin).')';
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