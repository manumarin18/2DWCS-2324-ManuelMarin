window.onload = function () {
    //Función para validar una localidad
    function validarLocalidad(localidad) {
        //Verificamos la longitud de la localidad (debe estar entre 7 y 35 caracteres)
        if (localidad.length < 7 || localidad.length > 35) {
            return false; // Si no cumple con la longitud requerida, es inválida
        }
        //Verificamos si comienza con tres letras
        if (!esLetra(localidad[0]) || !esLetra(localidad[1]) || !esLetra(localidad[2])) {
            return false; // Si los primeros tres caracteres no son letras, es inválida
        }
        //Verificamos si termina con dos letras
        if (!esLetra(localidad[localidad.length - 2]) || !esLetra(localidad[localidad.length - 1])) {
            return false; // Si los dos últimos caracteres no son letras, es inválida
        }
        //Verificamos los caracteres en medio de la localidad (pueden ser letras o espacios)
        for (let i = 3; i < localidad.length - 2; i++) {
            const caracter = localidad[i];
            if (!esLetra(caracter) && caracter !== ' ') {
                return false;//Si un carácter no es letra ni espacio devuelve false
            }
        }
        return true;//Si pasó todas las validaciones devuelve true
    }

    //Función para verificar si un carácter es una letra
    function esLetra(caracter) {
        return (caracter >= 'A' && caracter <= 'Z') || (caracter >= 'a' && caracter <= 'z');
    }

    //Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML
        const inputLocalidad = document.getElementById("localidad");
        const inputMensaje = document.getElementById("mensaje");
        //Obtenemos la localidad ingresada por el usuario
        const localidad = inputLocalidad.value;
        //Verificamos si la localidad es válida según la expresión regular
        const esValida = validarLocalidad(localidad);
        //Mostramos el resultado en la caja de texto "Mensaje"
        if (esValida) {
            inputMensaje.value = `La localidad "${localidad}" cumple con las características requeridas.`;
        } else {
            inputMensaje.value = `La localidad "${localidad}" no cumple con las características requeridas.`;
        }
    }

    document.getElementById("comprobar").addEventListener("click", comprobar);

}
