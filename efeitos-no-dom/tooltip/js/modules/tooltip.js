export default function initToolTip() {}

const toolTips = document.querySelectorAll("[data-tooltip]");

toolTips.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(e) {
  const tooltipBox = criarTooltipoBox(this);

  onMouseMove.tooltipBox = tooltipBox;
  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener("mouseleave", onMouseLeave);
  this.addEventListener("mousemove", onMouseMove);
}

const onMouseLeave = {
  handleEvent() {
    this.tooltipBox.remove();
    this.removeEventListener("mouseleaver", onMouseLeave);
    this.removeEventListener("mouseleaver", onMouseMove);
  },
};

const onMouseMove = {
  handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    this.tooltipBox.style.left = event.pageX + 20 + "px";
  },
};

function criarTooltipoBox(element) {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip");
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}
