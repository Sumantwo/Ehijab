<?php namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table = 'user';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name','email','photo','password','role_id','is_active','created_at','update_at','deleted_at'];
}