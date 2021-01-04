function jourActuelle() {
  var jourSemaine = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  var j = new Date();
  var jour = jourSemaine[j.getDay()];
  document.getElementById("text").innerHTML = jour;
}
