<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?=$title;?></title>

    <!-- Custom fonts for this template-->
    <link href="<?=base_url('public/assets');?>/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="<?=base_url('public/assets');?>/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="<?=base_url('public/assets');?>/css/panjar.css?<?=date('YmdHis');?>" rel="stylesheet">

</head>

<body id="page-top">
    <input type="hidden" id="judul_website_konfigurasi" value="<?=$konfigurasi[0]['nilai_konfigurasi'];?>" />
    <input type="hidden" id="nama_kabupaten_konfigurasi" value="<?=$konfigurasi[5]['nilai_konfigurasi'];?>" />
    <input type="hidden" id="nilai_pnbp_p_konfigurasi" value="<?=$konfigurasi[10]['nilai_konfigurasi'];?>" />

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">
                <div class="page-header">
                    <div class="col-header col-header-img">
                        <img src="<?=base_url('public/assets').'/img/general/logo-satker-warna.png';?>" alt="" class="img-page-header" />
                    </div>
                    <div class="col-header">
                        <h4><strong>PENGADILAN AGAMA KABUPATEN KEDIRI</strong></h4>
                        <p class="text-page-header">Jl. Sekartaji No.12, Sumber, Doko, Kec. Ngasem,</p>
                        <p class="text-page-header">Kabupaten Kediri, Jawa Timur 64182</p>
                        <p class="text-page-header">Telp : (0354) 682175</p>
                        <br />
                        <p class="text-page-header"><?=$hari_ini;?> -- Selamat datang!</p>
                    </div>
                    <div class="col-header-right col-header-img">
                        <img src="<?=base_url('public/assets').'/img/general/logo-ehijab1.png';?>" alt="" class="img-page-header-right" />
                    </div>
                </div>

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow change-color-nav">
                    <h4 class="title-apps"><i class="fas fa-calculator"></i> <?=$konfigurasi[0]['nilai_konfigurasi'];?></h4>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid add-extra-margin-bottom">

                    <div class="card mb-3" style="max-width: 800px;">
                        <div class="row no-gutters">
                            <div class="col-md-12">
                                <div class="card-header">
                                    Form Hitung Panjar
                                </div>
                                <div class="card-body">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="talak-tab" data-toggle="tab" href="#talak" role="tab" aria-controls="talak" aria-selected="true">Cerai Talak</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="gugat-tab" data-toggle="tab" href="#gugat" role="tab" aria-controls="gugat" aria-selected="false">Cerai Gugat</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="permohonan-tab" data-toggle="tab" href="#permohonan" role="tab" aria-controls="permohonan" aria-selected="false">Permohonan</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="talak" role="tabpanel" aria-labelledby="talak-tab">
                                            <?php include ('cerai_talak.php'); ?>
                                        </div>
                                        <div class="tab-pane fade" id="gugat" role="tabpanel" aria-labelledby="gugat-tab">
                                            <?php include ('cerai_gugat.php'); ?>
                                        </div>
                                        <div class="tab-pane fade" id="permohonan" role="tabpanel" aria-labelledby="permohonan-tab">
                                            <?php include ('permohonan.php'); ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary" id="btn_hitung_panjar">Hitung Panjar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white custom-footer fixed-bottom">
                <div class="container my-auto mx-0">
                    <div class="copyright my-auto">
                        <span>Copyright &copy; <?=date('Y');?> - PA Kab Kediri</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Bootstrap core JavaScript-->
    <script src="<?=base_url('public/assets');?>/vendor/jquery/jquery.min.js"></script>
    <script src="<?=base_url('public/assets');?>/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="<?=base_url('public/assets');?>/vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="<?=base_url('public/assets');?>/js/sb-admin-2.min.js"></script>

    <script src="<?=base_url('public/assets');?>/js/panjar.js?<?=date('YmdH:i:s')?>"></script>
</body>

</html>