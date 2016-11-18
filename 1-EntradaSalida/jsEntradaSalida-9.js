/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	
	var sueldo;
	var aumento=*0.1;
	var resultado;
	
	sueldo= document.getElementById("sueldo").value;
	aumento= document.getElementById("aumento").value;
	

	resultado=parseInt(sueldo)+parseInt(aumento);
	
}
