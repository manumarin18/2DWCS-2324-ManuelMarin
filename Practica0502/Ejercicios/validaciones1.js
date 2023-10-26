window.onload= inicio;

/* console.log("aaaaaaa");		
   console.log("bbbbbbb");	 */
	//Manuel
	//codEmpresa 1245P
	//NIF 51155053H
	//CIF P8553129B	
    //ES6621000418401234567891	
	//669182972
	//Calle Jose Isbert nº16
	//Madrid
	//28044
	//917064601
	//codBanco 1234
	//codOficina 1234
	//numeroCuenta 1234567890
	//fechaEmpresa 23-10-2023
	//12
	//12
	
function inicio(){
	document.primero.onsubmit=validar;
	document.primero.cp.onblur=ponerProvincia;
}

//------------------------------------------------------------------------------------------------------------------------------------

function esNif (parametro) {
	var caracterControl = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
	var letrasControl = ["X","Y","Z","L","K","M"];
	if(parametro.length == 9){
		if(esLetra(parametro[0]) && esLetra(parametro[8])){
			var nums = parametro.substring(1,8);
			if(letrasControl.includes(parametro[0]) && caracterControl.includes(parametro[8]) && esDigito(nums)){
				nums = letrasControl.indexOf(parametro[0]) + nums;
				if(caracterControl[nums%23] == parametro[8]){
					return 1;
				}else{
					return 2;
				}
			}
			return 0;
		}else if(esLetra(parametro[8])){
			var nums = parametro.substring(0,8);
			if(esNumero(nums)){
				if(caracterControl[nums%23] == parametro[8]){
					return 1;
				}else{
					return 2;
				}
			}
			return 0;
		}
		return 0;
	}else if(parametro.length >= 6  && parametro.length <= 8){
		if(esNumero(parametro)){
			if(parametro >= 100000){
				return 3;
			}
			return 0;
		}
		return 0;
	}
	return 0;
}

//------------------------------------------------------------------------------------------------------------------------------------

function esCif(cif){
	var caracterControles=["J","A","B","C","D","E","F","G","H","I"];
	var longitud=cif.length;
	var numeros=cif.substring(1,8);
	var letra=cif.substring(0,1);
	var ultimaPosicion=cif.substring(8,9).toUpperCase();
	var validarNumero=true;
	var validarLetra=true;
	var numerosPares=0;
	var numerosImpares=0;
	var resultado;
	var resto;
	var complemento;
//console.log("aaaaaaaaaa");
//console.log("bbbbbbbbbb");	
	if(longitud==9){
		console.log("aaaaaaaaaa");
		if(!(esLetra2(letra))){
			validarLetra=false;
		}
		for(var i=0; i < 7; i++){ //8
			var numero=numeros.charAt(i);
			console.log(numero);
			if(esNumero(numero)){
				validarNumero=false;	
			}
		}
		console.log(validarLetra)
		console.log(validarNumero)
		if(validarNumero && validarLetra){
				for(var i=0; i < 7;i+=2){
					var numero=parseInt(numeros.charAt(i));
					var aux=numero*2;
					console.log(numero);
					console.log(aux);
					if(aux > 9){
						var aux2= aux.toString();
						for(var i; i < aux2.length; i++){
							numerosImpares+=parseInt(aux2.charAt(i));
						}
					}
					else{
					numerosImpares+=aux;
					}
				}
	
				for(var i=1; i < 7;i+=2){
					var numero=numeros.charAt(i);
					numerosPares+=parseInt(numero*2);
				}

				resultado=numerosPares+numerosImpares;		
				resto=resultado%10;
				complemento=10-resto;
			
				if(complemento==10){
				 complemento=0;
				}
				
		//Comprobar la ultima posicion 
		//Dos formas letra y numero
		
				var caracterControl=caracterControles[complemento];
				var numeroControl=caracterControles.lastIndexOf(caracterControl);

				if(esLetra2(ultimaPosicion)){
					if(!(caracterControl.includes(caracterControles))){
						return 1;
					}
					else{
						return 2;
					}

				}
				if(!(esNumero(ultimaPosicion))){
					if(numeroControl==complemento){
						return 1;
					}
					else{
						return 2;
					}
				}
				else{
					return 2;
				}	

		}
		else{
			return 2;
		}	
	}	
	else{
		return 0;
	}
}

//--------------------------------------------------------------------------------------------

function nif_cif(datos){
var dato=datos;
var mensaje="";
var aux=esCif(dato);
var aux2=esNif(dato);

if(aux==1){
	mensaje="C1";
}
else if(aux==2){
	mensaje="C2";
}

if(mensaje=="C2"){
	if(aux2==1){
		mensaje="N1";
	}	
	else if(aux2==2){
		mensaje="N2";
	}
	else if(aux2==0){
		mensaje="N3";
	}
}
return mensaje;
}



//--------------------------------------------------------------------------------------------

function codigosControl(parametro,parametro2,parametro3){

var codigodeBanco=parametro;
var sucursal=parametro2;
var numeroDeCuenta=parametro3;

var numero1;
var numero2;
var numero3;

var caracterContro1;
var caracterContro12;

	if(codigodeBanco.length==4){
		var num=parseInt(codigodeBanco.charAt(0),10)*4;
		var num2=parseInt(codigodeBanco.charAt(1),10)*8;
		var	num3=parseInt(codigodeBanco.charAt(2),10)*5;
		var num4=parseInt(codigodeBanco.charAt(3),10)*10;

		var numero1=num+num2+num3+num4;
	}
	
	if(sucursal.length==4){
		var num=parseInt(sucursal.charAt(0),10)*9;
		var num2=parseInt(sucursal.charAt(1),10)*7;
		var	num3=parseInt(sucursal.charAt(2),10)*3;
		var num4=parseInt(sucursal.charAt(3),10)*6;
	
		var numero2=num+num2+num3+num4;
		
	}
		var suma=numero1+numero2;
		var resto=suma%11;
		var modulo11=11-resto;
	
		if(modulo11==10){
			caracterContro1=1;
		}
		else if(modulo11==11){
			caracterContro1=0;
		}
		else{
			caracterContro1=modulo11;
		}
	
		if(numeroDeCuenta.length==10){
			var aux=[1,2,4,8,5,10,9,7,3,6];
			var numero3=0;
				for(let i=0; i<numeroDeCuenta.length;i++){
					numero3+=parseInt(numeroDeCuenta.charAt(i))*aux[i];
				}
		}
		var resto=numero3%11;
		var modulo11=11-resto;
	
		if(modulo11==10){
			caracterContro12=1;
		}
		else if(modulo11==11){
			caracterContro12=0;
		}
		else{
			caracterContro12=modulo11;
		}	

	return caracterContro1+""+caracterContro12;
}

//--------------------------------------------------------------------------------------------

function calculoIBANEspanya(parametro){

var codigoDeCuenta=parametro;
var codigoEspanya="142800";
var operacion;
var codigo;
	if(codigoDeCuenta.length==20){
		operacion=parseInt(codigoDeCuenta+codigoEspanya,10);
		operacion=98-(operacion%97);
		var codigo;
		if(operacion>=10){
			codigo="ES"+operacion+parametro;
		}
		else{
			codigo="ES00"+operacion+parametro;
		}
		return codigo;
	}	
}	

//--------------------------------------------------------------------------------------------

function comprobarIBAN(parametro){
	var iban=parametro.substring(4,34).trim();
	var cuatroLetras=parametro.substring(0,4);
    var ibanValido=true;
	var longitud=cuatroLetras.length;

	if(parametro.length <=34){
		var tabla1=new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
		var tabla2=new Array(25);
	
		for (let y= 0; y < tabla1.length; y++) {
			tabla2[y+10]=tabla1[y];
		}	
	}

	//Convertir letras a numeros
	var letrasfinal="";
	for (let i = 0; i < longitud; i++) {
		let aux=cuatroLetras.charAt(i);
		if(esLetra3(aux)){
			let aux2=String(tabla2.indexOf(aux));
			letrasfinal+=aux2;
		}
		else{
			letrasfinal+=aux;
		}
	}


	var ibanConvertido=iban+letrasfinal;
	var ibanConvertido2=ibanConvertido.substring(0,ibanConvertido.length/2);
	var resto1=parseInt(ibanConvertido2,10)%97;
	var ibanConvertido4=ibanConvertido.substring(ibanConvertido.length/2,ibanConvertido.length);
	var ibanConvertido3=resto1.toString()+ibanConvertido4;
	var resto=parseInt(ibanConvertido3,10)%97;

	

	if(resto==1){
		ibanValido=true;
	}
	else{
		ibanValido=false;
	}	
	return ibanValido;
}

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


//------------------------------------------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------------------------------------------------------------

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
	
//--------------------------------------------------------------------------------------------------------------------------------------------------------


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

//--------------------------------------------------------------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------------------------------------------------------------------


function ponerProvincia(){
	var provincias =[
		"Araba/Álava",
		"Albacete",
		"Alicante/Alacant",
		"Almería",
		"Ávila",
		"Badajoz",
		"Baleares",
		"Barcelona",
		"Burgos",
		"Cáceres",
		"Cádiz",
		"Castellón/Castelló",
		"Ciudad Real",
		"Córdoba",
		"A Coruña",
		"Cuenca",
		"Gerona",
		"Granada",
		"Guadalajara",
		"Guipúzcoa",
		"Huelva",
		"Huesca",
		"Jaén",
		"León",
		"Lérida",
		"La Rioja",
		"Lugo",
		"Madrid",
		"Málaga",
		"Murcia",
		"Navarra",
		"Orense",
		"Asturias",
		"Palencia",
		"Las Palmas",
		"Pontevedra",
		"Salamanca",
		"Santa Cruz de Tenerife",
		"Cantabria",
		"Segovia",
		"Sevilla",
		"Soria",
		"Tarragona",
		"Teruel",
		"Toledo",
		"Valencia/València",
		"Valladolid",
		"Vizcaya",
		"Zamora",
		"Zaragoza",
		"Ceuta",
		"Melilla"];


		var cp=document.primero.cp.value;
		var valorcp=parseInt(cp,10);
		var codigoPro=parseInt(valorcp/1000);
		var provincia = provincias[codigoPro-1];
		document.primero.provincia.value = provincia;
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------







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


//-------------------------------------------------------------------------------------------------------------------------------------

function validar(){

	let enviar=true; 
	let mensaje="";
	
	var razon_Social=document.primero.razonSocial.value;
	var CodEmpresa=document.primero.codigoEmpresa.value;
	var datoCif=document.primero.CifNif.value;
	var direccion=document.primero.direccion.value;
	var localidad=document.primero.localidad.value;
	var codPostal=document.primero.cp.value;
	var telefono=document.primero.telefono.value;
	var fax=document.primero.fax.value;
	var numeroPositivo=document.primero.numeroTrabajadores.value;
	var numeroPositivo2=document.primero.numeroFabricas.value;
	var fecha=document.primero.fechaEmpresa.value;
	var Comunidades=document.primero.comunidades;
	var codBanco=document.primero.codigoBanco.value;
	var codOficina=document.primero.codigoOficina.value;
	var numeroCuenta=document.primero.numeroCuenta.value;
    var iban=document.primero.iban.value;
    var seleccion=document.primero.elements;

	var aux=razonSocial(razon_Social);
    var aux2=codigoEmpresa(CodEmpresa);
	var nifCIF=nif_cif(datoCif);
	var aux3=validarDireccion(direccion);
	var aux4=validarLocalidad(localidad);
	var aux5=validarCodigoPostal(codPostal);
	var aux6=validarTelefono(telefono);
	var aux7=validarFax(fax);
	var aux8=numerosPositivos(numeroPositivo);
	var aux9=numerosPositivos(numeroPositivo2);
	var aux10=comprobarFecha(fecha);
	var aux11=comprobarComunidades(Comunidades);
	var aux12=comprobarCodBancoYOficina(codBanco,codOficina);
 	var aux13=comprobarNumeroCuenta(numeroCuenta);
	var aux14=codigosControl(codBanco,codOficina,numeroCuenta); 
	var aux15=comprobarIBAN(iban);
    var aux16=comprobarSeleccion(seleccion);


/* 	var calculo=calculoIBANEspanya("21000418401234567891");
	var comprobar=comprobarIBAN(calculo); */


	if(!aux){
		enviar=false;
		mensaje+="Razon_Social no cumple el patrón \n";
	}

	if(!aux2){
		enviar=false;
		mensaje+="Codigo de Empresa no cumple el patrón \n";
	}

	if(!aux3){
		enviar=false;
		mensaje+="La Direccion no cumple el patrón \n";
	}

	if(!aux4){
		enviar=false;
		mensaje+="La Localidad no cumple el patrón \n";
	}

	if(!aux5){
		enviar=false;
		mensaje+="El Codigo Postal no cumple el patrón \n";
	}

	if(!aux6){
		enviar=false;
		mensaje+="El Telefono no cumple el patrón \n";
	}

	if(!aux7){
		enviar=false;
		mensaje+="El Fax no cumple el patrón \n";
	}
	if(!aux8){
		enviar=false;
		mensaje+="El Numero no es positivo \n";
	}
	if(!aux9){
		enviar=false;
		mensaje+="El Numero no es positivo \n";
	}
	if(!aux10){
		enviar=false;
		mensaje+="La Fecha no es valido \n";
	}
	if(!aux11){
		enviar=false;
		mensaje+="Error del Número de comunidades \n";
	}
	if(!aux12){
		enviar=false;
		mensaje+="Codigo Banco y Codigo de Oficina tienen un Formato incorrecto \n";
	}
	if(!aux13){
		enviar=false;
		mensaje+="Numero de cuenta no tiene un Formato incorrecto \n";
	}
	if(!aux14){
		enviar=false;
		mensaje+="Codigo Banco y Codigo de Oficina tienen un Formato incorrecto \n";
	} 
	if(!aux15){
		enviar=false;
		mensaje+="Codigo del Iban no es correcto \n";
	} 
	if(!aux12 || !aux13 || !aux14 || !aux14 || !aux15){
		enviar=false;
		mensaje+="Los Datos Bancario no son correctos";
	}

	 if(!aux16){
		enviar=false;
		mensaje+="No se ha seleccionado ninguna casilla de verificación \n";
		mensaje+="o has seleccionado mas casillas\n";
	} 

		
	
//---------------------------------------------------------------------------------------------------------------------------------
	
	if(nifCIF=="C1"){
		console.log("Se ha introducido un cif correcto.");
	}
	//switch
	else if(nifCIF=="C2"){
		console.log("Se ha introducido un cif erróneo. El carácter de control es erróneo.");
	}
	else if(nifCIF=="N1"){
		console.log("Se ha introducido un NIF correcto");
	}
	else if(nifCIF=="N2"){
		console.log("Se ha introducido un NIF erróneo. El carácter de control es erróneo.");
	}
	else if(nifCIF=="N3"){
		console.log("Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000");
	}
	else if(nifCIF==0){
		console.log("Se ha introducido un dato no válido. No es CIF.");
	}	

//-------------------------------------------------------------------------------------------------------------------------------------
	
	if(!enviar){
		alert(mensaje);
	}
	else{
		alert("Se ha enviado el formulario");
		return enviar;
	}
	
}		

