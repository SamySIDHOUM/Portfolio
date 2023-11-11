document.addEventListener('DOMContentLoaded', () => {
  // Sélectionner tous les boutons "En savoir plus"
  const enSavoirPlusBtns = document.querySelectorAll('.en-savoir-plus-btn');

  // Ajout d'un gestionnaire d'événements pour chaque bouton "En savoir plus"
  enSavoirPlusBtns.forEach(enSavoirPlusBtn => {
    enSavoirPlusBtn.addEventListener('click', (event) => {
      // Empêcher la propagation 
      event.stopPropagation();

      // Trouver les détails spécifiques liés à ce bouton
      const details = enSavoirPlusBtn.parentElement.querySelector('.details');

      // Afficher les détails
      details.style.display = 'flex';
    });
  });

  // Ajout d'un gestionnaire d'événements pour le clic en dehors des détails
  document.addEventListener('click', (event) => {
    // Vérifier si l'élément sur lequel on a cliqué n'est pas à l'intérieur des détails
    if (!event.target.closest('.details')) {
      // Cacher tous les détails
      enSavoirPlusBtns.forEach(enSavoirPlusBtn => {
        const details = enSavoirPlusBtn.parentElement.querySelector('.details');
        details.style.display = 'none';
      });
    }
  });
});
