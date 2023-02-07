// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

function Total() {
  let totalTaxa = 0;
  let totalRecebimento = 0;
  transacoes.forEach((item) => {
    if (item.descricao.includes("Taxa")) {
      totalTaxa += parseInt(item.valor.replace("R$ ", ""));
    } else {
      totalRecebimento += parseInt(item.valor.replace("R$ ", ""));
    }
  });
  console.log(
    `Total de Taxa: R$ ${totalTaxa}\nTotal de recebimento: R$ ${totalRecebimento}`
  );
}

Total();

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const newArray = transportes.split(";");
console.log(newArray);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const html2 = html.replace(/['ul']+/g, "a");
console.log(html2);
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
const ultimaCharFrase = frase.charAt(frase.length - 1);
console.log(ultimaCharFrase);

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let soma = 0;
transacoes2.forEach((item) => {
  if (item.trim().toUpperCase().includes("TAXA")) {
    soma += 1;
  }
});

console.log(`Total de taxas : ${soma}`);
