function surfaceRectangle() {
      var largeur = Number(prompt("largeur"));
      console.log(typeof largeur);
      var longueur = Number(prompt("longueur"));
      alert("L\'aire du rectangle est de " + largeur*longueur+"cm²");
}
function periRectangle() {
    var largeur = Number(prompt("largeur"));
    var longueur = Number(prompt("longueur"));
    alert("Le périmètre du rectangle est de " + (largeur+longueur)*2 + "cm");

}
