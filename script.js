function openCloseMenu() {
  menu = document.querySelector(".menu-button");
  body = document.querySelector("body");

  body.classList.toggle("menu-open");

  if (
    menu.attributes.src.value === "./assets/menu-buguer-open.svg" &&
    menu.attributes.alt.value === "Menu fechado"
  ) {
    menu.setAttribute("src", "./assets/menu-buguer-close.svg") &&
      menu.setAttribute("alt", "Menu aberto");
  } else {
    menu.setAttribute("src", "./assets/menu-buguer-open.svg") &&
      menu.setAttribute("alt", "Menu fechado");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  logo = document.querySelector("header img");
  if (screen.width >= "800") {
    logo.setAttribute("src", "./assets/logo-desktop.svg");
  } else {
    logo.setAttribute("src", "./assets/logo-mobile.svg");
  }
});

body = document.querySelector("body");
menu = document.querySelector(".menu-button");

console.log(body);
console.log(menu);
console.log(
  menu.attributes.src.value === "./assets/menu-buguer-open.svg" &&
    menu.attributes.alt.value === "Menu fechado"
);

console.log(screen.width);

console.log(screen.width >= "1394");
