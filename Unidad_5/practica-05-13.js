window.onload = function () {
    //Función para verificar si una cadena es un palíndromo
    function esPalindromo(cadena) {
        //Eliminamos los espacios en blanco y convertimos la cadena a minúsculas
        cadena = cadena.replace(/\s/g, '').toLowerCase();

        //Invertimos la cadena y la comparamos con la original
        return cadena === cadena.split('').reverse().join('');
    }

    //Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML
        const inputPalindromo = document.getElementById("palindromo");
        const inputMensaje = document.getElementById("mensaje");
        //Obtenemos la cadena ingresada por el usuario
        const cadena = inputPalindromo.value;
        //Verificamos si la cadena es un palíndromo
        const esUnPalindromo = esPalindromo(cadena);
        //Mostramos el resultado en la caja de texto "Mensaje"
        if (esUnPalindromo) {
            inputMensaje.value = `"${cadena}" es un palíndromo.`;
        } else {
            inputMensaje.value = `"${cadena}" no es un palíndromo.`;
        }
    }

    document.getElementById("comprobar").addEventListener("click", comprobar);

}
