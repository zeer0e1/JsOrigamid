// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    linksInternos.forEach((link) => {
      link.classList.remove("ativo");
    });
    if (link.classList.contains("ativo")) {
      link.classList.remove("ativo");
    } else {
      link.classList.add("ativo");
    }
  });
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll("body");

allElements.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
allElements.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.remove());
  });
});
// Se o usuário clicar na tecla (t), aumente todo o texto do site.
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

allElements.forEach((item) => {
  window.addEventListener("keydown", (e) => {
    if (e.key == "t") {
      let style = window
        .getComputedStyle(item, null)
        .getPropertyValue("font-size");
      let fontSize = parseFloat(style);
      item.style.fontSize = fontSize + 1 + "px";
    }
  });
});
