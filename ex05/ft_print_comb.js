function combinaisonChiffre() {
  var array=[]
 
  for (var i = 0; i <= 9; i++) {
    for (var j = i + 1; j <= 9; j++) {
      for (var k = j + 1; k <= 9; k++) {
          array+= [i] + [j] + [k] + ' .';
      }
    }
  }
  console.log(array);
 }
 
combinaisonChiffre();
 
 
