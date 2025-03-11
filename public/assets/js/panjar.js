var dataPemohon = [
    [1, '', '', '', '', '']
];

$( document ).ready(function() {

    // START case pertama ==================================================

    $('#daerah_p1').on('change', function (e) {
        var daerah_p1 = $("option:selected", this);
        if(daerah_p1.val() == 'p1_dalam_kota') {
            if($('#p1_dalam_kota').hasClass('hidden')) {
                $('#p1_dalam_kota').removeClass('hidden');
                $('#biaya_p1').val('');
            }
            if(!$('#p1_luar_kota').hasClass('hidden')) {
                $('#p1_luar_kota').addClass('hidden');
            }
        } else if(daerah_p1.val() == 'p1_luar_kota') {
            if($('#p1_luar_kota').hasClass('hidden')) {
                $('#p1_luar_kota').removeClass('hidden');
                $("#kecamatan_p1 option:selected").prop("selected", false);
                $("#kelurahan_p1 option:selected").prop("selected", false);
            }
            if(!$('#p1_dalam_kota').hasClass('hidden')) {
                $('#p1_dalam_kota').addClass('hidden');
            }
            if(!$('#p1_kelurahan').hasClass('hidden')) {
                $('#p1_kelurahan').addClass('hidden');
            }
        } else {
            $('#biaya_p1').val('');
            $("#kecamatan_p1 option:selected").prop("selected", false);
            $("#kelurahan_p1 option:selected").prop("selected", false);
            if(!$('#p1_dalam_kota').hasClass('hidden')) {
                $('#p1_dalam_kota').addClass('hidden');
            }
            if(!$('#p1_luar_kota').hasClass('hidden')) {
                $('#p1_luar_kota').addClass('hidden');
            }
        }
    });

    $('#daerah_t1').on('change', function (e) {
        var daerah_t1 = $("option:selected", this);
        if(daerah_t1.val() == 't1_dalam_kota') {
            if($('#t1_dalam_kota').hasClass('hidden')) {
                $('#t1_dalam_kota').removeClass('hidden');
                $('#biaya_t1').val('');
            }
            if(!$('#t1_luar_kota').hasClass('hidden')) {
                $('#t1_luar_kota').addClass('hidden');
            }
        } else if(daerah_t1.val() == 't1_luar_kota') {
            if($('#t1_luar_kota').hasClass('hidden')) {
                $('#t1_luar_kota').removeClass('hidden');
                $("#kecamatan_t1 option:selected").prop("selected", false);
                $("#kelurahan_t1 option:selected").prop("selected", false);
            }
            if(!$('#t1_dalam_kota').hasClass('hidden')) {
                $('#t1_dalam_kota').addClass('hidden');
            }
            if(!$('#t1_kelurahan').hasClass('hidden')) {
                $('#t1_kelurahan').addClass('hidden');
            }
        } else {
            $('#biaya_t1').val('');
            $("#kecamatan_t1 option:selected").prop("selected", false);
            $("#kelurahan_t1 option:selected").prop("selected", false);
            if(!$('#t1_dalam_kota').hasClass('hidden')) {
                $('#t1_dalam_kota').addClass('hidden');
            }
            if(!$('#t1_luar_kota').hasClass('hidden')) {
                $('#t1_luar_kota').addClass('hidden');
            }
        }
    });

    $('#kecamatan_p1').on('change', function (e) {
        var kecamatan_p1 = $("option:selected", this);
        $.ajax({
            type : "post",
            data: {
                id_kec: kecamatan_p1.val()
            },
            dataType:'json',
            url: 'panjar/kelurahan',
            cache : false,
            success : function(response) {
                setSelectKelP1(response);
            },
            error: function() {
                alert("error");
            }
        });        
        return false;
    });

    $('#kecamatan_t1').on('change', function (e) {
        var kecamatan_t1 = $("option:selected", this);
        $.ajax({
            type : "post",
            data: {
                id_kec: kecamatan_t1.val()
            },
            dataType:'json',
            url: 'panjar/kelurahan',
            cache : false,
            success : function(response) {
                setSelectKelT1(response);
            },
            error: function() {
                alert("error");
            }
        });        
        return false;
    });

    $('#kelurahan_p1').on('change', function (e) {
        var kelurahan_p1 = $("option:selected", this);
        $.ajax({
            type : "post",
            data: {
                id_kel: kelurahan_p1.val()
            },
            dataType:'json',
            url: 'panjar/biaya',
            cache : false,
            success : function(response) {
                $('#hitung_lokasi_p1').text('Kelurahan ' + response.nama_kel + ' Kecamatan ' + response.nama_kec);
                $('#hitung_biaya_p1').text('Rp.' + formatUang(String(response.nilai_radius)));
                $('#hitung_total_2x_p1').text(formatUang(String(parseInt(response.nilai_radius) * 2)));
            },
            error: function() {
                alert("error");
            }
        });        
        return false;
    });

    $('#kelurahan_t1').on('change', function (e) {
        var kelurahan_t1 = $("option:selected", this);
        $.ajax({
            type : "post",
            data: {
                id_kel: kelurahan_t1.val()
            },
            dataType:'json',
            url: 'panjar/biaya',
            cache : false,
            success : function(response) {
                $('#hitung_lokasi_t1').text('Kelurahan ' + response.nama_kel + ' Kecamatan ' + response.nama_kec);
                $('#hitung_lokasi_t12').text('Kelurahan ' + response.nama_kel + ' Kecamatan ' + response.nama_kec);
                $('#hitung_biaya_t1').text('Rp.' + response.nilai_radius);
                $('#hitung_biaya_t12').text('Rp.' + response.nilai_radius);
                $('#hitung_total_3x_t1').text(formatUang(String(parseInt(response.nilai_radius) * 3)));
                $('#hitung_total_1x_t12').text(formatUang(String(parseInt(response.nilai_radius) * 1)));
            },
            error: function() {
                alert("error");
            }
        });        
        return false;
    });

    // END case pertama ==================================================

    // START case kedua ==================================================

    $('#daerah_p2').on('change', function (e) {
        var daerah_p2 = $("option:selected", this);
        if(daerah_p2.val() == 'p2_dalam_kota') {
            if($('#p2_dalam_kota').hasClass('hidden')) {
                $('#p2_dalam_kota').removeClass('hidden');
                $('#biaya_p2').val('');
            }
            if(!$('#p2_luar_kota').hasClass('hidden')) {
                $('#p2_luar_kota').addClass('hidden');
            }
        } else if(daerah_p2.val() == 'p2_luar_kota') {
            if($('#p2_luar_kota').hasClass('hidden')) {
                $('#p2_luar_kota').removeClass('hidden');
                $("#kecamatan_p2 option:selected").prop("selected", false);
                $("#kelurahan_p2 option:selected").prop("selected", false);
            }
            if(!$('#p2_dalam_kota').hasClass('hidden')) {
                $('#p2_dalam_kota').addClass('hidden');
            }
            if(!$('#p2_kelurahan').hasClass('hidden')) {
                $('#p2_kelurahan').addClass('hidden');
            }
        } else {
            $('#biaya_p2').val('');
            $("#kecamatan_p2 option:selected").prop("selected", false);
            $("#kelurahan_p2 option:selected").prop("selected", false);
            if(!$('#p2_dalam_kota').hasClass('hidden')) {
                $('#p2_dalam_kota').addClass('hidden');
            }
            if(!$('#p2_luar_kota').hasClass('hidden')) {
                $('#p2_luar_kota').addClass('hidden');
            }
        }
    });

    $('#daerah_t2').on('change', function (e) {
        var daerah_t2 = $("option:selected", this);
        if(daerah_t2.val() == 't2_dalam_kota') {
            if($('#t2_dalam_kota').hasClass('hidden')) {
                $('#t2_dalam_kota').removeClass('hidden');
                $('#biaya_t2').val('');
            }
            if(!$('#t2_luar_kota').hasClass('hidden')) {
                $('#t2_luar_kota').addClass('hidden');
            }
        } else if(daerah_t2.val() == 't2_luar_kota') {
            if($('#t2_luar_kota').hasClass('hidden')) {
                $('#t2_luar_kota').removeClass('hidden');
                $("#kecamatan_t2 option:selected").prop("selected", false);
                $("#kelurahan_t2 option:selected").prop("selected", false);
            }
            if(!$('#t2_dalam_kota').hasClass('hidden')) {
                $('#t2_dalam_kota').addClass('hidden');
            }
            if(!$('#t2_kelurahan').hasClass('hidden')) {
                $('#t2_kelurahan').addClass('hidden');
            }
        } else {
            $('#biaya_t2').val('');
            $("#kecamatan_t2 option:selected").prop("selected", false);
            $("#kelurahan_t2 option:selected").prop("selected", false);
            if(!$('#t2_dalam_kota').hasClass('hidden')) {
                $('#t2_dalam_kota').addClass('hidden');
            }
            if(!$('#t2_luar_kota').hasClass('hidden')) {
                $('#t2_luar_kota').addClass('hidden');
            }
        }
    });

    $('#kecamatan_p2').on('change', function (e) {
        var kecamatan_p2 = $("option:selected", this);
        $.ajax({
            type : "post",
            data: {
                id_kec: kecamatan_p2.val()
            },
            dataType:'json',
            url: 'panjar/kelurahan',
            cache : false,
            success : function(response) {
                setSelectKelP2(response);
            },
            error: function() {
                alert("error");
            }
        });        
        return false;
    });

    $('#kecamatan_t2').on('change', function (e) {
        var kecamatan_t2 = $("option:selected", this);
        $.ajax({
            type : "post",
            data: {
                id_kec: kecamatan_t2.val()
            },
            dataType:'json',
            url: 'panjar/kelurahan',
            cache : false,
            success : function(response) {
                setSelectKelT2(response);
            },
            error: function() {
                alert("error");
            }
        });        
        return false;
    });

    $('#kelurahan_p2').on('change', function (e) {
        var kelurahan_p2 = $("option:selected", this);
        $.ajax({
            type : "post",
            data: {
                id_kel: kelurahan_p2.val()
            },
            dataType:'json',
            url: 'panjar/biaya',
            cache : false,
            success : function(response) {
                $('#hitung_lokasi_p2').text('Kelurahan ' + response.nama_kel + ' Kecamatan ' + response.nama_kec);
                $('#hitung_biaya_p2').text('Rp.' + formatUang(String(response.nilai_radius)));
                $('#hitung_total_2x_p2').text(formatUang(String(parseInt(response.nilai_radius) * 2)));
            },
            error: function() {
                alert("error");
            }
        });        
        return false;
    });

    $('#kelurahan_t2').on('change', function (e) {
        var kelurahan_t2 = $("option:selected", this);
        $.ajax({
            type : "post",
            data: {
                id_kel: kelurahan_t2.val()
            },
            dataType:'json',
            url: 'panjar/biaya',
            cache : false,
            success : function(response) {
                $('#hitung_lokasi_t2').text('Kelurahan ' + response.nama_kel + ' Kecamatan ' + response.nama_kec);
                $('#hitung_lokasi_t22').text('Kelurahan ' + response.nama_kel + ' Kecamatan ' + response.nama_kec);
                $('#hitung_biaya_t2').text('Rp.' + response.nilai_radius);
                $('#hitung_biaya_t22').text('Rp.' + response.nilai_radius);
                 $('#hitung_total_3x_t2').text(formatUang(String(parseInt(response.nilai_radius) * 3)));
                $('#hitung_total_1x_t22').text(formatUang(String(parseInt(response.nilai_radius) * 1)));
            },
            error: function() {
                alert("error");
            }
        });
        return false;
    });

    // END case kedua ==================================================

    // START case ketiga ==================================================

    $('#btn_tambah_pemohon').on('click', function() {
        newNumPemohon = dataPemohon.length + 1;
        $('#data_pemohon_permohonan').append($('<div>').addClass('card mb-3 mt-3').attr('id', 'pemohon' + newNumPemohon));
        $('.form-element-pemohon').eq(0).clone().appendTo( '#pemohon' + newNumPemohon);
        $('#pemohon' + newNumPemohon).find('.card-header').text('Data Pemohon ' + newNumPemohon);
        $('#pemohon' + newNumPemohon).find('#p3_dalam_kota1').attr('id', 'p3_dalam_kota' + newNumPemohon);
        $('#pemohon' + newNumPemohon).find('#p3_kelurahan1').attr('id', 'p3_kelurahan' + newNumPemohon);
        $('#pemohon' + newNumPemohon).find('#p3_luar_kota1').attr('id', 'p3_luar_kota' + newNumPemohon);
        $('#pemohon' + newNumPemohon).find('#daerah_p31').attr('id', 'daerah_p3' + newNumPemohon).attr('name', 'daerah_p3' + newNumPemohon);
        $('#pemohon' + newNumPemohon).find('#kecamatan_p31').attr('id', 'kecamatan_p3' + newNumPemohon).attr('name', 'kecamatan_p3' + newNumPemohon);
        $('#pemohon' + newNumPemohon).find('#kelurahan_p31').attr('id', 'kelurahan_p3' + newNumPemohon).attr('name', 'kelurahan_p3' + newNumPemohon);
        $('#pemohon' + newNumPemohon).find('#biaya_p31').attr('id', 'biaya_p3' + newNumPemohon).attr('name', 'biaya_p3' + newNumPemohon).val('');
        if(!$('#pemohon' + newNumPemohon).find('#p3_dalam_kota' + newNumPemohon).hasClass('hidden')) {
            $('#pemohon' + newNumPemohon).find('#p3_dalam_kota' + newNumPemohon).addClass('hidden')
        }
        if(!$('#pemohon' + newNumPemohon).find('#p3_kelurahan' + newNumPemohon).hasClass('hidden')) {
            $('#pemohon' + newNumPemohon).find('#p3_kelurahan' + newNumPemohon).addClass('hidden')
        }
        if(!$('#pemohon' + newNumPemohon).find('#p3_luar_kota' + newNumPemohon).hasClass('hidden')) {
            $('#pemohon' + newNumPemohon).find('#p3_luar_kota' + newNumPemohon).addClass('hidden')
        }
        dataPemohon.push([newNumPemohon, '', '', '', '', '']);
    });

    $('#btn_hapus_pemohon').on('click', function() {
        lastNumPemohon = dataPemohon.length;
        if(lastNumPemohon != 1) {
            $('#pemohon' + lastNumPemohon).remove();
            dataPemohon.pop();
        }
    });

    $(document).on('change', '.select-daerah-pemohon', function () {
        var daerah_p3 = $(this).val();
        var getNumPemohon = $(this).attr('id').slice(-1);

        if(daerah_p3 == 'p3_dalam_kota') {
            if($('#p3_dalam_kota' + getNumPemohon).hasClass('hidden')) {
                $('#p3_dalam_kota' + getNumPemohon).removeClass('hidden');
                $('#biaya_p3' + getNumPemohon).val('');
            }
            if(!$('#p3_luar_kota' + getNumPemohon).hasClass('hidden')) {
                $('#p3_luar_kota' + getNumPemohon).addClass('hidden');
            }
        } else if(daerah_p3 == 'p3_luar_kota') {
            if($('#p3_luar_kota' + getNumPemohon).hasClass('hidden')) {
                $('#p3_luar_kota' + getNumPemohon).removeClass('hidden');
                $('#kecamatan_p3' + getNumPemohon +' option:selected').prop('selected', false)
                $('#kelurahan_p3' + getNumPemohon +' option:selected').prop('selected', false)
            }
            if(!$('#p3_dalam_kota' + getNumPemohon).hasClass('hidden')) {
                $('#p3_dalam_kota' + getNumPemohon).addClass('hidden');
            }
            if(!$('#p3_kelurahan' + getNumPemohon).hasClass('hidden')) {
                $('#p3_kelurahan' + getNumPemohon).addClass('hidden');
            }
        } else {
            $('#biaya_p3' + getNumPemohon).val('');
            $('#kecamatan_p3' + getNumPemohon + ' option:selected').prop('selected', false);
            $('#kelurahan_p3' + getNumPemohon + ' option:selected').prop('selected', false);
            if(!$('#p3_dalam_kota' + getNumPemohon).hasClass('hidden')) {
                $('#p3_dalam_kota' + getNumPemohon).addClass('hidden');
            }
            if(!$('#p3_luar_kota' + getNumPemohon).hasClass('hidden')) {
                $('#p3_luar_kota' + getNumPemohon).addClass('hidden');
            }
        }
    });

    $(document).on('change', '.select-kecamatan-pemohon', function () {
        var kecamatan_p3 = $(this).val();
        var getNumPemohon = $(this).attr('id').slice(-1);
        dataPemohon[parseInt(getNumPemohon) - 1][1] = $('option:selected', this).text();

        $.ajax({
            type : "post",
            data: {
                id_kec: kecamatan_p3
            },
            dataType:'json',
            url: 'panjar/kelurahan',
            cache : false,
            success : function(response) {
                setSelectKelP3(response, getNumPemohon);
            },
            error: function() {
                alert("error");
            }
        });        
        return false;
    });

    $(document).on('change', '.select-kelurahan-pemohon', function () {
        var kelurahan_p3 = $(this).val();
        var getNumPemohon = $(this).attr('id').slice(-1);
        dataPemohon[parseInt(getNumPemohon) - 1][2] = $('option:selected', this).text();

        $.ajax({
            type : "post",
            data: {
                id_kel: kelurahan_p3
            },
            dataType:'json',
            url: 'panjar/biaya',
            cache : false,
            success : function(response) {
                dataPemohon[parseInt(getNumPemohon) - 1][3] = response.nilai_radius;
                dataPemohon[parseInt(getNumPemohon) - 1][4] = 1;
                dataPemohon[parseInt(getNumPemohon) - 1][5] = String(response.nilai_radius * 2);
            },
            error: function() {
                alert("error");
            }
        });        
        return false;
    });

    // END case ketiga ==================================================

    // START hitung panjar ====================================================

     

    $('#btn_print_panjar1').on('click', function() {
        printElement(document.getElementById("printThis1"));
    });

    $('#btn_print_panjar2').on('click', function() {
        printElement(document.getElementById("printThis2"));
    });

    $('#btn_print_panjar3').on('click', function() {
        printElement(document.getElementById("printThis3"));
    });

    // END hitung panjar ====================================================

    // START realtime update input manual ====================================================
    
    $("#biaya_p1").keyup(function() {
        this.value = formatUang(this.value);
        $('#hitung_total_2x_p1').text(formatUang(String(this.value.split('.').join("") * 2)));
    });
    
    $("#biaya_t1").keyup(function() {
        this.value = formatUang(this.value);
        $('#hitung_total_3x_t1').text(formatUang(String(this.value.split('.').join("") * 3)));
        $('#hitung_total_1x_t12').text(formatUang(String(this.value.split('.').join(""))));
    });
    
    $("#biaya_p2").keyup(function() {
        this.value = formatUang(this.value);
        $('#hitung_total_2x_p2').text(formatUang(String(this.value.split('.').join("") * 2)));
    });
    
    $("#biaya_t2").keyup(function() {
        this.value = formatUang(this.value);
        $('#hitung_total_3x_t2').text(formatUang(String(this.value.split('.').join("") * 3)));
        $('#hitung_total_1x_t22').text(formatUang(String(this.value.split('.').join(""))));
    });

    $(document).on('keyup', '.input-biaya-pemohon', function () {
        var daerah_p3 = $(this).val();
        var getNumPemohon = $(this).attr('id').slice(-1);
        dataPemohon[parseInt(getNumPemohon) - 1][1] = 'Luar ' + $('#nama_kabupaten_konfigurasi').val();
        dataPemohon[parseInt(getNumPemohon) - 1][3] = daerah_p3.replace(/\./g, '');
        dataPemohon[parseInt(getNumPemohon) - 1][4] = 2;
        dataPemohon[parseInt(getNumPemohon) - 1][5] = String(parseInt(daerah_p3.replace(/\./g, '')) * 2);
        $(this).val(formatUang($(this).val()));
    });

    // END realtime update input manual ====================================================
});

// START functionc case pertama ==================================================

function setSelectKelP1(data) {
    if(data.length < 1) {
        var kecamatan_p1 = $('#kelurahan_p1');
        kecamatan_p1.empty();
        kecamatan_p1.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        if(!$('#p1_kelurahan').hasClass('hidden')) {
            $('#p1_kelurahan').addClass('hidden');
        }
    } else {
        var kecamatan_p1 = $('#kelurahan_p1');
        kecamatan_p1.empty();
        kecamatan_p1.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        $.each(data, function (i, data) {
            $('<option>', {
                value: data.id_kel,
                text: data.nama_kel
            }).html(data.nama_kel).appendTo("#kelurahan_p1");
        });
        if($('#p1_kelurahan').hasClass('hidden')) {
            $('#p1_kelurahan').removeClass('hidden');
        }
    }
}

function setSelectKelT1(data) {
    if(data.length < 1) {
        var kecamatan_t1 = $('#kelurahan_t1');
        kecamatan_t1.empty();
        kecamatan_t1.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        if(!$('#t1_kelurahan').hasClass('hidden')) {
            $('#t1_kelurahan').addClass('hidden');
        }
    } else {
        var kecamatan_t1 = $('#kelurahan_t1');
        kecamatan_t1.empty();
        kecamatan_t1.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        $.each(data, function (i, data) {
            $('<option>', {
                value: data.id_kel,
                text: data.nama_kel
            }).html(data.nama_kel).appendTo("#kelurahan_t1");
        });
        if($('#t1_kelurahan').hasClass('hidden')) {
            $('#t1_kelurahan').removeClass('hidden');
        }
    }
}

// END functionc case pertama ==================================================

// START functionc case kedua ==================================================

function setSelectKelP2(data) {
    if(data.length < 1) {
        var kecamatan_p2 = $('#kelurahan_p2');
        kecamatan_p2.empty();
        kecamatan_p2.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        if(!$('#p2_kelurahan').hasClass('hidden')) {
            $('#p2_kelurahan').addClass('hidden');
        }
    } else {
        var kecamatan_p2 = $('#kelurahan_p2');
        kecamatan_p2.empty();
        kecamatan_p2.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        $.each(data, function (i, data) {
            $('<option>', {
                value: data.id_kel,
                text: data.nama_kel
            }).html(data.nama_kel).appendTo("#kelurahan_p2");
        });
        if($('#p2_kelurahan').hasClass('hidden')) {
            $('#p2_kelurahan').removeClass('hidden');
        }
    }
}

function setSelectKelT2(data) {
    if(data.length < 1) {
        var kecamatan_t2 = $('#kelurahan_t2');
        kecamatan_t2.empty();
        kecamatan_t2.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        if(!$('#t2_kelurahan').hasClass('hidden')) {
            $('#t2_kelurahan').addClass('hidden');
        }
    } else {
        var kecamatan_t2 = $('#kelurahan_t2');
        kecamatan_t2.empty();
        kecamatan_t2.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        $.each(data, function (i, data) {
            $('<option>', {
                value: data.id_kel,
                text: data.nama_kel
            }).html(data.nama_kel).appendTo("#kelurahan_t2");
        });
        if($('#t2_kelurahan').hasClass('hidden')) {
            $('#t2_kelurahan').removeClass('hidden');
        }
    }
}

// END functionc case kedua ==================================================

// START functionc case ketiga ==================================================

function setSelectKelP3(data, numPemohon) {
    if(data.length < 1) {
        var kecamatan_p3 = $('#kelurahan_p3' + numPemohon);
        kecamatan_p3.empty();
        kecamatan_p3.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        if(!$('#p3_kelurahan' + numPemohon).hasClass('hidden')) {
            $('#p3_kelurahan' + numPemohon).addClass('hidden');
        }
    } else {
        var kecamatan_p3 = $('#kelurahan_p3' + numPemohon);
        kecamatan_p3.empty();
        kecamatan_p3.append('<option value="">-- Pilih Kelurahan/Desa --</option>');
        $.each(data, function (i, data) {
            $('<option>', {
                value: data.id_kel,
                text: data.nama_kel
            }).html(data.nama_kel).appendTo('#kelurahan_p3' + numPemohon);
        });
        if($('#p3_kelurahan' + numPemohon).hasClass('hidden')) {
            $('#p3_kelurahan' + numPemohon).removeClass('hidden');
        }
    }
}

// END functionc case ketiga ==================================================

// START hitung panjar function

function hitungPanjar1() {
    var hitung1_1 = removeDot($('#hitung1_1').text());
    var hitung1_2 = removeDot($('#hitung1_2').text());
    var hitung1_3 = removeDot($('#hitung1_3').text());
    var hitung1_4 = removeDot($('#hitung1_4').text());
    var hitung1_5 = removeDot($('#hitung1_5').text());
    var hitung1_6 = removeDot($('#hitung1_6').text());
    var hitung1_7 = removeDot($('#hitung1_7').text());
    var hitung_total_2x_p1 = removeDot($('#hitung_total_2x_p1').text());
    var hitung_total_3x_t1 = removeDot($('#hitung_total_3x_t1').text());
    var hitung_total_1x_t12 = removeDot($('#hitung_total_1x_t12').text());

    if(hitung_total_2x_p1 >= (hitung_total_1x_t12 * 2)) {
        var hitung_tp1 = hitung_total_2x_p1
        $('#hitung_biaya_tp1').text(formatUang(String(hitung_tp1)));
    } else {
        var hitung_tp1 = hitung_total_1x_t12 * 2
        $('#hitung_biaya_tp1').text(formatUang(String(hitung_tp1)));
    }

    var total = hitung1_1 + hitung1_2 + hitung1_3 + hitung1_4 + hitung1_5 + hitung1_6 + hitung1_7 + hitung_total_2x_p1 + hitung_total_3x_t1 + hitung_total_1x_t12 + hitung_tp1;
    $('#hitung_total_semua1').text(formatUang(String(total)));
}

function hitungPanjar2() {
    var hitung2_1 = removeDot($('#hitung2_1').text());
    var hitung2_2 = removeDot($('#hitung2_2').text());
    var hitung2_3 = removeDot($('#hitung2_3').text());
    var hitung2_4 = removeDot($('#hitung2_4').text());
    var hitung2_5 = removeDot($('#hitung2_5').text());
    var hitung2_6 = removeDot($('#hitung2_6').text());
    var hitung2_7 = removeDot($('#hitung2_7').text());
    var hitung_total_2x_p2 = removeDot($('#hitung_total_2x_p2').text());
    var hitung_total_3x_t2 = removeDot($('#hitung_total_3x_t2').text());
    var hitung_total_1x_t22 = removeDot($('#hitung_total_1x_t22').text());

    var total = hitung2_1 + hitung2_2 + hitung2_3 + hitung2_4 + hitung2_5 + hitung2_6 + hitung2_7 + hitung_total_2x_p2 + hitung_total_3x_t2 + hitung_total_1x_t22;
    $('#hitung_total_semua2').text(formatUang(String(total)));
}

// END hitung panjar function

function removeDot(data) {
    return parseInt(data.replace(/\./g, ''));
}

function printElement(elem) {
    var domClone = elem.cloneNode(true);
    
    var $printSection = document.getElementById("printSection");
    
    if (!$printSection) {
        var $printSection = document.createElement("div");
        $printSection.id = "printSection";
        document.body.appendChild($printSection);
    }
    
    $printSection.innerHTML = '<div style="width: 700px !important;"><p class=".float-md-right">' + $('#judul_website_konfigurasi').val() + '</p></div>';
    $printSection.appendChild(domClone);
    window.print();
}

function formatUang(angka) {
	var number_string = angka.replace(/[^,\d]/g, '').toString(),
	split   		= number_string.split(','),
	sisa     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, sisa),
	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
	if(ribuan){
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}
 
	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return rupiah;
}

function calculatePanjarPermohonan(callback) {
    var pemanggilanPemohon = 0;
    var totalPay = 0;

    console.log(dataPemohon);

    $.each(dataPemohon ,function(index, data) {
        if(data[3] != '') {
            pemanggilanPemohon += parseInt(data[5]);
        } else {
            if($('#card_error3').hasClass('hidden')) {
                $('#card_error3').removeClass('hidden');
            }
            $('#card_message_error3').empty();
            $('#card_message_error3').append($('<ul>').append($('<li>').text('Data Pemohon ' + data[0] + ' kurang lengkap!')));

            die();
        }
    });
    $('.total-pemohon-text').text(dataPemohon.length);
    $('#hitung_total_p3').text(formatUang(String(pemanggilanPemohon)));
    $('#hitung3_5').text(formatUang(String(dataPemohon.length * parseInt($('#nilai_pnbp_p_konfigurasi').val()))));
    $('.value-count-panjar-permohonan').each(function(index, data) {
        totalPay += parseInt(removeDot($('.value-count-panjar-permohonan').eq(index).text()));
    });
    $('#hitung_total_semua3').text(formatUang(String(totalPay)));

    callback();
}

function createViewPemohon(callback) {
    $('#hitung_biaya_p3').html('');
    $.each(dataPemohon ,function(index, data) {
        var nomorPemohon = index + 1;
        $('#hitung_biaya_p3').append(
            $('<tr>').addClass('change-font2').append(
                $('<td>').text('Pemohon ' + nomorPemohon + ' (2x Panggilan)')
            ).append(
                $('<td>').text(data[5])
            ).append(
                $('<td>').text(' ')
            ).append(
                $('<td>').text(' ')
            )
        )
    });

    callback()
}

function showTheModalPermohonan() {
    $('#hitungPanjarModal3').modal();
    if(!$('#card_error3').hasClass('hidden')) {
        $('#card_error3').addClass('hidden');
    }
}