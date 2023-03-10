<?php

namespace Controllers;

use Models\EmployeeModel;

class EmployeeController
{
    private function setHeaders() 
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }

    public function getAllEmployees()
    {
        $this->setHeaders();
        $Employee = new EmployeeModel();
        $employee = $Employee->getAllEmployee();
        $Employee->sendJSON($employee);
    }
}