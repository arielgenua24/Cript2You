async function getCripto() {
    try {
        const API_URL = "https://api.binance.com/api/v3/ticker/price";
        
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);

        let btc = data.filter(nombre => nombre.symbol == "BTCUSDT");
         elements = btc.map(elemento => elemento.price);
        
        const eth = data.filter(nombre => nombre.symbol == "ETHUSDT");
         elementEth = eth.map(elemento2 => elemento2.price); 


        let ripple = data.filter(nombre => nombre.symbol == "XRPUSDT");
        elementsRipple = ripple.map(elemento => elemento.price);

        console.log(eth);

        const bitcoinPrice = document.getElementById("bitcoinPrice");
        bitcoinPrice.innerText = `${parseInt(elements)}`;    

        const ethereumPrice = document.getElementById("ethereumPrice");
        ethereumPrice.innerText = `${parseInt(elementEth)}`;



        const ripplePrice = document.getElementById("ripplePrice");
        ripplePrice.innerText = `${(elementsRipple)}`;

        
 
    } catch (error) {
        console.log("cuidado" + error)
    }

};      



let fun = getCripto();
