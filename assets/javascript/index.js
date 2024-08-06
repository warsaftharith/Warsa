const slider = document.querySelector(".slider");

function activate(e) {
    const items = document.querySelectorAll(".item");
    e.target.matches(".next") && slider.prepend(items[items.length - 1]);
    e.target.matches(".prev") && slider.append(items[0]);
}

document.addEventListener("click", activate, false);

document.addEventListener('DOMContentLoaded', function() {
    var readMoreButtons = document.querySelectorAll('.read-more-last');

    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Dapatkan artikel box terkait
            var articleBox = this.nextElementSibling;

            // Tampilkan atau sembunyikan artikel box
            if (articleBox.style.display === 'none' || articleBox.style.display === '') {
                articleBox.style.display = 'block';
            } else {
                articleBox.style.display = 'none';
            }

            // Mengarahkan pengguna ke halaman lain saat tombol "Read More" diklik
            window.location.href = '/assets/Pink-Beach.html';
        });
    });
});

// salju
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.my-container');

    // Menentukan jumlah butiran salju berdasarkan lebar layar
    let numSnowflakes = 150; // Jumlah butiran salju default
    if (window.innerWidth <= 768) { // Lebar layar kurang dari atau sama dengan 768px (ponsel)
        numSnowflakes = 50; // Mengurangi jumlah butiran salju untuk layar yang lebih kecil
    }

    // Create snowflakes
    for (let i = 0; i < numSnowflakes; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; // Penyesuaian kecepatan jatuh
        snowflake.style.animationDelay = `${Math.random()}s`;
        container.appendChild(snowflake);
    }
});

// awan 
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.my-container');

    // awan kanan
    for (let i = 0; i < 3; i++) {
        let cloudRight = document.createElement('div');
        cloudRight.classList.add('cloud', 'cloud-right');
        cloudRight.style.top = `${Math.random() * 20 + 10}vh`;
        cloudRight.style.animationDuration = `${Math.random() * 20 + 20}s`; // Menetapkan rentang durasi yang lebih besar
        cloudRight.style.animationDelay = `${Math.random() * 5}s`; // Menetapkan rentang penundaan yang lebih kecil
        container.appendChild(cloudRight);
    }

    // awan kiri
    for (let i = 0; i < 3; i++) {
        let cloudLeft = document.createElement('div');
        cloudLeft.classList.add('cloud', 'cloud-left');
        cloudLeft.style.top = `${Math.random() * 20 + 10}vh`;
        cloudLeft.style.animationDuration = `${Math.random() * 20 + 20}s`; // Menetapkan rentang durasi yang lebih besar
        cloudLeft.style.animationDelay = `${Math.random() * 5}s`; // Menetapkan rentang penundaan yang lebih kecil
        container.appendChild(cloudLeft);
    }
});



