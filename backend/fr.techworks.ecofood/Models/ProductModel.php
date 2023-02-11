<?php

namespace Models;

class ProductModel extends Model
{
    public function getProductFromId($id)
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
        WHERE p.id_product = :id;';

        $bdd = $this->getBdd();
        $smtp = $bdd->prepare($req);
        $smtp->bindValue(":id", $id);
        $smtp->execute();
        $product = $smtp->fetch(\PDO::FETCH_ASSOC);
        $smtp->closeCursor();
        return $product;           
    }
}