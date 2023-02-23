/* *
async function puxarDados() {
  try {
    const responseDados = await fetch("./dados.json");
    const jsonDados = await responseDados.json();
    document.body.innerText = jsonDados.aula;
  } catch (erro) {
    console.log(erro);
  }
}

puxarDados();
*/

async function puxarDados() {
  const promiseDados = fetch("./dados.json");
  const responseCliente = fetch("./clientes.json");

  const jsonDados = await (await promiseDados).json();
  const jsonClientes = await (await responseCliente).json();
}

puxarDados();
