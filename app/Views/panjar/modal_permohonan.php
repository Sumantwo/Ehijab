<div class="modal fade" id="hitungPanjarModal3" tabindex="-1" aria-labelledby="hitungPanjarModal3" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div id="printThis3" style="width: 100%">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-header">
                    <div class="row" style="margin-bottom: 20px; width: 100%;">
                        <div class="col-md-3">
                            <center><img src="<?=base_url('assets/img/general');?>/logo-satker.png" alt="" width="70"></center>
                        </div>
                        <div class="col-md-9">
                            <h4 style="margin-top: 0px !important; margin-bottom: 0px !important;"><center><?=$konfigurasi[4]['nilai_konfigurasi'];?></center></h4>
                            <h5 style="margin-top: 0px !important; margin-bottom: 0px !important;"><center>Jl.Sekartaji No.12 Kediri</center></h5>
                            <center>
                                <p style="margin-top: 0px !important; margin-bottom: 0px !important; font-size: 12px;">Telp/Fax (0354) 682175/681045 Kode Pos 64101</p>
                                <p style="margin-top: 0px !important; margin-bottom: 0px !important;"> E-mail : pa.kabkediri@gmail.com</p>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <h5>Rincian Biaya Panjar Permohonan</h5>                                                                                            
                    <table class="table change-font">
                        <tbody>
                            <tr>
                                <td colspan="2"><?=$konfigurasi[6]['nama_konfigurasi'];?></td>
                                <td>Rp.</td>
                                <td class="value-count-panjar-permohonan" id="hitung3_1"><?=converToMoneyFormat((int) $konfigurasi[6]['nilai_konfigurasi']);?></td>
                            </tr>
                            <tr>
                                <td colspan="2"><?=$konfigurasi[7]['nama_konfigurasi'];?></td>
                                <td>Rp.</td>
                                <td class="value-count-panjar-permohonan" id="hitung3_2"><?=converToMoneyFormat((int) $konfigurasi[7]['nilai_konfigurasi']);?></td>
                            </tr>
                            <tr>
                                <td colspan="2">Panggilan Pemohon (<span class="total-pemohon-text">0</span>x Panggilan)</td>
                                <td>Rp.</td>
                                <td class="value-count-panjar-permohonan" id="hitung_total_p3">0</td>
                            </tr>
                            <tr class="change-font2">
                                <td>Besarnya</td>
                                <td id="hitung_biaya_p3">-</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="2"><?=$konfigurasi[8]['nama_konfigurasi'];?></td>
                                <td>Rp.</td>
                                <td class="value-count-panjar-permohonan" id="hitung3_3"><?=converToMoneyFormat((int) $konfigurasi[8]['nilai_konfigurasi']);?></td>
                            </tr>
                            <tr>
                                <td colspan="2"><?=$konfigurasi[9]['nama_konfigurasi'];?></td>
                                <td>Rp.</td>
                                <td class="value-count-panjar-permohonan" id="hitung3_4"><?=converToMoneyFormat((int) $konfigurasi[9]['nilai_konfigurasi']);?></td>
                            </tr>
                            <tr>
                                <td colspan="2"><?=$konfigurasi[10]['nama_konfigurasi'];?> (<span class="total-pemohon-text">0</span>x Panggilan)</td>
                                <td>Rp.</td>
                                <td class="value-count-panjar-permohonan" id="hitung3_5"><?=converToMoneyFormat((int) $konfigurasi[10]['nilai_konfigurasi']);?></td>
                            </tr>
                            <tr class="change-font3">
                                <td colspan="2">Jumlah Total Biaya Panjar</td>
                                <td>Rp.</td>
                                <td id="hitung_total_semua3">0</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="row">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-4">
                            <p>Kediri,</p>
                            <p>Meja 1</p>
                            <br>
                            <br>
                            <p>(KASIR)</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="btn_print_panjar3">Print</button>
                </div>
            </div>
        </div>
    </div>
</div>