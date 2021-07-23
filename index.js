async function getCripto() {
    try {
        const API_URL = "https://api.binance.com/api/v3/ticker/price";
        
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);

        let btc = data.filter(nombre => nombre.symbol == "BTCUSDT");
        let elements = btc.map(elemento => elemento.price);
        
        const eth = data.filter(nombre => nombre.symbol == "ETHUSDT");
        const elementEth = eth.map(elemento2 => elemento2.price); 
    
        const bitcoinPrice = document.getElementById("bitcoinPrice");
        bitcoinPrice.innerText = `${parseInt(elements)}`;
 
        console.log(eth);

        const ethereumPrice = document.getElementById("ethereumPrice");
        ethereumPrice.innerText = `${parseInt(elementEth)}`;


        let ripple = data.filter(nombre => nombre.symbol == "XRPUSDT");
        let elementsRipple = ripple.map(elemento => elemento.price);

        const ripplePrice = document.getElementById("ripplePrice");
        ripplePrice.innerText = `${parseInt(elementsRipple)}`;




    
    
    
    } catch (error) {
        console.log("cuidado" + error)
    }

};
getCripto();