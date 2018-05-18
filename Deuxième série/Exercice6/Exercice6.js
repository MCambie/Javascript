var tab=new Array();
tab[0]= -2 ;
tab[1]= 1;
tab[2]= 4;

function soustrait(x) {

  if (x>=0) {
    var result = x-2;


  } else {
    var result ="Nombre négatif";
  }
    return result;
}

function affiche() {
      alert(soustrait(tab[0]));
      alert(soustrait(tab[2]));
}
