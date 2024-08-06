// script.js

function showCvPopup() {
    var cvPopup = document.getElementById('cvPopup');
    cvPopup.classList.add('show');
}

function closeCvPopup() {
    var cvPopup = document.getElementById('cvPopup');
    cvPopup.classList.remove('show');
}

document.getElementById('showCvButton').addEventListener('click', function() {
    showCvPopup();
});

document.getElementById('closeButton').addEventListener('click', function() {
    closeCvPopup();
});

document.getElementById('cvPopup').addEventListener('click', function(event) {
    if (event.target === this) {
        closeCvPopup();
    }
});

const contactForm = document.getElementById("contactForm");
const sendButton = document.getElementById("sendButton");
const sendIcon = document.getElementById("sendIcon");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Menampilkan ikon loading dan mengganti teks tombol
    sendIcon.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 10px;"></i>';
    sendButton.disabled = true; // Menonaktifkan tombol selama pengiriman

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(() => {
        // Mengganti ikon loading dan mengaktifkan kembali tombol
        sendIcon.innerHTML = '<i class="fas fa-check" style="margin-right: 10px;"></i>';
        sendButton.disabled = false;

        // Mengganti elemen form dengan pesan sukses atau menavigasi ke halaman baru
        window.location.href = "/assets/thankyou.html";
    })
    .catch((error) => {
        // Mengganti ikon loading dan mengaktifkan kembali tombol
        sendIcon.innerHTML = '<i class="fas fa-exclamation-triangle" style="margin-right: 10px;"></i>';
        sendButton.disabled = false;

        alert("An error occurred: " + error.message);
    });
});

// Ambil tombol dengan class info-button
var button = document.querySelector('.info-button');
// Ambil elemen main
var mainElement = document.querySelector('main');
// Tambahkan event listener untuk mendeteksi klik pada tombol
button.addEventListener('click', function(event) {
    // Hentikan perilaku default dari tautan
    event.preventDefault();
    // Gulir halaman ke bagian main dengan efek smooth scroll menggunakan jQuery
    $('html, body').animate({
        scrollTop: $(mainElement).offset().top
    }, 1000);
});



