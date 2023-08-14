var slideParent = document.getElementById("slide-parent");
var headerPhone = document.getElementById("header-on-phone");
var body = document.querySelector("body");
var indexPhone = 0;
var i = -100;


/* Pour le slide des images dans le header */
setInterval(()=>{
    if(i === -400){
        i=0;
    }
    slideParent.style["transform"] = "translateX("+i+"%)";
    slideParent.style["transition"] = "1s ease";
    i = i-100;
}, 4000);


/* Fonction permettant d'afficher et de rétirer le menu lorsque l'on est sur téléphone */
function showPhoneHeader(){
    headerPhone.style.opacity = 1;
    headerPhone.style["z-index"] = 4;
    let thosu = setInterval(()=>{
        indexPhone++;
        clearInterval(thosu);
    },100);
}
// headerPhone.addEventListener("click", ()=>{
//         headerPhone.style.opacity = 0;
//         headerPhone.style["z-index"] = -1;    
// })

function closePhoneHeader(){
if(indexPhone === 1){
    headerPhone.style.opacity = 0;
    headerPhone.style["z-index"] = -1;
    indexPhone = 0;
}
}