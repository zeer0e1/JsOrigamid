const itemMenu = document.querySelectorAll(".menu a");

itemMenu.forEach((item) => {
  item.classList.add("ativo");
});

itemMenu.forEach((item, index) => {
  if (index > 0) {
    item.classList.remove("ativo");
  }
});

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  const possuiAtribute = img.hasAttribute("alt");
  console.log(possuiAtribute);
});

const link = document.querySelector('a[href^="http"]');

link.setAttribute("href", "https://google.com");
