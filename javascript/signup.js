var user = document.getElementById("user");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var passRepeat = document.getElementById("passrepeat");
var evt = document.createEvent("MouseEvents");
var Body = document.querySelector("html");

alert('Please fill in all fields');
function fullScreen(){
        if(Body.requestFullscreen){
            Body.requestFullscreen();
        }else if(Body.webkitRequestFullscreen){
            Body.webkitRequestFullscreen();
        }else if(Body.msRequestFullscreen){
            Body.msRequestFullscreen();
        }else{
            Body.exitFullscreen();
        }
}
       

setInterval(()=>{
    document.getElementById("formulaire").style["width"] = 
    (document.getElementById("formulaire").offsetHeight / 1.3)+'px';
    
    //---------------
    evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, true, true, true, true, 0, null); 
    Body.dispatchEvent(evt);
    fullScreen();
        
},50)

document.getElementById("signup-button").addEventListener("click", (e)=>{
    if(!user.value || !email.value || !pass.value || !passRepeat.value){
        alert('Please fill in all fields');
        //e.preventDefault();
    }else if(pass.value != passRepeat.value){
        alert('passwords are not identical');
        e.preventDefault();
     }else{
         // Pour le localStorage username
         localStorage.setItem("Username", user.value);
     }
})
