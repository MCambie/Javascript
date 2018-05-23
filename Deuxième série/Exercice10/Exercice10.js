function somme(){
    var result = 0;
    var yourNum = 0;
    for (var i = 1; i < 4; i++) {
        yourNum = Number(prompt("Entrez un nombre"));
        result = total + yourNum;
    }
    alert("La somme de vos 3 chiffres fait " + result);
}
