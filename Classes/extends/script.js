class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  enpinar() {
    console.log(`Moto empinou com ${this.rodas}`);
  }
}

const honda = new Moto(2);

const civiv = new Veiculo(4);
