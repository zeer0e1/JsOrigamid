// Transforme o objeto abaixo em uma Constructor Function
/*
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};
*/
const Pessoa = function (nome, idade) {
  this.andar = function () {
    console.log(`${nome} andou`);
  };
};

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new Pessoa("joão", 20);
const pessoa2 = new Pessoa("Maria", 25);
const pessoa3 = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
const Dom = function (element, classE) {
  const elementSelect = document.querySelectorAll(`${element}`);
  this.elements = elementSelect;
  this.addClass = function (classE) {
    this.elements.forEach((elemento) => {
      elemento.classList.add(`${classE}`);
    });
  };
  this.removeClass = this.elements.forEach((elemento) => {
    elemento.classList.remove(`${classE}`);
  });
};
