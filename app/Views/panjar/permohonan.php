<div class="card mb-3 mt-3">
    <div class="row no-gutters">
        <div class="col-md-12">
            <div class="card-header">
                Permohonan
            </div>
            <div class="card-body" id="data_pemohon_permohonan">
                <div class="card text-white bg-danger mb-3 hidden" id="card_error3">
                    <div class="card-body">
                        <h5 class="card-title">Terjadi Kesalahan</h5>
                        <div class="card-text" id="card_message_error3"></div>
                    </div>
                </div>
                <div class="card mb-3 mt-3" id="pemohon_1">
                    <div class="row no-gutters form-element-pemohon">
                        <div class="col-md-12">
                            <div class="card-header">
                                Data Pemohon 1
                            </div>
                            <div class="card-body">
                                <form action="" method="">
                                    <div class="form-group">
                                        <label for="name">Di Daerah Manakah Pemohon Tinggal?</label>
                                        <select name="daerah_p31" id="daerah_p31" class="form-control select-daerah-pemohon">
                                            <option value="">-- Pilih Lokasi --</option>
                                            <option value="p3_dalam_kota">Dalam <?=$konfigurasi[5]['nilai_konfigurasi']?></option>
                                            <option value="p3_luar_kota">Luar <?=$konfigurasi[5]['nilai_konfigurasi']?></option>
                                        </select>
                                    </div>

                                    <div class="hidden" id="p3_dalam_kota1">
                                        <div class="form-group">
                                            <label for="name">Apakah Nama Kecamatan Pemohon Tinggal?</label>
                                            <select name="kecamatan_p31" id="kecamatan_p31" class="form-control select-kecamatan-pemohon">
                                                <option value="">-- Pilih Kecamatan --</option>
                                                <?php foreach($kecamatan as $kec) : ?>
                                                    <option value="<?=$kec['id_kec'];?>"><?=$kec['nama_kec'];?></option>
                                                <?php endforeach ; ?>
                                            </select>
                                        </div>

                                        <div class="hidden" id="p3_kelurahan1">
                                            <div class="form-group">
                                                <label for="name">Apakah Nama Kelurahan/Desa Pemohon Tinggal?</label>
                                                <select name="kelurahan_p31" id="kelurahan_p31" class="form-control select-kelurahan-pemohon">
                                                    <option value="">-- Pilih Kelurahan/Desa --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hidden" id="p3_luar_kota1">
                                        <div class="form-group">
                                            <label>Berapa Nilai Radius (Termasuk Ongkos Kirim) ? (Silahkan Tanya Petugas Informasi)</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Rp.</span>
                                                </div>
                                                <input type="text" class="form-control input-biaya-pemohon" name="biaya_p31" id="biaya_p31" value="" placeholder="0">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <a href="#" id="btn_tambah_pemohon"><i class="fa fa-plus"></i> Tambah Pemohon</a> | <a href="#" id="btn_hapus_pemohon"><i class="fa fa-trash"></i> Hapus Pemohon</a>
            </div>
        </div>
    </div>
</div>