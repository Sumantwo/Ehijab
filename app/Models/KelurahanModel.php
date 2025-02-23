<?php
namespace App\Models;

use CodeIgniter\Model;

class KelurahanModel extends Model
{
    protected $table = 'kelurahan';
    protected $primarykey = 'id_kel';
    protected $allowedfields = ['id_kec','nama_kel','id_radius'];
}