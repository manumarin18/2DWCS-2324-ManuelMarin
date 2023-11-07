    /*Usamos esta función para que el código se ejecute
    en cuanto cargue la página*/
    window.onload = function () {
    //Creamos variables para obtener los elementos del HTML
    const inputDecimal = document.getElementById("decimal");
    const inputBinario = document.getElementById("binario");
    const inputOctal = document.getElementById("octal");
    const inputHexadecimal = document.getElementById("hexadecimal");
    const botonConvertir = document.getElementById("convertir");

    //Creamos la función para realizar la conversión
    function realizarConversion() {
        /*Creamos una variable para obtener el valor decimal que introducido
        y utilizamos el método "parseInt()" para convertirlo a entero*/
        const valorDecimal = parseInt(inputDecimal.value);

        //Verificamos si el valor introducido es un número válido
        if (isNaN(valorDecimal)) {
            //Mostramos un mensaje de error si se introdujo un numero invalido
            alert("Por favor, ingresa un número decimal válido.");
        } else {
            //Realizamos las conversiones y mostramos los resultados
            inputBinario.value = (valorDecimal >>> 0).toString(2);
            inputOctal.value = valorDecimal.toString(8);
            inputHexadecimal.value = valorDecimal.toString(16).toUpperCase();
        }
    }
    //Agregamos un evento al botón "Convertir" para que llame a la función realizarConversion cuando se haga clic
    botonConvertir.addEventListener("click", realizarConversion);
    }