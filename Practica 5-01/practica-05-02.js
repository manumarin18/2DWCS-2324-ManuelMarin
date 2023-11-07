    /*Usamos esta función para que el código se ejecute
    en cuanto carguela página*/
    window.onload = function () {

        /*Creamos una variable para guardar
        lo que escribámos dentro de textarea*/
        var textarea = document.getElementById("numerosPrimos");

        //Creamos una variable para almacenar los números primos
        var numerosPrimos = "";

        //Creamos función para verificar si un número es primo
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

        /*Creamos una variable para contar cuantos numeros primos
        se han encontrado, y otra variable para registrar
        el numero actual que se está evaluando empezando desde 2*/
        var contador = 0;
        var numeroActual = 2;

        /*Creamos un bucle "while" que se ejecutará mientras el contador
        sea menor que 100*/
        while (contador < 100) {
            /*Utilizamos la funcion "esPrimo()" para verificar si 
            "numeroActual" es primo, si es primo se ejecuta el "if"*/
            if (esPrimo(numeroActual)) {
                numerosPrimos += numeroActual + " | ";
                contador++;
            }
            numeroActual++;
        }

        //Mostramos los números primos en el área de texto
        textarea.value = numerosPrimos
    };
