window.onload = function () {
    //Función para comprobar si una fecha es válida
    function validarFecha(fecha) {
        //Dividimos la fecha en día, mes y año
        const [dia, mes, año] = fecha.split('/').map(Number);
        //Verificamos si las partes son números
        if (isNaN(dia) || isNaN(mes) || isNaN(año)) {
            return false;
        }
        //Validamos el rango del año (entre 1900 y 2100)
        if (año < 1900 || año > 2100) {
            return false;
        }
        //Validamos el rango del mes (entre 1 y 12)
        if (mes < 1 || mes > 12) {
            return false;
        }
        //Validamos el rango del día según el mes
        if (dia < 1 || dia > 31) {
            return false;
        }
        //Validamos febrero teniendo en cuenta si es año bisiesto o no
        if (mes === 2) {
            const esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
            const maxDiasFebrero = esBisiesto ? 29 : 28;

            if (dia > maxDiasFebrero) {
                return false;
            }
        }
        //Validamos meses con 30 días
        if ([4, 6, 9, 11].includes(mes) && dia > 30) {
            return false;
        }
        return true;
    }

    //Función principal que se ejecuta al hacer clic en el botón "Comprobar"
    function comprobar() {
        //Obtenemos los elementos HTML por su ID.
        const inputFecha = document.getElementById("fecha");
        const inputMensaje = document.getElementById("mensaje");
        //Obtenemos la fecha ingresada por el usuario.
        const fecha = inputFecha.value;
        //Validamos la fecha utilizando la función que creamos.
        const esValida = validarFecha(fecha);
        //Mostramos el resultado en la caja de texto "Mensaje".
        if (esValida) {
            inputMensaje.value = `La fecha "${fecha}" es válida.`;
        } else {
            inputMensaje.value = `La fecha "${fecha}" no es válida. Utiliza el formato MM/DD/YYYY.`;
        }
    }

    document.getElementById("comprobar").addEventListener("click", comprobar);

}