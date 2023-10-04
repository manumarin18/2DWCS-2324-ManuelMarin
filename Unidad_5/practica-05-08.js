window.onload = function () {
    //Función para comprobar si una fecha es válida
    function validarFecha(fecha) {
        //Definimos una expresión regular para validar la fecha en el formato DD/MM/YYYY.
        const expresionRegular = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
        //Devuelve un valor booleano que indica si existe o no un patrón en una cadena buscada.
        return expresionRegular.test(fecha);
    }

    //Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML por su ID.
        const inputFecha = document.getElementById("fecha");
        const inputMensaje = document.getElementById("mensaje");
        //Obtenemos la fecha ingresada por el usuario.
        const fecha = inputFecha.value;
        //Validamos la fecha utilizando la función que creamos.
        const esValida = validarFecha(fecha);
        //Mostramos el resultado en la caja de texto "Mensaje".
        if (esValida) {
            inputMensaje.value = `La fecha "${fecha}" es válida.`;
        } else {
            inputMensaje.value = `La fecha "${fecha}" no es válida. Utiliza el formato MM/DD/YYYY.`;
        }
    }

    document.getElementById("comprobar").addEventListener("click", comprobar);

}