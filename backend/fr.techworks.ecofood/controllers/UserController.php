<?php
    namespace Controllers;

    use Models\UserManager;
    use Firebase\JWT\JWT;

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

        public function authenticateUser()
        {            
            
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
            header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
           
            // recupération des données du front-end
            $login = json_decode(file_get_contents('php://input'));
            $email = $login->email;
            $password = $login->password;

            // récupération du password hash sur la bdd via le model et l'email de connection

            $user = $this->user_controller->getPasswordByEmail($email);
            $id_user = $user[0]['id_user'];
            $passwordHash = $user[0]['password'];
            $SECRET_KEY = '!tns@o)%-0v#n*r3$gu05%1+tj6zbb)w9z=9w73=0^q=yj9r%-';
            
            //vérification du mail et du password
            if(password_verify($password, $passwordHash)){
                //creation du token de connection à renvoyer sur la partie front-end
                $payload = array(
                    "id_user" => $id_user,
                    "email" => $email,
                    "exp" => time()+3600,
                );

                $jwt = JWT::encode($payload, $SECRET_KEY);
                return json_encode(array($jwt));
            } else {
                echo json_encode("password invalide");
            }
            

            
        }

    }