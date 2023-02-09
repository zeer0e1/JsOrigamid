const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
let primeiraComida = comidas.shift();
console.log(primeiraComida);
// Remova o último valor de comidas e coloque em uma variável
let lastFood = comidas.pop();
console.log(lastFood);
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(
  `Joana está na lista de estudantes ? ${estudantes.includes("Joana")}`
);
// Verifique se Juliana faz parte dos estudantes
console.log(
  `Juliana está na lista de estudantes ? ${estudantes.includes("Juliana")}`
);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

let htmlArrray = html.split("section").join("ul").split("div").join("li");
console.log(htmlArrray);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

let carros2 = carros.slice();
carros.pop();
console.log(carros2);
console.log(carros);
