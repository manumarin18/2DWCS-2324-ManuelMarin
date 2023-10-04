window.onload = function () {
    // Función para validar una localidad
    function validarLocalidad(localidad) {
        /*Expresión regular para validar la localidad:
        Debe comenzar con tres letras, luego puede contener letras o espacios,
        y finalizar con dos letras. El número de caracteres debe estar entre 7 y 35.*/
        const expresionRegular = /^[A-Za-z]{3}[A-Za-z\s]{1,30}[A-Za-z]{2}$/;

        return expresionRegular.test(localidad);
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
