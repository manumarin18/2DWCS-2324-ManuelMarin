//Función para que que se ejecute el código en cuanto cargue la página.
window.onload = function () {
    //Función para comprobar cuántas veces aparece una subcadena en una cadena.
    function contarSubcadenaEnCadena(cadena, subcadena) {
        //Convertimos ambas cadenas a minúsculas para hacer la comparación sin distinción de mayúsculas/minúsculas.
        const cadenaMinuscula = cadena.toLowerCase();
        const subcadenaMinuscula = subcadena.toLowerCase();

        //Inicializamos un contador en 0 y un índice para buscar la primera aparición de la subcadena en la cadena principal.
        let contador = 0;
        let indice = cadenaMinuscula.indexOf(subcadenaMinuscula);

        //Iniciamos un bucle while que se ejecutará mientras indice no sea igual a -1.
        while (indice !== -1) {
            contador++; //Aumentar el contador cada vez que se encuentra la subcadena
            indice = cadenaMinuscula.indexOf(subcadenaMinuscula, indice + 1); //Buscar la siguiente aparición
        }

        return contador; //Devolver la cantidad total de veces que aparece la subcadena en la cadena principal.
    }

    //Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML
        const inputCadena = document.getElementById("cadena");
        const inputSubcadena = document.getElementById("subcadena");
        const inputMensaje = document.getElementById("mensaje");

        //Obtenemos las cadenas ingresadas por el usuario
        const cadena = inputCadena.value;
        const subcadena = inputSubcadena.value;

        //Verificamos si alguna de las cadenas es vacía con el método trim() que elimina los espacios en blanco al principio y al final de una cadena.
        if (cadena.trim() === "" || subcadena.trim() === "") {
            alert("Por favor, ingresa ambas cadenas.");
            return; //Detenemos la ejecución si falta información
        }

        //Contamos las apariciones de la subcadena en la cadena
        const resultado = contarSubcadenaEnCadena(cadena, subcadena);

        //Mostramos el resultado en la caja de texto "Mensaje"
        inputMensaje.value = 'La subcadena "${subcadena}" aparece ${resultado} veces en la cadena.';
    }

    //Agregamos un evento "click" al botón "Comprobar" para que llame a la función comprobar
    document.getElementById("comprobar").addEventListener("click", comprobar);

}