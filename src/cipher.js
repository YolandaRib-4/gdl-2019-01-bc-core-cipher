window.cipher = {};

//Funcion ENCRIPTAR
cipher.encode = (offset, mensaje) => { 
    
  let mensajeEncriptado = [];
    
  for (let recorrido = 0 ; recorrido < mensaje.length ; recorrido++) {   
   let enascii = mensaje.charCodeAt(recorrido);
   let nuevaposicion = (enascii - 65 + offset)%26 + 65;
   let nuevaletra = String.fromCharCode(nuevaposicion);
   mensajeEncriptado.push(nuevaletra);
  }  
  return mensajeEncriptado.join(''); 
   };
  
  //Funcion DESCENCRIPTAR
   cipher.decode = (offset, mensaje) => {    
      
    let mensajeEncriptado = [];
      
    for (let recorrido = 0 ; recorrido < mensaje.length ; recorrido++) {   
     let enascii = mensaje.charCodeAt(recorrido);
     let nuevaposicion = (enascii + 65 - offset)%26 + 65;
     let nuevaletra = String.fromCharCode(nuevaposicion);
     mensajeEncriptado.push(nuevaletra);
    }  
    return mensajeEncriptado.join(''); 
     };
