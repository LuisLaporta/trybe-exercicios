const fetchCripto = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.data;
    return result;
  } catch (error) {
    console.log(`Bazinga deu errado ${error}`);
  }
}

const creatList = async () => {
  const criptos = await fetchCripto();
  const criptolist = document.getElementById('cripto-list');

  criptos.filter(({ rank }) => rank <= 10).forEach((cripto) => {
    const list = document.createElement('li');
    list.innerText = `${cripto.name} (${cripto.symbol}): ${cripto.priceUsd}`;
    criptolist.appendChild(list);
  });
}

window.onload = () => creatList();