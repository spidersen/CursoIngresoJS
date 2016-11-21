/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	suma = numeroUno+numeroDos;



	//suma= parseInt(numeroUno)+parseInt(numeroDos);

	alert("la suma es "+suma);
	
	//alert(parseInt(numeroUno)+parseInt(numeroDos));


}

