function esLetraPlus(letra){
		var letra = letra.toUpperCase();
		var numeros =("0123456789");
		var masLetras=("ÚÁÉÍÓÑÜ");
		var especiales=("-ªº./ ");
		console.log(letra);
		console.log(numeros);
		return ((letra >= "A" && letra <="Z") || numeros.includes(letra) || masLetras.includes(letra) || especiales.includes(letra));
	}
	
function esLetraYNumeros(letra){
		var letra = letra.toUpperCase();
		var numeros =("0123456789");
		var espacio=(" ");
		console.log(letra);
		return ((letra >= "A" && letra <="Z") ||numeros.includes(letra) || espacio.includes(letra));
	}
	
function esLetra(letra){
		var letra = letra.toUpperCase();
		var masLetras=("Ú,Á,É,Í,Ó,Ñ,Ü");
		var espacio=(" ");
		console.log(letra);
		return ((letra >= "A" && letra <="Z") || masLetras.includes(letra) || espacio.includes(letra));
	}
	
	
function esLetra2(letra){
		var letra = letra.toUpperCase();
		var letras=("A,B,C,D,E,F,G,H,J,U,V,P,Q,R,S,W");
		console.log(letra);
		return (letras.includes(letra));
	}

function esLetra3(letra){
		var letra = letra.toUpperCase();
		var letras=("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z");
		console.log(letra);
		return (letras.includes(letra));
	}
	
function esNumero(numero){
		console.log(numero);
		return (numero < "0" || numero > "9");
	}



//--------------------------------------------------------------------------------------------------------------------------------------------------------

function razonSocial(parametro){
	var primeraLetra=parametro.substring(0,1).toUpperCase();;
	var medio = parametro.substring(1,parametro.length-1).toUpperCase();
	var fin = parametro.substring(parametro.length-1).toUpperCase();
	var contador = 0;
	var contador2 = 0;
	var contador3 = 0;
	var validarRazonSocial=true;

	while(contador != primeraLetra.length){
		letra=primeraLetra.charAt(contador);
		if(!(esLetra(letra))){
			validarRazonSocial=false;
			return validarRazonSocial;
		}
		contador++;
	}  

	while(contador2 != medio.length){
		letra=medio.charAt(contador2);
		if(!(esLetra(letra))){
			validarRazonSocial=false;
			return validarRazonSocial;
		}
		contador2++;
		return validarRazonSocial;
	} 

	while(contador3 != fin.length){
		letra=fin.charAt(contador3);
		if(!(esLetra(letra))){
			validarRazonSocial=false;
			return validarRazonSocial;
		}
		contador3++;
		return validarRazonSocial;
	}   
}

function codigoEmpresa(parametro){
	var codigoEmpresa=true;
	var codigo_Empresa=parametro;
	var letra="";
	var contador = 0;

	if(codigo_Empresa.length > 5 && codigo_Empresa.length < 10){
		letra=codigo_Empresa.charAt(contador);
		while(contador != codigo_Empresa.length){
			letra=codigo_Empresa.charAt(contador);
			if(!(esLetraYNumeros(letra))){
				codigoEmpresa=false;
				return codigoEmpresa;
			}
			contador++;
		}  
	}
	else{
		codigoEmpresa=false;
	}
	return codigoEmpresa;
}

function validarDireccion(parametro){
	var direccion = parametro;
	var direccionValida=true;
	var inicio = direccion.substring(0,3).toUpperCase();
	var medio = direccion.substring(3,direccion.length-1).toUpperCase();
	var fin = direccion.substring(direccion.length-1,direccion.length).toUpperCase();	
	var longitud= direccion.length;
	var contador = 0;
	var contador2 = 0;
	var contador3 = 0;
	var letra ="";
	console.log(direccion);
	console.log(inicio);
	console.log(medio);
	console.log(fin);
	console.log(longitud);
	
	if(direccion.length > 10 && direccion.length < 30){
		//inicio
		while(contador != inicio.length){
			letra=inicio.charAt(contador);
			if(!(esLetra(letra))){
				direccionValida=false;
				return direccionValida;
			}
			contador++;
		}  
		//medio
		while(contador2 != medio.length){
			letra=medio.charAt(contador2);
			if(!(esLetraPlus(letra))){
				direccionValida=false;
				return direccionValida;
			}
			contador2++;
		}  
		//Fin
		while(contador3 != fin.length){
			letra=fin.charAt(contador3);
			if	(!(esLetraYNumeros(letra))){
				direccionValida=false;
				return direccionValida;
			}
			contador3++;
		}  
	}
	else{
		direccionValida=false;
	}		
	return direccionValida;			
}

function validarLocalidad(parametro){
	var localidad = parametro;
	var localidadValida=true;
	var inicio = localidad.substring(0,3).toUpperCase();
	var medio = localidad.substring(3,localidad.length-3).toUpperCase();
	var fin = localidad.substring(localidad.length-3,localidad.length).toUpperCase();	
	var longitud= localidad.length;
	var contador = 0;
	var contador2 = 0;
	var contador3 = 0;
	var letra ="";
	console.log(localidad);
	console.log(inicio);
	console.log(medio);
	console.log(fin);
	console.log(longitud);
	
	if(localidad.length > 5 && localidad.length < 30){
		//inicio
		while(contador != inicio.length){
			letra=inicio.charAt(contador);
		
			if(!(esLetra(letra))){
				localidadValida=false;
				return localidadValida;
			}
			contador++;
		}  
		//medio
		while(contador2 != medio.length){
			letra=medio.charAt(contador2);
			if(!(esLetra(letra))){
				localidadValida=false;
				return localidadValida;
			}
			contador2++;
		}  
		//Fin
		while(contador3 != fin.length){
			letra=fin.charAt(contador3);
			if(!(esLetra(letra))){
				localidadValida=false;
				return localidadValida;
			}
			contador3++;
		}  
	}
	else{
		localidadValida=false;
		return localidadValida;
	}			
		return localidadValida;
}

function validarCodigoPostal(parametro){	
	var validarCodigoPostal = true;
	var codigoPostal = parametro;
	 if(codigoPostal.length==5){
		for(var i = 0;i < codigoPostal.length; i++){
			if(esNumero(codigoPostal[i])){
				validarCodigoPostal = false;
				return validarCodigoPostal;
			}
			if(!codigoPostal > 1000 && !codigoPostal <= 52999){
				validarCodigoPostal = false;
				return validarCodigoPostal;
			}
		}
	}
	else{
		validarCodigoPostal=false;
	}
	return validarCodigoPostal;
}
	
	function validarTelefono(parametro){
		var telefono = parametro;
		var inicio = parametro.substring(0,1).toUpperCase();
		var validartelefono = true;
		var contador = 0;
		var numero = "";
		if(telefono.length == 9){
			//inicio
			if(inicio==9 || inicio==6 || inicio==7){
				while(contador != telefono.length){
					numero=telefono.charAt(contador);
					if(esNumero(numero)){
						validartelefono = false;
					}
					contador++;
				} 
			}
			else{
				validartelefono = false;
			}	 
		}
		else{
			validartelefono = false;
		}	
		return validartelefono;					
	}

	function validarFax(parametro){
		var fax = parametro;
		var inicio = parametro.substring(0,1).toUpperCase();
		var validarfax = true;
		var contador = 0;
		var numero = "";
		if(fax.length == 9){
			//inicio
			if(inicio==9){
				while(contador != fax.length){
					numero=fax.charAt(contador);
					if(esNumero(numero)){
						validarfax = false;
					}
					contador++;
				} 
			}
			else{
				validarfax = false;
			}	 
		}
		else{
			validarfax = false;
		}	
		return validarfax;					
	}

	function numerosPositivos(parametro){
		var numeroPositivo = parametro;
		var validarNumeroPositivo = false;
		var contador = 0;
		var numero = "";
			//inicio
			while(contador != numeroPositivo.length){
				numero=numeroPositivo.charAt(contador);
				if(!esNumero(numero)){
					validarNumeroPositivo = true;
				}
				contador++;
			}  	
		return validarNumeroPositivo;					
	}

	function comprobarComunidades(parametro) {
		var comunidades = parametro;
		var contador = 0;
		var validarComunidad=true;
	  
		for (let i = 0; i < comunidades.length; i++) {
		  if (comunidades[i].selected) {
			contador++;
		  }
		}
		if (contador < 2){
			validarComunidad=false;
		}
		return validarComunidad;
	  }

	function comprobarFecha(parametro) {
		var fecha=parametro;
		if(fecha.includes("-")){
			arrayFecha = fecha.split("-");
		}else if(fecha.includes("/")){
			arrayFecha = fecha.split("/");
		}else {
			return false;
		}
	
		if(arrayFecha.length == 3){
			if(arrayFecha[0].length != 1 && arrayFecha[0].length != 2){
				return false;
			}
			if(arrayFecha[1].length != 1 && arrayFecha[1].length != 2){
				return false;
			}
			if(arrayFecha[2].length != 2 && arrayFecha[2].length != 4){
				return false;
			}
			return true;
		}
		return false;
	}

function comprobarCodBancoYOficina(parametro,parametro2){
	var codbanco=parametro;
	var codoficina=parametro2;
	var validarcodbanco = true;
	var validarcodoficina = true;
	var contador=0;
	var contador1=0;
	var numero="";
	if(codbanco.length==4 && codoficina.length==4){
		while(contador != codbanco.length){
			numero=codbanco.charAt(contador);
			if(esNumero(numero)){
				validarcodbanco = false;
			}
			contador++;
		}  	
		while(contador1 != codoficina.length){
			numero=codoficina.charAt(contador1);
			if(esNumero(numero)){
				validarcodoficina = false;
			}
			contador1++;
		}  	
	}
	else{
		validarcodoficina = false;
		validarcodbanco = false;	
	}	
	return validarcodoficina && validarcodbanco;					
}

function comprobarNumeroCuenta(parametro){
	var numeroCuenta=parametro;
	var contador=0;
	var validarNumeroCuenta=true;
	if(numeroCuenta.length==10){
		while(contador != numeroCuenta.length){
			numero=numeroCuenta.charAt(contador);
			if(esNumero(numero)){
				validarNumeroCuenta = false;
			}
			contador++;
		}  	
	}
	else{
		validarNumeroCuenta = false;
	}
	return validarNumeroCuenta;
}

function comprobarSeleccion(parametro) {
	var contador = 0;
	var seleccion=parametro;
	var comprobarSeleccion= true;
	var valido=true;
	for (var i = 0; i < seleccion.length; i++) {
	  if (seleccion[i].type == "checkbox" && seleccion[i].checked){
		contador++;
	  }
	}
	if (contador < 1){
		comprobarSeleccion = false;
		contador = 0;
	}
	for (var i = 0; i < seleccion.length; i++) {
	  if (seleccion[i].type == "radio" && seleccion[i].checked) {
		  contador++;
	  }
	}
	if (contador > 2){
		comprobarSeleccion = false;
	}
		return valido;
  }
