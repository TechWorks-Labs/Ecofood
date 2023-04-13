<?php

namespace Models;

class ProductModel extends Model
{

    public function getProductFromId($id)
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
        INNER JOIN product_type as pt on pt.id_type = p.type
        INNER JOIN brand as b on b.id_brand = p.brand_id
        INNER JOIN origin_product as op on op.id_origin = p.origin_id
        WHERE p.id_product = :id;';

        $bdd = $this->getBdd();
        $smtp = $bdd->prepare($req);
        $smtp->bindValue(":id", $id);
        $smtp->execute();
        $product = $smtp->fetch(\PDO::FETCH_ASSOC);
        $smtp->closeCursor();
        return $product;           
    }

    public function getAllProducts()
    {
        $req = 'SELECT 
        p.id_product,
        p.name,
        p.brand,
        p.image,
        p.weight,
        p.composition,
        p.nutrition,
        p.price,
        p.sku,
        p.origin,
        p.status,
        pt.type
        FROM product as p
        INNER JOIN product_type as pt on pt.id_type = p.type
        ORDER BY p.id_product;';

        $bdd = $this->getBdd();
        $smtp = $bdd->prepare($req);
        $smtp->execute();
        $products = $smtp->fetchAll(\PDO::FETCH_ASSOC);
        $smtp->closeCursor();
        return $products;           
    }
}