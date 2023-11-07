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
		mensaje+="Los Datos Bancario no son correctos \n";
	}

	 if(!aux16){
		enviar=false;
		mensaje+="No se ha seleccionado ninguna casilla de verificación \n";
		mensaje+="o has seleccionado mas casillas\n";
	} 

		
	
//---------------------------------------------------------------------------------------------------------------------------------
	
	if(nifCIF=="C1"){
		mensaje+="Se ha introducido un cif correcto.\n";
	}
	else if(nifCIF=="C2"){
		mensaje+="Se ha introducido un cif erróneo. El carácter de control es erróneo.\n";
	}
	else if(nifCIF=="N1"){
		mensaje+="Se ha introducido un NIF correcto\n";
	}
	else if(nifCIF=="N2"){
		mensaje+="Se ha introducido un NIF/CIF erróneo. El carácter de control es erróneo.\n";
	}
	else if(nifCIF==0){
		mensaje+="Se ha introducido un dato no válido. No es CIF.\n";
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

function razonSocial(parametro){
	var Razon_Social=parametro;
	var expRegRazonSocial=/^[A-Z][A-Z0-9\.\-ºª]+[0-9A-Z\.]$/i;
	var razonSocialValido=true;
	
	if(!expRegRazonSocial.test(Razon_Social)){
		razonSocialValido=false;
	}
		return razonSocialValido;
	}   


function codigoEmpresa(parametro){
	var codigoEmpresa=true;
	var codigo_Empresa=parametro;
	var expRegCodEmpresa=/^[0-9A-Z]{5,10}$/i;
	if(!expRegCodEmpresa.test(codigo_Empresa)){
		codigoEmpresa=false;
	}
	return codigoEmpresa;
}

function validarDireccion(parametro){
	var direccion = parametro.trim();
	console.log(direccion);
	var direccionValida=true;
	var expRegCodDireccion=/^[0-9A-Z][0-9A-Z\.\-ºª/]+[0-9A-Z]$/i;
	if(!expRegCodDireccion.test(direccion)){
		direccionValida=false;
	}
	return direccionValida;		
}

function validarLocalidad(parametro){
	var localidad = parametro;
	var localidadValida=true;
    var localidadRegExp=/[A-Z][A-Z\s]+[A-Z]/i;
	if(!localidadRegExp.test(localidad)){
		localidadValida=false;
	}
	return localidadValida;	
}

function validarCodigoPostal(parametro){	
	var codigoPostal=parametro.trim();
	var codPostalRegExp=/^([0-5])([1-9])([0-9]{3})$/i;
	var codPostalValida=true;
	if(!codPostalRegExp.test(codigoPostal)){
		codPostalValida=false;
	}
	return codPostalValida;	
}
	
	function validarTelefono(parametro){
		var telefono = parametro.trim();
		var expRegTelefono=/^([967])([0-9]{8})$/i;
		var validartelefono = true;
		if(!expRegTelefono.test(telefono)){
			validartelefono=false;
		}
		return validartelefono;					
	}

	function validarFax(parametro){
		var fax = parametro.trim();
		var expRegfax=/^([9])([0-9]{8})$/i;
		var validarfax = true;
		if(!expRegfax.test(fax)){
			validarfax=false;
		}
		return validarfax;					
	}

	function numerosPositivos(parametro){
		var numeroPositivo = parametro;
		var expRegNumeroPositivo=/^[0-9]*$/i;
		var validarNumeroPositivo = true;
			//inicio
			if(!expRegNumeroPositivo.test(numeroPositivo)){
				validarNumeroPositivo=false;
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
		var fecha=parametro.trim();
		var expRegfecha=/^(((0?[1-9])|([12]\d)|(3[01]))[\-\/]((0?[1-9])|1[012]))[\-\/](\d{2})?\d{2}$/i;
		var fechavalida=true;
		if(!expRegfecha.test(fecha)){
			fechavalida=false;
		}
		return fechavalida;
	}

function comprobarCodBancoYOficina(parametro,parametro2){
	var codbanco=parametro;
	var codoficina=parametro2;
	var codbancoRegExp=/^[0-9]{4}$/i;
	var codoficinaRegExp=/^[0-9]{4}$/i;
	var validarcodbanco=true;
	var validarcodoficina=true;
	if(!codbancoRegExp.test(codbanco)){
		validarcodbanco=false;
	}
	else if(!codoficinaRegExp.test(codoficina)){
		validarcodoficina=false;
	}
	return validarcodoficina && validarcodbanco;					
}

function comprobarNumeroCuenta(parametro){
	var numeroCuenta = parametro;
	var numeroCuentaValida=true;
    var numeroCuentaRegExp=/^[0-9]{10}$/i;
	if(!numeroCuentaRegExp.test(numeroCuenta)){
		numeroCuentaValida=false;
	}
	return numeroCuentaValida;	
}

function comprobarSeleccion(parametro) {
	var contador = 0;
	var seleccion=parametro;
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

  function esNif (parametro) {
	var nif=parametro.trim();
	var expRegEsnif=/^([0-9]{7}\d)([TRWAGMYFPDXBNJZSQVHLCKE])$/i;
	var validarEsNif=1;
	if(!expRegEsnif.test(nif)){
		validarEsNif=2;
	}
	return validarEsNif;					
}

//--------------------------------------------------------------------------------------------
	
function esCif(cif){
	var Cif=cif.trim();
	var expRegEsCif1=/^([A-HJUV])([0-9]{8})$/i;
	var expRegEsCif2=/^([PQRSW])([0-9]{7})+([JABCDEGHI])$/i;
	var validarCif=0;
	if(expRegEsCif1.test(Cif)){
		validarCif=1;
	}
	else if(expRegEsCif2.test(Cif)){
		validarCif=1;
	}
	return validarCif;
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
else if(aux2==1){
	mensaje="N1";
}	
else if(aux2==2){
	mensaje="N2";
}
else if(aux2==0){
	mensaje=0;
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
    var ExpRegIban=/^([A-Z]{2})([0-9]{2})([0-9A-Z]{0,31})$/i;
	var ibanValido=true;
	if(!ExpRegIban.test(iban)){
		validarEsNif=false;
	}
	return ibanValido;
}























