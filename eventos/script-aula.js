const img = document.querySelector("img");

// function callback(e) {
//   console.log(e);
// }

// img.addEventListener("click", callback);

const imagesLinsta = document.querySelector(".animais-lista");

function callback2(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

imagesLinsta.addEventListener("click", callback2);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(e) {
  e.preventDefault();
  console.log(this);
  console.log(e);
}

linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent(e) {
  console.log(e.type, e);
}
h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent);

window.addEventListener("scroll", handleEvent);
window.addEventListener("keydown", handleKeyborad);

function handleKeyborad(e) {
  if (e.key === "l") {
    document.body.classList.toggle("azul");
  }
}

const img2 = document.querySelectorAll("img");

function clikImagem(e) {
  alert(`Vc clicou na ${this.getAttribute("src")}`);
}

img2.forEach((img) => {
  img.addEventListener("click", clikImagem);
});
