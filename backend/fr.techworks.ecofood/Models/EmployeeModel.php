<?php

namespace Models;

class EmployeeModel extends Model
{
    public function getAllEmployee()
    {
        $req = "SELECT 
        e.id,
        e.username,
        r.name AS role
        FROM employee AS e
        JOIN role AS r ON r.id = e.role_id
        ORDER BY e.id";

        $bdd = $this->getBdd();
        $smtp = $bdd->prepare($req);
        $smtp->execute();
        $products = $smtp->fetchAll(\PDO::FETCH_ASSOC);
        $smtp->closeCursor();
        return $products;           
    }
}