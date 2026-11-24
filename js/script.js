// Link Navigasi di halaman mana
const halamanIni = window.location.pathname.split("/").pop() || "beranda.html";

document
  .querySelectorAll(".navbar-nav > .nav-item > a.nav-link")
  .forEach(function (link) {
    if (link.getAttribute("href") === halamanIni) {
      link.classList.add("aktif");
      link.setAttribute("aria-current", "page");
    }
  });
