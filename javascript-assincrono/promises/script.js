const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "lucas", idade: 26 });
    }, 2000);
  } else {
    reject(Error("Um erro ocorreu"));
  }
});

const retorno = promessa
  .then((resolucao) => {
    resolucao.profissao = "Webdev";
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    console.log(rejeitada);
  })
  .finally(() => {
    console.log("cabo");
  });

console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("usuario logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
