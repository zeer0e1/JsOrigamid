export default function initFetchBitcoin() {
  const url = "https://blockchain.info/ticker";

  fetch(url)
    .then((r) => r.json())
    .then((btcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / btcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
