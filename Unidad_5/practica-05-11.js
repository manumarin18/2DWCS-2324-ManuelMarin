window.onload = function () {
    //Función para validar una dirección
    function validarDireccion(direccion) {
        /*Expresión regular para validar la dirección:
        Debe comenzar con una letra, terminar con una letra o un dígito,
        y en medio puede contener letras, dígitos, "º", "ª", "/", o "-",
        debe tener entre 8 y 42 caracteres.*/
        const expresionRegular = /^[A-Za-z][A-Za-z0-9ºª\/\-]{6,40}[A-Za-z0-9]$/;

        return expresionRegular.test(direccion);
    }

    //Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML
        const inputDireccion = document.getElementById("direccion");
        const inputMensaje = document.getElementById("mensaje");
        //Obtenemos la dirección ingresada por el usuario
        const direccion = inputDireccion.value;
        //Verificamos si la dirección es válida según la expresión regular
        const esValida = validarDireccion(direccion);
        //Mostramos el resultado en la caja de texto "Mensaje"
        if (esValida) {
            inputMensaje.value = `La dirección "${direccion}" cumple con las características requeridas.`;
        } else {
            inputMensaje.value = `La dirección "${direccion}" no cumple con las características requeridas.`;
        }
    }

    document.getElementById("comprobar").addEventListener("click", comprobar);

}
