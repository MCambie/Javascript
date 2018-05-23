function testWhile(){
      var chaine =  prompt("Entrez une chaine de caractère comprenant la lettre p");
      while (!chaine.includes("p")) {
              
              chaine =  prompt("Entrez une chaine de caractère comprenant la lettre p");
            }
      alert("\""+chaine+"\"");
    }
