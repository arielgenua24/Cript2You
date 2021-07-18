async function getCripto() {
    try {
        const API_URL = "https://api.binance.com/api/v3/ticker/price";
        
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);

        let btc = data.filter(nombre => nombre.symbol == "BTCUSDT");
        let elements = btc.map(elemento => elemento.price);
        
        
        const eth = data.filter(nombre => nombre.symbol == "ETHBTC");
        ethPrice = 
        eth.map(elemento2 => elemento2.price); 
        console.log(ethPrice); 
    
        const p = document.getElementById("#P");
        P.innerText = `este es el precio de ${parseInt(elements)}`;
    
    
    
    }

    catch (error) {
        console.log("cuidado" + error)
    }

};
getCripto();