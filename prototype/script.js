function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + " Pessoa andou ";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " Pessoa nadou ";
};

const lucas = new Pessoa("lucas", 26);
