document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-contact');

    // Ajoutez un gestionnaire d'événements pour la soumission du formulaire
    form.addEventListener('submit', function (event) {
        // Empêcher la soumission du formulaire par défaut
        event.preventDefault();

        // Valider tous les champs du formulaire
        if (validateForm()) {
            // Si le formulaire est valide soumettre
            form.submit();
        }
    });

    // Fonction de validation du formulaire
    function validateForm() {
        let isValid = true;

        // Supprimer les messages d'erreur
        clearErrorMessages();

        // Validation chaque champ 
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (firstname === '') {
            isValid = false;
            displayErrorMessage('firstname', 'Veuillez entrer votre nom.');
        }

        if (lastname === '') {
            isValid = false;
            displayErrorMessage('lastname', 'Veuillez entrer votre prénom.');
        }

        if (!isValidEmail(email)) {
            isValid = false;
            displayErrorMessage('email', 'Veuillez entrer une adresse e-mail valide.');
        }

        if (message === '') {
            isValid = false;
            displayErrorMessage('message', 'Veuillez entrer votre message.');
        }

        return isValid;
    }

    // Fonction de validation d'e-mail 
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Fonction pour afficher un message d'erreur à côté du champ spécifié
    function displayErrorMessage(id, message) {
        const inputElement = document.getElementById(id);
        const errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.innerText = message;
        inputElement.parentNode.appendChild(errorSpan);
    }

    // Fonction pour supprimer tous les messages d'erreur
    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(function (element) {
            element.remove();
        });
    }
});
