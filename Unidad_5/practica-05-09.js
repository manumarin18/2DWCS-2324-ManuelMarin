window.onload = function () {
    //Función para comprobar si una email es válido
    function validarEmail(email) {
        /*Expresión regular para validar el email:
        a a empezar por una letra, a continuación va a tener letras,
        dígitos, guión o punto en un número indeterminado de caracteres,
        le va a seguir una letra o un dígito, a continuación va a tener el signo “@”,
        luego una letra a continuación una subcadena con dígitos,
        letras o guión, le sigue una letra o un dígito, a continuación un punto,
        por último va a terminar con entre dos y cuatro letras.*/

        const expresionRegular = /^[A-Za-z][A-Za-z0-9.-]*[A-Za-z0-9]@[A-Za-z0-9.-]*[A-Za-z0-9]\.[A-Za-z]{2,4}$/;
        return expresionRegular.test(email);
    }

    //Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML
        const inputEmail = document.getElementById("email");
        const inputMensaje = document.getElementById("mensaje");
        //Obtenemos el nombre ingresado por el usuario
        const email = inputEmail.value;
        //Verificamos si el email es válido según la expresión regular
        const esValido = validarEmail(email);
        //Mostramos el resultado en la caja de texto "Mensaje"
        if (esValido) {
            inputMensaje.value = `El email "${email}" cumple con las características requeridas.`;
        } else {
            inputMensaje.value = `El email "${email}" no cumple con las características requeridas.`;
        }
    }

    document.getElementById("comprobar").addEventListener("click", comprobar);

}
