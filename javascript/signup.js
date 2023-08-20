var user = document.getElementById("user");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var passRepeat = document.getElementById("passrepeat");


setInterval(()=>{
    document.getElementById("formulaire").style["width"] = 
    (document.getElementById("formulaire").offsetHeight / 1.3)+'px';
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


