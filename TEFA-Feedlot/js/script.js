// Navigasi Informasi
var tombol = document.getElementById("tombol-informasi");
var menu = document.getElementById("menu-informasi");
console.log(tombol, menu);

// tombol buka tutup
tombol.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("buka");
});

// tombol tutup(saat pencet di luar)
document.addEventListener("click", function () {
  menu.classList.remove("buka");
});

// Menu Pop Up

const kartu = document.querySelectorAll(".layanan-card");

kartu.forEach(function (k) {
  k.addEventListener("click", function () {
    const idPopup = k.getAttribute("data-popup");
    const popup = document.getElementById(idPopup);
    popup.classList.add("buka");
  });
});

const TombolTutup = document.querySelectorAll(".popup-tutup");

TombolTutup.forEach(function (t) {
  t.addEventListener("click", function () {
    t.closest(".popup-overlay").classList.remove("buka");
  });
});

const semuaOverlay = document.querySelectorAll(".popup-overlay");

semuaOverlay.forEach(function (o) {
  o.addEventListener("click", function (e) {
    if (e.target === o) {
      o.classList.remove("buka");
    }
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    semuaOverlay.forEach(function (o) {
      o.classList.remove("buka");
    });
  }
});

// Link Navigasi di halaman mana
const halamanIni = window.location.pathname.split("/").pop() || "beranda.html";

document.querySelectorAll(".menu > li > a").forEach(function (link) {
  if (link.getAttribute("href") === halamanIni) {
    link.classList.add("aktif");
  }
});
