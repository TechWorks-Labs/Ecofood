<?php

namespace Models;

class OrderModel extends Model
{
    public function getOrdersProductByUserId(int $id_user){
        $req = 'SELECT
        o.id_order,
        o.status,
        o.date, 
        o.total_price 
        FROM order AS o
        WHERE id_user = :id_user;';
        $bdd = $this->getBdd();
        $stmt = $bdd->prepare($req);
        $stmt->bindValue(':id_user', $id_user);
        $stmt->execute();
        $orderProducts = $stmt->fetchAll(\PDO::FETCH_OBJ);
        $stmt->closeCursor();
        return $orderProducts;
    }

    public function getOrderProducts(int $id_order)
    {
        $req = "SELECT 
        o_p.id_product,
        o_p.quantity,
        p.price
        FROM order_product AS o_p
        JOIN product AS p ON p.id_product = o_p.id_product
        WHERE id_order = :id_order;";

        $bdd = $this->getBdd();
        $smtp = $bdd->prepare($req);
        $smtp->bindValue(":id_order", $id_order);
        $smtp->execute();
        $OrderProducts = $smtp->fetchAll(\PDO::FETCH_OBJ);
        $smtp->closeCursor();
        return $OrderProducts;          
    }
}