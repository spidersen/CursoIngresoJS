/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var miTexto;
	miTexto = prompt("por favor ingrese un texto");
	document.getElementById("elNombre").value = miTexto;

}


