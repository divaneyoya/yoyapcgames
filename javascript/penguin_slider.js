var locate_user = document.getElementById("localisation");
var place_in_game = document.getElementById("place-in-game");
var consolescreen = document.getElementById("console-screen");
var images_for_background = document.getElementsByClassName("image-for-back");
var back_images_water = document.getElementById("background-images-water");
var images_for_water = document.getElementsByClassName("images-water");
var nb_selections = document.getElementsByClassName("intro-select");
var upbutton = document.getElementById("up-button");
var downbutton = document.getElementById("down-button");
var twobutton = document.getElementById("two-button");
var fourbutton = document.getElementById("four-button");
var sixbutton = document.getElementById("six-button");
var heightbutton = document.getElementById("height-button");
var LButton = document.getElementById("l-button");
var RButton = document.getElementById("r-button");
var resetButton = document.getElementById("select-button");
var divPenguinSlider = document.getElementById("penguin-slider-div");
var penguinSliderIntro = document.getElementById("penguin-slider-intro");
var gamesMenu = document.getElementById("console-menu-games");
var yoyaPoints = document.getElementById("yp-points"); yoyaPoints.value = 0;
var nb_sel = 0; var Pvar = -5; var pengI = 4; var compteIntroPeng = 0;
// alert(consolescreen.offsetHeight);
// Variables qui serviront à initialiser et incrémenter le score et les pièces
var StartCountScore = false; 


//Variables pour l'intro lorsque l'utilisateur appui Start
var divUserPlaying = document.getElementById("user-playing");
var pengGameStartIntro = document.getElementById("penguin-slider-game-start");
var pengGameStarted = document.getElementById("penguin-slider-game-started");
var divForGroundSnow = document.getElementById("div-for-the-ground");
var pengIntroImg = document.getElementById("game-start-intro");
var penguinProfil = document.getElementById("penguin-profil");
var anotherDiv = document.getElementById("another-div-for-background-object");
var CollisionDiv = document.getElementById("divToCreateCollision");
var anotherDivQ = document.getElementsByClassName("imgAnother");
var divForPeng1 = document.getElementById("div-for-peng1");

// Variables pour le sang et la puissance du penguin
var healthContain = document.getElementById("penguin-health");
var pengHealth = document.getElementById("health");
var powerContain = document.getElementById("penguin-power");
var pengPower = document.getElementById("power");
var powerChargeStatus = 1;

const fillPower = setInterval(()=>{
    if((pengPower.offsetWidth < (powerContain.offsetWidth)) && powerChargeStatus === 1){
        let nv = pengPower.offsetWidth + (powerContain.offsetWidth*0.05);
        let x = nv * 100/powerContain.offsetWidth;
        pengPower.style["width"] = x+"%";
    }else{
        powerChargeStatus = 1;
    }
},1000)


// Variables pour les objets et les obstacles
var grosseBoule = document.getElementById("ennemy3");
var ennemy1 = document.getElementById("ennemy1");
var ennemy2 = document.getElementById("ennemy2");
var ennemy3 = document.getElementById("ennemy3");
var aigle = document.getElementById("aigle");
var ours = document.getElementById("ours");
var phoque = document.getElementById("phoque");
var peng1dust = document.getElementById("peng1dust");
var Initial_peng1 = document.getElementById("initial-peng1"); 
var peng1ghost = document.getElementById("peng1Ghost");
var peng1Boule = document.getElementById("boule-peng1");
var ShootBall = document.getElementById("penguin-shoot");
var peng1Shield = document.getElementById("pengShield");
var jetPack = document.getElementById("jet-pack");
var fatal1 = document.getElementById("peng1-fatal1");
var fatal2 = document.getElementById("peng1-fatal2");
var pause = document.querySelectorAll("#penguin-slider-div div, #penguin-slider-div img");
var divForEnnemy = document.getElementById("div-for-ennemy");
var pinitial = 1;
var comptte = 0; var addTabAnother; var choi = 0; var NumCase = 0; var jumpStatus = 0; var Initialfatal = 0;
var peng1Available = true; var GameInPause = 0; var UserClickPause = 0;




/* Fonctions lorsque l'utilisateur perd le jeu et décide de soit continuer, recommencer
retourner au home ou encore de faire un don */
var Userpoints = document.getElementById("userpoints");
var pointsWin = document.getElementById("pointsWin");
var nbofContinue = 1;

function WhenstartPengGame(){

    document.getElementById("gameOver-pengslider").style["display"] = "none";
    StartCountScore = true;

    // Replacer les ennemies et les objets à leur position d'origine
    ennemy1.style["left"] = "100%"; ennemy1.style["opacity"] = "1"; ennemy1Status = 1;
    ennemy2.style["left"] = "120%"; ennemy2.style["opacity"] = "1"; ennemy2Status = 1;
    ennemy3.style["left"] = "140%"; ennemy3.style["opacity"] = "1"; ennemy3Status = 1;
    aigle.style["left"] = "160%"; aigle.style["opacity"] = "1"; aigleStatus = 1;
    ours.style["left"] = "180%"; ours.style["opacity"] = "1"; oursStatus = 1;
    phoque.style["left"] = "200%"; phoque.style["opacity"] = "1"; phoqueStatus = 1;
    //document.getElementById("coins-displayer").style["left"] = "100%";


    // -------------------
        for(let el of pause){
            el.style["animation-play-state"] = "running";
        }

       document.getElementById("valueScore").innerText = "0";
       countScore = 0;
       document.getElementById("yp-points").value = 0;
       document.getElementById("yp-points").innerText = "0";
       document.documentElement.style.setProperty("--pengGroundSlide", "6s");
       document.documentElement.style.setProperty("--pengBackGameStarted", "55s");
       nbofContinue = 1;
}

function restartPengGame(){
    let UpdatePoints = parseInt(localStorage.getItem("yoya_points")) + parseInt(pointsWin.innerText);
    localStorage.setItem("yoya_points", UpdatePoints);
    Userpoints.innerText = UpdatePoints;
    
    document.getElementById("gameOver-pengslider").style["display"] = "none";
    const startCount = setInterval(()=>{
        StartCountScore = true;
        clearInterval(startCount);
    }, 10)

    // Replacer les ennemies et les objets à leur position d'origine
    ennemy1.style["left"] = "100%"; ennemy1.style["opacity"] = "1"; ennemy1Status = 1;
    ennemy2.style["left"] = "120%"; ennemy2.style["opacity"] = "1"; ennemy2Status = 1;
    ennemy3.style["left"] = "140%"; ennemy3.style["opacity"] = "1"; ennemy3Status = 1;
    aigle.style["left"] = "160%"; aigle.style["opacity"] = "1"; aigleStatus = 1;
    ours.style["left"] = "180%"; ours.style["opacity"] = "1"; oursStatus = 1;
    phoque.style["left"] = "200%"; phoque.style["opacity"] = "1"; phoqueStatus = 1;
    //document.getElementById("coins-displayer").style["left"] = "100%";


    // -------------------
        for(let el of pause){
            el.style["animation-play-state"] = "running";
        }

       document.getElementById("valueScore").innerText = "0";
       countScore = 0;
       document.getElementById("yp-points").value = 0;
       document.getElementById("yp-points").innerText = "0";
       document.documentElement.style.setProperty("--pengGroundSlide", "6s");
       document.documentElement.style.setProperty("--pengBackGameStarted", "55s");
       nbofContinue = 1;
       
}

function coinsTolose(){
    document.getElementById("loseCoins").innerText = nbofContinue * 100;
}


function PausePengGame(){
            
            if(UserClickPause === 0 && StartCountScore === true){
                ImagesAds();
                StartCountScore = false;
                UserClickPause = 1;
        
                document.getElementById("GameOver10ypLink").style["animation-play-state"] = "running";
                document.getElementById("gameOver-pengslider").style["display"] = "flex";
                document.getElementById("scoreWin").innerText = document.getElementById("valueScore").innerText;
                document.getElementById("pointsWin").innerText = document.getElementById("yp-points").value;
        
                // Pour grossir le bouton Continue
                let optionsImg = document.querySelectorAll("#gameOptions img");
                for(let opt of optionsImg){
                    opt.style["width"] = "17%";
                    opt.style["height"] = "55%";
                }

                optionsImg[2].style["width"] = "25%";
                optionsImg[2].style["height"] = "90%";

        
                for(let el of pause){
                            el.style["animation-play-state"] = "paused";
                }
        
                document.getElementById("ifContinue").style["animation-play-state"] = "running"; 
                document.getElementById("adImg1").style["animation-play-state"] = "running";
                document.getElementById("adImg2").style["animation-play-state"] = "running";
            }
}

function ContinueWithoutLosingCoins(){
    if(UserClickPause === 1){
        document.getElementById("gameOver-pengslider").style["display"] = "none";
        document.getElementById("continuePeng").style["display"] = "none";
        const setPauseDisplay = setInterval(()=>{
            UserClickPause = 0;
            clearInterval(setPauseDisplay);
        }, 20);
        StartCountScore = true;
        for(let el of pause){
            el.style["animation-play-state"] = "running";
        }
    }else if(UserClickPause === 0){
        document.getElementById('continuePeng').style['display'] = 'flex'; 
        coinsTolose();
    }
}


function continuePengGame(){

        let lose = nbofContinue * 100;
        let AvailableCoins = parseInt(localStorage.getItem("yoya_points"));
    
        if(lose <= AvailableCoins){
            let NowYoyaPoints = AvailableCoins - lose;
            localStorage.setItem("yoya_points", NowYoyaPoints);
            Userpoints.innerText = localStorage.getItem("yoya_points");
    
            // Replacer les ennemies et les objets à leur position d'origine
            ennemy1.style["left"] = "100%"; ennemy1.style["opacity"] = "1"; ennemy1Status = 1;
            ennemy2.style["left"] = "120%"; ennemy2.style["opacity"] = "1"; ennemy2Status = 1;
            ennemy3.style["left"] = "140%"; ennemy3.style["opacity"] = "1"; ennemy3Status = 1;
            aigle.style["left"] = "160%"; aigle.style["opacity"] = "1"; aigleStatus = 1;
            ours.style["left"] = "180%"; ours.style["opacity"] = "1"; oursStatus = 1;
            phoque.style["left"] = "200%"; phoque.style["opacity"] = "1"; phoqueStatus = 1;
    
            for(let el of pause){
                el.style["animation-play-state"] = "running";
            }
    
            Fatal1Peng1();
            const startCount = setInterval(()=>{
                StartCountScore = true;
                clearInterval(startCount);
            }, 10)
            pengPower.style["width"] = "100%";
            document.getElementById("gameOver-pengslider").style["display"] = "none";
            document.getElementById("continuePeng").style["display"] = "none";
            nbofContinue++;
        }else{
            alert("Vous n'avez pas assez de yoya points pour continuer le jeu !");
        }
}

function returnToHomePeng(){

    for(let el of pause){
        el.style["animation-play-state"] = "running";
    }

    place_in_game.title = "";
    document.getElementById("user-playing").style["display"] = "none";
    document.getElementById("penguin-slider-intro").style["display"] = "flex";
     GameInPause = 0;
     UserClickPause = 0;
     clearInterval(InitializeImportantFunction);
     clearInterval(interScore);
}


/* Fonction qui s'occupe d'afficher le lien pour ajouter 10 yp à GameOver */
function linkClick(){
  
    // Tableau contenant les différents DirectLink pour les publicités
    let DirectLinkTab = [
        "https://www.youtube.com/",
        "https://www.facebook.com/",
        "https://www.twitter.com/",
        "https://www.whatsapp.com"
    ]
    
    let chooseLink = parseInt(Math.random()*(DirectLinkTab.length));
    document.getElementById("GameOver10ypLink").href = DirectLinkTab[chooseLink];

    let Fincompte = 0;
    document.getElementById("messageLink").style["display"] = "block";
    let compteLink = setInterval(()=>{
       Fincompte++;
       if(Fincompte === 4){
        document.getElementById("messageLink").style["display"] = "none";
        document.getElementById("GameOver10ypLink").style["display"] = "flex";
        clearInterval(compteLink);

        let add10 = parseInt(localStorage.getItem("yoya_points")) + 10;
        localStorage.setItem("yoya_points", add10);
        Userpoints.innerText = localStorage.getItem("yoya_points");
        alert("You win 10 yoya Points");

       }
    }, 1000)
}

// Fonction qui s'occupe de l'affichage des publicités des images
function ImagesAds(){

    // Tableau contenant les liens et les images des publicités 
    let ImagesAndLink = [
        {
            image: "../images_ads/imgad1.png",
            link: "https://www.youtube.com/"
        },
        {
            image: "../images_ads/imgad2.png",
            link: "https://www.facebook.com/"
        }
    ];

    let selectImgad1 = parseInt(Math.random() * (ImagesAndLink.length));
    document.getElementById("adImg1").src = ImagesAndLink[selectImgad1].image;
    document.getElementById("linkAdImg1").href = ImagesAndLink[selectImgad1].link;

    let selectImgad2 = parseInt(Math.random() * (ImagesAndLink.length));
    while(selectImgad2 === selectImgad1){
        selectImgad2 = parseInt(Math.random() * (ImagesAndLink.length));
    }
    document.getElementById("adImg2").src = ImagesAndLink[selectImgad2].image;
    document.getElementById("linkAdImg2").href = ImagesAndLink[selectImgad2].link;

    // alert(ImagesAndLink[selectImgad1].image);
    // alert(ImagesAndLink[selectImgad1].link);
}




// var time = 0;
// setInterval(()=>{
//     time++;
//     if(time === 5){
//         for(let el of pause){
//             el.style["animation-play-state"] = "paused";
//         }
//       }else if(time === 10){
//         for(let el of pause){
//             el.style["animation-play-state"] = "running";
//         }
//         time = 0;
//     }
// }, 1000)



// Toutes les fonctions pour gérer les Pauses et les Play du jeu

function pauseWhenFatal(){
    for(let el of pause){
                 el.style["animation-play-state"] = "paused";        
    }

    let AnimFatal = document.querySelectorAll("#peng1Fatale1 *");
    for(let anFatal of AnimFatal){
        anFatal.style["animation-play-state"] = "running";
    }
}

function pauseWhenInParadise(){
    for(let el of pause){
        el.style["animation-play-state"] = "paused";        
    }

    let AnimParadise = document.querySelectorAll("#paradiseDiv *");
    for(let anParadise of AnimParadise){
       anParadise.style["animation-play-state"] = "running";
    }
}

function pauseAll(){
    for(let el of pause){
        el.style["animation-play-state"] = "paused";        
    }
}

function removePause(){
    for(let el of pause){
        el.style["animation-play-state"] = "running";        
    }
}




/* Ici il s'agit des fonctions qui permettront de sauter, de tirer des balles, de mettre le bouclier
, de devenir invisible, et de faire des fatales pour le peng1 */

var iniPengAvailable = 1; var collectCoinsStatus = 0; var activateBoulePeng = 0; var jumpInt;

function peng1Saut(){
    if(jumpStatus === 0 && peng1Available === true && GameInPause === 1){
        activateBoulePeng = 1;
        collectCoinsStatus = 1;
        Initial_peng1.style["animation"] = "saut 0.7s linear";
        Initial_peng1.src = "../images/penguin_slider_images/peng1plane.png";
        jumpStatus = 1;
        ballStatus = 0;
        peng1Available = false;
        peng1dust.style["opacity"] = "0";
        peng1dust.style["left"] = "-9%";
        pengGameStarted.style["margin-top"] = "-3%";
        pengGameStarted.style["transition"] = "0.55s ease";
        divForGroundSnow.style["bottom"] = "-5%";
        divForGroundSnow.style["transition"] = "0.6s ease";
        anotherDiv.style["top"] = "5%";
        
         jumpInt = setInterval(()=>{
            pengGameStarted.style["margin-top"] = "0";
            divForGroundSnow.style["bottom"] = "0";
            anotherDiv.style["top"] = "0";
            activateBoulePeng = 0;
            collectCoinsStatus = 0;
            jumpStatus = 0; 
            ballStatus = 1;
            peng1Available = true;
            Initial_peng1.style["animation"] = "none"; 
            peng1dust.style["opacity"] = "1";
            peng1dust.style["left"] = "-5%";
            clearInterval(jumpInt);}, 700);
    }
}

var ballStatus = 1;
function shootBall(){
    if((pengPower.offsetWidth >= (powerContain.offsetWidth*0.05)) && ballStatus === 1 && shoot === 1 && GameInPause === 1){
        collectCoinsStatus = 0;
        let nv = (pengPower.offsetWidth - (powerContain.offsetWidth*0.05));
        let x = nv * 100/powerContain.offsetWidth;
        pengPower.style["width"] = x+"%";
        powerChargeStatus = 0
        ballStatus = 0;
        ShootBall.style["display"] = "block";
        const ballTimedisplay = setInterval(()=>{
           ballStatus = 1;
           ShootBall.style["display"] = "none";
           clearInterval(ballTimedisplay);
        }, 700);
    }      
}


function GhostPenguin(){
    if(peng1Available === true && (pengPower.offsetWidth >= (powerContain.offsetWidth*0.15)) && GameInPause === 1){
        collectCoinsStatus = 0;
        let nv = (pengPower.offsetWidth - (powerContain.offsetWidth*0.15));
        let x = nv * 100/powerContain.offsetWidth;
        pengPower.style["width"] = x+"%";
        powerChargeStatus = 0;
        //iniPengAvailable = 0;
        peng1Available = false;
        Initial_peng1.style["display"] = "none";
        peng1ghost.style["display"] = "block";
        peng1ghost.style["animation"] = "pengGhostAnim 0.65s linear infinite";
        const GhostTimeDisplay = setInterval(()=>{
            peng1Available = true;
            peng1ghost.style["display"] = "none";
            if(GhostStatus === 1){
                Initial_peng1.style["display"] = "block";
                //iniPengAvailable = 1;
            }
            clearInterval(GhostTimeDisplay);
        }, 7000);
    }
}

var activeShield = 0;
function peng1_Shield(){
     if(activeShield === 0 && GameInPause === 1 && (pengPower.offsetWidth >= (powerContain.offsetWidth*0.35))){
        collectCoinsStatus = 0;
        let nv = (pengPower.offsetWidth - (powerContain.offsetWidth*0.35));
        let x = nv * 100/powerContain.offsetWidth;
        pengPower.style["width"] = x+"%";
        powerChargeStatus = 0;
        activeShield = 1;
        peng1Shield.style["display"] = "block";
        const shieldTimeDisplay = setInterval(()=>{
            activeShield = 0;
            ballStatus = 1;
            peng1Shield.style["display"] = "none";
            clearInterval(shieldTimeDisplay);
        }, 12000);
     }
}

var shoot = 1;
function peng1_boule(){
    if((peng1Available === true || activateBoulePeng === 1) && GameInPause === 1 && (pengPower.offsetWidth >= (powerContain.offsetWidth*0.035))){
        
        if(activateBoulePeng === 1 && peng1Available === false){
            clearInterval(jumpInt);
            collectCoinsStatus = 0;
            pengGameStarted.style["margin-top"] = "0";
            divForGroundSnow.style["bottom"] = "0";
            anotherDiv.style["top"] = "0";
            activateBoulePeng = 0;
            collectCoinsStatus = 0;
            jumpStatus = 0; 
            ballStatus = 1;
            peng1Available = true;
            Initial_peng1.style["animation"] = "none"; 
        }
        let nv = (pengPower.offsetWidth - (powerContain.offsetWidth*0.035));
        let x = nv * 100/powerContain.offsetWidth;
        pengPower.style["width"] = x+"%";
        powerChargeStatus = 0;
        peng1Available = false;
        shoot = 0;
        Initial_peng1.style["display"] = "none";
        peng1Boule.style["display"] = "block";
        peng1dust.style["opacity"] = "0";
        peng1dust.style["left"] = "-9%";
        const bouleTimeDisplay = setInterval(()=>{
            powerChargeStatus = 1;
            peng1Available = true;
            shoot = 1;
            peng1Boule.style["display"] = "none";
            Initial_peng1.style["display"] = "block";
            peng1dust.style["opacity"] = "1";
            peng1dust.style["left"] = "-5%";
            clearInterval(bouleTimeDisplay);
        }, 550);
    }
}

var peng1Fatale1 = document.getElementById("peng1Fatale1");
var fatal1Peng1 = document.getElementById("fatal1Peng1");
var fatal2Peng1 = document.getElementById("fatal2Peng1");
var fatalStatus = 1;  var GhostStatus = 1;
var timef1_1 = 1700; var timef1_2 = 4000;

function Fatal1Peng1(){
    if(fatalStatus === 1 && GameInPause === 1 && (pengPower.offsetWidth >= (powerContain.offsetWidth*0.45))){
        collectCoinsStatus = 0;
        pauseWhenFatal();
        let nv = (pengPower.offsetWidth - (powerContain.offsetWidth*0.45));
        let x = nv * 100/powerContain.offsetWidth;
        pengPower.style["width"] = x+"%";
        powerChargeStatus = 0;
        GhostStatus = 0;
        fatalStatus = 0;
        peng1Available = false;
        ballStatus = 0;
        Initial_peng1.style["display"] = "none";
        peng1Boule.style["display"] = "none";
        peng1ghost.style["display"] = "none";
        peng1Fatale1.style["display"] = "flex";
        peng1Fatale1.style["z-index"] = "21";
        fatal1Peng1.style["display"] = "block";
        const Fatal1TimeDisplay = setInterval(()=>{
            removePause();
            peng1Fatale1.style["display"] = "none";
            fatal1Peng1.style["display"] = "none";
            fatal1.style["display"] = "block";
            peng1dust.style["opacity"] = "0";
            peng1dust.style["left"] = "-9%";
               const Fatal = setInterval(()=>{
                    peng1Available = true;
                    ballStatus = 1;
                    Initial_peng1.style["display"] = "block";
                    fatal1.style["display"] = "none";
                    fatalStatus = 1;
                    peng1dust.style["opacity"] = "1";
                    peng1dust.style["left"] = "-5%";
                    GhostStatus = 1;
                    clearInterval(Fatal);
               }, timef1_2);
            clearInterval(Fatal1TimeDisplay);
        }, timef1_1)
    }
}

var timef2_1 = 2200; var timef2_2 = 8000;
function Fatal2Peng1(){
    if(fatalStatus === 1 && GameInPause === 1 && (pengPower.offsetWidth >= (powerContain.offsetWidth*0.6))){
        collectCoinsStatus = 0;
        pauseWhenFatal();
        let nv = (pengPower.offsetWidth - (powerContain.offsetWidth*0.6));
        let x = nv * 100/powerContain.offsetWidth;
        pengPower.style["width"] = x+"%";
        powerChargeStatus = 0;
        GhostStatus = 0;
        fatalStatus = 0;
        peng1Available = false;
        ballStatus = 0;
        Initial_peng1.style["display"] = "none";
        peng1Boule.style["display"] = "none";
        peng1ghost.style["display"] = "none";
        peng1Fatale1.style["display"] = "flex";
        peng1Fatale1.style["z-index"] = "21";
        fatal2Peng1.style["display"] = "block";
        const Fatal1TimeDisplay = setInterval(()=>{
            removePause();
            peng1Fatale1.style["display"] = "none";
            fatal2Peng1.style["display"] = "none";
            fatal2.style["display"] = "block";
            peng1dust.style["opacity"] = "0";
            peng1dust.style["left"] = "-9%";
               const Fatal = setInterval(()=>{
                    peng1Available = true;
                    ballStatus = 1;
                    Initial_peng1.style["display"] = "block";
                    fatal2.style["display"] = "none";
                    fatalStatus = 1;
                    peng1dust.style["opacity"] = "1";
                    peng1dust.style["left"] = "-5%";
                    GhostStatus = 1;
                    clearInterval(Fatal);
               }, timef2_2);
            clearInterval(Fatal1TimeDisplay);
        }, timef2_1)
    }
}





// alert(Initial_peng1.offsetTop);

/* Animation des différentes fatales du penguin1 et quelque autre objet ou ennemie */
setInterval(()=>{
    if(Initialfatal === 1){
        fatal1.src = "../images/penguin_slider_images/pengFatal1.png";
        ours.src = "../images/penguin_slider_images/ours1.png";
        phoque.src = "../images/penguin_slider_images/phoque1.png";
        peng1dust.src = "../images/penguin_slider_images/peng1dust1.png"; 
        Initialfatal = 0;
    }else{
        fatal1.src = "../images/penguin_slider_images/pengFatal1_2.png";
        ours.src = "../images/penguin_slider_images/ours2.png";
        phoque.src = "../images/penguin_slider_images/phoque2.png";
        peng1dust.src = "../images/penguin_slider_images/peng1dust2.png"; 
        Initialfatal++;
    }
},120)



/* Fonction pour la detection des collisions du penguin et des obstacles ou bonus*/
function collision_detection_toChange(objet1, objet2){
    var objet1Collider; var objet2Collider;
    var objet1Width = objet1.offsetWidth; var objet1Height = objet1.offsetHeight;
    var objet2Width = objet2.offsetWidth; var objet2Height = objet2.offsetHeight;


    objet1Collider = {x: objet1.offsetLeft - objet1.scrollLeft, y: objet1.offsetTop - objet1.scrollTop, width: objet1Width, height: objet1Height};
    objet2Collider = {x: objet2.offsetLeft - objet2.scrollLeft, y: objet2.offsetTop - objet2.scrollTop, width: objet2Width, height: objet2Height};

    if(objet1Collider.x > objet2Collider.x + objet2Collider.width ||
      objet1Collider.x + objet1Collider.width < objet2Collider.x ||
      objet1Collider.y > objet2Collider.y + objet2Collider.height||
      objet1Collider.y + objet1Collider.height < objet2Collider.y){
        // console.log("Collision not detected");
        // objet1.style["background"] = "none";
        return false;
      }else{
        //alert("Il y'a collision");
        //objet1.style["background"] = "blue";
        return true;
      }
}


/* Fonction pour la detection des collisions du penguin et des obstacles ou bonus*/
function collision_detection(objet1, objet2){
    var objet1Collider; var objet2Collider;
    var objet1Width = objet1.offsetWidth; var objet1Height = objet1.offsetHeight;
    var objet2Width = objet2.offsetWidth; var objet2Height = objet2.offsetHeight;


    objet1Collider = {x: objet1.offsetLeft - objet1.scrollLeft, y: objet1.offsetTop - objet1.scrollTop, width: objet1Width, height: objet1Height};
    objet2Collider = {x: objet2.offsetLeft - objet2.scrollLeft, y: objet2.offsetTop - objet2.scrollTop, width: objet2Width, height: objet2Height};

    if(objet1Collider.x > objet2Collider.x + objet2Collider.width -55 ||
      objet1Collider.x + objet1Collider.width -25 < objet2Collider.x ||
      objet1Collider.y > objet2Collider.y + objet2Collider.height +15||
      objet1Collider.y + objet1Collider.height -15 < objet2Collider.y){
        // console.log("Collision not detected");
        // objet1.style["background"] = "none";
        return false;
      }else{
        //alert("Il y'a collision");
        //objet1.style["background"] = "blue";
        return true;
      }
}


/* Fonction contenant la variable de l'interval qui change le cocotier le rocher l'arbre et l'herbe en arrière plan et 
qui gère aussi les différentes collisions du jeu */

var ennemy1Status = 1, ennemy2Status = 1, ennemy3Status = 1, aigleStatus = 1, oursStatus = 1, phoqueStatus = 1;
var damage = document.getElementById("damage");
var InitializeImportantFunction;


function InitializeDetectPengCollisionGame(){
    GameInPause = 1;
    InitializeImportantFunction = setInterval(()=>{
        if(collision_detection_toChange(anotherDiv, CollisionDiv) === true){
            // alert("Collision");
             addTabAnother = "";
              choi = parseInt(Math.random()*5);
              
             for(var cechoi=0; cechoi<choi; cechoi++){
                   NumCase = parseInt(Math.random()*5);
                   if(anotherDivTab[NumCase]){
                    addTabAnother = addTabAnother + anotherDivTab[NumCase];
                   }
             }
             anotherDiv.innerHTML = addTabAnother;
        }
    
    
        // Condition pour mettre le jeu à GAME OVER
        if(pengHealth.offsetWidth <= 0){
            //alert("GAME OVER");
            ImagesAds();
            StartCountScore = false;
            pengHealth.style["width"] = "100%";
            pengPower.style["width"] = "100%";
    
            document.getElementById("GameOver10ypLink").style["animation-play-state"] = "running";
            document.getElementById("gameOver-pengslider").style["display"] = "flex";
            document.getElementById("scoreWin").innerText = document.getElementById("valueScore").innerText;
            document.getElementById("pointsWin").innerText = document.getElementById("yp-points").value;

            // Pour grossir le bouton Restart
            let optionsImg = document.querySelectorAll("#gameOptions img");
            for(let opt of optionsImg){
                opt.style["width"] = "17%";
                opt.style["height"] = "55%";
            }

            optionsImg[1].style["width"] = "25%";
            optionsImg[1].style["height"] = "90%";
    
            // Partie qui se chargera d'afficher les publicités au Game Over
    
            ennemy1.style["animation"] = "none";
            ennemy2.style["animation"] = "none";
            ennemy3.style["animation"] = "none";
            aigle.style["animation"] = "none";
            ours.style["animation"] = "none";
            phoque.style["animation"] = "none";
    
            for(let el of pause){
                         el.style["animation-play-state"] = "paused";
            }
    
            document.getElementById("ifContinue").style["animation-play-state"] = "running"; 
            document.getElementById("adImg1").style["animation-play-state"] = "running";
            document.getElementById("adImg2").style["animation-play-state"] = "running";
        }
    
        // Collision avec les pièces
           var coins1 = document.getElementById("coins1");
           var coins2 = document.getElementById("coins2");
           var coins3 = document.getElementById("coins3");
           var coins4 = document.getElementById("coins4");
           var coins5 = document.getElementById("coins5");
           var coins6 = document.getElementById("coins6");
           var coins_displayer = document.getElementById("coins-displayer");
    
           if(collision_detection_toChange(coins_displayer, CollisionDiv) === true){
                coins1.style["display"] = "none";
                coins2.style["display"] = "none";
                coins3.style["display"] = "none";
                coins4.style["display"] = "none";
                coins5.style["display"] = "none";
                coins6.style["display"] = "none";
     
                let disCoins = parseInt(Math.random()*7);
                if(disCoins === 0){
                    disCoins = 4;
                }
    
                let InCoins = 0;
                while(InCoins != disCoins){
                    InCoins++;
                    document.getElementById("coins"+InCoins).style["display"] = "block";
                }
    
           }
           if((collision_detection_toChange(Initial_peng1, coins1) === true && collectCoinsStatus === 1)){
              coins1.style["display"] = "none";
              yoyaPoints.value = yoyaPoints.value + 1;
              yoyaPoints.innerText = yoyaPoints.value;
           }
           if((collision_detection_toChange(Initial_peng1, coins2) === true && collectCoinsStatus === 1)){
            coins2.style["display"] = "none";
            yoyaPoints.value = yoyaPoints.value + 1;
            yoyaPoints.innerText = yoyaPoints.value;
           }
           if((collision_detection_toChange(Initial_peng1, coins3) === true && collectCoinsStatus === 1)){
            coins3.style["display"] = "none";
            yoyaPoints.value = yoyaPoints.value + 1;
            yoyaPoints.innerText = yoyaPoints.value;
          }
          if((collision_detection_toChange(Initial_peng1, coins4) === true && collectCoinsStatus === 1)){
            coins4.style["display"] = "none";
            yoyaPoints.value = yoyaPoints.value + 1;
            yoyaPoints.innerText = yoyaPoints.value;
          }
          if((collision_detection_toChange(Initial_peng1, coins5) === true && collectCoinsStatus === 1)){
            coins5.style["display"] = "none";
            yoyaPoints.value = yoyaPoints.value + 1;
            yoyaPoints.innerText = yoyaPoints.value;
          }
          if((collision_detection_toChange(Initial_peng1, coins6) === true && collectCoinsStatus === 1)){
            coins6.style["display"] = "none";
            yoyaPoints.value = yoyaPoints.value + 1;
            yoyaPoints.innerText = yoyaPoints.value;
          }
    
    
    
        // Collision qui met le jetpack en display none
        if(collision_detection_toChange(jetPack, CollisionDiv) === true){
            jetPack.style["animation"] = "none";
        }
    
        // Collision avec le Jet Pack
        var paradise = document.getElementById("paradiseDiv");
        var peng1inParadise = document.getElementById("peng1inParadise");
        var Angelpeng = document.getElementById("Angelpeng");
        var coins_earned = document.getElementById("coins-earned");
        var coinsGive = document.getElementById("coins-give");
        var jetDisplay = 1;
    
        if(collision_detection_toChange(Initial_peng1, jetPack) === true && (jetDisplay === 1)){
            pauseWhenInParadise();
            jetDisplay = 0;
            collectCoinsStatus = 0;
            Initial_peng1.style["display"] = "none";
            jetPack.style["left"] = "-165%";
            paradise.style["display"] = "flex";
            fatalStatus = 0;
            let paraTimeDisplay = setInterval(()=>{          
                    if(collision_detection_toChange(peng1inParadise, Angelpeng) === true){
                       // Initial_peng1.style["display"] = "block";
                       removePause();
                       jetPack.style["left"] = "100%";
                       jetDisplay = 1;
                       GhostPenguin();
                        clearInterval(paraTimeDisplay);
                                paradise.style["display"] = "none";
                                fatalStatus = 1;
                                let giveCoins = parseInt(Math.random()*50);
                                if(giveCoins < 10){
                                    giveCoins = 20;
                                }
                                coinsGive.innerText = "+"+giveCoins+" yp";
                                yoyaPoints.value = yoyaPoints.value + giveCoins;
                                yoyaPoints.innerText = yoyaPoints.value;
                                coins_earned.style["animation"] = "coinsEarned 5s linear";
                   
                        const earnedCoins = setInterval(()=>{
                            coins_earned.style["animation"] = "none";
                            clearInterval(earnedCoins);
                        }, 5000)
                    }
            }, 50)
        }
    
    
     // Detection des collisions avec l'énnemy1
        if(collision_detection(Initial_peng1, ennemy1) === true){
           if(ennemy1Status === 1){
            damage.style["background"] = "rgba(255, 0, 0, 0.432)";
            damage.style["animation"] = "dam 0.15s linear";
            let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
            let nv = (pengHealth.offsetWidth - (healthContain.offsetWidth*0.05));
            let x = nv * 100/healthContain.offsetWidth;
            if(x < 0){
                pengHealth.style["width"] = "0%";
            }
            pengHealth.style["width"] = x+"%";
            //ennemy1.style["transition"] = "0.05s ease";
            ennemy1.style["opacity"] = "0";
            ennemy1Status = 0;
           }
        //    else{
        //     const el = setInterval(()=>{
        //         ennemy1.style["opacity"] = "0";
        //         clearInterval(el);
        //     },1000)
        //    }
        }
    
        if(collision_detection_toChange(ennemy1, ShootBall) === true || 
           collision_detection_toChange(ennemy1, peng1Boule) === true || 
           collision_detection_toChange(ennemy1, fatal1) === true ||
           collision_detection_toChange(ennemy1, fatal2) === true ||
           collision_detection_toChange(ennemy1, peng1Shield) === true){
            if(ennemy1Status === 1){
                    damage.style["background"] = "rgba(255, 255, 255, 0.253)";
                    damage.style["animation"] = "dam 0.15s linear";
                    let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
            }
           // damage.style["animation"] = "dam 0.5s linear";
            ennemy1Status = 0;
            ennemy1.style["opacity"] = "0";
        }else if(collision_detection_toChange(ennemy1, CollisionDiv) === true){
            let decision1 = parseInt(Math.random()*4);
                     if(decision1 === 1 || decision1 === 2 || decision1 === 3){
                         ennemy1Status = 1;
                         ennemy1.style["opacity"] = "1";
                     }
         }else{ damage.style["opacity"] = "0"; }
    
        // Detection des collisions avec l'énnemy2
        if(collision_detection(Initial_peng1, ennemy2) === true){
            if(ennemy2Status === 1){
             damage.style["background"] = "rgba(255, 0, 0, 0.432)";
             damage.style["animation"] = "dam 0.15s linear";
             let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
             let nv = (pengHealth.offsetWidth - (healthContain.offsetWidth*0.067));
             let x = nv * 100/healthContain.offsetWidth;
             if(x < 0){
                 pengHealth.style["width"] = "0%";
             }
             pengHealth.style["width"] = x+"%";
             ennemy2.style["transition"] = "0.3s ease";
             ennemy2.style["opacity"] = "0";
             ennemy2Status = 0;
            }
         }
    
         if(collision_detection_toChange(ennemy2, ShootBall) === true || 
           collision_detection_toChange(ennemy2, peng1Boule) === true || 
           collision_detection_toChange(ennemy2, fatal1) === true ||
           collision_detection_toChange(ennemy2, fatal2) === true ||
           collision_detection_toChange(ennemy2, peng1Shield) === true){
            if(ennemy2Status === 1){
                damage.style["background"] = "rgba(255, 255, 255, 0.253)";
                damage.style["animation"] = "dam 0.15s linear";
                let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
        }
            ennemy2Status = 0;
            ennemy2.style["transition"] = "0.1s ease";
            ennemy2.style["opacity"] = "0";
        }else if(collision_detection_toChange(ennemy2, CollisionDiv) === true){
           let decision2 = parseInt(Math.random()*4);
                    if(decision2 === 1 || decision2 === 2 || decision2 === 3){
                        ennemy2Status = 1;
                        ennemy2.style["opacity"] = "1";
                    }
        }
    
        // Détection des collisions avec l'énnemi 3
        if(collision_detection(Initial_peng1, ennemy3) === true){
            if(ennemy3Status === 1){
             damage.style["background"] = "rgba(255, 0, 0, 0.432)";
             damage.style["animation"] = "dam 0.15s linear";
             let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
             let nv = (pengHealth.offsetWidth - (healthContain.offsetWidth*0.09));
             let x = nv * 100/healthContain.offsetWidth;
             if(x < 0){
                 pengHealth.style["width"] = "0%";
             }
             pengHealth.style["width"] = x+"%";
             ennemy3.style["transition"] = "0.1s ease";
             ennemy3.style["opacity"] = "0";
             ennemy3Status = 0;
            }
         }
    
         if(collision_detection_toChange(ennemy3, peng1Boule) === true || 
           collision_detection_toChange(ennemy3, fatal1) === true ||
           collision_detection_toChange(ennemy3, fatal2) === true ||
           collision_detection_toChange(ennemy3, peng1Shield) === true){
            if(ennemy3Status === 1){
                damage.style["background"] = "rgba(255, 255, 255, 0.253)";
                damage.style["animation"] = "dam 0.15s linear";
                let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
        }
            ennemy3Status = 0;
            ennemy3.style["transition"] = "0.1s ease";
            ennemy3.style["opacity"] = "0";
        }else if(collision_detection_toChange(ennemy3, CollisionDiv) === true){
           let decision3 = parseInt(Math.random()*4);
                    if(decision3 === 1 || decision3 === 2 || decision3 === 3){
                        ennemy3Status = 1;
                        ennemy3.style["opacity"] = "1";
                    }
        }
    
        // Détection des collisions avec l'énnemi aigle
        if(collision_detection(Initial_peng1, aigle) === true || collision_detection(peng1Boule, aigle) === true){
            if(aigleStatus === 1){
             damage.style["background"] = "rgba(255, 0, 0, 0.432)";
             damage.style["animation"] = "dam 0.15s linear";
             let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
             let nv = (pengHealth.offsetWidth - (healthContain.offsetWidth*0.17));
             let x = nv * 100/healthContain.offsetWidth;
             if(x < 0){
                 pengHealth.style["width"] = "0%";
             }
             pengHealth.style["width"] = x+"%";
             aigle.style["transition"] = "0.1s ease";
             aigle.style["opacity"] = "0";
             aigleStatus = 0;
            }
         }
    
         if(collision_detection_toChange(aigle, fatal1) === true ||
           collision_detection_toChange(aigle, fatal2) === true ||
           collision_detection_toChange(aigle, peng1Shield) === true){
            if(aigleStatus === 1){
                damage.style["background"] = "rgba(255, 255, 255, 0.253)";
                damage.style["animation"] = "dam 0.15s linear";
                let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
        }
            aigleStatus = 0;
            aigle.style["transition"] = "0.1s ease";
            aigle.style["opacity"] = "0";
        }else if(collision_detection_toChange(aigle, CollisionDiv) === true){
           let decision4 = parseInt(Math.random()*4);
                    if(decision4 === 1 || decision4 === 2 || decision4 === 3){
                        aigleStatus = 1;
                        aigle.style["opacity"] = "1";
                    }
        }
    
        // Détection des collisions avec l'énnemi ours
        if(collision_detection(Initial_peng1, ours) === true || collision_detection(peng1Boule, ours) === true){
            if(oursStatus === 1){
             damage.style["background"] = "rgba(255, 0, 0, 0.432)";
             damage.style["animation"] = "dam 0.15s linear";
             let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
             let nv = (pengHealth.offsetWidth - (healthContain.offsetWidth*0.26));
             let x = nv * 100/healthContain.offsetWidth;
             if(x < 0){
                 pengHealth.style["width"] = "0%";
             }
             pengHealth.style["width"] = x+"%";
             ours.style["transition"] = "0.1s ease";
             ours.style["opacity"] = "0";
             oursStatus = 0;
            }
         }
    
         if(collision_detection_toChange(ours, fatal1) === true ||
           collision_detection_toChange(ours, fatal2) === true /*||
           collision_detection_toChange(ours, peng1Shield) === true*/){
            if(oursStatus === 1){
                damage.style["background"] = "rgba(255, 255, 255, 0.253)";
                damage.style["animation"] = "dam 0.15s linear";
                let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
        }
            oursStatus = 0;
            ours.style["transition"] = "0.1s ease";
            ours.style["opacity"] = "0";
        }else if(collision_detection_toChange(ours, CollisionDiv) === true){
           let decision5 = parseInt(Math.random()*2);
                    if(decision5 === 1){
                        oursStatus = 1;
                        ours.style["opacity"] = "1";
                    }
        }
    
        // Détection des collisions avec l'énnemi phoque
        if(collision_detection(Initial_peng1, phoque) === true || collision_detection(peng1Boule, phoque) === true){
            if(phoqueStatus === 1){
             damage.style["background"] = "rgba(255, 0, 0, 0.432)";
             damage.style["animation"] = "dam 0.15s linear";
             let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
             let nv = (pengHealth.offsetWidth - (healthContain.offsetWidth*0.2));
             let x = nv * 100/healthContain.offsetWidth;
             if(x < 0){
                 pengHealth.style["width"] = "0%";
             }
             pengHealth.style["width"] = x+"%";
             phoque.style["transition"] = "0.1s ease";
             phoque.style["opacity"] = "0";
             phoqueStatus = 0;
            }
         }
    
         if(collision_detection_toChange(phoque, fatal1) === true ||
           collision_detection_toChange(phoque, fatal2) === true /*||
           collision_detection_toChange(phoque, peng1Shield) === true*/){
            if(phoqueStatus === 1){
                damage.style["background"] = "rgba(255, 255, 255, 0.253)";
                damage.style["animation"] = "dam 0.15s linear";
                let domage = setInterval(()=>{damage.style["animation"] = "none"; clearInterval(domage)}, 150);
        }
            phoqueStatus = 0;
            phoque.style["transition"] = "0.1s ease";
            phoque.style["opacity"] = "0";
        }else if(collision_detection_toChange(phoque, CollisionDiv) === true){
           let decision6 = parseInt(Math.random()*2);
                    if(decision6 === 1){
                        phoqueStatus = 1;
                        phoque.style["opacity"] = "1";
                    }
        }
    
    }, 5)
}




// variable de type tableau pour contenir les différentes images de anotherDiv
var anotherDivTab = ["<img src='../images/penguin_slider_images/roches.png' alt='' style='min-width: 40%; height: 40%;'>",
                     "<img src='../images/penguin_slider_images/cocotier.png' alt='' style='min-width: 40%; height: 120%;'>",
                     "<img src='../images/penguin_slider_images/herbes.png' alt='' style='min-width: 40%; height: 20%;'>",
                     "<img src='../images/penguin_slider_images/tree.png' alt='' style='min-width: 45%; height: 110%;'>"
                    ];


// interval pour animer peng1
  setInterval(()=>{
    if(peng1Available === true){
        Initial_peng1.src = "../images/penguin_slider_images/peng1_"+pinitial+".png";
    pinitial++;
    if(pinitial === 3){
        pinitial = 1;
       }
    } 
}, 150)


// alert(parseInt(Math.random()*6))
// var compteMil = 0;
// const feuMil = setInterval(()=>{
//    if(compteMil >= (1500/1.5)){
//       alert("vous avez fait 4.8788 secondes");
//       clearInterval(feuMil);
//    }
//    compteMil++;
// },10)




/* Interval pour avoir des mêmes proportion de dimensions sur des div ou des objets */
setInterval(()=>{
    grosseBoule.style["height"] = grosseBoule.offsetWidth+"px";
    pengIntroImg.style["width"] = consolescreen.offsetWidth+"px";
    pengIntroImg.style["height"] = consolescreen.offsetHeight+"px";
    penguinProfil.style["min-width"] = penguinProfil.offsetHeight+"px";
},100);
setInterval(()=>{
    pengIntroImg.src = "../images/penguin_slider_images/first_penguin_intro"+pengI+".png";
    pengI--;
    if(pengI === 0){
        pengI = 4;
    }
},100);



/* Fonction pour faire une selection(choisir) dans l'intro de penguin slider */
function selectChoicesUpinIntro(){
    if(locate_user.title === "Penguin Slider" && place_in_game.title === "" ){
        if(nb_sel != 0){
            nb_sel--;
            for(let nb_select of nb_selections){
                nb_select.style["transform"] = "scale(1)";
                nb_select.style["background"] = "none";
                nb_select.style["color"] = "white";
            }
            nb_selections[nb_sel].style["transform"] = "scale(1.2)";
            nb_selections[nb_sel].style["background"] = "linear-gradient(to top, red, rgb(247, 180, 56))";
            nb_selections[nb_sel].style["color"] = "black";
        } 
    }  
}

function selectChoicesDowninIntro(){
    if(locate_user.title === "Penguin Slider"  && place_in_game.title === "" ){
        if(nb_sel < nb_selections.length-1){
            nb_sel++;
            for(let nb_select of nb_selections){
                nb_select.style["transform"] = "scale(1)";
                nb_select.style["background"] = "none";
                nb_select.style["color"] = "white";
            }
            nb_selections[nb_sel].style["transform"] = "scale(1.2)";
            nb_selections[nb_sel].style["background"] = "linear-gradient(to top, red, rgb(247, 180, 56))";
            nb_selections[nb_sel].style["color"] = "black";
        }
    }
}


/* Fonction pour détecter le choix fait par l'utilisateur */
function selectDetection(){
    if(locate_user.title === "Penguin Slider"  && place_in_game.title === "" ){
        nb_selections[0].title = "Start Peng";
        nb_selections[1].title = "Choose Penguin";
        nb_selections[2].title = "Help Peng";
        nb_selections[3].title = "Exit Peng";
        
        /* Cette partie de la fonction permet d'annuler l'exécution de la fonction lorsque l'utilisateur 
        clique sur le bouton 2 de la console, car lorsqu'il clique sur le bouton 2, l'évènement de clic sur le
        bouton 2 est aussi écouté ailleurs(dans d'autres div), ainsi on crée un interval dans lequel on créera 
        une variable qui sera décrémenté après 100ms permettant ainsi l'utilisation de la fonction */
        
        const PvarIn = setInterval(()=>{
            if(Pvar < 1){
                Pvar++;
            }else{
                clearInterval(PvarIn);
            }
        }, 1000);

        /* A ce niveau maintenat, on écrit les instructions devant être exécutées dans la fonction lorsque 
        la variable Pvar == 1 */
        if(Pvar === 1){
                if(nb_selections[nb_sel].title === "Exit Peng"){
                    Pvar = -5;
                    divPenguinSlider.style["display"] = "none";
                    gamesMenu.style["display"] = "flex";
                    place_in_game.title = "";
                    locate_user.title = "consoleMenu";
                }else if(nb_selections[nb_sel].title === "Choose Penguin"){
                       alert("Veuillez choisir un penguin");
                }else if(nb_selections[nb_sel].title === "Help Peng"){
                    alert("Vous allez être redirigé vers la page d'aide por ce jeu !");
                }else{

                            document.getElementById("penguin-slider-intro").style["display"] = "none";
                            place_in_game.title = nb_selections[nb_sel].title;
                            penguinSliderIntro.style["display"] = "none";
                            pengGameStartIntro.style["display"] = "flex";

                            /* Interval permettant de gerer l'affichage et le retrait du tout premier intro
                            où le penguin glisse en entrée */
                            const interIn = setInterval(()=>{
                                if(compteIntroPeng === 3){
                                    pengGameStartIntro.style["display"] = "none";
                                    divUserPlaying.style["display"] = "flex";
                                    compteIntroPeng = 0;
                                    StartCountScore = true;
                                    pengHealth.style['width'] = "100%";
                                    pengPower.style['width'] = "100%";
                                    WhenstartPengGame();
                                    InitializePengScoreFunction();
                                    InitializeDetectPengCollisionGame();
                                    clearInterval(interIn);
                                }else{
                                    compteIntroPeng++;
                                }
                            },1000)

                    
                }
        }
    }
}

// Function contenant l'interval permettant d'incrémenter le score dans PengGame
var score = document.getElementById("valueScore");
var countScore = 0;
var interScore;

function InitializePengScoreFunction(){
    interScore = setInterval(()=>{
        if(StartCountScore === true && GameInPause === 1){
             score.innerText = countScore;
             countScore++;
    
             if(countScore >= 100){
                ennemy1.style["animation"] = "glissennemy1 calc(var(--pengGroundSlide)/1.5) linear infinite";
             }else{
                ennemy1.style["animation"] = "none";
             }
    
             if(countScore >= 300){
                ennemy2.style["animation"] = "glissennemy2 calc(var(--pengGroundSlide)/1.38) linear infinite";
             }else{
                ennemy2.style["animation"] = "none";
             }
    
             if(countScore === 1000){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore >= 1000){
                document.documentElement.style.setProperty("--pengGroundSlide", "5s");
                document.documentElement.style.setProperty("--pengBackGameStarted", "25s");
                ennemy3.style["animation"] = "rouleSursoi 1s linear infinite,  glissennemy3 calc(var(--pengGroundSlide)/1.26) linear infinite";
             }else{
                ennemy3.style["animation"] = "none";
             }
    
             if(countScore === 2500){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore >= 2500){
                document.documentElement.style.setProperty("--pengGroundSlide", "4s");
                document.documentElement.style.setProperty("--pengBackGameStarted", "20s");
                aigle.style["animation"] = "glissaigle calc(var(--pengGroundSlide)/1) linear infinite";
             }else{
                aigle.style["animation"] = "none";
             }
    
             if(countScore >= 3500){
                document.documentElement.style.setProperty("--pengBackGameStarted", "10s");
                document.documentElement.style.setProperty("--pengGroundSlide", "3.5s");
             }
    
             if(countScore === 4000){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore >= 6000){
                ours.style["animation"] = "glissours calc(var(--pengGroundSlide)/0.3) linear infinite";
             }else{
                ours.style["animation"] = "none";
             }
    
             if(countScore >= 10000){
                phoque.style["animation"] = "glissphoque calc(var(--pengGroundSlide)/0.3) linear infinite";
             }else{
                phoque.style["animation"] = "none";
             }
    
             if(countScore >= 5000){
                document.documentElement.style.setProperty("--pengGroundSlide", "3s");
             }
             if(countScore >= 25000){
                document.documentElement.style.setProperty("--pengGroundSlide", "2.5s");
             }
             if(countScore >= 45000){
                document.documentElement.style.setProperty("--pengGroundSlide", "2s");
             }
             if(countScore >= 70000){
                document.documentElement.style.setProperty("--pengGroundSlide", "1s");
             }
    
             if(countScore === 5500){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore === 8000){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore === 12000){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore === 15500){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore === 20000){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore === 25000){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore === 30000){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
             if(countScore >= 50000){
                jetPack.style["animation"] = "jetanim 0.85s linear infinite, slideJet calc(var(--pengGroundSlide)*1.3) linear infinite";
             }
        }
    }, 50)
}


/* Ici on appelle cette fonction lorsque l'utilisateur clique sur le bouton 2 de la console */
twobutton.addEventListener("click", ()=>{
    selectDetection();
    shootBall();
});
fourbutton.addEventListener("click", ()=>{
    GhostPenguin();
});
heightbutton.addEventListener("click", ()=>{
    peng1_Shield();
});
sixbutton.addEventListener("click", ()=>{
    peng1_boule();
});
LButton.addEventListener("click", ()=>{
    Fatal1Peng1();
});
RButton.addEventListener("click", ()=>{
    Fatal2Peng1();
});



/* Interval pour donner une bonne proportion de l'image en arrière plan */
setInterval(()=>{
    for(let img of images_for_background){
        img.style["width"] = consolescreen.offsetWidth+"px";
        img.style["height"] = consolescreen.offsetHeight+"px";
    }
    for(let water of images_for_water){
        water.style["width"] = back_images_water.offsetWidth+"px";
        water.style["height"] = back_images_water.offsetHeight+"px";
    }
},100)





/* Partie pour l'appui des touches sur la console */
upbutton.addEventListener("click", ()=>{
    selectChoicesUpinIntro();
    peng1Saut();
    //sautGhost();
});
downbutton.addEventListener("click", ()=>{
    selectChoicesDowninIntro();
});



/* Lorsque l'utilisateur appui sur la touche reset de la console */
resetButton.addEventListener("click", ()=>{
    Pvar = -5;
    nbofContinue = 1;
    UserClickPause = 0;
    pengGameStartIntro.style["display"] = "none";
    penguinSliderIntro.style["display"] = "flex";
    divUserPlaying.style["display"] = "none";

    for(let el of pause){
        el.style["animation-play-state"] = "running";
    }

    GameInPause = 0;
    clearInterval(InitializeImportantFunction);
    clearInterval(interScore);

})


/* Partie pour l'appui des touches au clavier lorsqu'un utilisateur utilise un PC pour jouer  */
window.addEventListener("keyup", (e) =>{
    if(e.keyCode === 13){
        // alert("Vous avez cliquez sur la touche entrée !");
    }else if(e.keyCode === 38){
        selectChoicesUpinIntro();
        peng1Saut();
    }else if(e.keyCode === 40){
        selectChoicesDowninIntro();
    }else if(e.keyCode === 98 /* Bouton 2 */){
        selectDetection();

        /* Ici ce sont les différentes fonctions qu'on appelle */
        shootBall();

    }else if(e.keyCode === 100 /* Bouton quatre */){
        GhostPenguin();
    }else if(e.keyCode === 104 /* Bouton huit */){
        peng1_Shield();
    }else if(e.keyCode === 102 /* Bouton six */){
        peng1_boule();
    }else if(e.keyCode === 76 || e.keyCode === 103){
        Fatal1Peng1();
    }else if(e.keyCode === 82 || e.keyCode === 105){
        Fatal2Peng1();
    }
    else if(e.keyCode === 8){
        Pvar = -5;
        nbofContinue = 1;
        UserClickPause = 0;
        pengGameStartIntro.style["display"] = "none";
        penguinSliderIntro.style["display"] = "flex";
        divUserPlaying.style["display"] = "none";

        for(let el of pause){
            el.style["animation-play-state"] = "running";
        }

        GameInPause = 0;
        clearInterval(InitializeImportantFunction);
        clearInterval(interScore);
    }
})

// setInterval(()=>{
//     alert("ok");
//     // document.documentElement.style.setProperty("--pengBackGameStarted", "none");
// }, 6000)