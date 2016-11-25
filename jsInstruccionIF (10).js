function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10

	var nota;

	nota=Math.floor((Math.random() * 10) + 1);
	console.log(nota);
	
	if (nota>=9) 
	{
		alert("EXCELENTE");
	}
		
	else
	{
			if (nota>=4) 
		{
			alert("APROBÓ");
		}//if (nota>=4)
		
		else
		
		{
			alert("Vamos la próxima se puede");
		}
	}

	
	

}//FIN DE LA FUNCIÓN