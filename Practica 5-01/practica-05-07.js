window.onload = function () {
    //Función para comprobar si un nombre cumple con las características
    function validarNombre(nombre) {
        //Eliminamos espacios en blanco al principio y al final de la cadena
        nombre = nombre.trim();
        //Verificamos que la longitud del nombre esté entre 3 y 27 caracteres
        if (nombre.length < 3 || nombre.length > 27) {
            return false;
        }
        //Verificamos que el nombre comience y termine con una letra
        if (!/^[A-Za-zÁáÉéÍíÓóÚú]/.test(nombre.charAt(0)) || !/^[A-Za-zÁáÉéÍíÓóÚú]/.test(nombre.charAt(nombre.length - 1))) {
            return false;
        }
        //Verificamos que los caracteres intermedios sean letras, "º", "ª", "-", o espacios
        for (let i = 1; i < nombre.length - 1; i++) {
            const caracter = nombre.charAt(i);
            if (!/[A-Za-zÁáÉéÍíÓóÚúºª\- ]/.test(caracter)) {
                return false;
            }
        }
        return true;
    }

    //Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML
        const inputNombre = document.getElementById("nombre");
        const inputMensaje = document.getElementById("mensaje");
        //Obtenemos el nombre ingresado por el usuario
        const nombre = inputNombre.value;
        //Verificamos si el nombre es válido según la expresión regular
        const esValido = validarNombre(nombre);
        //Mostramos el resultado en la caja de texto "Mensaje"
        if (esValido) {
            inputMensaje.value = `El nombre "${nombre}" cumple con las características requeridas.`;
        } else {
            inputMensaje.value = `El nombre "${nombre}" no cumple con las características requeridas.`;
        }
    }

    document.getElementById("comprobar").addEventListener("click", comprobar);

}