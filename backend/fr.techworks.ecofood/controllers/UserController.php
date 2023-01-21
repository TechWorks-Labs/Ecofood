<?php
    namespace Controllers;

    use Models\UserManager;

    class UserController 
    {
        private $user_controller;

       public function __construct()
        {
            $this->user_controller = new UserManager();
        }

        public function setUserIdentifiers()
        {
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
            header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");

            $user = json_decode(file_get_contents('php://input'));
            $password = $user->password;
            $passwordHash = password_hash($password, PASSWORD_DEFAULT);
            // echo json_encode($user->email);
            $this->user_controller->register($user, $passwordHash);
        }
    }