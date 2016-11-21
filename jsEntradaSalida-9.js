/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
 //var porcentaje;

 var precio;
 var precioFinal;

 //var aumento;
 
 /*aumento=precio *0.21;
 precioFinal=precio+aumento;
*/

precio=document.getElementById('sueldo').value;

precioFinal=precio*1.1;

document.getElementById("resultado").value=precioFinal;


}