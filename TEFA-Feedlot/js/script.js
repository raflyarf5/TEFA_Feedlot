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
