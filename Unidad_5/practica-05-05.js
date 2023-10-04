//Esta función se ejecuta cuando la página se carga completamente
window.onload = function () {
    //Función para contar las vocales en una cadena
    function contarVocales(cadena) {
        const vocales = "aeiouAEIOU"; // Lista de vocales en minúsculas y mayúsculas
        let contadorVocales = 0; // Inicializamos un contador de vocales

        //Recorremos la cadena de entrada
        for (let i = 0; i < cadena.length; i++) {
            const caracter = cadena[i];
            //Comprobamos si el caracter actual está en la lista de vocales
            if (vocales.includes(caracter)) {
                contadorVocales++; //Si es una vocal, incrementamos el contador en 1
            }
        }

        return contadorVocales; //Devolvemos el número total de vocales contadas
    }

    //Función para contar las veces que aparece una vocal en una cadena
    function contarVecesVocal(cadena, vocal) {
        let contador = 0; //Inicializamos un contador de veces que aparece la vocal

        //Recorremos la cadena de entrada
        for (let i = 0; i < cadena.length; i++) {
            const caracter = cadena[i];
            //Comprobamos si el caracter actual es igual a la vocal o a su versión en mayúsculas
            if (caracter === vocal || caracter === vocal.toUpperCase()) {
                contador++; //Si coincide, incrementamos el contador en 1
            }
        }

        return contador; //Devolvemos el número total de veces que aparece la vocal
    }

    //Función para contar las consonantes en una cadena
    function contarConsonantes(cadena) {
        const consonantes = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ"; //Lista de consonantes en minúsculas y mayúsculas
        let contadorConsonantes = 0; //Inicializamos un contador de consonantes

        //Recorremos la cadena de entrada
        for (let i = 0; i < cadena.length; i++) {
            const caracter = cadena[i];
            //Comprobamos si el caracter actual está en la lista de consonantes
            if (consonantes.includes(caracter)) {
                contadorConsonantes++; //Si es una consonante, incrementamos el contador en 1
            }
        }

        return contadorConsonantes; //Devolvemos el número total de consonantes contadas
    }

    //Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML relacionados con la entrada y la salida de datos
        const inputCadena = document.getElementById("cadena");
        const inputNumeroVocales = document.getElementById("numeroVocales");
        const inputVecesVocalA = document.getElementById("vecesVocalA");
        const inputVecesVocalE = document.getElementById("vecesVocalE");
        const inputVecesVocalI = document.getElementById("vecesVocalI");
        const inputVecesVocalO = document.getElementById("vecesVocalO");
        const inputVecesVocalU = document.getElementById("vecesVocalU");
        const inputConsonantes = document.getElementById("consonantes");

        //Obtenemos la cadena ingresada por el usuario
        const cadena = inputCadena.value;

        //Verificamos si la cadena es válida (no está vacía)
        if (cadena.trim() === "") {
            alert("Por favor, ingresa una cadena válida.");
            return; //Si la cadena está vacía, mostramos una alerta y la función se detiene
        }

        //Contamos las vocales y actualizamos los campos de salida
        const numeroVocales = contarVocales(cadena);
        inputNumeroVocales.value = numeroVocales;

        //Contamos las veces que aparece cada vocal y actualizamos los campos de salida
        inputVecesVocalA.value = contarVecesVocal(cadena, "a");
        inputVecesVocalE.value = contarVecesVocal(cadena, "e");
        inputVecesVocalI.value = contarVecesVocal(cadena, "i");
        inputVecesVocalO.value = contarVecesVocal(cadena, "o");
        inputVecesVocalU.value = contarVecesVocal(cadena, "u");

        //Contamos las consonantes y actualizamos el campo de salida
        const numeroConsonantes = contarConsonantes(cadena);
        inputConsonantes.value = numeroConsonantes;
    }

    //Agregamos un evento "click" al botón "Comprobar" para que llame a la función comprobar
    document.getElementById("comprobar").addEventListener("click", comprobar);

}
