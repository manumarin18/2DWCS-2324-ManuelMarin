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
	// 12
	// 12
	
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

		
	/* var cifEs=esCif(datoCif);

	if(cifEs==1){
		console.log("Se ha introducido un cif correcto.");
	
	}
	else if(cifEs==2){
		console.log("Se ha introducido un cif erróneo. El carácter de control es erróneo.");
	
	}
	else if(cifEs==0){
		console.log("Se ha Introducido un dato no valido.No es CIF");
	} */
	
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
