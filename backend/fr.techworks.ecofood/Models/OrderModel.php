<?php

namespace Models;

class OrderModel extends Model
{
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

    public function getAllOrders()
    {
        $req = "SELECT
        o.id_order,
        o.status,
        o.total_price,
        u_d.name,
        u_d.lastname
        FROM `order` AS o
        JOIN user_data AS u_d ON u_d.id_user = o.id_user
        ;";

        $bdd = $this->getBdd();
        $smtp = $bdd->prepare($req);
        $smtp->execute();
        $orders = $smtp->fetchAll(\PDO::FETCH_ASSOC);
        $smtp->closeCursor();
        return $orders;         
    }
}