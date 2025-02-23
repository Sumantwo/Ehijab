<?php namespace App\Models;

use CodeIgniter\Model;

class KonfigurasiModel extends Model
{
    protected $table = 'konfigurasi';
    protected $primaryKey = 'id_konfigurasi';
    protected $allowedFields = ['nama_konfigurasi','tipe_konfigurasi','nilai_konfigurasi'];
}