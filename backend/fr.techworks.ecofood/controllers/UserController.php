<?php
    namespace Controllers;

use Exception;
use Models\UserManager;
    
    require $_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php';
    use \Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    class UserController 
    {
        private $user_controller;
        private $SECRET_KEY = '!tns@o)%-0v#n*r3$gu05%1+tj6zbb)w9z=9w73=0^q=yj9r%-';
   
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
            // Set CORS headers
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
            header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
        
            // Get login data from front-end
            $loginData = json_decode(file_get_contents('php://input'));
            $email = $loginData->email;
            $password = $loginData->password;
        
            // Get user information
            $userInfo = $this->user_controller->getUser($email);
            $lastname = $userInfo[0]['lastname'];
        
            // Get password hash from database using email
            $user = $this->user_controller->getPasswordByEmail($email);
            $id_user = $user[0]['id_user'];
            $passwordHash = $user[0]['password'];
        
            // Verify email and password
            if(password_verify($password, $passwordHash)){
                // Create login token to send to front-end
                $payload = array(
                    "id_user" => $id_user,
                    "email" => $email,
                    "exp" => time()+60,
                    "lastname" => $lastname,
                    "valid" => true,
                );
        
                $jwt = JWT::encode($payload, $this->SECRET_KEY, 'HS256');
                echo $jwt;
            } else {
                echo json_encode("Invalid password");
            }
        }
        

        public function validateTokenSignature () 
        {
            try {
                header("Access-Control-Allow-Origin: *");
                header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
                header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    
                // token decode for the verification timestamp
                $user = json_decode(file_get_contents('php://input'));
                $token = $user->user;
                // Le token est valide
                $decoded = JWT::decode($token, new Key('!tns@o)%-0v#n*r3$gu05%1+tj6zbb)w9z=9w73=0^q=yj9r%-', 'HS256'));

                    if(isset($decoded)){
                    // je prolonge l'expiration du token
                        $payload = array(
                            "id_user" => $decoded->id_user,
                            "email" => $decoded->email,
                            "exp" => time()+3600,
                            "lastname" => $decoded->lastname,
                            "valid" => true,
                        );
                        $jwt = JWT::encode($payload, $this->SECRET_KEY, 'HS256');
                        http_response_code(200);
                        echo $jwt;
                    }

                } catch (Exception $e) {
                    // Code to handle the exception
                    http_response_code(400);
                }

        }

    }