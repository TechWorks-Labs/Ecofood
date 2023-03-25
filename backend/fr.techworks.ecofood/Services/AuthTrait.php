<?php

namespace Services;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

trait AuthTrait
{
    private string $SECRET_KEY = '!tns@o)%-0v#n*r3$gu05%1+tj6zbb)w9z=9w73=0^q=yj9r%-';
    
    protected function create(int $user_id)
    {
        $issue_at = time();
        $expiration = $issue_at + 180;

        $payload = [
            'iss' => 'https://ecofood.techworks.fr', // Issuer (émetteur du token)
            'aud' => 'https://ecofood.techworks.fr', // Audience (récepteur du token)
            'user_id' => $user_id, 
            'iat' =>  $issue_at,
            'exp' => $expiration
        ];

        $jwt = JWT::encode($payload, $this->SECRET_KEY, 'HS256');
        return $jwt;
    }

    protected function authenticate()
    {
        $auth_header = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
        $jwt = str_replace('Bearer ', '', $auth_header);

        if ($jwt) {
            try {
                $payload = JWT::decode($jwt, new Key($this->SECRET_KEY, 'HS256'));
                return true;
            } catch (\UnexpectedValueException $e) {
                http_response_code(401);
                echo $e->getMessage();
            }
        }
        
        http_response_code(400);
        die();
    }
}