const downloadBtn = document.querySelector('.btn');

// Ajout d'un gestionnaire d'événements pour le clic sur le bouton Télécharger CV
downloadBtn.addEventListener('click', () => {
    // Redirige l'utilisateur vers le fichier 
    window.location.href = './assets/CV_Samy_SIDHOUM.pdf';
});
