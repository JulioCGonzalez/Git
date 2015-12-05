/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
$(document).ready(function(){  
   $(‘#boton-guardar’).click(function(){      
/*Captura de datos escrito en los inputs*/      
var email = document.getElementById("email").value;
var asunto = document.getElementById("asunto").value;   
var mensaje = document.getElementById("mensaje").value
/*Guardando los datos en el LocalStorage*/
localStorage.setItem("Email", email);
localStorage.setItem("Asunto",asunto);
localStorage.setItem("Mensaje",mensaje);    
/*Limpiando los campos o inputs*/
document.getElementById("email").value = "";
document.getElementById("asunto").value = "";
document.getElementById("mensaje").value = "";    
   });  
});

/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){  
   $(‘#boton-cargar’).click(function(){                      
/*Obtener datos almacenados*/
var email = localStorage.getItem("Email");
var asunto = localStorage.getItem("Asunto");
var mensaje = localStorage.getItem("Mensaje");    
/*Mostrar datos almacenados*/    
document.getElementById("email").innerHTML = email;
document.getElementById("asunto").innerHTML = asunto;
document.getElementById("mensaje").innerHTML = mensaje;    
    
   });  
});