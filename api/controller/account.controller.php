<?php

include_once 'base.controller.php';

class AccountController extends BaseController
{

    // public function __construct($routeParts){
    //     $this->table = "user";
    //     parent::__construct($routeParts);
    // }

    protected function disabled()
    {
        return $this->db->getAll("active = 0");
    }
    protected function enabled()
    {
        return $this->db->getAll("active = 1");
    }

    protected function login()
    {
        $email = $this->body['email'];
        $accounts = $this->db->getAll("email = '$email' AND active = 1");
        $account = $accounts[0] ?? null;
        if (isset($account)) {
            $auth = Argon2::verify($this->body['password'], $account->password);
            if($auth){
                $token = Argon2::createToken(['id'=>$account->id, 'role'=>$account->role, 'ts'=>time()]);
                setcookie("token", $token);
                return ['role'=> $account->role];
            }  
        }

    }

    protected function logout()
    {
        unset($_COOKIE['token']); 
        setcookie('token', null, -1);
        return true;
    }
}
