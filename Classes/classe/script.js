/*
function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = this.text;
  buttonElement.style.backGround = this.background;
  return buttonElement;
};
 */

class Button {
  constructor(texto, background) {
    this.texto = texto;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.texto;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
  apppendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
}

const blueButton1 = new Button("Clique", "blue");
blueButton1.apppendTo("body");

class Button2 {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

const blueButton = new Button2({
  backgroundColor: "blue",
  text: "Comprar",
  color: "white",
});
