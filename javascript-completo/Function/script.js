// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");

const totalCaractres = Array.prototype.reduce.call(
  paragrafos,
  (acomulador, paragrafo) => {
    return acomulador + paragrafo.innerText.length;
  },
  0
);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : "";
  conteudo ? elemento.innerHtml.add(conteudo) : "";
  return elemento;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, "h1", "titulo");
