## Definición del producto

### Encriptador de contraseñas para internet.

Dirigido a cualquier persona que haga uso de internet donde se emplee una contraseña.
La principal usabilidad de la WebApp es crear una contraseña más seguras a partir de una palabra, fecha, un recuerdo,  que resulte sencilla de recordar para ti, como el nombre de tu gatito, perrito, una frase como por ejemplo “un dia vi una vaca vestida de uniforme” la aplicación te permitirá cifrar estas palabras sencillas y crear una contraseña más segura que puedes utilizar en portales web, como tu correo electrónico, tus redes sociales, e.t.c.

La Técnica de cifrado que utiliza esta aplicación es el Cifrado César, el cual, es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.
Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Para desarrollar la aplicación que permitiera cifrar y descifrar  las palabras ingresadas se empleó una fórmula matemática que se explica a continuación: 

  (x - 65 + n) % 26 + 65  

### Donde:

* X: Se refiere a la posición de cada letra (de la palabra ingresada por el usuario) en el código Ascii.

* 65: Se refiere a partir de donde comenzamos a considerar las posiciones de las letras en el Codigo Ascii, para efectos de esta aplicación comenzará en la A mayúscula, la cual obedece a la posición 65.

* n: Se refiere al desplazamiento seleccionado por el usuario para encriptar o desencriptar su mensaje.

* 26: Se utiliza este número porque es la cantidad de caracteres que abarcaremos en el código Ascii, para efectos de esta aplicación desde la letra A (Mayúscula) hasta la Z (Mayúscula) son un total de 26 caracteres.
