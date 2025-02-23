<?php namespace App\Models;

use CodeIgniter\Model;

class RadiusModel extends Model
{
    protected $table = 'radius';
    protected $primaryKey = 'id_radius';
    protected $allowedFields = ['kategori_radius','nilai_radius'];
}