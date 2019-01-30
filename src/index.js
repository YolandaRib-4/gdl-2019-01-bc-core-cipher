
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