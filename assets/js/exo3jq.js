$(function() {
  // On crée une valeur aléatoire entre 0 et 100
  var random = Math.floor(Math.random()*101);
  // On initialise le compteur de coups
  var count = 0;
    $('#submit').click(function() {
      //au clic, on récupère la saisie utilisateur et on la stocke.
    var test = $('#try').val();
    // On incrémente le compteur de 1
    count++;
    //Si les deux valeurs sont égales, on dit bravo et on donne la valeur du compteur
    if(test == random){
      alert('Correct ! Bravo, tu as trouvé en '+count+' tentatives !');
      //Si la saisie utilisateur est inférieure au nombre généré, on préviens l'utilisateur
    }else if (test<random) {
      alert('Loupé, ce que tu cherches est plus haut...');
      //Si la saisie utilisateur est supérieure au nombre généré, on préviens l'utilisateur
    }else if (test>random) {
      alert('Loupé, ce que tu cherches est plus bas...');
      //Si la saisie utilisateur n'est pas un nombre, on préviens l'utilisateur.
    }else{
      alert('Veuillez entrer un nombre !');
    }
  });
});
