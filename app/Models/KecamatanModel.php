<?php
namespace App\Models;

use CodeIgniter\Model;

class KecamatanModel extends Model
{
    protected $table = 'kecamatan';
    protected $primarykey = 'id_kec';
    protected $allowedfields = ['nama_kec'];
}