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

        public function setUserInformations($user)
        {
            $req = 'UPDATE user_data SET 
            civility = :civility,
            name = :name,
            lastname = :lastname,
            birth_day = :birth_day,
            birth_month = :birth_month,
            birth_year = :birth_year
            WHERE id_user = :id_user';

            $bdd = $this->getBdd();
            $smtp = $bdd->prepare($req);
            $smtp->bindValue(":id_user", $user->userId);
            $smtp->bindValue(":civility", $user->civility);
            $smtp->bindValue(":name", $user->name);
            $smtp->bindValue(":lastname", $user->lastname);
            $smtp->bindValue(":birth_day", intval($user->day));
            $smtp->bindValue(":birth_month", intval($user->month));
            $smtp->bindValue(":birth_year", intval($user->year));
            $smtp->execute();
            $smtp->closeCursor();
        }

        public function setAddress($user)
        {
            $req = 'UPDATE user_data SET address = :address, postal_code = :postal_code, city = :city, state = :state WHERE id_user = :id_user';
            $bdd = $this->getBdd();
            $smtp = $bdd->prepare($req);
            $smtp->bindValue(":id_user", $user->id_user);
            $smtp->bindValue(":address", $user->address);
            $smtp->bindValue(":postal_code", $user->postal_code);
            $smtp->bindValue(":city", $user->city);
            $smtp->bindValue(":state", $user->state);
            $smtp->execute();
            $smtp->closeCursor();
        }

        public function setEmail($email, $id_user)
        {
            $req = 'UPDATE user SET email = :email WHERE id_user = :id_user';
            $bdd = $this->getBdd();
            $smtp = $bdd->prepare($req);
            $smtp->bindValue(":email", $email);
            $smtp->bindValue(":id_user", $id_user);
            $smtp->execute();
            $smtp->closeCursor();
        }
        
        public function setPassword($password, $id_user)
        {
            $req = 'UPDATE user SET password = :password WHERE id_user = :id_user';
            $bdd = $this->getBdd();
            $smtp = $bdd->prepare($req);
            $smtp->bindValue(":password", $password);
            $smtp->bindValue(":id_user", $id_user);
            $smtp->execute();
            $smtp->closeCursor();
        }
    }   
