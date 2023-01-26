// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// Capturando todos os links da página
const linksInternos = document.querySelectorAll('a[href^="#"]');

// Minha solução

// linksInternos.forEach((link) => {
//   link.addEventListener("click", (e) => {

//     e.preventDefault();

//     linksInternos.forEach((link) => {
//       link.classList.remove("ativo");
//     });

//     if (link.classList.contains("ativo")) {
//       link.classList.remove("ativo");
//     } else {
//       link.classList.add("ativo");
//     }
//   });
// });

//SOLUCÃO DO PROFESSOR

function handleLink (event){
  event.preventDefault();
  linksInternos.forEach((link)=>{
    link.classList.remove('ativo')
  })

  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) =>{
  link.addEventListener('clicl',handleLink)
})



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

function handleClickT(event){
  if(event.key =='t'){
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown',handleClickT)
