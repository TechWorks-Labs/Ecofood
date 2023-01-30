<?php
    namespace Models;

    use Models\Model;

    class UserManager extends Model 
    {
        public function register($user,$password) 
        {
                $bdd = $this->getBdd();
                $bdd->beginTransaction();
        
                $req="INSERT INTO user (email, password) VALUES (:email, :password)";
                $stmp=$bdd->prepare($req);
                $stmp->bindValue(":email",$user->email);
                $stmp->bindValue(":password",$password);
                $stmp->execute();
                $lastId = $bdd->lastInsertId();
        
                $req = "INSERT INTO user_data (id_user, civility, name, lastname, birth_day, birth_month, birth_year, address, addressField, postal_code, city, state)
                VALUES (:id_user, :civility, :name, :lastname, :birth_day, :birth_month, :birth_year, :address, :addressField, :postal_code, :city, :state)";
                $stmp = $bdd->prepare($req);
                $stmp->bindValue(":id_user",$lastId);
                $stmp->bindValue(":civility",$user->civility);
                $stmp->bindValue(":name",$user->name);
                $stmp->bindValue(":lastname",$user->lastname);
                $stmp->bindValue(":birth_day",$user->birth_day);
                $stmp->bindValue(":birth_month",$user->birth_month);
                $stmp->bindValue(":birth_year",$user->birth_year);
                $stmp->bindValue(":address",$user->address);
                $stmp->bindValue(":addressField",$user->addressField);
                $stmp->bindValue(":postal_code",$user->postal_code);
                $stmp->bindValue(":city",$user->city);
                $stmp->bindValue(":state",$user->state);
                $stmp->execute();
                $bdd->commit();
        }

        public function getPasswordByEmail($email)
        {
            $req = 'SELECT * FROM user WHERE email = :email';
            $bdd = $this->getBdd();
            $smtp = $bdd->prepare($req);
            $smtp->bindValue(":email", $email);
            $smtp->execute();
            $password = $smtp->fetchAll(\PDO::FETCH_ASSOC);
            $smtp->closeCursor();
            return $password;
        }

        public function getUser($email)
        {
            $req = 'SELECT * FROM user_data inner join user on user.id_user = user_data.id_user WHERE user.email = :email';
            $bdd = $this->getBdd();
            $smtp = $bdd->prepare($req);
            $smtp->bindValue(":email", $email);
            $smtp->execute();
            $user = $smtp->fetchAll(\PDO::FETCH_ASSOC);
            $smtp->closeCursor();
            return $user;           
        }
    }   
