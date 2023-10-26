window.onload = function () {
    //Función para validar una dirección
    function validarDireccion(direccion) {
        // Eliminar espacios en blanco iniciales y finales de la dirección
        direccion = direccion.trim();
    
        // Verificar la longitud total de la cadena entre 8 y 42 caracteres
        if (direccion.length < 8 || direccion.length > 42) {
            return false;
        }
    
        // Verificar que la dirección comience con una letra mayúscula o minúscula
        const primeraLetra = direccion.charAt(0);
        if (!/[A-Za-z]/.test(primeraLetra)) {
            return false;
        }
    
        // Verificar que la dirección termine con una letra mayúscula, minúscula o un dígito
        const ultimaLetra = direccion.charAt(direccion.length - 1);
        if (!/[A-Za-z0-9]/.test(ultimaLetra)) {
            return false;
        }
    
        // Verificar caracteres en medio
        for (let i = 1; i < direccion.length - 1; i++) {
            const caracter = direccion.charAt(i);
            // Permitir letras, dígitos, y los caracteres especiales º, ª, /, -
            if (!/[A-Za-z0-9ºª\/\-]/.test(caracter)) {
                return false;
            }
        }
    
        // Si pasa todas las validaciones, la dirección es válida
        return true;
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
