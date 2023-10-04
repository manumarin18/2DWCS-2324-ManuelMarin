window.onload = function () {
    //Función para comprobar si un nombre cumple con las características
    function validarNombre(nombre) {
        /*Expresión regular para validar el nombre:
         -Mmpieza y termina por una letra.
         -Tiene una longitud mínima de 3 caracteres.
         -Entre el primer y el último carácter puede tener letras, "º", "ª", "-", o espacio.
         -El número de caracteres va a estar comprendido entre 3 y 27.*/
        const expresionRegular = /^[A-Za-zÁáÉéÍíÓóÚúºª\- ]{3,27}$/;
        //Devuelve un valor booleano que indica si existe o no un patrón en una cadena buscada.
        return expresionRegular.test(nombre);
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