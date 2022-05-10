export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();
      const btnPreco = document.querySelector('.btc-preco');
      // btnPreco.innerText = Number.prototype.toFixed.call((1000/bitcoinJSON.BRL.sell), 4);
      btnPreco.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
    } catch (error) {
      console.log(Error(error));
    }
  }

  fetchBitcoin('https://blockchain.info/ticker');
}
