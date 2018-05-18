
var b = 2;

function ex1(){
  alert("a = " + (a=b++));
  alert("b=2");
}
function ex2(){
  alert("a = " + (a=++b));
  alert("b=2");
}
function ex3(){
  alert("a = " + (a=b--));
  alert("b=2");
}
function ex4(){
  alert("a = " + (a=--b));
  alert("b=2");
}
function ex5(){
  alert("a = " + (a+=b++));
  alert("b=2");
}
function ex6(){
  alert("a = " + (a=1; a+=++b));
  alert("b=2");
}
function ex7(){
  alert("a = " + (a=1; a-=b++));
  alert("b=2");
}
function ex8(){
  alert("a = " + (a=1; a-=++b));
  alert("b=2");
}
function ex9(){
  alert("a = " + (a=1; a+=b--));
  alert("b=2");

}
function ex10(){
  alert("a = " + (a=1; a+=--b));
  alert("b=2");

}
