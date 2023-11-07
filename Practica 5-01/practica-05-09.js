window.onload = function () {
    //Función para comprobar si una email es válido
    function validarEmail(email) {
        //Dividimos el email en partes usando el carácter "@"
        const partes = email.split('@');
        //Verificamos si hay exactamente dos partes (nombre de usuario y dominio)
        if (partes.length !== 2) {
            return false;
        }
        const [usuario, dominio] = partes;
        //Validamos el nombre de usuario
        if (usuario.length < 1 || usuario.length > 64) {
            return false;
        }
        //Validamos el dominio
        if (dominio.length < 3 || dominio.length > 255) {
            return false;
        }
        //Verificamos que el dominio tenga un solo punto
        if (dominio.split('.').length !== 2) {
            return false;
        }
        //Verificamos que todas las partes tengan caracteres válidos
        const caracteresValidos = /^[A-Za-z0-9.-]+$/;
        if (!caracteresValidos.test(usuario) || !caracteresValidos.test(dominio)) {
            return false;
        }
        return true;
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
