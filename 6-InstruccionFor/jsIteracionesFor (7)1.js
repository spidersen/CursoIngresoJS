function Mostrar()
{
	/*var numeroRandom;
	var interaciones=0;
	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;
	var total;
	var contPar=0;
	var contImpar=0;
	var porc;
	while(interaciones<10000)
	{
		interaciones++;
		numeroRandom=Math.floor((Math.random() * 10) + 1);
		//alert(numeroRandom);
		//console.log("numero :" +numeroRandom);
		switch(numeroRandom)
		{
			case 1:
				cont1++;
				break;
			case 2:
				cont2++;
				break;
			case 3:
				cont3++;
				break;
			case 4:
				cont4++;
				break;
			case 5:
				total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
				porc=cont5/total*100;
				if (porc<7) 
				{
					cont5++;
				}
				else
				{
					interaciones--;
					continue;
				}
				break;
			case 6:
				cont6++;
				break;
			case 7:
				cont7++;
				break;
			case 8:
				cont8++;
				break;
			case 9:
				cont9++;
				break;
			case 10:
				cont10++;
				break;		
		}//Fin del switch
		if (numeroRandom%2==0) 
		{
			contPar++;
		}
		else
		{
			contImpar++;
		} 

	
	}//del while
	

	total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
	console.log("El total es : "+ total);

	console.log("% de pares :"+(contPar/total*100));
	console.log("% de impares :"+(contImpar/total*100));

	console.log("el número 1 salió :"+ cont1+" veces "+ (cont1/total*100)+" %");
	console.log("el número 2 salió :"+ cont2+" veces "+ (cont2/total*100)+" %");
	console.log("el número 3 salió :"+ cont3+" veces "+ (cont3/total*100)+" %");
	console.log("el número 4 salió :"+ cont4+" veces "+ (cont4/total*100)+" %");
	console.log("el número 5 salió :"+ cont5+" veces "+ (cont5/total*100)+" %");
	console.log("el número 6 salió :"+ cont6+" veces "+ (cont6/total*100)+" %");
	console.log("el número 7 salió :"+ cont7+" veces "+ (cont7/total*100)+" %");
	console.log("el número 8 salió :"+ cont8+" veces "+ (cont8/total*100)+" %");
	console.log("el número 9 salió :"+ cont9+" veces "+ (cont9/total*100)+" %");
	console.log("el número 10 salió :"+ cont10+" veces "+ (cont10/total*100)+" %");
	*/

	/*7- realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
a) el promedio de las notas totales.
b) la nota más baja.
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/

var notas;
var sexo; 
var cont=0;
var acumulador=0;
var minimo;
while(cont<5)
{
		console.log(cont);
		cont++;
		notas=prompt("ingrese la nota");
		notas=parseInt(notas);
		sexo=prompt("ingrese el sexo");
		acumulador=acumulador+parseInt(notas);
		console.log(acumulador);
		while(notas<0 || notas>10)
		{
			notas=prompt("re-ingrese la nota");
			notas=parseInt(notas);
		}
		
	
	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("re-ingrese f ó m .");
	}
if (cont==1) 
	{
		minimo=notas;
	}
	else
	{
		if(notas<minimo)
		{
			minimo=notas;
		}
	}
	

}	
alert("la menor nota es "+minimo);	

if (cont=5) 
	{
		alert(acumulador/cont);
	}
			
	
	

	

//alert(acumulador/cont);	



}//FIN DE LA FUNCIÓN