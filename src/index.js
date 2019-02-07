
let idPantallaActual = "pantalla-bienvenida";
let pantallaInicial = document.getElementById(idPantallaActual);
pantallaInicial.style.display = "block";
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btnCifrar = document.getElementById('btn-cifrar');
const btnDescifrar = document.getElementById('btn-descifrar');

btn1.onclick = ()=> controladorPantallas('pantalla-bienvenida');
btn2.onclick = ()=> controladorPantallas('pantalla-2');
btn3.onclick = ()=> controladorPantallas('pantalla-3');
btn4.onclick = ()=> controladorPantallas('pantalla-bienvenida');
btnCifrar.onclick = ()=> seleccionador(true);
btnDescifrar.onclick = ()=> seleccionador(false);

// Funcion para controlar pantallas
const controladorPantallas = (idPantallaNueva) => {
  const pantallaActual = document.getElementById(idPantallaActual);
  const pantallaNueva = document.getElementById(idPantallaNueva); 
  pantallaActual.style.display = "none";
  pantallaNueva.style.display = "block";
  idPantallaActual = idPantallaNueva;
};

const seleccionador = (encript) => {
    if (encript) {
      let mensaje = (document.getElementById("mensaje").value).toUpperCase();
      let offset = parseInt(document.getElementById("offset").value);
      mensaje = cipher.encode(offset, mensaje);
      const paraimprimirmensaje = document.getElementById("imprimir"); 
      paraimprimirmensaje.innerHTML = mensaje; 
    } else {
      let mensaje = (document.getElementById("mensaje-descifrar").value).toUpperCase();
      let offset = parseInt(document.getElementById("offset-negativo").value);
      mensaje = cipher.decode(offset, mensaje);
      const paraimprimirmensaje = document.getElementById("imprimir-descifrado"); 
      paraimprimirmensaje.innerHTML = mensaje;  
    }
};





  


   
