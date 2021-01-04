function addition() {
  var nombre1 = parseFloat(document.getElementById("nb1").value);
  var nombre2 = parseFloat(document.getElementById("nb2").value);
  var resultat = nombre1 + nombre2;
  document.getElementById("resultat").value = resultat;
}
function soustraction() {
  var nombre1 = parseFloat(document.getElementById("nb1").value);
  var nombre2 = parseFloat(document.getElementById("nb2").value);
  resultat = nombre1 - nombre2;
  document.getElementById("resultat").value = resultat;
}
function produit() {
  var nombre1 = parseFloat(document.getElementById("nb1").value);
  var nombre2 = parseFloat(document.getElementById("nb2").value);
  resultat = nombre1 * nombre2;
  document.getElementById("resultat").value = resultat;
}
function division() {
  var nombre1 = parseFloat(document.getElementById("nb1").value);
  var nombre2 = parseFloat(document.getElementById("nb2").value);
  if (nombre2 == 0) {
    alert("le nombre2 doit etre différent de 0");
  } else {
    resultat = nombre1 / nombre2;
    document.getElementById("resultat").value = resultat;
  }
}
