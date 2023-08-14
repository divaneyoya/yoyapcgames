// alert("Bonjour tout le monde !");
var nombre = document.getElementById("nombre");
setInterval(()=>{
    nombre.value = parseInt(nombre.value) + 1;
},1000)