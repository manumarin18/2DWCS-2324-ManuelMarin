    /*Usamos esta función para que el código se ejecute
    en cuanto cargue la página*/
    window.onload = function () {
    
        /*Hacemos una funcion para verificar si un número es primo
        utilizando un bucle for*/
        function esPrimo(numero) {
            //Si el número es menor o igual a 1, no es primo
            if (numero <= 1) {
                return false;
            }
            //Empezamos a verificar desde el número 2
            for (var i = 2; i < numero; i++) {
                // Si encontramos un número que divide a 'numero', no es primo
                if (numero % i === 0) {
                    return false;
                }
            }
            //Si ningún número lo divide, es primo
            return true;
        }

    //Definimos otra función para calcular y mostrar números primos
    function calcularNumerosPrimos() {
        /*Definimos dos constantes para obtener los números iniciales y finales
        que pongamos en el "input" y los convierta en números enteros utilizando "parseInt()"*/
        const numeroInicial = parseInt(document.getElementById("numeroInicial").value);
        const numeroFinal = parseInt(document.getElementById("numeroFinal").value);

        //Creamos otra constante donde mostraremos los números primos en un "textarea"
        const textarea = document.getElementById("numerosPrimos");

        /*Creamos un array vacío llamado numerosPrimos que se utilizará
        para almacenar los números primos encontrados*/
        let numerosPrimos = [];

        /*Usamos la funcion "isNaN()" para verificar si los valores
        ingresados son válidos (Not-a-Number)*/
        if (isNaN(numeroInicial) || isNaN(numeroFinal) || numeroInicial <= 0 || numeroFinal <= 0) {
            textarea.value = "Por favor, ingresa números válidos.";
            return;
        }

        //Usamos un bucle for para encontrar y almacenar los números primos en el rango especificado
        for (let i = numeroInicial; i <= numeroFinal; i++) {
            if (esPrimo(i)) {
                /*Utilizamos la función ".push()" para agregar al array "numerosPrimos"
                los numeros primos encontrados en el bucle*/
                numerosPrimos.push(i);
            }
        }

        /*Hacemos un if para mostrar los numeros primos en el area de texto,
        usando ".length" para verificar si la longuitud del array es igual a cero*/
        if (numerosPrimos.length === 0) {
            textarea.value = "No se encontraron números primos en el rango especificado.";
        } else {
            /*Usamos el meétofo ".join()" para devolver los numeros del
            array "numerosPrimos" junto al separador "|"*/
            textarea.value = numerosPrimos.join(" | ");
        }
    }


//Agregamos el evento "click" al botón "Calcular" para que llame a la función calcularNumerosPrimos
        document.getElementById("calcular").addEventListener("click", calcularNumerosPrimos);
    }