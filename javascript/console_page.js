var slideParent = document.getElementById("slide-parent");
var i = -100;
var headerPhone = document.getElementById("header-on-phone");
var body = document.querySelector("body");
var indexPhone = 0;
var console = document.getElementById("console");
var consoleScreen = document.getElementById("console-screen");
var lbutton = document.getElementById("l-button");
var rbutton = document.getElementById("r-button");
var leftbutton = document.getElementById("left-button");
var rightbutton = document.getElementById("right-button");
var leftPartButton = document.getElementById("left-part-button");
var rightPartButton = document.getElementById("right-part-button");
var allleft = document.querySelector("#left-part-button button");
var twobutton = document.getElementById("two-button");
var cc = document.getElementById("change-color");
var fsc = document.getElementById("full-screen-console");
var fss = document.getElementById("full-screen-screen");
var icc = 0;
var doc = document.getElementById("div-start-console");
var start = document.getElementById("start-button");
var reset = document.getElementById("select-button");
var first_log = document.getElementById("screen-console-first-log");
var first_log_h2 = document.querySelector("#screen-console-first-log h2");
var gamesMenu = document.getElementById("console-menu-games");
var allgames = document.getElementsByClassName("game");
var comp;  
var son; 
var lanceConsole = 1;  var tra;  var resetStatu = 0;
var j = 0;
var divContainGames = document.getElementById("div-contain-each-games");
var gameSelected = document.getElementById("game-in-seclected");
var locate_user = document.getElementById("localisation");
var place_in_game = document.getElementById("place-in-game");
var Userpoints = document.getElementById("userpoints");
var yoyaPoints = localStorage.getItem("yoya_points");

// Partie qui verifi si un utilisateur essai de jouer sans s'être enregistré
var YourUsername = localStorage.getItem("Username");
if(!YourUsername){
    window.location.href = "../pages/signup.html";
}else{
    if(!yoyaPoints){
        localStorage.setItem("yoya_points", 500);
    }
    Userpoints.innerText = localStorage.getItem("yoya_points")
}


/* Interval permettant de créer un title pour la variable locate_user (Ceci c'est du au cas où la page
serait automatiquement traduite par Google) */
// setInterval(()=>{
//     if(!locate_user.title){
//         locate_user.title = "";
//     }
//     if(!place_in_game.title){
//         place_in_game.title = "";
//     }
// }, 3000);



/* Variables pour les div principales des différents jeux (C'est-à-dire pour tous les jeux qui vont 
être créés au fur et à mesure */
var divPenguinSlider = document.getElementById("penguin-slider-div");




/* Tableau contenant les noms des différents jeux */
var tabGames = ["Penguin Slider","Danger Space", "Target It", "Amazing Fish", "Solidary Hero"];



/* Fonction permettant de connaitre et de lancer un jeu qui a été choisi lorsque l'utilisateur appui 2 pour choisir son jeu */
function detectGame(){
    if(locate_user.title === "consoleMenu"){
        locate_user.title = gameSelected.title;

        if(locate_user.title === "Penguin Slider" && place_in_game.title === ""){
            gamesMenu.style["display"] = "none";
            divPenguinSlider.style["display"] = "flex";
        }else{
            divPenguinSlider.style["display"] = "none";
        }
    }
}
twobutton.addEventListener("click", ()=>{
    detectGame();
})


/* Cette partie permet tout simplement la selection automatique du tout premier jeu dans le menu du tout premier jeu de la console */
allgames[0].style["transform"] = "scale(1.15)";
allgames[0].style["border"] = "6px solid cyan";




/* Fonctions gérant les choix de jeux d'un utilisateur lorsqu'il se trouve dans le menu de jeux de la console */
function changeJeuDroit(){
    if(locate_user.title === "consoleMenu"){
        if(j != allgames.length-1){
            j++;
            // alert(j);
            for(let game of allgames){
                game.style["transform"] = "scale(1)";
                game.style["border"] = "none";
            }
            if(j > 1){
                tra = j * (-46);
                divContainGames.style["transform"] = "translateX("+tra+"%)";
            }
            allgames[j].style["transform"] = "scale(1.15)";
            allgames[j].style["border"] = "6px solid cyan";
            gameSelected.innerText = tabGames[j];
            gameSelected.title = tabGames[j];
        }
    }  
}
function changeJeuGauche(){
    if(locate_user.title === "consoleMenu"){
        if(j != 0){
            j--;
            // alert(j);
            for(let game of allgames){
                game.style["transform"] = "scale(1)";
                game.style["border"] = "none";
            }
            
            if(j <= 1){
                divContainGames.style["transform"] = "translateX(0%)";
            }else{
                tra = tra + 46;
                divContainGames.style["transform"] = "translateX("+tra+"%)";
            }
                
            
            allgames[j].style["transform"] = "scale(1.15)";
            allgames[j].style["border"] = "6px solid cyan";
            gameSelected.innerText = tabGames[j];
            gameSelected.title = tabGames[j];
        }
    }  
}





/* évènements permettant de lancer le démarrage de la console(start) ou de la reset(réinitialiser) */
start.addEventListener("click", ()=>{
    if(lanceConsole != 0){
                locate_user.title = "";
                let compteh2 = 0;
                comp = setInterval(()=>{
                if(compteh2 === 4){
                    first_log_h2.style["display"] = "block";
                    son = new Audio("../sounds/joue.wav");
                    son.play();
                }else if(compteh2 === 8){
                    first_log.style["opacity"] = 0;
                    first_log.style["transition"] = "3s ease";
                }else if(compteh2 === 11){
                    first_log.style["opacity"] = 1;
                    first_log.style["display"] = "none";
                    gamesMenu.style["display"] = "flex";
                    locate_user.title = "consoleMenu";
                    resetStatu = 1;
                    clearInterval(comp);
                }
                compteh2++;
                },1000)
                doc.style["display"] = "none";
                first_log.style["display"] = "flex";
                lanceConsole = 0;
    }
    

})
reset.addEventListener("click", ()=>{
    if(resetStatu != 0){
        clearInterval(comp);
        doc.style["display"] = "flex";
    
        first_log_h2.style["display"] = "none";
        first_log.style["opacity"] = 1;
        first_log.style["display"] = "none";
        gamesMenu.style["display"] = "none";
    
        /* Div des jeux qui doivent être directement en display none lorsque l'utilisateur clique sur Reset */
        divPenguinSlider.style["display"] = "none";
    
        son.pause();
        son.currentTime = 0;
        lanceConsole = 1;
        locate_user.title = "";
        place_in_game.title = "";
    }

})


/* Evènements permettant de choisir un jeu en cliquant sur le bouton left ou droit de 
la console, et non du clavier de l'ordinateur */
leftbutton.addEventListener("click", () =>{
    changeJeuGauche();
});
rightbutton.addEventListener("click", () =>{
    changeJeuDroit();
});




/* évènements permettant de lancer le démarrage de la console(start) ou de la reset(réinitialiser) et 
aussi de lier les différentes touches de la console auw différentes touches du clavier lorsqu'un 
utilisateur utilise un PC*/
window.addEventListener("keyup", (e)=>{
    /* Pour start */
    if(e.keyCode === 13){
        if(lanceConsole != 0){
            let compteh2 = 0;
        comp = setInterval(()=>{
        if(compteh2 === 4){
            first_log_h2.style["display"] = "block";
            son = new Audio("../sounds/joue.wav");
            son.play();
        }else if(compteh2 === 8){
            first_log.style["opacity"] = 0;
            first_log.style["transition"] = "3s ease";
        }else if(compteh2 === 11){
            first_log.style["opacity"] = 1;
            first_log.style["display"] = "none";
            gamesMenu.style["display"] = "flex";
            locate_user.title = "consoleMenu";
            resetStatu = 1;
            clearInterval(comp);
        }
        compteh2++;
        },1000)
        doc.style["display"] = "none";
        first_log.style["display"] = "flex";
        lanceConsole = 0;
        }
    } /* Pour Reset */
    else if(e.keyCode === 8){
        if(resetStatu != 0){
            clearInterval(comp);
            doc.style["display"] = "flex";
        
            first_log_h2.style["display"] = "none";
            first_log.style["opacity"] = 1;
            first_log.style["display"] = "none";
            gamesMenu.style["display"] = "none";
        
            /* Div des jeux qui doivent être directement en display none lorsque l'utilisateur clique sur Reset */
            divPenguinSlider.style["display"] = "none";
        
            son.pause();
            son.currentTime = 0;
            lanceConsole = 1;
            locate_user.title = "";
            place_in_game.title = "";
        }
    } /* Pour la touche directionnelle droite */
    else if(e.keyCode === 39){
        changeJeuDroit();
    }/* Pour la touche directionnelle gauche */
    else if(e.keyCode === 37){
        changeJeuGauche();
    }else if(e.keyCode === 98 /* Lorsqu'on appui sur numpad 2 */){
        detectGame();
    }else{
        e.preventDefault();
    }
})




/* Condition de vérification si l'utilisateur utilise un téléphone ou un PC */
if(navigator.userAgent.match(/iphone/i) || navigator.userAgent.match(/Android/i)){
    fss.style["display"] = "none";
}else{
    fsc.style["display"] = "none";
}





/* Les deux évènements pour mettre soit en plein écran console ou en plein écran écran de la console */
fsc.addEventListener("click",()=>{
   if(console.requestFullscreen){
      console.requestFullscreen();
   }else if(console.webkitRequestFullscreen){
      console.webkitRequestFullscreen();
   }else if(console.msRequestFullscreen){
      console.msRequestFullscreen();
   }else{
      console.exitFullscreen();
   }
})
fss.addEventListener("click",()=>{
    if(consoleScreen.requestFullscreen){
        consoleScreen.requestFullscreen();
    }else if(consoleScreen.webkitRequestFullscreen){
        consoleScreen.webkitRequestFullscreen();
    }else if(consoleScreen.msRequestFullscreen){
        consoleScreen.msRequestFullscreen();
    }else{
        consoleScreen.exitFullscreen();
    }
 })




 /* Evènement pour changer la couleur de la console */
cc.addEventListener("click", ()=>{
    let tab = ["rgb(247, 43, 138)","white","black","rgb(112, 112, 112)","blue","rgb(0, 204, 255)","red", "green", "rgb(250, 79, 17)", "purple", "rgb(190, 2, 190)"];
    if(icc === tab.length){
        console.style["background"] = "rgb(163, 53, 185)";
        console.style["transition"] = "0.5s ease";
        console.style["border"] = "4px solid rgb(163, 53, 185)";
        icc=0;
    }else{
        console.style["background"] = tab[icc];
        console.style["transition"] = "0.5s ease";
        console.style["border"] = "4px solid "+tab[icc];
        icc++;
    }
})



/* interval pour avoir une bonne proportion de la console */
setInterval(()=>{
    leftPartButton.style["height"] = leftPartButton.offsetWidth+'px';
    rightPartButton.style["height"] = rightPartButton.offsetWidth+'px';
    if(console.offsetHeight != (console.offsetWidth/2)){
        console.style["height"] = console.offsetWidth/2+'px';
    }
},100);


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