/* 
let bodyGeral = document.querySelector("[data-geral]");

bodyGeral.style;

function changeColorBody(element, color) {
  element.style.backgroundColor = color;
  console.log(color);
}

setInterval(changeColorBody, 2000, bodyGeral, "red");
setInterval(changeColorBody, 4000, bodyGeral, "green");
setInterval(changeColorBody, 6000, bodyGeral, "yellow");
*/

let segundo = document.querySelector("[data-segundo]");
let minuto = document.querySelector("[data-minuto]");
let buttonClock = document.querySelector(".botao");
console.log(segundo.innerText);

let Initsegundo = 0;
let initMinuto = 0;
let relogio;

buttonClock.addEventListener("click", () => {
  if (buttonClock.innerText !== "Pause") {
    relogio = setInterval(() => {
      segundo.innerText = Initsegundo;
      Initsegundo += 1;
      if (Initsegundo >= 60) {
        Initsegundo = 0;
        initMinuto += 1;
        minuto.innerText = initMinuto;
      }
    }, 100);
    setTimeout(() => {
      buttonClock.innerText = "Pause";
    }, 100);
  } else if (buttonClock.innerText === "Pause") {
    buttonClock.innerText = "Start";
    clearInterval(relogio);
  }
});

buttonClock.addEventListener("dblclick", () => {
  clearInterval(relogio);
  segundo.innerText = 0;
  minuto.innerText = 0;
});
