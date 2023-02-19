const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");
controles.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  backgroundColor: "azul",
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  texto(value) {
    this.element.innerText = value;
  },
};
function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
}
