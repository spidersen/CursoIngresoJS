/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	numeroUno= document.getElementById('numeroUno').value;
	var numeroDos;
	var suma;
	numeroDos= document.getElementById("numeroDos").value;
	suma= parseInt(numeroUno)+parseInt(numeroDos);
	alert(suma);
}

function restar()
{
	var numeroUno;
	numeroUno= document.getElementById('numeroUno').value;
	var numeroDos;
	var resta;
	numeroDos= document.getElementById("numeroDos").value;
	resta= numeroUno-numeroDos
	alert(resta);
}

function multiplicar()
{ 
	var numeroUno;
	numeroUno= document.getElementById('numeroUno').value;
	var numeroDos;
	var multiplicar;
	numeroDos= document.getElementById("numeroDos").value;
	multiplicar= numeroUno*numeroDos
	alert(multiplicar);
}

function dividir()
{
	var numeroUno;
	numeroUno= document.getElementById('numeroUno').value;
	var numeroDos;
	var dividir;
	numeroDos= document.getElementById("numeroDos").value;
	dividir= numeroUno/numeroDos
	alert(dividir);
}

