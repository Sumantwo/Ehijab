<?php
namespace App\Controllers;

use App\Models\KecamatanModel;
use App\Models\KelurahanModel;
use App\Models\KonfigurasiModel;
use App\Models\RadiusModel;

class MenuController extends BaseController
{
    protected $kecamatanModel;
    protected $kelurahanModel;
    protected $konfigurasiModel;
    protected $radiusModel;

    public function __construct()
    {
        $this->kecamatanModel = new KecamatanModel();
        $this->kelurahanModel = new KelurahanModel();
        $this->konfigurasiModel = new KonfigurasiModel();
        $this->radiusModel = new RadiusModel();
    }

    public function index()
    {
        $data['title'] = 'Hitung Panjar';
        $data['kecamatan'] = $this->kecamatanModel->findAll();
        $data['konfigurasi'] = $this->konfigurasiModel->findAll();
        $data['hari_ini'] = date('y-m-d');

        return view('panjar/index',$data);
    }

    public function kelurahan()
    {
        $id_kec = $this->request->getPost('id_kec');
        $data = $this->kelurahanModel->where('id_kec',$id_kec)->findAll();
        return $this->response->setJSON($data);
    }

    public function biaya()
    {
        $id_kel = $this->request->getPost('id_kel');
        $builder = $this->kelurahanModel->builder();
        $builder->select('*')->join('kecamatan','kecamatan.id_kec = kelurahan.id_kec')->join('radius','radius.id_radius = kelurahan.id_radius')->where('kelurahan.id_kel', $id_kel);
        $data = $builder->get()->getRowArray();

        return $this->response->setJSON($data);
    }
}