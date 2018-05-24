function calculIMC(){
	var poids = Number(prompt("Entrez votre poids"));
	var taille = Number(prompt("Entrez votre taille"));
	var calcul = poids/(taille*taille);
	var imc = calcul.toFixed(2);
	switch (true) {
		case (imc < 16.5):
			alert("Votre IMC est de "+imc+"\n"+ "Vous êtes en dénutrition ou famine");
			break;
		case (imc < 18.5):
			alert("Votre IMC est de "+imc+"\n"+ "Vous êtes maigre");
			break;
		case (imc < 25):
			alert("Votre IMC est de "+imc+"\n"+ "Vous êtes de corpulence normale");
			break;
		case (imc < 30):
			alert("Votre IMC est de "+imc+"\n"+ "Vous êtes en surpoids");
			break;
		case (imc < 35):
			alert("Votre IMC est de "+imc+"\n"+ "Vous êtes en obésité modéré");
			break;
		case (imc < 40):
			alert("Votre IMC est de "+imc+"\n"+ "Vous êtes en obésité sévère");
			break;
		case (imc > 40):
			alert("Votre IMC est de "+imc+"\n"+ "Vous êtes en obésité morbide");
			break;
		default:
			alert("Error");
		}

	}
