const button = document.getElementById('convertButton')
const select = document.getElementById('currencySelect')



async function convertValues() {
    const inputReais = document.getElementById('inputReal').value
    const realValueText = document.getElementById('realValueText')
    const currencyValueText = document.getElementById('currencyValueText')

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(function(resposta) {
        return resposta.json()

    })

    const dolar = moedas.USDBRL.high
    const euro = moedas.EURBRL.high
    const bitCoin = moedas.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais);

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar);
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro);
    }

    if (select.value === '₿ Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitCoin);
    }
}


const changeCurrency = () => {
    const currencyName = document.getElementById('currencyName')
    const currencyImg = document.getElementById('currencyImg')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/eur.svg"
    }

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/usa.svg"
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    convertValues()
}


select.addEventListener('change', changeCurrency)
button.addEventListener('click', convertValues)