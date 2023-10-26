    /*Usamos esta función para que el código se ejecute
    en cuanto cargue la página*/
    window.onload = function () {
        
        /*Usamos el método "document.getElementById()" que obtiene
        el elemento de área de texto con el ID "numerosPrimos"
        y lo almacena en la variable "textarea"*/
        var textarea = document.getElementById("numerosPrimos");

        //Creamos una variable para almacenar los números primos
        var numerosPrimos = "";

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

        //Usamos otro bucle "for" para averiguar los números primos entre 1 y 100
        for (var i = 1; i <= 100; i++) {
            if (esPrimo(i)) {
                numerosPrimos += i + " | ";
            }
        }

        //Mostramos los números primos en el área de texto
        textarea.value = numerosPrimos;
    };
