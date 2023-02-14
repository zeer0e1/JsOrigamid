const menu = document.querySelector(".menu");

menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

const animais = document.querySelector(".animais");

const img = document.querySelector("img");
img.setAttribute("alt", "Raposinha");
console.log(img.hasAttribute("alt"));
console.log(img.getAttribute("src"));
