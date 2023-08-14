var payeerAdress = document.getElementById("payeer-address");
var pefectMoneyAdress = document.getElementById("perfect_money-address");

var imgAdress = document.querySelectorAll("#container-for-differents-types-of-donation img");
setInterval(()=>{
    for(let img of imgAdress){
        img.style["height"] = (img.offsetWidth/1.3)+'px';
    }
}, 10)

function selectPayeerAdress(){
     navigator.clipboard.writeText(payeerAdress.innerText);
     document.getElementById("adress-copied").innerText = payeerAdress.innerText;
     document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

function selectPerfectMoneyAdress(){
     navigator.clipboard.writeText(pefectMoneyAdress.innerText);
     document.getElementById("adress-copied").innerText = pefectMoneyAdress.innerText;
     document.getElementById("div-says-adress-copied").style['display'] = "flex";
}

document.getElementById("div-says-adress-copied").addEventListener("click", ()=>{
    document.getElementById("div-says-adress-copied").style['display'] = "none";
})