function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

/*if (edad>=13 && edad<=17) {
		
	}
else	{
	alert("No es adolecsente");
}*/
if (edad<13 || edad>17){
	alert("No es adolecsente")
}	
}

