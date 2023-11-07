window.onload = function () {
    // Función para validar una URL
    function validarURL(url) {
        /*Expresión regular para validar la URL:
        Puede comenzar con "http://", "https://", o ninguna de las dos.
        Luego, debe tener "www." seguido de letras, dígitos o guiones.
        Finalmente, debe terminar con un punto seguido de entre 2 y 4 letras.*/
        const expresionRegular = /^(https?:\/\/)?(www\.)[A-Za-z0-9-]+(\.[A-Za-z]{2,4})$/;

        return expresionRegular.test(url);
    }

    // Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML
        const inputURL = document.getElementById("url");
        const inputMensaje = document.getElementById("mensaje");
        //Obtenemos la URL ingresada por el usuario
        const url = inputURL.value;
        //Verificamos si la URL es válida según la expresión regular
        const esValida = validarURL(url);
        //Mostramos el resultado en la caja de texto "Mensaje"
        if (esValida) {
            inputMensaje.value = `La URL "${url}" es válida.`;
        } else {
            inputMensaje.value = `La URL "${url}" no es válida.`;
        }
    }

    document.getElementById("comprobar").addEventListener("click", comprobar);

}