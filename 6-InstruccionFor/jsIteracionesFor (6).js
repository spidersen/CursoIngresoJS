function Mostrar()
{
	var cont=0;
	var importeVentas;
	var minimo;
	var maximo;
	

	while(cont<24)
	{
		console.log(cont);
		cont++;
		importeVentas=prompt("ingrese la venta diaria");
		importeVentas=parseInt(importeVentas);

		while(importeVentas<0)
		{
			importeVentas=prompt("re-ingrese la venta diaria");
			importeVentas=parseInt(importeVentas);
		}
		//seguro que es positivo

			if(cont==1)//primera vez
		{
			maximo=importeVentas;
			minimo=importeVentas;
		}
			else
			{
				if(importeVentas<minimo)
				{
					minimo=importeVentas;
				}
			
		
				if(importeVentas>maximo)
				{
					maximo=importeVentas;
				}
	
			}

		console.log("El máximo es : "+ maximo);
		console.log("El mínimo es : "+ minimo);


	}
	



}//FIN DE LA FUNCIÓN