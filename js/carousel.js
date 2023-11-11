document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.getElementById('carousel-container');
  const cards = Array.from(carouselContainer.querySelectorAll('.card'));
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  // Initialisation de l'index actuel à 0
  let currentIndex = 0;

  // Affiche la première carte et cacher les autres au chargement initial
  cards.forEach((card, index) => {
    card.style.display = index === currentIndex ? 'block' : 'none';
  });


  // Ajout des écouteurs d'événements pour les boutons 
  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPrevImage);

  // Fonction pour afficher img suivante 
  function showNextImage() {
    toggleCardDisplay(currentIndex, 'none');
    currentIndex = getNextIndex(currentIndex);
    toggleCardDisplay(currentIndex, 'block');
  }

  // Fonction pour afficher img précédente 
  function showPrevImage() {
    toggleCardDisplay(currentIndex, 'none');
    currentIndex = getPrevIndex(currentIndex);
    toggleCardDisplay(currentIndex, 'block');
  }
  // Fonction pour basculer l'affichage d'une carte 
  function toggleCardDisplay(index, displayValue) {
    cards[index].style.display = displayValue;
  }

  // Fonction pour obtenir l'index de la carte suivante 
  function getNextIndex(currentIndex) {
    let nextIndex = currentIndex + 1;
    return nextIndex === cards.length ? 0 : nextIndex;
  }

  // Fonction pour obtenir l'index de la carte précédente 
  function getPrevIndex(currentIndex) {
    let prevIndex = currentIndex - 1;
    return prevIndex < 0 ? cards.length - 1 : prevIndex;
  }

});
