document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const menuMobile = document.getElementById("menu-mobile");

    // Vérifier si toutes est obtenues avec succès
    if (menuIcon && mobileNav && menuMobile) {
        menuIcon.addEventListener("click", function () {
            // Alterne la classe "active" sur le menu mobile
            menuMobile.classList.toggle("active");
            // Affiche ou cache le menu 
            if (menuMobile.classList.contains("active")) {
                mobileNav.style.display = "flex";
            } else {
                mobileNav.style.display = "none";
            }
        });
    }
});
