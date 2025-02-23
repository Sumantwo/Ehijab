<?php
namespace Config;

use CodeIgniter\Router\RouteCollection;

/**
* @var RouteCollection $routes
*/ 

$routes->setDefaultController('MenuController');
$routes->get('/', 'MenuController::index'); // Halaman utama
$routes->post('/panjar/kelurahan', 'MenuController::kelurahan'); // Mengambil data kelurahan
$routes->post('/panjar/biaya', 'MenuController::biaya'); // Menghitung biaya



