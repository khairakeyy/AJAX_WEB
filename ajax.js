$(document).ready(function(){
    $.ajax({
        url: 'toko_buku.json',
        dataType: 'json',
        success: function(data) {
            var informasiToko = '<p><strong>To:</strong> ' + data.to + '</p>' +
                                '<p><strong>From:</strong> ' + data.from + '</p>' +
                                '<p><strong>Heading:</strong> ' + data.heading + '</p>' +
                                '<p><strong>Body:</strong> ' + data.body + '</p>' +
                                '<div><h2>Informasi Toko Buku</h2>' +
                                '<p><strong>Nama Toko:</strong> ' + data.nama_toko + '</p>' +
                                '<p><strong>Pengarang:</strong> ' + data.pengarang + '</p>' +
                                '<p><strong>Alamat:</strong> ' + data.alamat + '</p></div>';
            $('#informasiToko').html(informasiToko);
            
            // Menampilkan koleksi buku dalam bentuk tabel
            var table = '<div><h2>Koleksi Buku</h2><table border="1"><tr><th>Judul</th><th>Tahun Terbit</th><th>Jumlah Halaman</th></tr>';
            $.each(data.koleksi_buku, function(key, value) {
                table += '<tr>';
                table += '<td>' + value.judul + '</td>';
                table += '<td>' + value.tahun_terbit + '</td>';
                table += '<td>' + value.jumlah_halaman + '</td>';
                table += '</tr>';
            });
            table += '</table></div>';
            $('#koleksiBuku').html(table);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.error(xhr, textStatus, errorThrown);
            $('#informasiToko').html('<p>Failed to load JSON data.</p>');
            $('#koleksiBuku').html('<p>Failed to load JSON data.</p>');
        }
    });
});
        