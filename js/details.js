document.addEventListener('DOMContentLoaded', () => {
  const enSavoirPlusBtn = document.querySelector('.en-savoir-plus-btn');

  const details = document.querySelector('.details');

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
  enSavoirPlusBtn.addEventListener('click', () => {
  details.style.display = 'flex';
  });

  // Ajouter un événement "click" pour fermer les détails
  window.addEventListener("click", function(event) {
    // Vérifier si l'élément sur lequel on a cliqué est l'élément .details
    if (event.target == details) {
      details.style.display = "none";
    }
  });

});
