<?php

namespace Controllers;

use Services\AuthTrait;

class AuthController
{
    use AuthTrait;

    public function login()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
        
        $user_id = 2;

        $jwt = $this->create($user_id);
        echo 'Bearer ' . $jwt;
    }

    public function auth()
    {
        $is_Authenticated = $this->authenticate();
        var_dump($is_Authenticated);
    }

    public function testAuthRouting()
    {
        echo 'youpi';
    }
}