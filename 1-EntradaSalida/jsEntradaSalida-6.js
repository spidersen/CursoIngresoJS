/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	numeroUno= document.getElementById('numeroUno').value;
	var numeroDos;
	var suma;
	numeroDos= document.getElementById("numeroDos").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroUno);
	suma= parseInt(numeroUno)+parseInt(numeroDos);
	alert(suma);



}

