/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

	var numeroSecreto; 
	var contadorIntentos;

function comenzar()
{
	
	contadorIntentos=0;
	numeroSecreto=Math.floor((Math.random() * 100) + 1);


	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );

}

function verificar()

{
	var numeroIngresado;
	contadorIntentos= contadorIntentos+1;
	console.log("el contador: "+contadorIntentos);
	document.getElementById('intentos').value=contadorIntentos;

	numeroIngresado=document.getElementById('numero').value;

	
	if (numeroIngresado==numeroSecreto) 
{
	alert("ganó");	
switch(contadorIntentos)
{
	case 1:
	alert("Usted es Psíquico");
	break;
	case 2:
	alert("Excelente percepción");
	break;
	case 3:
	alert("Esto es suerte");
	break;
	case 4:
	alert("Excelente técnica");
	break;
	case 5:
	alert("Usted está en la media");
	break;
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	alert("Falta técnica");
	break;
	default:
	alert("Afortunado en el amor");
	break;

}
}


	/*if (contadorIntentos>10) 
		{
			alert("Afortunado en el amor");
		}
			if (contadorIntentos>5&& contadorIntentos<11) 
			{
				alert("Falta técnica");
			}
				if (contadorIntentos==5) 
				{
					alert("Usted está en la media");
				}
					if (contadorIntentos==4) 
					{
						alert("Excelente técnica");
					}
						if (contadorIntentos==3) 
						{
							alert("Esto es suerte");

						}
							if (contadorIntentos==2) 
							{
								alert("Excelente percepción");

							}
								if (contadorIntentos==1) 
								{
									alert("Usted es Psíquico");
								}

	*/
	



	else
	{
		if (numeroSecreto>numeroIngresado) 
		{
			alert("te falta");
		}
		else
		{
			alert("te pasaste");
		}



	}




	






}
