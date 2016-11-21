/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var suma;

	numeroUno=document.getElementById('PrecioUno').value;
	numeroDos=document.getElementById('PrecioDos').value;
	numeroTres=document.getElementById('PrecioTres').value;
	
	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);
	
	suma = numeroUno+numeroDos+numeroTres;
	alert(suma);
}
function Promedio () 
{

	var numeroUno;
	var numeroDos;
	var numeroTres;
	var promedio;
	var suma;
	
	numeroUno=document.getElementById('PrecioUno').value;
	numeroDos=document.getElementById('PrecioDos').value;
	numeroTres=document.getElementById('PrecioTres').value;
	
	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);

	suma=numeroUno+numeroDos+numeroTres
	promedio=suma/3;
	alert(promedio);
}
function PrecioFinal () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var suma;
	var final;

	numeroUno=document.getElementById('PrecioUno').value;
	numeroDos=document.getElementById('PrecioDos').value;
	numeroTres=document.getElementById('PrecioTres').value;
	
	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);
	
	suma = numeroUno+numeroDos+numeroTres;
	final= suma*1.21;
	alert(final);
	
}