var menu = document.querySelector("header");
var bouton = document.getElementById("bouton");
var scripteur = document.querySelector("script");
var body = document.querySelector("body");
var home_console = document.querySelector("main #home_console");
var recent_games = document.querySelector("main #recent_games");
var taille = menu.offsetHeight + home_console.offsetHeight;
var downloadHome = document.getElementById("download-app");
var i=0;

var Check = localStorage.getItem("DontShow");
if(!Check){
    Check = localStorage.setItem("DontShow", "");
}

function VerifyIfRegistred(){
    let YourUsername = localStorage.getItem("Username");
    if(YourUsername){
        window.location.href = "pages/console_page.html"
    }else{
        window.location.href = "pages/signup.html";
    }
}



// window.addEventListener("load", ()=>{
//     const inter = setInterval(()=>{
//         if(i==1){
//             if(Check != 0){
//                 downloadHome.style["display"] = "flex";
//                 i=0;
//                 clearInterval(inter);
//             }
//         }
//         i++;
//     }, 1000);

// })
function DontShowAgain(){
    alert("You would not see this pop-up again !");
   localStorage.setItem("DontShow", 0);
   downloadHome.style["display"] = "none";
}
function cacheDownload(){
    downloadHome.style["display"] = "none";
}

// window.addEventListener("scroll", ()=>{
//     if(window.scrollY >= (menu.offsetHeight-(menu.offsetHeight/1.55))){
//         // alert("condition juste !");
//         home_console.style['display'] = "flex";
//     }else{
//         home_console.style['display'] = "none";
//     }

//     // if(window.scrollY >= (taille - taille/2.5)){
//     //    alert("Oui !");
//     // }

//     if(window.scrollY >= (menu.offsetHeight)){
//         recent_games.style['display'] = "flex";
//     }else{
//         recent_games.style['display'] = "none";
//     }
// })

// function afficheoff(){
//     alert (window.scrollY);
//     // if(window.scrollY = 100){
//     //     alert("yes")
//     // }
// }