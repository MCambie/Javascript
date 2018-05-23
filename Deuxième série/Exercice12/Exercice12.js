function conversionTemperature(){
	var choix =  prompt("Faites un choix entre 0 et 6"+"\n"+"0 Fin du programme"+"\n"+
"1 De Celsius vers Fahrenheit"+"\n"+"2 De Celsius vers Kelvin"+"\n"+"3 De Fahrenheit vers Celsius"+"\n"+
"4 De Fahrenheit vers Kelvin"+"\n"+"5 De Kelvin vers Celsius"+"\n"+"6 De Kelvin vers Fahrenheit");
	var temperature = prompt("entrez la température à convertir");
	var tempK = temperature;
	var tempC = temperature;
	var tempF = temperature;
	switch (choix) {

		case "0":
			alert("Fin du programme");
			break;

		case "1":
			tempF= (Number(tempC)* 9/5) + 32;
			alert(tempF+"°F");
			break;

		case "2":
			tempK= Number(tempC)+ 273.15;
			alert(tempK+"°K");
			break;

		case "3":
			tempC= (Number(tempF)- 32) / (9/5);
			alert(tempC+"°C");
			break;

		case "4":
			tempK= ((Number(tempF) - 32) * (5/9)) + 273.15;
			alert(tempK+"°K");
			break;

		case "5":
			tempC= Number(tempK) - 273,15;
			alert(tempC+"°C");
			break;

		case "6":
			tempF= (Number(tempK) * 9/5) - 459.67;
			alert(tempF+"°F");
			break;

		default:
				alert('Pardon,que voulez-vous?');
	}
}
