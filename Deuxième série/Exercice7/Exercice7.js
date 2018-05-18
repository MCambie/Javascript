function faireChoix(){
  var choix =  prompt("Faites un choix entre 1 et 3");
  switch (choix) {
    case "1":
      alert('Merci');

      break;
    case "2":
      alert('Bonjour');

        break;
      case "3":
        alert('Au revoir');

          break;
    default:
        alert('Pardon,que voulez-vous?');
  }
}
