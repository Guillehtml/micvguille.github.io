document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById('demo').innerHTML = "BIENVENIDO A MI PERFIL"
   }
   
   function mostrarOcultar(idElemento) {
       document.getElementById(idElemento).classList.toggle("hide");
   }

   