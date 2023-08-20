var payeerAdress = document.getElementById("payeer-address");
var pefectMoneyAdress = document.getElementById("perfect_money-address");
var bitcoinAdress = document.getElementById("bitcoin-address");
var bitcoinCashAdress = document.getElementById("bitcoinCash-address");
var ethereumAdress = document.getElementById("ethereum-address");
var litecoinAdress = document.getElementById("litecoin-address");
var bnbBeaconAdress = document.getElementById("bnbB-address");
var bnbSmartAdress = document.getElementById("bnbS-address");
var dogeAdress = document.getElementById("dogecoin-address");
var trxAdress = document.getElementById("trx-address");
var usdt_trc20 = document.getElementById("usdt-trc20-address");
var ust_erc20 = document.getElementById("usdt-erc20-address");
var shiba_erc20 = document.getElementById("shiba-erc20-address");
var shiba_bep20 = document.getElementById("shiba-bep20-address");

var imgAdress = document.querySelectorAll("#container-for-differents-types-of-donation img");
setInterval(()=>{
    for(let img of imgAdress){
        img.style["height"] = (img.offsetWidth/1.3)+'px';
    }
}, 10)

function selectPayeerAdress(){
     navigator.clipboard.writeText(payeerAdress.innerText);
     document.getElementById('type-adress').innerText = "Payeer";
     document.getElementById("adress-copied").innerText = payeerAdress.innerText;
     document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectPerfectMoneyAdress(){
     navigator.clipboard.writeText(pefectMoneyAdress.innerText);
     document.getElementById('type-adress').innerText = "Perfect Money";
     document.getElementById("adress-copied").innerText = pefectMoneyAdress.innerText;
     document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectBitcoinAdress(){
    navigator.clipboard.writeText(bitcoinAdress.innerText);
    document.getElementById('type-adress').innerText = "Bitcoin";
    document.getElementById("adress-copied").innerText = bitcoinAdress.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectBitcoinCashAdress(){
    navigator.clipboard.writeText(bitcoinCashAdress.innerText);
    document.getElementById('type-adress').innerText = "Bitcoin Cash";
    document.getElementById("adress-copied").innerText = bitcoinCashAdress.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectEthereumAdress(){
    navigator.clipboard.writeText(ethereumAdress.innerText);
    document.getElementById('type-adress').innerText = "Ethereum";
    document.getElementById("adress-copied").innerText = ethereumAdress.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectLitecoinAdress(){
    navigator.clipboard.writeText(litecoinAdress.innerText);
    document.getElementById('type-adress').innerText = "Litecoin";
    document.getElementById("adress-copied").innerText = litecoinAdress.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectBNBBAdress(){
    navigator.clipboard.writeText(bnbBeaconAdress.innerText);
    document.getElementById('type-adress').innerText = "BNB Beacon Chain";
    document.getElementById("adress-copied").innerText = bnbBeaconAdress.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectBNBSAdress(){
    navigator.clipboard.writeText(bnbSmartAdress.innerText);
    document.getElementById('type-adress').innerText = "BNB Smart Chain";
    document.getElementById("adress-copied").innerText = bnbSmartAdress.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectDogeAdress(){
    navigator.clipboard.writeText(dogeAdress.innerText);
    document.getElementById('type-adress').innerText = "DogeCoin";
    document.getElementById("adress-copied").innerText = dogeAdress.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectTRXAdress(){
    navigator.clipboard.writeText(trxAdress.innerText);
    document.getElementById('type-adress').innerText = "Tron (TRX)";
    document.getElementById("adress-copied").innerText = trxAdress.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectUSDT_TRC20_Adress(){
    navigator.clipboard.writeText(usdt_trc20.innerText);
    document.getElementById('type-adress').innerText = "USDT TRC20";
    document.getElementById("adress-copied").innerText = usdt_trc20.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectUSDT_ERC20_Adress(){
    navigator.clipboard.writeText(ust_erc20.innerText);
    document.getElementById('type-adress').innerText = "USDT ERC20";
    document.getElementById("adress-copied").innerText = ust_erc20.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectShiba_ERC20_Adress(){
    navigator.clipboard.writeText(shiba_erc20.innerText);
    document.getElementById('type-adress').innerText = "Shiba INU ERC20";
    document.getElementById("adress-copied").innerText = shiba_erc20.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectShiba_BEP20_Adress(){
    navigator.clipboard.writeText(shiba_bep20.innerText);
    document.getElementById('type-adress').innerText = "Shiba INU BEP20";
    document.getElementById("adress-copied").innerText = shiba_bep20.innerText;
    document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

document.getElementById("div-says-adress-copied").addEventListener("click", ()=>{
    document.getElementById("div-says-adress-copied").style['display'] = "none";
})