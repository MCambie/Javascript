// function calculMoyenne(){
//       var nombreEntier = Number(prompt("Entrez un nombre entier"));
//       if (!Number.isInteger(nombreEntier)) {
//         alert("Erreur, ce n'est pas un nombre entier")
//         nombreEntier = Number(prompt("Entrez un nombre entier"));
//       }
//       else {
//         var sommeTotal=0;
//         while (nombreEntier>=0) {
//           sommeTotal+= nombreEntier;
//         }
//
//       }
//
//       }
//Cedric : function calculMoyenne() {
//         var sommeTotal = 0;
//         var sommeTotaltest = 0;
//         var message = "";
//         while (!Number.isInteger(nombre)) {
//           for (var i = 0; i < 3; i++) {
//             var string = prompt("Entrer un nombre entier !");
//             var nombre = Number(string);
//             // console.log(typeof nombre);
//             if (Number.isInteger(nombre)) {
//               // console.log("C'est un nombre");
//               if (parseInt(nombre) < 0) {
//                 sommeTotal += nombre;
//                 sommeDivision = sommeTotal / 3;
//                 // console.log("Plus petit que 0");
//                 // console.log(sommeTotal);
//                 message = sommeDivision;
//               } else {
//                 sommeTotal += nombre;
//                 message = sommeTotal;
//                 // console.log("Nombre entier");
//               }
//             } else {
//               a();
//             }
//           }
//         }
//         alert(message);
//       }
//       function a() {
//         alert("Recommencez, le nombre saisi n'est pas un entier !");
//       }
function calculMoyenne() {
        var sommeTotal = 0;
        var sommeTotaltest = 0;
        var message = "";
        while (!Number.isInteger(nombre)) {
          for (var i = 0; i < 3; i++) {
            var string = prompt("Entrer un nombre entier !");
            var nombre = Number(string);
            // console.log(typeof nombre);
            if (Number.isInteger(nombre)) {
              // console.log("C'est un nombre");
              if (parseInt(nombre) < 0) {
                sommeTotal += nombre;
                sommeDivision = sommeTotal / 3;
                // console.log("Plus petit que 0");
                // console.log(sommeTotal);
                message = sommeDivision;
              } else {
                sommeTotal += nombre;
                message = sommeTotal;
                // console.log("Nombre entier");
              }
            } else {
              a();
            }
          }
        }
        alert(message);
      }
      function a() {
        alert("Recommencez, le nombre saisi n'est pas un entier !");
      }
