document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("article section");
    sections.forEach(section => {
        section.style.display = "none"; // sembunyikan semua bagian artikel
    });

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // mencegah default action dari link
            const targetId = this.getAttribute("href").substring(1); // dapatkan ID target dari link
            sections.forEach(section => {
                section.style.display = "none"; // sembunyikan semua bagian artikel
            });
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block"; // tampilkan bagian artikel yang dituju
            }
        });
    });
});
