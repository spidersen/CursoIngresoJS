/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;

	PrecioUno= document.getElementById('PrecioUno').value;
	PrecioDos= document.getElementById('PrecioDos').value;
	PrecioTres= document.getElementById('PrecioTres').value;

	suma= parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);
	alert(suma);
}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var promedio;

	PrecioUno= document.getElementById('PrecioUno').value;
	PrecioDos= document.getElementById('PrecioDos').value;
	PrecioTres= document.getElementById('PrecioTres').value;

	promedio= [parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres)]/3;
	alert(promedio);
}
function PrecioFinal () 
{
	
}