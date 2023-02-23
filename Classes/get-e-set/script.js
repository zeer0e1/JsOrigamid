const button = {
  get tamanho() {
    return this._numero || 200;
  },
  set tamanho(numero) {
    this._numero = numero;
  },
};

const matematica = {
  get PI() {
    return 3.14;
  },
};

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

class Button {
  constructor(text, color) {
    (this.text = text), (this.color = color);
  }
  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}
