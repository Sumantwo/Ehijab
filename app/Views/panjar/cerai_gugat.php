<div class="card mb-3 mt-3">
    <div class="row no-gutters">
        <div class="col-md-12">
            <div class="card-header">
                Cerai Gugat (Yang Diajukan Istri)
            </div>
            <div class="card-body">
                <div class="card text-white bg-danger mb-3 hidden" id="card_error2">
                    <div class="card-body">
                        <h5 class="card-title">Terjadi Kesalahan</h5>
                        <div class="card-text" id="card_message_error2"></div>
                    </div>
                </div>
                <div class="card mb-3 mt-3">
                    <div class="row no-gutters">
                        <div class="col-md-12">
                            <div class="card-header">
                                Data Pemohon (Istri)
                            </div>
                            <div class="card-body">
                                <form action="" method="">
                                    <div class="form-group">
                                        <label for="name">Di Daerah Manakah Pemohon Tinggal?</label>
                                        <select name="daerah_p2" id="daerah_p2" class="form-control">
                                            <option value="">-- Pilih Lokasi --</option>
                                            <option value="p2_dalam_kota">Dalam <?=$konfigurasi[5]['nilai_konfigurasi']?></option>
                                            <option value="p2_luar_kota">Luar <?=$konfigurasi[5]['nilai_konfigurasi']?></option>
                                        </select>
                                    </div>

                                    <div class="hidden" id="p2_dalam_kota">
                                        <div class="form-group">
                                            <label for="name">Apakah Nama Kecamatan Pemohon Tinggal?</label>
                                            <select name="kecamatan_p2" id="kecamatan_p2" class="form-control">
                                                <option value="">-- Pilih Kecamatan --</option>
                                                <?php foreach($kecamatan as $kec) : ?>
                                                    <option value="<?=$kec['id_kec'];?>"><?=$kec['nama_kec'];?></option>
                                                <?php endforeach ; ?>
                                            </select>
                                        </div>

                                        <div class="hidden" id="p2_kelurahan">
                                            <div class="form-group">
                                                <label for="name">Apakah Nama Kelurahan/Desa Pemohon Tinggal?</label>
                                                <select name="kelurahan_p2" id="kelurahan_p2" class="form-control">
                                                    <option value="">-- Pilih Kelurahan/Desa --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hidden" id="p2_luar_kota">
                                        <div class="form-group">
                                            <label for="name">Berapa Nilai Radius (Termasuk Ongkos Kirim) ? (Silahkan Tanya Petugas Informasi)</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Rp.</span>
                                                </div>
                                                <input type="text" class="form-control" name="biaya_p2" id="biaya_p2" value="" placeholder="0">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3 mt-3">
                    <div class="row no-gutters">
                        <div class="col-md-12">
                            <div class="card-header">
                                Data Termohon (Suami)
                            </div>
                            <div class="card-body">
                                <form action="" method="">
                                    <div class="form-gr
                                    <div class="form-group">
                                        <label for="name">Di Daerah Manakah Termohon Tinggal?</label>
                                        <select name="daerah_t2" id="daerah_t2" class="form-control">
                                            <option value="">-- Pilih Lokasi --</option>
                                            <option value="t2_dalam_kota">Dalam <?=$konfigurasi[5]['nilai_konfigurasi']?></option>
                                            <option value="t2_luar_kota">Luar <?=$konfigurasi[5]['nilai_konfigurasi']?></option>
                                        </select>
                                    </div>

                                    <div class="hidden" id="t2_dalam_kota">
                                        <div class="form-group">
                                            <label for="name">Apakah Nama Kecamatan Termohon Tinggal?</label>
                                            <select name="kecamatan_t2" id="kecamatan_t2" class="form-control">
                                                <option value="">-- Pilih Kecamatan --</option>
                                                <?php foreach($kecamatan as $kec) : ?>
                                                    <option value="<?=$kec['id_kec'];?>"><?=$kec['nama_kec'];?></option>
                                                <?php endforeach ; ?>
                                            </select>
                                        </div>

                                        <div class="hidden" id="t2_kelurahan">
                                            <div class="form-group">
                                                <label for="name">Apakah Nama Kelurahan/Desa Termohon Tinggal?</label>
                                                <select name="kelurahan_t2" id="kelurahan_t2" class="form-control">
                                                    <option value="">-- Pilih Kelurahan/Desa --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hidden" id="t2_luar_kota">
                                        <div class="form-group">
                                            <label for="name">Berapa Nilai Radius (Termasuk Ongkos Kirim) ? (Silahkan Tanya Petugas Informasi)</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Rp.</span>
                                                </div>
                                                <input type="text" class="form-control" name="biaya_t2" id="biaya_t2" value="" placeholder="0">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>