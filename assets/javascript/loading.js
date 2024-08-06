document.addEventListener("DOMContentLoaded", function() {
    // Tampilkan layar loading saat DOM dimuat
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex';

    // Sembunyikan layar loading saat halaman dimuat sepenuhnya
    window.addEventListener("load", function() {
        loadingScreen.style.display = 'none';
    });
});