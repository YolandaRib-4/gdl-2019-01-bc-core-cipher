
let idPantallaActual = "pantalla-bienvenida";
let pantallaInicial = document.getElementById(idPantallaActual);
pantallaInicial.style.display = "block";


// Funcion para controlar pantallas
const controladorPantallas = (idPantallaNueva) => { 
  const pantallaActual = document.getElementById(idPantallaActual);
  const pantallaNueva = document.getElementById(idPantallaNueva); 
  pantallaActual.style.display = "none";
  pantallaNueva.style.display = "block";
  idPantallaActual = idPantallaNueva;
}

//Funcion para guardar el mensaje - offset e imprimir
const input = () => {
let mensaje = document.getElementById("mensaje").value;
let offset = parseInt(document.getElementById("offset").value);
  
 let mensajeEncriptado = [];
  
for (let recorrido = 0 ; recorrido < mensaje.length ; recorrido++) {   
 let enascii = mensaje.charCodeAt(recorrido);
 let nuevaposicion = (enascii - 65 + offset)%26 + 65;
 let nuevaletra = String.fromCharCode(nuevaposicion);
 mensajeEncriptado.push(nuevaletra);
}  
  
 const paraimprimirmensaje = document.getElementById("imprimir"); 
 paraimprimirmensaje.innerHTML = mensajeEncriptado.join(''); 
  
 }
