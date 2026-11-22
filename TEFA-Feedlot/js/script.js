// Navigasi Informasi
var tombol = document.getElementById("tombol-informasi");
var menu = document.getElementById("menu-informasi");

// tombol buka tutup
tombol.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("buka");
});

// tombol tutup(saat pencet di luar)
document.addEventListener("click", function () {
  menu.classList.remove("buka");
});

// Link Navigasi di halaman mana
const halamanIni = window.location.pathname.split("/").pop() || "beranda.html";

document.querySelectorAll(".menu > li > a").forEach(function (link) {
  if (link.getAttribute("href") === halamanIni) {
    link.classList.add("aktif");
  }
});
