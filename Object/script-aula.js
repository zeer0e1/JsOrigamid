const pessoa = new Object({
  nome: "Lucas",
});

const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro).init("honda");

const ferrari = Object.create(carro).init("Farrari");

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "Buzinou";
  },
};

const moto = {
  capacete: true,
};

Object.assign(moto, funcaoAutomovel);

console.log(moto.acelerar());

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});

console.log(moto.rodas);

moto.rodas = 3;

console.log(moto.rodas);

Object.freeze(moto);
